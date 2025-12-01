// script.js
function resetPage() {
    document.getElementById('resultarea').style.display = 'none';
    const inputArea = document.getElementById('inputarea');
    inputArea.style.display = 'flex'; 
    const inputElement = document.getElementById('phonenumberinput');
    inputElement.value = '';
    inputElement.focus();
    const bodyElement = document.getElementById('mainbody');
    bodyElement.classList.remove('bg-022', 'bg-780');
    bodyElement.classList.add('default-bg');
    document.getElementById('resulttext').innerHTML = ''; 
}

function processGiftCode() {
    const inputElement = document.getElementById('phonenumberinput');
    // 將輸入值轉換為小寫，以便不區分大小寫地匹配 "christmas"
    const code = inputElement.value.toLowerCase(); 
    const bodyElement = document.getElementById('mainbody');
    const inputArea = document.getElementById('inputarea');
    const resultArea = document.getElementById('resultarea');
    const resultTextContainer = document.getElementById('resulttext');

    // --- 新增的邏輯：處理 "christmas" 輸入 ---
    if (code === 'christmas') {
        // 使用 window.location.href 導航到 YouTube 播放清單
        // 將用戶導向包含兩個影片的 YouTube 播放清單
        window.location.href = 'www.youtube.com';
        return; // 結束函式，防止執行後面的數字檢查
    }

    // 原始的數字檢查邏輯
    if (code && /^[0-9]{3}$/.test(code)) {
        inputArea.style.display = 'none';

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
        // 輸入格式錯誤時的提醒（現在包含了非數字且非 'christmas' 的情況）
        // 可以修改為更通用的錯誤訊息
        alert('請輸入有效的 3 位數字號碼，或輸入特別指令。');
    }
}
	    '846': {
                // 為列表內容 DIV 加上 class="gift-list"
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌萌<br>• 有點奇怪（？<br>• 一點都不實用的</div>',
                backgroundClass: 'bg-022'
            },

	    '820': {
                // 為列表內容 DIV 加上 class="gift-list"
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌<br>• 有<br>• 點</div>',
                backgroundClass: 'bg-022'
            },

	    '850': {
                // 為列表內容 DIV 加上 class="gift-list"
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 軟軟的<br>• 圓圓的<br>• 萌萌的</div>',
                backgroundClass: 'bg-022'
            },
	    '233': {
                // 為列表內容 DIV 加上 class="gift-list"
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 小首飾<br>• 髮飾<br>• 喝的</div>',
                backgroundClass: 'bg-022'
            },
            '780': {
                // 為列表內容 DIV 加上 class="gift-list"
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 庫洛米？！<br>• 紫色<br>• 就是…很可愛</div>',
                backgroundClass: 'bg-780'
            }
        };

        const currentGift = giftData[code];

        if (currentGift) {
            bodyElement.classList.remove('default-bg', 'bg-022', 'bg-780'); 
            bodyElement.classList.add(currentGift.backgroundClass);
            resultTextContainer.innerHTML = currentGift.htmlContent;
            resultArea.style.display = 'flex'; 
        } else {
            resultTextContainer.innerHTML = `<h1 style="text-align:center;"></h1>`;
            resultArea.style.display = 'flex'; 
            bodyElement.classList.remove('bg-022', 'bg-780');
            bodyElement.classList.add('default-bg');
        }
    } else {
        alert('請輸入有效的號碼');
    }
}

