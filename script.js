

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

function displayActiveOption(){
  const activeFolder = document.querySelectorAll(".folder.active")
  if(activeFolder[0].classList.contains("head-folder")){
    hideInactiveOptions();
    document.querySelector(".head-options").style.display = "flex"
  } else if(activeFolder[0].classList.contains("body-folder")){
    hideInactiveOptions();
    document.querySelector(".body-options").style.display = "flex"
  } else if(activeFolder[0].classList.contains("wing-folder")){
    hideInactiveOptions();
    document.querySelector(".wing-options").style.display = "flex"
  } else if(activeFolder[0].classList.contains("tail-folder")){
    hideInactiveOptions();
    document.querySelector(".tail-options").style.display = "flex"
  } else if(activeFolder[0].classList.contains("window-folder")){
    hideInactiveOptions();
    document.querySelector(".window-options").style.display = "flex"
  }
}

function hideInactiveOptions(){
  const options = document.querySelectorAll(".options")
  console.log(options)

  options.forEach((option) =>{
    option.style.display = "none"
  })
}

/**Feature: set active option active */