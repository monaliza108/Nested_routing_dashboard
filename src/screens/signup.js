import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
function SignUp(props) {

    const [name, setName]=useState("");
    const [mail, setMail]=useState("");
    const navigate = useNavigate();

const signupclick=()=> {
        let userData = {
            name,
            mail
        };
        console.log(userData);
        navigate(`/profile/${mail}`, { state: userData });
      };
      
    return (

        <div>
            {/* <form> */}
            
                 <Grid md="9"><Box sx={{ padding: 2 }}>
                 <TextField variant="outlined"
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Enter user name"
                  value={name}
                  >User name</TextField>   </Box>          

                  <Box sx={{ padding: 2 }}>
                  <TextField variant="outlined"
                  onChange={(e)=> setMail(e.target.value)}
                  placeholder="Enter user mail"
                  value={mail}
                  >User mail</TextField>    </Box>  

                 <Box sx={{ padding: 2 }}>
                  <Button variant="contained"  color="primary" 
                  onClick={signupclick} >Sign up</Button></Box>
   
               </Grid>

                  {/* </form> */}
                  </div>
); }
export default SignUp;
