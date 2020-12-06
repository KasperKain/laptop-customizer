import React from 'react';
import ShoppingCartItem from '../../Modular/ShoppingCartItem/ShoppingCartItem';
import STORE from '../../../STORE';

class ShoppingCart extends React.Component {
  render() {
    const features = Object.keys(this.props.selected).map((feature, idx) => {
      const hash = feature + '-' + idx;
      return (
        <ShoppingCartItem
          key={hash}
          feature={this.props.selected[feature]}
          featureType={feature}
        />
      );
    });

    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        {features}
        <div className='summary__total'>
          <div className='summary__total__label'>Total</div>
          <div className='summary__total__value'>
            {STORE.USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

export default ShoppingCart;
