import { useDispatch } from "react-redux";
import { reactionAdded } from "../postSlice";
import React from 'react';

const reactionEmojis = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
  rocket: '🚀',
  coffee: '☕',
};

const Reactions = ({ post }) => {
  const dispatch = useDispatch();

  const reactionButtons = Object.entries(reactionEmojis).map(([name, emoji]) => (
    <button
    className="flex gap-2 text-white"
      key={name}
      onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}
    >
      {emoji} {post.reaction[name]}
    </button>
  ));

  return (
    <div className="flex gap-3">{reactionButtons}</div>
  );
}

export default Reactions;
