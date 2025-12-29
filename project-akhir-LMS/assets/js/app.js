// ======================== DATA STRUKTUR ========================
const coursesData = {
    1: {
        title: 'Algoritma & Pemrograman',
        dosen: 'Dr. Budi Santoso',
        icon: '💻',
        tasks: [
            { id: 1, title: 'Tugas 1: Pengenalan Algoritma', deadline: '2024-01-15', status: 'completed', score: 90 },
            { id: 2, title: 'Tugas 2: Struktur Data Dasar', deadline: '2024-01-22', status: 'completed', score: 85 },
            { id: 3, title: 'Tugas 3: Implementasi Array', deadline: '2024-01-29', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: Sorting Algorithms', deadline: '2024-02-05', status: 'pending', score: null },
            { id: 5, title: 'Project Akhir: Program Lengkap', deadline: '2024-02-20', status: 'pending', score: null }
        ]
    },
    2: {
        title: 'Basis Data',
        dosen: 'Prof. Siti Nurhaliza',
        icon: '🗄️',
        tasks: [
            { id: 1, title: 'Tugas 1: Desain Database', deadline: '2024-01-10', status: 'completed', score: 88 },
            { id: 2, title: 'Tugas 2: Query SQL Dasar', deadline: '2024-01-20', status: 'completed', score: 82 },
            { id: 3, title: 'Tugas 3: Join dan Agregasi', deadline: '2024-02-03', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: Normalisasi Database', deadline: '2024-02-15', status: 'pending', score: null }
        ]
    },
    3: {
        title: 'Web Development',
        dosen: 'Hendra Wijaya, M.T',
        icon: '🌐',
        tasks: [
            { id: 1, title: 'Tugas 1: HTML & CSS Dasar', deadline: '2024-01-12', status: 'completed', score: 92 },
            { id: 2, title: 'Tugas 2: JavaScript Fundamentals', deadline: '2024-01-26', status: 'completed', score: 87 },
            { id: 3, title: 'Tugas 3: Responsive Design', deadline: '2024-02-09', status: 'completed', score: 89 },
            { id: 4, title: 'Tugas 4: Form Validation', deadline: '2024-02-16', status: 'pending', score: null },
            { id: 5, title: 'Tugas 5: API Integration', deadline: '2024-02-23', status: 'pending', score: null },
            { id: 6, title: 'Project Akhir: Website Lengkap', deadline: '2024-03-15', status: 'pending', score: null }
        ]
    },
    4: {
        title: 'Kalkulus',
        dosen: 'Dr. Ahmad Pratama',
        icon: '📐',
        tasks: [
            { id: 1, title: 'Tugas 1: Limit dan Kontinuitas', deadline: '2024-01-18', status: 'completed', score: 75 },
            { id: 2, title: 'Tugas 2: Turunan Fungsi', deadline: '2024-01-25', status: 'completed', score: 72 },
            { id: 3, title: 'Tugas 3: Aplikasi Turunan', deadline: '2024-02-08', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: Integral Tak Tentu', deadline: '2024-02-22', status: 'pending', score: null },
            { id: 5, title: 'Tugas 5: Integral Tentu', deadline: '2024-03-08', status: 'pending', score: null },
            { id: 6, title: 'Tugas 6: Aplikasi Integral', deadline: '2024-03-15', status: 'pending', score: null },
            { id: 7, title: 'UTS Kalkulus', deadline: '2024-03-20', status: 'pending', score: null }
        ]
    },
    5: {
        title: 'Sistem Operasi',
        dosen: 'Ir. Rina Susandi',
        icon: '⚙️',
        tasks: [
            { id: 1, title: 'Tugas 1: Konsep Sistem Operasi', deadline: '2024-01-17', status: 'completed', score: 84 },
            { id: 2, title: 'Tugas 2: Process Management', deadline: '2024-01-31', status: 'completed', score: 80 },
            { id: 3, title: 'Tugas 3: Memory Management', deadline: '2024-02-14', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: File System', deadline: '2024-02-28', status: 'pending', score: null },
            { id: 5, title: 'Project: Simulasi OS', deadline: '2024-03-14', status: 'pending', score: null }
        ]
    },
    6: {
        title: 'Jaringan Komputer',
        dosen: 'Dr. Fandi Kusuma',
        icon: '🔗',
        tasks: [
            { id: 1, title: 'Tugas 1: Model OSI', deadline: '2024-01-19', status: 'completed', score: 81 },
            { id: 2, title: 'Tugas 2: TCP/IP Protocol', deadline: '2024-02-02', status: 'completed', score: 79 },
            { id: 3, title: 'Tugas 3: Subnet & Routing', deadline: '2024-02-16', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: Network Security', deadline: '2024-03-02', status: 'pending', score: null }
        ]
    },
    7: {
        title: 'Keamanan Informasi',
        dosen: 'Prof. Wahid Hasyim',
        icon: '🔐',
        tasks: [
            { id: 1, title: 'Tugas 1: Fundamental Keamanan', deadline: '2024-01-21', status: 'completed', score: 86 },
            { id: 2, title: 'Tugas 2: Enkripsi & Dekripsi', deadline: '2024-02-04', status: 'completed', score: 83 },
            { id: 3, title: 'Tugas 3: Autentikasi & Otorisasi', deadline: '2024-02-18', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: Audit & Compliance', deadline: '2024-03-03', status: 'pending', score: null },
            { id: 5, title: 'Project: Security Analysis', deadline: '2024-03-17', status: 'pending', score: null }
        ]
    }
};

// ======================== STATE MANAGEMENT ========================
let currentUser = localStorage.getItem('brainsUser') || null;
let currentCourseId = null;

// ======================== FUNGSI LOGIN/LOGOUT ========================
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Simulasi login - terima username apapun
        localStorage.setItem('brainsUser', username);
        currentUser = username;
        document.getElementById('studentName').textContent = username;
        
        // Pindah ke dashboard
        switchPage('beranda');
        showDashboard();
    }
}

function handleLogout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        localStorage.removeItem('brainsUser');
        currentUser = null;
        currentCourseId = null;
        showLoginPage();
    }
}

// ======================== FUNGSI NAVIGASI PAGE ========================
function showLoginPage() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
}

function showDashboard() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
}

