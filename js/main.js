/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
    //   navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== thay đổi màu thẻ nav ở header khi croll trang (khóa trang)====================*/
// function scrollHeader(){
//     const header = document.getElementById('header')
//     // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
//     if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
// }
// window.addEventListener('scroll', scrollHeader)

/*==================== HIỆU ỨNG SWIPER kéo ảnh hàng ngang ====================*/
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 10,
    stretch: 10,
    depth: 60,
    modifier: 6,
    slideShadows : true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});

var swiper = new Swiper('.Hu', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 2,
    slideShadows : true,
    },
    pagination: {
    el: '.swiper-pagination',
    },
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)


/*====================Hiển thị cho nút quay về thẻ nav ( nút mũi tên cúi trang) ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== hiển thị  chức năng ảnh động khi croll ảnh  ====================*/
// đây là phẩn tùy chỉnh hiệu ứng xuất hiện  kiểu animations hiệu ứng động xuất hiện khi croll ảnh kéo trang
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true, /* chức năng reset lại hiệu ứng croll animation khi rê trang( khóa lại do mất reset liên tục mất time) */
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// chủ đề đc chọn, thao tác trước đó (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//xác nhận chủ đề theme dark/light khi ấn chọn chế độ sáng tối
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Kích hoạt / hủy kích hoạt chủ đề theo cách thủ công bằng nút
themeButton.addEventListener('click', () => {
    //Thêm hoặc xóa theme tối / biểu tượng icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //  lưu lại  chủ đề và biểu tượng hiện tại mà người dùng đã chọn
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/* phần xây dựng bản đồ */
function myMap() {
    var mapOptions = {
    center: new google.maps.LatLng(-33.891049654862904, 151.27742942890129),
    zoom: 10,
    mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
    