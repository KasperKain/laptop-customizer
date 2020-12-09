import React from 'react';

class ShoppingCartItem extends React.Component {
  render() {
    return (
      <div className='summary__option'>
        <div className='summary__option__label'>{this.props.featureType}</div>
        <div className='summary__option__value'>{this.props.feature.name}</div>
        <div className='summary__option__cost'>
          {/* {USCurrencyFormat.format(selectedOption.cost)} */}
        </div>
      </div>
    );
  }
}

export default ShoppingCartItem;
