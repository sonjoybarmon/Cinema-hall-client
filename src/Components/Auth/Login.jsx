import { Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from "react-hook-form";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Card} from 'ui-glassmorphism'
import 'ui-glassmorphism/dist/index.css'
import './Login.scss'
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, errors, handleSubmit } = useForm();

    const [check, setCheck] = React.useState(false);

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
                                <Typography variant='h6'>
                                    Sign In
                                </Typography>
                                <div style={{margin:'10px 0'}}>
                                    <Typography variant='subtitle1'>
                                        Email
                                    </Typography>
                                    <input 
                                        name="email" 
                                        ref={register({ required: true , pattern: /\S+@\S+\.\S+/ })} 
                                        className='authInput'
                                        placeholder='Enter Your Email'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.email && "Please Enter a valid email"}
                                    </Typography>
                                    

                                    <Typography variant='subtitle1'>
                                        Password
                                    </Typography>
                                    <input 
                                        name="password" 
                                        ref={register({ required: true, minLength: 8 })} 
                                        className='authInput'
                                        placeholder='Enter Your Password'
                                    />
                                    <Typography variant='caption' className="inputError">
                                        {errors.password && "Please Enter maximun 8 number"}
                                    </Typography>
                                </div>
                                <div className='check__forgot'> 
                                    <FormControlLabel
                                        control={
                                        <Checkbox
                                            checked={check}
                                            onChange={() => setCheck(!check)}
                                            name="check"
                                            color="primary"
                                            style={{color: '#ffffff'}}
                                        />
                                        }
                                        label="Remember Me"
                                    />
                                    <Link to='/forgotPassword' className='linkStyle'>
                                        <Typography variant='subtitle2'>
                                            Forgot Password?
                                        </Typography>
                                    </Link>
                                </div>
                                       
                                <Button 
                                    variant='contained' 
                                    color='primary' 
                                    type="submit"
                                    className='authButton'
                                > 
                                    Sign In
                                </Button>

                                <Typography variant='subtitle2'>
                                Don't have account? 
                                <Link to='/signup' style={{color : '#fff', marginLeft: '6px'}}>
                                    SignUp
                                </Link>
                                </Typography>
                                {/* <input type="submit"/> */}
                            </form>

                            <div className='facebook__Google'>
                                <Typography variant='subtitle1' style={{margin: '5px'}}>
                                    Or Sign in using google or facebook
                                </Typography>

                                <div className='ButtonSection'>
                                    <Button 
                                        variant='contained'
                                        color= 'primary'
                                        className='google btn' 
                                        onClick={()=>alert('fb')}
                                    >
                                        Continue with Facebook
                                    </Button> <br />
                                    <Button 
                                        variant='contained'
                                        color= 'primary'
                                        className='facebook btn' 
                                        onClick={()=>alert('Google')}
                                    >
                                        Continue with Google
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
       </div>
    );
};

export default Login;
