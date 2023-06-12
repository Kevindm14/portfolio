interface Props {
    children: React.ReactNode;
    bg: string;
    color: string;
    className?: string;
}

export const Badge = ({ children, color, bg, className }: Props) => {
    const classes = `${className ? className+' ' : ''}`

    return (
        <span
            className={`${classes}px-3 py-1 text-sm rounded-full bg-${bg} text-${color} font-medium bg-greenLight`}>
            {children}
        </span>
    )
}