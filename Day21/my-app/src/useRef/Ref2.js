import react, { useState, useEffect, useRef } from "react";

// Truy cập trực tiếp vào trong Dom
export const Ref2 = () => {
    /* + ComponentDidMount
       + useEffect
    */
    const divRef = useRef();
    const handleClick = () => {
        alert(divRef.current.innerHTML);
    };
    return (
        <>
            <div ref={divRef}>
                <h3>Nội dung của thẻ html</h3>
                <p>Demo nội dung thẻ</p>
            </div>

            <button onClick={handleClick}>Lấy nội dung content của Div</button>
        </>
    );
};
