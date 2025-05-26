import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/Home"));

const AppRoutes = () => {
    return (
        <Router>
            <Suspense
                fallback={
                    <main className="min-h-screen flex justify-center items-center">
                        <Loader />
                    </main>
                }
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
