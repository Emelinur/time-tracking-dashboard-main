const cardDaily=document.querySelector(".daily");
const cardWeekly=document.querySelector(".weekly");
const cardMonthly=document.querySelector(".monthly");
const allButtons=document.querySelector(".card-link");

cardWeekly.addEventListener("click",()=>{
  console.log("click")
})

cardMonthly.addEventListener("click",()=>{
  console.log("click")
})
let jsonData=[];
async function getData() {
  try{
    const response=await fetch("./data.json");
    if (!response.ok) {
      throw new Error('Failed to load data, status:' + response.status);
    }
    jsonData=await response.json()

  }catch{
    console.error("Something went wrong:",error)
  }
  
}

