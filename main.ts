document.getElementById('resumeform')?.addEventListener('Submit',function(event){
    Event this.addEventListener


const nameelement =document.getElementById('name') as HTMLInputElement
const emailelement =document.getElementById('email') as HTMLInputElement
const phoneelement =document.getElementById('phone') as HTMLInputElement
const educationelement =document.getElementById('education') as HTMLInputElement
const experiancelement =document.getElementById('experiance') as HTMLInputElement
const skillselement =document.getElementById('skills') as HTMLInputElement



if( nameelement && emailelement && phoneelement && educationelement && experiancelement && skillselement )
    const name =nameelement.value;
const email =emailelement.value;
 const phone =phoneelement.value;
 const education =educationelement.value;
 const experiance =experiancelement.value;
 const skills =skillselement.value;

const resumeoutput
//<h2> resume </h2>
//<p> <strong>Name:<strong/> $(name) </p>
//<p> <strong>email:<strong/> $(email) </p>
//(phone) 

 //education 
 // {education} 
 //{experiance} 
 //{skills} 
 const resumeoutputelement =document.getElementById('resumeoutput')
 if (resumeoutputelement){
    resumeoutputelement.innerHTML=resumeoutput}
    else {
        console.error('the resumeoutputelements are missings')

    }
 }{
    console.error('one or more output element are missing')
    }
