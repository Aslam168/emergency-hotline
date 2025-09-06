// function to get id
function getId(id){
    const getId = document.getElementById(id);
    return getId;
}

// heart icon functionality
document.getElementById('section-container').addEventListener('click', function(e){
    if(e.target.className.includes("heart-icon-btn")){
        const heartCount = getId('heart-count').innerText;
        getId('heart-count').innerText = Number(heartCount) + 1;
    }
})