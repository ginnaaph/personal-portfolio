import { HomePg } from "./home/page/HomePg";
import { ExplorationsPg } from "./explorations/pages/ExplorationsPg";
import ExplorationAdminPg from "./explorations/pages/ExplorationAdminPg";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import ExperiencePg from "./experiences/pages/ExperiencePg";
import { ContactPg } from "./contact/page/ContactPg";

export const App = () => {
    

    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePg />} />
            <Route path="/" element={<HomePg />} />
            <Route path="explorations" element={<ExplorationsPg />} />
            <Route path="explorations/admin" element={<ExplorationAdminPg />} />
            <Route path="experiences" element={<ExperiencePg />} />
            <Route path="contact" element={<ContactPg />} />
        </Routes>
        </BrowserRouter>
    );
};