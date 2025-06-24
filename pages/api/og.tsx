import { NextApiRequest, NextApiResponse } from 'next';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { searchParams } = new URL(req.url!);
    const title = searchParams.get('title') || 'Test Frame Farcaster';
    const subtitle = searchParams.get('subtitle') || 'Frame interaktif untuk testing';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#1a1a1a',
            backgroundImage: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            padding: '40px',
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '30px',
            }}
          >
            <div
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#ff6b6b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '30px',
                marginRight: '20px',
              }}
            >
              🎮
            </div>
            <div>
              <h1
                style={{
                  fontSize: '48px',
                  fontWeight: 'bold',
                  margin: '0',
                  textAlign: 'center',
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {title}
              </h1>
            </div>
          </div>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '24px',
              margin: '0',
              textAlign: 'center',
              opacity: 0.9,
              maxWidth: '600px',
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </p>

          {/* Decorative elements */}
          <div
            style={{
              display: 'flex',
              gap: '20px',
              marginTop: '40px',
            }}
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#ff6b6b',
                animation: 'pulse 2s infinite',
              }}
            />
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#4ecdc4',
                animation: 'pulse 2s infinite 0.5s',
              }}
            />
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: '#45b7d1',
                animation: 'pulse 2s infinite 1s',
              }}
            />
          </div>

          {/* Footer */}
          <div
            style={{
              position: 'absolute',
              bottom: '40px',
              fontSize: '18px',
              opacity: 0.7,
            }}
          >
            Powered by Next.js & Farcaster
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}