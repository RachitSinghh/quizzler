import React from 'react';

export default function Quiz(props){
  return(
    <div>
      {props.question}
      {props.answer}
    </div>
  )
}