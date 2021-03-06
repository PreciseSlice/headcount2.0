import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

const Card = ({ data, clickCard, selected }) => {
  const yearsArray = Object.keys(data.data);
  const percentArray = Object.values(data.data);

  const highlighted = selected.find(
    district => district.location === data.location
  ) ? 'highlighted': '';

  const elements = percentArray.map((percent, index) => {
    let percentClass = 'belowFifty';

    if (percent >= 0.5) {
      percentClass = 'aboveFifty';
    }

    return (
      <div className="card-data-row" key={index}>
        <span className="years">{yearsArray[index]} : </span>
        <span className={percentClass}>{'  '}{(percent * 100).toFixed(1)}%</span>
      </div>
    );
  });

  return (
    <article onClick={() => clickCard(data.location)} className={highlighted}>
      <h3>{data.location}</h3>
      <div className="element-wrapper">{elements}</div>
    </article>
  );
};

Card.prototype = {
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
  ).isRequired
};

export default Card;
