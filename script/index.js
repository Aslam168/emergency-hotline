// function to get id
function getId(id){
    const getId = document.getElementById(id);
    return getId;
}

// section functionality
document.getElementById('section-container').addEventListener('click', function(e){

    // heart icon functionality
    if(e.target.className.includes("heart-icon-btn")){
        const heartCount = getId('heart-count').innerText;
        getId('heart-count').innerText = Number(heartCount) + 1;
    }

    // card call button functionality
    if(e.target.className.includes("card-call-btn")){

        const cardCallBtn = e.target;
        const cardTitleEng = cardCallBtn.parentNode.parentNode.children[1].innerText;
        const cardTitleBn = cardCallBtn.parentNode.parentNode.children[0].innerText;
        const cardNumber = cardCallBtn.parentNode.parentNode.children[2].innerText;

        const callCoin = getId("call-coin");
        const callCoinNumberValue = Number(callCoin.innerText);

        if(callCoinNumberValue < 20){
           alert(`❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।`);
           return;
         }

        callCoin.innerText = callCoinNumberValue - 20;
        
        alert(`📞 Calling ${cardTitleEng} ${cardNumber}...`)

        const currentTime = new Date().toLocaleTimeString();
        const historyContainer = getId("history-container");
        const createDiv = document.createElement("div");

        createDiv.innerHTML = `
        
                <div class="flex justify-between bg-gray-100 p-3 rounded-md items-center mb-4">
                    <div>
                        <h1 class="font-bold text-[14px]">${cardTitleBn}</h1>
                        <h1 class="font-bold">${cardNumber}</h1>  
                    </div>
                        <div>
                             <span>${currentTime}</span>
                        </div>
                </div>
        
        `
         historyContainer.appendChild(createDiv)

         getId('history-clear-btn').addEventListener('click', function(){
            historyContainer.innerHTML = "";
         })

    }


    if(e.target.className.includes("card-copy-btn")){

        const cardCopyBtn = e.target;
        const cardNumber = cardCopyBtn.parentNode.parentNode.children[2].innerText;

        navigator.clipboard.writeText(cardNumber)
        
        alert(`নম্বর কপি হয়েছে : ${cardNumber}`)

        const copyCount = getId("copy-count");
        const convertCopyCountNum = parseFloat(copyCount.innerText);
        copyCount.innerText = convertCopyCountNum + 1;
    }


})