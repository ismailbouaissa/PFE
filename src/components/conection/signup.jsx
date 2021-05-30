import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
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
import { BrowserRouter as Router, Link } from "react-router-dom";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                IBouaissa
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
// eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            email: null,
            password: null,
            confirmpassword: null,
            errors: {
                username: '',
                email: '',
                password: '',
                confirmpassword: '',
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
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;
            case 'confirmpassword':

                errors.confirmpassword =
                    value !== this.state.password
                        ? 'Passwords doesnt matchs'
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
        if (this.state.password!==this.state.confirmpassword) {
            swal({
                title:"error",
                text:"passwords doesnt matchs",
                icon: "error",
                button: "Close"});
                }
        else{
        //let user = {username:this.state.username,email:this.state.email,password:this.state.password};
        axios.post('http://localhost:8081/api/v1/auth/signup', { username: this.state.username, email: this.state.email, password: this.state.password })
            .then(
                res => {swal({
                    title:"compte creer avec success",
                    text: "Verifier votre spam",
                    icon: "success",
                    button: "Close"});})
            .catch((error) => {
                if (error.response) {
                    swal({
                        title:"error",
                        text:error.response.data.message,
                        icon: "error",
                        button: "Close"});
                } 
                else if (error.request) {
                    swal({
                        title: "error",
                        text: "something wrong",
                        icon: "error",
                        button: "Cancel"
                    });
                }

            });
        }
    }

    render() {
        const {errors} = this.state;
        const { classes } = this.props;
        return (
            <Router>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <form className={classes.form} onSubmit={this.handleSubmit} 
                        validate={values => {
                                if(!values.username)
                                {
                                    errors.username = "required";
                                }
                                if(!values.email)
                                {
                                    errors.email = "required";
                                }
                                if(!values.password)
                                {
                                    errors.password = "required";
                                }
                                if(!values.confirmpassword)
                                {
                                    errors.confirmpassword = "required";
                                }
                        }
                        }
                        
                        >
                            <div>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="username"
                                    label="username"
                                    type="text"
                                    id="username"
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
                                    name="email"
                                    label="email"
                                    type="text"
                                    id="email"
                                    autoComplete
                                    onChange={this.handleChange}
                                    noValidate
                                />
                                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
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
                                    autoComplete
                                    onChange={this.handleChange}
                                    noValidate
                                />
                                {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                            </div>
                            <div>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="confirmpassword"
                                    label="confirmpassword"
                                    type="password"
                                    id="confirmpassword"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                    noValidate
                                />
                                {errors.confirmpassword.length > 0 && <span className='error'>{errors.confirmpassword}</span>}
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
                                Sign up
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
export default withStyles(useStyles)(Signup);