// Data Storage
const posData = [
    { id: 'n', title: 'Danh từ', eng: 'Noun', sym: 'N', meaning: 'Gọi tên mọi thứ trên đời: người, con vật, đồ vật, sự việc, hiện tượng, khái niệm.', signs: ['-tion', '-sion', '-ment', '-ce', '-ness', '-ity', '-er', '-or', '-ist', '-hood', '-ship', '-dom'], positions: ['Làm Chủ ngữ (S) đứng đầu câu.', 'Làm Tân ngữ (O) đứng sau động từ.', 'Đứng sau Giới từ.', 'Đứng sau Tính từ, Mạo từ hoặc từ chỉ định.'], interaction: 'Là trung tâm của câu. Thường được bổ nghĩa bởi Tính từ (Adj + N) hoặc Hạn định từ.', examples: [{ en: 'Huan is a Java developer.', note: 'Huan và developer là N' }, { en: 'The server requires maintenance.', note: 'server và maintenance là N' }], color: 'sky' },
    { id: 'v', title: 'Động từ', eng: 'Verb', sym: 'V', meaning: 'Chỉ hành động hoặc trạng thái của chủ ngữ. Trái tim của mọi câu, không có động từ thì không thành câu.', signs: ['-ate', '-ize', '-en', '-ify'], positions: ['Đứng ngay sau Chủ ngữ trong câu khẳng định.'], interaction: 'Bị Trạng từ bổ nghĩa. Ngoại động từ cần Tân ngữ (N/Pron) đi kèm phía sau.', examples: [{ en: 'I code every day.', note: 'code là V' }, { en: 'The system crashed yesterday.', note: 'crashed là V' }], color: 'rose' },
    { id: 'adj', title: 'Tính từ', eng: 'Adjective', sym: 'Adj', meaning: 'Chỉ đặc điểm, tính chất, màu sắc, trạng thái. Dùng để miêu tả, tô vẽ thêm cho Danh từ.', signs: ['-ful', '-less', '-ive', '-al', '-ic', '-able', '-ible', '-ous', '-ish', '-y', '-ed', '-ing'], positions: ['Đứng ngay trước Danh từ.', 'Đứng sau động từ to be hoặc các Linking verbs (feel, look, seem...).'], interaction: 'Sinh ra để bổ nghĩa cho Danh từ/Đại từ. Chính nó bị Trạng từ bổ nghĩa (Adv + Adj).', examples: [{ en: 'This is a stupid bug.', note: 'stupid miêu tả cho bug' }, { en: 'He looks exhausted.', note: 'exhausted đứng sau linking verb looks' }], color: 'violet' },
    { id: 'adv', title: 'Trạng từ', eng: 'Adverb', sym: 'Adv', meaning: 'Chỉ mức độ, thời gian, nơi chốn, cách thức. Giải thích rõ việc đó xảy ra thế nào, ở đâu, bao giờ.', signs: ['Đuôi -ly (thường gặp)', 'Ngoại lệ: hard, fast, late, well'], positions: ['Đầu câu (ngắt bằng dấu phẩy).', 'Trước động từ thường, sau to be.', 'Trước tính từ hoặc trạng từ khác.', 'Cuối câu.'], interaction: 'Bổ nghĩa cho Động từ, Tính từ, Trạng từ khác hoặc cả câu. Tuyệt đối không bổ nghĩa cho Danh từ.', examples: [{ en: 'The app crashed unexpectedly.', note: 'unexpectedly bổ nghĩa cho crashed' }, { en: 'This code is really bad.', note: 'really bổ nghĩa cho tính từ bad' }], color: 'emerald' },
    { id: 'pron', title: 'Đại từ', eng: 'Pronoun', sym: 'Pron', meaning: 'Đại diện cho người, vật hoặc sự việc để khỏi phải gọi đích danh tên chúng nó ra.', signs: ['I, you, we, they, he, she, it', 'me, him, them, mine, yours, himself...'], positions: ['Thay thế vào bất cứ vị trí nào Danh từ có thể đứng (Chủ ngữ, Tân ngữ, Sau giới từ).'], interaction: 'Dùng để thay thế danh từ đã nhắc trước đó để tránh lặp từ rườm rà.', examples: [{ en: 'Huan wrote the code, and he deployed it.', note: 'he = Huan, it = the code' }], color: 'yellow' },
    { id: 'prep', title: 'Giới từ', eng: 'Preposition', sym: 'Prep', meaning: 'Biểu thị mối quan hệ không gian, thời gian hoặc mục đích giữa các thành phần trong câu.', signs: ['in, on, at, of, with, under, between, about...'], positions: ['Đứng trước Danh từ, Đại từ hoặc V-ing.'], interaction: 'Tạo thành cụm giới từ để làm trạng ngữ chỉ thời gian/nơi chốn.', examples: [{ en: 'I found a bug in the database.', note: 'in chỉ vị trí' }, { en: 'We never deploy on Fridays.', note: 'on chỉ thời gian' }], color: 'pink' },
    { id: 'conj', title: 'Liên từ', eng: 'Conjunction', sym: 'Conj', meaning: 'Làm keo dán nối các từ, cụm từ hoặc mệnh đề với nhau theo logic.', signs: ['and, but, or, so, because, although, if, unless...'], positions: ['Nằm giữa hai thành phần cần kết nối.'], interaction: 'Nối các thành phần ngữ pháp tương đương hoặc nối mệnh đề phụ vào mệnh đề chính.', examples: [{ en: 'I want to sleep, but the server is down.', note: 'but nối 2 mệnh đề trái ngược' }], color: 'indigo' },
    { id: 'int', title: 'Thán từ', eng: 'Interjection', sym: 'Int', meaning: 'Bộc lộ cảm xúc bộc phát (vui, buồn, ngạc nhiên, chửi thề).', signs: ['Oh, wow, ouch, shit, damn, oops...'], positions: ['Đứng biệt lập ở đầu câu, ngăn cách bằng dấu phẩy hoặc chấm than.'], interaction: 'Không có tác dụng ngữ pháp. Bỏ đi câu vẫn đủ nghĩa.', examples: [{ en: 'Damn, I deleted the production table!', note: 'Damn bộc lộ sự hốt hoảng' }], color: 'slate' },
    { id: 'det', title: 'Hạn định từ', eng: 'Determiner', sym: 'Det', meaning: 'Cụ thể hóa và giới hạn phạm vi của danh từ (số lượng, sở hữu, định danh).', signs: ['Mạo từ (a, an, the)', 'Chỉ định (this, that...)', 'Số lượng (some, many...)', 'Sở hữu (my, your...)'], positions: ['Bắt buộc đứng trước Danh từ.'], interaction: 'Đi kèm danh từ để biến danh từ chung chung thành một đối tượng cụ thể.', examples: [{ en: 'I need some coffee to fix my bugs.', note: 'some (số lượng), my (sở hữu)' }], color: 'amber' }
];

