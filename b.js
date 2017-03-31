function done(){
	var n=document.getElementById("name").value;
	var k=document.getElementById("fname").value;
	var radio = document.getElementById('male');

// for (var i = 0, length = radios.length; i < length; i++)
// {
//     if (radios[i].checked) {
//     var j=radios[i].value;
//         break;
//     }
// }
	var l=document.getElementById("date").value;
	alert(n+(radio.checked?' s/o ':" d/o ")+k+" DOB: "+l);

}