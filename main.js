
var a=1;
var b=prompt("Enter a table you want");
var n=prompt("Enter a last value");
var c;

document.write("Mulitiplication "+b+"th Table<br><br>");


while(a<=n){
	c=a*b;
	document.write(a+"x"+b+"="+c+"<br>");
	a++;
}