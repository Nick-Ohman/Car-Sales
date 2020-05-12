import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux'

import {addItem, removeItem} from './actions/actions'



const App = props => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.price}/>
        <AddedFeatures removeItem={props.removeItem}car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addItem={props.addItem} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log('mapstatetoprops', state.reducer)
  return { 
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, { removeItem, addItem })(App);




