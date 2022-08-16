// 절차지향프로그래밍(procedural oriented programming with JS)

const form = document.getElementById('user-input');

function signupHandler(event) {
  event.preventDefault();
  const userNameInput = document.getElementById('username');
  const enteredUsername = userNameInput.value;
  const passwordInput = document.getElementById('password');
  const enteredPassword = passwordInput.value;

  if (enteredUsername.trim().length === 0) {
    alert('잘못 작성하셨습니다 - 이름은 공백일 수 없습니다! ');
    return;
  }
  if (enteredPassword.trim().length <= 5) {
    alert('잘못 작성하셨습니다 - 6글자 이상의 비밀번호를 입력해주세요!');
    return;
  }

  const user = {
    userName: enteredUsername,
    password: enteredPassword,
  };
  console.log(user);
  console.log('Hi, I am  ' + user.userName);
}

form.addEventListener('submit', signupHandler);

// procedure
// 1. get exccess to the different element step by step
// 2. defind function
// 3. set up a Listener
