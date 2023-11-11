import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Rings from './Rings';
import ViewAll from './ViewAll';
import BeltLoop from './BeltLoop';

function Menu( props ) {
    return (
        <Routes>
            <Route path="/about-us" element={<About />} />
            <Route path='/' element={<Home />}/>
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/category/view_all' element={<ViewAll />} />
            <Route path='/category/belt_loop' element={<BeltLoop />}/>
            <Route path='/category/rings' element={<Rings />}/>
        </Routes>
    )

}

export default Menu