const getContestData=async ()=>{
    return await fetch("https://kontests.net/api/v1/all")
    .then((data)=>data.json())
    .then((data)=> {
        const relevantData=data.map((contest)=> `${contest.name} ${contest.site}`)
        console.log({relevantData});
        document.getElementById("contests").innerHTML=data.map(contest => 
            `<div class="contest">
            <div>${contest.name}</div>
            <div class="site">
                <div class="bold">${contest.site}</div>
                <div>${contest.start_time}</div>
            </div>
            <a href=${contest.url} class="url" target="_blank">Go to Contest</a>
        </div>`).join(' ');
        return relevantData;
    })
    .catch((e)=>console.log(e));
}

getContestData();