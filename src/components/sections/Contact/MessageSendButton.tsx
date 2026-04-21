"use client";

import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

type Props = {
  loading?: boolean;
  success?: boolean; // trigger confetti externally
};

const MessageSendButton = ({ loading = false, success = false }: Props) => {
  useEffect(() => {
    if (!success) return;

    // 🎉 multi-stage ribbon/confetti burst
    const fire = (opts: confetti.Options) => confetti(opts);

    const duration = 800;
    const end = Date.now() + duration;

    const frame = () => {
      fire({
        particleCount: 4,
        angle: 60,
        spread: 70,
        origin: { x: 0, y: 0.8 },
      });

      fire({
        particleCount: 4,
        angle: 120,
        spread: 70,
        origin: { x: 1, y: 0.8 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

    // center burst
    setTimeout(() => {
      fire({
        particleCount: 60,
        spread: 90,
        startVelocity: 45,
        origin: { x: 0.5, y: 0.6 },
      });
    }, 150);
  }, [success]);

  return (
    <Button
      type="submit"
      disabled={loading}
      className={`
        group flex items-center gap-2 px-5 py-2
        transition-all duration-300
        ${
          loading
            ? "opacity-70 cursor-not-allowed"
            : " active:scale-95 cursor-pointer"
        }
      `}
    >
      {loading ? (
        <>
          <span>Sending...</span>
          <Loader2 className="animate-spin size-4" />
        </>
      ) : (
        <>
          <span>Send Message</span>
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  );
};

export default MessageSendButton;