const Student = (props) => {
    return (
        <>
            <h3>props dùng bằng function</h3>
            <ul>
                <li>Tên : {props.name}</li>
                <li>Tuổi : {props.age}</li>
                <li>Địa Chỉ : {props.address}</li>
            </ul>
        </>
    );
};

export default Student;
