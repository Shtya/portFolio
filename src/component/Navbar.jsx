import React ,{useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showBar, setshowBar] = useState(false)
  
  return (
    <div className='Header'>
    <div><Link to="/" className="logo">Ahmed  Shtya</Link></div>

        {<ul style={showBar === true  ?{ right : "0"} :{ right : "-40%"} }  >
            <li onClick={_=>setshowBar(!showBar)} ><a href="/" >Home</a></li>
            <li onClick={_=>setshowBar(!showBar)} ><a href="#About" >About</a></li>
            <li onClick={_=>setshowBar(!showBar)} ><a href="#Skills" >Skills</a></li>
            <li onClick={_=>setshowBar(!showBar)} ><a href="#Portfolio" >Portfolio</a></li>
      </ul>}
      
    <div className="toggle" onClick={_=>setshowBar(!showBar)}><i className="fa-solid fa-bars"></i></div>
  </div>
  )
}

export default Navbar