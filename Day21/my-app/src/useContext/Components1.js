import React, { useState, createContext } from "react";
import { Component2 } from "./Component2";
export const UserContext = createContext();
/* Nếu chỉ truyền 1 cấp cha sang con thì nên dùng prop truyền  
    nếu truyền qua nhiều cấp (ví dụ ông sang cháu) nên 
    sử dụng useContext truyền dữ liệu
*/
export const Component1 = (props) => {
    const [user, setUser] = useState({
        id: 1,
        username: "admin",
        email: "admin@gmail.com",
    });
    return (
        <UserContext.Provider value={user}>
            <h1>Demo useContext</h1>
            <Component2></Component2>
        </UserContext.Provider>
    );
};
