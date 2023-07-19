import React from "react";
class Demo1 extends React.Component {
    constructor(props) {
        // Gọi đến phương thức khởi tạo của class cha
        super(props);

        // Tạo ra state mặc định cho ứng dụng này
        this.state = {
            studentName: "Nguyễn Văn A",
            studentAge: 21,
            boxBgColor: "green",
            boxColor: "red",
        };
    }

    changeData = () => {
        // Thay đổi state ban đầu
        this.setState({
            studentName: "Lê Văn Luyện",
            studentAge: 24,
            boxBgColor: "gray",
            boxColor: "orange",
        });
    };

    restoreData = () => {
        this.setState({
            studentName: "Nguyễn Văn A",
            studentAge: 21,
            boxBgColor: "green",
            boxColor: "red",
        });
    };
    render() {
        // inline style
        let boxStyle = {
            color: this.state.boxColor,
            backgroundColor: this.state.boxBgColor,
        };
        return (
            <>
                <div className="box" style={boxStyle}>
                    <h1>Demo state in class Component</h1>
                    <p>
                        In ra trạng thái state hiện tại :
                        {this.state.studentName}
                    </p>
                    <p>Tuổi sinh viên : {this.state.studentAge}</p>
                    <p>Màu sắc : {this.state.boxColor}</p>
                    <p>Màu nền : {this.state.boxBgColor}</p>
                </div>

                <button onClick={this.changeData}>Button 1</button>
                <button onClick={this.restoreData}>Button 2</button>
            </>
        );
    }
}
export default Demo1;
