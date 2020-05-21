import React from 'react';
import {connect} from 'react-redux'; // also import actions 
import {reducer} from '../reducers/reducer'

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={()=> props.removeItem(props.feature)}className="button">X</button>
      {props.feature.name}
    </li>
  );
};

// 


export default AddedFeature;
