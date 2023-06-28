import React from "react";

class Computer extends React.Component {
    // Phương Thức khởi tạo
    constructor(props) {
        // super gọi đến constructor của thẻ cha
        super(props);

        // props vaf state
        // Khổng thể gán props trong component chỉ có thể xem và hiển thị props

        // state = trạng thái . Hiểu đơn giản thành phần
        // động trong component
        this.state = { color: "while", model: "XYZ" };
    }
    HandleClick = () => {
        alert("Hello world");
        this.setState({ color: "orange" });
    };
    // Phương thức render trả về html
    render() {
        return (
            <>
                <div
                    className="computer-warp"
                    style={{
                        fontSize: "14px",
                        backgroundColor: "red",
                        color: this.state.color,
                    }}
                >
                    <h3>Tên máy tính : {this.props.name}</h3>
                    <button onClick={this.HandleClick}>NútTest</button>
                </div>
            </>
        );
    }
}
export default Computer;
