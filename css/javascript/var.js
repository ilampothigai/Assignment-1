let employees=[{id:101, name:"Papa", email:"papa@gmail.com"},
{id:102, name: "pothigai",email:"pothigai@gmail.com"},
{id:103, name: "Rathika", email:"Rathika@gmail.com"}]

 

function displaydata() {
    let row=""
    for(emp of employees){
        row = row +   `<tr> <td> ${emp.id}</td>
                           <td> ${emp.name}</td>
                           <td> ${emp.email}</td>
        
        <tr/>`
    
    }
    document.getElementById('id1').innerHTML = row
}




