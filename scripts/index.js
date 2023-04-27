const observer = new IntersectionObserver((entries) =>{

    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        else
        {
            entry.target.classList.remove('show');
        }
    });

});

const hiddenElements = document.querySelectorAll('.hidden');
const hidden2Elements = document.querySelectorAll('.hidden2');
const hidden3Elements = document.querySelectorAll('.hidden3');

hiddenElements.forEach((element) => observer.observe(element));
hidden2Elements.forEach((element) => observer.observe(element));
hidden3Elements.forEach((element) => observer.observe(element));