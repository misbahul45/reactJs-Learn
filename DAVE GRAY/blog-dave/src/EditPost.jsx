import React from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router';
import { useRef, useState, useEffect } from 'react';
import Api from './Api/posts';

const EditPost = ({ posts, setPosts }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const inputRef = useRef();
  const textAreaRef = useRef();
  const editItem = posts.find((post) => post.id.toString() === id);


  const [title, setTitle] =useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setBody(editItem.body);
    }
  }, [editItem]);

  const handleEdit = (e) => {
    e.preventDefault();
    const editPost = {
      id: id,
      title: title, 
      body: body, 
      dateTime: new Date().toString(),
    };
    const fetchEdit = async () => {
      try {
        await Api.patch('/' + id, editPost);
        setPosts(
            posts.map((post) => (post.id.toString() === id ? editPost : post))
        )
        navigate('/');
      } catch (err) {
        console.log(err);
      }
    };
    fetchEdit();
  };

  return (
    <main className="w-full flex flex-col justify-between h-full  py-5">
      <h1 className="text-red-500 text-2xl font-bold font-serif text-center mb-2">Edit Post</h1>
      <form onSubmit={handleEdit} className="flex flex-col gap-2 bg-green-500 px-4 py-2 rounded-3xl">
        <label htmlFor="title" className="flex flex-col gap-2">
          <span className="text-slate-50 font-bold font-serif text-lg capitalize ml-4">Title</span>
          <input
            ref={inputRef}
            value={title} // Use the state value
            onChange={(e) => setTitle(e.target.value)} // Update the state on change
            className="px-4 py-2 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="title"
            placeholder="Title"
            autoFocus
            required
          />
        </label>
        <label htmlFor="body" className="flex flex-col gap-2">
          <span className="text-slate-50 font-bold font-serif text-lg capitalize ml-4">Body</span>
          <textarea
            ref={textAreaRef}
            value={body} // Use the state value
            onChange={(e) => setBody(e.target.value)} // Update the state on change
            className="px-4 py-2 rounded-2xl h-[170px] outline-none focus:ring-2 focus:ring-blue-500"
            name="body"
            id="body"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className="py-2 bg-blue-600 rounded-2xl w-[200px] mx-auto text-slate-50 uppercase font-serif font-semibold active:bg-blue-200 hover:shadow-xl hover:bg-blue-800 transition-all duration-500 ease-in-out"
        >
          Edit Post
        </button>
      </form>
    </main>
  );
};

export default EditPost;
