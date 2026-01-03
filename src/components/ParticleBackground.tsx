import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  mouse: React.MutableRefObject<{ x: number; y: number }>;
}

function Particles({ count = 1500, mouse }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return positions;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    // Constant rotation
    mesh.current.rotation.y += 0.0008;
    mesh.current.rotation.x += 0.0003;
    
    // Mouse influence with smooth interpolation
    mesh.current.rotation.y += mouse.current.x * 0.001;
    mesh.current.rotation.x += mouse.current.y * 0.001;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#00FF88"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function ParticleBackground() {
  const mouse = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Small delay to ensure proper mounting
    const timeout = setTimeout(() => setIsReady(true), 100);
    
    const handleMouseMove = (event: MouseEvent) => {
      target.current.x = (event.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        target.current.x = (event.touches[0].clientX / window.innerWidth - 0.5) * 2;
        target.current.y = (event.touches[0].clientY / window.innerHeight - 0.5) * 2;
      }
    };

    // Smooth interpolation animation
    const animate = () => {
      mouse.current.x += (target.current.x - mouse.current.x) * 0.05;
      mouse.current.y += (target.current.y - mouse.current.y) * 0.05;
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    return () => {
      clearTimeout(timeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  if (!isReady) {
    return <div className="fixed inset-0 z-[-1] bg-background" />;
  }

  return (
    <div className="fixed inset-0 z-[-1] opacity-70 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 25], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "default",
          failIfMajorPerformanceCaveat: false
        }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={['#020203', 15, 80]} />
        <Particles mouse={mouse} count={1200} />
      </Canvas>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/80 pointer-events-none" />
    </div>
  );
}
