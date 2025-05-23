
// here i am gonna cachce element first before manipulating them

// all elemtnes in dom are pass by reference
//id is the fastest bcz id is unique

// now gonna use something called tag
const display=document.getElementById("display");

 display.readOnly=true;




const number_buttons=document.getElementsByClassName("cal-btn-num");

const plus_op=document.getElementsByClassName("cal-btn-op-plus")[0];
const divide_op=document.getElementsByClassName("cal-btn-op-divide")[0];
const multiply_op=document.getElementsByClassName("cal-btn-op-multiply")[0];
const minus_op=document.getElementsByClassName("cal-btn-op-minus")[0];
const equal_op=document.getElementById("equal");

// clear
const clear_op=document.getElementById("clear");

//

let number=0;
let op=null;
let num_cache1=0;
let num_cache2=0;
let result=null;

//now going to add event listeners to all of them
for(let i=0;i<number_buttons.length;i++)
{
  number_buttons[i].addEventListener("click",(e)=>
{
  number=number_buttons[i].innerText;
  if(display.value==='+' ||display.value==='-'||display.value==='/'||display.value==='*' &&num_cache1!==0)
  {
    display.value=null;
  }
  display.value=`${display.value}${number}`; //basically concatinating string using
  // string interpolation
});
}




//now i need to handle operators behaviour

// + operator
plus_op.addEventListener("click",(e)=>
{
  op=null;
  op="+";
  if(display.value!=='+' && num_cache1===0)
  {
   num_cache1=display.value;
  display.value=plus_op.innerText;
  }
  else{
   // operatorCheck(num_cache1,num_cache2,result,op);

   if( num_cache1!==0 && num_cache2!==0 && result!==0)
{
  display.value=op;
  
  num_cache1=result;
  num_cache2=0;
  result=null;
}
  }
  

 

});

// -
minus_op.addEventListener("click",(e)=>
{
  op=null;
  op="-";
  if(display.value!=='-' && num_cache1===0)
  {
   num_cache1=display.value;
  display.value=minus_op.innerText;
  }
   else{
   // operatorCheck(num_cache1,num_cache2,result,op);

   if( num_cache1!==0 && num_cache2!==0 && result!==0)
{
  display.value=op;
  
  num_cache1=result;
  num_cache2=0;
  result=null;
}
   }
 

});

// /
divide_op.addEventListener("click",(e)=>
{
  op=null;
  op="/";
  if(display.value!=='/' && num_cache1===0)
  {
   num_cache1=display.value;
  display.value=divide_op.innerText;
  }
   else{
   // operatorCheck(num_cache1,num_cache2,result,op);

   if( num_cache1!==0 && num_cache2!==0 && result!==0)
{
  display.value=op;
  
  num_cache1=result;
  num_cache2=0;
  result=null;
}
   }
 

});

// *
multiply_op.addEventListener("click",(e)=>
{
  op=null;
  op="*";
  if(display.value!=='*' && num_cache1===0)
  {
   num_cache1=display.value;
  display.value=multiply_op.innerText;
  }

   else{
   // operatorCheck(num_cache1,num_cache2,result,op);

   if( num_cache1!==0 && num_cache2!==0 && result!==0)
{
  display.value=op;
  
  num_cache1=result;
  num_cache2=0;
  result=null;
}
  }
 

});


// clear screen opertation

clear_op.addEventListener("click",(e)=>
{
  // complete reset 
  num_cache1=0; num_cache2=0; display.value=null; result=0;
})



// equal operator calculation and result displaying here

equal_op.addEventListener("click",(e)=>
{
  // alert("num chace 2 = "+num_cache2);
  num_cache2=display.value;
 
 
  if(num_cache1!==0  && num_cache2!==0 &&op!==null)
  {
    if (op === '+')
       {
        result = Number(num_cache1) + Number(num_cache2);
       }
       else  if (op === '-')
       {
        result = Number(num_cache1) - Number(num_cache2);
       }
       else  if (op === '/')
       {
        result = Number(num_cache1) / Number(num_cache2);
       }

       else  if (op === '*')
       {
        result = Number(num_cache1) * Number(num_cache2);
       }

       if(result!==null)
       {
        // alert(`${num_cache1}  ${num_cache2}`);
        display.value=result;
        
        
       }
    
   
  }

  
 

});

/// javascript primivite types by value and not by reference (when paramters passed in function)
// so they are not gonna change bro!!!

// Here, c1, c2, and res are copies of the values you passed in.
// You are modifying local variables inside the function, not the originals.

// JavaScript passes primitive types (like numbers, strings, booleans) by value.

function operatorCheck(c1,c2,res,op)
  {
    
if( c1!==0 && c2!==0 && res!==0)
{
  display.value=op;
  
  c1=res;
  c2=0;
  res=null;
}
  }

