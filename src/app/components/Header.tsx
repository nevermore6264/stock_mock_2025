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
            padding: '20px 32px',
            borderRadius: 0,
            background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
            boxShadow: '0 8px 32px rgba(102, 126, 234, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
        }}
            onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(102, 126, 234, 0.18), 0 4px 12px rgba(0, 0, 0, 0.1)';
            }}
            onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(102, 126, 234, 0.12), 0 2px 8px rgba(0, 0, 0, 0.08)';
            }}
        >
            {/* Decorative background elements - Multiple dots */}
            <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 60,
                height: 60,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                bottom: -15,
                left: -15,
                width: 40,
                height: 40,
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />

            {/* Additional decorative dots */}
            <div style={{
                position: 'absolute',
                top: 20,
                right: '15%',
                width: 12,
                height: 12,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(118, 75, 162, 0.15) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                top: 40,
                right: '25%',
                width: 8,
                height: 8,
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.12) 0%, rgba(102, 126, 234, 0.12) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                bottom: 25,
                right: '35%',
                width: 16,
                height: 16,
                background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.08) 0%, rgba(102, 126, 234, 0.08) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                top: 15,
                left: '20%',
                width: 10,
                height: 10,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(96, 165, 250, 0.1) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                bottom: 35,
                left: '30%',
                width: 14,
                height: 14,
                background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.06) 0%, rgba(102, 126, 234, 0.06) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                top: 50,
                left: '45%',
                width: 6,
                height: 6,
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                bottom: 15,
                left: '60%',
                width: 18,
                height: 18,
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(96, 165, 250, 0.05) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                top: 30,
                right: '45%',
                width: 9,
                height: 9,
                background: 'linear-gradient(135deg, rgba(118, 75, 162, 0.07) 0%, rgba(102, 126, 234, 0.07) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />
            <div style={{
                position: 'absolute',
                bottom: 45,
                right: '55%',
                width: 11,
                height: 11,
                background: 'linear-gradient(135deg, rgba(96, 165, 250, 0.09) 0%, rgba(118, 75, 162, 0.09) 100%)',
                borderRadius: '50%',
                zIndex: 0,
            }} />

            {/* Main content */}
            <div style={{
                width: 56,
                height: 56,
                borderRadius: '16px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(102, 126, 234, 0.3)',
                position: 'relative',
                zIndex: 1,
                transition: 'all 0.3s ease',
                flexShrink: 0,
            }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05) rotate(5deg)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}
            >
                <span style={{
                    fontSize: 28,
                    color: '#fff',
                    filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
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
                    fontWeight: 800,
                    fontSize: 26,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: 0.5,
                    marginBottom: 4,
                }}>Stock Mockup</span>
                <span style={{
                    fontSize: 14,
                    color: '#64748b',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                }}>
                    <span style={{ fontSize: 12 }}>✨</span>
                    <span>iPhone 16 UI Generator</span>
                </span>
            </div>

            {/* Status indicator */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 12px',
                background: 'rgba(34, 197, 94, 0.1)',
                borderRadius: 12,
                border: '1px solid rgba(34, 197, 94, 0.2)',
                flexShrink: 0,
            }}>
                <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#22c55e',
                    animation: 'pulse 2s infinite',
                }} />
                <span style={{
                    fontSize: 12,
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