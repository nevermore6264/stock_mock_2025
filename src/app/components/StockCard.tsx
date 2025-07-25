import React from 'react';
import { StockFormData } from './StockForm';

interface StockCardProps {
    data: StockFormData;
}

const StockCard: React.FC<StockCardProps> = ({ data }) => {
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

            {/* Stock Summary */}
            <div style={{
                padding: '16px',
                background: '#fff',
                borderBottom: '1px solid #f0f0f0',
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    gap: 8,
                    marginBottom: 12,
                    fontSize: 10,
                    color: '#666',
                    fontWeight: 'bold',
                }}>
                    <div>MÃ CP</div>
                    <div>GIÁ VỐN</div>
                    <div>GIÁ TT</div>
                    <div>KL</div>
                    <div>LÃI/LỖ</div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    gap: 8,
                    fontSize: 11,
                    fontWeight: 'bold',
                }}>
                    <div>{data.stockCode}</div>
                    <div>{data.costPrice}</div>
                    <div>{data.marketPrice}</div>
                    <div>{data.totalVolume}</div>
                    <div style={{ color: data.isProfit ? '#10b981' : '#ef4444' }}>
                        {data.profitLoss}
                    </div>
                </div>

                {/* Volume Details */}
                <div style={{ marginTop: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 8 }}>Tổng KL: {data.totalVolume}</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL thường: {data.normalVolume}</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL FS: {data.fsVolume}</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL có thể bán: {data.availableVolume}</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 8 }}>Outroom: {data.outroomVolume}</div>

                    <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 4 }}>KL mua chờ về:</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 2 }}>KL T0: {data.t0Volume}</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 2 }}>KL T1: {data.t1Volume}</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 12 }}>KL T2: {data.t2Volume}</div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    gap: 8,
                    marginTop: 12,
                }}>
                    <button style={{
                        flex: 1,
                        background: '#10b981',
                        color: '#fff',
                        border: 'none',
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
                        background: '#ef4444',
                        color: '#fff',
                        border: 'none',
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
                        background: '#6b7280',
                        color: '#fff',
                        border: 'none',
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

            {/* Stock Detail (HAG Example) */}
            <div style={{
                padding: '16px',
                background: '#fff',
                flex: 1,
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 12,
                }}>
                    <div style={{ fontSize: 14, fontWeight: 'bold' }}>HAG ^</div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 12, color: '#666' }}>14.17</div>
                        <div style={{ fontSize: 14, fontWeight: 'bold' }}>14.85</div>
                        <div style={{ fontSize: 11, color: '#10b981' }}>+0 +4.82%</div>
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: 8,
                    marginBottom: 12,
                    fontSize: 11,
                }}>
                    <div>
                        <div style={{ color: '#666' }}>Tổng vốn</div>
                        <div style={{ fontWeight: 'bold' }}>147,336,800</div>
                    </div>
                    <div>
                        <div style={{ color: '#666' }}>Giá trị thị trường</div>
                        <div style={{ fontWeight: 'bold' }}>154,440,000</div>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                        <div style={{ color: '#666' }}>Lãi / Lỗ</div>
                        <div style={{ fontWeight: 'bold', color: '#10b981' }}>+7,103,200</div>
                    </div>
                </div>

                {/* Volume Details for HAG */}
                <div style={{ marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 8 }}>Tổng KL: 10,400</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL thường: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL FS: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 4 }}>KL có thể bán: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 8 }}>Outroom: 10,400</div>

                    <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 4 }}>KL mua chờ về:</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 2 }}>KL T0: 0</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 2 }}>KL T1: 10,400</div>
                    <div style={{ fontSize: 10, color: '#666', marginBottom: 12 }}>KL T2: 0</div>
                </div>

                {/* Action Buttons */}
                <div style={{
                    display: 'flex',
                    gap: 8,
                }}>
                    <button style={{
                        flex: 1,
                        background: '#10b981',
                        color: '#fff',
                        border: 'none',
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
                        background: '#ef4444',
                        color: '#fff',
                        border: 'none',
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
                        background: '#6b7280',
                        color: '#fff',
                        border: 'none',
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

export default StockCard; 