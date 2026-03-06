#!/bin/bash

# Docker Start Script
# This script builds and starts the Docker containers

echo "🐳 Starting Docker deployment..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  .env file not found. Creating from .env.docker.example..."
    cp .env.docker.example .env
    echo "⚠️  Please edit .env file with your configuration!"
    exit 1
fi

# Build the Docker image
echo "📦 Building Docker image..."
docker build -t auto-mind-solutions:latest \
    --build-arg VITE_BASE_URL=${NEXT_PUBLIC_SITE_URL:-http://localhost} \
    --build-arg NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL:-http://localhost} \
    .

if [ $? -ne 0 ]; then
    echo "❌ Docker build failed!"
    exit 1
fi

echo "✅ Docker image built successfully!"

# Start the containers
echo "🚀 Starting containers..."
docker compose up -d

if [ $? -ne 0 ]; then
    echo "❌ Failed to start containers!"
    exit 1
fi

echo "✅ Containers started successfully!"
echo ""
echo "📊 Container status:"
docker compose ps

echo ""
echo "📝 View logs with: docker compose logs -f"
echo "🛑 Stop containers with: docker compose down"
