// 随机颜色
function randomColor(){
    let color = "#"+Math.random().toString(16).slice(-7,-1);
    return color;
}
// 随机位置
function randomPos(){
    let h = $("#barrage").height();
    let pos = Math.round(Math.random()*h);
    if(pos>=(h-$(`.item${num}`).height())){
        pos = h-$(`.item${num}`).height();
    }
    return pos;
}
// 随机大小
function randomSize(){
    let size = Math.round(Math.random()*14 + 20);
    return size;
}
// 添加弹幕
let num = 0;
$("#send").on("click",function(){
    if($("#text").val() == ""){
        return;
    }
    $("#barrage").append(`<span class=item${num}><span>`);
    // 文本大小和颜色
    $(`.item${num}`).text($("#text").val());
    $(`.item${num}`).css({
        color:randomColor(),
        fontSize:randomSize(),
    });
    // 初始位置
    $(`.item${num}`).css({
        right:-$(`.item${num}`).width(),
        top:randomPos()
    });
    // 动画
    $(`.item${num}`).animate({
        left:-$(`.item${num}`).width()
    },3000,"linear",function(){
        this.remove();
    })
    num++;
    $("#text").val("");
})
// 清屏
$("#clear").on("click",function(){
    $("#barrage").empty();
    $("#text").val("");
})