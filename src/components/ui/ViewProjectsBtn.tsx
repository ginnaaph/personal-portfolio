import { useNavigate } from "react-router-dom";
import { BaseUIButton as Button } from "./base-button";

export const ViewProjectsBtn = () => {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate("/#projects")}>   
            View Projects
        </Button>
    )
}