import React, { useEffect, useState } from "react";

function Roller() {
  // item to scroll
  const [element, setElement] = useState(undefined);

  useEffect(() => {
      const item = document.getElementsByClassName("btn-return")[0];
      setElement(item);

    window.onscroll = (e) => {
      item.style.display = window.scrollY > document.body.clientHeight * .05 ? "block":"none";
    };

  }, []);

  const goTop = () =>{
    window.scrollTo(0,0);
  };

  return <input className="btn-return" onClick={() => goTop()} value="^" type="button" />;
}

export default Roller;
