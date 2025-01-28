# Multiplayer Quiz Game

A real-time multiplayer quiz application where users can create private game rooms, invite friends, and compete against each other in quiz challenges.

## 🔴 Live Demo

- Frontend: https://quizzy-arena.vercel.app
- Backend API: https://quizzy-arena-backend.vercel.app

## ✨ Features

- Create private game rooms
- Join existing games via game code
- Real-time player updates
- Timed quiz questions
- Live score tracking
- Responsive design
- Multiplayer support (up to 4 players)

## 🛠️ Tech Stack

- **Framework:** React + TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Backend:** Node.js + Express
- **Database:** MongoDB

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/justJubair/quizzyArena.git
cd quizzyArena
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

The app should now be running on `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── pages/             # Page components
├── lib/               # Utility functions
├── hooks/             # Custom React hooks
└── types/             # TypeScript type definitions
```

## 🎮 How to Play

1. **Create a Game**

   - Click "Create New Game"
   - Enter your nickname
   - Share the generated game code with friends

2. **Join a Game**

   - Click "Join Existing Game"
   - Enter your nickname
   - Input the game code
   - Wait for the host to start

3. **During the Game**
   - Answer questions within the time limit
   - See immediate feedback on answers
   - Track scores in real-time
   - Complete all questions to see final results

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 👥 Authors

- Jubair Ahmed - [@justJubair](https://github.com/justJubair)

## 🙏 Acknowledgements

- [shadcn/ui](https://ui.shadcn.com) for the beautiful UI components
- [Lucide](https://lucide.dev) for the icons
- [Tailwind CSS](https://tailwindcss.com) for the styling system

## 📞 Contact

For any questions or feedback, please reach out to [jubair.ahmed2838@email.com](mailto:jubair.ahmed2838@email.com)
