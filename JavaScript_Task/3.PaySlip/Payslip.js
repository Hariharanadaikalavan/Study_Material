document.getElementById("basicSal").addEventListener("keyup", displaySalaryDetails);
function displaySalaryDetails() {
    var basic = document.getElementById("basicSal").value;
    var da  = document.getElementById("da").value = basic * (5 / 100);
    var hra = document.getElementById("hra").value = basic * (10 / 100);
    var tra = document.getElementById("travel").value = basic * (5 / 100);
    var pf = document.getElementById("pf").value = basic * (5 / 100);
    var net = document.getElementById("netSalary").value = parseFloat(da) + parseFloat(hra) + parseFloat(tra) + parseFloat(pf);
    var gross = document.getElementById("grossSalary").value = parseFloat(net) - parseFloat(pf);
}
