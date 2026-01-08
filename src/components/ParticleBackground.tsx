import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { PointsBuffer } from '@react-three/drei';

function Particles({ count = 600 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null);
  const timeRef = useRef(0);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;

      const t = Math.random();
      col[i * 3] = 0.05 + t * 0.15;
      col[i * 3 + 1] = 0.75 + t * 0.25;
      col[i * 3 + 2] = 0.35 + t * 0.45;
    }

    return { positions: pos, colors: col };
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    timeRef.current += delta;
    pointsRef.current.rotation.y = timeRef.current * 0.03;
    pointsRef.current.rotation.x = Math.sin(timeRef.current * 0.02) * 0.1;
  });

  return (
    <PointsBuffer ref={pointsRef} positions={positions} colors={colors} stride={3} frustumCulled={false}>
      <pointsMaterial
        size={0.18}
        vertexColors
        transparent
        opacity={1}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </PointsBuffer>
  );
}

export default function ParticleBackground() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), 150);
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) return <div className="fixed inset-0 z-[-1] bg-background" />;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 18], fov: 55 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          failIfMajorPerformanceCaveat: false,
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Particles count={700} />
      </Canvas>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
    </div>
  );
}
