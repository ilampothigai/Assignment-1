function form_Validate() {
    let name = document.getElementById('ename').value
    //alert(name)
    if (name == "" && name.length <= 0) {
        document.getElementById('ename_Message').innerHTML = "Please Enter User Name"
        //alert("Pls Enter Name")
    }

    let email = document.getElementById('eemail').value;
    if (email == "") {
        document.getElementById('eemail').innerHTML = "Pleae Enter Email Id"
    //alert("pls Enter Email Id")
    }

    let address = document.getElementById('eaddress').value;
    if (address == "" && address.length<=0) {
        document.getElementById('span3').innerHTML = "Pleae Enter Email Id"
    //alert("pls Enter Email Id")
    }


}