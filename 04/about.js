// 百度地图API功能
// 创建Map实例
let map = new BMap.Map("map");
// 初始化地图,设置中心点坐标和地图级别
let point = new BMap.Point(104.078144,30.545828);
map.centerAndZoom(point, 18);
// 开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);
// 创建Marker标注
let marker = new BMap.Marker(point);
// 将标注添加到地图
map.addOverlay(marker);

// 添加地图控件
map.addControl(new BMap.NavigationControl());    
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());   
map.addControl(new BMap.GeolocationControl());   

var geolocation = new BMap.Geolocation();
// 开启SDK辅助定位
geolocation.enableSDKLocation();
geolocation.getCurrentPosition(function(r){
    r.point = point;
    r.latitude = point.lat;
    r.longitude = point.lng;
    r = {...r};
	if(this.getStatus() == BMAP_STATUS_SUCCESS){
		map.panTo(point);
        let ads = "";
        const {province,city,street,street_number} = r.address;
        ads += province + city + street + street_number;
        $(".ads").text(ads);
	}
	else {
		alert('failed'+this.getStatus());
	}        
});