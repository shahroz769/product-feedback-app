import "@components/css/ButtonLg.css";

const ButtonLg = ({ variant, color, text }) => {
    const buttonClass = `button-lg ${color}`;

    return (
        <div className={buttonClass}>
            <p>{text}</p>
        </div>
    );
};

export default ButtonLg;
