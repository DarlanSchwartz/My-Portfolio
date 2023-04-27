if ('scrollRestoration' in history) 
{
    history.scrollRestoration = 'manual';
}

let currentView = 0;

const downButton =  document.querySelector('.down-btn');
const upButton =  document.querySelector('.up-btn');

upButton.classList.add('not-active');

let sections = [];

sections.push(document.querySelector('.main-intro'));
sections.push(document.querySelector('.brief-intro'));
sections.push( document.querySelector('.softwares-and-languages'));
sections.push(document.querySelector('.recent-projects'));
function ScrollView(down)
{
   
    currentView += down? 1 : -1;
    currentView = currentView > 3 ? 3 : currentView;

    if(currentView == 0)
    {
        upButton.classList.add('not-active');
    }
    else
    {
        upButton.classList.remove('not-active');
    }

    if(currentView == 3)
    {
        downButton.classList.add('not-active');
    }
    else
    {
        downButton.classList.remove('not-active');
    }

    sections[currentView].scrollIntoView({behavior : "smooth"});
}


