import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/Layout";
import NoMatch from "../components/pages/NoMatch";
import { Home } from "../components/pages/Home";
import { SignUpPage } from "../components/pages/SignUpPage/SingUpPage";

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default routes;