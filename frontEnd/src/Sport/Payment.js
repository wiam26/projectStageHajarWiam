import * as React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import './SignUp.css';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DemoContainer,DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PaymentIcon from '@mui/icons-material/Payment';
import { useNavigate } from "react-router-dom";
import {useState} from 'react';
import axios from 'axios';

const theme = createTheme();
const PaymentDetails = () => {
  const route=useNavigate()
  const [cardOwner,setcardOwner]=useState('')
  const [numCard,setnumCard]=useState('')
  const [dateExpiry,setdateExpiry]=useState('')
  const [cvv,setcvv]=useState('')
  const [isValid1,setIsValid1] = useState(false)
  const [isValid2,setIsValid2] = useState(false)
  const [isValid3,setIsValid3] = useState(false)
  const [isValid4,setIsValid4] = useState(false)
  const [color1,setColor1] = useState("")
  const [color2,setColor2] = useState("")
  const [color3,setColor3] = useState("")
  const [color4,setColor4] = useState("")
  const [foc,setFoc] = useState(false)

  const handlcardOwner = (e) =>{
    if ( e.length >=8){
      setFoc(true)
      setcardOwner(e)
      setIsValid1(false)
      setColor1('success')
    }else{
      setFoc(true)
      setIsValid1(true)
      setColor1('')
    }
  }
  const handlnumCard = (e) =>{
    if ( e.length >=8 ){
      setFoc(true)
      setnumCard(e)
      setIsValid2(false)
      setColor2('success')
    }else{
      setFoc(true)
      setIsValid2(true)
      setColor2('')
    }
  }
  const handldateExpiry = (e) =>{
    if ( e.length >=4 ){
      setFoc(true)
      setdateExpiry(e)
      setIsValid3(false)
      setColor3('success')
    }else{
      setFoc(true)
      setIsValid3(true)
      setColor3('')
    }
  }
  const handlcvv = (e) =>{
    if ( e.length >=4 ){
      setFoc(true)
      setcvv(e)
      setIsValid4(false)
      setColor4('success')
    }else{
      setFoc(true)
      setIsValid4(true)
      setColor4('')
    }
  }
  const handleSubmit =()=>{
    const obj ={
      "cardOwner":cardOwner,
      "numCard":numCard,
      "dateExpiry":dateExpiry,
      "cvv":cvv
  
  }
  console.log('data =>',obj);
   axios.post("http://127.0.0.1:8000/api/PaymentDetails",obj).then((response)=>{
     route('/@@@')
    
    
    })
  }


  return(
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Container component="main" maxWidth="xs">
      <CssBaseline />
              <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
                <Avatar sx={{ m: 1, bgcolor: 'green' }}>
                  <PaymentIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Payment Details
                </Typography>
                <Box component="form" noValidate sx={{ mt: 3 }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <TextField required id="cardOwner" label="Name on card" fullWidth autoComplete="cardOwner" variant="standard" name='cardOwner' focused={foc} color={color1}  error={isValid1} onChange={(e)=>{ handlcardOwner(e.target.value)} }/>
                    </Grid>
                    <Grid item xs={12} >
                        <TextField required id="numCard" label="Card number" fullWidth autoComplete="numCard" variant="standard" name='numCard'  focused={foc} color={color2}  error={isValid2} onChange={(e)=>{handlnumCard(e.target.value)} }/>
                    </Grid>
                    <Grid item xs={12}  sm={6} style={{marginTop:'5px'}}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker',]}>
                        <DemoItem name='dateExpiry'>
                        <DatePicker label='Expiry date' views={['month','year']}focused={foc} color={color3}  error={isValid3} onChange={(e)=>{handldateExpiry (e.target.value)} } />
                        </DemoItem>
                    </DemoContainer>
                    </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12}  sm={6}>
                        <TextField required id="cvv" label="CVV" helperText="Last three digits on signature strip" fullWidth autoComplete="cvv" variant="standard" name='cvv' focused={foc} color={color4}  error={isValid4} onChange={(e)=>{handlcvv (e.target.value)} }/>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel control={<Checkbox color="secondary" name="saveCard" value="yes" />} label="Remember credit card details for next time" />
                    </Grid>
                  </Grid>
                  <Button type="button" id='btn' fullWidth sx={{ mt: 3, mb: 2 }} onClick={handleSubmit}>
                    Payment
                  </Button>
                </Box>
              </Box>    
      </Container>
      <Footer/>
    </ThemeProvider>
  )
}
export default PaymentDetails;