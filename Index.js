function newElement () {
    let ul = document.getElementById("dynamicList");
    let input = document.getElementById("input");
    let img = document.createElement("img")
    img.src = "Avatar.png";
    let button = document.createElement("button");
    button.classList.add("close");
    button.innerHTML = "X";
    if (input.value.length >= 2) {
        var li = document.createElement("li");
        li.setAttribute("id", input.value);
        li.appendChild(img);
        li.appendChild(document.createTextNode(input.value));
        li.appendChild(button);
        ul.appendChild(li);
    }
    else {
        alert("The input must have at least 2 characters");
    }

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

    let closeBtn = document.getElementsByClassName("close");
      console.log(closeBtn);
    closeBtn.addEventListener("click", () => {
      console.log(closeBtn);
      this.parentElement.style.display = 'none';
    }); 
