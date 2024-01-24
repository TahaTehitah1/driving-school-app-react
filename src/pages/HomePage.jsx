import { BrowserRouter, Route, Routes } from "react-router-dom";
import navbarRoutes from "../routes";
import Main from "./Main";

export default function HomePage() {
    let routes = navbarRoutes.map(r => <Route key={r.name} path={r.path} element={r.component} />);
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />}>
                        {routes}
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}