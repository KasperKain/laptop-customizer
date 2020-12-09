import React from 'react';
import { USCurrencyFormat } from '../../../STORE';
import slugify from 'slugify';

class FeatureItem extends React.Component {
  render() {
    return (
      <div>
        <input
          type='radio'
          className='feature__option'
          id={this.props.feature.name}
          name={slugify(this.props.featureType)}
          checked={
            this.props.feature.name ===
            this.props.selected[this.props.featureType].name
          }
          onChange={() =>
            this.props.updateFeature(this.props.featureType, this.props.feature)
          }
        />

        <label htmlFor={this.props.feature.name} className='feature__label'>
          {this.props.feature.name} (
          {USCurrencyFormat.format(this.props.feature.cost)})
        </label>
      </div>
    );
  }
}

export default FeatureItem;
