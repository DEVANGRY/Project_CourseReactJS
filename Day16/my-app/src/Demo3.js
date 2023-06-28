const Demo3 = () => {
    // Câu lệnh điều kiện trong component
    let age = 21;
    return (
        <>
            <h1>Demo câu lệnh If else</h1>
            <p>{age >= 18 ? "Người lớn" : "Trẻ con"}</p>
        </>
    );
};

export default Demo3;
