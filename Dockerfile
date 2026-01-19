# --- STAGE 1: Build ---
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build Arguments
ARG VITE_BASE_URL
ENV VITE_BASE_URL=${VITE_BASE_URL}
ENV NEXT_PUBLIC_API_URL=${VITE_BASE_URL}

# Run the build
RUN npm run build

# --- STAGE 2: Runner ---
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Force Next.js to run on port 80 internally
ENV PORT=80
ENV HOSTNAME="0.0.0.0"

# Copy only necessary files for the standalone server
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 80

# The 'standalone' mode creates a server.js file to start the app
CMD ["node", "server.js"]