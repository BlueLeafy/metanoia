function Card({ children, className = '' }) {
    return (
        <div className={`rounded-2xl shadow-2xl shadow-neutral-400 ${className}`}>
            {children}
        </div>
    );
};

export default Card;