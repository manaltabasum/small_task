function fun(f){
   
    return (5/9) * (f-32);
}
let cel = fun(232)

function fun1(cc){
   
    return (cc*9/5)+32;
}
let far = fun1(22)



function fun3(f1){
   
    return ((f1-32)*5/9 )+273.15;
}
let kel = fun3(104)


function fun4(c1){
   
    return c1+273.15;
}
let cel1 = fun4(104)



function fun5(a,b,c){
    return "a+b+c"+'=' + (a+b+c)+" ; "+
    "a-b-c= "+ (a-b-c)+" ; "+
    "abc= "+(a*b*c) + " ; " +
    "a**b=" + (a**b)+" ; " +
    "b/c="+(b/c)

    
}
let add=fun5(6,4,8)