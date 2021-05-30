import { useRef } from 'react';
const Size = ({ text, selectClassName, onActive }) => {
    const ref = useRef(null);
    function clickRef() {
        onActive(ref.current.innerText);
    }
    return (
      <span onClick={clickRef} className={selectClassName(text)} ref={ref}>
        {text}
      </span>
    );
};
export default Size;