function switchPage(page) {
    // Update sidebar menu active state
    document.querySelectorAll('.sidebar-menu-item').forEach(el => {
        el.classList.remove('active');
    });
    if (event && event.target) {
        const menuItem = event.target.closest('.sidebar-menu-item');
        if (menuItem) menuItem.classList.add('active');
    }

    // Hide all content sections
    document.getElementById('berandaContent').classList.add('hidden');
    document.getElementById('courseDetailContent').classList.add('hidden');
    document.getElementById('nilaiCplContent').classList.add('hidden');

    // Show selected page
    if (page === 'beranda') {
        document.getElementById('berandaContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Beranda';
        document.getElementById('pageSubtitle').textContent = 'Selamat datang di BRAINS.LMS';
        currentCourseId = null;
    } else if (page === 'nilaiCpl') {
        document.getElementById('nilaiCplContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Nilai Capaian Pembelajaran';
        document.getElementById('pageSubtitle').textContent = 'Lihat nilai dan IPK Anda';
        currentCourseId = null;
    }

    // Remove active state dari course cards
    document.querySelectorAll('.card-course').forEach(el => {
        el.classList.remove('active');
    });
}

// ======================== FUNGSI COURSE DETAIL ========================
function selectCourse(courseId, courseTitle) {
    currentCourseId = courseId;
    const course = coursesData[courseId];

    // Update course detail header
    document.getElementById('courseDetailTitle').textContent = course.title;
    document.getElementById('courseDetailDosen').textContent = `Dosen: ${course.dosen}`;
    document.getElementById('courseIconLarge').textContent = course.icon;

    // Update page title
    document.getElementById('pageTitle').textContent = course.title;
    document.getElementById('pageSubtitle').textContent = `Dosen: ${course.dosen}`;

    // Calculate task statistics
    const totalTasks = course.tasks.length;
    const completedTasks = course.tasks.filter(t => t.status === 'completed').length;
    const pendingTasks = totalTasks - completedTasks;

    document.getElementById('totalTasksDisplay').textContent = totalTasks;
    document.getElementById('completedTasksDisplay').textContent = completedTasks;
    document.getElementById('pendingTasksDisplay').textContent = pendingTasks;

    // Render tasks list
    renderTasksList(course.tasks);

    // Show course detail content
    document.getElementById('berandaContent').classList.add('hidden');
    document.getElementById('courseDetailContent').classList.remove('hidden');

    // Highlight active course card
    document.querySelectorAll('.card-course').forEach(el => {
        el.classList.remove('active');
    });
    event.target.closest('.card-course').classList.add('active');
}

function backToBeranda() {
    currentCourseId = null;
    document.getElementById('courseDetailContent').classList.add('hidden');
    document.getElementById('berandaContent').classList.remove('hidden');
    document.getElementById('pageTitle').textContent = 'Beranda';
    document.getElementById('pageSubtitle').textContent = 'Selamat datang di BRAINS.LMS';
    
    // Remove active state dari course cards
    document.querySelectorAll('.card-course').forEach(el => {
        el.classList.remove('active');
    });
}

// ======================== FUNGSI RENDER TASKS ========================
function renderTasksList(tasks) {
    const tasksList = document.getElementById('tasksList');
    tasksList.innerHTML = '';

    tasks.forEach(task => {
        const taskEl = document.createElement('div');
        taskEl.className = `task-item ${task.status === 'completed' ? 'completed' : ''}`;
        
        const statusClass = task.status === 'completed' ? 'task-status completed' : 'task-status pending';
        const statusText = task.status === 'completed' ? '✓ Selesai' : '⏳ Tertunda';
        const scoreDisplay = task.score ? `Nilai: ${task.score}` : 'Belum dinilai';
        
        taskEl.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="flex-1">
                    <div class="flex items-center gap-3 mb-2">
                        <h4 class="font-semibold text-gray-800">${task.title}</h4>
                        <span class="${statusClass}">${statusText}</span>
                    </div>
                    <p class="text-sm text-gray-500">Deadline: ${formatDate(task.deadline)}</p>
                    ${task.score ? `<p class="text-sm text-green-600 mt-1"><strong>${scoreDisplay}</strong></p>` : ''}
                </div>
                <button onclick="openTask(${task.id})" class="text-blue-600 hover:text-blue-700 font-semibold text-sm whitespace-nowrap ml-4">
                    Lihat Detail →
                </button>
            </div>
        `;

        tasksList.appendChild(taskEl);
    });
}

// ======================== HELPER FUNCTIONS ========================
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

function openTask(taskId) {
    alert(`Membuka detail tugas ID: ${taskId}\nFitur lengkap: upload file, lihat feedback dosen, dll.`);
}

// ======================== INITIALIZATION ========================
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah user sudah login
    if (currentUser) {
        document.getElementById('studentName').textContent = currentUser;
        showDashboard();
    } else {
        showLoginPage();
    }

    // Prevent form submission jika enter
    document.getElementById('loginForm')?.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleLogin(e);
        }
    });
});

// ======================== AI CHATBOT FUNCTIONS ========================
const aiResponses = {
    // Pencarian Materi
    'algoritma': {
        type: 'materi',
        response: '📚 Algoritma & Pemrograman\n\nDosen: Dr. Budi Santoso\n\nTopik yang dibahas:\n• Pengenalan Algoritma\n• Struktur Data Dasar\n• Array dan Linked List\n• Sorting & Searching\n• Tree dan Graph\n\nTugas Terbaru:\n✓ Tugas 1-2: Selesai\n⏳ Tugas 3-5: Pending\n\nNilai: 85/100 (A)',
        relatedCourse: 1
    },
    'basis data': {
        type: 'materi',
        response: '📚 Basis Data\n\nDosen: Prof. Siti Nurhaliza\n\nTopik yang dibahas:\n• Entity Relationship Model\n• Desain Database\n• SQL Query\n• Join dan Agregasi\n• Normalisasi\n\nTugas Terbaru:\n✓ Tugas 1-2: Selesai\n⏳ Tugas 3-4: Pending\n\nNilai: 78/100 (B+)',
        relatedCourse: 2
    },
    'web development': {
        type: 'materi',
        response: '📚 Web Development\n\nDosen: Hendra Wijaya, M.T\n\nTopik yang dibahas:\n• HTML & CSS Dasar\n• JavaScript Fundamentals\n• Responsive Design\n• Form Validation\n• API Integration\n\nTugas Terbaru:\n✓ Tugas 1-3: Selesai\n⏳ Tugas 4-6: Pending\n\nNilai: 88/100 (A)',
        relatedCourse: 3
    },
    'kalkulus': {
        type: 'materi',
        response: '📚 Kalkulus\n\nDosen: Dr. Ahmad Pratama\n\nTopik yang dibahas:\n• Limit dan Kontinuitas\n• Turunan Fungsi\n• Integral Tak Tentu\n• Integral Tentu\n• Aplikasi Kalkulus\n\nTugas Terbaru:\n✓ Tugas 1-2: Selesai\n⏳ Tugas 3-7: Pending\n\nNilai: 72/100 (B)',
        relatedCourse: 4
    },
    'sistem operasi': {
        type: 'materi',
        response: '📚 Sistem Operasi\n\nDosen: Ir. Rina Susandi\n\nTopik yang dibahas:\n• Konsep Sistem Operasi\n• Process Management\n• Memory Management\n• File System\n• Simulasi OS\n\nTugas Terbaru:\n✓ Tugas 1-2: Selesai\n⏳ Tugas 3-5: Pending\n\nNilai: 81/100 (B+)',
        relatedCourse: 5
    },
    'jaringan': {
        type: 'materi',
        response: '📚 Jaringan Komputer\n\nDosen: Dr. Fandi Kusuma\n\nTopik yang dibahas:\n• Model OSI\n• TCP/IP Protocol\n• Subnet & Routing\n• Network Security\n\nTugas Terbaru:\n✓ Tugas 1-2: Selesai\n⏳ Tugas 3-4: Pending\n\nNilai: 79/100 (B+)',
        relatedCourse: 6
    },
    'keamanan': {
        type: 'materi',
        response: '📚 Keamanan Informasi\n\nDosen: Prof. Wahid Hasyim\n\nTopik yang dibahas:\n• Fundamental Keamanan\n• Enkripsi & Dekripsi\n• Autentikasi & Otorisasi\n• Audit & Compliance\n• Security Analysis\n\nTugas Terbaru:\n✓ Tugas 1-2: Selesai\n⏳ Tugas 3-5: Pending\n\nNilai: 83/100 (A)',
        relatedCourse: 7
    }
};

const aiTips = {
    'cara mengerjakan': 'Tips mengerjakan tugas:\n\n✅ Baca soal dengan teliti\n✅ Pahami konsep yang diajarkan\n✅ Cari referensi tambahan\n✅ Praktik dengan contoh soal\n✅ Review kembali sebelum submit\n✅ Tanya ke dosen jika bingung',
    'nilai': 'Informasi Nilai Anda:\n\n🎯 Total Nilai: 85 (A)\n\nRincian per Mata Kuliah:\n• Algoritma: 85 (A)\n• Basis Data: 78 (B+)\n• Web Dev: 88 (A)\n• Kalkulus: 72 (B)\n• Sistem Operasi: 81 (B+)\n• Jaringan: 79 (B+)\n• Keamanan: 83 (A)',
    'deadline': 'Jadwal Deadline Terdekat:\n\n📅 Tugas Pending:\n• Tugas 3 Algoritma: 29 Januari\n• Tugas 3 Basis Data: 3 Februari\n• Tugas 3 Web Dev: 9 Februari\n• UTS Kalkulus: 20 Maret\n\nJangan lupa untuk submit tepat waktu!',
    'referensi': 'Referensi Belajar:\n\n📖 Buku:\n• Introduction to Algorithms\n• Database Design\n• Web Development Fundamentals\n\n🌐 Website:\n• w3schools.com\n• MDN Web Docs\n• Khan Academy\n• GeeksforGeeks\n\n📹 Video:\n• YouTube Channels untuk setiap topik\n• Coursera & Udemy',
    'tugas': 'Status Tugas Anda:\n\n✅ Selesai: 8 tugas\n⏳ Pending: 15 tugas\n\nTugas yang paling mendekati deadline:\n• Tugas 3 Implementasi Array (29 Jan)\n• Tugas 3 Join & Agregasi (3 Feb)\n• Tugas 3 Responsive Design (9 Feb)'
};

function sendAiMessage() {
    const input = document.getElementById('aiChatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    addAiChatMessage(message, 'user');
    input.value = '';
    
    // Generate AI response
    setTimeout(() => {
        const response = generateAiResponse(message);
        addAiChatMessage(response, 'ai');
    }, 500);
}

function generateAiResponse(userMessage) {
    const lowercaseMsg = userMessage.toLowerCase();
    
    // Check for material search
    for (const key in aiResponses) {
        if (lowercaseMsg.includes(key)) {
            return aiResponses[key].response;
        }
    }
    
    // Check for tips/help
    for (const key in aiTips) {
        if (lowercaseMsg.includes(key)) {
            return aiTips[key];
        }
    }
    
    // Default responses
    const defaultResponses = [
        'Bisa Anda spesifikkan pertanyaan Anda lebih lanjut? Saya bisa membantu dengan:\n• Pencarian materi (ketik nama mata kuliah)\n• Tips mengerjakan tugas\n• Informasi deadline\n• Lihat nilai Anda',
        'Maaf, saya kurang memahami. Coba tanya tentang:\n📚 Mata Kuliah (algoritma, basis data, web dev, dll)\n💡 Tips dan trik belajar\n📅 Jadwal deadline\n📊 Nilai dan prestasi',
        'Pertanyaan menarik! Untuk bantuan lebih spesifik, coba tanyakan:\n• Nama mata kuliah yang Anda pelajari\n• Topik spesifik yang ingin dibahas\n• Kesulitan dalam mengerjakan tugas'
    ];
    
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function addAiChatMessage(message, type) {
    const chatMessages = document.getElementById('aiChatMessages');
    const messageEl = document.createElement('div');
    messageEl.className = `${type}-message mb-3`;
    
    if (type === 'user') {
        messageEl.innerHTML = `<div class="bg-blue-600 text-white rounded-lg p-3 text-sm ml-8 rounded-br-none">${escapeHtml(message)}</div>`;
    } else {
        messageEl.innerHTML = `<div class="bg-gray-200 text-gray-800 rounded-lg p-3 text-sm mr-8 rounded-bl-none">${escapeHtml(message).replace(/\n/g, '<br>')}</div>`;
    }
    
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleAiChatKeypress(event) {
    if (event.key === 'Enter') {
        sendAiMessage();
    }
}

function toggleAiChat() {
    const widget = document.getElementById('aiChatWidget');
    widget.classList.toggle('hidden');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ======================== RESPONSIVE SIDEBAR ========================
window.addEventListener('resize', function() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth < 1024 && sidebar) {
        sidebar.style.transform = 'translateX(-100%)';
    } else if (sidebar) {
        sidebar.style.transform = 'translateX(0)';
    }
});
