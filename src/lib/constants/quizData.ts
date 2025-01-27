// Type interface for the quiz data
interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

// Quiz data with 12 questions
const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    question: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Orca"],
    correctAnswer: "Blue Whale",
  },
  {
    id: 4,
    question: "What is the boiling point of water in Celsius?",
    options: ["90°C", "80°C", "100°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    id: 5,
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Mark Twain",
      "Jane Austen",
    ],
    correctAnswer: "William Shakespeare",
  },
  {
    id: 6,
    question: "Which is the smallest continent by land area?",
    options: ["Europe", "Australia", "Antarctica", "South America"],
    correctAnswer: "Australia",
  },
  {
    id: 7,
    question: "What is the chemical symbol for gold?",
    options: ["Go", "Au", "Ag", "Fe"],
    correctAnswer: "Au",
  },
  {
    id: 8,
    question: "How many colors are in a rainbow?",
    options: ["5", "6", "7", "8"],
    correctAnswer: "7",
  },
  {
    id: 9,
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    id: 10,
    question: "Who painted the Mona Lisa?",
    options: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 11,
    question: "Which country is famous for its maple syrup?",
    options: ["United States", "Canada", "Finland", "Australia"],
    correctAnswer: "Canada",
  },
  {
    id: 12,
    question: "What is the tallest mountain in the world?",
    options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
    correctAnswer: "Mount Everest",
  },
];

export default QUIZ_DATA;
