import React from "react";

// Components are like functions that return HTML elements.
// Components giống hàm mà trả về các thẻ HTml
// Components Có thể tái sử dụng được

class Car extends React.Component {
    // Trong class components có phương thức gọi là render()
    // trả về html của components
    render() {
        return (
            <>
                <h1>Class component đầu tiên</h1>
                <p>Phương thức = method : render()</p>
            </>
        );
    }
}

export default Car;
