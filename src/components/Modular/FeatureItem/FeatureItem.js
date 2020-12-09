import React from 'react';
import FeatureOption from '../FeatureOption/FeatureOption';
import slugify from 'slugify';

class FeatureItem extends React.Component {
  render() {
    const features = this.props.features.map((feat, idx) => {
      return (
        <FeatureOption
          key={slugify(JSON.stringify(feat))}
          feature={feat}
          featureType={this.props.featureType}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
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
