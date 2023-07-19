const M3 = () => {
    const handleClick = (a, b) => {
        console.log(b);
    };
    return (
        <>
            <button onClick={(event) => handleClick("goal", event)}>
                Click me!!!
            </button>
        </>
    );
};

export default M3;
