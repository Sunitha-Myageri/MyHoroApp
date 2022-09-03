import { useState } from 'react';
import './HoroscopeApp.css';
import { ApiZodiacData, ApiZodiacDetails} from './ApiZodiacData';
import ZodiacDetails from './ZodiacDetails';
const HoroscopeApp=()=>
{
    const [data,setData]=useState({});
    const [toggle ,setToogle]=useState(false);
    
const SubmitOnHandler=()=>
{
    var p=document.getElementById("select");
    var q=document.getElementById("name");
    var r=document.getElementById("day");
    var s=document.getElementById("mail");
    var selected = document.querySelector('input[type=radio][name=day]:checked');
    console.log("kkk"+selected.id);
    
    var arr = ApiZodiacDetails.filter((item)=>{
        return(
            item.Zodiac.includes(p.value) 
            
       )
    })
    console.log("Arr "+arr);
    console.log("A4rrra : "+arr[0].Today.Mood);
    var obj2;

    if(selected.id==="Today")
    {
        console.log(" selected today");
        obj2=arr[0].Today;
    }
    if(selected.id.valueOf()==="Tommarow".valueOf())
    {
        console.log(" selected today");
        obj2=arr[0].Tommarow;
    }
    if(selected.id.valueOf() ==="Yesterday".valueOf())
    {
        console.log(" selected today");
        obj2=arr[0].Yesterday;
    }
   console.log("obj2  :"  +obj2);
    var obj1={select: p.value,name:q.value,day:selected.id,mail:s.value,ZodiacDetails:obj2};
    setData(obj1)
    setToogle(true);
}
    
return(
<>
<div id="maindiv">
<h1 id="h1">HOROSCOPE</h1>

<p id="p">"Intelligence is the mightiest and nothing is beyond its reach-Rig Vedas"</p>

<br></br>


<div id="zodiac">
<p id="zsign">Zodiac Sign</p>
<select id="select" name="ZodiacOption">
{
    ApiZodiacData.map((item)=>
    {
        return(<>
            <option>{item.Zodiac}</option>

        </>)
    })
}
</select>
<p id="namelabel">Name</p>

<input type="text" id="name" ></input><br></br>
<div id="day">
<input type="radio" name="day" id="Today" ></input>Today<br></br>
<input type="radio" name="day" id="Tommarow"></input>Tommarow<br></br>
<input type="radio" name="day"  id="Yesterday"></input>Yesterday<br></br><br></br>
</div>
<p id="email">E-mail</p>
<input type="text" id="mail"></input><br></br>
<div>
<input type="submit" value="Submit" id="submit" onClick={SubmitOnHandler} ></input>
</div>
</div>
{toggle?<ZodiacDetails data={data}></ZodiacDetails>:""}
</div>
</>);
}
export default HoroscopeApp;