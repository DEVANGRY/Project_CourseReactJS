import React, { useState, useEffect, useRef } from "react";

export const Ref1 = (props) => {
    // component render lần đầu tiên
    // component re render lại khi prop hoặc state trong component đó bị thay đổi
    const [valueInput, setValueInput] = useState("");
    // count re render component
    // useRef sẽ giữ đc các giá trị sau các lần re render
    const countReRender = useRef(0);

    // khi use Effect không có dependency trong đối số thứ 2
    /* Thì nó sẽ chạy hàm bên trong useEffect trong lần đầu tiên và mỗi khi 
    state bị cập nhật
    */
    useEffect(() => {
        // Truy cập countReRender
        // Lấy đc giá trị từ biến sử dụng useRef
        // dùng cú pháp varName.current
        countReRender.current += 1;
    });
    return (
        <>
            <input
                type="text"
                name="demo"
                value={valueInput}
                onChange={(e) => {
                    setValueInput(e.target.value);
                }}
            />
            <p>Số lần re render : {countReRender.current}</p>
        </>
    );
};
