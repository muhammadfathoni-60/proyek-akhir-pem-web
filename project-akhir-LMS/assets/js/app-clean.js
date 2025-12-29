// ======================== GOOGLE GEMINI API CONFIG ========================
const GEMINI_API_ENDPOINT = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

// ======================== DATA ========================
const coursesData = {
    1: { title: 'Algoritma & Pemrograman', dosen: 'Dr. Budi Santoso', icon: '💻' },
    2: { title: 'Basis Data', dosen: 'Prof. Siti Nurhaliza', icon: '🗄️' },
    3: { title: 'Web Development', dosen: 'Hendra Wijaya, M.T', icon: '🌐' },
    4: { title: 'Kalkulus', dosen: 'Dr. Ahmad Pratama', icon: '📐' },
    5: { title: 'Sistem Operasi', dosen: 'Ir. Rina Susandi', icon: '⚙️' },
    6: { title: 'Jaringan Komputer', dosen: 'Dr. Fandi Kusuma', icon: '🔗' },
    7: { title: 'Keamanan Informasi', dosen: 'Prof. Wahid Hasyim', icon: '🔐' }
};

// ======================== LOGIN ========================
function handleLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    if (!username || !password) {
        alert('Username dan password harus diisi!');
        return;
    }
    
    localStorage.setItem('user', JSON.stringify({ username }));
    showDashboard();
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

function showDashboard() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dashboardPage').classList.remove('hidden');
    
    const user = localStorage.getItem('user');
    if (user) {
        const userData = JSON.parse(user);
        document.getElementById('studentName').textContent = userData.username;
    }
    
    loadCourses();
    
    // Show API modal if no key
    setTimeout(() => {
        checkApiKey();
    }, 300);
}

// ======================== COURSES ========================
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

// ======================== API KEY MODAL ========================
function checkApiKey() {
    const key = localStorage.getItem('gemini_api_key');
    const modal = document.getElementById('apiKeyModal');
    if (modal) {
        if (!key) {
            modal.style.display = 'flex';
        } else {
            modal.style.display = 'none';
        }
    }
}

function openSettings() {
    const modal = document.getElementById('apiKeyModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeApiKeyModal() {
    const modal = document.getElementById('apiKeyModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function saveApiKey() {
    const key = document.getElementById('apiKeyInput').value.trim();
    if (!key) {
        alert('Masukkan API key terlebih dahulu!');
        return;
    }
    
    localStorage.setItem('gemini_api_key', key);
    document.getElementById('apiKeyStatus').innerHTML = '✅ API Key tersimpan!';
    document.getElementById('apiKeyInput').value = '';
    
    setTimeout(() => {
        document.getElementById('apiKeyModal').style.display = 'none';
        document.getElementById('apiKeyStatus').innerHTML = '';
    }, 1500);
}

// ======================== AI CHAT ========================
async function sendAiMessage() {
    const input = document.getElementById('aiChatInput');
    if (!input) return;
    
    const message = input.value.trim();
    if (!message) return;
    
    const apiKey = localStorage.getItem('gemini_api_key');
    if (!apiKey) {
        addAiChatMessage('❌ API Key belum diatur. Klik ⚙️ Setup AI untuk melanjutkan.', 'ai');
        return;
    }
    
    addAiChatMessage(message, 'user');
    input.value = '';
    
    // Show loading
    const chat = document.getElementById('aiChatMessages');
    const loading = document.createElement('div');
    loading.className = 'ai-message mb-3';
    loading.innerHTML = '<div class="bg-gray-200 text-gray-800 rounded-lg p-3 text-sm mr-8">⏳ Sedang memproses...</div>';
    chat.appendChild(loading);
    chat.scrollTop = chat.scrollHeight;
    
    try {
        const response = await callGeminiAPI(message, apiKey);
        loading.remove();
        addAiChatMessage(response, 'ai');
    } catch (error) {
        loading.remove();
        addAiChatMessage('❌ Error: ' + error.message, 'ai');
    }
}

async function callGeminiAPI(message, apiKey) {
    const payload = {
        contents: [{
            parts: [{
                text: `Anda adalah AI Assistant untuk Learning Management System (LMS) kampus. 
Anda membantu mahasiswa dengan pertanyaan tentang pembelajaran, mata kuliah, tips belajar, deadline, dan referensi.
Mata kuliah yang tersedia: ${Object.values(coursesData).map(c => c.title).join(', ')}

Pertanyaan: ${message}`
            }]
        }]
    };

    const response = await fetch(`${GEMINI_API_ENDPOINT}?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error?.message || 'API Error');
    }

    const data = await response.json();
    return data.candidates[0]?.content?.parts[0]?.text || 'Maaf, saya tidak bisa memproses pertanyaan Anda.';
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

function handleAiChatKeypress(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendAiMessage();
    }
}

// ======================== INIT ========================
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('user');
    if (user) {
        showDashboard();
    } else {
        showLoginPage();
    }
    
    // Setup chat enter key
    const input = document.getElementById('aiChatInput');
    if (input) {
        input.addEventListener('keypress', handleAiChatKeypress);
    }
});
