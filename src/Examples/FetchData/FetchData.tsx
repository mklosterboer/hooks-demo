import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1");
      const json = await response.json();
      if (json && json.length) setData(json);
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
          <div>
            {data.map(({ id, title, body }) => (
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

const fetchDataDesc = (
  <div>
    Below is data fetched and then formatted. Most of the magic for this happens in the code. <br /><br />
    fetchPosts is a function that when called, sets the state with data and updates the 'loading' status. <br /><br />
    We use useEffect to call fetchPosts with an empty dependecy array so that is only runs once, when mounted.
    </div>
);

export const FetchDataExample = {
  title: "Fetch Data",
  description: fetchDataDesc,
  component: FetchData,
}
