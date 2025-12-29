const coursesData = {
    1: { title: 'Algoritma & Pemrograman', dosen: 'Dr. Budi Santoso', icon: '💻', nilai: 85, grade: 'A' },
    2: { title: 'Basis Data', dosen: 'Prof. Siti Nurhaliza', icon: '🗄️', nilai: 78, grade: 'B+' },
    3: { title: 'Web Development', dosen: 'Hendra Wijaya, M.T', icon: '🌐', nilai: 88, grade: 'A' },
    4: { title: 'Kalkulus', dosen: 'Dr. Ahmad Pratama', icon: '📐', nilai: 72, grade: 'B' },
    5: { title: 'Sistem Operasi', dosen: 'Ir. Rina Susandi', icon: '⚙️', nilai: 81, grade: 'B+' },
    6: { title: 'Jaringan Komputer', dosen: 'Dr. Fandi Kusuma', icon: '🔗', nilai: 79, grade: 'B+' },
    7: { title: 'Keamanan Informasi', dosen: 'Prof. Wahid Hasyim', icon: '🔐', nilai: 83, grade: 'A' }
};

const tugasData = {
    1: [
        { title: 'Tugas 1: Pengenalan Algoritma', deadline: '2024-01-15', status: 'completed', score: 90 },
        { title: 'Tugas 2: Struktur Data', deadline: '2024-01-22', status: 'completed', score: 85 },
        { title: 'Tugas 3: Array', deadline: '2024-01-29', status: 'pending' }
    ],
    2: [
        { title: 'Tugas 1: Database Design', deadline: '2024-01-10', status: 'completed', score: 88 },
        { title: 'Tugas 2: SQL Query', deadline: '2024-01-20', status: 'pending' }
    ],
    3: [
        { title: 'Tugas 1: HTML & CSS', deadline: '2024-01-12', status: 'completed', score: 92 },
        { title: 'Tugas 2: JavaScript', deadline: '2024-01-26', status: 'pending' }
    ],
    4: [
        { title: 'Tugas 1: Limit', deadline: '2024-01-18', status: 'completed', score: 75 }
    ],
    5: [
        { title: 'Tugas 1: OS Basics', deadline: '2024-01-17', status: 'completed', score: 84 }
    ],
    6: [
        { title: 'Tugas 1: OSI Model', deadline: '2024-01-19', status: 'completed', score: 81 }
    ],
    7: [
        { title: 'Tugas 1: Cryptography', deadline: '2024-01-21', status: 'completed', score: 86 }
    ]
};

function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        alert('Username dan password harus diisi!');
        return;
    }
    
    localStorage.setItem('user', JSON.stringify({ username }));
    document.getElementById('studentName').textContent = username;
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    loadCourses();
}

