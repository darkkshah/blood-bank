import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Login from '../screen/login';
import SignUp from '../screen/signUp';
import Protect from '../screen/protected';
import Home from '../screen/home';
import Acceptor from '../screen/acceptor';
import Donor from '../screen/donor';

export default function Router() {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/' element={<Protect Screen={Home} />}/>
        <Route path='/acceptor' element={<Acceptor/>}/>
        <Route path='/donor' element={<Donor/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}
