import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
    <div className='container mt-5'>
        <h1> 
          <Link to={'/'} className='text-light'>CRUD - REACT, REDUX, REST API & Axios</Link>
        </h1>
    </div>
    <Link 
      yo={'/productos/nuevo'}
      className='btn btn-danger nuevo-post d-block d-md-inline-block'
      >Agregar Producto &#43;</Link>
  </nav>
  );
}

export default Header;
