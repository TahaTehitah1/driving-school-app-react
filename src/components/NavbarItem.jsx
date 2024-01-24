import { Link } from "react-router-dom";

export default function NavbarItem({ name, path }) {
    return (
        <Link to={path}>
            {name}
        </Link>
        
    );
}