import { IoMdDownload } from "react-icons/io";
import { BaseUIButton as Button } from "./base-button";

export const DLResumeBttn = () => {
    return (
          <a
      href="public/Gina_Pham_Resume.pdf"
      download
      aria-label="Download resume"
      className="inline-block"
    >
            <Button>
                <IoMdDownload  /> Resume
            </Button>
        </a>
    );
};