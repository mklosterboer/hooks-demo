import React, { useState, useEffect } from 'react';

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

const CustomFetchData = () => {
    const [data, loading] = useFetch("https://jsonplaceholder.typicode.com/posts?userId=1");

    return (
        <>
            {loading ? (
                "Loading..."
            ) : (
                    <div>
                        {(data as []).map(({ id, title, body }) => (
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

const customFetchDataDesc = (
    <div>
        This works the same as the Fetch Data demo but has extracted useFetch as a custom hook. <br /><br />
        Custom hooks can use hooks and store their own state. In this example, we may not need this to be extracted,
        but now this logic, including state management, can be used in other componenets.
    </div>
);

export const CustomFetchDataExample = {
    title: "Custom Fetch Data",
    description: customFetchDataDesc,
    component: CustomFetchData,
}