// App Logic
function renderSidebar() {
    const menu = document.getElementById('pos-menu');
    posData.forEach(pos => {
        const btn = document.createElement('button');
        btn.id = `nav-${pos.id}`;
        btn.className = 'sheet-item py-3 px-6 text-left text-sm flex items-center gap-3 w-full';
        btn.innerHTML = `<span class="code-box text-[10px] w-7 h-7 flex items-center justify-center border border-${pos.color}-500/40 text-${pos.color}-400 rounded">${pos.sym}</span> ${pos.title}`;
        btn.onclick = () => switchView('detail', pos.id);
        menu.appendChild(btn);
    });
}

function renderQuickGrid() {
    const grid = document.getElementById('quick-grid');
    posData.forEach(pos => {
        const card = document.createElement('div');
        card.className = `panel p-5 rounded-sm cursor-pointer group hover:border-${pos.color}-500/50`;
        card.onclick = () => switchView('detail', pos.id);
        card.innerHTML = `
    <div class="flex items-center gap-3 mb-3">
        <div class="code-box w-9 h-9 rounded-sm border border-${pos.color}-500/40 text-${pos.color}-400 flex items-center justify-center font-semibold text-sm">
            ${pos.sym}
        </div>
        <div class="font-semibold text-sm text-slate-200 group-hover:text-${pos.color}-400 transition-colors font-display">${pos.title}</div>
    </div>
    <p class="text-xs text-[var(--ink-dim)] leading-relaxed line-clamp-2">${pos.meaning}</p>
    `;
        grid.appendChild(card);
    });
}

function initAnalyzer() {
    const tokens = document.querySelectorAll('.word-token');
    const feedback = document.getElementById('analyzer-feedback');

    tokens.forEach(token => {
        token.addEventListener('mouseenter', () => {
            feedback.innerHTML = `<span class="text-white font-semibold font-display">${token.dataset.word}</span> <span class="text-[var(--ink-faint)]">—</span> <span>${token.getAttribute('data-pos')}</span>`;
        });
        token.addEventListener('mouseleave', () => {
            feedback.innerText = 'Di chuột qua các từ bên trên để xem giải thích chi tiết.';
        });
    });
}

