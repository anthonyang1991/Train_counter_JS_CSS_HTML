let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

let count = 0;



function increment()
{
    count++;
    countEl.innerText=count;
    console.log(countEl);
}

function save()
{
    saveEl.textContent = saveEl.textContent+ countEl.textContent +" - ";
    countEl.textContent = 0;
    count =0;

   

    

}
