import { HomePg } from "./home/page/HomePg";
import { ExplorationsPg } from "./explorations/pages/ExplorationsPg";
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ExperiencePg from "./experiences/pages/ExperiencePg";
import { ContactPg } from "./contact/page/ContactPg";
import { AboutMePg } from "./aboutme/AboutMePg";

export const App = () => {
        const AdminPage = import.meta.env.DEV
            ? lazy(() => import("./explorations/pages/ExplorationAdminPg"))
            : null;

    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePg />} />
            <Route path="/" element={<HomePg />} />
            <Route path="explorations" element={<ExplorationsPg />} />
                        {import.meta.env.DEV && AdminPage && (
                            <Route
                                path="explorations/admin"
                                element={
                                    <Suspense fallback={<div className="p-4">Loading…</div>}>
                                        <AdminPage />
                                    </Suspense>
                                }
                            />
                        )}
            <Route path="experiences" element={<ExperiencePg />} />
            <Route path="contact" element={<ContactPg />} />
            <Route path="about me" element={<AboutMePg />} />
        </Routes>
        </BrowserRouter>
    );
};