import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticlesProps {
  count?: number;
  mousePosition: { x: number; y: number };
}

function Particles({ count = 1200, mousePosition }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null);
  const time = useRef(0);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
      
      // Green to cyan gradient colors
      const t = Math.random();
      colors[i * 3] = 0 + t * 0.2;
      colors[i * 3 + 1] = 0.8 + t * 0.2;
      colors[i * 3 + 2] = 0.3 + t * 0.5;
    }
    return { positions, colors };
  }, [count]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    
    time.current += delta;
    
    // Constant slow rotation
    mesh.current.rotation.y = time.current * 0.05;
    mesh.current.rotation.x = Math.sin(time.current * 0.03) * 0.1;
    
    // Mouse influence
    mesh.current.rotation.y += mousePosition.x * 0.002;
    mesh.current.rotation.x += mousePosition.y * 0.002;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ParticleBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth - 0.5) * 2,
      y: (event.clientY / window.innerHeight - 0.5) * 2
    });
  }, []);

  useEffect(() => {
    // Delay mount to ensure DOM is ready
    const timer = setTimeout(() => setMounted(true), 50);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  if (!mounted) {
    return <div className="fixed inset-0 z-[-1] bg-background" />;
  }

  return (
    <div className="fixed inset-0 z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ 
          antialias: false,
          alpha: true,
          powerPreference: "default"
        }}
        style={{ background: 'transparent' }}
        dpr={1}
      >
        <Particles mousePosition={mousePosition} count={800} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80 pointer-events-none" />
    </div>
  );
}
