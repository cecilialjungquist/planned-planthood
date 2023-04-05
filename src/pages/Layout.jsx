import { Outlet, Link } from "react-router-dom";
import Header from '../Components/Header';
import Home from "./Home";

const Layout = () => {
    return (
        <>
            <Header title={'Planned planthood'} />
            <main>
                <Home />
            </main>
            <Outlet />
        </>
    )
};

export default Layout;