import { FC, Fragment } from 'react';
import '../styles/loader.css'

export interface LoaderProps {
    count: number;
}

export const Loader: FC<LoaderProps> = ({count}) => {

    const list = (n: number) => {
        const res = []
        for (let i = 0; i < n; i++) {
            res.push(<li className='ghost-list-element'></li>);
        }
        return res;
    }

    return(
        <Fragment>
            <div className='loader'>
                {list(count)}
            </div>
        </Fragment>

    );
}