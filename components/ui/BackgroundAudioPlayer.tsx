"use client";

import { useEffect, useState, useRef } from "react";
import { Howl } from "howler";

const BackgroundAudioPlayer = () => {
  // We only need a state to track whether the audio has been initialized and started.
  const [audioStarted, setAudioStarted] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    // 1. Initialize Howl only once
    if (!soundRef.current) {
      soundRef.current = new Howl({
        src: ["/hers.mp3"],
        loop: true,
        volume: 0.5,
        html5: true,
      });
    }

    const startAudio = () => {
      // Check if audio has already been started by the user
      if (audioStarted || !soundRef.current) {
        return;
      }

      // Attempt to play the audio
      soundRef.current.play();
      setAudioStarted(true);
      console.log("unlocked and started music");

      // Clean up listeners immediately after successful start
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };

    // 2. Attach Listeners for both click (desktop) and touchstart (mobile)
    // touchstart is often more reliable on mobile to register the first interaction.
    document.addEventListener("click", startAudio);
    document.addEventListener("touchstart", startAudio);

    // 3. Cleanup function
    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);

      // Unload the sound if the component is unmounted
      if (soundRef.current) {
        soundRef.current.unload();
        soundRef.current = null; // Clear the ref
      }
    };
  }, [audioStarted]); // The effect now only re-runs if audioStarted state changes, making it cleaner.

  return null;
};

export default BackgroundAudioPlayer;
