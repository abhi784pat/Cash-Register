const billamount=document.querySelector("#bill")
const cashgiven=document.querySelector("#cash-given")
const checkbutton=document.querySelector("#check")
const message=document.querySelector("#error")
const noofnotes=document.querySelectorAll(".change")

const availableNotes=[2000,500,100,20,10,5,1];
checkbutton.addEventListener('click',function checkReaminigAmount(){
    //hideMessage() 
    if(billamount.value>0)
    {
    //  if(cashgiven.value===billamount.value)
    //  {
    //      ShowMessage("Thank you For giving Exact Change")
    //  }
     if(cashgiven.value>=billamount.value)
     {
         const amountleft=cashgiven.value-billamount.value
         {
             calChange(amountleft);
         }
     }
     else
     {
         ShowMessage("Nothing In This World Come Free My Friend")
     }
    }
    else
    {
        ShowMessage("Invalid Bill Amount")
    }
        
})

function calChange(amountleft)
{
    for(let i=0;i<availableNotes.length;i++)
    {
        const noofnotesremain=Math.trunc(amountleft/availableNotes[i])
        amountleft=amountleft%availableNotes[i];
        noofnotes[i].innerText=noofnotesremain;
    }
}
// function hideMessage() {
//     message.style.display = "none";
//   }
function ShowMessage(msg)
{
    message.style.display="block"
    message.innerText=msg;
}