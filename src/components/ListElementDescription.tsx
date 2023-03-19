import { FC } from 'react';
import { Ship } from '../models/ship';
import '../styles/list.css'

export interface ListElementProps {
    ship: [string, Ship];
    localization: string;
    isActive: boolean;
}

export const ListElementDescription: FC<ListElementProps> = ({ship, localization, isActive}) => {

    return (

        <div className={isActive ? 'list--link__description' : 'hide'}>
            <span><img src={'https://glossary-wows-global.gcdn.co/icons/' + ship[1].icons.medium} alt='ship' loading='lazy'></img></span>
            <div className='list--link__details'>
                <span>Description</span>
                <div>{ship[1].localization.description[localization]}</div>
            </div>
            <div className='list--link__tags'>
                <span>Features</span>
                {ship[1].tags.map(tag => <span>{tag}</span>)}
            </div>
            
        </div>
    )
}
