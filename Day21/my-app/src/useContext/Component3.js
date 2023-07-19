import React, { useContext } from "react";
import { UserContext } from "./Components1";
export const Component3 = () => {
    const user = useContext(UserContext);
    return (
        <>
            <h3>Component3</h3>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>email: {user.email}</p>
        </>
    );
};
