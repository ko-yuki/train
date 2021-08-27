import axios from 'axios';

// 初始化获取数据
export const getData = ()=>{
    let data;
    return (axios.get('products.json')
    .then(res=>{
        data = res.data.products;
        return data;
    }));
}

// 尺寸过滤
let sizeArr = [];
export const filterSize = ({sizes,origin})=>{
    let newData = [...origin];
    let index = sizeArr.indexOf(sizes);
    if(index===-1){
        sizeArr.push(sizes);
    }else{
        sizeArr.splice(index,1);
    }
    sizeArr.forEach(size=>{
        newData = newData.filter(item=>item.availableSizes.indexOf(size)!==-1);
    });
    return newData;
}

// 排序
export const toSort = ({data,idx})=>{
    function sortBy(property){
        return function(a,b){
            let v1 = a[property];
            let v2 = b[property];
            if(idx===1){
                return v1-v2;
            }else{
                return v2-v1;
            }
        }
    }
    return data.sort(sortBy('price'));
}