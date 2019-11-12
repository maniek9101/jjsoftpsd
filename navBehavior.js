//** Variable */
const headerNavMobile = document.querySelector('.header-nav .header-nav-mobile');
const btnMobile = document.querySelector('.header-nav .header-nav-mobile button');
const nav = document.querySelector('nav')
const navUlLanguage = document.querySelector('nav ul li ul');
let navToTop, heightContent; // dodane
let w=window,
d=document,
e=d.documentElement,
g=d.getElementsByTagName('body')[0],
x=w.innerWidth||e.clientWidth||g.clientWidth,
y=w.innerHeight||e.clientHeight||g.clientHeight;

//
/*function setHeightContent()
{
    let el = document.querySelector('.content');
    let style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    let fontSize = parseFloat(style); 

    heightContent = document.querySelector('.content').offsetHeight; // wysokość .content
    heightContent += (10*fontSize); // + margin-top .content * current_em_font_size
    document.querySelector('header').style.height = heightContent + 'px' ; // ustawienie wysokości żeby cały .content się zmieścił 
}*/

//** behavior desktop menu */

window.onload = function()
{
    navToTop = document.querySelector('nav').offsetTop;
    //setHeightContent();
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
                        //document.querySelector('.content').style.marginTop = my + 'px';
                    }
                    else
                    {
                        nav.setAttribute('id','');
                        //document.querySelector('.content').style.marginTop = '120px'
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

//** behavior while user zoom page **/
window.addEventListener('resize',()=>{
    x=w.innerWidth||e.clientWidth||g.clientWidth,
    y=w.innerHeight||e.clientHeight||g.clientHeight;
    
    //setHeightContent();

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