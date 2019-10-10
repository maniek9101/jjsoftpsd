var cross = document.querySelector('.cookies-info span');
var cookies = document.querySelector('.cookies-info');
var navigatione = document.querySelector('header .header-nav nav');

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
        //navigatione.style.paddingTop = '5.7vh';
    });
});