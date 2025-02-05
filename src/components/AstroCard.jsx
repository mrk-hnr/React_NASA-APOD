import { useState, useEffect } from "react";

export default function AstroCard({ dates, selectedDate }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (loading || !localStorage || !selectedDate) { return; }

    let cache = {};
    if (localStorage.getItem("APOD")) {
      cache = JSON.parse(localStorage.getItem("APOD"));
    }

    if (cache[selectedDate]) {
      setData(cache[selectedDate]);
      return;
    }

    async function fetchAPODData() {
      setLoading(true);
      setError(null);

      try {
        const url = `https://api.nasa.gov/planetary/apod?date=${selectedDate}&api_key=hETQq0FPsZJnUP9C3sUEFtwmJH3edb4I5bghfWDM`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`API request failed with status ${res.status}`);
        }

        const APODData = await res.json();
        setData(APODData);

        cache[selectedDate] = APODData;
        localStorage.setItem("APOD", JSON.stringify(cache));
      } catch (error) {
        console.error("Failed to fetch APOD data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchAPODData();
  }, [selectedDate, loading]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      {data && (
        <div>
          <div className="astroCard__title-date">
            <h2>{data.title} - </h2>
            <h3>{data.date}</h3>
          </div>
          <p>{data.explanation}</p>
          <img 
            className="astroCard__thumbnail"
            src={data.url}
            alt={data.title} />
        </div>
      )}
    </div>
  );
}