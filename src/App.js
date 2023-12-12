import {Route, Routes} from 'react-router-dom'
import Home from './components/routes/home/home';
import Prueba from './components/routes/home/prueba';
import Navigation from './components/routes/navigation/navigation'




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}> 
        <Route index element={<Home />}/> 
        <Route path='prueba' element={<Prueba />}/> 
      </Route>
    </Routes>
  )
};

export default App;
