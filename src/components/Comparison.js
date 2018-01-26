import React from 'react';
import PropTypes from 'prop-types';

const Comparison = ( { data, clickCard, selected }) => {
  if ( selected.length === 2) {
    
  }
  return ( 
    <div className="Comparison"> 
      Comparison component
   </div>
 )
}

export default Comparison;

Comparison.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      location: PropTypes.string.isRequired,
      data: PropTypes.shape({
        2004: PropTypes.number.isRequired,
        2005: PropTypes.number.isRequired,
        2006: PropTypes.number.isRequired,
        2007: PropTypes.number.isRequired,
        2008: PropTypes.number.isRequired,
        2009: PropTypes.number.isRequired,
        2010: PropTypes.number.isRequired,
        2011: PropTypes.number.isRequired,
        2012: PropTypes.number.isRequired,
        2013: PropTypes.number.isRequired,
        2014: PropTypes.number.isRequired
      }).isRequired
    })
  ).isRequired, 
  clickCard: PropTypes.func.isRequired, 
  selected: PropTypes.array.isRequired
};