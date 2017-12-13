import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import routes from './routes';

export default class App extends Component {

    render() {
        return (
           <div>
               <nav className='nav'>
                   <div>WestSide University</div> 
                   <div className='link-wrap'>
                        <Link className='links' to='/'>Home</Link>
                        <Link className='links' to='/About'>About</Link> 
                   </div>  
               </nav>

               {routes}
            
           </div> 
        )
    }

}