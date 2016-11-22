import React, { PropTypes } from 'react'

const ResultList = ({ results }) => {
  return (
    <div className="result-list">
      <h2>Results</h2>
      <ul>
        {results.map((result, index) =>
          <li key={index} >
            {result.text}
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