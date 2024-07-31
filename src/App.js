import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from '~/routers';
import { DefaultLayout } from './components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((route, index) => {
                        let RecentLayout = DefaultLayout;
                        if (route.Layout) {
                            RecentLayout = route.Layout;
                        } else if (route.Layout === null) {
                            RecentLayout = Fragment;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <RecentLayout>
                                        <Page />
                                    </RecentLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
