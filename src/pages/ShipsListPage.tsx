import { FC, Fragment, useEffect, useState, useCallback, ReactNode } from 'react';
import { Data, Nullable, ResponseStatusError } from '../models/common';
import { getShipsList } from '../api/ships';
import { ERROR_404_MESSAGE, ERROR_OTHER, SHIPS_LIST_EMPTY_MESSAGE } from '../constans/messages';
import { Loader } from '../components/Loader';
import { ListElement } from '../components/ListElement';
import { ErrorMessage } from './ErrorPage';

const localization = 'ru';
const loaderCount = 20;


export const ShipsListPage: FC = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Nullable<ReactNode>>(null);
  const [ships, setShips] = useState<Data>();

  const handleError = useCallback((error: ResponseStatusError) => {
		setIsLoading(false);
		if (error.status === 404) {
			setError(<ErrorMessage status={404} message={ERROR_404_MESSAGE}/>);
		} else {
			setError(<ErrorMessage status={error.status} message={ERROR_OTHER}/>);
		}
	}, []);

  useEffect(() => {
    setIsLoading(true);
    getShipsList()
    .then(setShips)
    .then(() => setIsLoading(false))
    .catch(handleError)
  }, [handleError]);



  const renderCountryList = () => {
    if (error) {
			return error;
		} else if (ships) {
      const list = Object.entries(ships.data).map((ship) => (
          <ListElement ship={ship} localization={localization}/>
			))
			return (
				<Fragment>
					<h2 className='list--title'>Ships</h2>
            <li className='list--header'>
              <span></span>
              <span>Name</span>
              <span>Level</span>
              <span>Country</span>
            </li>
            {list}
				</Fragment>
			)
    } else {
			return <p>{SHIPS_LIST_EMPTY_MESSAGE}</p>
		}
  }

  return (
    <Fragment>
			{isLoading ? <Loader count={loaderCount}/> : renderCountryList() }
    </Fragment>
  )
}