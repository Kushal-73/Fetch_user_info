const user=document.querySelector('#userID');
let msg=document.querySelector('.msg');
const myForm=document.querySelector('#my-form');
let output='';
let count=0;
myForm.addEventListener('submit',userID);
function userID(e){
    e.preventDefault();
    let u=user.value;  
    
      
    fetch(`https://api.github.com/users/${u}`)
    .then(function(res){
        if(res.status==404){
            count++;
            msg.classList.add('error');
            msg.innerHTML='PLEASE ENTER CORRECT USER I.D.!';
           
            setTimeout(()=>{
                msg.innerHTML='';
                msg.classList.remove('error');
            },3000);
        }    
        else if( res.status==403){
            count++;
            msg.classList.add('error');
            msg.innerHTML='FORBIDDEN ACCESS!';
           
            setTimeout(()=>{
                msg.innerHTML='';
                msg.classList.remove('error');
            },3000);
        }  
         
        else if (res.status==200){
           
        return res.json(); 

        }
        
    })
    .then(function(data){
        if(count==0){
        output= `
             <div class="list-group mb-3 ml-4">
              <img src=${data.avatar_url} alt=" no image " loading="lazy" align="center"/>          
              <h3><u>${data.login}</u></h3>
              <h3>BIO :  ${data.bio}<h3>
              <h3>USER ID :  ${data.id}</h3>
              <h3>FOLLOWERS :  ${data.followers}</h3>
              <h3>FOLLOWING :  ${data.following}</h3>            
              <h3>PUBLIC REPOSITORIES :  ${data.public_repos}</h3>
              
             <div>
        `;        
        }
        else{
            count=0;
        }
        });
        document.getElementById('output').innerHTML=output;
    }
   

    

    
   


         