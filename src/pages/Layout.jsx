import { Outlet } from "react-router-dom";
import Header from '../Components/Header';

const Layout = () => {
    return (
        <>
            <Header title={'Planned planthood'} />
            <Outlet />
        </>
    )
};

export default Layout;