function switchView(viewId, posId = null) {
    const updateDOM = () => {
        document.getElementById('view-dashboard').classList.add('hidden');
        document.getElementById('view-detail').classList.add('hidden');
        document.getElementById('view-tenses').classList.add('hidden');

        if (viewId === 'detail' && posId) {
            showDetail(posId);
        }

        document.getElementById(`view-${viewId}`).classList.remove('hidden');

        document.querySelectorAll('.sheet-item').forEach(el => el.classList.remove('active'));

        const activeId = posId ? `nav-${posId}` : `nav-${viewId}`;
        const navEl = document.getElementById(activeId);
        if (navEl) navEl.classList.add('active');
    };

    if (document.startViewTransition) {
        document.startViewTransition(() => updateDOM());
    } else {
        updateDOM();
    }
}

function showDetail(id) {
    const data = posData.find(p => p.id === id);
    const container = document.getElementById('detail-content');

    container.innerHTML = `
    <div>
        <div class="flex items-center gap-6 mb-10 flex-wrap">
            <div class="code-box w-20 h-20 border border-${data.color}-500/40 text-${data.color}-400 rounded-sm flex items-center justify-center text-3xl font-semibold">
                ${data.sym}
            </div>
            <div>
                <div class="code-box text-[10px] text-[var(--ink-faint)] uppercase tracking-[0.18em] mb-1">Danh mục — Từ loại</div>
                <h2 class="text-4xl md:text-5xl font-bold text-white font-display tracking-tight">${data.title}</h2>
                <p class="text-${data.color}-400 font-mono uppercase tracking-[0.18em] text-xs mt-2">${data.eng}</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="md:col-span-2 space-y-6">
                <div class="panel p-7 rounded-sm">
                    <h4 class="code-box text-[10px] text-[var(--ink-faint)] uppercase tracking-widest mb-3">Ý nghĩa cốt lõi</h4>
                    <p class="text-lg text-slate-100 leading-relaxed">${data.meaning}</p>
                </div>

                <div class="panel p-7 rounded-sm">
                    <h4 class="code-box text-[10px] text-[var(--ink-faint)] uppercase tracking-widest mb-5">Vị trí trong câu</h4>
                    <ul class="space-y-4">
                        ${data.positions.map((p, index) => `
                                        <li class="flex items-start gap-4">
                                            <span class="code-box text-[10px] text-${data.color}-400 border border-${data.color}-500/40 rounded w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">${index + 1}</span>
                                            <span class="text-[var(--ink-dim)] leading-relaxed">${p}</span>
                                        </li>
                                    `).join('')}
                    </ul>
                </div>
            </div>

            <div class="space-y-6">
                <div class="panel p-6 rounded-sm">
                    <h4 class="code-box text-[10px] text-[var(--ink-faint)] uppercase tracking-widest mb-4">Dấu hiệu (Suffixes)</h4>
                    <div class="flex flex-wrap gap-2">
                        ${data.signs.map(s => `<span class="border border-${data.color}-500/30 hover:border-${data.color}-500/60 transition-colors px-2.5 py-1 rounded text-xs font-mono text-${data.color}-300">${s}</span>`).join('')}
                    </div>
                </div>

                <div class="panel p-6 rounded-sm border-l-2 border-${data.color}-500">
                    <h4 class="code-box text-[10px] text-[var(--ink-faint)] uppercase tracking-widest mb-3">Tương tác</h4>
                    <p class="text-sm text-[var(--ink-dim)] leading-relaxed">${data.interaction}</p>
                </div>
            </div>
        </div>

        <div class="dim-line"><span class="dim-label">Ví dụ thực tế</span></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${data.examples.map(ex => `
                            <div class="panel p-6 rounded-sm border-l-2 border-transparent hover:border-${data.color}-400">
                                <p class="font-semibold text-white text-lg font-display">${ex.en}</p>
                                <div class="mt-3 pt-3 border-t border-[var(--line)]">
                                    <p class="text-sm text-[var(--ink-dim)]"><span class="text-${data.color}-400 font-mono text-xs uppercase tracking-widest mr-1.5">Note</span> ${ex.note}</p>
                                </div>
                            </div>
                        `).join('')}
        </div>
    </div>
    `;
}

