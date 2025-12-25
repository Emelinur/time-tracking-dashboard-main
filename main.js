const allButtons=document.querySelectorAll(".card-link");

let jsonData=[];

async function getData() {
  try{
    const response=await fetch("./data.json");
    if (!response.ok) {
      throw new Error('Failed to load data, status:' + response.status);
    }
    jsonData=await response.json();
console.log(jsonData)
updateCards(jsonData);
  }catch{
    error => console.log(error)
  }
  
}


function updateCards(data, howTime){
  const periodText = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month"
  };
data.forEach(item => {
  const smallTitle=item.title.toLowerCase().replace(" ","-");
  const timeBox=document.querySelector(`.card-${smallTitle} .card-hours`);
  const lastBox=document.querySelector(`.card-${smallTitle} .card-prev`);

  const currentHours=item.timeframes[howTime].current;
  const previousHours=item.timeframes[howTime].previous;

  timeBox.innerHTML=`${currentHours} hrs`;
 lastBox.innerHTML = `${periodText[howTime]} - ${previousHours}hrs`;
});
}


allButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        allButtons.forEach(btn => {
            btn.classList.remove('card-active');
            btn.setAttribute('aria-checked', 'false');
        });

        button.classList.add('card-active');
        button.setAttribute('aria-checked', 'true');
        
        if (button.classList.contains("daily")) {
            updateCards(jsonData, "daily")
        } else if (button.classList.contains("weekly")) {
            updateCards(jsonData, "weekly")
        } else {
            updateCards(jsonData, 'monthly');
        }
    })
})

getData();