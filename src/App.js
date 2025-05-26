import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Splash from './Popup/Splash';
import Login from './Login/login';
import Login2 from './Login/Login2';
import Kakao from './Login/Kakao';
import Service from './Agree/Service';
import See from './Agree/See';
import See2 from './Agree/See2';
import See3 from './Agree/See3';
import See4 from './Agree/See4';
import Sign from './Login/Sign';
import List from './Home/List';
import Heartlist from './Home/Heartlist';
import Detail from './Home/Detail';
import Buy from './Home/Buy';
import Payment from './Home/Payment';
import Basket from './Home/Basket';
import Mypage from './MyPage/Mypage';
import Delivery from './MyPage/Delivery';
import Cancle from './MyPage/Cancle';
import Seeshopping from './MyPage/Seeshopping';
import Question from './MyPage/Question';
import axios from 'axios'

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Splash/>}/>
          <Route path='/Login/login' element={<Login/>}/>
          <Route path='/login2' element={<Login2/>}/>
          <Route path='/Login/Kakao' element={<Kakao />} />
          <Route path='/Login/Sign' element={<Sign/>}/>
          <Route path='/Agree/Service' element={<Service/>}/>
          <Route path='/Agree/See' element={<See/>}/>
          <Route path='/Agree/See2' element={<See2/>}/>
          <Route path='/Agree/See3' element={<See3/>}/>
          <Route path='/Agree/See4' element={<See4/>}/>
          <Route path='/Home/List' element={<List/>}/>
          <Route path='/Home/Heartlist' element={<Heartlist/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
          <Route path="/search" element={<List />} />
          <Route path='/Home/Buy' element={<Buy/>}/>
          <Route path='/Home/Payment' element={<Payment/>}/>
          <Route path='/Home/Basket' element={<Basket/>}/>
          <Route path='/Mypage/Mypage' element={<Mypage/>}/>
          <Route path='/Mypage/Delivery' element={<Delivery/>}/>
          <Route path='/Mypage/Cancle' element={<Cancle/>}/>
          <Route path='/Mypage/Seeshopping' element={<Seeshopping/>}/>
          <Route path='/Mypage/Question' element={<Question/>}/>
        </Routes>
      </Router>
  );
}

export default App;