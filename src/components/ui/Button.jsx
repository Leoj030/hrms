const variants = {
    primary: "bg-[#5BB98B] text-white hover:bg-[#5BB98B]/75",
    secondary: "bg-[#dde8e1] text-[#30a46c] hover:bg-[#b2bbb5]/75",
    danger: "bg-red-300 hover:bg-red-400",
    outline: "border-2 border-[#5BB98B] text-[#5BB98B] hover:bg-[#5BB98B]/25",
    ghost: "text-[#5BB98B] hover:bg-[#5BB98B]/25",
};

export default function Button({
    children,
    variant = "primary",
    disabled = false,
    className = "",
    ...props
}) {
    const baseStyles =
        "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
    const variantStyles = variants[variant] || variants.primary;

    return (
        <button
            className={`cursor-pointer ${baseStyles} ${variantStyles} ${className}`}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    );
}
