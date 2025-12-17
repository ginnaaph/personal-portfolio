import { HomePg } from "./home/page/HomePg";
import { ExplorationsPg } from "./explorations/pages/ExplorationsPg";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { ExperiencePg } from "./experiences/pages/ExperiencePg";

export const App = () => {
    

    return (
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePg />} />
            <Route path="explorations" element={<ExplorationsPg />} />
            <Route path="experiences" element={<ExperiencePg />} />
        </Routes>
        </BrowserRouter>
    );
};