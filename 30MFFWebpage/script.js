window.addEventListener('load', () => {
    
    let button1 = document.getElementById("like-button");
    let x = 0
    let icon = document.getElementById("icon");

    button1.addEventListener('click', () => {
        if(x%2==0){
            button1.style.backgroundColor = '#397afd';
        }
        else{
            button1.style.backgroundColor = '#EFEFEF';
        }
        x = x+1;
    })

    button1.addEventListener('mouseover', () => {
        button1.style.width = '120px';
    })
});