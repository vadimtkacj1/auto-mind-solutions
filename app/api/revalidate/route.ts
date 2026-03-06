import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

/**
 * API route for on-demand revalidation
 * Usage: POST /api/revalidate?path=/&secret=YOUR_SECRET
 */
export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const path = searchParams.get('path');
  const secret = searchParams.get('secret');

  // Validate secret token
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: 'Invalid secret' },
      { status: 401 }
    );
  }

  // Validate path
  if (!path) {
    return NextResponse.json(
      { message: 'Path is required' },
      { status: 400 }
    );
  }

  try {
    revalidatePath(path);
    return NextResponse.json(
      { revalidated: true, path, now: Date.now() },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    );
  }
}
