let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector ('footer')
let copyRight = document.createElement ('p')

copyRight.innerHTML = `Adoanhi Meza, ${thisYear}`;
footer.appendChild(copyRight);

const skillsSection = querySelector('.skills');
const skillList = skillsSection.querySelector('ul');
const skills = ['JavaScript', 'HTML'];
  for (let i=0; i <skills.length; i++){
    let skills = document.createElement('li');
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
  }
