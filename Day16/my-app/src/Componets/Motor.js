import React from "react";

class Motor extends React.Component {
    // Props trong components giống như là thuộc tính của component
    // Props Giống như 1 đối số để chúng ta có thể truyền vào

    render() {
        return (
            <>
                <h3>props dùng bằng class</h3>

                <ul>
                    <li>Tên hãng : {this.props.brand}</li>
                    <li>Model : {this.props.model} </li>
                    <li>Hãng sản xuất : {this.props.year}</li>
                    <li>Màu sắc : {this.props.color}</li>
                </ul>
            </>
        );
    }
}

export default Motor;
