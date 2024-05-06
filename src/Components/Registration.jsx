import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createUser, logOutUser, setValue } from './Redux/CounterSlice';
import { ContextAPI } from './Redux/FindUser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {

    // const {user, loading} = useContext(ContextAPI)

    const { error, success } = useSelector((state) => state.firebase)
    // useEffect(() => {
    // }, [data]);
    useEffect(() => {
        // console.log();
        if (error) {
            console.log(error);
            toast.error(error)
        }
        if (success) {
            // alert("Successfully registration")
            toast.success("Registration Success")
            // dispatch(logOutUser())
        }
    }, [error, success]);

    const dispatch = useDispatch()

    const handleRegistration = (e) => {
        e.preventDefault()
        const data = e.target
        const email = data.email.value
        const password = data.password.value
        // console.log(email,password);
        dispatch(setValue())
        dispatch(createUser({ email, password }))
    }

    return (
        <section className='border-2 w-fit mx-auto my-10 p-2 rounded-lg'>
            <h1 className='text-center text-2xl my-3'>Registration First</h1>

            <form onSubmit={handleRegistration} action="">
                <div className=''>
                    <label htmlFor="">Email</label> <br />
                    <input name='email' type="text" className='w-56 p-1 rounded-xl border-2' />
                </div>
                <div className=''>
                    <label htmlFor="">Password</label> <br />
                    <input name='password' type="password" className='w-56 p-1 rounded-xl border-2' />
                </div>
                <div className='text-center'>
                    <button className='btn my-2'>Registration</button>
                </div>
                <div className='text-end text-blue-700'>
                    <NavLink to={'/login'} className='font-semibold'>Already User???</NavLink>
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Registration;