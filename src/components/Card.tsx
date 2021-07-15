import './styles/Card.css';

interface LayoutProps{
    children: React.ReactNode,
    className: string
}

const Card : React.FC<LayoutProps> = (props) => {
    const classes = "card " + props.className;
    return <div className={classes}>{props.children}</div>
}

export default Card;