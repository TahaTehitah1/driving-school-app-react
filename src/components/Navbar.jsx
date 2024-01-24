import NavbarItem from "./NavbarItem";

export default function Navbar({ items }) {
    let navItems = items.map(item => <NavbarItem key={item.name} {...item} />);

    return (
        <nav>
            {navItems}
        </nav>
    );
}