import { Outlet } from 'react-router-dom';
import Header from '../../components/header';


const MainLayout: React.FC = () => {

    return(
        <div className="main-layout">
            <Header/>
            <div className={`row`}>
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout;