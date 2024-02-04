const IconArrowUp = ({ isActive }) => {
    return (
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
                d="m1 6 4-4 4 4"
                stroke={isActive ? "#fff" : "#4661E6"}
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
};

export default IconArrowUp;
