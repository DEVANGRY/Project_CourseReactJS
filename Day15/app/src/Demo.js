let name = "Durrty03";
let age = 99;
let address = "Hà Nội";
let gender = true;

const getAVG = () => {
    let toan = 9;
    let ly = 2;
    let hoa = 1;
    return (toan + ly + hoa) / 3;
};
const getType = () => {
    return "C";
};
// export (Bình Thường)
export { name, age, address, gender, getType };

// export default (Xuất mặc định)
// Chỉ xuất được 1 biến hoặc 1 hàm mặc định
export default getAVG;
