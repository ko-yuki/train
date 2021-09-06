import s from "./index.less";
import { useState } from 'react';
import { connect } from 'dva';
import { StarOutlined } from '@ant-design/icons';

function Sizes({ onClick }) {

  const [sizes, setsizes] = useState([
    {
      size: 'XS',
      selected: false
    },
    {
      size: 'S',
      selected: false
    },
    {
      size: 'M',
      selected: false
    },
    {
      size: 'ML',
      selected: false
    },
    {
      size: 'L',
      selected: false
    },
    {
      size: 'XL',
      selected: false
    },
    {
      size: 'XXL',
      selected: false
    },
  ])

  // 过滤筛选
  function filterSize(index) {
    changeStyle(index);
    onClick(sizes[index]);
  }

  // 修改样式
  function changeStyle(index) {
    const { selected } = sizes[index];
    sizes[index].selected = !selected;
    setsizes([...sizes]);
  }

  return (
    <div className="sizes_box">
      <h4 className={s.title}>Sizes:</h4>
      <ul className={s.box}>
        {
          sizes.map((size, index) => (
            <li key={index}>
              <button
                style={{ backgroundColor: size.selected ? '#000' : '#eee', color: size.selected ? '#fff' : '#000' }}
                onClick={() => filterSize(index)}
                type="button">{size.size}</button>
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

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps)(Sizes);