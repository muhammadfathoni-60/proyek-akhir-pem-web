// ======================== CONTOH PENGEMBANGAN AI ========================
// File ini menunjukkan cara mengembangkan AI Assistant lebih lanjut
// Save as: assets/js/ai-advanced.js (opsional)

// ======================== 1. EXTENDED AI RESPONSES ========================
const extendedAiResponses = {
    // SOAL & JAWABAN
    'soal algoritma': {
        type: 'soal',
        response: `📝 CONTOH SOAL ALGORITMA
        
        Soal 1: Bubble Sort
        Buat algoritma untuk mengurutkan array [5, 2, 8, 1, 9]
        
        Jawaban: 
        - Bandingkan elemen bersebelahan
        - Tukar jika urutan salah
        - Ulangi sampai sorted
        - Time Complexity: O(n²)
        
        Soal 2: Linear Search
        Cari angka 7 dalam array [3, 7, 1, 9, 4]
        
        Jawaban:
        - Iterasi dari awal
        - Bandingkan dengan target
        - Return index jika ketemu
        - Time Complexity: O(n)`
    },
    
    // PENJELASAN KONSEP
    'apa itu sorting': {
        type: 'konsep',
        response: `📚 PENJELASAN: SORTING
        
        Sorting adalah proses mengurutkan data dalam urutan tertentu.
        
        ✓ JENIS-JENIS SORTING:
        1. Bubble Sort - Perbandingan sederhana
        2. Selection Sort - Cari minimum terus
        3. Insertion Sort - Insert satu per satu
        4. Merge Sort - Divide and conquer
        5. Quick Sort - Partisi pivot
        
        ✓ KAPAN DIGUNAKAN:
        - Database sorting
        - Search optimization
        - Data analysis
        
        ✓ KOMPLEKSITAS:
        Best: O(n)
        Average: O(n log n)
        Worst: O(n²)`
    },
    
    // DEBUGGING HELP
    'debugging': {
        type: 'help',
        response: `🐛 TIPS DEBUGGING
        
        ✓ LANGKAH-LANGKAH DEBUGGING:
        1. Pahami error message
        2. Isolasi problema
        3. Check input/output
        4. Print debug statements
        5. Use debugger tools
        
        ✓ TOOLS YANG BISA DIGUNAKAN:
        - Browser DevTools (F12)
        - VS Code Debugger
        - Console.log()
        - Breakpoints
        
        ✓ COMMON ERRORS:
        - Off-by-one errors
        - Null pointer exception
        - Logic errors
        - Type mismatches`
    }
};

// ======================== 2. SENTIMENT ANALYSIS ========================
function analyzeSentiment(message) {
    const positiveWords = ['bagus', 'mudah', 'suka', 'bagus', 'terima kasih', 'thanks'];
    const negativeWords = ['sulit', 'bingung', 'tidak mengerti', 'error', 'error'];
    
    let score = 0;
    const lowercaseMsg = message.toLowerCase();
    
    positiveWords.forEach(word => {
        if (lowercaseMsg.includes(word)) score += 1;
    });
    
    negativeWords.forEach(word => {
        if (lowercaseMsg.includes(word)) score -= 1;
    });
    
    if (score > 0) return 'positive';
    if (score < 0) return 'negative';
    return 'neutral';
}

// ======================== 3. LEARNING RECOMMENDATION ========================
const recommendationEngine = {
    userData: {
        completedTasks: [],
        failedAttempts: [],
        learningStyle: 'visual', // visual, auditory, kinesthetic
        timeSpentPerTopic: {}
    },
    
    getRecommendation() {
        const sentiment = analyzeSentiment(document.getElementById('aiChatInput').value);
        
        if (sentiment === 'negative') {
            return `Sepertinya Anda mengalami kesulitan 😟
            
            💡 REKOMENDASI:
            • Ulangi materi dari awal
            • Coba latihan soal lebih mudah dulu
            • Minta bantuan dosen melalui forum
            • Cari video tutorial tambahan
            
            Tidak ada yang salah dengan belajar lebih lama!`;
        }
        
        return 'Lanjutkan semangat belajarnya! 🎯';
    }
};

