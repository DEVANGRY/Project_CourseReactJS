import Person from "./Person";
const Room = (props) => {
    return (
        <>
            <h1>Phòng chat : {props.room_name}</h1>
            <p>Khởi tạo : {props.create}</p>
            <h2>Sử dụng component trong một component khác</h2>
            <Person person_name="Nguyen Dang" address="Bắc Ninh" />
            <br />
            <Person person_name="Dinh tien" address="Hải Phòng" />
        </>
    );
};

export default Room;
