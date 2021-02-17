import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/Config'

export const Home = ({ user }) => {


    return (
        <div className='wrapper'>
            <Navbar user={user} />
            <Products />
        </div>
    )
}