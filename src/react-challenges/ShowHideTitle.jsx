import { useState } from "react";

export const ShowHideTitle = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <button onClick={() => setState(!state)}>Show text</button>
      <h1>{state ? "Hola mundo" : " "}</h1>
    </>
  );
};
