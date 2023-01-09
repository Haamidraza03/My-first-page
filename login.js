function check()
{
    let tempEmail=document.getElementById('email').value;
    let temppassword=document.getElementById('password').value;
    let tempUser;
    let users=[];

    fetch('https://my-first-page-355f5-default-rtdb.firebaseio.com/user.json').then(response=>response.json()).then(
        data=>
        {
            for(let x in data)
            {
                tempUser={
                    ...data[x]
                }
                users.push(tempUser)
            }
           

            let test=users.filter((x)=>
            {
                return x.email==tempEmail && x.password==temppassword
            })

            if(test.length==1)
            {
                alert('Login successful');
                window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                window.open("./index.html")
            }
            
           let test2 = users.filter((x)=>
            {
                return x.email==tempEmail
            })

            if(test2.length==1 && test.length!=1)
            {
                alert('Please enter correct password')
            }
            else if(test2.length!=1 && test.length!=1){
                    alert('No such email exist...Kindly signup')
                }
        }
    )
}