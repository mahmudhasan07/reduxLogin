import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    return (
        <section className='border-2 w-fit mx-auto my-10 p-2 rounded-lg'>
            <h1 className='text-center text-2xl my-3'>LogIn First</h1>

            <form action="">
                <div className=''>
                    <label htmlFor="">Email</label> <br />
                    <input type="text" className='w-56 p-1 rounded-xl border-2' />
                </div>
                <div className=''>
                    <label htmlFor="">Password</label> <br />
                    <input type="password" className='w-56 p-1 rounded-xl border-2' />
                </div>
                <div className='text-center'>
                    <button className='btn my-2'>Log In</button>
                </div>
                <div className='text-end text-blue-700'>
                    <NavLink to={'/registration'} className='font-semibold'>New User???</NavLink>
                </div>
            </form>

        </section>
    );
};

export default Login;