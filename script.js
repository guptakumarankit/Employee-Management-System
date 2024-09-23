const addEmployeeBtn = document.querySelector(".add-Employee");
const employeeListBtn = document.querySelector(".Employee-list");

const addEmployeeContainer = document.querySelector(".add-Employee-details-container");
const employeeListContainer = document.querySelector(".employee-list");
const searchContainer = document.querySelector(".search-container");
searchContainer.classList.add("active");

const image = document.querySelector(".image");

let currentslide = addEmployeeBtn;
// addEmployeeBtn.classList.add("switch-bgd");

// switch the slide 
function switchSlide(clickedSlide) {
     if (currentslide != clickedSlide) {
          // currentslide.classList.remove("switch-bgd");
          currentslide = clickedSlide;
          // currentslide.classList.add("switch-bgd");
     }
}

// when switch the slide then content will be change ...
let currentslideContent = employeeListContainer;
employeeListContainer.classList.add("active");

function switchSlideContent(clickedSlideContent) {
     if (currentslideContent != clickedSlideContent) {
          currentslideContent.classList.remove("active");
          currentslideContent = clickedSlideContent;
          currentslideContent.classList.add("active");
     }
}


addEmployeeBtn.classList.add("active");
addEmployeeBtn.addEventListener('click', () => {
     switchSlide(addEmployeeBtn);
     switchSlideContent(employeeListContainer);
     searchContainer.classList.add("active");
     image.classList.remove("active");
     addEmployeeBtn.classList.add("active")
     employeeListBtn.classList.remove("active")
});

employeeListBtn.addEventListener('click', () => {
     switchSlide(employeeListBtn);
     switchSlideContent(addEmployeeContainer);
     searchContainer.classList.remove("active");
     image.classList.add("active");
     addEmployeeBtn.classList.remove("active");
     employeeListBtn.classList.add("active")
});

const inputs = document.querySelectorAll('input');
console.log(inputs);


// add all data in the from to employee list... 
const submitBtn = document.querySelector("[submitBtn]");
const table = document.querySelector(".table");

function addEmployeeList() {
     const FullName = document.querySelector("[FullName]");
     const email = document.querySelector("[email]");
     const dateofBirth = document.querySelector("[dateofBirth]");
     const department = document.querySelector("[Department]");
     const experience = document.querySelector("[experience]");

     const childhtml = `
               <td class="full-name">${FullName.value}</td>
               <td class="email">${email.value}</td>
               <td class="date-of-birth">${dateofBirth.value}</td>
               <td class="department">${department.value}</td>
               <td class="experience">${experience.value}</td>
               <td><button class="table-row-button" onclick="deleteRow(this)">Delete</button></td>
     `;
     const parent = document.createElement("tr");
     parent.innerHTML = childhtml;
     table.appendChild(parent);
     // console.log("ho gaya re baba");
}

// focus on invalid input box..

let invalidFocus = () => {
     // const inputs = document.getElementsByTagName('input');
     // console.log(inputs);
     for (let i = 1; i < inputs.length; i++) {
          if (inputs[i].value == "") {
               // console.log(inputs[i].value);
               inputs[i].focus();
               return false;
          }
     }
     return true;
}

// check emailId valid or not ..

let emailcheck = () => {
     let emailInput = document.querySelector("[email]");
     let email = emailInput.value.trim();

     let emailRegex = /^[^\s]+gmail\.com$/;

     if (!emailRegex.test(email)) {
          alert('Please enter a valid Email address.');
          emailInput.focus();
          return false;
     }
     return true;
}

// After press submit clear all input box data.
let clearAllInput = () => {
     const inputs = document.getElementsByTagName('input');
     // console.log(inputs);
     for (let i = 1; i < inputs.length; i++) {
          inputs[i].value = "";
     }
}

// add all information in employee list...
submitBtn.addEventListener("click", () => {
     if (invalidFocus() && emailcheck()) {
          addEmployeeList();
          clearAllInput();
     }
     console.log("press the enter");
})

window.addEventListener("keydown", (e) => {
     if (currentslide === addEmployeeBtn && e.key === 'Enter') {
          if (invalidFocus() && emailcheck()) {
               addEmployeeList();
               clearAllInput();
          }
     }
})


// delete the specific row in the employee list..

function deleteRow(button) {
     let row = button.parentNode.parentNode;
     row.parentNode.removeChild(row);
}

// search the content in the employee list...

const searchBar = document.querySelector("[search]");
const searchButton = document.querySelector("[searchButton]");

let search_content = () => {
     let tr = document.getElementsByTagName('tr');
     // console.log(tr);

     for (let i = 1; i < tr.length; i++) {
          // console.log(tr[i]);
          // console.log(tr[i].children.length);
          // if searchBar have no any value ....

          if (searchBar.value === "") break;

          let get = false;
          for (let j = 0; j < tr[i].children.length - 1; j++) {
               console.log(tr[i].children[j]);
               if (tr[i].children[j].innerHTML === searchBar.value) {
                    tr[i].style.display = "";
                    get = true;
                    break;
               }

               if (get === false) {
                    tr[i].style.display = "none";
               }
          }
     }
     searchBar.value = "";
}

// searchbotton in employee list ....
searchButton.addEventListener("click", search_content);
window.addEventListener("keydown", (e) => {
     if (currentslide === employeeListBtn && e.key === 'Enter') {
          search_content();
     }
})

// Refersh the employee list..

const refersh = document.querySelector("[refersh]");
// console.log(refersh);

refersh.addEventListener("click", () => {
     searchBar.value = "";
     let tr = document.getElementsByTagName('tr');
     // console.log(tr);

     for (let i = 1; i < tr.length; i++) {
          if (tr[i].style.display = "none") {
               tr[i].style.display = "";
          }
     }
})