import React from 'react';
import Card from './Card';
import '../styles/Comparison.css';
import PropTypes from 'prop-types';

const Comparison = ({ data, clickCard, selected, getComparison }) => {
  const averageObj = getComparison(selected[0].location, selected[1].location);
  const renderedCards = selected.map(district => {
    return (
      <Card
        data={district}
        clickCard={clickCard}
        key={district.location}
        selected={selected}
      />
    );
  });

  return (
    <div className="Comparison">
      {renderedCards[0]}
      <article className="average-card">
      <h5>Selected district 10-year averages:</h5>
        <h3>{Object.keys(averageObj)[0]}</h3>
        <h5>{(Object.values(averageObj)[0]* 100).toFixed(1)}%</h5>
        <h3 className="average">RATIO</h3>
        <h5 className="compared">{Object.values(averageObj)[2]}</h5>
        <h3>{Object.keys(averageObj)[1]}</h3>
        <h5>{(Object.values(averageObj)[1]* 100).toFixed(1)}%</h5>
      </article>
      {renderedCards[1]}
    </div>
  );
};

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

  selected: PropTypes.arrayOf(
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

  getComparison: PropTypes.func.isRequired
};

export default Comparison;
