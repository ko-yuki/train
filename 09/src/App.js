import { useState, useEffect } from 'react';
import { connect } from 'dva';
import './App.css';
import Sizes from './components/sizes';
import Products from './components/products';
import Cart from './components/cart';

function App({ origin, dispatch }) {

  const [sizes, setsizes] = useState({ size: '', selected: false });
  const [order, setorder] = useState('default');

  // 监听尺寸和排序变化，派发action
  useEffect(() => {
    dispatch({ type: 'products/filterSizesAndOrder', payload: { origin, sizes, order } });
  }, [sizes, order, dispatch, origin]);


  // 获取过滤尺寸
  function getSizes(sizes) {
    setsizes({ ...sizes });
  }

  // 获取排序方式
  function getOrder(order) {
    setorder(order);
  }

  return (
    <div className='app'>
      <Sizes onClick={getSizes}></Sizes>
      <Products onClick={getOrder}></Products>
      <Cart></Cart>
    </div>
  );
}

const mapStateToProps = state => ({ origin: state.products.origin });

export default connect(mapStateToProps)(App);