import React, { useEffect, useState } from 'react';

function LazyLoading() {
  const [passengers, setPassengers] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchPassengers();
  }, []);

  function fetchPassengers() {
    if (isLoading) return;
    setIsLoading(true);
    const url = `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=10`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPassengers(prevPassengers => [...prevPassengers, ...data.data]);
        setCurrentPage(prevPage => prevPage + 1);
        setIsLoading(false);
      })
      .catch(error => {
        setIsLoading(false);
        console.error('Error:', error);
      });
  }

  function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 20) {
      fetchPassengers();
    }
  }

  return (
    <div onScroll={handleScroll} style={{ height: '500px', overflowY: 'scroll'}}>
      <ul>
        {passengers.map(passenger => (
          <li key={passenger._id}>{passenger.name}</li>
        ))}
      </ul>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default LazyLoading;
