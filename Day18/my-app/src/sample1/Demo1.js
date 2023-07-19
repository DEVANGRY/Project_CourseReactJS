const Demo1 = () => {
    // Tìm hiểu về tham chiếu và tham trị
    // Tham trị sẽ bị ảnh hưởng với kiểu
    // dữ liệu object và array

    //  let sourceObject = {...}
    //  let targetObject = sourceObject ;
    //  thay đổi các thuộc tính ở targetObject thì
    //   sourceObject cũng bị ảnh hưởng thay

    //   ==> Giải pháp : deep copy và shalow copy

    // a là số
    let a = { name: "Hà nội", desc: "Việt Nam" },
        // => Gọi là 1 tham chiếu : khi a là 1 object mà gán cho b
        // thì cả a và b đều tham chiếu đến 1 ô nhớ
        b = a;
    // Change title b
    b.name = "Hà Nam";
    // cả a và b . name đều bị thay đổi

    const c = ["Dak lak", "Cần Thơ", "Cà Mau"];
    c[1] = "Hà Tĩnh";

    // using spread ...
    let d = { name: "Vũng tàu", desc: "Việt Nam" };
    let e = { ...d };
    e.name = "Quảng Ninh";

    // using Object.assign() method

    let f = Object.assign({}, d);

    // JSON.parse(JSON.stringify(...))
    return (
        <>
            <h2>In object trong JSX</h2>
            <div>
                a : <pre>{JSON.stringify(a, null, 2)}</pre>
            </div>
            <div>
                b :<pre>{JSON.stringify(b, null, 3)}</pre>
            </div>
            <div>
                c :<pre>{JSON.stringify(c, null, 3)}</pre>
            </div>

            <div>
                d :<pre>{JSON.stringify(d, null, 3)}</pre>
            </div>
            <div>
                e :<pre>{JSON.stringify(e, null, 3)}</pre>
            </div>
        </>
    );
};

export default Demo1;
