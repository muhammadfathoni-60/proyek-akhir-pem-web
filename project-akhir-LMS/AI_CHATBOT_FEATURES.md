# 🤖 Fitur AI Assistant - BRAINS.LMS

## Deskripsi
AI Assistant adalah fitur chatbot cerdas yang terintegrasi di halaman Beranda untuk memudahkan mahasiswa dalam:
- 📚 Pencarian materi kuliah
- 💡 Tips dan trik mengerjakan tugas
- 📅 Informasi deadline dan jadwal
- 📊 Melihat nilai dan prestasi
- 🔍 Navigasi dan bantuan umum pembelajaran

## Fitur Utama

### 1. **Pencarian Materi**
Pengguna dapat mencari mata kuliah dengan mengetik nama mata kuliah:
- Algoritma & Pemrograman
- Basis Data
- Web Development
- Kalkulus
- Sistem Operasi
- Jaringan Komputer
- Keamanan Informasi

Contoh pertanyaan:
- "Algoritma"
- "Basis data"
- "Web development"

### 2. **Tips Belajar**
AI memberikan tips praktis untuk mengerjakan tugas dengan mengetik:
- "cara mengerjakan"
- "tips tugas"
- "strategi belajar"

### 3. **Informasi Nilai**
Tampilkan nilai keseluruhan dan rincian per mata kuliah:
- Ketik: "nilai" atau "hasil belajar"

### 4. **Jadwal Deadline**
Lihat jadwal deadline terdekat:
- Ketik: "deadline" atau "jadwal"

### 5. **Status Tugas**
Lihat status semua tugas yang pending dan selesai:
- Ketik: "tugas" atau "status tugas"

### 6. **Referensi Belajar**
AI memberikan sumber referensi belajar:
- Ketik: "referensi" atau "buku"

## Cara Penggunaan

### 1. Akses AI Assistant
- Buka halaman **Beranda**
- AI Assistant widget akan muncul di sisi kanan layar
- Widget akan sticky (tetap di tempat saat scroll)

### 2. Mengirim Pertanyaan
**Metode 1: Klik Tombol Kirim**
1. Ketik pertanyaan di input field
2. Klik tombol "Kirim" atau tekan Enter

**Metode 2: Tekan Enter**
- Ketik pertanyaan
- Tekan tombol **Enter** untuk langsung mengirim

### 3. Menutup/Membuka Widget
- Klik tombol **✕** di header untuk menutup widget
- Klik tombol **✕** lagi untuk membuka kembali

## Contoh Interaksi

```
User: "Algoritma"
AI: Menampilkan info materi Algoritma & Pemrograman dengan detail dosen, 
    topik, status tugas, dan nilai terkini

User: "deadline"
AI: Menampilkan jadwal deadline terdekat dari semua mata kuliah

User: "cara mengerjakan"
AI: Memberikan 6 tips praktis mengerjakan tugas dengan efektif

User: "nilai"
AI: Menampilkan total nilai dan rincian nilai per mata kuliah
```

## Fitur Teknis

### Respons yang Didukung
- **Material Search**: Pencarian 7 mata kuliah
- **Tips & Tricks**: 5 kategori tips belajar
- **Default Responses**: Respons umum untuk pertanyaan yang tidak spesifik

### Keamanan Input
- HTML escaping untuk mencegah XSS
- Input validation sebelum proses

### Responsivitas
- **Desktop (lg)**: Widget di sidebar kanan, sticky position
- **Tablet/Mobile (md)**: Widget tetap accessible
- **Mobile (sm)**: Widget di floating position (bottom-right)

## Struktur Kode

### File yang Dimodifikasi:
1. **app.html** - Menambahkan UI widget chat
2. **assets/js/app.js** - Menambahkan logika AI dan fungsi chatbot
3. **assets/css/style.css** - Menambahkan styling untuk chat widget

### Fungsi Utama:
- `sendAiMessage()` - Mengirim pesan ke AI
- `generateAiResponse()` - Generate respons AI
- `addAiChatMessage()` - Tambah pesan ke chat
- `handleAiChatKeypress()` - Handle keyboard input
- `toggleAiChat()` - Toggle widget visibility

## Pengembangan Lebih Lanjut

### Fitur yang Dapat Ditambahkan:
1. **AI Integration dengan API**
   - Gunakan API OpenAI/Claude/Gemini untuk respons dinamis
   - Machine Learning untuk better understanding

2. **Natural Language Processing (NLP)**
   - Pemahaman lebih baik terhadap variasi pertanyaan
   - Sentiment analysis

3. **Persistent Storage**
   - Simpan chat history di localStorage
   - Cloud storage untuk sync across devices

4. **Voice Chat**
   - Speech to text input
   - Text to speech output

5. **Personalisasi**
   - Learning preferences user
   - Recommended materials based on history

6. **Multi-language Support**
   - Support untuk bahasa Indonesia dan Inggris
   - Real-time translation

## Testing

### Test Cases:
```javascript
// Test 1: Pencarian Materi
Input: "algoritma"
Expected: Display algoritma course details

// Test 2: Tips Belajar
Input: "cara mengerjakan"
Expected: Display tips mengerjakan tugas

// Test 3: Informasi Nilai
Input: "nilai"
Expected: Display student grades

// Test 4: Chat Persistence
Action: Send multiple messages
Expected: All messages appear in order

// Test 5: Responsiveness
Action: Resize window
Expected: Widget adapts to screen size
```

## Troubleshooting

### Widget tidak muncul?
- Clear browser cache (Ctrl+Shift+Delete)
- Refresh page (F5)
- Periksa console untuk errors (F12)

### Respons AI tidak sesuai?
- Pastikan kata kunci sesuai dengan database
- Gunakan huruf kecil (case-insensitive)
- Cek javascript console untuk debugging

### Widget tertutup?
- Klik tombol ✕ atau scroll ke area widget
- Refresh page jika masih bermasalah

---

**Version**: 1.0  
**Last Updated**: December 2025  
**Developer**: LMS Development Team
