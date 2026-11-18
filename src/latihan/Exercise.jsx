import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function Exercise() {
  const [dataPosts, setDataPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPosts();
      setDataPosts(result);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
        Post Cards
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {dataPosts.map((item) => (<PostCard key={item.id} title={item.title} body={item.body} />))}
      </div>
    </div>
  );
}

export default Exercise;