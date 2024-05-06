function check()
{
 var username=document.getElementById("firstName").value;
 var password=document.getElementById("lastName").value;
  var validate=(username=="rsp" || password=="000")?"Sucessully login enjoy our service":"please check the user name and password respectively";
  alert(validate);
  // Print the empty character & Remove the value
  localStorage.setItem("use",username)
  localStorage.setItem("pas",password)
  document.getElementById("firstName").value="";
  document.getElementById("lastName").value="";
}
