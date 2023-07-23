const addClassSelected = () => {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach( item => item.addEventListener("click", (event) => {
    navItems.forEach( item => item.classList.remove("selected"));
    event.currentTarget.classList.add("selected");
  }));
} 

export {
  addClassSelected
}