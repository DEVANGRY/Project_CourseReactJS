import { useState } from "react";
import "./Accordion.css";

const Accordion2 = (props) => {
    // props and state
    // props = thuộc tính trong component (Thông thường nó truyền vào
    // component cha xuống component con hoặc props là dữ liệu tĩnh )
    // state = dữ liệu động trong component và có thể thay đổi được

    // khai báo state trong function component useState ("giá trị mặc định")
    // Trong class component để thay đổi state dùng cú pháp this.setState({stateName: newValue})

    const [isOpen, setIsOpen] = useState(false);
    const hanldeClick = () => {
        // Thay đổi state trong function bằng component bằng hook
        setIsOpen(!isOpen);
    };
    return (
        <>
            <h3 className="acc_title" onClick={hanldeClick}>
                {props.title}
            </h3>
            {isOpen && <div className="acc_desc">{props.children}</div>}
        </>
    );
};

export default Accordion2;
