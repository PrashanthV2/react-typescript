import React from 'react'
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


export const Rating = ({ rating, onClick, style }:{rating:any,onClick:any,style:any}) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} onClick={() => onClick(i) } style={style}>
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </>
  );
};
