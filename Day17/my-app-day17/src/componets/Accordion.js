import { useState } from "react";
import "./Accordion.css";

const Accordion = (props) => {
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
                Section 1
            </h3>
            {isOpen && (
                <div className="acc_desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            )}
        </>
    );
};

export default Accordion;
