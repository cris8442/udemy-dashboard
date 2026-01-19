import { Outlet } from 'react-router-dom';
import Header from '../../components/header';


function MainLayout() {

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