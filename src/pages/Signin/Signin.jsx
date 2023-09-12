"use client"
import React, { useState } from 'react';
import { Grid, Button, TextField, Paper } from '@mui/material';
import "./Signin.css"
import { signin } from '../../Services/UserServices';
import { Link, useNavigate } from "react-router-dom"

function Signin() {
  const [user, setUser] = useState({ email: '', password: '' })

  const [checkError, setCheckError] = useState({
    EmailTrue: false,
    EmailError: '',
    PasswordTrue: false,
    PasswordError: ''
  })
  const emailRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]+(.in)*$/;
  const passwordRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;
  const setName = (abc) => {
    setUser({ ...user, email: abc.target.value })
  }
  const setPassword = (e) => {
    setUser({ ...user, password: e.target.value })
  }
  const navigate = useNavigate();

  const Submit = async () => {
    console.log(user);
    let emailTest = emailRegex.test(user.email);
    let passwordTest = passwordRegex.test(user.password);


    if (emailTest === false) {
      setCheckError({
        EmailTrue: true,
        EmailError: 'Please Enter Valid Email'
      })
    }
    else if (passwordTest === false) {
      setCheckError({
        PasswordTrue: true,
        PasswordError: 'Please Enter Valid Password'
      })
    }

    //pass to server
    if (emailTest === true && passwordTest === true) {
      let response = await signin(user);
      console.log(response);
      localStorage.setItem("token", response.data.id);
      console.log(response.data.id);
    }
    // window.location.reload();
    navigate("/dashboard")

  }

  return (
    <Grid container className='grid-container-main' justifyContent="center" alignItems="center" style={{ margin: '20px', width: '80vw' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className='paper-container' elevation={2}>
          <form className='form'>
            <Grid container className='grid-container' spacing={2}>
              {/* <Grid item className='img-box' xs={12} sm={6}> */}
                <img id='img' alt='googleimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzu62FtiC9pRISshReCCvYa96pImQRg2dkcw&usqp=CAU' />
              {/* </Grid> */}
              <Grid item xs={12} id='text1'>
                <p>Login</p>
              </Grid>
              <Grid item xs={12} id='text2'>
                <p>Use your Google Account</p>
              </Grid>
              <Grid item xs={12}>
                <TextField id='email-text' label="Email"
                  name='email'
                  value={user.email}
                  onChange={setName}
                  error={checkError.EmailTrue}
                  helperText={checkError.EmailError}
                  fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField id='password-text' label="Password"
                  type="password"
                  name='password'
                  value={user.password}
                  onChange={setPassword}
                  error={checkError.PasswordTrue}
                  helperText={checkError.PasswordError}
                  fullWidth />
              </Grid>
              <Grid item id='text3' xs={12}>
                <item>forgot Password?</item>
              </Grid>
              <div className="bottom">
                <Grid item id='text4' xs={12}>
                  <Link to="/signup"> create account</Link>
                </Grid>
                <Grid item id='button' xs={3}>
                  <Button className='button' variant="contained" color="primary" onClick={Submit} fullWidth>
                    Login
                  </Button>
                </Grid>
              </div>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default Signin;
