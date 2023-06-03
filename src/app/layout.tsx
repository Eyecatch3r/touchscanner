'use client'
import Header from './components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import {useCallback, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { ParticlesProps } from 'react-tsparticles';
import getOptions from '@/app/components/backgroundAnim/ParticleOptions';


function ParticleContainer() {
    const [ParticlesComponent, setParticlesComponent] = useState<React.ComponentType<ParticlesProps> | null>(null);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('react-tsparticles').then(({ default: Particles }) => {
                setParticlesComponent(() => Particles);
            });
        }
    }, []);

    const particlesInit = useCallback((engine: any) => {
        return import('tsparticles').then(({ loadFull }) => {
            return loadFull(engine);
        });
    }, []);

    const particlesLoaded: (container: any) => void = (container: any) => {
        console.log(container);
    };

    if (!ParticlesComponent) {
        return null;
    }

    return (
        <ParticlesComponent
            id="tsparticles"
            init={particlesInit}
            //@ts-ignore
            loaded={particlesLoaded}
            //@ts-ignore
            options={getOptions()}
        />
    );
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <div id="particle-container">
            <ParticleContainer />
        </div>
        {children}
        </body>
        </html>
    );
}