
import Navbar from './AppNavbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="app-container">
            <Navbar />
            <Outlet></Outlet>
            
        </div>
    );
};

export default Layout;
