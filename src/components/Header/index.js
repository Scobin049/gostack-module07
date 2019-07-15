import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
  let cart;
  if (cartSize === 0) {
    cart = 'Nenhum item =(';
  } else {
    cart = cartSize + (cartSize === 1 ? ` item` : ` itens`);
  }

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cart}</span>
        </div>
        <MdShoppingBasket color="#fff" size={36} />
      </Cart>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
