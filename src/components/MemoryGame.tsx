
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Brain, Code, LineChart, Radar, BookOpen, Zap, Star, Heart } from 'lucide-react';

type CardType = {
  id: number;
  type: string;
  flipped: boolean;
  matched: boolean;
  icon: React.ReactNode;
};

const ICONS = [
  { type: "ai", icon: <Brain className="memory-icon" /> },
  { type: "code", icon: <Code className="memory-icon" /> },
  { type: "chart", icon: <LineChart className="memory-icon" /> },
  { type: "radar", icon: <Radar className="memory-icon" /> },
  { type: "book", icon: <BookOpen className="memory-icon" /> },
  { type: "zap", icon: <Zap className="memory-icon" /> },
  { type: "star", icon: <Star className="memory-icon" /> },
  { type: "heart", icon: <Heart className="memory-icon" /> }
];

const MemoryGame = () => {
  const isMobile = useIsMobile();
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCount, setFlippedCount] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState<number[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize game
  const initGame = () => {
    // Select 6 random icons for a 3x4 grid (12 cards = 6 pairs)
    const shuffledIcons = [...ICONS].sort(() => 0.5 - Math.random()).slice(0, 6);
    const newCards: CardType[] = [];
    
    // Create pairs
    shuffledIcons.forEach((icon, index) => {
      // Create two cards with the same type
      newCards.push({
        id: index * 2,
        type: icon.type,
        flipped: false,
        matched: false,
        icon: icon.icon
      });
      
      newCards.push({
        id: index * 2 + 1,
        type: icon.type,
        flipped: false,
        matched: false,
        icon: icon.icon
      });
    });
    
    // Shuffle cards
    const shuffledCards = newCards.sort(() => 0.5 - Math.random());
    
    setCards(shuffledCards);
    setFlippedCount(0);
    setFlippedIndexes([]);
    setMoves(0);
    setMatchedPairs(0);
    setGameComplete(false);
    setGameStarted(true);
  };

  // Handle card click
  const handleCardClick = (index: number) => {
    // Return if the same card is clicked or already matched or more than 2 cards flipped
    if (flippedIndexes.includes(index) || cards[index].matched || flippedCount >= 2) {
      return;
    }

    // Flip the card
    const newCards = [...cards];
    newCards[index].flipped = true;
    setCards(newCards);
    
    // Add this card to flipped indexes
    const newFlippedIndexes = [...flippedIndexes, index];
    setFlippedIndexes(newFlippedIndexes);
    setFlippedCount(newFlippedIndexes.length);
    
    // If 2 cards are flipped, check for match
    if (newFlippedIndexes.length === 2) {
      setMoves(prev => prev + 1);
      
      const firstIndex = newFlippedIndexes[0];
      const secondIndex = newFlippedIndexes[1];
      
      if (cards[firstIndex].type === cards[secondIndex].type) {
        // Match found
        setTimeout(() => {
          const matchedCards = [...cards];
          matchedCards[firstIndex].matched = true;
          matchedCards[secondIndex].matched = true;
          setCards(matchedCards);
          setMatchedPairs(prev => {
            const newMatchedPairs = prev + 1;
            if (newMatchedPairs === cards.length / 2) {
              setGameComplete(true);
            }
            return newMatchedPairs;
          });
          setFlippedIndexes([]);
          setFlippedCount(0);
        }, 800);
      } else {
        // No match
        setTimeout(() => {
          const flippedBackCards = [...cards];
          flippedBackCards[firstIndex].flipped = false;
          flippedBackCards[secondIndex].flipped = false;
          setCards(flippedBackCards);
          setFlippedIndexes([]);
          setFlippedCount(0);
        }, 800);
      }
    }
  };

  return (
    <div className="memory-game">
      <div className="text-center mb-4">
        {!gameStarted ? (
          <button 
            className="contact-button mb-4"
            onClick={initGame}
          >
            Zagraj w Memory Game
          </button>
        ) : (
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span>Ruchy: {moves}</span>
              <span>Pary: {matchedPairs}/{cards.length / 2}</span>
            </div>
            {gameComplete && (
              <div className="text-cyan-300 font-bold mb-4 animate-pulse">
                Gratulacje! Ukończyłeś/aś grę w {moves} ruchach!
              </div>
            )}
            <button 
              className="contact-button mt-2"
              onClick={initGame}
            >
              {gameComplete ? "Zagraj ponownie" : "Restart"}
            </button>
          </div>
        )}
      </div>

      {gameStarted && (
        <div className={`memory-game-board ${isMobile ? 'grid-cols-3' : 'grid-cols-4'}`}>
          {cards.map((card, index) => (
            <div
              key={index}
              className={`memory-card ${card.flipped ? 'flipped' : ''} ${card.matched ? 'opacity-70' : ''}`}
              onClick={() => !card.matched && handleCardClick(index)}
            >
              <div className="memory-card-inner">
                <div className="memory-card-front">
                  ?
                </div>
                <div className="memory-card-back">
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;
