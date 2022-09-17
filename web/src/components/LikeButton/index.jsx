import React, { useState } from 'react';
import heart from '../../assets/heart.png';
import Like from './style';

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Like
      bg={heart}
      isLiked={isLiked}
      onClick={() => setIsLiked(!isLiked)}
    >
      <div className="heart-bg">
        <div id="heart-icon" className={isLiked ? 'liked' : null} />
      </div>
    </Like>
  );
}
