import AboutUs from "./components/AboutUs";
import Home from "./components/Home";

let navbarRoutes = [
    {
        name: "Home",
        path: "/home",
        component: <Home />
    },
    {
        name: "About Us",
        path: "/about-us",
        component: <AboutUs />
    }
];

export default navbarRoutes;