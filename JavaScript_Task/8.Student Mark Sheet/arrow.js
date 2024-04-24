
document.getElementById('btnid').addEventListener("click",add = () => {
    var first=document.getElementById('input1').value;
    var second=document.getElementById('input2').value;
    var thrid=document.getElementById('input3').value;
    var four=document.getElementById('input4').value;
    var five=document.getElementById('input5').value;
   var total=first+second+thrid+four+five;
   document.getElementById('total').innerHTML="total"+total;

})


document.getElementById('btnave').addEventListener("click",average)

var average=()=>
{
    var first=document.getElementById('input1').value;
    var second=document.getElementById('input2').value;
    var thrid=document.getElementById('input3').value;
    var four=document.getElementById('input4').value;
    var five=document.getElementById('input5').value;
    var total=(first+second+thrid+four+five)/5;
    document.getElementById('average').innerHTML="average"+total;
}
