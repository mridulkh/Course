

function add(){
	var a=document.getElementById("num1").value;
	var b=document.getElementById("num2").value;	
	var c=parseFloat(a)+parseFloat(b);
	document.getElementById("result").innerHTML=c;
	
}

function sub(){
	var a=document.getElementById("num1").value;
	var b=document.getElementById("num2").value;
	var c=parseFloat(a)-parseFloat(b);
	document.getElementById("result").innerHTML=c;
}

function mul(){
	var a=document.getElementById("num1").value;
	var b=document.getElementById("num2").value;
	var c=parseFloat(a)*parseFloat(b);
	document.getElementById("result").innerHTML=c;
}

function div(){
	try{
		var a=document.getElementById("num1").value;
		var b=document.getElementById("num2").value;
		if(parseInt(b)==0){
			throw 'Cannot divide by 0';
		}
		var c=parseFloat(a)/parseFloat(b);

		document.getElementById("result").innerHTML=c;		
	}catch(e){
		console.log(e)
	}	
}