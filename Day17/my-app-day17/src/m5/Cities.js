const Cities = () => {
    const cities = ["Hà nội", "Hải Phòng", "Cần Thơ", "Đà Nẵng"];

    return (
        <>
            <ul>
                {cities.map((city, key) => {
                    return (
                        <li key={key}>
                            {key} : {city}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default Cities;
