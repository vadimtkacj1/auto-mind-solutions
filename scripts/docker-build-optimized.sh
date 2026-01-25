#!/bin/bash

# Optimized Docker Build Script
# Usage: ./scripts/docker-build-optimized.sh

set -e

echo "🐳 Starting optimized Docker build..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Variables
IMAGE_NAME="auto-mind-solutions"
TAG="${1:-latest}"
BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ')
VCS_REF=$(git rev-parse --short HEAD 2>/dev/null || echo "unknown")

echo -e "${BLUE}Image:${NC} ${IMAGE_NAME}:${TAG}"
echo -e "${BLUE}Date:${NC} ${BUILD_DATE}"
echo -e "${BLUE}Commit:${NC} ${VCS_REF}"
echo ""

# Enable BuildKit
export DOCKER_BUILDKIT=1

# Check if previous image exists for caching
if docker image inspect ${IMAGE_NAME}:latest >/dev/null 2>&1; then
    echo -e "${GREEN}✓${NC} Found previous image for caching"
    CACHE_FROM="--cache-from ${IMAGE_NAME}:latest"
else
    echo -e "${YELLOW}⚠${NC} No previous image found, building from scratch"
    CACHE_FROM=""
fi

# Build with optimizations
echo -e "${BLUE}Building Docker image...${NC}"
time docker build \
    --tag ${IMAGE_NAME}:${TAG} \
    --tag ${IMAGE_NAME}:${VCS_REF} \
    --build-arg BUILDKIT_INLINE_CACHE=1 \
    --build-arg BUILD_DATE="${BUILD_DATE}" \
    --build-arg VCS_REF="${VCS_REF}" \
    --label "org.opencontainers.image.created=${BUILD_DATE}" \
    --label "org.opencontainers.image.revision=${VCS_REF}" \
    ${CACHE_FROM} \
    .

echo ""
echo -e "${GREEN}✓ Build completed successfully!${NC}"
echo ""

# Show image info
echo -e "${BLUE}Image details:${NC}"
docker images ${IMAGE_NAME} --format "table {{.Repository}}\t{{.Tag}}\t{{.Size}}\t{{.CreatedAt}}"

# Show image layers
echo ""
echo -e "${BLUE}Image layers:${NC}"
docker history ${IMAGE_NAME}:${TAG} --no-trunc --format "table {{.CreatedBy}}\t{{.Size}}"

# Security scan (if available)
if command -v trivy &> /dev/null; then
    echo ""
    echo -e "${BLUE}Running security scan...${NC}"
    trivy image --severity HIGH,CRITICAL ${IMAGE_NAME}:${TAG}
fi

echo ""
echo -e "${GREEN}✓ Done!${NC}"
echo ""
echo "To run the container:"
echo "  docker run -d -p 80:80 --name my-front ${IMAGE_NAME}:${TAG}"
echo ""
echo "To push to registry:"
echo "  docker push ${IMAGE_NAME}:${TAG}"
