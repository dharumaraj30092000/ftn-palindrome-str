let name="amma";
function palindrome(data){
	let str="";
	for(let i=data.length-1;i>=0;i--){
	str+=data[i];
    }
	return str;
}
var result=palindrome(name);
if(result===name){
	console.log("this is palindrome");
}
else{
	console.log("this is not palindrome");
}