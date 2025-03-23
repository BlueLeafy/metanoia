function Card({ children, className = '' }) {
    return (
        <div className={`rounded-md shadow-2xl shadow-neutral-400 ${className}`}>
            {children}
        </div>
    );
};

export default Card;