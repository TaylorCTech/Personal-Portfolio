const skillsBtn = document.querySelector(".skillsBtn");
const skillsBox = document.querySelector(".skills__box");
const coursesBtn = document.querySelector(".coursesBtn");
const coursesBox = document.querySelector(".courses__box");

function skillsSection() {
  skillsBox.classList.remove("hide");
  coursesBox.classList.add("hide");
  skillsBtn.classList.remove("inactive"); 
  coursesBtn.classList.remove("active");
  skillsBtn.classList.add("active"); 
  coursesBtn.classList.add("inactive");
}

function coursesSection() {
  coursesBox.classList.remove("hide");
  skillsBox.classList.add("hide");
  coursesBtn.classList.remove("inactive");
  skillsBtn.classList.remove("active");
  coursesBtn.classList.add("active");
  skillsBtn.classList.add("inactive");
}
