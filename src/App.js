import './App.css';
import { BrowserRouter, Switch, Link } from'react-router-dom';
import Beranda from'./component/Beranda';
import Kuliner from'./component/Kuliner';
import Sejarah from'./component/Sejarah';
import Pemerintahan from'./component/Pemerintahan';
import Pariwisata from'./component/Pariwisata';

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Link path='/' exact component={Beranda}/>
     <Link path='/kuliner' component={Kuliner}/>  
     <Link path='/sejarah' component={Sejarah}/>
     <Link path='/pariwisata' component={Pariwisata}/>
     <Link path='/pemerintahan' component={Pemerintahan}/>   
   </Switch>
   </BrowserRouter>
  );
}

export default App;

