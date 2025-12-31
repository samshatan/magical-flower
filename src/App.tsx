import { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import MagicalFlowers from './components/MagicalFlowers';
import PhotoGallery from './components/PhotoGallery';
import Letter from './components/Letter';

function App() {
  const [step, setStep] = useState<'hero' | 'growing' | 'memories' | 'letter'>('hero');

  // Removed auto-redirect to allow user to click "My Letter" at their own pace.
  useEffect(() => {
    // Optional: Preload images or resources here
  }, []);

  return (
    <div className="app-container">
      {step === 'hero' && (
        <Hero onStart={() => setStep('growing')} />
      )}

      {step === 'growing' && (
        <div className="fade-in" style={{ position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden' }}>
          <MagicalFlowers />

          <div
            style={{
              position: 'absolute',
              top: '15%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              maxWidth: '600px',
              zIndex: 10,
              pointerEvents: 'none',
              textAlign: 'center',
            }}
          >
            <div
              className="fade-in-delayed"
              style={{
                opacity: 0,
                animation: 'fadeIn 3s ease-in-out 5s forwards', // Delayed appearance
              }}
            >
              <h1 style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: '2.5rem',
                color: 'rgba(255, 255, 255, 0.5)',
                marginBottom: '1rem',
                textShadow: '0 0 5px rgba(255,105,180, 0.3)'
              }}>
                My Dearest Friend,
              </h1>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.2rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.4)',
                fontWeight: 600,
                marginBottom: '1rem'
              }}>
                Just like a flower that blooms and brightens the garden, you brighten my life with your presence.
              </p>
              <p style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '1.2rem',
                lineHeight: '1.6',
                color: 'rgba(255, 255, 255, 0.4)',
                fontWeight: 600
              }}>
                May your day be filled with as much joy and beauty as you bring to others.
              </p>
            </div>
          </div>
        </div>
      )}

      {step === 'memories' && (
        <main className="fade-in">
          {/* Keeping background flowers but faded? Optional, but let's keep it clean white for photos */}
          <div style={{ padding: '20px 0' }}>
            <PhotoGallery />
          </div>

          <div className="container" style={{ textAlign: 'center', marginTop: 'var(--space-2)', paddingBottom: '40px' }}>
            <button
              className="btn-primary"
              onClick={() => setStep('letter')}
            >
              Open My Letter
            </button>
          </div>
        </main>
      )}

      {step === 'letter' && (
        <main className="fade-in" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Letter />
          <div className="container" style={{ textAlign: 'center', marginTop: 'var(--space-4)', paddingBottom: '40px' }}>
            <button
              style={{ color: 'hsl(var(--color-primary))', fontSize: '0.9rem' }}
              onClick={() => setStep('hero')}
            >
              Replay Experience
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
