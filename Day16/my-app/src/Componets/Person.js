const Person = (props) => {
    return (
        <>
            <h1>Name : {props.person_name}</h1>
            <p>Address : {props.address}</p>
        </>
    );
};

export default Person;
