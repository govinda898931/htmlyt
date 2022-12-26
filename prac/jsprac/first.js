function onClickEvent() {
    const el = document.createElement('p');
    el.innerText = 'Clicked the button';
    document.querySelector('.container').appendChild(el);
    alert("Sucessfully alerted the click!");
}

document.getElementById('button').onclick=onClickEvent;