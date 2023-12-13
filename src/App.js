import {Route, Routes} from 'react-router-dom'
import Home from './components/routes/home/home';
import Shop from './components/routes/home/shop';
import Navigation from './components/routes/navigation/navigation'
import SignIn from './components/routes/sign-in/sign-in';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home />}/> 
        <Route path='shop' element={<Shop />}/> 
        <Route path='signIn' element={<SignIn />}/> 
      </Route>
    </Routes>
  )
};

export default App;
