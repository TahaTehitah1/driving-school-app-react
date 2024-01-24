import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import navbarRoutes from "../routes";
import Footer from "../components/Footer";
import { QuizProvider } from "../context/QuizProvider";

export default function Main() {

    return (
        <QuizProvider>
        <div className="container">
            <Navbar items={navbarRoutes} />
            <Outlet>
            </Outlet>
            <Footer />
        </div>
        </QuizProvider>
    );
}