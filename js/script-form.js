var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)999-99-99");
  im.mask(selector);
new JustValidate('.section-contacts__left-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        console.log(phone)
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат'
    },
});
