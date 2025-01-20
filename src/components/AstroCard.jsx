import { useState, useEffect } from "react";

export default function AstroCard(props) {
    const { dates } = props;
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // If loading or no cache in localStorage, exit
        if (loading || !localStorage) { return; }

        // Check dates if saved in cache:

        // 1. Define cache
        let cache = {};
        if (localStorage.getItem("APOD")) {
            cache = JSON.parse(localStorage.getItem("APOD"));
        }

        // 2. Check if date in cache, else fetch data from API
        const today = dates[0];
        if (cache[today]) {
            setData(cache[today]);
            return;
        }

        // 3. If not in cache, fetch from API
        async function fetchAPODData() {
            setLoading(true);

            try {
                const url = `https://api.nasa.gov/planetary/apod?date=${today}&api_key=hETQq0FPsZJnUP9C3sUEFtwmJH3edb4I5bghfWDM`;

                const res = await fetch(url);
                const APODData = await res.json();
                setData(APODData);

                console.log(APODData);

                cache[today] = APODData;
                localStorage.setItem("APOD", JSON.stringify(cache));

            } catch (error) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchAPODData();
    }, [dates, loading]);

    return (
        <div>
            {data && (
                <div>
                    <div className="astroCard__title-date">
                        <h2>{data.title} - </h2>
                        <h3> {data.date}</h3>
                    </div>
                    
                    {/* <p>{data.explanation}</p> */}
                    <img 
                        className="astroCard__thumbnail"
                        src={data.url}
                        alt={data.title} />
                </div>
            )}
        </div>
    );
}