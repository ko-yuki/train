// 请求新闻列表的数据
let news = [];
function getNews(page){
    axios({
        url:"https://www.mxnzp.com/api/news/list",
        params:{
            app_id:"ecqvgalqkxjnhswd",
            app_secret:"bHJtcmdmYjNQekVZL0FSdk16NktqQT09",
            typeId:512,
            page
        },
        method:"get"
    })
    .then(res=>{
        news = res.data.data;
        news.forEach((item,index)=>{
            $(".news-img img").eq(index).attr("src",item.imgList[0]);
            $(".news-text h4").eq(index).text(item.title);
            $(".news-text span").eq(index).text(item.postTime);
            $(".news-text p").eq(index).text(item.digest);
        })
    })
}

// 切换页码
let page = window.location.href.split("#")[1].split("=")[1];
changeStyle(page);
getNews(page);
$(".page-box").on("click",function(e){
    let len = $(".page").length;
    let name = e.target.className;
    if(name!="prev-btn" && name!="next-btn"){
        page = e.target.innerHTML;
    }else if(name == "prev-btn"){
        page--;
        if(page<=0){
            page = 1;
        }
    }else if(name == "next-btn"){
        page++;
        if(page>=len){
            page = len;
        }
    }
    window.location.hash = "page="+page;
    changeStyle(page);
    getNews(page);
})

// 切换样式
function changeStyle(page){
    let len = $(".page").length;
    for(let i=1; i<=len; i++){
        if(i == page){
            $(`.page.page${i} button`).css({
                backgroundColor:"black",
                color:"white"
            });
            $(".page button").not(`.page${i} button`).css({
                backgroundColor:"white",
                color:"black"
            })
        }
    }
    if(page == 1){
        $(".prev button").css({
            cursor:"not-allowed",
            opacity:0.3
        });
        $(".prev button").prop("disabled",true);
        $(".next button").css({
            cursor:"pointer",
            opacity:1
        });
        $(".next button").prop("disabled",false);
    }else if(page == len){
        $(".prev button").css({
            cursor:"pointer",
            opacity:1
        });
        $(".prev button").prop("disabled",false);
        $(".next button").css({
            cursor:"not-allowed",
            opacity:0.3
        });
        $(".next button").prop("disabled",true);
    }else{
        $(".prev button").css({
            cursor:"pointer",
            opacity:1
        });
        $(".next button").css({
            cursor:"pointer",
            opacity:1
        }); 
    }
}

// 点击跳转到新闻详情页
// 需要传递新闻的编号
$(".news-list").on("click","li",function(e){
    let index = $(this).index();
    axios({
        url:"https://www.mxnzp.com/api/news/details",
        params:{
            app_id:"ecqvgalqkxjnhswd",
            app_secret:"bHJtcmdmYjNQekVZL0FSdk16NktqQT09",
            newsId:news[index].newsId
        }
    })
    .then(res=>{
        let details = {
            title:res.data.data.title,
            content:res.data.data.content,
            images:res.data.data.images,
            time:res.data.data.ptime
        }
        sessionStorage.setItem("details",JSON.stringify(details));
        let url = encodeURI("news-detail.html?page="+page+"&newsId="+news[index].newsId);
        location.href = url;
    })
})