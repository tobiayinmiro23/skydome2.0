import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import LoaderComponent from './components/Loader';

const Login = lazy(() => import('./pages/Login'))
const Loader = lazy(() => import('./components/Loader'))
const GenderSelection = lazy(() => import('./components/GenderSelection'))
const Home = lazy(() => import('./pages/Home'))
const Checkout = lazy(() => import('./pages/Checkout'))
const Cart = lazy(() => import('./pages/Cart'))
const LaptopInformation = lazy(() => import('./pages/LaptopInformation'))
const PhoneInformation = lazy(() => import('./pages/PhoneInformation'))
const ClothShoeAndGeneralInformation = lazy(() => import('./pages/ClothShoeAndGeneralInformation'))
const SearchResultCheckout = lazy(() => import('./pages/SearchResultCheckout'))
const User = lazy(() => import('./pages/User'))
const Unavailable = lazy(() => import('./pages/Unavailable'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Payment = lazy(() => import('./pages/Payment'))
const Cloth = lazy(() => import('./pages/Cloth'))
const Laptop = lazy(() => import('./pages/Laptop'))
const Phone = lazy(() => import('./pages/Phone'))
const Shoe = lazy(() => import('./pages/Shoe'))
// import { Home, Checkout, Cart, Payment, Shoe, Cloth, Laptop, Phone, GenderSelection, LaptopInformation, PhoneInformation, ClothShoeAndGeneralInformation, SearchResultCheckout, Login, Unavailable, User, ForgotPassword } from './AllFilles';
function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div className='pt-[14rem]'><LoaderComponent /></div>}>
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/signup' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/user' element={<User />} />
            <Route path='/unavailable' element={<Unavailable />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/gender' element={<GenderSelection />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/cloth' element={<Cloth />} />
            <Route path='/laptop' element={<Laptop />} />
            <Route path='/phone' element={<Phone />} />
            <Route path='/shoe' element={<Shoe />} />
            <Route path='/laptopcheckout/:id' element={<LaptopInformation />} />
            <Route path='/phonecheckout/:id' element={<PhoneInformation />} />
            <Route path='/shoecheckout/:id' element={<ClothShoeAndGeneralInformation />} />
            <Route path='/clothcheckout/:id' element={<ClothShoeAndGeneralInformation />} />
            <Route path='/generalcheckout/:id' element={<ClothShoeAndGeneralInformation />} />
            <Route path='/searchresultcheckout/:id' element={<SearchResultCheckout />} />
            <Route path='/*' element={<Unavailable />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
