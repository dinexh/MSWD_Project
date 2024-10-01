import "./nav.css"
import { MdOutlineSportsBasketball } from "react-icons/md";
const Nav = () => {
    return ( 
        <div className="nav-component">
            <div className="nav-in">
                <div className="nav-in-one">
                    <MdOutlineSportsBasketball className="navIcon" />
                    <h1>Sports Management System</h1>
                </div>
                <div className="nav-in-two">
                    <button>
                        Get Started
                    </button>
                </div>
            </div>
        </div>
     );
}
 
export default Nav;