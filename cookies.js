var cross = document.querySelector('.cookies-info span');
var cookies = document.querySelector('.cookies-info');

if(localStorage.getItem('cookie')=='true')
{
    cookies.style.display = 'none';
}
else
{
    cookies.style.visibility = 'visible';
}

document.addEventListener('DOMContentLoaded',()=>{
    cross.addEventListener('click',()=>{
        cookies.style.display = 'none';
        localStorage.setItem('cookie','true');
    });
});