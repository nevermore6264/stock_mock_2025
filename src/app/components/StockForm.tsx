import React from 'react';

export interface StockFormData {
    stockCode: string;
    costPrice: string;
    marketPrice: string;
    totalVolume: string;
    normalVolume: string;
    fsVolume: string;
    availableVolume: string;
    outroomVolume: string;
    t0Volume: string;
    t1Volume: string;
    t2Volume: string;
    profitLoss: string;
    isProfit: boolean;
}

interface StockFormProps {
    onSubmit: (data: StockFormData) => void;
}

const StockForm: React.FC<StockFormProps> = ({ onSubmit }) => {
    const [form, setForm] = React.useState<StockFormData>({
        stockCode: '',
        costPrice: '',
        marketPrice: '',
        totalVolume: '',
        normalVolume: '',
        fsVolume: '',
        availableVolume: '',
        outroomVolume: '',
        t0Volume: '',
        t1Volume: '',
        t2Volume: '',
        profitLoss: '',
        isProfit: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320, background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: 24 }}>
            <input name="stockCode" placeholder="Mã CP" value={form.stockCode} onChange={handleChange} required style={{ border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 14px', fontSize: 16, outline: 'none', marginBottom: 4, background: '#f9fafb', transition: 'border 0.2s', boxSizing: 'border-box' }} />
            <input name="costPrice" placeholder="Giá vốn" value={form.costPrice} onChange={handleChange} required style={{ border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 14px', fontSize: 16, outline: 'none', marginBottom: 4, background: '#f9fafb', transition: 'border 0.2s', boxSizing: 'border-box' }} />
            <input name="marketPrice" placeholder="Giá TT" value={form.marketPrice} onChange={handleChange} required style={{ border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 14px', fontSize: 16, outline: 'none', marginBottom: 4, background: '#f9fafb', transition: 'border 0.2s', boxSizing: 'border-box' }} />
            <input name="totalVolume" placeholder="Tổng KL" value={form.totalVolume} onChange={handleChange} required style={{ border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 14px', fontSize: 16, outline: 'none', marginBottom: 4, background: '#f9fafb', transition: 'border 0.2s', boxSizing: 'border-box' }} />
            <input name="profitLoss" placeholder="Lãi/Lỗ" value={form.profitLoss} onChange={handleChange} required style={{ border: '1px solid #d1d5db', borderRadius: 8, padding: '10px 14px', fontSize: 16, outline: 'none', marginBottom: 8, background: '#f9fafb', transition: 'border 0.2s', boxSizing: 'border-box' }} />
            <button type="submit" style={{ background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 0', fontWeight: 600, fontSize: 16, cursor: 'pointer', marginTop: 8, boxShadow: '0 1px 4px rgba(99,102,241,0.08)' }}>Cập nhật</button>
        </form>
    );
};

export default StockForm; 