// ======================== 4. QUIZ INTEGRATION ========================
const quizModule = {
    currentQuiz: null,
    
    startQuiz(topic) {
        const quizzes = {
            'algoritma': [
                {
                    q: 'Apa itu algoritma?',
                    options: ['Prosedur', 'Variable', 'Function', 'Class'],
                    correct: 0
                },
                {
                    q: 'Big O notation untuk O(n²) disebut?',
                    options: ['Linear', 'Quadratic', 'Logarithmic', 'Exponential'],
                    correct: 1
                }
            ]
        };
        
        this.currentQuiz = quizzes[topic];
        return this.displayQuiz(quizzes[topic]);
    },
    
    displayQuiz(questions) {
        let quizHtml = '<div class="quiz-container">';
        
        questions.forEach((q, idx) => {
            quizHtml += `
                <div class="quiz-question">
                    <p><strong>Q${idx + 1}: ${q.q}</strong></p>
                    ${q.options.map((opt, i) => `
                        <label>
                            <input type="radio" name="q${idx}" value="${i}">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
            `;
        });
        
        quizHtml += `<button onclick="submitQuiz()">Submit</button></div>`;
        return quizHtml;
    }
};

// ======================== 5. CHAT HISTORY & EXPORT ========================
const chatHistoryManager = {
    history: [],
    
    saveMessage(message, response, timestamp = new Date()) {
        this.history.push({
            user: message,
            ai: response,
            time: timestamp
        });
        
        // Save to localStorage
        localStorage.setItem('aiChatHistory', JSON.stringify(this.history));
    },
    
    loadHistory() {
        const saved = localStorage.getItem('aiChatHistory');
        if (saved) {
            this.history = JSON.parse(saved);
        }
    },
    
    exportAsJSON() {
        const dataStr = JSON.stringify(this.history, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'chat_history.json';
        link.click();
    },
    
    exportAsCSV() {
        let csv = 'Waktu,Pertanyaan User,Respons AI\n';
        this.history.forEach(item => {
            csv += `"${item.time}","${item.user}","${item.ai}"\n`;
        });
        
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'chat_history.csv';
        link.click();
    }
};

// ======================== 6. REAL-TIME SUGGESTIONS ========================
const autoComplete = {
    suggestions: [
        'Algoritma',
        'Basis Data',
        'Web Development',
        'Kalkulus',
        'cara mengerjakan',
        'deadline',
        'nilai',
        'referensi'
    ],
    
    getSuggestions(input) {
        return this.suggestions.filter(s => 
            s.toLowerCase().includes(input.toLowerCase())
        );
    },
    
    showSuggestions(input) {
        const matches = this.getSuggestions(input);
        if (matches.length > 0) {
            // Render dropdown dengan suggestions
            console.log('Suggestions:', matches);
        }
    }
};

// ======================== 7. MULTI-LANGUAGE SUPPORT ========================
const i18n = {
    translations: {
        id: {
            greeting: 'Halo! Saya AI Assistant siap membantu Anda',
            search: 'Cari materi kuliah',
            tips: 'Tips mengerjakan tugas'
        },
        en: {
            greeting: 'Hello! I am AI Assistant ready to help you',
            search: 'Search course materials',
            tips: 'Tips for doing assignments'
        }
    },
    
    currentLang: 'id',
    
    translate(key) {
        return this.translations[this.currentLang][key] || key;
    },
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('aiLanguage', lang);
    }
};

// ======================== 8. ANALYTICS TRACKING ========================
const analytics = {
    events: [],
    
    trackEvent(eventName, data = {}) {
        this.events.push({
            event: eventName,
            data: data,
            timestamp: new Date(),
            userAgent: navigator.userAgent
        });
        
        // Bisa dikirim ke server
        this.sendToServer();
    },
    
    sendToServer() {
        // Implementasi: POST ke backend server
        // fetch('/api/analytics', {
        //     method: 'POST',
        //     body: JSON.stringify(this.events)
        // })
    },
    
    getMostAskedQuestions() {
        const questions = {};
        this.events.forEach(e => {
            if (e.event === 'question_asked') {
                const q = e.data.question;
                questions[q] = (questions[q] || 0) + 1;
            }
        });
        
        return Object.entries(questions)
            .sort((a, b) => b[1] - a[1])
            .slice(0, 5);
    }
};

// ======================== 9. ADVANCED PATTERN MATCHING ========================
function advancedPatternMatching(input) {
    // Regex patterns untuk matching lebih akurat
    const patterns = {
        courseSearch: /^(cari|lihat|info|tentang)\s+([a-z\s]+)$/i,
        tipsRequest: /^(tips|saran|bagaimana cara|gimana cara)\s+(.+)$/i,
        gradeInfo: /^(nilai|grade|score|hasil|prestasi)(.*)$/i,
        deadlineCheck: /^(deadline|jadwal|kapan|tanggal)\s*(.*)$/i
    };
    
    for (const [pattern, regex] of Object.entries(patterns)) {
        const match = input.match(regex);
        if (match) {
            return {
                type: pattern,
                captures: match.slice(1)
            };
        }
    }
    
    return null;
}

// ======================== 10. INTEGRATION EXAMPLE ========================
/*
CARA MENGGUNAKAN EXTENDED AI:

1. Import di HTML:
   <script src="assets/js/ai-advanced.js"></script>

2. Modifikasi generateAiResponse:
   function generateAiResponse(userMessage) {
       const pattern = advancedPatternMatching(userMessage);
       
       if (pattern) {
           if (pattern.type === 'courseSearch') {
               const course = pattern.captures[1];
               return `Mencari materi: ${course}...`;
           }
       }
       
       // Existing logic...
   }

3. Tracking:
   analytics.trackEvent('question_asked', { 
       question: message 
   });

4. Sentiment analysis:
   const sentiment = analyzeSentiment(message);
   if (sentiment === 'negative') {
       // Show additional resources
   }

5. Export chat history:
   chatHistoryManager.exportAsJSON();
   chatHistoryManager.exportAsCSV();
*/

// ======================== EXPORT ========================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        extendedAiResponses,
        recommendationEngine,
        quizModule,
        chatHistoryManager,
        autoComplete,
        i18n,
        analytics,
        advancedPatternMatching
    };
}
