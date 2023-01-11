import React, { Component, useRef } from 'react';
import {useSelector,useDispatch} from "react-redux";
import { decrement, increment,setCustom } from '../redux/state/counter/CounterSlice';

const Counter = ()=> {

    
        
        const count = useSelector((state)=>state.counter.value);
        const dispatch = useDispatch();
        const myNumber =  useRef();

        return (
            <div className='card'>
                <div className='card-header bg-secondary'>
                    <h2 className='text-center text-white'>My Counter App</h2>
                </div>
                <div className='card-body'>
                    <h1>{count}</h1>
                    <div className='my-4'>
                        <button onClick={()=>{dispatch(increment())}} className='btn btn-success'>Increase</button>
                        <button onClick={()=>{dispatch(decrement())}} className='btn btn-danger ml-2'>Decrease</button>
                    </div>
                    <div className="my-4">
                        <input ref={myNumber} className='form-control w-50' type="number" />
                        <button onClick={()=>{dispatch(setCustom(myNumber.current.value))}} className='btn btn-danger mt-2 w-50'>Set Custom</button>
                    </div>
                    
                </div>
            </div>
        );
    
}

export default Counter;

