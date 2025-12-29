// ======================== DATA STRUKTUR ========================
const coursesData = {
    1: { title: 'Algoritma & Pemrograman', dosen: 'Dr. Budi Santoso', icon: '💻', tasks: [] },
    2: { title: 'Basis Data', dosen: 'Prof. Siti Nurhaliza', icon: '🗄️', tasks: [] },
    3: { title: 'Web Development', dosen: 'Hendra Wijaya, M.T', icon: '🌐', tasks: [] },
    4: { title: 'Kalkulus', dosen: 'Dr. Ahmad Pratama', icon: '📐', tasks: [] },
    5: { title: 'Sistem Operasi', dosen: 'Ir. Rina Susandi', icon: '⚙️', tasks: [] },
    6: { title: 'Jaringan Komputer', dosen: 'Dr. Fandi Kusuma', icon: '🔗', tasks: [] },
    7: { title: 'Keamanan Informasi', dosen: 'Prof. Wahid Hasyim', icon: '🔐', tasks: [] }
};

// ======================== AI RESPONSES ========================
const aiResponses = {
    'algoritma': '📚 Algoritma & Pemrograman\nDosen: Dr. Budi Santoso\nNilai: 85/100 (A)',
    'basis data': '📚 Basis Data\nDosen: Prof. Siti Nurhaliza\nNilai: 78/100 (B+)',
    'web development': '📚 Web Development\nDosen: Hendra Wijaya, M.T\nNilai: 88/100 (A)',
    'web dev': '📚 Web Development\nDosen: Hendra Wijaya, M.T\nNilai: 88/100 (A)',
    'kalkulus': '📚 Kalkulus\nDosen: Dr. Ahmad Pratama\nNilai: 72/100 (B)',
    'sistem operasi': '📚 Sistem Operasi\nDosen: Ir. Rina Susandi\nNilai: 81/100 (B+)',
    'jaringan': '📚 Jaringan Komputer\nDosen: Dr. Fandi Kusuma\nNilai: 79/100 (B+)',
    'keamanan': '📚 Keamanan Informasi\nDosen: Prof. Wahid Hasyim\nNilai: 83/100 (A)',
    'database': '📚 Basis Data\nDosen: Prof. Siti Nurhaliza\nNilai: 78/100 (B+)'
};

const aiTips = {
    'cara mengerjakan': '✅ Baca soal dengan teliti\n✅ Pahami konsep\n✅ Cari referensi\n✅ Praktik\n✅ Review\n✅ Tanya dosen',
    'tips': '✅ Baca soal dengan teliti\n✅ Pahami konsep\n✅ Cari referensi\n✅ Praktik\n✅ Review\n✅ Tanya dosen',
    'nilai': '🎯 Nilai Anda:\n• Algoritma: 85 (A)\n• Basis Data: 78 (B+)\n• Web Dev: 88 (A)\n• Kalkulus: 72 (B)\n• Sistem Operasi: 81 (B+)\n• Jaringan: 79 (B+)\n• Keamanan: 83 (A)',
    'grade': '🎯 Nilai Anda:\n• Algoritma: 85 (A)\n• Basis Data: 78 (B+)\n• Web Dev: 88 (A)\n• Kalkulus: 72 (B)\n• Sistem Operasi: 81 (B+)\n• Jaringan: 79 (B+)\n• Keamanan: 83 (A)',
    'deadline': '📅 Jadwal Deadline:\n• Tugas Algoritma: 29 Jan\n• Tugas Basis Data: 3 Feb\n• Tugas Web Dev: 9 Feb\n• UTS Kalkulus: 20 Mar',
    'jadwal': '📅 Jadwal Deadline:\n• Tugas Algoritma: 29 Jan\n• Tugas Basis Data: 3 Feb\n• Tugas Web Dev: 9 Feb\n• UTS Kalkulus: 20 Mar',
    'tugas': '✅ Selesai: 8 tugas\n⏳ Pending: 15 tugas\n\n📌 Deadline terdekat:\n• Array (29 Jan)\n• Join (3 Feb)\n• Design (9 Feb)',
    'referensi': '📖 Referensi:\n• w3schools.com\n• MDN Web Docs\n• Khan Academy\n• GeeksforGeeks\n• YouTube Tutorial\n• Coursera & Udemy'
};

// ======================== AI FUNCTIONS ========================
function sendAiMessage() {
    const input = document.getElementById('aiChatInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    addAiChatMessage(message, 'user');
    input.value = '';
    
    setTimeout(() => {
        const response = generateAiResponse(message);
        addAiChatMessage(response, 'ai');
    }, 300);
}

function generateAiResponse(msg) {
    const text = msg.toLowerCase().trim();
    
    // Check responses
    for (let key in aiResponses) {
        if (text.includes(key)) {
            return aiResponses[key];
        }
    }
    
    // Check tips
    for (let key in aiTips) {
        if (text.includes(key)) {
            return aiTips[key];
        }
    }
    
    // Default
    if (text.includes('halo') || text.includes('hai') || text.includes('hello')) {
        return 'Halo! 👋 Ada yang bisa saya bantu?';
    }
    
    if (text.includes('bantuan') || text.includes('help')) {
        return 'Coba tanya:\n• Nama mata kuliah (algoritma, basis data, dll)\n• Nilai\n• Deadline\n• Tips belajar\n• Referensi';
    }
    
    return 'Maaf kurang mengerti. Coba tanya tentang:\n📚 Mata kuliah\n💡 Tips\n📊 Nilai\n📅 Deadline\n📖 Referensi';
}

function addAiChatMessage(message, type) {
    const chat = document.getElementById('aiChatMessages');
    if (!chat) return;
    
    const div = document.createElement('div');
    div.className = type + '-message mb-3';
    
    if (type === 'user') {
        div.innerHTML = '<div class="bg-blue-600 text-white rounded-lg p-3 text-sm ml-8">' + escapeHtml(message) + '</div>';
    } else {
        const formatted = escapeHtml(message).replace(/\n/g, '<br>');
        div.innerHTML = '<div class="bg-gray-200 text-gray-800 rounded-lg p-3 text-sm mr-8">' + formatted + '</div>';
    }
    
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Setup on load
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('aiChatInput');
    if (input) {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendAiMessage();
            }
        });
    }
});
