//function for changing color on hovering over the cards of the 1st container...
function hoverCard(event){
    //randome color one-liner
    const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
    //changing the color of the blob on the top
    if(blobCover.style.opacity!==1){
        blobCover.style.opacity=1
    }

    blob.style.backgroundImage = `linear-gradient(to bottom right,${randomColor},white)`;
    blobCover.style.opacity = 0.3
}


function leaveCard(event){
   

     if (blobCover.style.opacity!==1){
        blobCover.style.opacity=1;
        blob.style.backgroundImage = `linear-gradient(to bottom right,black,black)`;

    }
   

    blobCover.style.opacity = 0.3; 
      
    
}




// selecting all the elements i am going to work with!
const blob = document.querySelector(".blob");
const blobCover = document.querySelector(" .cover");
const cards = document.querySelectorAll("div.card-container-1 > div");//nodelist of all the cards in the 1st container







//some random colors for changing on hovering 
const randomColors = ["red","purple","green","orange","pink"];

//applying event listeners to all the cards in the 1st container
cards.forEach(card => {

    card.addEventListener("mouseover",hoverCard);
    card.addEventListener("mouseleave",leaveCard);

});



