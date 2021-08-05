// 百度地图API功能
// 创建Map实例
let map = new BMap.Map("map");
// 初始化地图,设置中心点坐标和地图级别
map.centerAndZoom(new BMap.Point(104.078144,30.545828), 18);
// 开启鼠标滚轮缩放
map.enableScrollWheelZoom(true);
// 创建Marker标注
let pt = new BMap.Point(104.078144,30.545828);
let marker = new BMap.Marker(pt);
// 将标注添加到地图
map.addOverlay(marker);