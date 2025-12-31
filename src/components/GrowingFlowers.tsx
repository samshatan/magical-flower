import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sparkles, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

// --- 3D Flower Components ---

const FlowerStem = ({ x, z, delay, type }: { x: number; z: number; delay: number; type: 'lavender' | 'lily' }) => {
    const meshRef = useRef<THREE.Group>(null);
    const scaleRef = useRef(0);

    // Refined Geometry & Colors
    const height = type === 'lavender' ? 3 + Math.random() * 2 : 4 + Math.random() * 2;
    const color = type === 'lavender' ? '#a56eff' : '#ff7eb9'; // Brighter Lavender / Hotter Pink

    useFrame((state, delta) => {
        if (!meshRef.current) return;

        // Gentle sway
        const time = state.clock.elapsedTime;
        meshRef.current.rotation.x = Math.sin(time * 0.5 + x) * 0.05;
        meshRef.current.rotation.z = Math.cos(time * 0.3 + z) * 0.05;

        // Smooth Growth
        if (time > delay && scaleRef.current < 1) {
            scaleRef.current += delta * 0.6; // Slightly faster
            if (scaleRef.current > 1) scaleRef.current = 1;

            // Elastic bounce out effect logic simplified
            const s = scaleRef.current;
            meshRef.current.scale.set(s, s, s);
        }
    });

    return (
        <group ref={meshRef} position={[x, -2.5, z]} rotation={[0, Math.random() * Math.PI, 0]} scale={[0, 0, 0]}>
            {/* Stem - Darker smooth green */}
            <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
                <cylinderGeometry args={[0.04, 0.06, height, 8]} />
                <meshStandardMaterial color="#2d5a27" roughness={0.4} metalness={0.1} />
            </mesh>

            {/* Blooms - Emissive for Glow */}
            {type === 'lavender' && (
                <group position={[0, height, 0]}>
                    {Array.from({ length: 20 }).map((_, i) => (
                        <mesh key={i} position={[Math.random() * 0.15 - 0.075, -i * 0.12, Math.random() * 0.15 - 0.075]}>
                            <sphereGeometry args={[0.07, 8, 8]} />
                            {/* Emissive makes it glow with Bloom */}
                            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} />
                        </mesh>
                    ))}
                </group>
            )}

            {type === 'lily' && (
                <group position={[0, height, 0]} rotation={[0.2, 0, 0]}>
                    <mesh position={[0, 0.2, 0]}>
                        <cylinderGeometry args={[0, 0.4, 0.8, 5, 1]} />
                        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} side={THREE.DoubleSide} transparent opacity={0.9} />
                    </mesh>
                    <mesh position={[0, 0.3, 0]}>
                        <sphereGeometry args={[0.08, 8, 8]} />
                        <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={2} />
                    </mesh>
                </group>
            )}
        </group>
    );
};

const Garden = () => {
    const flowers = useMemo(() => {
        const items = [];
        for (let i = 0; i < 80; i++) { // More density
            items.push({
                x: (Math.random() - 0.5) * 18,
                z: (Math.random() - 0.5) * 8 - 2,
                delay: Math.random() * 3,
                type: Math.random() > 0.5 ? 'lavender' : 'lily'
            });
        }
        return items;
    }, []);

    return (
        <group>
            {flowers.map((f, i) => (
                <FlowerStem key={i} x={f.x} z={f.z} delay={f.delay} type={f.type as any} />
            ))}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                {/* Dark reflective ground for contrast */}
                <meshStandardMaterial color="#050a05" roughness={0.6} metalness={0.4} />
            </mesh>
        </group>
    );
};

const GrowingFlowers = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
            <Canvas shadows camera={{ position: [0, 1.5, 9], fov: 45 }}>
                {/* Darker background for bloom contrast */}
                <color attach="background" args={['#050205']} />
                <fog attach="fog" args={['#050205', 5, 25]} />

                {/* Atmospheric Lighting */}
                <ambientLight intensity={0.2} />
                <spotLight position={[10, 20, 10]} angle={0.2} penumbra={1} intensity={2} color="#ffab91" castShadow />
                <pointLight position={[-5, 2, -5]} intensity={1.5} color="#a56eff" distance={10} />

                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.2}>
                    <Garden />
                </Float>

                {/* Magical Floating Particles */}
                <Sparkles count={300} scale={15} size={3} speed={0.4} opacity={0.8} color="#ffffaa" />

                {/* Post Processing for the "Beautiful" look */}
                <EffectComposer>
                    <Bloom luminanceThreshold={1} mipmapBlur intensity={1.5} radius={0.6} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>

                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.3} maxPolarAngle={Math.PI / 2 - 0.05} />
            </Canvas>
        </div>
    );
};

export default GrowingFlowers;
