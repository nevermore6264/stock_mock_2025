import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            width: '100%',
            padding: '12px 0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'sticky',
            bottom: 0,
            zIndex: 20,
            boxShadow: '0 -2px 12px rgba(102, 126, 234, 0.1)',
        }}>
            <div style={{
                width: '100%',
                padding: '0 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
                flexWrap: 'wrap',
            }}>
                {/* Icon */}
                <div style={{
                    width: 24,
                    height: 24,
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                }}>
                    <span style={{ fontSize: 12, color: '#fff' }}>📱</span>
                </div>

                {/* Title */}
                <div style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#fff',
                }}>
                    Stock Mockup {currentYear}
                </div>

                {/* Separator */}
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}>•</span>

                {/* Developer */}
                <div style={{
                    fontSize: 12,
                    color: 'rgba(255, 255, 255, 0.8)',
                }}>
                    by <strong style={{ color: '#fff' }}>Trần Trung Hiếu</strong>
                </div>

                {/* Separator */}
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}>•</span>

                {/* Role Badge */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: '4px 8px',
                    borderRadius: 12,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: 11,
                    color: '#fff',
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                }}>
                    <span>💻</span>
                    <span>Senior Java Developer</span>
                </div>

                {/* Separator */}
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}>•</span>

                {/* Email */}
                <a
                    href="mailto:hieupikas2606@gmail.com"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        color: 'rgba(255, 255, 255, 0.9)',
                        textDecoration: 'none',
                        padding: '4px 8px',
                        borderRadius: 8,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        fontSize: 11,
                        fontWeight: 500,
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                >
                    <span style={{ fontSize: 11 }}>📧</span>
                    <span>hieupikas2606@gmail.com</span>
                </a>

                {/* Separator */}
                <span style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 12 }}>•</span>

                {/* Location */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 8px',
                    borderRadius: 8,
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    fontSize: 11,
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontWeight: 500,
                }}>
                    <span style={{ fontSize: 11 }}>📍</span>
                    <span>Đà Nẵng</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 