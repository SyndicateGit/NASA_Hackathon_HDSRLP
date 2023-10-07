

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
  console.log(activeFolder[0].classList.contains("head-folder"))
  
}

/**Feature: set active option active */