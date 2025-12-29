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
            { id: 1, title: 'Tugas 1: Konsep Dasar OS', deadline: '2024-01-16', status: 'completed', score: 86 },
            { id: 2, title: 'Tugas 2: Process Management', deadline: '2024-01-30', status: 'completed', score: 80 },
            { id: 3, title: 'Tugas 3: Memory Management', deadline: '2024-02-13', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: File Systems', deadline: '2024-02-27', status: 'pending', score: null }
        ]
    },
    6: {
        title: 'Jaringan Komputer',
        dosen: 'Dr. Fandi Kusuma',
        icon: '🔗',
        tasks: [
            { id: 1, title: 'Tugas 1: Model OSI & TCP/IP', deadline: '2024-01-17', status: 'completed', score: 83 },
            { id: 2, title: 'Tugas 2: IP Addressing & Subnetting', deadline: '2024-02-07', status: 'completed', score: 79 },
            { id: 3, title: 'Tugas 3: Routing Protocols', deadline: '2024-02-21', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: Network Security', deadline: '2024-03-07', status: 'pending', score: null }
        ]
    },
    7: {
        title: 'Keamanan Informasi',
        dosen: 'Prof. Wahid Hasyim',
        icon: '🔐',
        tasks: [
            { id: 1, title: 'Tugas 1: Cryptography Basics', deadline: '2024-01-19', status: 'completed', score: 87 },
            { id: 2, title: 'Tugas 2: Encryption Methods', deadline: '2024-02-02', status: 'completed', score: 84 },
            { id: 3, title: 'Tugas 3: Authentication & Authorization', deadline: '2024-02-16', status: 'pending', score: null },
            { id: 4, title: 'Tugas 4: Network Security', deadline: '2024-03-02', status: 'pending', score: null },
            { id: 5, title: 'Project Akhir: Security Implementation', deadline: '2024-03-20', status: 'pending', score: null }
        ]
    }
};

// ======================== LOGIN FUNCTIONS ========================
function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        alert('Username dan password harus diisi!');
        return;
    }
    
    localStorage.setItem('user', JSON.stringify({ username }));
    document.getElementById('studentName').textContent = username;
    showBeranda();
}

function handleLogout() {
    localStorage.removeItem('user');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    showLoginPage();
}

function showLoginPage() {
    document.getElementById('loginPage').classList.remove('hidden');
    document.getElementById('dashboardPage').classList.add('hidden');
}

function showBeranda() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    loadCourses();
}

function loadCourses() {
    const courseGrid = document.getElementById('courseGrid');
    if (!courseGrid) return;
    
    courseGrid.innerHTML = '';
    
    for (let id in coursesData) {
        const course = coursesData[id];
        const card = document.createElement('div');
        card.className = 'card-course bg-white rounded-lg shadow-md p-6 hover:shadow-lg';
        card.innerHTML = `
            <div class="text-4xl mb-3">${course.icon}</div>
            <h3 class="font-bold text-lg mb-2">${course.title}</h3>
            <p class="text-gray-600 text-sm mb-4">Dosen: ${course.dosen}</p>
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-semibold w-full">
                Lihat Detail
            </button>
        `;
        courseGrid.appendChild(card);
    }
}

// ======================== NAVIGATION ========================
function showNav(navName) {
    // Hide all content
    document.getElementById('berandaContent').classList.add('hidden');
    document.getElementById('nilaiContent').classList.add('hidden');
    document.getElementById('tugasContent').classList.add('hidden');
    
    // Remove active class from all nav items
    document.querySelectorAll('nav button').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-50', 'text-blue-600');
    });
    
    if (navName === 'beranda') {
        document.getElementById('berandaContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Beranda';
        document.getElementById('pageSubtitle').textContent = 'Selamat datang di dashboard Anda';
        loadCourses();
    } else if (navName === 'nilai') {
        document.getElementById('nilaiContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Nilai CPL';
        document.getElementById('pageSubtitle').textContent = 'Lihat nilai dan progress Anda';
        loadNilai();
    } else if (navName === 'tugas') {
        document.getElementById('tugasContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Tugas & Deadline';
        document.getElementById('pageSubtitle').textContent = 'Daftar tugas yang harus dikerjakan';
        loadTugas();
    }
}

function loadNilai() {
    const nilaiData = [
        { no: 1, mk: 'Algoritma & Pemrograman', nilai: 85, grade: 'A' },
        { no: 2, mk: 'Basis Data', nilai: 78, grade: 'B+' },
        { no: 3, mk: 'Web Development', nilai: 88, grade: 'A' },
        { no: 4, mk: 'Kalkulus', nilai: 72, grade: 'B' },
        { no: 5, mk: 'Sistem Operasi', nilai: 81, grade: 'B+' },
        { no: 6, mk: 'Jaringan Komputer', nilai: 79, grade: 'B+' },
        { no: 7, mk: 'Keamanan Informasi', nilai: 83, grade: 'A' }
    ];
    
    document.getElementById('nilaiTable').innerHTML = nilaiData.map(d => `
        <tr class="border-b hover:bg-gray-50">
            <td class="px-4 py-2">${d.no}</td>
            <td class="px-4 py-2">${d.mk}</td>
            <td class="px-4 py-2 text-center font-bold">${d.nilai}</td>
            <td class="px-4 py-2 text-center"><span class="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700">${d.grade}</span></td>
        </tr>
    `).join('');
}

function loadTugas() {
    let tugasHtml = '';
    
    for (let id in coursesData) {
        const course = coursesData[id];
        tugasHtml += `
            <div class="mb-6">
                <h3 class="font-bold text-lg text-gray-800 mb-3">${course.icon} ${course.title}</h3>
                <div class="space-y-2">
        `;
        
        course.tasks.forEach(task => {
            const isCompleted = task.status === 'completed';
            tugasHtml += `
                <div class="task-item ${isCompleted ? 'completed' : ''}">
                    <div class="flex justify-between items-center">
                        <div class="flex-1">
                            <p class="font-semibold text-gray-800">${task.title}</p>
                            <p class="text-xs text-gray-500">Deadline: ${task.deadline}</p>
                        </div>
                        <span class="px-3 py-1 rounded text-xs font-bold ${isCompleted ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">
                            ${isCompleted ? `✓ ${task.score}` : 'Pending'}
                        </span>
                    </div>
                </div>
            `;
        });
        
        tugasHtml += `</div></div>`;
    }
    
    document.getElementById('tugasContainer').innerHTML = tugasHtml;
}

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        document.getElementById('studentName').textContent = userData.username;
        showBeranda();
    } else {
        showLoginPage();
    }
});
