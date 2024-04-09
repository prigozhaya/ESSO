document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    if (error) {
      form.submit();
      form.reset();
    } else {
      alert(
        `Что-то пошло не так. Проверьте введенные данные: \n ✔ Поле имени должно быть заполнено \n ✔ email должен состоять из двух частей, разделённых символом «@» Например: example@mail.com \n ✔ Номер телефона должен состоять из кода "+375" и 9 цифр `
      );
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");
    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      input.classList.remove("error");

      let inputType = input.id;
      switch (inputType) {
        case "inputName":
          if (nameValidate(input)) {
            input.classList.add("error");
            error++;
          }
          break;

        case "inputEmail":
          if (emailValidate(input)) {
            input.classList.add("error");
            error++;
          }
          break;

        case "inputTel":
          if (phoneValidate(input)) {
            input.classList.add("error");
            error++;
          }
          break;
      }
    }
    return error === 0;
  }

  function nameValidate(input) {
    return input.value === "" ? true : false;
  }

  function emailValidate(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }

  function phoneValidate(input) {
    return !/^((\+375)[\- ]?)?(\(?\d{2}\)?[\- ]?)?[\d\- ]{7}$/.test(
      input.value
    );
  }
});
