# 🚀 Panduan Menggunakan AI Assistant di BRAINS.LMS

## 📋 Daftar Fitur Baru

✨ **AI Assistant Chatbot** - Fitur tanya jawab cerdas untuk memudahkan pembelajaran Anda!

Fitur ini telah ditambahkan ke halaman Beranda dengan kemampuan:
- 📚 Pencarian informasi materi kuliah
- 💡 Tips dan strategi belajar
- 📅 Jadwal deadline dan tugas
- 📊 Informasi nilai akademik
- 🎯 Navigasi bantuan umum

## ✅ Cara Menjalankan Aplikasi

### 1. **Buka File di Browser**
```
1. Buka file: app.html
2. Masukkan username dan password apapun
3. Klik tombol "Masuk"
4. Anda akan masuk ke halaman Beranda
```

### 2. **Menggunakan AI Assistant**
- **Lokasi**: Widget AI ada di sisi kanan layar halaman Beranda
- **Akses**: Scroll ke widget atau lihat di sidebar kanan
- **Input**: Ketik pertanyaan Anda di kolom input

## 🎮 Contoh Pertanyaan untuk AI

### Cari Materi Kuliah
```
"algoritma"          → Info lengkap Algoritma & Pemrograman
"basis data"         → Detail Basis Data
"web development"    → Info Web Development
"kalkulus"          → Detail mata kuliah Kalkulus
"sistem operasi"    → Info Sistem Operasi
"jaringan"          → Detail Jaringan Komputer
"keamanan"          → Info Keamanan Informasi
```

### Dapatkan Tips Belajar
```
"cara mengerjakan"   → Tips mengerjakan tugas
"tips belajar"       → Strategi belajar efektif
```

### Informasi Nilai & Deadline
```
"nilai"              → Lihat nilai Anda
"deadline"           → Jadwal deadline terdekat
"tugas"              → Status semua tugas
"referensi"          → Sumber referensi belajar
```

## 📝 Fitur-Fitur Lengkap

### Pencarian Materi (7 Mata Kuliah)
Setiap pencarian materi akan menampilkan:
- ✓ Nama mata kuliah
- ✓ Nama dosen pengampu
- ✓ Topik-topik yang dibahas
- ✓ Status tugas (selesai/pending)
- ✓ Nilai terkini

### Tips Mengerjakan Tugas
6 tips praktis untuk mengerjakan tugas dengan efektif:
1. Baca soal dengan teliti
2. Pahami konsep yang diajarkan
3. Cari referensi tambahan
4. Praktik dengan contoh soal
5. Review kembali sebelum submit
6. Tanya ke dosen jika bingung

### Informasi Nilai Akademik
Tampilkan:
- Total nilai keseluruhan
- Rincian nilai per mata kuliah
- Grade untuk setiap mata kuliah

### Jadwal Deadline
Lihat:
- Tugas yang mendekati deadline
- Jadwal ujian (UTS/UAS)
- Prioritas pengerjaan tugas

## 🎨 Desain & Layout

### Tampilan Widget AI
```
┌─────────────────────────────┐
│ 🤖 AI Assistant            │ [✕]
│ Siap membantu Anda          │
├─────────────────────────────┤
│                             │
│  Chat messages appear here  │
│                             │
├─────────────────────────────┤
│ [Input field] [Kirim button]│
└─────────────────────────────┘
```

### Responsivitas
- **Desktop (≥1024px)**: Widget di sidebar kanan, sticky saat scroll
- **Tablet/Mobile (<1024px)**: Widget floating di bottom-right corner
- **Semua device**: Mudah diakses dan responsive

## 💻 Teknologi yang Digunakan

- **Frontend**: HTML5, CSS3, Tailwind CSS, JavaScript
- **Backend**: JavaScript client-side (bisa diperluas dengan backend)
- **Storage**: localStorage untuk user session
- **AI Logic**: Rule-based chatbot dengan keyword matching

## 🔧 Implementasi Teknis

### File yang Dimodifikasi:
1. **app.html**
   - Menambahkan UI widget chat di beranda
   - Integrasi dengan form input dan tombol

2. **assets/js/app.js**
   - Fungsi `sendAiMessage()` - mengirim pesan
   - Fungsi `generateAiResponse()` - generate respons AI
   - Fungsi `addAiChatMessage()` - tampilkan di chat
   - Basis data respons AI dalam variabel `aiResponses` dan `aiTips`

3. **assets/css/style.css**
   - Styling untuk widget chat
   - Animasi smooth (slideUp)
   - Custom scrollbar
   - Media queries untuk responsivitas

### Logika AI
```javascript
// Struktur data respons
aiResponses = {
    'keyword': {
        type: 'materi',
        response: 'jawaban...',
        relatedCourse: courseId
    }
}

// Proses matching
1. User input → toLowerCase()
2. Cari match di aiResponses
3. Jika tidak ketemu → cari di aiTips
4. Jika masih tidak ketemu → response umum
```

## 📱 Testing di Browser

### Chrome/Firefox/Edge:
1. Buka app.html di browser
2. Login dengan username dan password apapun
3. Scroll ke halaman Beranda
4. Cari widget "AI Assistant" di sisi kanan
5. Coba ketik beberapa pertanyaan
6. Tekan Enter atau klik tombol "Kirim"

### Keyboard Shortcuts:
- **Enter** - Kirim pesan
- **Shift+Enter** - Line break (jika diperluas)

## 🚀 Pengembangan Lanjutan

### Rekomendasi Upgrade:
1. **API Integration** - Hubungkan dengan OpenAI/Claude/Gemini
2. **Database** - Simpan chat history di database
3. **ML/NLP** - Natural Language Processing untuk pemahaman lebih baik
4. **Voice** - Speech to text dan text to speech
5. **Analytics** - Track pertanyaan populer dan metrics
6. **Multi-user** - Support untuk admin dashboard

## ❓ FAQ

**Q: Bagaimana cara menambah respons AI baru?**
A: Edit variabel `aiResponses` atau `aiTips` di `app.js`

**Q: Bisakah AI belajar dari user input?**
A: Saat ini hanya rule-based, bisa ditingkat dengan ML/API

**Q: Bagaimana jika user bertanya sesuatu yang tidak ada?**
A: AI akan memberikan respons umum dan saran untuk pertanyaan lebih spesifik

**Q: Apakah AI bisa offline?**
A: Ya, semua proses di client-side, tidak perlu internet (hingga upgrade)

## 📞 Support

Untuk bantuan lebih lanjut atau bug report, silakan hubungi tim development.

---

**Selamat menggunakan AI Assistant! 🎓**

Semoga fitur ini membantu Anda dalam proses pembelajaran di BRAINS.LMS! 
