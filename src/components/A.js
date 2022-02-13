import { useRef, useState, useImperativeHandle, forwardRef } from "react";

const A = forwardRef((props, ref) => {
    const [showValue, setShowValue] = useState(null);
    const inputRef = useRef();
    const updateShowValue = () => {
        console.log(inputRef)
        setShowValue(inputRef.current.value);
    }
    useImperativeHandle(ref, () => {
        return {
            updateShowValue: updateShowValue
        }
    });
    return (<>
        <div>
            <input ref={inputRef} /><br />
            {`Show Value :- ${showValue}`}
        </div>
    </>);
});

export default A;