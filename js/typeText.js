const typedTextSpan = document.querySelector(".typed-text");
const typedTextSpan1 = document.querySelector(".typed-text-off")
const cursorSpan = document.querySelector(".cursor");

// const textArray = ["hard", "fun", "a journey", "LIFE"];
const textArray = ["TESTING", "my name is Samuel Tapia!!! ", " " ,"and I am a Software Engineer"]
const textArray1 = ["Samuel Tapia","Software Engineer"]
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
let charIndex2 = 0

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    // if(!cursorSpan.classList.contains("typing")) 
    //     cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    // document.write("\n");
    setTimeout(type, typingDelay);
  } 
//   else {
//     cursorSpan.classList.remove("typing");
//   	setTimeout(erase, newTextDelay);
//   }
//   else {
//       setTimeout(type2, typingDelay);
//     //   window.location.href = "#portfolio"
//   }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

function type2() {
    if (charIndex2 < textArray1[textArrayIndex].length) {
        // if(!cursorSpan.classList.contains("typing")) 
        //     cursorSpan.classList.add("typing");
        typedTextSpan1.textContent += textArray1[textArrayIndex].charAt(charIndex2);
        charIndex2++;
        setTimeout(type, typingDelay);
      } 
      else {
        // cursorSpan.classList.remove("typing");
        // setTimeout(erase, newTextDelay);
      }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});