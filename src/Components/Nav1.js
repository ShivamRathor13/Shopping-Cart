import React from 'react'
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Cart from "./Cart";
import Men from './Men'
import Women from './Women'
import Grocery from './Grocery'
import Fruit from './Fruit'
import Electronics from './Electronics'
import Kitchen from './Kitchen'
import Home from "./Home"
import Dealpage from './Dealpage';
import { useCart } from 'react-use-cart';




const Nav1 = () => {
   const {totalItems,}=useCart();


 
   
    return (

        <div>
            <div className='Nav'>
                <nav class="nav1">
                    <ul>
                        <li><Link to="/"><button className='logobtn'><img src="/Images/Logo/perfect2.png" alt="dwded" /> </button></Link></li>
                        <li><input type="text" placeholder="search any product here"  /></li>
                        <li><Link to="Cart"><button type="button" class="cartbtn"><img src="./Images/Logo/cart3.png" alt="/" className='cartimg'/>Cart<sup className='cartquantity'>{totalItems}</sup></button></Link></li>
                        <li><Link to="Login"><button type="submit" class="login" ><img src="./Images/Logo/login3.png" alt="/" className='loginimg'/>Login</button></Link> </li>
                    </ul>                  
                </nav>
                <nav className='nav2'>
                    <ul>
                        <li><Link to="Men"><button>Men</button></Link></li>
                        <li><Link to="Women"><button>women</button></Link></li>
                        <li><Link to="Grocery"><button>Grocery</button></Link></li>
                        <li><Link to="Fruit"><button>Fruit</button></Link></li>
                        <li><Link to="Electronics"><button>Electronics</button></Link></li>
                        <li><Link to="Kitchen"><button>Kitchen</button></Link></li>
                    </ul>
                </nav>
            </div>
     

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/Men" element={<Men />} />
                <Route path="/Women" element={<Women />} />
                <Route path="/Grocery" element={<Grocery />} />
                <Route path="/Fruit" element={<Fruit />} />
                <Route path="/Electronics" element={<Electronics />} />
                <Route path="/Kitchen" element={<Kitchen />} />
                <Route path="/Dealpage" element={<Dealpage/>}/>
            </Routes>



        </div>

    )
}

export default Nav1
