import { useNavigate } from "react-router-dom";

export const ViewProjectsBtn = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate("/#projects")} className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm border border-main text-main hover:bg-neutral-800">
            View Projects
        </button>
    )
}