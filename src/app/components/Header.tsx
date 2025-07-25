import React from 'react';

const Header: React.FC = () => (
    <header style={{
        width: '100%',
        background: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 20,
    }}>
        <div style={{
            width: '100%',
            maxWidth: '100%',
            padding: '12px 20px',
            borderRadius: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            boxShadow: '0 4px 16px rgba(102, 126, 234, 0.08), 0 1px 4px rgba(0, 0, 0, 0.06)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
        }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(102, 126, 234, 0.08), 0 1px 4px rgba(0, 0, 0, 0.06)';
            }}
        >
            {/* Simple decorative background elements */}
            <div style={{
                position: 'absolute',
                top: -10,
                right: -10,
                width: 30,
                height: 30,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                bottom: -8,
                left: -8,
                width: 20,
                height: 20,
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.06) 0%, rgba(102, 126, 234, 0.06) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />

            {/* Main content */}
            <div style={{
                width: 40,
                height: 40,
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(102, 126, 234, 0.2)',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease',
                flexShrink: 0,
            }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) rotate(3deg)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
            >
                <span style={{
                    fontSize: 20,
                    color: '#fff',
                    filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))',
                }}>📈</span>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                zIndex: 1,
                flex: 1,
            }}>
                <span style={{
                    fontWeight: 700,
                    fontSize: 18,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: 0.3,
                    marginBottom: 2,
                }}>Stock Mockup</span>
                <span style={{
                    fontSize: 11,
                    color: '#64748b',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                }}>
                    <span style={{ fontSize: 10 }}>✨</span>
                    <span>iPhone 16 UI Generator</span>
                </span>
            </div>

            {/* Status indicator */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '4px 8px',
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: 8,
                border: '1px solid rgba(34, 197, 94, 0.15)',
                flexShrink: 0,
            }}>
                <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#22c55e',
                    animation: 'pulse 2s infinite',
                }} />
                <span style={{
                    fontSize: 10,
                    color: '#16a34a',
                    fontWeight: 600,
                }}>Live</span>
            </div>
        </div>

        <style jsx>{`
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.5; }
            }
        `}</style>
    </header>
);

export default Header; 