import React, { useState, useEffect } from 'react';

import api from '../api';

import ErrorBlock from '../components/ErrorBlock';
import RecordCard from '../components/RecordCard';

function AllRecords() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [records, setRecords] = useState([]);

  const retrieveAllRecords = async () => {
    const request = await api.getRecords();

    if (request.status !== 200) {
      console.error('wrong status: ', request);
      setErrorMessage('there was a problem getting records');
    }

    const { records } = request.data;

    setRecords(records);
  };

  useEffect(() => {
    retrieveAllRecords();
  });

  return (
    <div>
      <article className="uk-article uk-text-left">
        <h3 className="uk-article-title">All Records</h3>
        <p className="uk-article-meta">
          Here you can view all raw records without any metrics formatting, this
          is essentially a full read of the DB.
        </p>
      </article>
      {errorMessage ? <ErrorBlock message={errorMessage} /> : null}
      <ul className="uk-list">
        {records.map(record => {
          return (
            <RecordCard
              key={record.id}
              id={record.id}
              timestamp={record.timestamp}
              weight={record.weight}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default AllRecords;
