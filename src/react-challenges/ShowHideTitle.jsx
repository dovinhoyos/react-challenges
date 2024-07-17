import { useState } from "react";

export const ShowHideTitle = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <button onClick={() => setState(!state)}>Show text</button>
      {state ? <span>Hello world, from React!</span> : null}
    </div>
  );
};
