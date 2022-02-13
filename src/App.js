// import { useState } from "react";

// function App() {
//   const [value, setValue] = useState(0);
//   const [showValue, setShowValue] = useState(null);
//   const updateValue = (evt) => {
//     setValue(evt.target.value);
//   }
//   return (
//     <div>
//       <input value={value} onChange={updateValue} />
//       <button onClick={() => { setShowValue(value) }}>Show Value</button><br />
//       {`Show Value :- ${showValue}`}
//     </div>
//   );
// }

// export default App;

import A from './components/A';
import B from './components/B';

import { useRef } from 'react';

function App() {
  const componentRef = useRef();
  return (
    <>
      <A ref={componentRef} />
      <button onClick={() => { componentRef.current.updateShowValue() }}>Show Value</button><br />
      <B />< br/>
    </>
  )
}

export default App;
