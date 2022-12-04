import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={()=>{setIsOpen(!isOpen)}}>
        {isOpen?<AiOutlineMinus/>:<AiOutlinePlus/>}
      </button>
    </header>
    <p>{isOpen?info:null}</p>
  </article>
};

export default Question;
