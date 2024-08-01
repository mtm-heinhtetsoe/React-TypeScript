import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/pages/Layout";
import NoMatch from "../components/pages/NoMatch";
import { Home } from "../components/pages/Home";
import { SignUpPage } from "../components/pages/SignUpPage/SingUpPage";
import { PostListPage } from "../components/pages/PostListPage/PostListPage";
import { UserListPage } from "../components/pages/UserListPage/UserListPage";
import { PostCreatePage } from "../components/pages/PostCreatePage/PostCreatePage";
import { PostEditPage } from "../components/pages/PostCreatePage/PostEditPage";

const routes = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />}/>
                    <Route path="/postList" element={<PostListPage />}/>
                    <Route path="/postCreate" element={<PostCreatePage />}/>
                    <Route path="/postEdit/:id" element={<PostEditPage />}/>
                    <Route path="/userList" element={<UserListPage />}/>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="*" element={<NoMatch />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default routes;