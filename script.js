

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
    folder.style.display = "none"
  })
  e.target.classList.add("active")
  e.target.style.display = "flex"
}


