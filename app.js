// set initial count
let count = 0;

// select value and buttons
const value =document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e) {
        const btnClassNames = e.currentTarget.classList;
        if(btnClassNames.contains('decrease'))
        {
            count--;
        }
        else if(btnClassNames.contains('increase'))
        {
            count++;
        }
        else
        {
            count = 0;
        }

        if(count > 0)
        {
            value.style.color = "green";
        }
        if(count < 0)
        {
            value.style.color = "red";
        }
        

        value.textContent = count;
    })
});