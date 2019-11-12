//** Variable */
const headerNavMobile = document.querySelector('.header-nav .header-nav-mobile');
const btnMobile = document.querySelector('.header-nav .header-nav-mobile button');
const nav = document.querySelector('nav')
const navUlLanguage = document.querySelector('nav ul li ul');
let w=window,
        d=document,
        e=d.documentElement,
        g=d.getElementsByTagName('body')[0],
        x=w.innerWidth||e.clientWidth||g.clientWidth,
        y=w.innerHeight||e.clientHeight||g.clientHeight;
//for animation 
const leftBoxes = document.querySelectorAll('.services-different .content .left .box');
const rightBoxes = document.querySelectorAll('.services-different .content .right .box');
const chains = document.querySelectorAll('.company .content .chain .wrap');
//for form
let heightInputFile = document.getElementById('attachment').offsetHeight;
let heightSelect = document.getElementById('subject').offsetHeight;
//** end Variable */

//** behavior desktop menu */
let navToTop;

        window.onload = function()
        {
            navToTop = document.querySelector('nav').offsetTop;
        }
        
        function fixNav() {            
            
            if(x > 768) //more then mobile 
            {
                if(localStorage.getItem('cookie')=='true')
                {
                    //nie ma cookies info 
                    //console.log('YOU ARE IN TRUE COOKIE');
                    if(window.scrollY > 0)
                    {
                        nav.setAttribute('id','fix-nav');
                    }
                    else
                    {
                        nav.setAttribute('id','');
                    }
                }
                else
                {
                    if (window.scrollY >= navToTop) {
                        //fix
                        //nav.classList.add('fix-nav');
                        //ul.style.paddingTop = 0;
                        nav.setAttribute('id','fix-nav');
                        //console.log('fixed');
                    } else {
                        //nav.classList.remove('fix-nav');
                        nav.setAttribute('id','');
                        //ul.style.paddingTop = '2vh';
                        //console.log('NOOO fixed');
                    }
                }
            }
        }

        window.addEventListener('scroll', fixNav);
//** end behavior desktop menu */

//** behavior mobile menu */
if(x <= 768)
{
    headerNavMobile.setAttribute('id','fix-nav-mobile');
    btnMobile.addEventListener('click',(e)=>{
    e.stopPropagation();
    if(nav.getAttribute('id')=='active-nav')
    {
        nav.setAttribute('id','');
    }
    else
    {
        nav.setAttribute('id','active-nav');
    }});
    window.addEventListener('click',()=>{
        nav.setAttribute('id','');
    });
    /*document.querySelector('nav ul li:nth-of-type(6)').addEventListener('click',(e)=>{
        e.stopPropagation();
    });*/
}
//** end behavior mobile menu */

//**behavior subject drop down list in section contact **
const ulDropDownList = document.querySelector('.form-left ul');
const lisDropDownList = document.querySelectorAll('.form-left ul li');

const inputForDropDownList = document.querySelector('.form-left input:nth-of-type(2)').addEventListener('click',(e)=>{
    ulDropDownList.classList.toggle('drop-down-list');
    e.stopPropagation();
});

lisDropDownList.forEach(li => {
    li.addEventListener('click',()=>{
        ulDropDownList.classList.toggle('drop-down-list');
        const subjectObject = document.getElementById('subject');
        subjectObject.value = li.innerHTML;
    })
});

window.addEventListener('click',()=>{
    ulDropDownList.classList.remove('drop-down-list');
});
//end **behavior subject drop down list in section contact**

//** behavior while user zoom page **/
window.addEventListener('resize',()=>{
    x=w.innerWidth||e.clientWidth||g.clientWidth,
    y=w.innerHeight||e.clientHeight||g.clientHeight;
    
    if(x <= 768)
    {
        headerNavMobile.setAttribute('id','fix-nav-mobile');
        btnMobile.addEventListener('click',(e)=>{
        e.stopPropagation();
        if(nav.getAttribute('id')=='active-nav')
        {
            nav.setAttribute('id','');
        }
        else
        {
            nav.setAttribute('id','active-nav');
        }});
        window.addEventListener('click',()=>{
            nav.setAttribute('id','');
        });
    }
});
//end ** behavior while user zoom page **/

//** animation apper object on page */
function checkSlide(e) {
    //console.log(e);
    //left
    leftBoxes.forEach(slideImage => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideImage.offsetHeight / 4;
        //const slideInAt = (window.scrollY + window.innerHeight) - slideImage.offsetHeight;
        const imageBottom = slideImage.offsetTop + slideImage.offsetHeight;
        const isHalfShown = slideInAt > slideImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            //slideImage.classList.add('active-img');
            slideImage.classList.add('active-img');
        }
        //else {
        //   slideImage.classList.remove('active-img')
        //}
    });

    //right

    rightBoxes.forEach(rightBox => {
        const slideInAt = (window.scrollY + window.innerHeight) - rightBox.offsetHeight / 4;
        //const slideInAt = (window.scrollY + window.innerHeight) - slideImage.offsetHeight;
        const imageBottom = rightBox.offsetTop + rightBox.offsetHeight;
        const isHalfShown = slideInAt > rightBox.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            //slideImage.classList.add('active-img');
            rightBox.classList.add('active-img');
        }
    });

    //chain

    chains.forEach(chain => {
        const slideInAt = (window.scrollY + window.innerHeight) - chain.offsetHeight / 4;
        //const slideInAt = (window.scrollY + window.innerHeight) - slideImage.offsetHeight;
        const imageBottom = chain.offsetTop + chain.offsetHeight;
        const isHalfShown = slideInAt > chain.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            //slideImage.classList.add('active-img');
            chain.classList.add('apper-chain');
        }
    });
}

window.addEventListener('scroll', checkSlide);
//** end animation apper object on page */

//** set height in form */
document.addEventListener('DOMContentLoaded', () => {
    var select = document.getElementById('subject');
    select.style.height = heightInputFile + 'px';
});
//** end set height in form */

//** Smooth Scroll **/
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    }
    return y;
}

function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    console.log(stopY);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY);
        return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for (var i = startY; i < stopY; i += step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY += step;
            if (leapY > stopY) leapY = stopY;
            timer++;
        }
        return;
    }
    for (var i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) leapY = stopY;
        timer++;
    }
}
//**end Smooth Scroll **/