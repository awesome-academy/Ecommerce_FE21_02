import React, { Component } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  addToCart,
  removeAllFromCart
} from "app/actions/cartAction";
import CartItem from "../components/CartItem";

class CartList extends Component {
  renderItems(items, removeFromCart, addToCart, removeAllFromCart) {
    return (
      items &&
      items.map(item => {
        return (
          <CartItem
            key={item.id}
            item={item}
            onRemove={removeFromCart}
            onAdd={addToCart}
            onRemoveAll={removeAllFromCart}
          />
        );
      })
    );
  }
  render() {
    const { items, removeFromCart, addToCart, removeAllFromCart } = this.props;
    return (
      <div className="container cart-list ">
        <h2 className="heading-secondary heading-secondary--pattern-left">
          Giỏ hàng
        </h2>
        <table className="table cart-list__table">
          <thead>
            <tr>
              <th scope="col">
                <h3 className="heading-tertiary">Ảnh </h3>
              </th>
              <th scope="col">
                <h3 className="heading-tertiary">Tên Sản Phẩm </h3>
              </th>
              <th scope="col">
                <h3 className="heading-tertiary">Giá </h3>
              </th>
              <th scope="col">
                <h3 className="heading-tertiary">Số lượng </h3>
              </th>
              <th scope="col">
                <h3 className="heading-tertiary">Tổng số </h3>
              </th>
              <th scope="col">
                <h3 className="heading-tertiary">Xoá </h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.renderItems(
              items,
              removeFromCart,
              addToCart,
              removeAllFromCart
            )}
          </tbody>
        </table>
        <div className="cart-list__buttons">
          <button className="btn btn-primary">tiếp tục mua hàng</button>
          <button className="btn btn-primary">Xóa</button>
          <button className="btn btn-primary" id="js--order-button">
            Tiến hành đặt hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  const commonStore = state.common;
  return {
    items: commonStore.cart
  };
};
export default connect(
  mapStateToProps,
  { removeFromCart, addToCart, removeAllFromCart }
)(CartList);
