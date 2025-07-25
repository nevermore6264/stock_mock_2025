import React from 'react';

const Iphone16Mockup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{
            border: '16px solid #222',
            borderRadius: 40,
            width: 360,
            height: 780,
            background: '#111',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto',
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        }}>
            <div style={{ width: 320, height: 720, background: '#f5f5f5', borderRadius: 24, overflow: 'hidden' }}>
                {children}
            </div>
        </div>
    );
};

export default Iphone16Mockup; 