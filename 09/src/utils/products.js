import axios from 'axios';

// 初始化获取数据
export const getData = () => {
  let data;
  return (axios.get('products.json')
    .then(res => {
      data = res.data.products;
      return data;
    }));
}

// 尺寸过滤和排序
let sizeArr = [];
export const filterSizeAndSort = ({ origin, sizes, order }) => {
  // 尺寸过滤
  const {size,selected} = sizes;
  if(selected){
    sizeArr.push(size);
    sizeArr = Array.from(new Set(sizeArr));
  }else{
    let index = sizeArr.indexOf(size);
    if(index!==-1){
      sizeArr.splice(index,1);
    }
  }
  let newData = [...origin];
  sizeArr.forEach(size => {
    newData = newData.filter(item => item.availableSizes.indexOf(size) !== -1);
  });
  // 排序
  if(order!=='default'){
    let way = order.replace(/(\+|-)/,'');
    if(order[0]==='+'){
      return newData.sort((a,b)=>a[way]-b[way]);
    }else{
      return newData.sort((a,b)=>b[way]-a[way]);
    }
  }
  return newData;
}