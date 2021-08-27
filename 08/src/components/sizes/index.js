import s from "./index.module.css";
import {useState} from 'react';
import {connect} from 'dva';
import {StarOutlined} from '@ant-design/icons';

function Sizes({state,dispatch}){

    const [sizes] = useState(['XS','S','M','ML','L','XL','XXL']);
    const [color, setcolor] = useState([false,false,false,false,false,false,false]);

    const {origin} = state.products;

    // 过滤筛选
    function filterSize(index){
        changeStyle(index);
        dispatch({type:'products/filterSizes',payload:{sizes:sizes[index],origin}});
    }

    // 修改样式
    function changeStyle(index){
        color[index] = !color[index];
        setcolor([...color]);
    }

    return (
        <div className="sizes-box">
            <h4 className={s.title}>Sizes:</h4>
            <ul className={s.box}>
                {
                    sizes.map((size,index)=>(
                        <li key={index}>
                            <button
                            style={{backgroundColor:color[index]?'#000':'#eee',color:color[index]?'#fff':'#000'}}
                            onClick={()=>filterSize(index)}
                            type="button">{size}</button>
                        </li>
                    ))
                }
            </ul>
            <p className={s.star}>Leave a star on Github if this repository was useful :&#41;</p>
            <div className={s.btn}>
                <button type="button" className={s.sbtn}>
                    <StarOutlined /> Star
                </button>
                <button type="button" className={s.nbtn}>1,760</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(Sizes);