import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { ErrorMessage } from './pages/ErrorPage';
import { ERROR_404_MESSAGE } from './constans/messages';
import { ShipsListPage } from './pages/ShipsListPage'



export const Router = () => {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ShipsListPage />} />                
                <Route path="*" element={<ErrorMessage status={404} message={ERROR_404_MESSAGE}/>} />
            </Routes>
        </BrowserRouter>
    )

}