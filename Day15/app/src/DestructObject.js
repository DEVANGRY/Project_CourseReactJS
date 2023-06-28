let studentInfo = {
    studentName: "Join Dang",
    age: 23,
    address: "Ha noi",
    school: "Havort",
    phone: "01238712938",
};

let markStudent = {
    toan: 9,
    li: 10,
    hoa: 8,
    van: 9,
    dia: 10,
    anh: 8,
};
let testStudent = ({ toan, li, hoa }) => {
    // Thi Khối a : toán , lí , hóa
    // Khai báo tham số destructuring object {var1,var2,...}
    let tb = (toan + li + hoa) / 3;
    if (tb > 6) return true;
};
export { studentInfo, markStudent, testStudent };
