import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const Counter = () => {
  const count = useSelector((state) => state);
  // const condition=()=>{
  //   if(count0){
  //     alert("value not less than zero")
  //   }
  // }
  // useEffect(()=>{
  //   condition();
  // },[count])
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
};
export default Counter;
