import { Gift } from 'lucide-react';

const MessageCard = () => {
    return (
        <div className="container" style={{ paddingBottom: 'var(--space-8)' }}>
            <div className="glass-panel" style={{
                padding: 'var(--space-6)',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #fff 0%, hsl(340, 100%, 98%) 100%)'
            }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    background: 'hsl(var(--color-primary-light))',
                    color: 'hsl(var(--color-primary))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto var(--space-4) auto'
                }}>
                    <Gift size={24} />
                </div>

                <h3 style={{ marginBottom: 'var(--space-4)', color: 'hsl(var(--color-text-main))' }}>
                    For My Wonderful Friend
                </h3>

                <p style={{
                    color: 'hsl(var(--color-text-muted))',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    marginBottom: 'var(--space-4)'
                }}>
                    "Wishing you a day as beautiful as these flowers. May your life always be filled with blooming happiness and joy!"
                </p>

                <p style={{
                    fontSize: 'var(--text-sm)',
                    fontWeight: '600',
                    color: 'hsl(var(--color-primary))'
                }}>
                    Happy Flowers Day! 🌸
                </p>
            </div>
        </div>
    );
};

export default MessageCard;
