let ul = document.getElementById("dynamicList");

let allItems;
if (localStorage.getItem("items")) {
  allItems = JSON.parse(localStorage.getItem("items"));
} else {
  allItems = [];
}


function newElement () {
    
    let input = document.getElementById("input");
    let item = {
      input: input.value,
      img: "Avatar.png",
      job: selectedValue()
    }
    if (input.value.length >= 2) {
        allItems.push(item);
        localStorage.setItem("items", JSON.stringify(allItems));
        showData();
        input.value= "";
    }
    else {
        alert("The input must have at least 2 characters");
    }
}

function showData() {
  let items = "";
  for(let i=0; i< allItems.length;i++) {
    items+= `
    <li id="${allItems[i].input}">
    <img src="${allItems[i].img}"/>
    <div class="text">
    <p>${allItems[i].input}</p>
    <p>${allItems[i].job}</p>
    </div>
    <button class="close" onclick="deleted(${i})">X<button/>
    </li>
    `
  }
  ul.innerHTML = items;
}

showData();

function selectedValue () {
  let jobs = document.querySelector(".jobSelector").value;
  return jobs;
}


function search() {
    let searchInput, filter, ul, li, i, txtValue;
    searchInput = document.getElementById("searchInput");
    filter = searchInput.value.toUpperCase();
    ul = document.getElementById("dynamicList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
      txtValue = li[i].textContent  || li[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";

      }
    }
  }

  function deleted(i) {
    allItems.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(allItems));
    showData();
  }