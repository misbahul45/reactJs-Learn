import React from 'react';
import { Link } from 'react-router-dom';
const Item = ({ content, Icon, open, setClickSideBar, clickSideBar }) => {
  const handleSideClick = () => {
    setClickSideBar(content);
  };
const link=`/${content.toLowerCase().split('').filter((a)=>a!==" ").join('')}`

  return (
    <div onClick={handleSideClick} className="cursor-pointer">
      <Link  to={link} className={`flex items-center gap-2 hover:bg-gray-600 py-1 px-2 ${clickSideBar === content ? 'bg-gray-600' : ''}`}>
        {Icon && <Icon className={`${open ? 'lg:text-2xl text-md' : 'lg:text-xl text-md'} text-slate-400 font-serif font-semibold transition-all duration-500`} />}
        <h4 className={` ${open ? 'hidden' : ''} text-gray-300 text-md transition-all duration-500 `}>{content}</h4>
      </Link>
    </div>
  );
};

export default Item;
