import "normalize.css"
import "./index.css"
import "./Micromodal.css"
import anime from 'animejs/lib/anime.es.js'
import Micromodal from "micromodal"
import Social from "./social"


Micromodal.init({
  onClose: modal => {
    const video = modal.querySelector("iframe")
    const realSrc = video.getAttribute("src")

    video.setAttribute("src", "")

    setTimeout(() => {
      video.setAttribute("src", realSrc)
    }, 100)
  },

});


//Variables from DOM
const $loader = document.querySelector(".loader")
const $content = document.querySelector(".content")
const $form = document.querySelector("#formMail")

const nextButton = document.querySelector(".nxtbtn")
const previousButton = document.querySelector(".prvbtn")

//Create a Template from Zero
$loader.style.display = "block"

//horizontal transition
let transitionX = 0;

nextButton.onclick = function () {
  transitionX -= 510
  anime({
    targets: ".Hero__mini--wrapper",
    keyframes: [{
      translateX: transitionX,
    }],
    duration: 1000,
    easing: "cubicBezier(.5, .05, .1, .3)",
  });
  isOutside(transitionX)
}

const isOutside = (n) => {
  if (n >= 0) {
    // previousButton.style.opacity = "0"
    previousButton.style.pointerEvents = "none"
  } else {
    // previousButton.style.opacity = "1"
    previousButton.style.pointerEvents = "auto"

  }
  if (n <= -1020) {
    // nextButton.style.opacity = "0"
    nextButton.style.pointerEvents = "none"

  } else {
    // nextButton.style.opacity = "1"
    nextButton.style.pointerEvents = "auto"

  }

}

previousButton.onclick = function (event) {
  transitionX += 510
  anime({
    targets: ".Hero__mini--wrapper",
    keyframes: [{
      translateX: transitionX,
    }],
    duration: 800,
    easing: "cubicBezier(.5, .05, .1, .3)",
  });
  isOutside(transitionX)


}


window.onload = function () {
  Social()

  $loader.style.opacity = 0
  $content.style.opacity = 1

  $loader.remove()
  var tl = anime.timeline({
    easing: 'cubicBezier(.5, .05, .1, .3)',
  });

  tl
    .add({
      targets: '.bigtext',
      keyframes: [{
        scale: .16,
        top: "14.6%",
        left: "5%",
      }],
      delay: 800,
      duration: 1200
    })
    .add({
        targets: '.bigtext',
        opacity: 0,
      },
      '-=100')
    .add({
        targets: '.Hero',
        opacity: 1
      },
      '-=800')
    .add({
      targets: '.bigpicture',
      translateY: 500
    })
    .add({
      targets: '.handpicture',
      translateY: -500
    }, '-=1000')
    .add({
      targets: '.Hero__mini',
      opacity: 1,
    })
    .add({
      targets: '.Footer',
      opacity: 1,
    }, '-=200')
}



//Call POST API


$form.addEventListener("submit", (e) => {
  e.preventDefault()
  // const email = document.querySelector("#email").value
  sendEmail()


})

const sendEmail = async () => {
  try {
    const URL = "http://192.168.1.239:4003/mails/mailsend"
    let response = await fetch(URL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "contentmail": {},
        "datasend": [{
          "mailpage": "79eeef36fe20054db4196b38d07cffad",
          "email": "jnaventa@disnovo.com",
          "idcont": "2833",
          "cco": false
        }]
      })

    })

    let data = response.json()
    console.log(data)
    // return data
  } catch (error) {

    console.log(`Hubo un error : ${error.message}`)
  }

  // const url = "http://192.168.1.239:4003/mails/mailsend";
  // axios.post("http://192.168.1.239:4003/mails/mailsend", {
  //   "contentmail": {},
  //   "datasend": [{
  //     "mailpage": "79eeef36fe20054db4196b38d07cffad",
  //     "email": "jnaventa@disnovo.com",
  //     "idcont": "2833",
  //     "cco": false
  //   }]
  // }).then(function (response) {
  //   alert(response)
  // }).catch(function (error) {
  //   alert(error)
  // });

}