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
    let w = $(".content img").width();
    let u = detail.url.split(",");
    $(".title p").text(detail.title);
    $(".title span").text(detail.date);
    if(w>=318){
        $(".content img").attr("src",u[2]);
    }else if(w>=180){
        $(".content img").attr("src",u[1]);
    }else {
        $(".content img").attr("src",u[0]);
    }
    $(".content img").attr("alt",detail.text);
    $(".info").text(detail.info);
    $(".indc").text(detail.indc);
})