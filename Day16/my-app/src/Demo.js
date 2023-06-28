let Demo = () => {
    return (
        // Lỗi ko biên dịch được khi return
        // về nhiều thẻ HTML ngàng bằng nhau

        // Fix lỗi nãy có 2 cách :
        // Cách 1 : bao Tất cả các thẻ html trong 1 thẻ mẹ
        // trong react sử dụng từ khóa keywod class để tạo lớp
        // mà vô tình trùng thuộc tính của thẻ css

        // Cách 2 : Đặt các thẻ html trong fradment <></>
        // Ưu điểm của cách 2 hơn cách 1 là ko tạo ra 1 thẻ thừa
        // trong trường hợp cần
        <>
            <h1>ReactJS(Viết tắt của JS SML)</h1>
            <p>Reactjs JSX cho phép viết HTML trong React</p>
        </>
    );
};
export default Demo;
