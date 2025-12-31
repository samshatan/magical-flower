import { ArrowRight, Heart } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero = ({ onStart }: HeroProps) => {
  return (
    <div className="hero-section" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: 'var(--space-6)',
      textAlign: 'center',
      background: 'var(--gradient-soft)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative Background Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(340, 82, 52, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(40px)',
        zIndex: 0
      }} />
      
      <div className="content animate-float" style={{ zIndex: 1, maxWidth: '400px' }}>
        <div style={{ 
          marginBottom: 'var(--space-6)',
          display: 'inline-flex',
          padding: 'var(--space-3)',
          background: 'rgba(255,255,255,0.6)',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <Heart fill="var(--color-primary)" color="var(--color-primary)" size={32} />
        </div>
        
        <h1 style={{ 
          color: 'hsl(var(--color-primary))', 
          marginBottom: 'var(--space-4)',
          fontSize: 'var(--text-4xl)',
          letterSpacing: '-1px'
        }}>
          Happy<br/>New Year
        </h1>
        
        <p style={{ 
          color: 'hsl(var(--color-text-muted))', 
          marginBottom: 'var(--space-8)',
          fontSize: 'var(--text-lg)'
        }}>
          I tried to make something special for you
        </p>

        <button 
          onClick={onStart}
          className="btn-primary"
          style={{ padding: 'var(--space-4) var(--space-8)' }}
        >
          <span>Happy New Year</span>
          <ArrowRight size={20} />
        </button>
      </div>

      <div style={{
          position: 'absolute',
          bottom: '20px',
          fontSize: 'var(--text-xs)',
          color: 'hsl(var(--color-text-muted))',
          opacity: 0.6
      }}>
          Made with ❤️ for you
      </div>
    </div>
  );
};

export default Hero;
