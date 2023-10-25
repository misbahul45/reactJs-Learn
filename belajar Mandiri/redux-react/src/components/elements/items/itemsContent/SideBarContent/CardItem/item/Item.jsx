import React from 'react';

const Item = ({ content, Icon, open, setClickSideBar, clickSideBar }) => {
  const handleSideClick = () => {
    setClickSideBar(content);
  };

  return (
    <div onClick={handleSideClick} className="cursor-pointer">
      <div className={`flex items-center gap-2 hover:bg-gray-600 py-1 px-2 ${clickSideBar === content ? 'bg-gray-600' : ''}`}>
        {Icon && <Icon className={`${open ? 'lg:text-2xl text-md' : 'lg:text-xl text-md'} text-slate-400 font-serif font-semibold transition-all duration-500`} />}
        <h4 className={` ${open ? 'hidden' : ''} text-gray-300 text-md transition-all duration-500 `}>{content}</h4>
      </div>
    </div>
  );
};

export default Item;
