function getVoteCount(){
    let url = "https://event.momoshop.com.tw/CloudVote.PROMO";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    
        let data = `{
        "doAction": "voteCnt",
        "no": "A_7",
        "promoNo": "P020220318"
        }`;
        xhr.send(data);
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var res = JSON.parse(xhr.responseText)
            var countNum = (res.competitorStatus[0].TOTALSCORE);
            console.log(countNum)
            document.querySelector(".voteCount > .value").innerHTML=countNum+" votes"
        }};
    var timeinterval = setInterval(function(){
        let url = "https://event.momoshop.com.tw/CloudVote.PROMO";
        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
    
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    
    
        let data = `{
        "doAction": "voteCnt",
        "no": "A_7",
        "promoNo": "P020220318"
        }`;
        xhr.send(data);
    
        xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var res = JSON.parse(xhr.responseText)
            var countNum = (res.competitorStatus[0].TOTALSCORE);
            console.log(countNum)
            document.querySelector(".voteCount > .value").innerHTML=countNum+" votes";

        }};
    },10000);
};