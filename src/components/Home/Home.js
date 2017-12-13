import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <div className="box">
        <Link to='/ClassList/MATH1010'><button className='btn'>Math 1010</button></Link>
        <Link to='/ClassList/ENG2010'><button className='btn'>English 2010</button></Link>
        <Link to='/ClassList/BIO2020'><button className='btn'>Biology 2020</button></Link>
        {console.log(this)}
      </div>
    );
  }
}
