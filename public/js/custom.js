const direction = window.localStorage.getItem('direction') || 'ltr';
if (direction === 'rtl') {
    const animateElements1 = document.querySelectorAll('[data-aos="fade-left"]');
    const animateElements2 = document.querySelectorAll('[data-aos="fade-right"]');

    animateElements1.forEach((element) => {
        element.setAttribute('data-aos', 'fade-right');
    });

    animateElements2.forEach((element) => {
        element.setAttribute('data-aos', 'fade-left');
    });
}

// loader
const screen_loader = document.getElementsByClassName('screen_loader');
if (screen_loader ? .length) {
    setTimeout(() => {
        document.body.removeChild(screen_loader[0]);
    }, 200);
}

// Mobile menu js
const toggleMenu = () => {
    const menus = document.querySelector('.menus');
    const overlay = document.querySelector('.overlay');
    menus.classList.toggle('open-menus');
    overlay.classList.toggle('hidden');
};

// AOS Animation
if (window['AOS']) {
    window['AOS'].init({
        once: true,
    });
}

// Search Bar - Header
const search = () => {
    var search = document.querySelector('.search-bar');
    search.classList.toggle('open-search-bar');
};

// Scroll to top
const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

window.onscroll = function() {
    setOnScroll();
};

const setOnScroll = () => {
    let scrollpos = window.scrollY;
    if (scrollpos > 100) {
        document.getElementById('scrollToTopBtn') ? .classList.remove('hidden');
        document.getElementById('top-header') ? .classList.add('sticky-header');
    } else {
        document.getElementById('scrollToTopBtn') ? .classList.add('hidden');
        document.getElementById('top-header') ? .classList.remove('sticky-header');
    }
};
setOnScroll();

// Light - Dark Mode
const toggleTheme = (isFirstTime = false) => {
    let theme = window.localStorage.getItem('theme') || 'light';

    if (!isFirstTime) {
        theme = theme === 'light' ? 'dark' : 'light';
    }
    window.localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        document.querySelector('body').classList.add('dark');
    } else {
        document.querySelector('body').classList.remove('dark');
    }
};

toggleTheme(true);

// rtl
const toggleDirection = (isFirstTime = false) => {
    let direction = window.localStorage.getItem('direction') || 'ltr';

    if (!isFirstTime) {
        direction = direction === 'ltr' ? 'rtl' : 'ltr';
    }
    window.localStorage.setItem('direction', direction);

    if (direction === 'rtl') {
        document.querySelector('html').setAttribute('dir', 'rtl');
    } else {
        document.querySelector('html').setAttribute('dir', 'ltr');
    }
    if (!isFirstTime) {
        window.location.reload();
    }
};
toggleDirection(true);

// current year
const ele = document.querySelectorAll('.curr-year');
if (ele ? .length) {
    const date = new Date();
    const fullyear = date.getFullYear();
    for (let i = 0; i < ele.length; i++) {
        ele[i].innerHTML = fullyear;
    }
}


function VanillaCounter() {
    let elements = document.querySelectorAll('[data-vanilla-counter]')
    elements.forEach(i => {
        let data = {
            startAt: parseInt(i.getAttribute('data-start-at')),
            endAt: parseInt(i.getAttribute('data-end-at')),
            delay: parseInt(i.getAttribute('data-delay')) || 0,
            format: '{}',
            time: parseInt(i.getAttribute('data-time')) || 1000
        }
        if (i.getAttribute('data-format')) {
            data.format = i.getAttribute('data-format')
        } else if (i.innerHTML != "") {
            data.format = i.innerHTML
        }
        console.log(data.format)
        if (data.startAt == null) {
            throw new Error('data-start-at attribute is required')
        }
        if (data.endAt == null) {
            throw new Error('data-end-at attribute is required')
        }
        var counter = data.startAt
        i.innerHTML = data.format.replace('{}', counter)
        var intervalTime = Math.ceil(data.time / (data.endAt - data.startAt))
        setTimeout(() => {
            var interval = setInterval(intervalHandler, intervalTime)

            function intervalHandler() {
                counter += (data.endAt - data.startAt) / Math.abs(data.endAt - data.startAt) * 1
                i.innerHTML = data.format.replace('{}', counter)
                if (counter == data.endAt) {
                    clearInterval(interval)
                }
            }
        }, data.delay)
    })
}

window.VanillaCounter = VanillaCounter