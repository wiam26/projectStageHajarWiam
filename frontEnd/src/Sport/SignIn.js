
import {React,useState,useRef} from 'react'
import './SignUp.css';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


const SignIn = () => {
    const[email,setEmail]= useState('')
    const[password,setPassword]= useState('')

    const [data,setData] =useState([])
    const [color1,setColor1] = useState("")
    const [foc,setFoc] = useState(false)
    const [isValid1,setIsValid1] = useState(false)
  
  
  
    const handleSubmit =()=>{
      const obj ={
        "EmailAddress": email,
        "Password" :password,
      } 
        axios.post("http://127.0.0.1:8000/api/client/search",obj).then((response)=>{
          console.log(response.data.result.length  >0 ? console.log('kayn') : console.log('non makin') ); //model afficher
          
     })
      

    }
    const handlemail = (e) =>{
      if (e.length >=4 && (/(.+)@(.+){2,}\.(.+){3}/).test(e) ){
        setFoc(true)
        setEmail(e)
        setIsValid1(false)
        setColor1('success')
      }else{
        setFoc(true)
        setIsValid1(true)
        setColor1('')
      }
    }
      
    // axios.get("").then((response)=>{
    //   console.log(response.data);
    //   setData(response.data)
    // })
    // axios.post("http://127.0.0.1:8000/signUp",obj).then((response)=>{
    //   console.log(response);
    // })
  
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={7} sx={{ backgroundImage: 'url(./img/img2.jpg)', backgroundRepeat: 'no-repeat', backgroundColor: (t) => t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900], backgroundSize: 'cover', backgroundPosition: 'center',}}/>
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box sx={{my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
              <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                <VpnKeyOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                  <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus color={color1}  error={isValid1} onChange={(e)=>{handlemail(e.target.value)}} />
                  <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password"  autoComplete="current-password" onChange={(e)=>{setPassword(e.target.value)}} /> 
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
                <Button type="button" fullWidth id='btn' sx={{ mt: 3, mb: 2 }} href='' onClick={handleSubmit}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="./SignUp" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
}
export default SignIn;