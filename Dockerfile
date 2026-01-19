# --- STAGE 1: Build ---
# Updated from 18.13.0 to 20-alpine to meet Next.js requirements
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Declare the Build Argument (passed from GitHub Actions)
ARG VITE_BASE_URL

# Fix the .env syntax: Added "=" and used a single ">" to overwrite/create
# Note: Next.js usually requires NEXT_PUBLIC_ prefix for client-side variables, 
# but we will keep VITE_BASE_URL if your code is configured to use it.
RUN echo "VITE_BASE_URL=${VITE_BASE_URL}" > .env

# Run the build command
RUN npm run build

# --- STAGE 2: Serve with Nginx ---
FROM nginx:1.25-alpine

# IMPORTANT: Next.js static export creates an "out" folder by default.
# Your original file used "dist" (which is common for Vite, but not Next.js).
# Ensure your next.config.js has: output: 'export'
COPY --from=builder /app/out /usr/share/nginx/html

# Copy your custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]