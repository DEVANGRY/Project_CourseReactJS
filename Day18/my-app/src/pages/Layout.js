import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
const Layout = () => {
    return (
        <>
            <header>Logo here | Header của trang web</header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/product">Product</Link>
                    </li>
                </ul>
            </nav>
            <div className="flexContainer">
                <div className="sidebar">
                    <h3>Sidebar</h3>
                    <p>Sidebar content</p>
                </div>

                <div className="main-content">
                    <Outlet />
                </div>
            </div>

            <footer>CopyRight @faceBook Meta</footer>
        </>
    );
};

export default Layout;
