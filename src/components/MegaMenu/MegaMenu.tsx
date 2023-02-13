import { Link } from "react-router-dom";
import './MegaMenu.css';

const MegaMenu = () => {
    return (
        <ul>
            <li>
                <Link to="/">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/mybookslist">
                    My Books
                </Link>
            </li>
        </ul>
    )

}

export default MegaMenu;