import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { AuthProvider } from "./contexts/FakeAuthContext.jsx";

import ProtectedRoute from "./pages/ProtectedRoute";
import CityList from "./components/City/CityList";
import CountryList from "./components/Country/CountryList";
import City from "./components/City/City";
import Form from "./components/Form/Form";
import SpinnerFullPage from "./components/Spinner/SpinnerFullPage";

// import Homepage from "./pages/Homepage/Homepage";
// import Products from "./pages/Product/Products";
// import Pricing from "./pages/Product/Pricing";
// import Login from "./pages/Login/Login";
// import AppLayout from "./pages/AppLayout/AppLayout";
// import PageNotFound from "./pages/PageNotFound";

const Homepage = lazy(()=> import("./pages/Homepage/Homepage"))
const Products = lazy(()=> import("./pages/Product/Products"))
const Pricing = lazy(()=> import("./pages/Product/Pricing"))
const Login= lazy(()=> import("./pages/Login/Login"))
const AppLayout= lazy(()=> import("./pages/AppLayout/AppLayout"))
const PageNotFound= lazy(()=> import("./pages/PageNotFound"))


const App = () => {
    return (
        <AuthProvider>
            <CitiesProvider>
                <BrowserRouter>
                  <Suspense fallback={<SpinnerFullPage/>}>
                    <Routes>
                        <Route index element={<Homepage />} />
                        <Route path="products" element={<Products />} />
                        <Route path="pricing" element={<Pricing />} />
                        <Route path="login" element={<Login />} />
                        <Route
                            path="app"
                            element={
                                <ProtectedRoute>
                                    <AppLayout />
                                </ProtectedRoute>
                            }
                        >
                            <Route
                                index
                                element={<Navigate replace to="cities" />}
                            />
                            <Route path="cities" element={<CityList />} />
                            <Route path="cities/:id" element={<City />} />
                            <Route path="countries" element={<CountryList />} />
                            <Route path="form" element={<Form />} />
                        </Route>
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                    </Suspense>
                </BrowserRouter>
            </CitiesProvider>
        </AuthProvider>
    );
};

export default App;
