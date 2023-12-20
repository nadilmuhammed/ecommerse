import React from 'react'
import { Link } from 'react-router-dom'
import ViewProduct from './ViewProduct'

function Main() {
  return (
    <div>
        <Link to="/add">
            <button>Add a product</button>
        </Link>
        <ViewProduct/>
    </div>
  )
}

export default Main