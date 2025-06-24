import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Game Frame Farcaster - Game Interaktif</title>
        <meta name="description" content="Frame Farcaster interaktif dengan game tebak angka dan leaderboard" />
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://bismillah-ivbw.vercel.app/api/og?title=Selamat Datang di Game Frame!&subtitle=Pilih salah satu tombol untuk mulai bermain",
          "buttons": [
            {"title": "🎲 Mulai Game", "action": {"type": "post", "target": "https://bismillah-ivbw.vercel.app/api/frame?action=start_game"}},
            {"title": "📊 Lihat Statistik", "action": {"type": "post", "target": "https://bismillah-ivbw.vercel.app/api/frame?action=stats"}},
            {"title": "🎯 Tantangan Baru", "action": {"type": "post", "target": "https://bismillah-ivbw.vercel.app/api/frame?action=challenge"}},
            {"title": "🏆 Leaderboard", "action": {"type": "post", "target": "https://bismillah-ivbw.vercel.app/api/frame?action=leaderboard"}}
          ],
          "input": {"text": "Masukkan nama Anda"},
          "postUrl": "https://bismillah-ivbw.vercel.app/api/frame"
        }' />
        <meta property="og:title" content="Game Frame Farcaster - Game Interaktif" />
        <meta property="og:description" content="Frame Farcaster interaktif dengan game tebak angka dan leaderboard" />
        <meta property="og:image" content="https://bismillah-ivbw.vercel.app/api/og?title=Selamat Datang di Game Frame!" />
        <meta property="og:url" content="https://bismillah-ivbw.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Game Frame Farcaster - Game Interaktif" />
        <meta name="twitter:description" content="Frame Farcaster interaktif dengan game tebak angka dan leaderboard" />
        <meta name="twitter:image" content="https://bismillah-ivbw.vercel.app/api/og?title=Selamat Datang di Game Frame!" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center text-white p-8">
          <div className="mb-8">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
              🎮 Game Frame Farcaster
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Frame interaktif dengan game tebak angka, statistik, dan leaderboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🎲 Game Tebak Angka</h3>
              <p className="text-gray-300 mb-4">
                Tebak angka 1-10 dan dapatkan poin! Semakin banyak bermain, semakin tinggi skor Anda.
              </p>
              <div className="text-sm text-gray-400">
                • Pilih range angka (1-3, 4-6, 7-10)<br/>
                • Jawaban benar = +10 poin<br/>
                • Lihat leaderboard untuk kompetisi
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">🏆 Fitur Interaktif</h3>
              <p className="text-gray-300 mb-4">
                Frame ini memiliki berbagai fitur yang bisa Anda coba langsung di Warpcast.
              </p>
              <div className="text-sm text-gray-400">
                • 4 tombol interaktif<br/>
                • Input text untuk nama<br/>
                • Statistik real-time<br/>
                • Leaderboard dinamis
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <h3 className="text-2xl font-bold mb-4">🚀 Cara Menggunakan</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="text-center">
                <div className="text-4xl mb-2">1️⃣</div>
                <h4 className="font-bold mb-2">Share URL</h4>
                <p className="text-sm text-gray-300">
                  Share URL ini di Warpcast atau Farcaster
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">2️⃣</div>
                <h4 className="font-bold mb-2">Interaksi</h4>
                <p className="text-sm text-gray-300">
                  Klik tombol dan input nama untuk bermain
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">3️⃣</div>
                <h4 className="font-bold mb-2">Kompetisi</h4>
                <p className="text-sm text-gray-300">
                  Lihat leaderboard dan bersaing dengan teman
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 mb-4">
              Frame ini menggunakan Next.js Pages Router dengan API routes untuk interaksi dinamis
            </p>
            <div className="flex justify-center gap-4 text-sm text-gray-500">
              <span>✅ Meta tag fc:frame</span>
              <span>✅ Well-known JSON</span>
              <span>✅ API Routes</span>
              <span>✅ OG Images</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}