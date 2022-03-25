function drawLineChart(ctx) {
    var label = [];
    var vote = [];
    var increament = [0];

    //var ctx = document.getElementById("canvas").getContext("2d");

    drawLineCanvas();

    var lineChartData = {
        labels: label,
        //labels: ['2022/03/18 00:00:00','2022/03/19 00:43:18', '2022/03/19 00:45:45', '2022/03/19 00:46:29', '2022/03/19 00:48:00', '2022/03/19 00:50:02'], //顯示區間名稱
        datasets: [{
            label: '得票數', // tootip 出現的名稱
            lineTension: 10, // 曲線的彎度，設0 表示直線
            backgroundColor: "#0F0F0F",
            borderColor: "#0F0F0F",
            borderWidth: 5,
            data: vote,
            //data: [0, 2946, 2951, 2961, 2974, 2975], // 資料
            fill: false, // 是否填滿色彩
        }
    ]
    };

    async function drawLineCanvas() {
        await getIncreamental();
        console.log(increament);
        window.myLine = new Chart(ctx, {  //先建立一個 chart
            type: 'bar', // 型態
            data: {
                labels: label,
                //labels: ['2022/03/18 00:00:00','2022/03/19 00:43:18', '2022/03/19 00:45:45', '2022/03/19 00:46:29', '2022/03/19 00:48:00', '2022/03/19 00:50:02'], //顯示區間名稱
                datasets: 
                [
                {
                    label: '0點得票數', // tootip 出現的名稱
                    lineTension: 0, // 曲線的彎度，設0 表示直線
                    backgroundColor: "#bea2e5",
                    borderColor: "#bea2e5",
                    borderWidth: 5,
                    data: vote,
                    //data: [0, 2946, 2951, 2961, 2974, 2975], // 資料
                    fill: false, // 是否填滿色彩
                    stack: 'combined',
                    type: 'line',
                    order: 0
                },
                {
                    label: '增加票數',
                    data: increament,
                    backgroundColor: "#f7afd4",
                    borderColor: '#f7afd4',
                    fill: false,
                    stack: 'combined',
                    order: 1
                }
                ]
            },
            options: {
                    responsive: true,
                    legend: { //是否要顯示圖示
                        display: true,
                    },
                    tooltips: { //是否要顯示 tooltip
                        enabled: true,
                    },
                    scales: {  //是否要顯示 x、y 軸
                        xAxes: [{
                            display: true
                        }],
                        yAxes: [{
                            display: true
                        }]
                    },
                }
        });
    };
    
    async function getData(){
        let url = 'https://script.google.com/macros/s/AKfycbzhL7nTeiI-H12Fgnb_MV6OMZPTR2s01F3D61Qw7Rv2qQGuVxT2/exec'
        await fetch(url)
            .then(res => res.json())
            .then(res => {
                let data = res.data
                let ymd = 0;
                for (let index = 1; index < data.length; index++) {
                    let format_date = new Date(data[index][2]);
                    let y = String(format_date.getFullYear());
                    let m = String(format_date.getMonth()+1);
                    let d = String(format_date.getDate());
                    let format_ymd = "0"+m+d;
        
                    if (parseInt(format_ymd)>ymd) {
                        label.push(format_ymd);
                        vote.push(data[index][1]);
                        ymd = parseInt(format_ymd);
                    } else {
                        continue;
                    }
                    //label.push(data[index][2])
                    //vote.push(data[index][1])
                }
                
            });
    };

    async function getIncreamental(){
        await getData();
        for(let i=1; i<vote.length; i++) {
            increament.push(vote[i]-vote[i-1]);
        }
    };
    
}

