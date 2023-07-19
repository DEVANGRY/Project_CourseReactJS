import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Product from "./pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Demo = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Khai báo layout của ứng dụng và các router được dùng trong ứng dụng này . Tương ứng 
                    với path nào thì trả về component trong prop có tên là element = ?  */}
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="product" element={<Product />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            Demo
        </>
    );
};

export default Demo;
