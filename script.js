

const btn = document.getElementById("btn");
btn.addEventListener("click" , logging);

function logging(){



  const logging = document.getElementById("logging");
  const Thanking = document.getElementById("Thanks");
  const error = document.getElementById("error");
  const input = document.getElementById("input");
  const btn = document.getElementById("btn");


let inpt = input.value.toUpperCase();
const nospace = inpt.replace(/\s+/g, "");
  if (inpt >= null) {
    error.innerHTML = `Please Write Your Name`;
    error.style.display = "block";

    // logging.style.display = "none"
    logging.innerHTML = "You are not logged In";
    logging.style.backgroundColor = "tomato";
    Thanking.style.display = "none";
  } else {
    error.style.display = "none";
    logging.innerHTML = `You are Logged In as ${nospace}`;
    logging.style.backgroundColor = "rgb(0, 255, 0)";
    Thanking.style.display = "block";
  }
}
