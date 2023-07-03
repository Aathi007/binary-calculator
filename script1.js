let bd1=document.getElementById('container-inp-1').value;
let bd2=document.getElementById('container-inp-2').value;
let bdadd1=document.querySelector('#container-inp-1');
let bdadd2=document.querySelector('#container-inp-2');
let bindec=document.querySelector('#b2d-inp-2');
let decbin=document.querySelector('#b2d-inp-3');
let btodem=document.getElementById('b2d-inp-2').value;
let detob=document.getElementById('b2d-inp-3').value;
let cal1=document.getElementById('b1s');
let cal2=document.getElementById('b2s');
let cal3=document.getElementById('b3s');
let reset1=document.getElementById('b1r');
let reset2=document.getElementById('b2r');
let reset3=document.getElementById('b3r');
cal1.addEventListener("click",()=>{
const bdadd1val=bdadd1.value.trim();
const bdadd2val=bdadd2.value.trim();
let bd1=document.getElementById('container-inp-1').value;
let fact1=valilatefunc(bd1);
let m=0,n=0;
if(bdadd1val=="")
{
    seterror(bdadd1,"1 value is empty")
}
else if(fact1==1)
{
  seterror(bdadd1,"enter the valid number in value1");
}
else{
      m=1;
    setsuccess(bdadd1);
  } 
  let bd2=document.getElementById('container-inp-2').value;
   let fact2=valilatefunc(bd2);

  if(bdadd2val=="")
  {
    repeatfunc(bdadd2);
   seterror(bdadd2,"2 value is empty")
  }
  else if(fact2==1)
  {
    repeatfunc(bdadd2);
    seterror(bdadd2,"enter the valid number in value2")
  }
  else
  {
     n=1;
     setsuccess(bdadd2);
    }
    let str="";
    if(m==1&&n==1)
    {
      let i=bd1.length-1;
      let j=bd1.length-1;
      let carry=0;
      while(i>=0&&j>=0)  
      {
        let sum=carry;
         sum+=parseInt(bd1[i])+parseInt(bd2[j]);
         
         if(sum==2)
         {
           str="0"+str;
           carry=1;
          }
          else if(sum==3)
          {
          
         str="1"+str;
         carry=1;
       
        }
        else if(sum==0)
        {
          str="0"+str;
          carry=0;
        }
        else{
          str="1"+str;
          carry=0;
        }
        i--;
        j--;

    }
    if(carry==1)
    {
      str="1"+str;
    }
    finaloutput(bdadd1,str);

  
  }

})
cal2.addEventListener("click",()=>{
  const  bindecval=bindec.value.trim();
  let btodem=document.getElementById('b2d-inp-2').value;
  fact1=valilatefunc(btodem);

  if(bindecval=="")
  {
    seterror(bindec,"value is empty")
  }
  else if(fact1==1)
{
  seterror(bindec,"enter the valid binary number in value1");
}
  else
  {
    setsuccess(bindec);
    let decimalvalue=decnumber(btodem);
    finaloutput(bindec,decimalvalue);
    
}
  
})
cal3.addEventListener("click",()=>{
  let decbinval=decbin.value.trim();
  let detob=document.getElementById('b2d-inp-3').value;
  let fact1=valilatefunc1(detob);
  if(decbinval=="")
  {
    seterror(decbin,"value is empty");
  }
  else if(fact1==1)
  {
    seterror(decbin,"enter the valid decimal number");
  }
  else
  {
    setsuccess(decbin);
    let binarynumber=decimaltobin(detob);
    finaloutput(decbin,binarynumber);
  }
})
function seterror(element,message)
{
   const inputfun1=element.parentElement;
   const inputfun2=inputfun1.querySelector('.error1');
   inputfun2.innerText=message;
   inputfun2.classList.add("error");
   inputfun2.classList.add("error1");
   inputfun2.classList.remove("success");
}
function setsuccess(element)
{
   const inputfun1=element.parentElement;
   const inputfun2=inputfun1.querySelector(".error1");
   inputfun2.innerText="";
   inputfun2.classList.add("success");
   inputfun2.classList.remove("1error");
}
reset1.addEventListener("click",()=>
{
document.getElementById('container-inp-1').value="";
document.getElementById('container-inp-2').value="";
  repeatfunc(bdadd1);
  repeatfunc1(bdadd1);
  repeatfunc1(bdadd2);
})
reset2.addEventListener("click",()=>{
  document.getElementById('b2d-inp-2').value="";
  repeatfunc(bindec);
  repeatfunc1(bindec);
})
reset3.addEventListener('click',()=>{
  document.getElementById('b2d-inp-3').value="";
  repeatfunc(decbin);
  repeatfunc1(decbin);
})
function finaloutput(element,message)
{
  let input1fun1=element.parentElement.parentElement;
  let input2fun2=input1fun1.querySelector('.fout');
  input2fun2.classList.add('find')
  input2fun2.innerText=message;
}
function valilatefunc(value)
{
  for(let i=0;i<value.length;i++)
  {
    if(value[i]=='0'||value[i]=='1')
    {
      if(i==(value.length)-1)
      {
        return 0;
      }
    }
    else{
      return 1;
    }

   }
}
function valilatefunc1(value)
{
  for(let i=0;i<value.length;i++)
  {
   if(value[i]>='0'&&value[i]<='9')
    {
      if(i==value.length-1)
      {
        return 0;
      }
    }
    else
    {
      return 1;
    }
  }
}
function repeatfunc(element)
{
  let input1fun1=element.parentElement.parentElement;
  let input2fun2=input1fun1.querySelector('.fout');
  input2fun2.classList.remove('find')
  input2fun2.innerText="";
}
function decnumber(value)
{
  let k=0,m=0;
  for(let i=value.length-1;i>=0;i--)
   {
      m+=value[i]*(Math.pow(2,k));
      k++;
    }
    return m;
}
function decimaltobin(value)
{
  let str="";
  while(value>0)
  {
    let m1=value%2;
    
    str=m1+str;
    value=parseInt(value/2);
    
  }
  return str;

}
function repeatfunc1(element)
{
  let input1fun1=element.parentElement;
  let input2fun2=input1fun1.querySelector('.error1');
  input2fun2.classList.remove('error')
  input2fun2.innerText="";
}