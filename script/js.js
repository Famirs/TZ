document.addEventListener('DOMContentLoaded', ()=>{
    const datePublished = document.querySelector('.published'),
    a = new Date('04.19.22')
datePublished.textContent += `${a.getDate()} 0${a.getMonth()} ${a.getFullYear()}р.`


const countDownDate = new Date().getTime() + (10 * 60 * 1000);

// Обновляем таймер каждую секунду
const countdownTimer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector('#minutes').innerHTML = minutes
    document.querySelector('#seconds').innerHTML = seconds
    if (distance < 0) {
    clearInterval(countdownTimer);
}
}, 1000);

    const getButon = document.querySelector('.header__bottom_white'),
        getModalContainer = document.querySelector('.modal'),
        getModal = document.querySelector('.modal-window'),
        overflow = document.querySelector('.overflow'),
        body = document.querySelector('body'),
        modalTimer = setTimeout(showModal, 20000);
    function showModal() {
        getModalContainer.classList.add('active')
        getModalContainer.classList.remove('hide')
        getModal.classList.add('animate');
        getModal.classList.remove('anti');
        document.querySelector('body').style.overflow = 'hidden'
        document.removeEventListener('mouseleave', showModal)
    }
    function hideModal() {
        getModalContainer.classList.add('hide')
        getModalContainer.classList.remove('active')
        document.querySelector('body').style.overflow = ''
    }

getButon.addEventListener('click', () => {
    setTimeout(hideModal, 400)
    getModal.classList.add('anti')
    getModal.classList.remove('animate')
})
document.addEventListener('mouseleave', showModal)

})