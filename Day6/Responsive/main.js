alert("Hello javascript ~~");
/* tên biến nên dùng tiếng anh
        không dùng tiếng việt và càng chú ý là không được dùng tiếng việt có dấu */

/* tên biến đặt ngữ nghĩa */
/* tên biến không được chứa dấu cách và ko chưa các ký tự đặc biệt. tên biến có thể chứa số ví dụ city1 nhưng không được bắt đầu bằng một số 1city */

/* quy tắc đặt tên biến có 2 cách */
/* cách 1 : camelCase con lạc đà : productName,productPrice */
/* cách 2 : dùng dấu _ phân tách các chữ cái : product_name , product_price */

/* không đặc tên biến trùng với từ khóa trong js
        var var;
        */
var city = "hà nội";
var info = "là 'thủ đô' của nước việt nam";
console.log(city + " " + info);

// in ra : hà nội là 'thủ đô' của việt nam

// cách 1 : dùng dấu escape \
// cách 2 : dùng nháy kép chứa nháy đơn
var city1 = "đà nẵng";
var info1 = "là 1 thành phố 'trung ương' của miền trung";
console.log(city1 + " " + info1);

var city2 = "hồ chí minh";
// dùng nháy đơn chưa nháy kép
var info2 = 'là thành phố có tên cũ là "sài gòn"';
var info3 = 'là thành phố có tên cũ là "sài gòn"';
console.log(city2 + " " + info2);
console.log(city2 + " " + info3);

document.write("<h1>Hello world</h1>"); // In ra thẻ mới trong html
document.write("<p>đây là 1 lệnh in ra nội dung trong màn hinh</p>");

// Bộ chọn trong js (selector)
// 2 thuộc tính
// .innerHTML
// .innerText

// gán chuỗi vào nội dung 1 thẻ html
let h1 = document.getElementById("tittle");
h1.innerText = "Hello Dev";

// gán đoạn thẻ html vào nội dung của 1 thẻ html

let sum = (a, b) => {
    return a + b;
};
console.log(sum(4, 5));
