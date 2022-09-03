import './HoroscopeApp.css';

import { ApiZodiacDetails } from './ApiZodiacData';
const ZodiacDetails=(props)=>
{
    const currDate=new Date().toLocaleDateString();
    return(
        <>
        <div id="details">
        <p id="yourname" style={{textAlign:'center',fontSize:'20px',color:"rgb(32, 42, 68)"}}>{props.data.name}</p>
        <p id="selectedzodiac" style={{textAlign:'center',color:"rgb(32, 42, 68)",fontSize:'40px',marginTop:'5px'}}>{props.data.select}</p>
        <p style={{textAlign:'center',color:"rgb(32, 42, 68)"}}>{currDate}</p>
        <p style={{textAlign:'center',color:"rgb(32, 42, 68)"}}>"  There comes a time when a man has to stand and fight! That time is when his friends dreams are being laughedat! And I won't let you laugh at that!-Usopp" </p>
        
        
        <div style={{textAlign:'center',marginLeft:'100px',marginTop:'80px'}}>
        <div>
        <p style={{float:'left',margin:'10px' ,color:"rgb(32, 42, 68)"}}>Compatibility:<br></br>............................
        <br></br>{props.data.ZodiacDetails.Compatibility}</p>
        </div>
        <div>
        <p style={{float:'left',margin:'10px',color:"rgb(32, 42, 68)"}}>Mood:<br></br>............<br></br>
        {props.data.ZodiacDetails.Mood}</p>
        </div>
        <div>
        <p style={{float:'left',margin:'10px',color:"rgb(32, 42, 68)"}}>Color:<br></br>............<br></br>
        {props.data.ZodiacDetails.Color}</p>
        </div>
        <div>
        <p style={{float:'left',margin:'10px',color:"rgb(32, 42, 68)"}}>LuckyTime:<br></br>......................<br></br>
        {props.data.ZodiacDetails.LuckyTime}</p>
        </div>
        <div>
        <p style={{float:'left',margin:'10px',color:"rgb(32, 42, 68)"}}>LuckyNumber:<br></br>..............................<br></br>
        {props.data.ZodiacDetails.LuckyNumber}</p>
        </div>
        </div>
 
    </div>   

        
             
        </>
    );
}
export default ZodiacDetails;