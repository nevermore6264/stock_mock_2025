import React from 'react';
import { StockFormData } from './StockForm';

interface PortfolioCardProps {
    data: StockFormData;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ data }) => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
            fontSize: 12,
            color: '#333',
        }}>
            {/* Status Bar */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '4px 16px',
                background: '#000',
                color: '#fff',
                fontSize: 10,
                height: 20,
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span>23:56</span>
                    <span>🔔</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span>📶</span>
                    <span>📶</span>
                    <span>🔋 49</span>
                </div>
            </div>

            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderBottom: '1px solid #f0f0f0',
                background: '#fff',
            }}>
                <span>←</span>
                <span style={{ fontWeight: 'bold', fontSize: 16 }}>Cổ phiếu</span>
                <span>🔍</span>
            </div>

            {/* Account Tabs */}
            <div style={{
                display: 'flex',
                padding: '8px 16px',
                gap: 8,
                borderBottom: '1px solid #f0f0f0',
                background: '#fff',
            }}>
                <div style={{
                    padding: '6px 12px',
                    borderRadius: 16,
                    fontSize: 11,
                    background: '#f8f9fa',
                    color: '#666',
                }}>
                    Tài khoản 1
                </div>
                <div style={{
                    padding: '6px 12px',
                    borderRadius: 16,
                    fontSize: 11,
                    background: '#f8f9fa',
                    color: '#666',
                }}>
                    Tài khoản 3
                </div>
                <div style={{
                    padding: '6px 12px',
                    borderRadius: 16,
                    fontSize: 11,
                    background: '#6366f1',
                    color: '#fff',
                    borderBottom: '2px solid #6366f1',
                }}>
                    Tài khoản 6
                </div>
            </div>

            {/* Portfolio Tabs */}
            <div style={{
                display: 'flex',
                padding: '8px 16px',
                gap: 16,
                borderBottom: '1px solid #f0f0f0',
                background: '#fff',
            }}>
                <div style={{
                    padding: '8px 0',
                    fontSize: 13,
                    fontWeight: 'bold',
                    color: '#333',
                    borderBottom: '2px solid #6366f1',
                }}>
                    Danh mục nắm giữ
                </div>
                <div style={{
                    padding: '8px 0',
                    fontSize: 13,
                    color: '#666',
                }}>
                    Cơ cấu danh mục
                </div>
            </div>

            {/* Portfolio Summary */}
            <div style={{
                padding: '16px',
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 12,
                    marginBottom: 16,
                }}>
                    <div>
                        <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
                            Lãi lỗ danh mục 👁️
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 'bold', color: '#ef4444' }}>
                            -3,840,800
                        </div>
                        <div style={{ fontSize: 11, color: '#ef4444' }}>
                            -0.52%
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
                            Lãi/Lỗ hôm nay ℹ️
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 'bold' }}>
                            0
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
                            Tổng vốn ℹ️
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 'bold' }}>
                            732,680,800
                        </div>
                    </div>
                    <div>
                        <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
                            Tổng giá trị thị trường
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 'bold' }}>
                            728,840,000
                        </div>
                    </div>
                </div>

                {/* Hide Volume Checkbox and Sell Multiple Button */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 12,
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <input type="checkbox" style={{ width: 16, height: 16 }} />
                        <span style={{ fontSize: 11, color: '#666' }}>Ẩn khối lượng</span>
                    </div>
                    <button style={{
                        padding: '6px 12px',
                        background: 'transparent',
                        color: '#ef4444',
                        border: '1px solid #ef4444',
                        borderRadius: 4,
                        fontSize: 11,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}>
                        Bán nhiều mã
                    </button>
                </div>
            </div>

            {/* Stock Table Header */}
            <div style={{
                padding: '12px 16px',
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    gap: 8,
                    fontSize: 10,
                    color: '#666',
                    fontWeight: 'bold',
                }}>
                    <div>MÃ CP</div>
                    <div>GIÁ VỐN</div>
                    <div>GIÁ TT</div>
                    <div>KL ↕️</div>
                    <div>LÃI/LỖ</div>
                </div>
            </div>

            {/* HSG Stock Row */}
            <div style={{
                padding: '12px 16px',
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    gap: 8,
                    fontSize: 11,
                    fontWeight: 'bold',
                    marginBottom: 12,
                }}>
                    <div style={{ color: '#ef4444' }}>HSG ^</div>
                    <div>18.29</div>
                    <div>17.95</div>
                    <div>0</div>
                    <div style={{ color: '#ef4444' }}>-1.87%</div>
                </div>

                {/* HSG Details */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8,
                    marginBottom: 12,
                    fontSize: 11,
                }}>
                    <div>
                        <div style={{ color: '#666' }}>Tổng vốn</div>
                        <div style={{ fontWeight: 'bold' }}>585,344,000</div>
                    </div>
                    <div>
                        <div style={{ color: '#666' }}>Giá trị thị trường</div>
                        <div style={{ fontWeight: 'bold' }}>574,400,000</div>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <div style={{ color: '#666' }}>Lãi / Lỗ</div>
                        <div style={{ fontWeight: 'bold', color: '#ef4444' }}>-10,944,000</div>
                    </div>
                </div>

                {/* Volume Details for HSG */}
                <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 8 }}>Tổng KL: 32,000</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL thường: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL FS: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL có thể bán: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 8 }}>Outroom: 0</div>

                    <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 4 }}>KL mua chờ về:</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 2 }}>KL T0: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 2 }}>KL T1: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 12 }}>KL T2: 32,000</div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    gap: 8,
                }}>
                    <button style={{
                        flex: 1,
                        background: 'transparent',
                        color: '#10b981',
                        border: '1px solid #10b981',
                        borderRadius: 6,
                        padding: '8px',
                        fontSize: 11,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}>
                        Mua
                    </button>
                    <button style={{
                        flex: 1,
                        background: 'transparent',
                        color: '#ef4444',
                        border: '1px solid #ef4444',
                        borderRadius: 6,
                        padding: '8px',
                        fontSize: 11,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}>
                        Bán
                    </button>
                    <button style={{
                        flex: 1,
                        background: 'transparent',
                        color: '#6b7280',
                        border: '1px solid #6b7280',
                        borderRadius: 6,
                        padding: '8px',
                        fontSize: 11,
                        fontWeight: 'bold',
                        cursor: 'pointer',
                    }}>
                        Thông tin mã
                    </button>
                </div>
            </div>

            {/* Bottom Action Buttons */}
            <div style={{
                display: 'flex',
                gap: 12,
                padding: '16px',
                background: '#fff',
                marginTop: 'auto',
            }}>
                <button style={{
                    flex: 1,
                    background: '#10b981',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '12px',
                    fontSize: 14,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}>
                    MUA
                </button>
                <button style={{
                    flex: 1,
                    background: '#ef4444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '12px',
                    fontSize: 14,
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }}>
                    BÁN
                </button>
            </div>

            {/* Bottom Navigation */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding: '12px 0 8px 0',
                background: '#fff',
                borderTop: '1px solid #f0f0f0',
                position: 'relative',
            }}>
                {/* Home - Selected */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 8px',
                }}>
                    <div style={{
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 2,
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                                stroke="#6366f1"
                                strokeWidth="2"
                                fill="none"
                            />
                            <polyline
                                points="9,22 9,12 15,12 15,22"
                                stroke="#6366f1"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <span style={{
                        fontSize: 10,
                        color: '#6366f1',
                        fontWeight: '600',
                        lineHeight: 1,
                    }}>Trang chủ</span>
                </div>

                {/* Market */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 8px',
                }}>
                    <div style={{
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 2,
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M3 3v18h18"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M7 12l3-3 3 3 4-4"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M18 8v2"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M18 12v2"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M18 16v2"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <span style={{
                        fontSize: 10,
                        color: '#9ca3af',
                        fontWeight: '500',
                        lineHeight: 1,
                    }}>Thị trường</span>
                </div>

                {/* Transaction */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 8px',
                }}>
                    <div style={{
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 2,
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M9 12l2 2 4-4"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M21 12c-1 0-2-1-2-2s1-2 2-2 2 1 2 2-1 2-2 2z"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M3 12c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M12 3c0 1-1 2-2 2s-2-1-2-2 1-2 2-2 2 1 2 2z"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M12 21c0-1 1-2 2-2s2 1 2 2-1 2-2 2-2-1-2-2z"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <span style={{
                        fontSize: 10,
                        color: '#9ca3af',
                        fontWeight: '500',
                        lineHeight: 1,
                    }}>Giao dịch</span>
                </div>

                {/* Assets */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 8px',
                }}>
                    <div style={{
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 2,
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <polyline
                                points="7.5,4.21 12,6.81 16.5,4.21"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <polyline
                                points="7.5,19.79 7.5,14.6 3,12"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <polyline
                                points="21,12 16.5,14.6 16.5,19.79"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <polyline
                                points="3.27,6.96 12,12.01 20.73,6.96"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <line
                                x1="12" y1="22.08" x2="12" y2="12"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <span style={{
                        fontSize: 10,
                        color: '#9ca3af',
                        fontWeight: '500',
                        lineHeight: 1,
                    }}>Tài sản</span>
                </div>

                {/* All */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    padding: '4px 8px',
                }}>
                    <div style={{
                        width: 24,
                        height: 24,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 2,
                    }}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <rect
                                x="3" y="3" width="7" height="7"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <rect
                                x="14" y="3" width="7" height="7"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <rect
                                x="14" y="14" width="7" height="7"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                            <rect
                                x="3" y="14" width="7" height="7"
                                stroke="#9ca3af"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                    <span style={{
                        fontSize: 10,
                        color: '#9ca3af',
                        fontWeight: '500',
                        lineHeight: 1,
                    }}>Tất cả</span>
                </div>
            </div>

            {/* Home Indicator */}
            <div style={{
                width: '100%',
                height: 4,
                background: '#000',
                position: 'absolute',
                bottom: 0,
                left: 0,
            }} />
        </div>
    );
};

export default PortfolioCard; 