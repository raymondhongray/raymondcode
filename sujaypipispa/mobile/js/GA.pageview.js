function set_GA_pageview(p,t){
	ga('set',{ 
        page: p,
        title: t
    });
    ga('send', 'pageview');
}

function set_GA_pageview_origin(){
	ga('set', 'page', '/');
    ga('send', 'pageview');
}

// 管理GA的全新利器
// https://medium.com/@gg90052/管理ga的全新利器-google-tag-manager-1ad9987c12cd

// Pageview事件 網址 頁面名稱
// set_GA_pageview('/step_popup','點歌開始- 步驟說明跳窗');

// Click事件 send 事件 點擊類別 群組分類 按鈕名稱
// onClick="ga('send', 'event', '首頁點擊', 'Link', '首頁-Lets Cafe_logo');"