getGender = function()
{
    if(document.getElementById('r1').checked)
    {
        return 'male';
    }
    else{
        return 'female';
    }
}


document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();

var name = document.getElementById('fullName').value;
var email = document.getElementById('email');
var address = document.getElementById('address');
var gender = getGender();
var users = [];
var debug;

    if(address.value==='')
    {
        document.getElementById('warn').innerText = 'Required';
    }
    else{
        if(window.localStorage.getItem('users')==null)
    {
        const newUser = {
                name:name,
                email: email.value,
                gender:gender,
                address:address.value
        };
        users.push(newUser);
        debug = 'if';
        window.localStorage.setItem('users',JSON.stringify(users));
    }
    else{
       
        users = JSON.parse(window.localStorage.getItem('users'));
        
        const newUser = {
            name:name,
            email: email.value,
            gender:gender,
            address:address.value

    };
    users.push(newUser);
        debug = 'else';
        window.localStorage.setItem('users',JSON.stringify(users));
    }
    
    console.log(name);



    name = '';
    email.value = '';
    address.value = '';
    
    }
    

});

