import QUIZ_DATA from "@/lib/constants/quizData";
import { useEffect, useState } from "react";
import { Timer, CheckCircle, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TIMER_DURATION = 30;

const GamePage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timer, setTimer] = useState(TIMER_DURATION);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);

  useEffect(() => {
    if (timer > 0 && !isAnswered) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else if (timer === 0 && !isAnswered) {
      handleTimeout();
    }
  }, [timer, isAnswered]);

  const handleTimeout = () => {
    setIsAnswered(true);
    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  };

  interface Question {
    question: string;
    options: string[];
    correctAnswer: string;
  }

  interface QuizData {
    [index: number]: Question;
  }

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);

    if (
      answer === (QUIZ_DATA as QuizData)[currentQuestionIndex].correctAnswer
    ) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      moveToNextQuestion();
    }, 2000);
  };

  const moveToNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_DATA.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      setTimer(TIMER_DURATION);
    }
  };

  const currentQuestion = QUIZ_DATA[currentQuestionIndex];

  const getOptionStyle = (option: string) => {
    if (!isAnswered) return "hover:bg-blue-100";
    if (option === currentQuestion.correctAnswer)
      return "bg-green-100 border-green-500";
    if (
      option === selectedAnswer &&
      selectedAnswer !== currentQuestion.correctAnswer
    ) {
      return "bg-red-100 border-red-500";
    }
    return "opacity-50";
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="w-[700px] relative z-30">
        <div className="flex justify-between items-center mb-6 text-white">
          <div className="flex items-center gap-2">
            <Timer className="w-5 h-5 " />
            <span className="font-bold">{timer}s</span>
          </div>
          <div>
            Score: {score}/{currentQuestionIndex + 1}
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">
                Question {currentQuestionIndex + 1} of {QUIZ_DATA.length}
              </h2>
              <p className="text-lg">{currentQuestion.question}</p>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full justify-start text-left p-4 ${getOptionStyle(
                    option
                  )}`}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={isAnswered}
                >
                  <div className="flex items-center gap-2">
                    {isAnswered && option === currentQuestion.correctAnswer && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {isAnswered &&
                      option === selectedAnswer &&
                      option !== currentQuestion.correctAnswer && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                    {option}
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GamePage;
