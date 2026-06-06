'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { ProjectGalleryItem } from '@/types/portfolio';

interface ProjectSliderProps {
  items: ProjectGalleryItem[];
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

export function ProjectSlider({ items }: ProjectSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const slidePrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  if (!items || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-950/40 backdrop-blur-md shadow-2xl group flex flex-col justify-end">
      {/* Slider main body */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full h-full flex items-center justify-center"
          >
            {currentItem.type === 'video' ? (
              <video
                src={currentItem.url}
                controls
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-contain"
                aria-label={currentItem.caption || 'Project video demonstration'}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={currentItem.url}
                alt={currentItem.caption || 'Project screenshot'}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation arrows */}
      {items.length > 1 && (
        <>
          <button
            onClick={slidePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900/60 hover:bg-zinc-900/90 text-white border border-white/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 shadow-lg pointer-events-auto"
            aria-label="Previous slide"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button
            onClick={slideNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center rounded-full bg-zinc-900/60 hover:bg-zinc-900/90 text-white border border-white/5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 shadow-lg pointer-events-auto"
            aria-label="Next slide"
            type="button"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </>
      )}

      {/* Caption overlay */}
      {currentItem.caption && (
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-6 z-10 select-none">
          <p className="text-zinc-200 text-sm font-medium leading-relaxed max-w-[85%]">
            {currentItem.caption}
          </p>
        </div>
      )}

      {/* Smart windowed dot indicator */}
      {items.length > 1 && (
        <SmartDots
          total={items.length}
          current={currentIndex}
          onSelect={(idx) => {
            setDirection(idx > currentIndex ? 1 : -1);
            setCurrentIndex(idx);
          }}
        />
      )}
    </div>
  );
}

/* ─── Smart windowed dot indicator ─────────────────────────────────────── */

const MAX_VISIBLE = 5; // always odd — active dot stays centred

function SmartDots({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (idx: number) => void;
}) {
  // ≤ 5 images → classic pill dots
  if (total <= MAX_VISIBLE) {
    return (
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/5 select-none">
        {Array.from({ length: total }).map((_, idx) => (
          <motion.button
            key={idx}
            onClick={() => onSelect(idx)}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            animate={{
              width: idx === current ? 16 : 8,
              height: 8,
              backgroundColor: idx === current ? 'rgb(129 140 248)' : 'rgb(113 113 122)',
              opacity: idx === current ? 1 : 0.6,
            }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            style={{ borderRadius: 9999, border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0 }}
          />
        ))}
      </div>
    );
  }

  // > 5 images → sliding window of MAX_VISIBLE dots centred on `current`
  const half = Math.floor(MAX_VISIBLE / 2);
  let start = current - half;
  let end = current + half;

  if (start < 0)      { start = 0; end = MAX_VISIBLE - 1; }
  if (end >= total)   { end = total - 1; start = total - MAX_VISIBLE; }

  const windowIndices = Array.from({ length: MAX_VISIBLE }, (_, i) => start + i);

  // Dot size/opacity degrades by distance from the active index
  const dotAnimate = (idx: number) => {
    const dist = Math.abs(idx - current);
    if (dist === 0) return { width: 16, height: 8,  backgroundColor: 'rgb(129 140 248)', opacity: 1 };
    if (dist === 1) return { width: 8,  height: 8,  backgroundColor: 'rgb(113 113 122)', opacity: 0.8 };
    return               { width: 6,  height: 6,  backgroundColor: 'rgb(82 82 91)',    opacity: 0.45 };
  };

  return (
    <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/5 select-none">
      {/* Left overflow chevron */}
      {start > 0 && (
        <span className="text-zinc-500 text-[10px] leading-none">‹</span>
      )}

      {windowIndices.map((idx) => (
        <motion.button
          key={idx}
          onClick={() => onSelect(idx)}
          type="button"
          aria-label={`Go to slide ${idx + 1}`}
          animate={dotAnimate(idx)}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          style={{ borderRadius: 9999, border: 'none', padding: 0, cursor: 'pointer', flexShrink: 0 }}
        />
      ))}

      {/* Right overflow chevron */}
      {end < total - 1 && (
        <span className="text-zinc-500 text-[10px] leading-none">›</span>
      )}

      {/* Slide counter e.g. "7 / 20" */}
      <span className="ml-1.5 text-[10px] font-medium text-zinc-400 tabular-nums leading-none">
        {current + 1}/{total}
      </span>
    </div>
  );
}
