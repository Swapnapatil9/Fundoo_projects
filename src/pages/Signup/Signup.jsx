import React, { useState } from 'react'
import { Grid, Button, TextField } from '@mui/material';
import "../Signup/Signup.css"
import { signup } from '../../Services/UserServices';

function Signup() {
  const [user, setUser] = useState({ firstName: '', lastName: '', username: '', password: '', confirmpassword: '', service: 'advance' })

  const setFirstName = (e) => {
    setUser({ ...user, firstName: e.target.value })
}
const setLastName = (e) => {
    setUser({ ...user, lastName: e.target.value })
}
const setEmail=(e)=>{
    setUser({...user,email:e.target.value})   
}
const setPassword = (e) => {
    setUser({ ...user, password: e.target.value })
}
const setConfirmPassword = (e) => {
    setUser({ ...user, confirmpassword: e.target.value })
}

  const NameRegex = /^[A-Z]{1}[a-z]{2,}$/;
    const UserNameRegex = /^[a-z]{3,}(.[0-9a-z]*)?@([a-z]){2,}.[a-z]*$/;
    const passRegex = /^.*(?=.{8,})(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/;

  // const handleLogin = () => {
  //   console.log('User:', user);
  // };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setUser((prevUser) => ({
  //     ...prevUser,
  //     [name]: value
  //   }));
  // };

  

  const [checkError, setInputError] = useState({
    UserFirstName: false,
    UserFirstNameMsg: '',
    UserLastName: false,
    UserLastNameErrorMsg: '',
    UserEmail: false,
    UserEmailErrorMsg: '',
    UserPassword: false,
    UserPasswordErrorMsg: '',
    UserConfirmPassword: false,
    UserConfirmPasswordErrorMsg: ''
  })

  const Submit = async () => {
    console.log("user" + user.firstName + user.lastName + user.email + user.password + user.confirmpassword)

    let FirstnameTest = NameRegex.test(user.firstName);
    let LastnameTest = NameRegex.test(user.lastName);
    let UserTest = UserNameRegex.test(user.email);
    let passTest1 = passRegex.test(user.password);

    if (FirstnameTest === false) {
      setInputError((prevState) => ({
       
        UserFirstName: true,
        UserFirstNameMsg: "Enter correct First Name",
      }));
    } else {
      setInputError((prevState) => ({
       
        UserFirstName: false,
        UserFirstNameMsg: "",
      }));
    }

    if (LastnameTest === false) {
      setInputError((prevState) => ({
        ...prevState,
        UserLastName: true,
        UserLastNameErrorMsg: "Enter correct Last Name",

      }));
      alert('Enter correct Last Name')
    } else {
      setInputError((prevState) => ({
        ...prevState,
        UserLastName: false,
        UserLastNameErrorMsg: "",
      }));
    }

    if (UserTest === false) {
      setInputError((prevState) => ({
        ...prevState,
        UserEmail: true,
        UserEmailErrorMsg: "Enter correct Username",
      }));
    } else {
      setInputError((prevState) => ({
        ...prevState,
        UserEmail: false,
        UserEmailErrorMsg: "",
      }));
    }

    if (passTest1 === false) {
      setInputError((prevState) => ({
        ...prevState,
        UserPassword: true,
        UserPasswordErrorMsg: "Enter correct Password",
      }));
    } else {
      setInputError((prevState) => ({
        ...prevState,
        UserPassword: false,
        UserPasswordErrorMsg: "",
      }));
    }

    if (FirstnameTest === true && LastnameTest === true && UserTest === true && passTest1 === true) {
      let response = await signup(user)
      console.log(response);
    }
  }


  return (
    <Grid className='main-container'>
      <Grid className='inside-main' xs={12} sm={6} md={4}>
        <form>
          <Grid container>
            <Grid item xs={12} className='imgbox'>
              <img id='image' alt='googleimage' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzu62FtiC9pRISshReCCvYa96pImQRg2dkcw&usqp=CAU' />
            </Grid>
            <p className='top-text'>Create your Google Account</p>

            <Grid container className='txtfields' spacing={3} style={{ marginBottom: '20px' }}>
              <Grid item xs={12} sm={6}>
                <TextField label="First Name*"
                  value={user.firstName}
                  name='firstname'
                  // onChange={handleInputChange}
                  onChange={setFirstName}
                  error={checkError.UserFirstName}
                  helperText={checkError.UserFirstNameMsg}
                  fullWidth size='small' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Last Name*"
                  value={user.lastName}
                  name='lastname'
                  // onChange={handleInputChange}
                  onChange={setLastName}
                  error={checkError.UserLastName}
                  helperText={checkError.UserLastNameErrorMsg}
                  fullWidth size='small' />
              </Grid>
            </Grid>
            <Grid item xs={12} spacing={3}>
              <TextField label="Email*"
                value={user.email}
                name='email'
                // onChange={handleInputChange}
                onChange={setEmail}
                error={checkError.UserEmail}
                helperText={checkError.UserEmailErrorMsg}
                fullWidth size='small' />
            </Grid>
            <Grid item xs={12} style={{ fontSize: 12, textAlign: 'left'}}>
              you can use letters,numbers & periods
            </Grid>
            <p className='middle-text'>Use my current email instead</p>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Password*"
                  type='password'
                  value={user.password}
                  name='password'
                  // onChange={handleInputChange}
                  onChange={setPassword}
                  error={checkError.UserPassword}
                  helperText={checkError.UserPasswordErrorMsg}
                  fullWidth size='small' />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Confirm*"
                  value={user.confirm}
                  name='confirmpassword'
                  // onChange={handleInputChange}
                  onChange={setConfirmPassword}
                  fullWidth size='small' />
              </Grid>
            </Grid>
            <p id='middtxt'>Use 8 or more characters with a mix of letters,numbers & symbols</p>
            <p><input className='checkbx' type='checkbox' />
              <label htmlFor="input">Show Password</label></p>

            <Grid container>
              <Grid item xs={6} id="signin-txt">
                <p>Sign in insted </p>
              </Grid>
              <Grid item xs={6} style={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={Submit} color="primary">
                  Next
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>

        <Grid item className='image-container' xs={12} sm={6} md={4}>
          <img id='image1' src="https://vickeryhill.com/wp-content/uploads/2022/06/google-one-account.jpg" alt="imggoogle" />
          <p id='right-text'>One account. All of Google working for you.</p>
        </Grid>
      </Grid>
    </Grid>
  );
}


export default Signup
