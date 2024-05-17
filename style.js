let ip = document.getElementById('inputbox');
let btns = document.querySelectorAll('button');
let str = "";
let arr = Array.from(btns);

arr.forEach(button => {
  button.addEventListener('click', (b) => {
    if (b.target.innerHTML === '=') {
      str = eval(str);
      ip.value = str;
    }
    else if (b.target.innerHTML === 'AC') {
      str = '';
      ip.value = str;
    }
    else if (b.target.innerHTML === 'DEL') {
      str = str.toString().slice(0, -1);
      ip.value = str;
    }
    else {
      str += b.target.innerHTML;
      ip.value = str;
    }
  })
})
