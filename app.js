const routineConfig = [
    {
        category: "09:00 - 10:00 開店準備",
        items: [
            { id: "op_01", text: "南京錠を開け事務所の鍵を開ける(暗証番号:0313)" },
            { id: "op_02", text: "事務所の電気をつける" },
            { id: "op_03", text: "身支度を整え金庫を持ち、カフェの鍵を開ける" },
            { id: "op_04", text: "カフェの電気をつける" },
            { id: "op_05", text: "勤怠を押す" },
            { id: "op_06", text: "エスプレッソマシーン、グラインダーの電源ON" },
            { id: "op_07", text: "朝礼（ZOOM）" },
            { id: "op_08", text: "4ヶ所ネットを設置する" },
            { id: "op_09", text: "ダスターを定位置に配置する\n（ドライ→ショーケース1、エスプレッソマシーン3、水切り1、食器拭き3 / ウェット→作業台2 / 客席→白ダスター1）" },
            { id: "op_10", text: "お金をレジスターに入れる" },
            { id: "op_11", text: "開店準備①（ショーケースにケーキを並べる）" },
            { id: "op_12", text: "開店準備②（パイ焼き戻し、Togoティラミス仕上げ、チルク補充）" },
            { id: "op_13", text: "開店準備③（ディスプレイ用商品準備）" },
            { id: "op_14", text: "開店準備④（パイ焼成）" },
            { id: "op_15", text: "モーニングの生ハムをタッパーに移す" },
            { id: "op_16", text: "ショーケースを拭く（正面、上、iPad周り）" },
            { id: "op_17", text: "窓を拭く" },
            { id: "op_18", text: "毎週月曜にフィルター5か所の掃除とタンク2か所の水を捨てる", displayDays: [1] },
            { id: "op_19", text: "店前の掃き掃除" },
            { id: "op_20", text: "焼き菓子棚補充（バーBOX×5セット、OPP焼き菓子セット）" },
            { id: "op_21", text: "レジ前棚補充（バラ売りチーケーブレイク＆バー、お誕生日クッキー、HBDピック×２、ろうそく3本セット×３）" },
            { id: "op_22", text: "グッズ整理、補充（ハンガーの感覚、バッグの向き、ワゴンの中整理）" },
            { id: "op_23", text: "引継ぎの確認(スラック、ホワイトボード)" },
            { id: "op_24", text: "本日の予約確認、準備(レストランボードを見て、TOGO商品の予約があればいつでも渡せる状態で準備する)" },
            { id: "op_25", text: "牛乳、生クリーム、OJ、AJの補充" },
            { id: "op_26", text: "フェッテ、ティラクリ（定数2）、コーヒー液(平日1、土日2)の準備" },
            { id: "op_27", text: "アイスティーつくる" },
            { id: "op_28", text: "お冷、カトラリー準備、牛乳設置" },
            { id: "op_29", text: "ショーケースの照明をつける" },
            { id: "op_30", text: "保冷剤をショーケースに準備する" }
        ]
    },
    {
        category: "10:00 - 12:00 発注・在庫",
        items: [
            { id: "ord_01", text: "ハナマサ発注(03-5779-8729)\n※発注日：火・木・土の午前中（以外も可能）", displayDays: [2, 4, 6] },
            { id: "ord_02", text: "日の出発注(03-3622-1866)\n※発注日：火・木・土の午前中", displayDays: [2, 4, 6] },
            { id: "ord_03", text: "タツミ発注\n※発注日：火・木・土の午前中", displayDays: [2, 4, 6] },
            { id: "ord_04", text: "保冷剤補充（店内ストッカー、２階冷凍庫）" }
        ]
    },
    {
        category: "11:00 - 15:00 仕込み・営業中",
        items: [
            { id: "day_01", text: "店舗朝礼(仕込みの割り振り、連絡事項、タスク管理)" },
            { id: "day_02", text: "発送作業" },
            { id: "day_03", text: "備品購入※人員の余裕がある時" },
            { id: "day_04", text: "仕込み" },
            { id: "day_05", text: "休憩回し" },
            { id: "day_06", text: "段ボール整理 / 玄関に届いた備品を仕分ける（シモジマ、コーヒー豆など）" },
            { id: "day_07", text: "翌日のケーキの解凍\n（平日→生2・オレオ1・その他各1 / 土日→生3・オレオ2・アールグレイ2・その他各1）" },
            { id: "day_08", text: "チルクの解凍\n（平日→プレーン3・その他各1 / 土日→プレーン5・その他各1）" }
        ]
    },
    {
        category: "15:00 - 18:00 午後作業",
        items: [
            { id: "aft_01", text: "備品補充/ビスキュイ補充" },
            { id: "aft_02", text: "モーニングのパン補充、カット、解凍\n（翌日が平日→6枚 / 翌日が土日祝→10枚）" },
            { id: "aft_03", text: "もう一度ショーケースを拭く（正面、上、iPad周り）" },
            { id: "aft_04", text: "発送備品補充、チェック（オレオ2枚いり×10、お誕生日BOX×15）" },
            { id: "aft_05", text: "在庫チェック(差異がなければ完了報告をカフェのスラックに流す)" },
            { id: "aft_06", text: "備品在庫チェック（少ないものは発注スラッグで共有）" },
            { id: "aft_07", text: "トランス準備" },
            { id: "aft_08", text: "段ボール破棄（毎週木曜日）17時ごろに出す", displayDays: [4] },
            { id: "aft_09", text: "翌日の発送準備（外箱をつくり）" },
            { id: "aft_10", text: "ケーキカット(ブルーべリーを乗せる)" },
            { id: "aft_11", text: "ティラミス解凍（平日：3　土日：5）" },
            { id: "aft_12", text: "プリン焼き（3個以下になったら）\n平日→2個×2日分 / 土日→3個×2日分" },
            { id: "aft_13", text: "2階の締め作業（シンク・コンロ・壁掃除、掃除機/クイックルワイパーをかける）" },
            { id: "aft_14", text: "2階のダスターを洗剤でもみ洗いしてから漂泊し(最低10分はつける)、よくすすいで干す" }
        ]
    },
    {
        category: "18:00 - 19:00 前半締め",
        items: [
            { id: "close1_01", text: "絞り袋や作業台の物を片付ける(消費期限の確認)" },
            { id: "close1_02", text: "ティラクリやチーケー生等のラップを替え、密閉して保存し清潔を保つ" },
            { id: "close1_03", text: "銀タッパーのビスキュイ入れ替え、補充" },
            { id: "close1_04", text: "食器用スポンジに洗剤を付け作業台を磨き、綺麗に拭き取る" },
            { id: "close1_05", text: "オーブンの自動洗浄" },
            { id: "close1_06", text: "ショーケースのケーキをバットに移しラップをして作業台下の冷蔵庫に移し、ショーケースを綺麗に掃除する" },
            { id: "close1_07", text: "ショーケースをの板を洗う（日曜日）", displayDays: [0] }
        ]
    },
    {
        category: "19:00 - 20:00 閉店業務",
        items: [
            { id: "close2_01", text: "※19時以降 エスプレッソマシーンとグラインダーの掃除(はけを使い粉をはらう/マシーンを拭く/ミルクスチーマーの先にミルクが付いていないか確認する)" },
            { id: "close2_02", text: "天板のパイにラップをする（上下紙を必ず被せてから）" },
            { id: "close2_03", text: "ディスプレイ用の商品を破棄" },
            { id: "close2_04", text: "最後にショーケースを拭く（正面、上、iPad周り）" },
            { id: "close2_05", text: "掃き掃除をする※ノーゲスト後(客席、作業場)" },
            { id: "close2_06", text: "拭き掃除をする(作業場、壁、冷蔵庫、(客席))" },
            { id: "close2_07", text: "トイレ掃除をする※ノーゲスト後\n(便器を磨く、便座・壁・床を拭く、汚物やペーパーを捨てる、ペーパーを三角におる)" },
            { id: "close2_08", text: "ゴミ箱のゴミ袋を交換する（ゴミ箱大→外側藤ビル内側45L無地の2重 / 作業台横のゴミ箱→45L無地1重）" },
            { id: "close2_09", text: "ゴミを捨てる" },
            { id: "close2_10", text: "外のゴミを捨てる（藤ビル→火、木（瓶・缶)、日）", displayDays: [0, 2, 4] },
            { id: "close2_11", text: "シンク用スポンジでシンクの掃除をする(シンク用、食器用スポンジは毎週日曜日に捨てる)" },
            { id: "close2_12", text: "アルコール、食器用洗剤、手洗い石鹸、ペーパーを補充する" },
            { id: "close2_13", text: "排水溝ネットを準備する(計４枚)" },
            { id: "close2_14", text: "ダスターを洗剤でもみ洗いしてから漂泊し(最低10分はつける)、よくすすいで干す" },
            { id: "close2_15", text: "レジ精算をする(誤差がなければ写真に撮ってスラックに共有)" },
            { id: "close2_16", text: "店舗レポートを入力する(お客様動向やよく出た商品等)" },
            { id: "close2_17", text: "ホワイトボードに翌日の業務内容を記載" },
            { id: "close2_18", text: "翌日の引継ぎとチェックリストをスラックで送る" },
            { id: "close2_19", text: "洗い残しがないかチェックする（バット、口金、茶こし）" },
            { id: "close2_20", text: "保冷剤を冷凍庫に戻す" },
            { id: "close2_21", text: "店内の電気とエアコン(2か所)を消し、レコードを止める" },
            { id: "close2_22", text: "外の冷蔵庫、冷凍庫の鍵を閉める" },
            { id: "close2_23", text: "2階、3階の電気が消えているかチェックする" },
            { id: "close2_24", text: "2階冷凍庫の電源が付いていること、電気が消えてるか確認する" },
            { id: "close2_25", text: "小窓が閉まっているか確認する" },
            { id: "close2_26", text: "金庫にお金を入れる(暗証番号：313131)" },
            { id: "close2_27", text: "玄関の鍵を閉め、南京錠に鍵をしまう" }
        ]
    }
];

