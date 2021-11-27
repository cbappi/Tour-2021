import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './AddService.css';



const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://frightful-alien-95040.herokuapp.com/addservice', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        
        <div className="add-service">
            <h2>Please Add a Services</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("service_name", { required: true, maxLength: 400 })} placeholder="offering service" />

                <input {...register("description", { required: true, maxLength: 400 })} placeholder="describe offer" />

                <input {...register("facilities", { required: true, maxLength: 400 })} placeholder="drscribe facilities" />

                <input type="number" {...register("price")} placeholder="Price" />

                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};
<Footer></Footer>
export default AddService;