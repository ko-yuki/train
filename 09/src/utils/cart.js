// 计算总数、总价、分多少期
function calcu(arr) {
  let sum = 0;
  let priceTotal = 0;
  let ins = 0;
  arr.forEach(item => {
    sum += item.num;
    priceTotal += item.num * item.price;

    if (item.installments > ins) {
      ins = item.installments;
    }
  });
  return { sum, priceTotal, ins };
}

// 添加到购物车
export const add = ({ cart, product }) => {
  let idx = 0;
  if (cart.length === 0) {
    product.num = 1;
    cart.push(product);
  } else {
    idx = cart.findIndex(item => item.id === product.id);
    if (idx === -1) {
      product.num = 1;
      cart.push(product);
    } else {
      cart[idx].num++;
    }
  }

  let data = calcu(cart);
  return { cart, total: data.sum, priceTotal: data.priceTotal, ins: data.ins };
}

// 减少商品数量
export const cut = ({ cart, product, index }) => {
  let goods = { ...product };
  goods.num--;
  if (goods.num <= 1) {
    goods.num = 1;
  }
  cart.splice(index, 1, goods);

  let data = calcu(cart);
  return { cart, total: data.sum, priceTotal: data.priceTotal, ins: data.ins };
}

// 增加商品数量
export const inc = ({ cart, product, index }) => {
  let goods = { ...product };
  goods.num++;
  cart.splice(index, 1, goods);

  let data = calcu(cart);
  return { cart, total: data.sum, priceTotal: data.priceTotal, ins: data.ins };
}

// 删除商品
export const del = ({ cart, index }) => {
  cart.splice(index, 1);
  let data = calcu(cart);
  return { cart, total: data.sum, priceTotal: data.priceTotal, ins: data.ins };
}

// 结算
export const settlement = (cart) => {
  cart = [];
  return { cart, total: 0, priceTotal: 0, ins: 0 };
}

// 本地读取
export const getCartFromLocal = (cart) => {
  let data = calcu(cart);
  return { cart, total: data.sum, priceTotal: data.priceTotal, ins: data.ins };
}