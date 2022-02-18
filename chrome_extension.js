let inputbtn=document.getElementById("input-btn")
let myLeads=[]
const inputel=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
let delbtn=document.getElementById("delete-btn")


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
    
inputbtn.addEventListener("click",function(){
    myLeads.push(inputel.value)
    inputel.value=""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
})

delbtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads=[]
    render(myLeads)
})

function render(leads){
    let listitems=""
    for(let i=0;i<leads.length;i++){
        listitems+=`
        <li>
             <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
             </a>
        </li>`
    }

    ulEl.innerHTML=listitems  
}
