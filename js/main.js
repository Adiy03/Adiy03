
let MenuBtn = document.getElementById("MenuBtn")

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// typed js

let typed = new Typed('.auto-input',{
    strings: ['Bachelor of Comm', 'Web Developer', 'SEO Specialist', 'SEM Specialist' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
})
