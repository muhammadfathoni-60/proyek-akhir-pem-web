# BRAINS.LMS - Struktur Folder

## 📁 Struktur Proyek

```
project-akhir-LMS/
├── index.html              # File HTML utama
├── assets/
│   ├── css/
│   │   └── style.css       # Semua CSS (mudah dikustomisasi)
│   ├── js/
│   │   └── app.js          # Semua JavaScript
│   └── images/             # Folder untuk menyimpan gambar
│       ├── logo.png        # Logo universitas/LMS (SIMPAN DI SINI)
│       └── bg.jpg          # Background gambar (SIMPAN DI SINI)
└── README.md               # File ini
```

## 🎨 Cara Memasukkan Gambar

### 1. Logo
Simpan file logo Anda di folder `assets/images/` dengan nama `logo.png`

Kemudian edit file `assets/css/style.css` - cari bagian `.logo-placeholder`:

```css
.logo-placeholder {
    width: 40px;
    height: 40px;
    background-image: url('../images/logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    /* Hapus atau comment bagian background: linear-gradient(...) */
}
```

### 2. Background Image
Simpan file gambar di `assets/images/` dengan nama `bg.jpg`

Edit file `assets/css/style.css` - cari bagian `.hero-background`:

```css
.hero-background {
    background-image: url('../images/bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 300px;
}
```

## 🔧 Customization

### Mengubah Warna Skema
Edit `assets/css/style.css` bagian `:root`:

```css
:root {
    --primary-color: #1e40af;      /* Warna utama (biru) */
    --secondary-color: #0369a1;    /* Warna sekunder */
    --accent-color: #0ea5e9;       /* Warna aksen */
}
```

### Mengubah Data Mata Kuliah
Edit `assets/js/app.js` bagian `coursesData` untuk mengganti nama dosen, mata kuliah, tugas, dll.

## ✅ Fitur

- ✅ Login/Logout (simulasi)
- ✅ Dashboard dengan 7 mata kuliah
- ✅ Detail mata kuliah & daftar tugas
- ✅ Nilai CPL dengan IPK
- ✅ Responsive (mobile friendly)
- ✅ LocalStorage (login status tersimpan)

## 🚀 Cara Menjalankan

1. Buka file `index.html` di browser
2. Login dengan username & password apapun
3. Navigasikan menu di sidebar

Atau gunakan Live Server di VS Code untuk hasil lebih baik.
