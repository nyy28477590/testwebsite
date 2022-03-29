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
            var s1Score = (res.competitorStatus[0].S1);
            var s2Score = (res.competitorStatus[0].S2);
            var s3Score = (res.competitorStatus[0].S3);
            console.log(countNum)
            console.log(s1Score)
            document.querySelector(".voteCount > .value").innerHTML = countNum+" 票";
            document.getElementsByClassName("S1")[0].innerHTML  = s1Score;
            document.getElementsByClassName("S2")[0].innerHTML  = s2Score;
            document.getElementsByClassName("S3")[0].innerHTML  = s3Score;
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
            document.querySelector(".voteCount > .value").innerHTML=countNum+" 票";

        }};
    },10000);
};