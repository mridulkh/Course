function calculate(){
	var inp=document.getElementById("mynum").value;
	
	
	for(var i=1; i<=10; i++)
	{
		document.getElementById("myt").innerHTML+=("<tr><td>"+inp+"</td><td>X</td><td>"+i+"</td><td>=</td><td>"+(inp*i)+"</td></tr>");
	}
alert('Hello');
}



