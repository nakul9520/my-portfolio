# ─────────────────────────────────────────
# STAGE 1: Dependencies
# ─────────────────────────────────────────
FROM node:20-alpine AS deps

# Why alpine? Lightweight version of Linux (~5MB vs ~900MB)
WORKDIR /app

# Copy only package files first (Docker caching optimization)
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci

# ─────────────────────────────────────────
# STAGE 2: Builder
# ─────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependencies from previous stage
COPY --from=deps /app/node_modules ./node_modules

# Copy all project files
COPY . .

# Build the Next.js app
# Note: .env variables needed at build time should be passed as build args
RUN npm run build

# ─────────────────────────────────────────
# STAGE 3: Runner (Production image)
# ─────────────────────────────────────────
FROM node:20-alpine AS runner

WORKDIR /app

# Set to production
ENV NODE_ENV=production

# Create a non-root user for security (best practice)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy only what's needed to run the app (not source code!)
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Give ownership to our non-root user
RUN chown -R nextjs:nodejs /app

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the app
CMD ["node", "server.js"]
