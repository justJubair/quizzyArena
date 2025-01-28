import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Copy, Crown, UserPlus } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const API_URL = "https://quizzy-arena-backend.vercel.app/api";

const LobbyPage = () => {
  const [nickname, setNickname] = useState("");
  const [gameCode, setGameCode] = useState("");
  const [isHost, setIsHost] = useState(false);
  const [copied, setCopied] = useState(false);
  const [players, setPlayers] = useState<
    { id: number; nickname: string; score: number; isHost: boolean }[]
  >([]);
  const [showJoinForm, setShowJoinForm] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Poll for game updates
  useEffect(() => {
    if (gameCode) {
      const interval = setInterval(async () => {
        try {
          const response = await fetch(`${API_URL}/games/${gameCode}`);
          const data = await response.json();

          if (data.error) {
            // Game was deleted or expired
            handleGameEnd();
            return;
          }

          setPlayers(data.game.players);

          // Redirect to game page if game started
          if (data.game.status === "playing") {
            window.location.href = "/game";
          }
        } catch {
          console.error("Error polling game status:", error);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [gameCode]);

  const handleGameEnd = () => {
    setGameCode("");
    setIsHost(false);
    setPlayers([]);
    setShowJoinForm(false);
    setError("Game ended");
  };

  const handleCreateGame = async () => {
    if (nickname.trim()) {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`${API_URL}/games`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nickname }),
        });

        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        setGameCode(data.gameCode);
        setIsHost(true);
        setPlayers(data.game.players);
      } catch {
        setError("Failed to create game. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleJoinGame = async () => {
    if (nickname.trim() && gameCode.trim()) {
      setLoading(true);
      setError("");

      try {
        const response = await fetch(`${API_URL}/games/join`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ gameCode, nickname }),
        });

        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        setPlayers(data.game.players);
        setShowJoinForm(false);
      } catch {
        setError("Failed to join game. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleStartGame = async () => {
    if (!isHost || players.length < 2) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/games/${gameCode}/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
        return;
      }

      // Redirect to game page
      window.location.href = "/game";
    } catch {
      setError("Failed to start game. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLeaveGame = async () => {
    try {
      await fetch(`${API_URL}/games/${gameCode}/leave`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nickname }),
      });

      handleGameEnd();
    } catch (error) {
      console.error("Error leaving game:", error);
    }
  };

  const copyGameCode = () => {
    navigator.clipboard.writeText(gameCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!gameCode && !showJoinForm) {
    return (
      <div className="relative z-30 flex items-center justify-center w-full h-screen">
        <Card className="min-w-[500px] rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Join or Create Game
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              className="w-full py-6 rounded-xl text-lg"
              onClick={() => setShowJoinForm(true)}
              disabled={loading}
            >
              <UserPlus className="mr-2 h-6 w-6" />
              Join Existing Game
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Or</span>
              </div>
            </div>
            <div className="space-y-4">
              <Input
                placeholder="Enter your nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                maxLength={15}
              />
              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <Button
                className="w-full py-6 rounded-xl text-lg"
                onClick={handleCreateGame}
                disabled={!nickname.trim() || loading}
              >
                <Crown className="mr-2 h-6 w-6" />
                {loading ? "Creating..." : "Create New Game"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (showJoinForm) {
    return (
      <div className="relative z-30 flex items-center justify-center w-full h-screen">
        <Card className="min-w-[500px] rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Join Game</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Enter your nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={15}
            />
            <Input
              placeholder="Enter game code"
              value={gameCode}
              onChange={(e) => setGameCode(e.target.value.toUpperCase())}
              maxLength={6}
            />
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="flex gap-2">
              <Button
                className="flex-1"
                onClick={() => {
                  setShowJoinForm(false);
                  setError("");
                }}
                variant="outline"
                disabled={loading}
              >
                Back
              </Button>
              <Button
                className="flex-1"
                onClick={handleJoinGame}
                disabled={!nickname.trim() || !gameCode.trim() || loading}
              >
                {loading ? "Joining..." : "Join Game"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="relative z-30 flex items-center justify-center w-full h-screen">
      <Card className="min-w-[500px] rounded-xl">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Game Lobby</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Game Code:</span>
              <span className="font-mono text-lg">{gameCode}</span>
            </div>
            <Button variant="outline" size="sm" onClick={copyGameCode}>
              <Copy className="mr-2 h-4 w-4" />
              {copied ? "Copied!" : "Copy Code"}
            </Button>
          </div>

          {copied && (
            <Alert>
              <AlertDescription>
                Game code copied to clipboard!
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Players ({players.length}/4)
            </h3>
            <div className="space-y-2">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="flex items-center justify-between p-3 bg-white border rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    {player.isHost && (
                      <Crown className="h-4 w-4 text-yellow-500" />
                    )}
                    <span>{player.nickname}</span>
                  </div>
                  <span>Score: {player.score}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={handleLeaveGame}
              disabled={loading}
            >
              Leave Game
            </Button>
            {isHost && (
              <Button
                className="flex-1"
                onClick={handleStartGame}
                disabled={players.length < 2 || loading}
              >
                {loading ? "Starting..." : "Start Game"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LobbyPage;