// --- State Management ---
const STORAGE_KEY = 'business_checklist_state';
let appState = {
    lastResetDate: null,
    completedIds: [], // Current day's checks
    history: {} // Archive: { "YYYY-MM-DD": [ids...] }
};

let viewDate = null; // Current view date (null = today)

// --- Core Logic ---

function initApp() {
    loadState();

    // Set viewDate to today initially
    const today = new Date().toDateString(); // "Fri Feb 05 2026"
    viewDate = today;

    checkDailyReset();
    setupDatePicker();
    renderChecklist();
    updateProgress();
}

function loadState() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
        const parsed = JSON.parse(saved);
        // Migration: Ensure history object exists if loading old state
        if (!parsed.history) parsed.history = {};
        appState = parsed;
    }
}

function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    updateProgress();
}

function checkDailyReset() {
    const today = new Date().toDateString(); // e.g., "Fri Feb 05 2026"

    if (appState.lastResetDate !== today) {
        console.log("New day detected. Archiving and resetting.");

        // Archive yesterday's data if we have a valid lastResetDate
        if (appState.lastResetDate) {
            appState.history[appState.lastResetDate] = [...appState.completedIds];
        }

        // Reset for new day
        appState.completedIds = [];
        appState.lastResetDate = today;
        saveState();
    }
}

