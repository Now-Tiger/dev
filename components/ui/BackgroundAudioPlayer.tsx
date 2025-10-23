"use client";
import { useEffect, useState, useRef } from "react";
import { Howl } from "howler";

const BackgroundAudioPlayer = () => {
  const [audioStarted, setAudioStarted] = useState(false);
  const soundRef = useRef<Howl | null>(null);

  useEffect(() => {
    const startAudio = () => {
      if (audioStarted) return;

      // ✅ Initialize Howl *inside* the user interaction event.
      if (!soundRef.current) {
        soundRef.current = new Howl({
          src: ["/hers.mp3"],
          loop: true,
          volume: 0.5,
          html5: true,
        });
      }

      // ✅ Play within same gesture context.
      soundRef.current.play();
      setAudioStarted(true);
      console.log("✅ Audio unlocked and playing");

      // Remove listeners immediately after starting
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("pointerdown", startAudio);
    };

    // Attach listeners for multiple gesture types (mobile safe)
    document.addEventListener("click", startAudio, { passive: true });
    document.addEventListener("touchstart", startAudio, { passive: true });
    document.addEventListener("pointerdown", startAudio, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
      document.removeEventListener("pointerdown", startAudio);

      if (soundRef.current) {
        soundRef.current.unload();
        soundRef.current = null;
      }
    };
  }, [audioStarted]);

  return null;
};

export default BackgroundAudioPlayer;

