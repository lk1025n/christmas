// script.js

/**
 * 將頁面重設回初始狀態 (輸入介面)。
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
 * 處理使用者輸入的禮物代碼，並顯示對應的禮物提示或影片。
 */
function processGiftCode() {
    const inputElement = document.getElementById('phonenumberinput');
    const code = inputElement.value.toLowerCase(); // 轉小寫以匹配 "christmas"

    const bodyElement = document.getElementById('mainbody');
    const inputArea = document.getElementById('inputarea');
    const resultArea = document.getElementById('resultarea');
    const resultTextContainer = document.getElementById('resulttext');

    // --- 特殊指令處理：輸入 "christmas" 顯示多個影片 ---
    if (code === 'christmas') {
        inputArea.style.display = 'none'; // 隱藏輸入區

        // 嵌入兩個 YouTube 影片的 HTML 程式碼 (使用 iframe)
        const videoHtml = `
            <h1 style="text-align:center; margin-bottom: 15px;">聖誕驚喜！🎄</h1>
            <div class="video-container">
                <!-- 影片 1 -->
                <iframe width="100%" height="auto" src="www.youtube.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <!-- 影片 2 -->
                <iframe width="100%" height="auto" src="www.youtube.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        `;
        
        resultTextContainer.innerHTML = videoHtml; // 將影片 HTML 放入結果區
        resultArea.style.display = 'flex'; // 顯示結果區域
        
    }
    // --- 數字代碼處理邏輯 ---
    else if (code && /^[0-9]{3}$/.test(code)) { // 檢查是否為 3 位數字
        inputArea.style.display = 'none';

        const giftData = {
            '022': { htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 吃的<br>• 抹茶的<br>• 好吃的就行🫠（希望不要揍我</div>', backgroundClass: 'bg-022' },
            '188': { htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌物<br>• 首飾<br>• 變漂亮會用到的東西😉</div>', backgroundClass: 'bg-022' },
            '846': { htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌萌<br>• 有點奇怪（？<br>• 一點都不實用的</div>', backgroundClass: 'bg-022' },
            '820': { htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌<br>• 有<br>• 點</div>', backgroundClass: 'bg-022' },
            '850': { htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 軟軟的<br>• 圓圓的<br>• 萌萌的</div>', backgroundClass: 'bg-022' },
            '233': { htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 小首飾<br>• 髮飾<br>• 喝的</div>', backgroundClass: 'bg-022' },
            '780': { htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 庫洛米？！<br>• 紫色<br>• 就是…很可愛</div>', backgroundClass: 'bg-780' }
        };

        const currentGift = giftData[code];

        if (currentGift) {
            bodyElement.classList.remove('default-bg', 'bg-022', 'bg-780'); 
            bodyElement.classList.add(currentGift.backgroundClass);
            resultTextContainer.innerHTML = currentGift.htmlContent;
            resultArea.style.display = 'flex'; 
        } else {
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
