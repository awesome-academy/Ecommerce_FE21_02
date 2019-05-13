import React from "react";

const CartItem = ({ item, onRemove, onAdd, onRemoveAll }) => {
  const { thumbnailURL, name, price, quantity } = item;
  return (
    <tr className="cart-item">
      <td
        style={{ backgroundImage: `url(${thumbnailURL})` }}
        className="cart-item__img"
      />
      <td>
        <p className="cart-item__name">{name}</p>
      </td>
      <td>
        <p className="number-highlight number-highlight--small">
          {price}
          <sup className="number-highlight__sub">đ</sup>
        </p>
      </td>
      <td>
        <div className="product__quantity-box">
          <button onClick={() => onRemove(item)}>-</button>
          <span>{quantity} </span>
          <button onClick={() => onAdd(item)}>+</button>
        </div>
      </td>
      <td>
        <p className="number-highlight number-highlight--small">
          {price * quantity}
          <sup className="number-highlight__sub">đ</sup>
        </p>
      </td>
      <td>
        <div style={{ cursor: "pointer" }} onClick={() => onRemoveAll(item)}>
          <i className="fas fa-trash-alt" style={{ pointerEvents: "none" }} />
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
