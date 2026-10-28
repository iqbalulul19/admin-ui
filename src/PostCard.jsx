import React, { useState } from "react";

function PostCard(props) {
  const { title, body } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleCardClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div
      onClick={handleCardClick}
      className={`p-6 rounded-lg shadow hover:shadow-md transition cursor-pointer ${
        isClicked ? "bg-blue-100" : "bg-white"
      }`}
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2 capitalize">
        {title}
      </h2>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}

export default PostCard;