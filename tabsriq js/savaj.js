function Qur(){
    let take = document.getElementById("tab").value;

    let bir = document.getElementById("bir");

    let goster = " ";
    for( let i=3; i<=take; i++){ goster +=`<tr>`

    for(let i=3; i<=take;i++){ goster+=`<td>` }
    }
    
    bir.innerHTML = goster;
}