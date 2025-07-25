import React from 'react';
import { StockFormData } from './StockForm';

interface PortfolioCardProps {
    data: StockFormData;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ data }) => {
    return (
        <div style={{
            width: '361px', // iPhone 16 screen width
            height: '820px', // iPhone 16 screen height
            background: '#fff',
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            fontSize: 12,
            color: '#333',
            overflow: 'hidden', // Prevent body scroll
        }}>
            {/* Fixed Header Section */}
            <div style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: '#fff',
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
                    fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                    <span style={{ fontWeight: '600', fontSize: 16, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Cổ phiếu</span>
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
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontWeight: '500',
                    }}>
                        Tài khoản 1
                    </div>
                    <div style={{
                        padding: '6px 12px',
                        borderRadius: 16,
                        fontSize: 11,
                        background: '#f8f9fa',
                        color: '#666',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontWeight: '500',
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
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        fontWeight: '600',
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
                        fontWeight: '600',
                        color: '#333',
                        borderBottom: '2px solid #6366f1',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}>
                        Danh mục nắm giữ
                    </div>
                    <div style={{
                        padding: '8px 0',
                        fontSize: 13,
                        color: '#666',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}>
                        Cơ cấu danh mục
                    </div>
                </div>
            </div>

            {/* Scrollable Content */}
            <div
                className="scrollable-content"
                style={{
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                }}
            >
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
                            <div style={{ fontSize: 11, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                Lãi lỗ danh mục 👁️
                            </div>
                            <div style={{ fontSize: 14, fontWeight: '600', color: '#ef4444', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                -3,840,800
                            </div>
                            <div style={{ fontSize: 11, color: '#ef4444', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                -0.52%
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: 11, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                Lãi/Lỗ hôm nay ℹ️
                            </div>
                            <div style={{ fontSize: 14, fontWeight: '600', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                0
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: 11, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                Tổng vốn ℹ️
                            </div>
                            <div style={{ fontSize: 14, fontWeight: '600', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                732,680,800
                            </div>
                        </div>
                        <div>
                            <div style={{ fontSize: 11, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
                                Tổng giá trị thị trường
                            </div>
                            <div style={{ fontSize: 14, fontWeight: '600', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
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
                            <span style={{ fontSize: 11, color: '#666', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Ẩn khối lượng</span>
                        </div>
                        <button style={{
                            padding: '6px 12px',
                            background: 'transparent',
                            color: '#ef4444',
                            border: '1px solid #ef4444',
                            borderRadius: 4,
                            fontSize: 11,
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                        fontWeight: '600',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                        fontWeight: '600',
                        marginBottom: 12,
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                            <div style={{ color: '#666', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Tổng vốn</div>
                            <div style={{ fontWeight: '600', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>585,344,000</div>
                        </div>
                        <div>
                            <div style={{ color: '#666', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Giá trị thị trường</div>
                            <div style={{ fontWeight: '600', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>574,400,000</div>
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <div style={{ color: '#666', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Lãi / Lỗ</div>
                            <div style={{ fontWeight: '600', color: '#ef4444', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>-10,944,000</div>
                        </div>
                    </div>

                    {/* Volume Details for HSG */}
                    <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 11, fontWeight: '600', marginBottom: 8, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Tổng KL: 32,000</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL thường: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL FS: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL có thể bán: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 8, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Outroom: 0</div>

                        <div style={{ fontSize: 11, fontWeight: '600', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL mua chờ về:</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 2, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL T0: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 2, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL T1: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 12, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL T2: 32,000</div>
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
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}>
                            Thông tin mã
                        </button>
                    </div>
                </div>

                {/* HAG Stock Row */}
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
                        fontWeight: '600',
                        marginBottom: 12,
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}>
                        <div style={{ color: '#10b981' }}>HAG ^</div>
                        <div>14.17</div>
                        <div>14.85</div>
                        <div>0</div>
                        <div style={{ color: '#10b981' }}>+4.82%</div>
                    </div>

                    {/* HAG Details */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 8,
                        marginBottom: 12,
                        fontSize: 11,
                    }}>
                        <div>
                            <div style={{ color: '#666', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Tổng vốn</div>
                            <div style={{ fontWeight: '600', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>147,336,800</div>
                        </div>
                        <div>
                            <div style={{ color: '#666', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Giá trị thị trường</div>
                            <div style={{ fontWeight: '600', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>154,440,000</div>
                        </div>
                        <div style={{ gridColumn: '1 / -1' }}>
                            <div style={{ color: '#666', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Lãi / Lỗ</div>
                            <div style={{ fontWeight: '600', color: '#10b981', fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>+7,103,200</div>
                        </div>
                    </div>

                    {/* Volume Details for HAG */}
                    <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 11, fontWeight: '600', marginBottom: 8, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Tổng KL: 10,400</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL thường: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL FS: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL có thể bán: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 8, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>Outroom: 10,400</div>

                        <div style={{ fontSize: 11, fontWeight: '600', marginBottom: 4, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL mua chờ về:</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 2, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL T0: 0</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 2, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL T1: 10,400</div>
                        <div style={{ fontSize: 10, color: '#666', marginBottom: 12, fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>KL T2: 0</div>
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
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                            fontWeight: '600',
                            cursor: 'pointer',
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                }}>
                    <button style={{
                        flex: 1,
                        background: '#10b981',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '12px',
                        fontSize: 14,
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
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
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                    }}>
                        BÁN
                    </button>
                </div>
            </div>

            {/* Fixed Bottom Navigation */}
            <div style={{
                position: 'sticky',
                bottom: 0,
                background: '#fff',
                borderTop: '1px solid #f0f0f0',
                zIndex: 100,
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: '8px 0 4px 0', // Giảm padding
                    background: '#fff',
                }}>
                    {/* Home - Selected */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2, // Giảm gap
                        padding: '2px 4px', // Giảm padding
                    }}>
                        <div style={{
                            width: 20, // Giảm kích thước icon
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 1, // Giảm margin
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                            fontSize: 9, // Giảm font size
                            color: '#6366f1',
                            fontWeight: '600',
                            lineHeight: 1,
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}>Trang chủ</span>
                    </div>

                    {/* Market */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2, // Giảm gap
                        padding: '2px 4px', // Giảm padding
                    }}>
                        <div style={{
                            width: 20, // Giảm kích thước icon
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 1, // Giảm margin
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                            fontSize: 9, // Giảm font size
                            color: '#9ca3af',
                            fontWeight: '500',
                            lineHeight: 1,
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}>Thị trường</span>
                    </div>

                    {/* Transaction */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        padding: '2px 4px',
                    }}>
                        <div style={{
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 1,
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                            fontSize: 9,
                            color: '#9ca3af',
                            fontWeight: '500',
                            lineHeight: 1,
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}>Giao dịch</span>
                    </div>

                    {/* Assets */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        padding: '2px 4px',
                    }}>
                        <div style={{
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 1,
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                            fontSize: 9,
                            color: '#9ca3af',
                            fontWeight: '500',
                            lineHeight: 1,
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}>Tài sản</span>
                    </div>

                    {/* All */}
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 2,
                        padding: '2px 4px',
                    }}>
                        <div style={{
                            width: 20,
                            height: 20,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginBottom: 1,
                        }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
                            fontSize: 9,
                            color: '#9ca3af',
                            fontWeight: '500',
                            lineHeight: 1,
                            fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        }}>Tất cả</span>
                    </div>
                </div>

                {/* Home Indicator */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '8px 0 4px 0',
                    background: '#fff',
                }}>
                    <div style={{
                        width: '134px',
                        height: '5px',
                        background: '#000',
                        borderRadius: '3px',
                    }} />
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard; 