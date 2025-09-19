
import React, { useState, useEffect } from 'react';

type Bubble = {
  id: number;
  size: number;
  left: number;
  top: number;
  moveX: number;
  moveY: number;
  duration: number;
};

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  
  useEffect(() => {
    // Create initial bubbles
    const initialBubbles = Array.from({ length: 15 }, (_, i) => createRandomBubble(i));
    setBubbles(initialBubbles);
    
    // Add new bubbles periodically
    const interval = setInterval(() => {
      setBubbles(prevBubbles => {
        // Remove a random old bubble and add a new one
        const newBubbles = [...prevBubbles];
        const removeIndex = Math.floor(Math.random() * newBubbles.length);
        newBubbles.splice(removeIndex, 1);
        
        return [...newBubbles, createRandomBubble(Date.now())];
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  const createRandomBubble = (id: number): Bubble => {
    // Random position, size and movement - adjusted for 70% scale
    const size = Math.random() * 150 + 50; // 50px - 200px
    const scale = 0.7;
    const left = Math.random() * (window.innerWidth / scale);
    const top = Math.random() * (window.innerHeight / scale);
    const moveX = (Math.random() - 0.5) * 200;
    const moveY = (Math.random() - 0.5) * 200;
    const duration = Math.random() * 10 + 10; // 10s - 20s
    
    return { id, size, left, top, moveX, moveY, duration };
  };
  
  return (
    <div className="bubble-bg">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}px`,
            top: `${bubble.top}px`,
            '--move-x': `${bubble.moveX}px`,
            '--move-y': `${bubble.moveY}px`,
            animationDuration: `${bubble.duration}s`
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;
