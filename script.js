// script.js
function resetPage() {
    document.getElementById('resultArea').style.display = 'none';
    const inputArea = document.getElementById('inputArea');
    inputArea.style.display = 'flex'; 
    const inputElement = document.getElementById('phonenumberinput');
    inputElement.value = '';
    inputElement.focus();
    const bodyElement = document.getElementById('mainBody');
    bodyElement.classList.remove('bg-022', 'bg-780');
    bodyElement.classList.add('default-bg');
    document.getElementById('resultText').innerHTML = ''; 
}

function processGiftCode() {
    const inputElement = document.getElementById('phonenumberinput');
    const code = inputElement.value;
    const bodyElement = document.getElementById('mainBody');
    const inputArea = document.getElementById('inputArea');
    const resultArea = document.getElementById('resultArea');
    const resultTextContainer = document.getElementById('resultText');

    if (code && /^[0-9]{3}$/.test(code)) {
        inputArea.style.display = 'none';

        const giftData = {
            '022': {
                // 為列表內容 DIV 加上 class="gift-list"
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 吃的<br>• 抹茶的<br>• 好吃的就行🫠（希望不要揍我</div>',
                backgroundClass: 'bg-022'
            },
	    '188': {
                // 為列表內容 DIV 加上 class="gift-list"
                htmlContent: '<h1 style="text-align:center; margin-bottom: 15px;">提示</h1><div class="gift-list">• 萌物<br>• 首飾<br>• 變漂亮會用到的東西😉</div>',
                backgroundClass: 'bg-022'
            },
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
