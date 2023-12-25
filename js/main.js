const burger = document.querySelector('.burger');
const list = document.querySelector('.burger__list');
const phoneInput = document.querySelector('.phone');
const btn = document.querySelector('.popup__btn');
const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
});

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  list.classList.toggle('active');
  document.body.classList.toggle('open');
});

Fancybox.bind('[data-fancybox]', {
  Html: {
    videoTpl: `<video class="fancybox__html5video" loop playsinline controls controlsList="nodownload" poster="{{poster}}">
<source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`,
  },
});

phoneInput.addEventListener('input', () => {
  if (phoneMask.masked.isComplete) {
    btn.classList.add('active');
  } else {
    btn.classList.remove('active');
  }
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__fadeInDown');
    }
  });
});
observer.observe(document.querySelector('.advantage__title'));
observer.observe(document.querySelector('.services__title'));
observer.observe(document.querySelector('.services__subtitle'));
