import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import './MainLayout.scss';


const MainLayout: React.FC = () => {

    return(
        <div className="main-layout">
            <Header/>
            <div className="dashboard-container">
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout;