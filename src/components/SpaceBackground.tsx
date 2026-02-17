import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SpaceBackground() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number }[]>([]);
  const [sparkles, setSparkles] = useState<{ id: number; x: number; y: number; size: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // 1. Bintik Putih Kecil (Dust Stars) - Tetap Biarin
    const dust = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 1.5 + 0.5,
    }));
    setStars(dust);

    // 2. Cahaya Berkilau Anime (Sparkles) - Gede & Kedap-kedip lama
    const flares = Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 15 + 10, // Ukuran lebih besar
      duration: Math.random() * 5 + 5, // Kedip lebih lama (5-10 detik)
      delay: Math.random() * 10,
    }));
    setSparkles(flares);
  }, []);

  const directions = [
    { initial: { top: "-20%", left: "80%" }, animate: { top: "120%", left: "-20%" }, rotate: 45 },
    { initial: { top: "10%", left: "110%" }, animate: { top: "80%", left: "-10%" }, rotate: 70 },
    { initial: { top: "40%", left: "110%" }, animate: { top: "50%", left: "-10%" }, rotate: 85 },
    { initial: { top: "-10%", left: "30%" }, animate: { top: "110%", left: "10%" }, rotate: 20 },
  ];

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-black overflow-hidden">
      
      {/* 1. LAYER DEBU BINTANG (Bintik Kecil) */}
      {stars.map((star) => (
        <div
          key={`dust-${star.id}`}
          className="absolute bg-white rounded-full opacity-30"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}

      {/* 2. LAYER CAHAYA BERKILAU (Anime Sparkle) - Tajam & Glow */}
      {sparkles.map((s) => (
        <motion.div
          key={`sparkle-${s.id}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0], 
            scale: [0.5, 1, 0.5],
            rotate: [0, 15, 0] 
          }}
          transition={{ 
            duration: s.duration, 
            repeat: Infinity, 
            delay: s.delay,
            ease: "easeInOut" 
          }}
          className="absolute text-white"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
          }}
        >
          {/* Bentuk Bintang Anime (Four-Pointed Star Tajam) */}
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
            <path d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z" />
          </svg>
        </motion.div>
      ))}

      {/* 3. LAYER KOMET (Sinematik Pelan) */}
      {directions.map((dir, i) => (
        <motion.div
          key={`comet-${i}`}
          initial={{ ...dir.initial, opacity: 0 }}
          animate={{
            ...dir.animate,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 15, // Speed lambat banget biar sinematik
            repeat: Infinity,
            delay: Math.random() * 20,
            ease: "linear",
          }}
          className="absolute w-[1px] h-[300px] bg-gradient-to-t from-white via-white/10 to-transparent"
          style={{
            rotate: `${dir.rotate}deg`,
            filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.4))"
          }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full blur-[1px] shadow-[0_0_12px_#fff]" />
        </motion.div>
      ))}
    </div>
  );
}