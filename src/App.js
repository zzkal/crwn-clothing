import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Home from './components/routes/home/home.component';
import Navigation from './components/navigation/navigation.component';
import Authentication from './components/routes/authentication/Authentication.component';
import Shop from './components/routes/shop/shop.component';
import CheckOut from './components/routes/checkout/checkout.component';
import { checkUserSession } from './components/store/user/user.action';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path='shop/*' element={<Shop />}></Route>
        <Route path='auth' element={<Authentication />}></Route>
        <Route path='checkout' element={<CheckOut />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
