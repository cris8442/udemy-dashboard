import type { CardProps } from '../../classes/card-props';
import './Card.scss';

const Card: React.FC<CardProps> = ({children}: CardProps) => {

    return(
        <div className="card">
            {children}
        </div>
    )
}

export default Card;