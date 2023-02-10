const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach((element) => observer.observe(element));




const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showLeft');
        } else {
            entry.target.classList.remove('showLeft');
        }
    });
});

const hiddenElements2 = document.querySelectorAll('.hiddenLeft');
hiddenElements2.forEach((element) => observer2.observe(element));



const observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showRight');
        } else {
            entry.target.classList.remove('showRight');
        }
    });
});

const hiddenElements3 = document.querySelectorAll('.hiddenRight');
hiddenElements3.forEach((element) => observer3.observe(element));


