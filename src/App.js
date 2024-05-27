import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import React from 'react';
import { Home,Checkout,Cart,Payment,Shoe,Cloth,Laptop,Phone,GenderSelection,LaptopInformation,PhoneInformation,ClothShoeAndGeneralInformation,SearchResultCheckout,Login,Unavailable,User,ForgotPassword} from './AllFilles';
function App() {
  return (
    <div className="App">
        <Router>
        <Routes>
          <Route path='/' index element={<Home/>} />
          <Route path='/signup' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/user' element={<User/>} />
          <Route path='/unavailable' element={<Unavailable/>} />
          <Route path='/forgotpassword' element={<ForgotPassword/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/gender' element={<GenderSelection/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/cloth' element={<Cloth/>} />
          <Route path='/laptop' element={<Laptop/>} />
          <Route path='/phone' element={<Phone/>} />
          <Route path='/shoe' element={<Shoe/>} />
          <Route path='/laptopcheckout/:id' element={<LaptopInformation/>} />
          <Route path='/phonecheckout/:id' element={<PhoneInformation/>} />
          <Route path='/shoecheckout/:id' element={<ClothShoeAndGeneralInformation/>} />
          <Route path='/clothcheckout/:id' element={<ClothShoeAndGeneralInformation/>} />
          <Route path='/generalcheckout/:id' element={<ClothShoeAndGeneralInformation/>} />
          <Route path='/searchresultcheckout/:id' element={<SearchResultCheckout/>} />
          <Route path='/*' element={<Unavailable/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
