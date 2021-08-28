import React, { useState } from 'react';
import { postData } from '../proxies/post';

export const Input = ({addData}) => {

  const [data, setData] = useState();

  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleClick = async () => {
   const json =  await postData('todo', data)
   addData(json.data)
  }

  return <div>
    <input placeholder="Add a todo" onChange={(e) => handleChange(e)}/>
    <button onClick={() => handleClick()}>Add</button>
  </div>
}