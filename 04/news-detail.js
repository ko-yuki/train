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
$(".content img").attr("src",u[0].imgSrc);
// 内容
$(".info").html(details.content);