import c from './index.module.css';
import {useState,useEffect} from 'react';
import { connect } from 'dva';
import { Card, Modal, message } from 'antd';

function Cart({state,dispatch}){

    const [show, setshow] = useState(true);
    const [pos, setpos] = useState(-440);
    const [modalShow, setModalShow] = useState(false);

    const {cart,total,priceTotal,ins} = state.cart;

    useEffect(() => {
        let localCart = JSON.parse(localStorage.getItem("cart"));
        if(localCart){
            dispatch({type:'cart/fromLocal',payload:localCart});
        }
    }, [dispatch]);


    // 减少数量
    function cutNum(cart,product,index){
        dispatch({type:'cart/cutNum',payload:{cart,product,index}});
    }

    // 增加数量
    function addNum(cart,product,index){
        dispatch({type:'cart/addNum',payload:{cart,product,index}});
    }

    // 删除商品
    function removeProduct(cart,index){
        dispatch({type:'cart/removeProduct',payload:{cart,index}});
        if(cart.length===0){
            localStorage.removeItem("cart");
        }
    }

    // 结算
    function confirm(cart){
        if(cart.length!==0){
            dispatch({type:'cart/checkout',payload:{cart}});
            message.success('Success Checkout');
        }else{
            message.info('Add some goods to cart!');
        }
        setModalShow(false);
        localStorage.removeItem("cart");
    }

    function cancel() {
        if(total!==0){
            message.info('Fail Checkout!');
        }else{
            message.info('Add some goods to cart!');
        }
        setModalShow(false);
    }


    return (
        <div className={c.cartbox}>
            <div
            style={{display:show?'block':'none'}}
            className={c.carticon}
            onClick={()=>{setpos(0);setshow(!show)}}>
                <img
                alt=""
                src="./img/cart.png"
                />
                <span>{total}</span>
            </div>
            <div className={c.cart} style={{top:0,right:pos}}>
                <button
                type="button"
                className={c.close}
                style={{display:show?'none':'block'}}
                onClick={()=>{setpos(-440);setshow(!show)}}
                >×</button>
                <div className={c.goods}>
                    <div className={c.title}>
                        <img
                        src="./img/cart.png"
                        alt=""/>
                        <span>{total}</span>
                        <b>Cart</b>
                    </div>
                    <p
                    style={{display:total?'none':'block'}} 
                    className={c.info}>Add some products in the cart<br/>:&#41;</p>
                    <Card 
                    style={{display:total?'block':'none'}}
                    className={c.goodsbox}>
                        {
                            cart.map((product,index)=>(
                                <Card.Grid className={c.goodsinfo} key={product.id}>
                                    <button
                                    onClick={()=>removeProduct(cart,index)}
                                    type="button"
                                    className={c.remove}>×</button>
                                    <img
                                    src={`./img/${product.sku}_2.jpg`}
                                    alt=""/>
                                    <div className={c.goodsdesc}>
                                        <h4>{product.title}</h4>
                                        <p>{product.availableSizes[0]} | {product.style}</p>
                                        <span>Quantity: {product.num}</span>
                                    </div>
                                    <div className={c.price}>
                                        <p>$ {product.price.toFixed(2)}</p>
                                        <div className={c.goodsnum}>
                                            <button
                                            onClick={()=>cutNum(cart,product,index)}
                                            style={{opacity:product.num<=1?0.2:1,cursor:product.num<=1?'default':'pointer'}}
                                            className={c.cut}>-</button>
                                            <button
                                            onClick={()=>addNum(cart,product,index)}
                                            className={c.add}>+</button>
                                        </div>
                                    </div>
                                </Card.Grid>
                            ))
                        }
                    </Card>
                </div>
                <div className={c.checkout}>
                    <p className={c.total}>
                        <span>SUBTOTAL</span>
                        <span className={c.unitprice}>$ {priceTotal.toFixed(2)}</span>
                    </p>
                    <p 
                    style={{display:ins?'block':'none'}}
                    className={c.ins}
                    >OR UP TO {ins} x $ {(priceTotal/ins).toFixed(2)}</p>
                    <button onClick={()=>setModalShow(true)}>CHECKOUT</button>
                    <Modal
                    title="CHECKOUT"
                    visible={modalShow}
                    onCancel={cancel}
                    onOk={()=>confirm(cart)}
                    >
                        <p style={{display:total?'block':'none'}}>Checkout - Subtotal: $ {priceTotal.toFixed(2)}</p>
                        <p style={{display:total?'none':'block'}}>Add some product in the cart!</p>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({state});

export default connect(mapStateToProps)(Cart);