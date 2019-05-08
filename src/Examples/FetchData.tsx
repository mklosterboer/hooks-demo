import React, { useState, useEffect } from 'react';
import { exampleProps } from './models';

export const FetchData = (props: exampleProps) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
            const json = await response.json();
            
            setData(json);
            setLoading(false);
        }

        fetchPosts();
      }, []);

    return (
        <>
            <h2 className="exampleHeader">Fetch Data</h2>
            {props.description}
            <hr style={{width: "100%"}}/>

            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {data.map(({id, title, body}) => (
                        <div key={`post-${id}`} className="post">
                            <strong>{title}</strong>
                            <div>
                                {body}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}