function setupDatePicker() {
    const dateInput = document.getElementById('date-picker');
    if (!dateInput) return;

    // Format date for input value (YYYY-MM-DD)
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');

    dateInput.value = `${yyyy}-${mm}-${dd}`;
    dateInput.max = `${yyyy}-${mm}-${dd}`; // Prevent future selection

    dateInput.addEventListener('change', (e) => {
        // Convert input date "YYYY-MM-DD" to Date string "Fri Feb..."
        // Note: Input date is local YYYY-MM-DD.
        const parts = e.target.value.split('-');
        const selectedDate = new Date(parts[0], parts[1] - 1, parts[2]).toDateString();

        viewDate = selectedDate;
        renderChecklist();
        updateProgress();
    });
}

function toggleTask(id) {
    // Prevent editing if not viewing today
    const today = new Date().toDateString();
    if (viewDate !== today) {
        alert("過去のデータは変更できません。");
        return;
    }

    const index = appState.completedIds.indexOf(id);
    if (index === -1) {
        appState.completedIds.push(id);
    } else {
        appState.completedIds.splice(index, 1);
    }
    saveState();

    // Instead of partial update, re-render to ensure correct state (simplifies history logic)
    // But for performance/visuals, we can check.
    updateItemVisuals(id);
}

function manualReset() {
    const today = new Date().toDateString();
    if (viewDate !== today) return;

    if (confirm("本日のチェック状況をすべてリセットしますか？")) {
        appState.completedIds = [];
        saveState();
        renderChecklist();
        updateProgress();
    }
}

// --- Rendering ---

