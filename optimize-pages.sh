#!/bin/bash

# Optimize all service pages by adding dynamic imports

find app -name "page.tsx" -type f | while read file; do
  # Skip if already optimized
  if grep -q "^import dynamic from \"next/dynamic\"" "$file"; then
    echo "✓ Already optimized: $file"
    continue
  fi

  # Skip if no Header import
  if ! grep -q "import Header from" "$file"; then
    echo "⊘ No Header: $file"
    continue
  fi

  echo "→ Optimizing: $file"

  # Backup
  cp "$file" "$file.backup"

  # Add dynamic import after Metadata import
  sed -i '/import type { Metadata } from "next";/a import dynamic from "next/dynamic";' "$file"

  # Convert Header import
  sed -i 's/^import Header from.*$/const Header = dynamic(() => import("@\/src\/components\/Header\/Header"), { ssr: false });/' "$file"

  # Convert Footer import
  sed -i 's/^import { Footer } from.*$/const Footer = dynamic(() => import("@\/src\/components\/Footer\/Footer").then(m => ({ default: m.Footer })), { ssr: false });/' "$file"

  echo "✓ Done: $file"
done

echo "=== Optimization complete ==="
