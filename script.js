window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    const height = window.innerHeight;
    if (top < height - 100) el.classList.add("active");
  });
});

const text = "Frontend Developer | UI / UX Designer";
let i = 0;
const typingEl = document.querySelector(".typing");

function typing(){
  if(i < text.length){
    typingEl.textContent += text.charAt(i);
    i++;
    setTimeout(typing,80);
  }
}
typing();