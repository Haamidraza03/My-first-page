function check()
{
    let username=document.getElementById('name').value;
    let useremail=document.getElementById('email').value;
    let pswd1=document.getElementById('password').value;
    let pswd2=document.getElementById('cpassword').value;


    let user={
        name:username,
        email:useremail,
        password:pswd1
    }


    if(pswd1==pswd2 && username.length>1 && useremail.length>3 && pswd1.length>3 && pswd2.length>3)
    {
        fetch('https://my-first-page-355f5-default-rtdb.firebaseio.com/user.json',
        {
            method:'post',
            body:JSON.stringify(user)
        }).then(()=>
        {
            alert('Your Data is saved successfully.Please Login.');
            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('password').value="";
            document.getElementById('cpassword').value="";
            window.location.href="./login.html"
        })      
    }
    else if(pswd1!=pswd2){
        alert('Password and Confirm password should be same.')
    }
    else{
        alert("Please fill all Details.")
    }
}