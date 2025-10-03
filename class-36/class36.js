let a,b,c
a=3
b=5
c=a*a+2*a*b+b*b





//2nd
let a1,b1,c1
a1=11
b1=7
c1=a1*a1-2*a1*b1+b1*b1


//3rd
var a2,b2,c2
a2=9
b2=5
c2=a2**3+3*a2*a2*b2+3*a2*b2*b2+b2**3

//4th
var a3,b3,c3
a3=8
b3=7
c3=a3**3-3*a3*a3*b3+3*a3*b3*b3-b3**3


//5th
let x,y,z
x=37
y=29
z=(x+y)*(x*x-2*x*y+y*y)


//6th
let x1,y1,z1
x1=22
y1=11
z1=(x1+y1)*(x1*x1+2*x1*y1+y1*y1)


//7th
let x2,y2,z2
x2=51
y2=45
z2=(x2+y2)*(x2-y2)


//8th
let e,f,h,g
e=7
f=15
h=9
g=(e*e)+(f*f)+(h*h)+2*(e*f+f*h+h*e)




//9th
let p,q,r
p=3
q=5
r=(p-q)*(p-q)+4*a*b


//10th
let p1,q1,r1
p1=7
q1=15
r1=(((a+b)/2)*((a+b)/2))-(((a-b)/2)*(a-b)/2)

//11th
let aa,bb,cc,ans1,ans2,ans,ans0
aa=7
bb=-15
cc=6
d=(bb*bb)-4*aa*cc
if( d=0){
    ans=-bb/2*aa
}
else if(d>0){
    ans1=(-bb+(Math.sqrt(d)))/(2*aa)
    ans2=(-bb-(Math.sqrt(d)))/(2*aa)
   
}
else{
ans0='imaginary number'
}


//12th
let k1,k2
k1=0.5
k2=0.9

//13


//14
let n,i,s,result1
s=0
n=100
for(i=1;i<=n;i=i+2){
    s=s+i
    result1=s
}
  


//15
let n1,i1,s1,result2
s1=0
n1=100
for(i1=2;i1<=n1;i1=i1+2){
    s1=s1+i1
    result2=s1
}
 


//16
let year,leapyear
year=1960

if((year%4==0 && year%100!=0) || (year%400===0)){
    leapyear='1960'
}
else{
    leapyear='not leap year'
}



//17
let cel,far 
cel=16
far=((9*c)+160)/5




//18
let cel1,far1 
far1=104
cel1=((5*far1)-160)/9



//19
let u,o,v,m,bignum
u=100
o=123
v=942
m=46
if(u>o && u>v && u>m){
    bignum='a'
}
else if(o>u && o>v && o>m){
    bignum='b'
}
else if(v>u && v>o && v>m){
    bignum='c'
}
else{
    bignum='d'
}




//20
let i2,fact,n2
n2=5
fact=1
for(i2=1;i2<=n2;i2++){
    fact=fact*i2
}
