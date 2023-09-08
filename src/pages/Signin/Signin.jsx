"use client"
import React, { useState } from 'react';
import { Grid, Button, TextField, Paper } from '@mui/material';
import "./Signin.css"
import { signin } from '../../Services/UserServices';


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
    window.location.reload();
  }

  return (
    <Grid container className='grid-container' justifyContent="center" alignItems="center" style={{ paddingTop: 50 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={1} style={{  width: "350px" }}>
          <form>
            <Grid container spacing={2}>
              <Grid item className='imgbox' xs={12}>
                <img id='image' alt='googleimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzu62FtiC9pRISshReCCvYa96pImQRg2dkcw&usqp=CAU' />
              </Grid>
              <Grid item xs={12} style={{ fontSize: 20 }}>
                <item>Login</item>
              </Grid>
              <Grid item xs={12} style={{ fontSize: 15, paddingTop: 5 }}>
                <item>Use your Google Account</item>
              </Grid>
              <Grid item xs={12}>
                <TextField label="Email"
                  name='email'
                  value={user.email}
                  onChange={setName}
                  error={checkError.EmailTrue}
                  helperText={checkError.EmailError}
                  fullWidth />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Password"
                  type="password"
                  name='password'
                  value={user.password}
                  onChange={setPassword}
                  error={checkError.PasswordTrue}
                  helperText={checkError.PasswordError}
                  fullWidth />
              </Grid>
              <Grid item className='text' xs={12}>
                <item>forgot Password?</item>
              </Grid>
              <div className="bottom">
                <Grid item id='text' xs={12}>
                  <item >Create Account</item>
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
