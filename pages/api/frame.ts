import { NextApiRequest, NextApiResponse } from 'next';

// Simulasi database sederhana untuk menyimpan state
let gameState = {
  players: new Map<string, { score: number; games: number }>(),
  currentChallenge: "Tebak angka 1-10",
  leaderboard: [] as Array<{ name: string; score: number }>
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { action, inputText, fid } = req.body;
    
    // Handle berbagai action
    switch (action) {
      case 'start_game':
        return handleStartGame(req, res);
      case 'stats':
        return handleStats(req, res);
      case 'challenge':
        return handleChallenge(req, res);
      case 'leaderboard':
        return handleLeaderboard(req, res);
      case 'submit_guess':
        return handleSubmitGuess(req, res, inputText);
      default:
        return handleDefault(req, res);
    }
  }

  // GET request untuk initial frame
  return handleDefault(req, res);
}

function handleDefault(req: NextApiRequest, res: NextApiResponse) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Test Frame Farcaster</title>
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://testsaja-pages.vercel.app/api/og?title=Selamat Datang di Game Frame!",
          "buttons": [
            {"title": "🎲 Mulai Game", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=start_game"}},
            {"title": "📊 Lihat Statistik", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=stats"}},
            {"title": "🎯 Tantangan Baru", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=challenge"}},
            {"title": "🏆 Leaderboard", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=leaderboard"}}
          ],
          "input": {"text": "Masukkan nama Anda"},
          "postUrl": "https://testsaja-pages.vercel.app/api/frame"
        }' />
      </head>
      <body>
        <h1>Selamat Datang di Game Frame!</h1>
        <p>Pilih salah satu tombol di atas untuk mulai bermain.</p>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

function handleStartGame(req: NextApiRequest, res: NextApiResponse) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Mulai Game</title>
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://testsaja-pages.vercel.app/api/og?title=Game Dimulai!&subtitle=Tebak angka 1-10",
          "buttons": [
            {"title": "1-3", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=submit_guess&guess=1-3"}},
            {"title": "4-6", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=submit_guess&guess=4-6"}},
            {"title": "7-10", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=submit_guess&guess=7-10"}},
            {"title": "🏠 Kembali", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame"}}
          ],
          "postUrl": "https://testsaja-pages.vercel.app/api/frame"
        }' />
      </head>
      <body>
        <h1>Game Dimulai!</h1>
        <p>Tebak angka 1-10 untuk mendapatkan poin!</p>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

function handleStats(req: NextApiRequest, res: NextApiResponse) {
  const totalPlayers = gameState.players.size;
  const totalGames = Array.from(gameState.players.values()).reduce((sum, player) => sum + player.games, 0);
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Statistik</title>
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://testsaja-pages.vercel.app/api/og?title=Statistik Game&subtitle=Total Players: ${totalPlayers} | Total Games: ${totalGames}",
          "buttons": [
            {"title": "🏠 Kembali", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame"}},
            {"title": "🔄 Refresh", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=stats"}}
          ],
          "postUrl": "https://testsaja-pages.vercel.app/api/frame"
        }' />
      </head>
      <body>
        <h1>Statistik Game</h1>
        <p>Total Players: ${totalPlayers}</p>
        <p>Total Games: ${totalGames}</p>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

function handleChallenge(req: NextApiRequest, res: NextApiResponse) {
  const challenges = [
    "Tebak warna: Merah, Biru, atau Hijau?",
    "Pilih hewan: Kucing, Anjing, atau Burung?",
    "Pilih makanan: Pizza, Burger, atau Sushi?"
  ];
  
  const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
  gameState.currentChallenge = randomChallenge;
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Tantangan Baru</title>
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://testsaja-pages.vercel.app/api/og?title=Tantangan Baru!&subtitle=${encodeURIComponent(randomChallenge)}",
          "buttons": [
            {"title": "🎲 Terima Tantangan", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=start_game"}},
            {"title": "🏠 Kembali", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame"}}
          ],
          "postUrl": "https://testsaja-pages.vercel.app/api/frame"
        }' />
      </head>
      <body>
        <h1>Tantangan Baru!</h1>
        <p>${randomChallenge}</p>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

function handleLeaderboard(req: NextApiRequest, res: NextApiResponse) {
  // Update leaderboard
  gameState.leaderboard = Array.from(gameState.players.entries())
    .map(([name, data]) => ({ name, score: data.score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);
  
  const leaderboardText = gameState.leaderboard.length > 0 
    ? gameState.leaderboard.map((player, index) => `${index + 1}. ${player.name}: ${player.score}`).join(' | ')
    : "Belum ada data";
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Leaderboard</title>
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://testsaja-pages.vercel.app/api/og?title=🏆 Leaderboard&subtitle=${encodeURIComponent(leaderboardText)}",
          "buttons": [
            {"title": "🏠 Kembali", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame"}},
            {"title": "🔄 Refresh", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=leaderboard"}}
          ],
          "postUrl": "https://testsaja-pages.vercel.app/api/frame"
        }' />
      </head>
      <body>
        <h1>🏆 Leaderboard</h1>
        <p>${leaderboardText}</p>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

function handleSubmitGuess(req: NextApiRequest, res: NextApiResponse, inputText?: string) {
  const { guess } = req.query;
  const playerName = inputText || "Anonymous";
  
  // Simulasi game logic
  const correctAnswer = Math.floor(Math.random() * 10) + 1;
  let isCorrect = false;
  let message = "";
  
  if (guess === "1-3" && correctAnswer >= 1 && correctAnswer <= 3) isCorrect = true;
  else if (guess === "4-6" && correctAnswer >= 4 && correctAnswer <= 6) isCorrect = true;
  else if (guess === "7-10" && correctAnswer >= 7 && correctAnswer <= 10) isCorrect = true;
  
  if (isCorrect) {
    message = "🎉 Benar! +10 poin!";
    const currentPlayer = gameState.players.get(playerName) || { score: 0, games: 0 };
    gameState.players.set(playerName, {
      score: currentPlayer.score + 10,
      games: currentPlayer.games + 1
    });
  } else {
    message = `❌ Salah! Jawaban: ${correctAnswer}`;
    const currentPlayer = gameState.players.get(playerName) || { score: 0, games: 0 };
    gameState.players.set(playerName, {
      score: currentPlayer.score,
      games: currentPlayer.games + 1
    });
  }
  
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hasil Game</title>
        <meta property="fc:frame" content='{
          "version": "vNext",
          "imageUrl": "https://testsaja-pages.vercel.app/api/og?title=Hasil Game&subtitle=${encodeURIComponent(message)}",
          "buttons": [
            {"title": "🎲 Main Lagi", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=start_game"}},
            {"title": "🏆 Lihat Score", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame?action=leaderboard"}},
            {"title": "🏠 Menu Utama", "action": {"type": "post", "target": "https://testsaja-pages.vercel.app/api/frame"}}
          ],
          "postUrl": "https://testsaja-pages.vercel.app/api/frame"
        }' />
      </head>
      <body>
        <h1>Hasil Game</h1>
        <p>${message}</p>
        <p>Player: ${playerName}</p>
      </body>
    </html>
  `;
  
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}