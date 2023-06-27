import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


//REDUX
import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditar } from '../actions/productoActions';

const Producto = ({producto}) => {

    const {nombre, precio, id}= producto

    const dispach = useDispatch();

    const navigate = useNavigate();
    //CONFIRMAR SI DESEA ELIMINARLO:
    const confirmarEliminarProducto = id => {

        //Preguntar al usuario:
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No lo podrás recuperar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: 'Cancelar',
            confirmButtonText: 'Si! Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {

            dispach(borrarProductoAction(id));

            }
          })
    }

const redireccionarEdicion = producto => {
    dispach (obtenerProductoEditar(producto));
    navigate(`/productos/editar/${producto.id}`)
}

    return ( 
        <tr>
            <td>{nombre} </td>
            <td><span className='font-weight-bold'>{precio}€ </span></td>
            <td className='acciones'>
                <button 
                    type='button'
                    onClick={() => redireccionarEdicion(producto)}
                    className='btn btn-primary mr-2'
                    >Editar</button>
                <button 
                    type='button'
                    className='btn btn-danger'
                    onClick={() => confirmarEliminarProducto(id)}
                >Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Producto;