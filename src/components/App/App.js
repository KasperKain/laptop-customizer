import React from 'react';
import Header from '../Static/Header/Header';
import FeatureList from '../Static/FeatureList/FeatureList';
import ShoppingCart from '../Static/ShoppingCart/ShoppingCart';
import STORE from '../../STORE';
import './App.css';

class App extends React.Component {
  state = {
    selected: { fefi: 'fofum' },
  };

  componentWillMount() {
    // Intiialize the state with the topmost feature in each feature group
    const initFeatures = {};
    Object.keys(STORE.features).forEach((feature) => {
      initFeatures[feature] = STORE.features[feature][0];
    });

    this.setState({ selected: initFeatures });
  }

  updateFeature = (featureType, newFeature) => {
    const selected = Object.assign({}, this.state.selected);
    selected[featureType] = newFeature;
    this.setState({ selected });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <FeatureList
            features={STORE.features}
            selected={this.state.selected}
            updateFeature={this.updateFeature}
          />
          <ShoppingCart selected={this.state.selected} />
        </main>
      </div>
    );
  }
}

export default App;
