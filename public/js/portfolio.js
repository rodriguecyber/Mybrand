let projectIndex = 0;
const projects = document.getElementsByClassName("project-holder");

//Function to show the next project
let= nextProject=()=> {
 projectIndex++;
if (projectIndex >= projects.length) {
    projectIndex = 0;
  }
 showProject(projectIndex);
}

// Function to show the previous project
function prevProject() {
 projectIndex--;
  if (projectIndex < 0) {
   projectIndex = projects.length - 1;
 }
  showProject(projectIndex);
}



// Function to display the current project
let showProject=(index)=> {
  for (let i = 0; i < projects.length; i++) {
  projects[i].style.display = "none";
}
projects[index].style.display = "block";
 }

// Auto slide
setTimeout(nextProject,0)
// Change slide after 3 seconds
  setInterval(nextProject, 3000); 
