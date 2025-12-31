import { useRef } from 'react';
import { Camera } from 'lucide-react';

const PhotoGallery = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        // In a real app, this would upload to S3/Cloudinary or use URL.createObjectURL
        // For this frontend demo, we'll verify the file is selected.
        const files = event.target.files;
        if (files && files.length > 0) {
            alert(`Selected ${files.length} photos! (This is a frontend demo)`);
        }
    };

    return (
        <div className="container" style={{ paddingBottom: 'var(--space-8)' }}>
            <div className="glass-panel" style={{ padding: 'var(--space-4)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: 'var(--space-4)', color: 'hsl(var(--color-primary))' }}>
                    Our Beautiful Memories
                </h3>

                {/* Placeholder Gallery Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: 'var(--space-3)',
                    marginBottom: 'var(--space-4)'
                }}>
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} style={{
                            aspectRatio: i % 2 === 0 ? '3/4' : '1/1',
                            background: `hsl(340, 20%, ${90 + i}%)`,
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '4px solid white',
                            boxShadow: 'var(--shadow-sm)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <span style={{ opacity: 0.3 }}>Photo {i}</span>
                        </div>
                    ))}
                </div>

                <button
                    className="btn-primary"
                    onClick={() => fileInputRef.current?.click()}
                    style={{ background: 'var(--color-secondary)', width: 'auto', margin: '0 auto' }}
                >
                    <Camera size={20} />
                    <span>Add Photos</span>
                </button>
                <input
                    type="file"
                    multiple
                    accept="image/*"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleUpload}
                />
            </div>
        </div>
    );
};

export default PhotoGallery;
