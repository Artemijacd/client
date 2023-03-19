import { FC, useState } from 'react';
import { Ship } from '../models/ship';
import '../styles/list.css'
import { ListElementDescription } from './ListElementDescription';

export interface ListElementProps {
    ship: [string, Ship];
    localization: string;
}

export const ListElement: FC<ListElementProps> = ({ship, localization}) => {
    const [isActive, setIsActive] = useState(false);

    const clickHander = (e: React.MouseEvent<HTMLLIElement>) => {
        setIsActive(current => !current);
    }

    return (
        <li key={ship[0]} className={`list--link ${isActive ? 'grey' : ''}`} onClick={clickHander}>
        <div className= 'list--link__header'>
            <span><img src={'https://glossary-wows-global.gcdn.co/icons/' + ship[1].icons.contour} alt='ship' loading='lazy'></img></span>
            <span>{ship[1].localization.mark[localization]}</span>
            <span>{ship[1].level}</span>
            <span>{ship[1].nation}</span> 
        </div>
        <ListElementDescription ship={ship} isActive={isActive} localization={localization}/>
    </li>
    )
}
