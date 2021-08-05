// 获取参数
function getParams(){
    let str = location.href.split("?")[1];
    let id = str.charAt(str.length-1);
    return id;
}
// 发送请求
axios({
    url:"//mock-api.com/rg1Mk4gY.mock/details",
    method:"get"
})
.then(res=>{    
    let detail = res.data.filter(item=>item.id==getParams())[0];
    $(".title p").text(detail.title);
    $(".title span").text(detail.date);
    $(".content img").attr({
        src:detail.url,
        alt:detail.text
    });
    $(".info").text(detail.info);
    $(".indc").text(detail.indc);
})