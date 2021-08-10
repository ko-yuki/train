// 轮播图
let mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 水平切换选项
    loop: true, // 循环模式选项
    autoplay:true, // 自动播放

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
})
// 数据请求
// 产品介绍
axios({
    url:"//mock-api.com/rg1Mk4gY.mock/products",
    method:"get"
})
.then(res=>{
    let products = res.data;
    let len = $(".img-tag").length;
    for(let i=0; i<len; i++){
        $(".img-tag img").eq(i).attr({
            "data-src":products[i].url,
            alt:products[i].text
        });
        $(".text-tag h3").eq(i).text(products[i].title);
        $(".text-tag .describe").eq(i).text(products[i].describe);
        $(".text-tag .ability").eq(i).text(products[i].ability);
    }
})
// 首页动态新闻
axios({
    url:"//mock-api.com/rg1Mk4gY.mock/news",
    method:"get"
})
.then(res=>{
    let news = res.data;
    let len = $(".news-box dl").length;
    for(let i=0; i<len; i++){
        $(".news-box dl img").eq(i).attr({
            "data-src":news[i].url,
            alt:news[i].text
        });
        $(".news-box dl span").eq(i).text(news[i].title);
        $(".news-box dl p").eq(i).text(news[i].describe);
    }
})