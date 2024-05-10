window.addEventListener('load', ()=>{
   var tbody =  document.getElementById('tbody');
    var users = JSON.parse(localStorage.getItem('users'));

    users.forEach((user)=>{
        var row = document.createElement('tr');
        row.classList='tablerow';
        var template = `
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.gender}</td>
        <td>${user.address}</td>
        <td><button onClick="dltItem(this)" class="btn btn-danger btn-sm">X</button></td>
    </tr>
        `;

        row.innerHTML = template;
        tbody.appendChild(row);
        
    });
});

document.getElementById('refresh').addEventListener('click',()=>{
    window.location.reload();
});

function dltItem(el)
{
   var str =  el.parentElement.parentElement.innerHTML.split('<td>');
   var len = str[2].split('</td>');
    var emailId = len[0];

    var storageData = JSON.parse(window.localStorage.getItem('users'));
    storageData.forEach((data,index)=>{
        if(data.email == emailId)
        {
            storageData.splice(index,1);
            
        }
    });
    console.log(storageData);
    window.localStorage.setItem('users',JSON.stringify(storageData));
    window.location.reload();

}