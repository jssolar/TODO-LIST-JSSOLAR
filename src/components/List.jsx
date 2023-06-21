import { RiDeleteBack2Fill } from 'react-icons/ri';
import React from 'react';

export function List (props){
    return (
        <> 
        <li className="list-group-item d-flex justify-content-between m-1 rounded">{props.tarea} <RiDeleteBack2Fill onClick={props.deleteTarea} className='eliminar' /></li>
        </>
    )
}
