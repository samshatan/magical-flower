import { useState } from 'react';
import { Mail, Heart } from 'lucide-react';

const Letter = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container" style={{ paddingBottom: 'var(--space-12)', perspective: '1000px' }}>
            {!isOpen ? (
                <div
                    onClick={() => setIsOpen(true)}
                    className="animate-float"
                    style={{
                        background: '#faf0f5', // light pinkish envelope color
                        width: '100%',
                        maxWidth: '320px',
                        height: '200px',
                        margin: '0 auto',
                        borderRadius: 'var(--radius-md)',
                        position: 'relative',
                        cursor: 'pointer',
                        boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '2px solid #fff'
                    }}
                >
                    {/* Envelope Flap Logic could be complex CSS, sticking to simple visual for now */}
                    <div style={{ textAlign: 'center' }}>
                        <Mail size={48} color="hsl(var(--color-primary))" />
                        <p style={{ marginTop: 'var(--space-2)', color: 'hsl(var(--color-text-muted))', fontWeight: 600 }}>
                            Tap to Open
                        </p>
                    </div>
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '60px',
                        height: '60px',
                        background: 'rgba(255,255,255,0.5)',
                        borderRadius: '50%',
                        zIndex: -1
                    }} />
                </div>
            ) : (
                <div
                    className="fade-in"
                    style={{
                        background: '#fff',
                        padding: 'var(--space-6)',
                        borderRadius: 'var(--space-2)',
                        boxShadow: 'var(--shadow-md)',
                        position: 'relative',
                        border: '1px solid #eee',
                        maxWidth: '400px',
                        margin: '0 auto',
                        backgroundImage: 'linear-gradient(#e1e1e1 1px, transparent 1px)',
                        backgroundSize: '100% 24px',
                        lineHeight: '24px' // Match line height to grid
                    }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-15px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'hsl(var(--color-primary))',
                        padding: '8px',
                        borderRadius: '50%',
                        color: 'white',
                        boxShadow: 'var(--shadow-sm)'
                    }}>
                        <Heart size={20} fill="white" />
                    </div>

                    <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        marginBottom: '24px',
                        marginTop: '12px',
                        textAlign: 'center',
                        color: 'hsl(var(--color-primary))'
                    }}>
                        My Dearest Friend,
                    </h3>

                    <p style={{ fontFamily: 'Georgia, serif', marginBottom: '24px', color: '#555' }}>
                        I wanted to take a moment to tell you how much I appreciate you. Just like a flower that blooms and brightens the garden, you brightness my life with your presence.
                    </p>

                    <p style={{ fontFamily: 'Georgia, serif', marginBottom: '24px', color: '#555' }}>
                        May your day be filled with as much joy and beauty as you bring to others.
                    </p>

                    <p style={{ fontFamily: 'Georgia, serif', textAlign: 'right', fontWeight: 'bold', color: 'hsl(var(--color-text-main))' }}>
                        With Love,<br />
                        [Your Name]
                    </p>

                    <button
                        onClick={() => setIsOpen(false)}
                        style={{
                            marginTop: '24px',
                            width: '100%',
                            padding: '8px',
                            color: 'hsl(var(--color-text-muted))',
                            fontSize: '0.8rem'
                        }}
                    >
                        close letter
                    </button>
                </div>
            )}
        </div>
    );
};

export default Letter;
