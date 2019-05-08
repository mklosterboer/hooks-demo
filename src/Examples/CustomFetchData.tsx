import React, {useState, useEffect} from 'react';
import { exampleProps } from './models';

const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUrl = async () => {
            const response = await fetch(url);
            const json = await response.json();
            
            setData(json);
            setLoading(false);
        }

        fetchUrl();
    }, [url]);

    return [data, loading];
}

export const CustomFetchData = (props: exampleProps) => {
    const [data, loading] = useFetch("https://jsonplaceholder.typicode.com/posts?userId=1");
    
    return (
        <>
            <h2 className="exampleHeader">Custom Fetch Data</h2>
            {props.description}
            <hr style={{width: "100%"}}/>
            {loading ? (
                "Loading..."
            ) : (
                <div>
                    {(data as []).map(({id, title, body}) => (
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
