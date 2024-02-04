import "@components/css/ButtonSm.css";
import { useState } from "react";
import IconArrowUp from "@assets/IconArrowUp.jsx";

const ButtonSm = ({ variant, color, text }) => {
    const [isActive, setIsActive] = useState(false);
    const buttonClass = `button-sm ${color} ${variant}`;

    return (
        <div
            className={buttonClass}
            onMouseDown={() => setIsActive(!isActive)}
            onMouseUp={() => setIsActive(!isActive)}
            style={
                (variant = "upvote" && {
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "10px 12px",
                    gap: "6px",
                })
            }
        >
            <IconArrowUp isActive={isActive} />
            <p>{text}</p>
        </div>
    );
};

export default ButtonSm;
