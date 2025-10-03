
//1 no
let mult=13,ans="",i;
for(i=1;i<=10;i++ ) { 
    ans=ans+ "13  x  " + i + " = " + (mult*i) +"<br>"
    
}
document.getElementById('para1').innerHTML=ans;



//1 no.
let mult1=17, ans1="",a=1;

while(a<=10){
    ans1= ans1 + "17 x "  + a + " = " + (mult1*a) +"<br>"
    a=a+1;
}
document.getElementById('para2').innerHTML=ans1;




//2 no.
let b=1,sum=0;
for(b=1;b<=100;b=b+1) {
    sum = sum + b;

}
document.getElementById('para3').innerHTML=sum;




//3 no.
let c,sum1;
c=1;
sum1=0;
while(c<=50){
    sum1 = sum1+ (c*c);
    c=c+1;
}
document.getElementById('para4').innerHTML=sum1;





//4 no.
let fa,f;
fa=1;
f=1;
while(f<=10){
    fa=fa*f;
    f=f+1;
}
document.getElementById('para5').innerHTML=fa;



//5no.
let a1,a2=0;
for(a1=1;a1<=99;a1=a1+2){
    a2=a2+(a1**3);
}
document.getElementById('para6').innerHTML=a2;


//6 no.
let p,sum2=0;
p=0;
while(p<=10){
    sum2= sum2+ Math.pow(3, p);
    p=p+1;
}
document.getElementById('para7').innerHTML=sum2;