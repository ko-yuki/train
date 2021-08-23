// 获取参数
function getParams(){
    let str = location.href.split("?")[1];
    let id = str.charAt(str.length-1);
    return id;
}

let details = JSON.parse(sessionStorage.getItem("details"));
// 标题
$(".title p").text(details.title);
$(".title span").text(details.time);
// 图片
let w = $(".content img").width();
let u = details.images;
if(w>=1024){
    $(".content img").attr("src",u[3].imgSrc);
}else if(w>=910){
    $(".content img").attr("src",u[8].imgSrc);
}else if(w>=867){
    $(".content img").attr("src",u[4].imgSrc);
}else {
    $(".content img").attr("src",u[2].imgSrc);
}
// 内容
$(".info").html(details.content);