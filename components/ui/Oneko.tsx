'use client';

import { useEffect, useRef } from 'react';

const Oneko = () => {
  const nekoRef = useRef<HTMLDivElement>(null);
  const nekoPos = useRef({ x: 32, y: 32 });
  const mousePosRef = useRef({ x: 0, y: 0 });
  const frameCount = useRef(0);
  const idleTime = useRef(0);
  const idleAnimation = useRef<string | null>(null);
  const idleAnimationFrame = useRef(0);
  const movementFrame = useRef(0);

  // 🐢 Slow, smooth chase speed
  const nekoSpeed = 3.5;
  const moveFrameDelay = 2; // position updates (slow)
  const animFrameDelay = 5; // sprite animation (fast enough for legs)

  const spriteSets = {
    idle: [[-3, -3]],
    alert: [[-7, -3]],
    scratchSelf: [
      [-5, 0],
      [-6, 0],
      [-7, 0],
    ],
    scratchWallN: [
      [0, 0],
      [0, -1],
    ],
    scratchWallS: [
      [-7, -1],
      [-6, -2],
    ],
    scratchWallE: [
      [-2, -2],
      [-2, -3],
    ],
    scratchWallW: [
      [-4, 0],
      [-4, -1],
    ],
    tired: [[-3, -2]],
    sleeping: [
      [-2, 0],
      [-2, -1],
    ],
    N: [
      [-1, -2],
      [-1, -3],
    ],
    NE: [
      [0, -2],
      [0, -3],
    ],
    E: [
      [-3, 0],
      [-3, -1],
    ],
    SE: [
      [-5, -1],
      [-5, -2],
    ],
    S: [
      [-6, -3],
      [-7, -2],
    ],
    SW: [
      [-5, -3],
      [-6, -1],
    ],
    W: [
      [-4, -2],
      [-4, -3],
    ],
    NW: [
      [-1, 0],
      [-1, -1],
    ],
  };

  useEffect(() => {
    const neko = nekoRef.current;
    if (!neko) return;

    let animationFrame: number;

    const setSprite = (name: keyof typeof spriteSets, frame: number) => {
      const sprite = spriteSets[name][frame % spriteSets[name].length];
      neko.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    };

    const resetIdleAnimation = () => {
      idleAnimation.current = null;
      idleAnimationFrame.current = 0;
    };

    const idle = () => {
      idleTime.current += 1;

      if (
        idleTime.current > 10 &&
        Math.floor(Math.random() * 200) === 0 &&
        idleAnimation.current == null
      ) {
        const availableIdleAnimations = ['sleeping', 'scratchSelf'];
        if (nekoPos.current.x < 32) availableIdleAnimations.push('scratchWallW');
        if (nekoPos.current.y < 32) availableIdleAnimations.push('scratchWallN');
        if (nekoPos.current.x > window.innerWidth - 32)
          availableIdleAnimations.push('scratchWallE');
        if (nekoPos.current.y > window.innerHeight - 32)
          availableIdleAnimations.push('scratchWallS');

        idleAnimation.current =
          availableIdleAnimations[
            Math.floor(Math.random() * availableIdleAnimations.length)
          ];
      }

      if (idleAnimation.current) {
        setSprite(
          idleAnimation.current as keyof typeof spriteSets,
          idleAnimationFrame.current
        );
        idleAnimationFrame.current += 1;

        if (idleAnimationFrame.current > 8) {
          resetIdleAnimation();
        }
        return;
      }

      setSprite('idle', 0);
    };

    const frame = () => {
      frameCount.current += 1;

      const diffX = nekoPos.current.x - mousePosRef.current.x;
      const diffY = nekoPos.current.y - mousePosRef.current.y;
      const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

      // When idle or close enough, don't move but maybe animate a bit
      if (distance < nekoSpeed || distance < 48) {
        idle();
        return;
      }

      idleAnimation.current = null;
      idleAnimationFrame.current = 0;

      // movement throttle
      if (frameCount.current % moveFrameDelay === 0) {
        // compute direction & move
        let direction = '';
        direction += diffY / distance > 0.5 ? 'N' : '';
        direction += diffY / distance < -0.5 ? 'S' : '';
        direction += diffX / distance > 0.5 ? 'W' : '';
        direction += diffX / distance < -0.5 ? 'E' : '';

        // smooth follow
        nekoPos.current.x -= (diffX / distance) * nekoSpeed * 0.8;
        nekoPos.current.y -= (diffY / distance) * nekoSpeed * 0.8;

        nekoPos.current.x = Math.min(Math.max(16, nekoPos.current.x), window.innerWidth - 16);
        nekoPos.current.y = Math.min(Math.max(16, nekoPos.current.y), window.innerHeight - 16);

        neko.style.left = `${nekoPos.current.x - 16}px`;
        neko.style.top = `${nekoPos.current.y - 16}px`;

        // animate leg frames faster
        if (frameCount.current % animFrameDelay === 0) {
          movementFrame.current++;
        }

        setSprite(direction as keyof typeof spriteSets, movementFrame.current);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePosRef.current.x = e.clientX;
      mousePosRef.current.y = e.clientY;
    };

    const animate = () => {
      frame();
      animationFrame = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={nekoRef}
      style={{
        width: '32px',
        height: '32px',
        position: 'fixed',
        left: '16px',
        top: '16px',
        backgroundImage:
          'url(https://raw.githubusercontent.com/adryd325/oneko.js/main/oneko.gif)',
        imageRendering: 'pixelated',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  );
};

export default Oneko;
