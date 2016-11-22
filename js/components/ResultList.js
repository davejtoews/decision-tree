import React, { PropTypes } from 'react';
import RemoveResult from '../containers/RemoveResult';

const ResultList = ({ results }) => {
  return (
    <div className="result-list">
      <h2>Results</h2>
      <ul>
        {results.map((result, index) =>
          <li key={index} >
            <h5>{result.text}</h5>
            <RemoveResult id={result.id} />
          </li>
        )}
      </ul>
    </div>
  )
}

ResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default ResultList;