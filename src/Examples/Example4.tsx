import React, { useState, useEffect } from 'react';

export const Example4: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = "https://jsonplaceholder.typicode.com/posts?userId=1";

    const fetchUrl = async () => {
        const response = await fetch(url);
        const json = await response.json();
        
        setData(json);
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
      }, []);

    return (
        
        <div >
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {data.map(({id, title, body}) => (
                        <div key={`post-${id}`}>
                            <strong>{title}</strong>
                            <div>
                                {body}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