function handleLogout() {
    localStorage.removeItem('user');
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('dashboardPage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}

function showNav(page) {
    document.getElementById('berandaContent').classList.add('hidden');
    document.getElementById('nilaiContent').classList.add('hidden');
    document.getElementById('tugasContent').classList.add('hidden');
    document.getElementById('courseDetailContent').classList.add('hidden');
    document.getElementById('settingsContent').classList.add('hidden');
    
    if (page === 'beranda') {
        document.getElementById('berandaContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Beranda';
        loadCourses();
    } else if (page === 'nilai') {
        document.getElementById('nilaiContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Nilai CPL';
        loadNilai();
    } else if (page === 'tugas') {
        document.getElementById('tugasContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Tugas & Deadline';
        loadTugas();
    } else if (page === 'settings') {
        document.getElementById('settingsContent').classList.remove('hidden');
        document.getElementById('pageTitle').textContent = 'Settings';
        loadSettings();
    }
}

function loadCourses() {
    const grid = document.getElementById('courseGrid');
    grid.innerHTML = '';
    
    for (let id in coursesData) {
        const course = coursesData[id];
        const card = document.createElement('div');
        card.className = 'card-course bg-white rounded-lg shadow-md p-6 cursor-pointer';
        card.onclick = () => showCourseDetail(id);
        card.innerHTML = `
            <div class="text-4xl mb-3">${course.icon}</div>
            <h3 class="font-bold text-lg mb-2">${course.title}</h3>
            <p class="text-gray-600 text-sm">Dosen: ${course.dosen}</p>
        `;
        grid.appendChild(card);
    }
}

function showCourseDetail(courseId) {
    const course = coursesData[courseId];
    const tasks = tugasData[courseId] || [];
    
    document.getElementById('berandaContent').classList.add('hidden');
    document.getElementById('courseDetailContent').classList.remove('hidden');
    document.getElementById('pageTitle').textContent = course.title;
    
    document.getElementById('courseDetailTitle').textContent = course.title;
    document.getElementById('courseDetailDosen').textContent = `Dosen: ${course.dosen} | Nilai: ${course.nilai} (${course.grade})`;
    
    const tasksList = document.getElementById('courseTasksList');
    tasksList.innerHTML = '';
    
    if (tasks.length === 0) {
        tasksList.innerHTML = '<p class="text-gray-500">Tidak ada tugas</p>';
    } else {
        tasks.forEach(task => {
            const item = document.createElement('div');
            item.className = `task-item ${task.status === 'completed' ? 'completed' : ''}`;
            item.innerHTML = `
                <div class="flex justify-between">
                    <div class="flex-1">
                        <p class="font-semibold text-gray-800">${task.title}</p>
                        <p class="text-xs text-gray-500">Deadline: ${task.deadline}</p>
                        ${task.score ? `<p class="text-xs text-green-600">Nilai: ${task.score}</p>` : ''}
                    </div>
                    <span class="px-3 py-1 rounded text-xs font-bold ${task.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">
                        ${task.status === 'completed' ? '✓ Selesai' : '⏳ Pending'}
                    </span>
                </div>
            `;
            tasksList.appendChild(item);
        });
    }
}

function backToBeranda() {
    document.getElementById('courseDetailContent').classList.add('hidden');
    document.getElementById('berandaContent').classList.remove('hidden');
    document.getElementById('pageTitle').textContent = 'Beranda';
}

function loadNilai() {
    const table = document.getElementById('nilaiTable');
    table.innerHTML = '';
    
    let no = 1;
    for (let id in coursesData) {
        const course = coursesData[id];
        const row = document.createElement('tr');
        row.className = 'border-b hover:bg-gray-50';
        row.innerHTML = `
            <td class="px-4 py-2">${no}</td>
            <td class="px-4 py-2">${course.title}</td>
            <td class="px-4 py-2 text-center font-bold">${course.nilai}</td>
            <td class="px-4 py-2 text-center"><span class="px-2 py-1 rounded text-xs font-bold bg-blue-100 text-blue-700">${course.grade}</span></td>
        `;
        table.appendChild(row);
        no++;
    }
}

function loadTugas() {
    const container = document.getElementById('tugasContainer');
    container.innerHTML = '';
    
    for (let courseId in coursesData) {
        const course = coursesData[courseId];
        const tasks = tugasData[courseId] || [];
        
        const section = document.createElement('div');
        section.className = 'mb-8';
        section.innerHTML = `<h3 class="font-bold text-lg text-gray-800 mb-3">${course.icon} ${course.title}</h3>`;
        
        tasks.forEach(task => {
            const item = document.createElement('div');
            item.className = `task-item ${task.status === 'completed' ? 'completed' : ''}`;
            item.innerHTML = `
                <div class="flex justify-between">
                    <div class="flex-1">
                        <p class="font-semibold text-gray-800">${task.title}</p>
                        <p class="text-xs text-gray-500">Deadline: ${task.deadline}</p>
                        ${task.score ? `<p class="text-xs text-green-600">Nilai: ${task.score}</p>` : ''}
                    </div>
                    <span class="px-3 py-1 rounded text-xs font-bold ${task.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}">
                        ${task.status === 'completed' ? '✓ Selesai' : '⏳ Pending'}
                    </span>
                </div>
            `;
            section.appendChild(item);
        });
        
        container.appendChild(section);
    }
}

function loadSettings() {
    const user = localStorage.getItem('user');
    const userData = user ? JSON.parse(user) : {};
    document.getElementById('profileName').value = userData.username || '';
    
    const theme = localStorage.getItem('theme') || 'light';
    document.querySelector(`input[name="theme"][value="${theme}"]`).checked = true;
}

function saveProfileName() {
    const newName = document.getElementById('profileName').value.trim();
    if (newName) {
        localStorage.setItem('user', JSON.stringify({ username: newName }));
        document.getElementById('studentName').textContent = newName;
        alert('Nama berhasil disimpan!');
    }
}

function changeTheme(theme) {
    localStorage.setItem('theme', theme);
    applyTheme(theme);
    
    // Update radio button
    document.querySelectorAll('input[name="theme"]').forEach(radio => {
        radio.checked = (radio.value === theme);
    });
}

function applyTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.classList.add('dark-mode');
    } else {
        body.classList.remove('dark-mode');
    }
}

// ======================== AI CHAT FUNCTIONS ========================
function toggleAiChat() {
    const widget = document.getElementById('aiChatWidget');
    widget.classList.toggle('hidden');
    if (!widget.classList.contains('hidden')) {
        document.getElementById('aiChatInput').focus();
    }
}

async function sendAiMessage() {
    const input = document.getElementById('aiChatInput');
    const message = input.value.trim().toLowerCase();
    
    if (!message) return;
    
    addAiMessage(input.value, 'user');
    input.value = '';
    
    // Local AI - cari jawaban dari data
    const response = searchLocalData(message);
    addAiMessage(response, 'bot');
}

function searchLocalData(query) {
    // Dosen
    if (query.includes('dosen')) {
        let result = '📚 Daftar Dosen:\n';
        Object.values(coursesData).forEach(course => {
            result += `• ${course.title}: ${course.dosen}\n`;
        });
        return result;
    }
    
    // Mata kuliah
    if (query.includes('mata kuliah') || query.includes('course') || query.includes('kursus')) {
        let result = '📖 Daftar Mata Kuliah:\n';
        Object.values(coursesData).forEach(course => {
            result += `• ${course.title}\n`;
        });
        return result;
    }
    
    // Nilai/Grade
    if (query.includes('nilai') || query.includes('grade') || query.includes('score')) {
        let result = '📊 Nilai Anda:\n';
        Object.values(coursesData).forEach(course => {
            result += `• ${course.title}: ${course.nilai} (${course.grade})\n`;
        });
        return result;
    }
    
    // Tugas
    if (query.includes('tugas') || query.includes('task') || query.includes('assignment')) {
        let result = '✅ Daftar Tugas:\n';
        Object.entries(tugasData).forEach(([courseId, tasks]) => {
            const courseName = coursesData[courseId]?.title || courseId;
            result += `\n${courseName}:\n`;
            tasks.forEach(task => {
                result += `  • ${task.title} (${task.status}) - Deadline: ${task.deadline}\n`;
            });
        });
        return result;
    }
    
    // Deadline
    if (query.includes('deadline')) {
        let result = '⏰ Deadline Tugas:\n';
        Object.entries(tugasData).forEach(([courseId, tasks]) => {
            const courseName = coursesData[courseId]?.title || courseId;
            tasks.forEach(task => {
                result += `• ${courseName} - ${task.title}: ${task.deadline}\n`;
            });
        });
        return result;
    }
    
    // Cari tugas selesai/pending
    if (query.includes('selesai') || query.includes('done') || query.includes('complete')) {
        let result = '✅ Tugas Selesai:\n';
        Object.entries(tugasData).forEach(([courseId, tasks]) => {
            const courseName = coursesData[courseId]?.title || courseId;
            tasks.filter(t => t.status === 'Selesai').forEach(task => {
                result += `• ${courseName} - ${task.title}\n`;
            });
        });
        return result || 'Belum ada tugas yang selesai.';
    }
    
    if (query.includes('pending') || query.includes('belum')) {
        let result = '⏳ Tugas Belum Selesai:\n';
        Object.entries(tugasData).forEach(([courseId, tasks]) => {
            const courseName = coursesData[courseId]?.title || courseId;
            tasks.filter(t => t.status === 'Pending').forEach(task => {
                result += `• ${courseName} - ${task.title} (${task.deadline})\n`;
            });
        });
        return result || 'Semua tugas sudah selesai! ✨';
    }
    
    // Cari berdasarkan nama course
    for (const [courseId, course] of Object.entries(coursesData)) {
        if (query.includes(course.title.toLowerCase())) {
            let result = `📚 ${course.title}\n`;
            result += `Dosen: ${course.dosen}\n`;
            result += `Nilai: ${course.nilai} (${course.grade})\n`;
            
            if (tugasData[courseId]) {
                result += `\nTugas:\n`;
                tugasData[courseId].forEach(task => {
                    result += `  • ${task.title} (${task.status})\n`;
                });
            }
            return result;
        }
    }
    
    // Default response
    return `Maaf, saya tidak menemukan informasi tentang "${query.replace(/^.*:\s*/, '')}"\n\nTanyakan tentang:\n• Dosen\n• Mata kuliah\n• Nilai/Grade\n• Tugas\n• Deadline`;
}

function addAiMessage(message, type) {
    const chatDiv = document.getElementById('aiChatMessages');
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'}`;
    if (type === 'bot' && message.includes('⏳')) msgDiv.setAttribute('data-loading', '1');
    
    const bubble = document.createElement('div');
    bubble.className = `px-3 py-2 rounded-lg max-w-xs text-sm ${type === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800'}`;
    bubble.textContent = message;
    
    msgDiv.appendChild(bubble);
    chatDiv.appendChild(msgDiv);
    chatDiv.scrollTop = chatDiv.scrollHeight;
}

function saveApiKey() {
    const key = document.getElementById('apiKey').value.trim();
    if (!key) {
        alert('Masukkan API key terlebih dahulu!');
        return;
    }
    localStorage.setItem('gemini_api_key', key);
    document.getElementById('apiKey').value = '';
    document.getElementById('apiKeyStatus').innerHTML = '✅ API Key berhasil disimpan!';
    setTimeout(() => {
        document.getElementById('apiKeyStatus').innerHTML = '';
    }, 3000);
}

// Setup chat enter key
function setupAiChat() {
    const input = document.getElementById('aiChatInput');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendAiMessage();
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        document.getElementById('studentName').textContent = userData.username;
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('dashboardPage').classList.remove('hidden');
        loadCourses();
    }
    
    const theme = localStorage.getItem('theme') || 'light';
    applyTheme(theme);
    
    setupAiChat();
});
