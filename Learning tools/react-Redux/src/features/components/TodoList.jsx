import React, { useEffect, useState } from 'react';
import { useGetAllTodoQuery, useHandleFinishedMutation } from '../app/ApiTodo';
import { useSelector } from 'react-redux';
import { getAllDays } from '../app/DaysSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const days = useSelector(getAllDays);
  const { data } = useGetAllTodoQuery();
 

  const [handleDay, setHandleDay] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoDay, setTodoDay] = useState([]);

  useEffect(() => {
    if (data) {
      setTodoList(data);
    }
  }, [data]);

  useEffect(() => {
    if (handleDay !== '') {
      const dayData = todoList.filter((datum) => datum.day === handleDay);
      setTodoDay(dayData);
    }
  }, [handleDay]);

  return (
    <div className="h-full flex flex-col items-center gap-5 ">
      {data ? (
        <div className={`flex justify-between w-full lg:max-w-6xl flex-wrap ${data.length === 0 ? 'hidden' : 'block'}`}>
          {data && (
            <button
              onClick={() => {
                setHandleDay('');
              }}
              className={`w-32 ${handleDay === '' ? 'bg-gray-600' : 'bg-gray-900'}  mt-2 text-white px-5 rounded-md capitalize  hover:bg-gray-600 transition-all duration-200`}
            >
              All Todo
            </button>
          )}
          {data &&
            days.map((datum, index) => (
              <button
                onClick={() => setHandleDay(datum)}
                key={index}
                className={`${handleDay === datum ? 'bg-gray-600' : 'bg-gray-900'} w-32 text-white px-5 py-1 rounded-md capitalize hover:bg-gray-600 transition-all duration-200 mt-2`}
              >
                {datum}
              </button>
            ))}
        </div>
      ) : null}
      {data && data.length === 0 ? (
        <p className="lg:text-6xl sm:text-5xl text-4xl text-gray-600 drop-shadow-2xl">No To Do List</p>
      ) : (
        todoList && (
          <div
            className={`flex flex-col w-full max-w-3xl max-h-full  shadow-xl shadow-gray-700 rounded-md ${
              todoList.length > 8 && handleDay === '' || todoDay.length > 8 ? 'overflow-y-scroll' : ''
            }`}
          >
            {handleDay === ''
              ? todoList.map((datum, index) => (
                 <TodoItem datum={datum} key={index} />
                ))
              : todoDay.map((datum, index) => (
                <TodoItem datum={datum} key={index} />
                ))}
          </div>
        )
      )}
    </div>
  );
};

export default TodoList;
