import React, { useState, useEffect } from 'react';
import api from '../api';

import ErrorBlock from '../components/ErrorBlock';

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
      <h3>All Records ({records.length})</h3>
      <p>
        Here you can view all raw records without any metrics formatting, this
        is essentially a full read of the DB.
      </p>
      {errorMessage ? <ErrorBlock message={errorMessage} /> : null}
    </div>
  );
}

export default AllRecords;
