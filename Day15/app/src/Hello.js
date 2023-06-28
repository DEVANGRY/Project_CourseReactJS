// Khi import 1 biến từ 1 file có cú pháp export default thì
// khi import vào thì ko cần để trong {} : import A from 'path' trong ddos
// A là tên biến hay tên hàm

import getAVG, { name, age, address, gender, getType } from "./Demo";
import { student } from "./student";
import cities from "./cities";
import { studentInfo, markStudent, testStudent } from "./DestructObject";
import { northCities, southCities } from "./spread";
let [hn, hcm, dn, hp] = cities;

// destructuring object
let { studentName, phone } = studentInfo;

console.log(studentName, phone);

// Toán tử ... spread operator
// Dùng để copt tất cả các giá trị trong array hoặc
//object bên trong  object hoặc array khác
let AllCities = [...northCities, ...southCities];

// Dùng toán tử ... spread operator để nhân bản Object
let studentData = { ...studentInfo };
studentData.email = "kok@gmail.com";
const Hello = () => {
    return <h1>Thẻ h1 trong component Hello.js</h1>;
};

const ListStudent = () => {
    return student.map((st) => {
        return (
            <div
                className="student-item"
                style={{
                    borderBottom: "1px solid red",
                    backgroundColor: "violet",
                }}
            >
                <div>{st.name}</div>
                <p>{st.age}</p>
                <address>{st.address}</address>
            </div>
        );
    });
};

const Demo = () => {
    //React JSX
    return (
        <div className="container demo">
            <p>Thẻ p component demo</p>
            <a href="#">Thẻ a trong component demo</a>
            <ul>
                <li>Name by : {name}</li>
                <li>Age by : {age}</li>
                <li>Address by : {address}</li>
                <li>Gender by : {gender.toString()}</li>
                <li>AVG by : {getAVG()}</li>
                <li>Type by : {getType()}</li>
            </ul>
            <h4>List Student by .map()</h4>
            <ListStudent />
            <h3>Test Destructuring</h3>
            <p>{hn}</p>
            <h3>Test Destructuring Object</h3>
            <p>{studentName}</p>
            <p>{phone}</p>
            <h3>
                Dùng destructuring như 1 tham số đầu vào khi khai báo function
            </h3>
            {testStudent(markStudent).toString()}

            <h3>In ra all cities bên trên dùng ... spread</h3>
            <ul>
                {AllCities.map((citi) => {
                    return <li>{citi}</li>;
                })}
            </ul>
            <h3>In ra một Object bằng map </h3>
            <ul>
                <li>{studentData.studentName}</li>
                <li>{studentData.email}</li>
            </ul>
            <h2>Debug array , object trong JSX</h2>
            <pre>{JSON.stringify(studentData, null, 2)}</pre>
        </div>
    );
};
// Xuất hàm Hello()
// export default Hello;
// Chỉ export được 1 hàm trong một thẻ
// Còn import được nhiều thẻ trong một
export default Demo;
