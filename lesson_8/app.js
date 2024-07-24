const $form = document.querySelector("#form");

const $studentName = $form.querySelector("#username");
const $telegram = $form.querySelector("#telegram");
const $password = $form.querySelector("#password");
const $confirmPassword = $form.querySelector("#password2");
const $agree = $form.querySelector("#agree");
const $course = $form.querySelector("#course");
const $group_0 = $form.querySelector("#group_0")
const $group_1 = $form.querySelector("#group_1")
const $group_2 = $form.querySelector("#group_2")

const $showPassword = $form.querySelector("i.fa-eye");
$showPassword.onmouseenter = function () {
  $password.setAttribute("type", "text");
};
$showPassword.onmouseleave = function () {
  $password.setAttribute("type", "password");
};

$form.addEventListener("submit", validateForm);

// DRY - Don't repeat yourself

function validateForm(event) {
  event.preventDefault();

  const studentName = $studentName.value.trim();
  if (!studentName) {
    setErrorFormField($studentName, "Заполните поле");
  } else {
    setSuccessFormField($studentName);
  }

  const telegram = $telegram.value.trim();
  if (!telegram) {
    setErrorFormField($telegram, "Заполните поле");
  } else {
    if (telegram.startsWith("@")) {
      setSuccessFormField($telegram);
    } else {
      setErrorFormField($telegram, "Телеграм должен начинаться с @");
    }
  }

  const password = $password.value.trim();
  if (!password) {
    setErrorFormField($password, "Заполните поле");
  } else {
    setSuccessFormField($password);
  }

  const confirmPassword = $confirmPassword.value.trim();
  if (!confirmPassword) {
    setErrorFormField($confirmPassword, "Заполните поле");
  } else {
    if (password === confirmPassword) {
      setSuccessFormField($confirmPassword);
    } else {
      setErrorFormField($confirmPassword, "Пароли должны совпадать");
    }
  }

  const agree = $agree.checked;
  if (agree) {
    setSuccessFormField($agree);
  } else {
    setErrorFormField($agree, "Нам очень важно ваше согласие");
  }

  const course = $course.value;
  if (course === "none") {
    setErrorFormField($course, "Определись!");
  } else {
    setSuccessFormField($course);
  }

  const group_time = $group_0.checked;
  console.log(group_time);
  if(group_time){
    setErrorFormField($group_0, "В это время не преподаем");
  }else{
    setSuccessFormField($group_0);
  }
}

function setErrorFormField(formField, errorText) {
  const $formControl = formField.parentElement;
  $formControl.className = "form-control error";
  const $errorText = $formControl.querySelector("small");
  $errorText.innerText = errorText;
}

function setSuccessFormField(formField) {
  const $formControl = formField.parentElement;
  $formControl.className = "form-control success";
}
