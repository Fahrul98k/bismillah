import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Meta tag untuk Farcaster Frame */}
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://testsaja-pages.vercel.app/api/og?title=Selamat Datang di Game Frame!&subtitle=Pilih salah satu tombol untuk mulai bermain",
          "buttons": [
            {"title": "🎲 Mulai Game", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=start_game"}},
            {"title": "📊 Lihat Statistik", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=stats"}},
            {"title": "🎯 Tantangan Baru", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=challenge"}},
            {"title": "🏆 Leaderboard", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=leaderboard"}}
          ],
          "input": {"text": "Masukkan nama Anda"},
          "postUrl": "https://testsaja-pages.vercel.app/api/frame"
        }' />
        
        {/* Open Graph meta tags */}
        <meta property="og:title" content="Test Frame Farcaster - Game Interaktif" />
        <meta property="og:description" content="Frame Farcaster interaktif dengan game tebak angka dan leaderboard" />
        <meta property="og:image" content="https://testsaja-pages.vercel.app/api/og?title=Selamat Datang di Game Frame!" />
        <meta property="og:url" content="https://testsaja-pages.vercel.app" />
        <meta property="og:type" content="website" />
        
        {/* Twitter meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Test Frame Farcaster - Game Interaktif" />
        <meta name="twitter:description" content="Frame Farcaster interaktif dengan game tebak angka dan leaderboard" />
        <meta name="twitter:image" content="https://testsaja-pages.vercel.app/api/og?title=Selamat Datang di Game Frame!" />
        
        {/* Additional meta tags */}
        <meta name="description" content="Frame Farcaster interaktif dengan game tebak angka dan leaderboard" />
        <meta name="keywords" content="farcaster, frame, game, interactive, nextjs" />
        <meta name="author" content="Test Frame Developer" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}