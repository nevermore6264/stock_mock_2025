'use client';

import React, { useRef, useState } from 'react';
import StockForm, { StockFormData } from './components/StockForm';
import PortfolioCard from './components/PortfolioCard';
import Iphone16Mockup from './components/Iphone16Mockup';
import html2canvas from 'html2canvas';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [stockData, setStockData] = useState<StockFormData | null>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleFormSubmit = (data: StockFormData) => {
    setStockData(data);
    setImgUrl(null);
  };

  const handleCapture = async () => {
    if (screenRef.current) {
      const canvas = await html2canvas(screenRef.current);
      setImgUrl(canvas.toDataURL('image/png'));
    }
  };

  // Temporary placeholder data for testing
  const placeholderData: StockFormData = {
    stockCode: 'HAG',
    costPrice: '585,344,000',
    marketPrice: '574,400,000',
    totalVolume: '32,000',
    normalVolume: '0',
    fsVolume: '0',
    availableVolume: '0',
    outroomVolume: '0',
    t0Volume: '0',
    t1Volume: '0',
    t2Volume: '32,000',
    profitLoss: '-10,944,000',
    isProfit: false
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(135deg, #e0e7ff 0%, #f0fdfa 100%)'
    }}>
      <Header />
      <div style={{
        flex: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0'
      }}>
        <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>
          {/* Left Column - Form */}
          <StockForm onSubmit={handleFormSubmit} />

          {/* Center Column - Mockup */}
          <div>
            <Iphone16Mockup>
              <div ref={screenRef} style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PortfolioCard data={stockData || placeholderData} />
              </div>
            </Iphone16Mockup>
          </div>

          {/* Right Column - Capture & Download */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 200 }}>
            <button
              onClick={handleCapture}
              style={{
                background: 'linear-gradient(90deg, #f59e42 0%, #fbbf24 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '14px 0',
                fontWeight: 700,
                fontSize: 16,
                cursor: 'pointer',
                width: '100%',
                boxShadow: '0 2px 8px rgba(251,191,36,0.12)',
                transition: 'box-shadow 0.2s, transform 0.2s',
              }}
              onMouseOver={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(251,191,36,0.18)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px) scale(1.03)';
              }}
              onMouseOut={e => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 8px rgba(251,191,36,0.12)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'none';
              }}
            >
              📸 Chụp ảnh mockup
            </button>

            {imgUrl && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
                <img src={imgUrl} alt="Mockup" style={{ width: 180, border: '1px solid #ccc', borderRadius: 12, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                <a
                  href={imgUrl}
                  download="mockup-iphone16-portfolio.png"
                  style={{
                    display: 'inline-block',
                    background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '12px 32px',
                    fontWeight: 700,
                    fontSize: 16,
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(99,102,241,0.10)',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    textAlign: 'center',
                    width: '100%',
                  }}
                  onMouseOver={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 16px rgba(99,102,241,0.18)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px) scale(1.03)';
                  }}
                  onMouseOut={e => {
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 8px rgba(99,102,241,0.10)';
                    (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
                  }}
                >
                  ⬇️ Tải ảnh về
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
