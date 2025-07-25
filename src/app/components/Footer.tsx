import React from 'react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            width: '100%',
            padding: '32px 0 24px 0',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            position: 'sticky',
            bottom: 0,
            zIndex: 20,
            boxShadow: '0 -8px 32px rgba(102, 126, 234, 0.15)',
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 16,
            }}>
                {/* Main Content */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    marginBottom: 8,
                }}>
                    <div style={{
                        width: 40,
                        height: 40,
                        background: 'rgba(255, 255, 255, 0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}>
                        <span style={{ fontSize: 18, color: '#fff' }}>📱</span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <div style={{
                            fontSize: 18,
                            fontWeight: 700,
                            color: '#fff',
                            marginBottom: 4,
                        }}>
                            Stock Mockup {currentYear}
                        </div>
                        <div style={{
                            fontSize: 14,
                            color: 'rgba(255, 255, 255, 0.8)',
                            fontWeight: 500,
                        }}>
                            Developed by <strong style={{ color: '#fff' }}>Trần Trung Hiếu</strong>
                        </div>
                    </div>
                </div>

                {/* Role Badge */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: '8px 16px',
                    borderRadius: 20,
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    marginBottom: 8,
                }}>
                    <span style={{
                        fontSize: 13,
                        color: '#fff',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                    }}>
                        <span>💻</span>
                        <span>Senior Java Developer</span>
                    </span>
                </div>

                {/* Contact Info */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}>
                    <a
                        href="mailto:hieupikas2606@gmail.com"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 8,
                            color: 'rgba(255, 255, 255, 0.9)',
                            textDecoration: 'none',
                            padding: '8px 16px',
                            borderRadius: 12,
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            transition: 'all 0.3s ease',
                            fontSize: 14,
                            fontWeight: 500,
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <span style={{ fontSize: 16 }}>📧</span>
                        <span>hieupikas2606@gmail.com</span>
                    </a>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '8px 16px',
                        borderRadius: 12,
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        fontSize: 14,
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontWeight: 500,
                    }}>
                        <span style={{ fontSize: 16 }}>📍</span>
                        <span>Đà Nẵng</span>
                    </div>
                </div>

                {/* Decorative Line */}
                <div style={{
                    width: '60px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent)',
                    marginTop: 8,
                }} />
            </div>
        </footer>
    );
};

export default Footer; 