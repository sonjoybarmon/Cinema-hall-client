import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import {Card} from 'ui-glassmorphism'
import 'ui-glassmorphism/dist/index.css'
import './Auth.scss'

const Login = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
       <div className='authBg'>
            <Container>
                <Grid container item md={12}>
                    <Grid md={3} item></Grid>
                    <Grid md={6} item>
                        <Card className="login__Wrapper" >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="firstName" ref={register({ required: true })} />
                                {errors.firstName && "First name is required"}
                                <input name="lastName" ref={register({ required: true })} />
                                {errors.lastName && "Last name is required"}
                                <input type="submit" />
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
       </div>
    );
};

export default Login;
