import React from 'react';
import STORE from '../../../STORE';
import slugify from 'slugify';

class FeatureItem extends React.Component {
  handleChange() {
    console.log('damn');
  }

  render() {
    const features = this.props.features.map((feat, idx) => {
      return (
        <div className='feature__item' key={slugify(JSON.stringify(feat))}>
          <input
            type='radio'
            id={slugify(JSON.stringify(feat))}
            className='feature__option'
            name={slugify(this.props.featureType)}
            checked={
              feat.name === this.props.selected[this.props.featureType].name
            }
            onChange={() =>
              this.props.updateFeature(this.props.featureType, feat)
            }
          />

          <label
            htmlFor={slugify(JSON.stringify(feat))}
            className='feature__label'
          >
            {feat.name} ({STORE.USCurrencyFormat.format(feat.cost)})
          </label>
        </div>
      );
    });

    return (
      <fieldset className='feature' key={this.props.hash}>
        <legend className='feature__name'>
          <h3>{this.props.featureType}</h3>
        </legend>
        {features}
      </fieldset>
    );
  }
}

export default FeatureItem;
