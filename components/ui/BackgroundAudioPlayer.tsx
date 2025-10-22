'use client';

import { useEffect, useState, useRef } from 'react';
import { Howl } from 'howler';

const BackgroundAudioPlayer = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // Initialize Howler - Note: no /public/ in the path
    soundRef.current = new Howl({
      src: ['/hers.mp3'],
      loop: true,
      volume: 0.5,
      html5: true,
    });

    const handleClick = () => {
      if (!hasInteracted && soundRef.current) {
        soundRef.current.play();
        setHasInteracted(true);
        console.log('unlocked music');
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [hasInteracted]);

  return null;
};

export default BackgroundAudioPlayer;
