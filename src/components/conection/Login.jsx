import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css' ;
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from "axios";
import swal from 'sweetalert';
import { BrowserRouter as Router , Link , Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
function Copyright() {
  return (
  <Typography variant="body2" color="textSecondary" align="center">
  {'Copyright © '}
  <Link color="inherit" href="">
  Ibouaissa
  </Link>{' '}
  {new Date().getFullYear()}
  {'.'}
  </Typography>
  );
  }
  const useStyles = theme => ({
    paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    },
    avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    },
    form: {
    width: '100%',
    marginTop: theme.spacing(1),
    },
    submit: {
    margin: theme.spacing(3, 0, 2),
    },
    });

const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}
const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count + 1)
  );
  return count;
}

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      redirectsuccess:false,
      token:'',
      token_username:'',
      errors: {
        username: '',
        password: ''
      }
    };
  }
  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    switch (name) {
      case 'username':
        errors.username =
          value.length < 5
            ? 'username must be 5 characters long!'
            : '';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
    })
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ formValid: validateForm(this.state.errors) });
    this.setState({ errorCount: countErrors(this.state.errors) });
    console.log(this.state.username);
    console.log(this.state.password);
    axios.post('http://localhost:8081/api/v1/auth/signin' , { username: this.state.username, password: this.state.password })
    .then(res =>
      {
        localStorage.setItem("authorization",res.data.token);
        this.setState({token:localStorage.getItem("authorization")});
        console.log(this.state.token);
        const u = jwt_decode(this.state.token);
        this.setState({token_username:u.sub});
        console.log(this.state.token_username);
        this.setState({redirectsuccess:true});
      swal({
          title: "bienvenue",
          text: "authentification avec success",
          icon: "success",
          button: "Cancel",
      })
    }).catch((error) => {
      if (error.response) {
        swal({
          title: "login ou mot de passe incorrect",
          text: error.response.data.message,
          icon: "error",
          button: "Cancel",
        });   
      } else if (error.request) {
              swal({
                  title: "error",
                  text: "something wrong",
                  icon: "error",
                  button: "Cancel",
                }); 
          }
          
      });      
}

  render() {
    const { errors } = this.state;
    const { classes } = this.props ;
    const redirectsuccess = this.state.redirectsuccess ;
    if(redirectsuccess === true)
    {
      return <Redirect to={{pathname:'/admindashboard',state:{token_username:this.state.token_username,token:this.state.token}}} />
    }
    return (
      <Router>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
      Sign in
      </Typography>
      <form className={classes.form} noValidate onSubmit={this.handleSubmit}>
      <div>
      <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="email"
      label="email"
      type="text"
      id="email"
      autoComplete
      onChange={this.handleChange}
      noValidate
      />
      {errors.username.length > 0 && <span className='error'>{errors.username}</span>}
      </div>
      <div>
      <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      name="password"
      label="Password"
      type="password"
      id="password"
      autoComplete="current-password"
      onChange={this.handleChange}
      noValidate
      />
      {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
      </div>
      <FormControlLabel
      control={<Checkbox value="remember" color="primary" />}
      label="Remember me"
      />
      <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
      >
      Sign In
      </Button>
      <Grid container>
      <Grid item xs>
      <Link href="signup" variant="body2">
      Forgot password?
      </Link>
      </Grid>
      <Grid item>
      </Grid>
      </Grid>
      </form>
      </div>
      <Box mt={8}>
      <Copyright />
      </Box>
      </Container>
      </Router>
    );
  }
}
export default withStyles(useStyles)(Login);