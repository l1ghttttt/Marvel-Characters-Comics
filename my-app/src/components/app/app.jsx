import './app.css'
import AppHeader from "../app-header/app-header.jsx";
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Main = lazy(() => import('../pages/mainPage'))
const Comics = lazy(() => import('../pages/comicsPage'))
const ComicsDetailPage = lazy(() => import('../pages/comicsDetailPage'))

function App() {
    return (
        <Router>
            <div className="App">
                <AppHeader/>
                <Suspense>
                    <Routes>

                        <Route path="*" element={<Main/>} />

                        <Route path="/comics" element={<Comics/>} />

                        <Route path="/comics/:comicsId" element={<ComicsDetailPage/>} />

                    </Routes>
                </Suspense>
            </div>
        </Router>
    )
}

export default App;