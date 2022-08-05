import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants/common';
import { LoginApi } from '../../services/user';
import { setUserInfoAction } from '../../store/actions/user.action';

export default function Login() {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [state, setSate] = useState({
        taiKhoan: '',
        matKhau: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setSate({
            ...state,
            [name]: value,
        });
    };



    const handleSubmit = async (event) => {

        event.preventDefault();

        const result = await LoginApi(state);

        localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content));
        dispatch(setUserInfoAction(result.data.content));
        navigate('/');


        // console.log(result);
    };
    return (

        <form
            onSubmit={handleSubmit}
            className='w-25 mx-auto my-5'>
            <div className="form-group">
                <label >Tai Khoan</label>
                <input

                    name='taiKhoan'
                    onChange={handleChange}
                    type="text" className="form-control" />


            </div>

            <div className="form-group">
                <label >Mat Khau</label>
                <input
                    name='matKhau'
                    onChange={handleChange}
                    type="text" className="form-control" />

            </div>

            <button className="btn btn-success">
                Login
            </button>
        </form>);
}
