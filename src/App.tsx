import { useEffect, useState } from "react";
import { HomePg } from "./home/page/HomePg";
import { ExplorationsPg } from "./explorations/pages/ExplorationsPg";

export const App = () => {
    const [route, setRoute] = useState<string>(
        typeof window !== "undefined" && window.location.hash
            ? window.location.hash
            : "#home"
    );

    useEffect(() => {
        const onHashChange = () => {
            setRoute(window.location.hash || "#home");
        };
        window.addEventListener("hashchange", onHashChange);
        return () => window.removeEventListener("hashchange", onHashChange);
    }, []);

    return (
        <div>
            {route === "#explorations" ? <ExplorationsPg /> : <HomePg />}
        </div>
    );
};