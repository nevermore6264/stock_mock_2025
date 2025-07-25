import React from 'react';

const Iphone16Mockup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div style={{
            width: 361, // iPhone 16 screen width
            height: 820, // iPhone 16 screen height
            background: '#fff',
            borderRadius: 24,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        }}>
            {children}
        </div>
    );
};

export default Iphone16Mockup; 