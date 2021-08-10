// 请求新闻列表的数据
let news = [];
function getNews(page){
    axios({
        url:"//mock-api.com/rg1Mk4gY.mock/newslist",
        params:{page},
        method:"get"
    })
    .then(res=>{
        news = res.data;
        let w = $(".news-img img").eq(0).width();
        news.forEach((item,index)=>{
            let u = item.url.split(",");
            if(w>=214){
                $(".news-img img").eq(index).attr("src",u[2]);
            }else if(w>=180){
                $(".news-img img").eq(index).attr("src",u[1]);
            }else {
                $(".news-img img").eq(index).attr("src",u[0]);
            }
            $(".news-img img").eq(index).attr("alt",item.text);
            $(".news-text h4").eq(index).text(item.title);
            $(".news-text span").eq(index).text(item.date);
            $(".news-text p").eq(index).text(item.main);
        })
    })
}

// 切换页码
// 记录当前页码，默认为1
let page = 1;
getNews(page);
$(".page-box").on("click",function(e){
    let len = $(".page").length;
    let name = e.target.className;
    if(name!="prev" && name!="next"){
        page = e.target.innerHTML;
    }else if(name == "prev"){
        page--;
        if(page<=0){
            page = 1;
        }
    }else if(name == "next"){
        page++;
        if(page>=len){
            page = len;
        }
    }
    changeStyle(page);
    getNews(page);
})

// 切换样式
function changeStyle(page){
    let len = $(".page").length;
    for(let i=1; i<=len; i++){
        if(i == page){
            $(`.page.page${i}`).css({
                backgroundColor:"black",
                color:"white"
            });
            $(".page").not(`.page${i}`).css({
                backgroundColor:"white",
                color:"black"
            })
        }
    }
    if(page == 1){
        $(".prev").css({
            cursor:"not-allowed",
            opacity:0.3
        });
        $(".next").css({
            cursor:"pointer",
            opacity:1
        });
    }else if(page == len){
        $(".prev").css({
            cursor:"pointer",
            opacity:1
        });
        $(".next").css({
            cursor:"not-allowed",
            opacity:0.3
        });
    }else{
        $(".prev").css({
            cursor:"pointer",
            opacity:1
        });
        $(".next").css({
            cursor:"pointer",
            opacity:1
        }); 
    }
}

// 点击跳转到新闻详情页
// 需要传递新闻的编号
$(".news-list").on("click","li",function(e){
    let index = $(this).index();
    let url = encodeURI("news-detail.html?id="+news[index].id);
    location.href = url;
})