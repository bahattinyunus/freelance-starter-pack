const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rate Limiting (Hız Sınırlama)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 dakika
    max: 100, // Her IP için 100 istek limiti
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

// Mock Veriler
const users = [
    { id: 1, name: 'Ahmet Yılmaz', role: 'Admin' },
    { id: 2, name: 'Ayşe Demir', role: 'Kullanıcı' },
    { id: 3, name: 'Mehmet Öz', role: 'Kullanıcı' }
];

const products = [
    { id: 101, name: 'Laptop', price: 15000, stock: 5 },
    { id: 102, name: 'Kablosuz Mouse', price: 350, stock: 20 },
    { id: 103, name: 'Mekanik Klavye', price: 1200, stock: 8 }
];

// Rotalar
app.get('/', (req, res) => {
    res.json({ message: 'Public API\'ye Hoş Geldiniz', version: '1.0.0' });
});

// Kullanıcılar Endpoint'i
app.get('/api/users', (req, res) => {
    res.json(users);
});

app.get('/api/users/:id', (req, res) => {
    const user = users.find(u => u.id == req.params.id);
    if (!user) return res.status(404).json({ error: 'Kullanıcı bulunamadı' });
    res.json(user);
});

// Ürünler Endpoint'i (Yeni)
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Sunucuyu Başlat
app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
