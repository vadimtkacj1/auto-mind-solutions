import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'AUTO MIND STUDIO - עיצוב אתרים, SEO ופיתוח דיגיטלי';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'Noto Sans Hebrew',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              letterSpacing: '-0.02em',
              textShadow: '0 4px 8px rgba(0,0,0,0.3)',
            }}
          >
            AUTO MIND STUDIO
          </div>
          <div
            style={{
              fontSize: 36,
              fontWeight: 500,
              opacity: 0.95,
              maxWidth: '900px',
            }}
          >
            עיצוב אתרים, SEO ופיתוח דיגיטלי מוביל בישראל
          </div>
          <div
            style={{
              fontSize: 28,
              opacity: 0.85,
              marginTop: '20px',
            }}
          >
            React • Next.js • TypeScript
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