function renderChecklist() {
    const container = document.getElementById('todo-list');
    container.innerHTML = '';

    const today = new Date().toDateString();
    const isToday = (viewDate === today);

    // Determine which dataset to use
    let activeCompletedIds = [];
    let activeDayOfWeek = new Date().getDay();

    if (isToday) {
        activeCompletedIds = appState.completedIds;
        activeDayOfWeek = new Date().getDay();
    } else {
        // Viewing history
        activeCompletedIds = appState.history[viewDate] || [];
        // Approximate day of week for that date
        activeDayOfWeek = new Date(viewDate).getDay();
    }

    // Add visual cue if viewing history
    const headerTitle = document.querySelector('.header-text p');
    if (headerTitle) {
        headerTitle.textContent = isToday ? "Daily Business Routine" : `History Search: ${viewDate}`;
        headerTitle.style.color = isToday ? "var(--text-muted)" : "var(--alert-border)";
    }

    routineConfig.forEach(group => {
        // Filter items based on displayDays (using the VIEWING date's day)
        const visibleItems = group.items.filter(item => {
            if (!item.displayDays) return true;
            return item.displayDays.includes(activeDayOfWeek);
        });

        if (visibleItems.length === 0) return;

        // Create Wrapper for Grid Item (Category Group)
        const groupDiv = document.createElement('div');
        groupDiv.className = 'category-group';
        groupDiv.dataset.categoryName = group.category;

        // Create Category Header
        const header = document.createElement('div');
        header.className = 'category-header';
        header.textContent = group.category;
        groupDiv.appendChild(header);

        // Create List
        const ul = document.createElement('ul');
        ul.className = 'category-list';

        visibleItems.forEach(item => {
            const li = document.createElement('li');
            li.id = `item-${item.id}`;
            const isCompleted = activeCompletedIds.includes(item.id);
            li.className = `todo-item ${isCompleted ? 'completed' : ''}`;
            if (!isToday) li.classList.add('readonly'); // Add readonly visual style

            li.innerHTML = `
                <div class="checkbox-container" ${isToday ? `onclick="window.toggleTask('${item.id}')"` : ''}>
                    <div class="custom-checkbox">
                        <svg class="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <span class="task-text" ${isToday ? `onclick="window.toggleTask('${item.id}')"` : ''}>${escapeHtml(item.text)}</span>
            `;
            ul.appendChild(li);
        });

        groupDiv.appendChild(ul);
        container.appendChild(groupDiv);
    });

    // Handle Reset Button Visibility
    let resetBtn = document.querySelector('.reset-link');
    if (resetBtn) {
        resetBtn.style.display = isToday ? 'inline-block' : 'none';
    }

    // Only check overdue on Today
    if (isToday) {
        checkOverdueItems();
    }
}

function updateItemVisuals(id) {
    // This optimization handles 'Today' updates only
    const el = document.getElementById(`item-${id}`);
    if (el) {
        const isCompleted = appState.completedIds.includes(id);
        if (isCompleted) {
            el.classList.add('completed');
            el.classList.remove('overdue');
        } else {
            el.classList.remove('completed');
            checkOverdueItems();
        }
    }
    updateProgress();
}

// Check for overdue items (Only relevant for "Today")
function checkOverdueItems() {
    const today = new Date().toDateString();
    if (viewDate !== today) return; // Don't show overdue alerts on past days

    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();

    routineConfig.forEach(group => {
        const timeMatch = group.category.match(/(\d{2}):(\d{2})\s*-\s*(\d{2}):(\d{2})/);
        if (timeMatch) {
            const endHour = parseInt(timeMatch[3], 10);
            const endMin = parseInt(timeMatch[4], 10);
            const isPast = (currentHour > endHour) || (currentHour === endHour && currentMin > endMin);

            if (isPast) {
                group.items.forEach(item => {
                    if (!appState.completedIds.includes(item.id)) {
                        const el = document.getElementById(`item-${item.id}`);
                        if (el) {
                            el.classList.add('overdue');
                        }
                    }
                });
            }
        }
    });
}

// Run overdue check every minute
setInterval(checkOverdueItems, 60000);

function updateProgress() {
    const today = new Date().toDateString();
    const isToday = (viewDate === today);
    const activeDayOfWeek = new Date(viewDate).getDay();

    // Calculate total based on VISIBLE items only (for the VIEWED day)
    let total = 0;
    routineConfig.forEach(group => {
        group.items.forEach(item => {
            if (!item.displayDays || item.displayDays.includes(activeDayOfWeek)) {
                total++;
            }
        });
    });

    let current = 0;
    if (isToday) {
        current = appState.completedIds.length;
    } else {
        current = (appState.history[viewDate] || []).length;
    }

    // Update Text
    const itemsLeftEl = document.getElementById('items-left');
    if (itemsLeftEl) {
        if (total === 0) {
            itemsLeftEl.textContent = "この日のタスクはありません";
        } else {
            const percent = Math.round((current / total) * 100);
            itemsLeftEl.textContent = `進捗: ${current}/${total} (${percent}%)`;
        }
    }

    // Update Chart
    const chart = document.querySelector('.pie-chart');
    if (chart) {
        const percent = total === 0 ? 0 : (current / total) * 100;
        chart.style.background = `conic-gradient(var(--primary-color) 0% ${percent}%, rgba(255,255,255,0.5) ${percent}% 100%)`;
    }
}

// XSS Prevention
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Expose to window
window.toggleTask = toggleTask;
window.manualReset = manualReset;

// Start
initApp();
