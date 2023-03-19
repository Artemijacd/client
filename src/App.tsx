import { FC, Fragment } from 'react';
import { Router } from './routes';

export const App: FC = () => {

  const router = Router();

  return (
    <Fragment>
      {router}
    </Fragment>
  )
}