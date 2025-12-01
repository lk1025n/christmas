// script.js

/**
 * 將頁面重設回初始狀態 (輸入介面)。
 * 確保 ID 使用小寫以符合 HTML 中的定義 ('mainbody', 'inputarea', 'resultarea', 'resulttext')。
 */
function resetPage() {
    // 隱藏結果區域
    document.getElementById('resultarea').style.display = 'none';

    // 顯示輸入區域，使用 flex 排版讓內容置中
    const inputArea = document.getElementById('inputarea');
    inputArea.style.display = 'flex'; 

    // 清空並聚焦輸入欄位
    const inputElement = document.getElementById('phonenumberinput');
    inputElement.value = '';
    inputElement.focus();

    // 移除所有特定的背景 class，並恢復預設背景
    const bodyElement = document.getElementById('mainbody');
    bodyElement.classList.remove('bg-022', 'bg-780'); // 移除所有可能的背景 class
    bodyElement.classList.add('default-bg');

    // 清空結果文字內容
    document.getElementById('resulttext').innerHTML = ''; 
}

/**
 * 處理使用者輸入的禮物代碼，並顯示對應的禮物提示，或跳轉影片。
 */
function processGiftCode() {
    const inputElement = document.getElementById('phonenumberinput');
    // 將輸入值轉換為小寫，以便不區分大小寫地匹配 "christmas"
    const code = inputElement.value.toLowerCase(); 

    // 取得所有相關的 DOM 元素
    const bodyElement = document.getElementById('mainbody');
    const inputArea = document.getElementById('inputarea');
    const resultArea = document.getElementById('resultarea');
    const resultTextContainer = document.getElementById('resulttext');

    // --- 特殊指令處理：輸入 "christmas" 導向 YouTube ---
    if (code === 'christmas') {
        // 使用 window.location.href 導航到 YouTube 播放清單
        window.location.href = 'youtu.be';
        return; // 結束函式，防止執行後面的數字檢查
    }

    // --- 數字代碼處理邏輯 ---
    // 檢查輸入是否為 3 位數字
    if (code && /^[0-9]{3}$/.test(code)) {
        // 如果輸入有效，先隱藏輸入區域
        inputArea.style.display = 'none';

        // 禮物資料庫
        const giftData = {
            '022': {
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 吃的<br>• 抹茶的<br>• 好吃的就行🫠（希望不要揍我</div>',
                backgroundClass: 'bg-022'
            },
            '188': {
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌物<br>• 首飾<br>• 變漂亮會用到的東西😉</div>',
                backgroundClass: 'bg-022'
            },
            '846': {
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌萌<br>• 有點奇怪（？<br>• 一點都不實用的</div>',
                backgroundClass: 'bg-022'
            },
            '820': {
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌<br>• 有<br>• 點</div>',
                backgroundClass: 'bg-022'
            },
            '850': {
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 軟軟的<br>• 圓圓的<br>• 萌萌的</div>',
                backgroundClass: 'bg-022'
            },
            '233': {
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 小首飾<br>• 髮飾<br>• 喝的</div>',
                backgroundClass: 'bg-022'
            },
            '780': {
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 庫洛米？！<br>• 紫色<br>• 就是…很可愛</div>',
                backgroundClass: 'bg-780'
            }
        };

        const currentGift = giftData[code];

        if (currentGift) {
            // 如果找到對應的代碼，更新背景和內容
            bodyElement.classList.remove('default-bg', 'bg-022', 'bg-780'); 
            bodyElement.classList.add(currentGift.backgroundClass);
            resultTextContainer.innerHTML = currentGift.htmlContent;
            resultArea.style.display = 'flex'; // 顯示結果區域
        } else {
            // 如果沒找到對應的數字代碼，顯示友善提示
            resultTextContainer.innerHTML = `<h1 style="text-align:center;">無此號碼對應的提示，請確認號碼是否正確。</h1>`;
            resultArea.style.display = 'flex'; 
            bodyElement.classList.remove('bg-022', 'bg-780');
            bodyElement.classList.add('default-bg');
        }
    } else {
        // 輸入格式錯誤時的提醒（非 3 位數字且非 'christmas'）
        alert('請輸入有效的號碼');
    }
}
