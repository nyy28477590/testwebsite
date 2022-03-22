function getRank(){
    let url = "https://event.momoshop.com.tw/CloudVote.PROMO";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    
        let data = `{
        "doAction": "list",
        "promoNo": "P020220318"
        }`;
        xhr.send(data);
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var res = JSON.parse(xhr.responseText)
            var countNum = (res.compTop_A.indexOf('A_7')+1);
            console.log(countNum)
            document.querySelector(".ranking > .value").innerHTML="第 " + countNum + " 名"
        }};
    var timeinterval = setInterval(function(){
        let url = "https://event.momoshop.com.tw/CloudVote.PROMO";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    
        let data = `{
        "doAction": "list",
        "promoNo": "P020220318"
        }`;
        xhr.send(data);
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var res = JSON.parse(xhr.responseText)
            var countNum = (res.compTop_A.indexOf('A_7')+1);
            console.log(countNum)
            document.querySelector(".ranking > .value").innerHTML="第 " + countNum + " 名"
        }};
    },10000);
};
