#!/bin/bash

# Docker Cleanup Script
# Cleans up old images, containers, volumes, and cache
# Usage: ./scripts/docker-cleanup.sh

set -e

echo "🧹 Docker Cleanup Script"
echo "======================="
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

# Function to get size
get_size() {
    docker system df | grep "$1" | awk '{print $4}'
}

echo -e "${BLUE}Current Docker disk usage:${NC}"
docker system df
echo ""

# Ask for confirmation
read -p "Do you want to proceed with cleanup? (y/N) " -n 1 -r
echo ""
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cleanup cancelled."
    exit 0
fi

echo ""
echo -e "${YELLOW}Starting cleanup...${NC}"
echo ""

# Stop all running containers (except production)
echo -e "${BLUE}1. Stopping non-production containers...${NC}"
CONTAINERS=$(docker ps -q --filter "name=^(?!my-front)" 2>/dev/null || true)
if [ -n "$CONTAINERS" ]; then
    docker stop $CONTAINERS
    echo -e "${GREEN}✓ Stopped containers${NC}"
else
    echo -e "${YELLOW}⚠ No containers to stop${NC}"
fi
echo ""

# Remove stopped containers
echo -e "${BLUE}2. Removing stopped containers...${NC}"
REMOVED=$(docker container prune -f 2>&1 | grep -o '[0-9]* container' || echo "0 container")
echo -e "${GREEN}✓ Removed ${REMOVED}s${NC}"
echo ""

# Remove dangling images
echo -e "${BLUE}3. Removing dangling images...${NC}"
REMOVED=$(docker image prune -f 2>&1 | grep -o 'Total reclaimed space: [^)]*' || echo "Total reclaimed space: 0B")
echo -e "${GREEN}✓ ${REMOVED}${NC}"
echo ""

# Remove old images (keep last 3 of auto-mind-solutions)
echo -e "${BLUE}4. Removing old auto-mind-solutions images...${NC}"
OLD_IMAGES=$(docker images auto-mind-solutions --format "{{.ID}}" | tail -n +4)
if [ -n "$OLD_IMAGES" ]; then
    echo "$OLD_IMAGES" | xargs -r docker rmi -f 2>/dev/null || true
    echo -e "${GREEN}✓ Removed old images${NC}"
else
    echo -e "${YELLOW}⚠ No old images to remove${NC}"
fi
echo ""

# Remove unused volumes
echo -e "${BLUE}5. Removing unused volumes...${NC}"
REMOVED=$(docker volume prune -f 2>&1 | grep -o 'Total reclaimed space: [^)]*' || echo "Total reclaimed space: 0B")
echo -e "${GREEN}✓ ${REMOVED}${NC}"
echo ""

# Remove build cache (older than 24h)
echo -e "${BLUE}6. Removing old build cache...${NC}"
REMOVED=$(docker builder prune -f --filter "until=24h" 2>&1 | grep -o 'Total: [^)]*' || echo "Total: 0B")
echo -e "${GREEN}✓ ${REMOVED}${NC}"
echo ""

# Optional: Full system cleanup (commented out for safety)
# echo -e "${RED}⚠ Full system cleanup (uncomment to enable)${NC}"
# docker system prune -a -f --volumes

echo ""
echo -e "${GREEN}✓ Cleanup completed!${NC}"
echo ""

echo -e "${BLUE}New Docker disk usage:${NC}"
docker system df
echo ""

# Show production container status
echo -e "${BLUE}Production container status:${NC}"
docker ps --filter "name=my-front" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo ""

echo -e "${GREEN}Done! 🎉${NC}"
