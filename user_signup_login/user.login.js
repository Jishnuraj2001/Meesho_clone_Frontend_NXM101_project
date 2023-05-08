let login_btn=document.querySelector("#user-box form");
login_btn.addEventListener("submit",(event)=>{
    event.preventDefault();
    let obj={};
    let all_input_tags=document.querySelectorAll("#user-box input");
    for(let i=0;i<all_input_tags.length-1;i++){
        obj[all_input_tags[i].id]=all_input_tags[i].value;
    }
    loginFunction(obj);
    
})

let loginFunction=async(obj)=>{
    try {
        let login_req=await fetch(`https://dead-puce-frog-tutu.cyclic.app/user/login`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(obj)
        })
        if(login_req.ok){
            let data=await login_req.json();
            sessionStorage.setItem("userkey",data.token);
            alert("Login successful");
            window.location.href="../landing_page/land.html";
        }else{
            alert("Wrong Credentials");
        }
    } catch (error) {
        console.log(error.message);
        alert("Wrong Credentials");
    }
}