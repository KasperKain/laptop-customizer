import React from 'react';
import ShoppingCartItem from '../../Modular/ShoppingCartItem/ShoppingCartItem';
import Total from '../../Static/Total/Total';

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

    return (
      <section className='main__summary'>
        <h2>Your cart</h2>
        {features}
        <Total selected={this.props.selected} />
      </section>
    );
  }
}

export default ShoppingCart;
