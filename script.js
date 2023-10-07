

(function(){/*Feature: display options of rocket part folder selectd*/
  const folders = document.querySelectorAll(".folder");
  folders.forEach((folder) => {
    folder.addEventListener("click", function(e){
      setFolderActive(e)
    })
  })
}());


function setFolderActive(e){ /** Adds class active to active folder class, set display to flex, remove class active to all other folders*/
  const folders = document.querySelectorAll(".folder");
  folders.forEach((folder) =>{
    folder.classList.remove("active")
  })
  e.target.classList.add("active")
  displayActiveOption();
}

function displayActiveOption(){ /** Active options set display: flex and set all other options to display: none */
  const activeFolder = document.querySelectorAll(".folder.active")
  if(activeFolder[0].classList.contains("head-folder")){
    hideInactiveOptions();
    document.querySelector(".head-options").style.display = "flex"
    document.querySelector(".head-options").classList.add("active")
  } else if(activeFolder[0].classList.contains("body-folder")){
    hideInactiveOptions();
    document.querySelector(".body-options").style.display = "flex"
    document.querySelector(".body-options").classList.add("active")
  } else if(activeFolder[0].classList.contains("wing-folder")){
    hideInactiveOptions();
    document.querySelector(".wing-options").style.display = "flex"
    document.querySelector(".wing-options").classList.add("active")
  } else if(activeFolder[0].classList.contains("tail-folder")){
    hideInactiveOptions();
    document.querySelector(".tail-options").style.display = "flex"
    document.querySelector(".tail-options").classList.add("active")
  } else if(activeFolder[0].classList.contains("window-folder")){
    hideInactiveOptions();
    document.querySelector(".window-options").style.display = "flex"
    document.querySelector(".window-options").classList.add("active")
  }
}

function hideInactiveOptions(){
  const options = document.querySelectorAll(".options")

  options.forEach((option) =>{
    option.style.display = "none"
    option.classList.remove("active")
  })
}


(function(){/**Feature: set active option active */
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", function(e){
      setOptionActive(e)
      displayRocketPart(e)
    })
  })
}());

function setOptionActive(e){
  const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.classList.remove("active")
  })
  e.target.classList.add("active")
}

/** Feature: display png of active option */
function displayRocketPart(e){
  const imgUrl = e.target.id
  if(imgUrl.includes("head")){
    document.querySelector(".rocket-head").src = imgUrl;
  } else if(imgUrl.includes("body")){
    document.querySelector(".rocket-body").src = imgUrl;
  } else if(imgUrl.includes("wing")){
    document.querySelector(".rocket-wing").src = imgUrl;
  } else if(imgUrl.includes("tail")){
    document.querySelector(".rocket-tail").src = imgUrl;
  } 
}