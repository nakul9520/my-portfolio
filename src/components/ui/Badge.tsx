import type { CSSProperties } from "react";

interface BadgeProps {
  children: React.ReactNode;
  /** Semantic variant — drives defaults when no color is provided */
  variant?: "accent" | "neutral" | "success";
  /**
   * Optional color string (hex, hsl, rgb, named CSS color).
   * When provided it tints the chip background and border using that color
   * with low opacity, overriding the variant color.
   * Example: color="#3b82f6" or color="hsl(265 75% 55%)"
   */
  color?: string;
  className?: string;
}

/**
 * Glassmorphism chip used site-wide for tech tags, skill labels, and status badges.
 * Accepts an optional `color` to tint the chip with any brand/tech color.
 */
export function Badge({
  children,
  variant = "neutral",
  color,
  className = "",
}: BadgeProps) {
  // Base class always applied — provides shape, font, blur, transition
  let baseClass = "badge";

  // Inline style — only set when caller passes an explicit color
  let inlineStyle: CSSProperties | undefined;

  if (color) {
    // Use the provided color to tint the chip glass
    inlineStyle = {
      // translucent tinted background  (9 % of the brand color)
      background: `color-mix(in srgb, ${color} 9%, transparent)`,
      // hairline border — 20 % of the brand color
      borderColor: `color-mix(in srgb, ${color} 22%, transparent)`,
      // text at the brand color (most tech brand colors are vibrant enough)
      color: color,
    };
  } else {
    // Fall back to variant CSS class
    if (variant === "neutral") baseClass += " badge-neutral";
    else if (variant === "success") baseClass += " badge-success";
    // variant="accent" uses the base .badge styles (purple)
  }

  return (
    <span
      className={`${baseClass} ${className}`.trim()}
      style={inlineStyle}
    >
      {children}
    </span>
  );
}
