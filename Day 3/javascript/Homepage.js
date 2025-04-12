const form=async ()=>{
    const searcTerm=document.getElementById('value').value;
    const res= await axios.get(`https://api.tvmaze.com/search/shows?q=${searcTerm}`);
    const resultSection=document.getElementById('result-section');
    const container=document.getElementById('result-container');
    container.innerHTML='';
    if(res.data.length>0){
        resultSection.style.display='block';
        makeImage(res.data)
    }
    else{
        resultSection.style.display='none';
        alert('No results found');
    }
}
const makeImage=(shows)=>{
    const container=document.getElementById('result-container');

    for(let result of shows){
        if(result.show.image){
            images=document.createElement('img');
            images.src=result.show.image.medium
            container.append(images);
        }
    }
}

document.getElementById('searchBtn').addEventListener('click', form);