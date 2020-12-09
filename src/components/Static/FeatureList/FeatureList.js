import React from 'react';
import FeatureItem from '../../Modular/FeatureItem/FeatureItem';

class FeatureList extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return (
        <FeatureItem
          key={feature + '-' + idx}
          features={this.props.features[feature]}
          featureType={feature}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      );
    });

    return (
      <form className='main__form'>
        <h2>Customize your laptop</h2>
        {features}
      </form>
    );
  }
}

export default FeatureList;
