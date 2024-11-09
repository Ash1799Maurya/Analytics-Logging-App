import React, { useEffect, useState } from 'react';

const ChartComponent = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Attempting to fetch data....");
      try {
        const response = await fetch('https://drive.google.com/file/d/1B3CPDaCTKRWD0EJuSFn5gfZd4vgygUMQ/view?usp=sharing');  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
   
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const jsonData = await response.json();
          setData(jsonData);  
        } else {
          throw new Error('The file is not JSON.');
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);  
        setLoading(false);
      }
    };

    fetchData();
  }, []);  

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }


  return (
    <div>
      <h1>Chart Data</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ChartComponent;