function renderTenses() {
    const mdContent = `**1. Hiện tại đơn (Present Simple)**

    * **Công thức:**
    + Khẳng định: S + V(s/es) + O
    + Phủ định: S + do/does + not + V
    + Nghi vấn: Do/Does + S + V?
    * **Cách sử dụng:**
    + Diễn tả sự thật hiển nhiên, thói quen hoặc hành động lặp đi lặp lại.
    + Diễn tả lịch trình, thời gian biểu.
    * **Dấu hiệu nhận biết:**
    + Các trạng từ chỉ tần suất: always, usually, often, sometimes, rarely, never.
    + Các trạng từ chỉ thời gian: every day, every week, on Mondays, in the morning.
    * **Ví dụ:**
    + Khẳng định: She always goes to school by bike.
    + Phủ định: They do not (don’t) play soccer on Sundays.
    + Nghi vấn: Do you often watch movies?

    **2. Hiện tại tiếp diễn (Present Continuous)**

    * **Công thức:**
    + Khẳng định: S + am/is/are + V-ing
    + Phủ định: S + am/is/are + not + V-ing
    + Nghi vấn: Am/Is/Are + S + V-ing?
    * **Cách sử dụng:**
    + Diễn tả hành động đang diễn ra tại thời điểm nói.
    + Diễn tả hành động xảy ra xung quanh thời điểm hiện tại nhưng không nhất thiết phải diễn ra ngay lúc nói.
    + Diễn tả kế hoạch trong tương lai gần.
    * **Dấu hiệu nhận biết:**
    + now, right now, at the moment, currently.
    * **Ví dụ:**
    + Khẳng định: She is reading a book now.
    + Phủ định: They are not watching TV at the moment.
    + Nghi vấn: Are you doing your homework?

    **3. Hiện tại hoàn thành (Present Perfect)**

    * **Công thức:**
    + Khẳng định: S + have/has + V3/ed
    + Phủ định: S + have/has + not + V3/ed
    + Nghi vấn: Have/Has + S + V3/ed?
    * **Cách sử dụng:**
    + Diễn tả hành động xảy ra ở một thời điểm không xác định trong quá khứ.
    + Diễn tả hành động bắt đầu trong quá khứ và kéo dài đến hiện tại.
    + Diễn tả kinh nghiệm, trải nghiệm.
    * **Dấu hiệu nhận biết:**
    + just, recently, already, yet, ever, never, since, for.
    * **Ví dụ:**
    + Khẳng định: I have already finished my homework.
    + Phủ định: She has not (hasn’t) visited Paris yet.
    + Nghi vấn: Have you ever eaten sushi?

    **4. Hiện tại hoàn thành tiếp diễn (Present Perfect Continuous)**

    * **Công thức:**
    + Khẳng định: S + have/has + been + V-ing
    + Phủ định: S + have/has + not + been + V-ing
    + Nghi vấn: Have/Has + S + been + V-ing?
    * **Cách sử dụng:**
    + Diễn tả hành động bắt đầu trong quá khứ và tiếp tục kéo dài đến hiện tại (nhấn mạnh sự liên tục).
    + Diễn tả hành động đã xảy ra trong quá khứ và có kết quả ảnh hưởng đến hiện tại.
    * **Dấu hiệu nhận biết:**
    + for, since, all day, all morning, recently, lately.
    * **Ví dụ:**
    + Khẳng định: She has been studying English for 3 years.
    + Phủ định: They have not (haven’t) been playing soccer since morning.
    + Nghi vấn: Have you been working here for a long time?

    **5. Quá khứ đơn (Past Simple)**

    * **Công thức:**
    + Khẳng định: S + V2/ed
    + Phủ định: S + did not (didn’t) + V
    + Nghi vấn: Did + S + V?
    * **Cách sử dụng:**
    + Diễn tả hành động đã xảy ra và kết thúc trong quá khứ.
    * **Dấu hiệu nhận biết:**
    + yesterday, last night, last week, in 2010, two days ago.
    * **Ví dụ:**
    + Khẳng định: She visited her grandparents last week.
    + Phủ định: They didn’t go to the party yesterday.
    + Nghi vấn: Did you see that movie last night?

    **6. Quá khứ tiếp diễn (Past Continuous)**

    * **Công thức:**
    + Khẳng định: S + was/were + V-ing
    + Phủ định: S + was/were + not + V-ing
    + Nghi vấn: Was/Were + S + V-ing?
    * **Cách sử dụng:**
    + Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong quá khứ.
    + Diễn tả hành động đang diễn ra thì có hành động khác xen vào.
    * **Dấu hiệu nhận biết:**
    + at this time yesterday, at that moment, while, when.
    * **Ví dụ:**
    + Khẳng định: They were playing soccer at 4 pm yesterday.
    + Phủ định: She was not (wasn’t) sleeping when I called her.
    + Nghi vấn: Were you studying at this time yesterday?

    **7. Quá khứ hoàn thành (Past Perfect)**

    * **Công thức:**
    + Khẳng định: S + had + V3/ed
    + Phủ định: S + had + not + V3/ed
    + Nghi vấn: Had + S + V3/ed?
    * **Cách sử dụng:**
    + Diễn tả hành động xảy ra trước một hành động khác trong quá khứ.
    * **Dấu hiệu nhận biết:**
    + before, after, by the time.
    * **Ví dụ:**
    + Khẳng định: She had left before he arrived.
    + Phủ định: They had not (hadn’t) eaten when I came.
    + Nghi vấn: Had you finished your homework before you went out?

    **8. Quá khứ hoàn thành tiếp diễn (Past Perfect Continuous)**

    * **Công thức:**
    + Khẳng định: S + had + been + V-ing
    + Phủ định: S + had + not + been + V-ing
    + Nghi vấn: Had + S + been + V-ing?
    * **Cách sử dụng:**
    + Diễn tả hành động đã diễn ra liên tục trước một hành động khác trong quá khứ.
    + Nhấn mạnh tính liên tục của hành động trước một thời điểm hoặc hành động khác trong quá khứ.
    * **Dấu hiệu nhận biết:**
    + for, since, before, by the time, when.
    * **Ví dụ:**
    + Khẳng định: She had been waiting for two hours before the bus arrived.
    + Phủ định: They had not (hadn’t) been living in the city for long before they moved to the countryside.
    + Nghi vấn: Had you been working there long before you got promoted?

    **9. Tương lai đơn (Future Simple)**

    * **Công thức:**
    + Khẳng định: S + will + V
    + Phủ định: S + will + not (won’t) + V
    + Nghi vấn: Will + S + V?
    * **Cách sử dụng:**
    + Diễn tả hành động sẽ xảy ra trong tương lai.
    + Diễn tả quyết định ngay tại thời điểm nói.
    * **Dấu hiệu nhận biết:**
    + tomorrow, next week, in the future, soon.
    * **Ví dụ:**
    + Khẳng định: I will travel to Japan next year.
    + Phủ định: She will not (won’t) attend the meeting tomorrow.
    + Nghi vấn: Will you come to the party?

    **10. Tương lai gần (Be Going To)**

    * **Công thức:**
    + Khẳng định: S + am/is/are + going to + V
    + Phủ định: S + am/is/are + not + going to + V
    + Nghi vấn: Am/Is/Are + S + going to + V?
    * **Cách sử dụng:**
    + Diễn tả hành động dự định sẽ làm trong tương lai.
    + Diễn tả hành động sắp xảy ra có dấu hiệu rõ ràng.
    * **Dấu hiệu nhận biết:**
    + tương tự như Future Simple nhưng có sự chắc chắn hơn.
    * **Ví dụ:**
    + Khẳng định: They are going to visit their grandparents this weekend.
    + Phủ định: I am not going to watch that movie.
    + Nghi vấn: Are you going to study abroad?

    **11. Tương lai tiếp diễn (Future Continuous)**

    * **Công thức:**
    + Khẳng định: S + will be + V-ing
    + Phủ định: S + will not (won’t) be + V-ing
    + Nghi vấn: Will + S + be + V-ing?
    * **Cách sử dụng:**
    + Diễn tả hành động đang diễn ra tại một thời điểm cụ thể trong tương lai.
    * **Dấu hiệu nhận biết:**
    + at this time tomorrow, at this moment next year.
    * **Ví dụ:**
    + Khẳng định: She will be studying at 8 pm tomorrow.
    + Phủ định: They will not (won’t) be traveling this time next week.
    + Nghi vấn: Will you be working at 10 am tomorrow?

    **12. Tương lai hoàn thành (Future Perfect)**

    * **Công thức:**
    + Khẳng định: S + will have + V3/ed
    + Phủ định: S + will not (won’t) have + V3/ed
    + Nghi vấn: Will + S + have + V3/ed?
    * **Cách sử dụng:**
    + Diễn tả hành động sẽ hoàn thành trước một thời điểm hoặc hành động khác trong tương lai.
    * **Dấu hiệu nhận biết:**
    + by, by the time, before, after.
    * **Ví dụ:**
    + Khẳng định: I will have finished my project by next Monday.
    + Phủ định: She will not (won’t) have left before you arrive.
    + Nghi vấn: Will you have graduated by 2025?

    **13. Tương lai hoàn thành tiếp diễn (Future Perfect Continuous)**

    * **Công thức:**
    + Khẳng định: S + will + have + been + V-ing
    + Phủ định: S + will + not + have + been + V-ing
    + Nghi vấn: Will + S + have + been + V-ing?
    * **Cách sử dụng:**
    + Diễn tả hành động sẽ diễn ra liên tục cho đến một thời điểm nào đó trong tương lai.
    * **Dấu hiệu nhận biết:**
    + for, by the time, by then, by + thời gian cụ thể trong tương lai.
    * **Ví dụ:**
    + Khẳng định: By next month, I will have been working here for a year.
    + Phủ định: They will not (won’t) have been studying for long by the time the semester ends.
    + Nghi vấn: Will you have been traveling for two weeks by the end of this month?

    **Chú thích ký hiệu**

    * **S**: Chủ ngữ (Subject)
    * **V**: Động từ nguyên mẫu (Verb)
    * **V(s/es)**: Động từ chia ở ngôi thứ ba số ít trong thì hiện tại đơn
    * **V2/ed**: Động từ chia ở dạng quá khứ
    * **V3/ed**: Quá khứ phân từ
    * **V-ing**: Động từ thêm "ing"
    * **O**: Tân ngữ (Object)
    * **do/does/did**: Trợ động từ dùng trong thì hiện tại/quá khứ đơn
    * **am/is/are/was/were**: Trợ động từ "to be"
    * **have/has/had**: Trợ động từ hoàn thành
    * **will**: Trợ động từ dùng trong thì tương lai`;

    const lines = mdContent.split('\n');
    let tenses = [];
    let currentTense = null;

    for (let line of lines) {
        if (line.startsWith('**') && line.match(/^\*\*\d+\./)) {
            if (currentTense) tenses.push(currentTense);
            currentTense = { name: line.replace(/\*\*/g, '').trim(), content: '' };
        } else if (line.startsWith('**Chú thích')) {
            if (currentTense) tenses.push(currentTense);
            currentTense = { name: 'Chú thích ký hiệu', content: '' };
        } else {
            if (currentTense) currentTense.content += line + '\n';
        }
    }
    if (currentTense) tenses.push(currentTense);

    let html = '<div class="grid grid-cols-1 lg:grid-cols-2 gap-5">';
    tenses.forEach((t, i) => {
        let color = 'sky';
        if (t.name.includes('Quá khứ')) color = 'slate';
        else if (t.name.includes('Hiện tại')) color = 'sky';
        else if (t.name.includes('Tương lai')) color = 'amber';
        else if (t.name.includes('Chú thích')) color = 'pink';

        let colSpan = t.name.includes('Chú thích') ? 'lg:col-span-2' : '';
        let tag = t.name.includes('Chú thích') ? 'KEY' : `T-${String(i + 1).padStart(2, '0')}`;

        let c = {
            slate: { text: 'text-slate-300', prose: 'prose-invert prose-slate' },
            amber: { text: 'text-amber-400', prose: 'prose-invert prose-amber' },
            pink: { text: 'text-pink-400', prose: 'prose-invert prose-pink' },
            sky: { text: 'text-sky-400', prose: 'prose-invert prose-sky' },
        }[color];

        html += `
        <div class="panel p-6 md:p-7 rounded-sm border-t-2 border-${color}-500/50 ${colSpan}">
            <h3 class="text-lg font-bold ${c.text} mb-4 font-display flex items-center gap-3 border-b border-[var(--line)] pb-4">
                <span class="code-box text-[10px] border border-${color}-500/40 rounded px-1.5 py-1">${tag}</span>
                ${t.name}
            </h3>
            <div class="prose prose-sm max-w-none ${c.prose} prose-ul:my-2 prose-li:my-1 prose-p:my-2 prose-strong:text-white prose-strong:font-semibold">
                ${marked.parse(t.content)}
            </div>
        </div>`;
    });
    html += '</div>';
    document.getElementById('tenses-content').innerHTML = html;
}

// Initialize App
window.onload = () => {
    renderSidebar();
    renderQuickGrid();
    initAnalyzer();
    renderTenses();
    switchView('dashboard');
};