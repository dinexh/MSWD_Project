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
                    <h1> <span>Sports Management System</span></h1>
                </div>
                <div className="navi-in-two">
                    <div className="navi-in-two-in">
                        <h2>Live Score</h2>
                        <h2>Event Management</h2>
                        <h2>All Events</h2>
                        <h2>Players Stats</h2>
                    </div>
                </div>
                <div className="navi-in-three">
                    <button onClick={GoToLogin}>
                        Get Started
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default Navi;
