import './navi.css';
import { useNavigate } from 'react-router-dom';

const Navi = () => {
    const navigate = useNavigate();

    const GoToLogin = () => {
        navigate('/login');
    };
    return (
        <div className="navi">
            <div className="navi-in">
                <div className="navi-in-one">
                    <h1>Sports Management System</h1>
                </div>
                <div className="navi-in-two">
                    <button onClick={GoToLogin}>
                        Get Started
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default Navi;
