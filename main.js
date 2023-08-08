const todoItem = document.querySelector(".todoItems");
console.log(todoItem)

const clearCompleted = document.querySelector(".clearCompleted");
const active = document.querySelector(".active");
const all = document.querySelector(".all");
const completed = document.querySelector(".completed");

const activeValue = document.querySelector(".secDiv .filter div h4:nth-of-type(1) strong");
const completedValue = document.querySelector(".secDiv .filter div h4:nth-of-type(2) strong");


const savedDivString = localStorage.getItem("myLocalStore");
const savedDiv = JSON.parse(savedDivString);
todoItem.innerHTML = todoItem.innerHTML + savedDiv;
if (todoItem.innerHTML === "null") {
  todoItem.innerHTML = ""
}
        // localStorage.clear();
        

        const childDivs = document.querySelectorAll(".todoItems > div");
        console.log(childDivs)
        const childrenDivs = document.querySelectorAll(".todoItems div div")
        console.log(childrenDivs)
        const texts = document.querySelectorAll(".todoItems div h2")
        console.log(texts)

        const funksioni = (i)=> {



          childrenDivs[i].classList.toggle("ticker");
          texts[i].classList.toggle("itemText");
          // ACTIVE COMPLETED
          if (texts[i].classList.contains("itemText")) {
            activeValue.innerHTML = parseInt(activeValue.innerHTML) - 1;
            completedValue.innerHTML = parseInt(completedValue.innerHTML) + 1;
          } else {
            activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
            completedValue.innerHTML = parseInt(completedValue.innerHTML) - 1;
          }

          let newDivsString = JSON.stringify(todoItem.innerHTML);
          console.log(newDivsString)
          localStorage.setItem("myLocalStore", newDivsString);
          
        }



        
// Add an event listener to each child div element
childDivs.forEach((chdiv, i)=> {

  childDivs[i].style.display = "";

  if (texts[i].classList.contains("itemText")) {
    activeValue.innerHTML = parseInt(activeValue.innerHTML);
    completedValue.innerHTML = parseInt(completedValue.innerHTML) + 1;
  } else {
    activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
    completedValue.innerHTML = parseInt(completedValue.innerHTML)
  }
 
  // FILTRIMI I LISTES
  all.addEventListener("click", ()=>{
    completed.style.textDecoration = "none"
    active.style.textDecoration = "none"
    all.style.textDecoration = "underline";
    childDivs[i].style.display = "";
  })


  active.addEventListener("click", ()=>{
    completed.style.textDecoration = "none"
    active.style.textDecoration = "underline"
    all.style.textDecoration = "none";
    if (texts[i].classList.contains("itemText")) {
      childDivs[i].style.display = "none";
    } else {
      childDivs[i].style.display = "";
       }
  
       childDivs[i].addEventListener("click", () => {
        if (active.style.textDecoration == "underline") {
          if (texts[i].classList.contains("itemText")) {
            childDivs[i].style.display = "none"
          }
        }
      })
  })
  completed.addEventListener("click", ()=>{
    completed.style.textDecoration = "underline"
    active.style.textDecoration = "none"
    all.style.textDecoration = "none";
    if (texts[i].classList.contains("itemText")) {
      childDivs[i].style.display = ""
    } else {
      childDivs[i].style.display = "none";
    }
  
    childDivs[i].addEventListener("click", () => {
      if (completed.style.textDecoration == "underline") {
        if (texts[i].classList.contains("itemText")) {
        } else {
          childDivs[i].style.display = "none"
        }
      }
    })
  })

  clearCompleted.addEventListener("click", ()=>{
    if (texts[i].classList.contains("itemText")) {
      childDivs[i].remove();
      completedValue.innerHTML = 0;
    }

    

    let newDivsString = JSON.stringify(todoItem.innerHTML);
    console.log(newDivsString)
    localStorage.setItem("myLocalStore", newDivsString);
  })

///
  chdiv.addEventListener("click", function() {
    funksioni(i)
  });
});

console.log(document.querySelectorAll(".todoItems > div").length)
const clearAll = document.querySelector(".clearAll");



  clearAll.addEventListener("click", ()=> {

  todoItem.innerHTML = ""
      
  completedValue.innerHTML = 0;
  activeValue.innerHTML = 0;
    

  let newDivsString = JSON.stringify(todoItem.innerHTML);
    console.log(newDivsString)
    localStorage.setItem("myLocalStore", newDivsString);
})






const tick = document.querySelector(".tickDiv");

tick.addEventListener("click", () => {
tick.classList.add("ticker");
})
tick.addEventListener("mouseout", () => {
    tick.classList.remove("ticker");
})


const input = document.querySelector("input");

input.addEventListener("click", ()=> {
    input.style.border = "0px red solid";
    input.style.outline = "none";
})

const itemsLeft = document.querySelector(".itemsLeft");

tick.addEventListener("click", () => {




})






input.addEventListener("keydown", (event)=> {
    if (event.key === "Enter") {
      
      // Do something here, such as submitting a form or performing a search // e marrur ne CHATGPT
      const newDiv = document.createElement("div");
      newDiv.innerHTML = ""
      // newDiv.style.height = "65px"
      todoItem.append(newDiv);
      
      const div = document.createElement("div");
      newDiv.append(div);
      
      const h2 = document.createElement("h2");
      h2.textContent = input.value
      input.value = null;
      h2.style.fontSize = "1.5em";
      h2.style.marginLeft = "70px"
      newDiv.append(h2);

      if (h2.textContent == false) {
        newDiv.remove();
      }


        

  /*     const childDivs = document.querySelectorAll(".todoItems > div");
      console.log(childDivs)
      const childrenDivs = document.querySelectorAll(".todoItems div div")
      console.log(childrenDivs)
      const texts = document.querySelectorAll(".todoItems div h2")
      console.log(texts)

      const funksioni = (i)=> {
        childrenDivs[i].classList.toggle("ticker");
        texts[i].classList.toggle("itemText");
        // ACTIVE COMPLETED
        if (texts[i].classList.contains("itemText")) {
          activeValue.innerHTML = parseInt(activeValue.innerHTML) - 1;
          completedValue.innerHTML = parseInt(completedValue.innerHTML) + 1;
        } else {
          activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
          completedValue.innerHTML = parseInt(completedValue.innerHTML) - 1;
        }
        
      }

// Add an event listener to each child div element
childDivs.forEach((chdiv, i)=> {

// FILTRIMI I LISTES
all.addEventListener("click", ()=>{
  completed.style.textDecoration = "none"
  active.style.textDecoration = "none"
  all.style.textDecoration = "underline";
  childDivs[i].style.display = "";
})


active.addEventListener("click", ()=>{
  completed.style.textDecoration = "none"
  active.style.textDecoration = "underline"
  all.style.textDecoration = "none";
  if (texts[i].classList.contains("itemText")) {
    childDivs[i].style.display = "none";
  } else {
    childDivs[i].style.display = "";
     }

     childDivs[i].addEventListener("click", () => {
      if (active.style.textDecoration == "underline") {
        if (texts[i].classList.contains("itemText")) {
          childDivs[i].style.display = "none"
        }
      }
    })
})

completed.addEventListener("click", ()=>{
  completed.style.textDecoration = "underline"
  active.style.textDecoration = "none"
  all.style.textDecoration = "none";
  if (texts[i].classList.contains("itemText")) {
    childDivs[i].style.display = ""
  } else {
    childDivs[i].style.display = "none";
  }

  childDivs[i].addEventListener("click", () => {
    if (completed.style.textDecoration == "underline") {
      if (texts[i].classList.contains("itemText")) {
      } else {
        childDivs[i].style.display = "none"
      }
    }
  })
})

clearCompleted.addEventListener("click", ()=>{
  if (texts[i].classList.contains("itemText")) {
    childDivs[i].remove();
    completedValue.innerHTML = 0;
  }
})
///
chdiv.addEventListener("click", function() {
  funksioni(i)
});
});
 */


      let newDivsString = JSON.stringify(todoItem.innerHTML);
      console.log(newDivsString)
      localStorage.setItem("myLocalStore", newDivsString);




      if (h2.classList.contains("itemText")) {
        activeValue.innerHTML = parseInt(activeValue.innerHTML) - 1;
      } else {
        if (h2.textContent == false) {
          activeValue.innerHTML = parseInt(activeValue.innerHTML);
          } else {
            activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
          }
      }

      


      newDiv.addEventListener("click", () => {
          div.classList.toggle("ticker");
          h2.classList.toggle("itemText");
          // ACTIVE COMPLETED
          if (h2.classList.contains("itemText")) {
            activeValue.innerHTML = parseInt(activeValue.innerHTML) - 1;
            completedValue.innerHTML = parseInt(completedValue.innerHTML) + 1;
          } else {
            activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
            completedValue.innerHTML = parseInt(completedValue.innerHTML) - 1;
          }

          let newDivsString = JSON.stringify(todoItem.innerHTML);
          console.log(newDivsString)
          localStorage.setItem("myLocalStore", newDivsString);
  

    })
 

// FILTRIMI I LISTES

      all.addEventListener("click", ()=>{
        completed.style.textDecoration = "none"
        active.style.textDecoration = "none"
        all.style.textDecoration = "underline";
        newDiv.style.display = "";
    })

      active.addEventListener("click", ()=>{
        completed.style.textDecoration = "none"
        active.style.textDecoration = "underline"
        all.style.textDecoration = "none";
        if (h2.classList.contains("itemText")) {
          newDiv.style.display = "none";
        } else {
          newDiv.style.display = "";
           }

           newDiv.addEventListener("click", () => {
            if (active.style.textDecoration == "underline") {
              if (h2.classList.contains("itemText")) {
                newDiv.style.display = "none"
              }
            }
          })
      })

      completed.addEventListener("click", ()=>{
        completed.style.textDecoration = "underline"
        active.style.textDecoration = "none"
        all.style.textDecoration = "none";
        if (h2.classList.contains("itemText")) {
          newDiv.style.display = ""
        } else {
          newDiv.style.display = "none";
        }

        newDiv.addEventListener("click", () => {
          if (completed.style.textDecoration == "underline") {
            if (h2.classList.contains("itemText")) {
            } else {
              newDiv.style.display = "none"
            }
          }
        })
      })

      clearCompleted.addEventListener("click", ()=>{
        if (h2.classList.contains("itemText")) {
          newDiv.remove();
          completedValue.innerHTML = 0;
        }

        let newDivsString = JSON.stringify(todoItem.innerHTML);
        console.log(newDivsString)
        localStorage.setItem("myLocalStore", newDivsString);
      })

      clearAll.addEventListener("click", ()=> {
      newDiv.remove();
      completedValue.innerHTML = 0;
      activeValue.innerHTML = 0;
        
      let newDivsString = JSON.stringify(todoItem.innerHTML);
        console.log(newDivsString)
        localStorage.setItem("myLocalStore", newDivsString);
    })

      todoItem.style.display = "";

      todoItem.scrollTop = 0; // not working

    }


    
    
 

  });





  tick.addEventListener("click", () => {

    const newDiv = document.createElement("div");
    newDiv.innerHTML = ""
    // newDiv.style.height = "65px"
    todoItem.append(newDiv);
    
    const div = document.createElement("div");
    newDiv.append(div);
    
    const h2 = document.createElement("h2");
    h2.textContent = input.value
    input.value = null;
    h2.style.fontSize = "1.5em";
    h2.style.marginLeft = "70px"
    newDiv.append(h2);

    if (h2.textContent == false) {
      newDiv.remove();
    }


      

/*     const childDivs = document.querySelectorAll(".todoItems > div");
    console.log(childDivs)
    const childrenDivs = document.querySelectorAll(".todoItems div div")
    console.log(childrenDivs)
    const texts = document.querySelectorAll(".todoItems div h2")
    console.log(texts)

    const funksioni = (i)=> {
      childrenDivs[i].classList.toggle("ticker");
      texts[i].classList.toggle("itemText");
      // ACTIVE COMPLETED
      if (texts[i].classList.contains("itemText")) {
        activeValue.innerHTML = parseInt(activeValue.innerHTML) - 1;
        completedValue.innerHTML = parseInt(completedValue.innerHTML) + 1;
      } else {
        activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
        completedValue.innerHTML = parseInt(completedValue.innerHTML) - 1;
      }
      
    }

// Add an event listener to each child div element
childDivs.forEach((chdiv, i)=> {

// FILTRIMI I LISTES
all.addEventListener("click", ()=>{
completed.style.textDecoration = "none"
active.style.textDecoration = "none"
all.style.textDecoration = "underline";
childDivs[i].style.display = "";
})


active.addEventListener("click", ()=>{
completed.style.textDecoration = "none"
active.style.textDecoration = "underline"
all.style.textDecoration = "none";
if (texts[i].classList.contains("itemText")) {
  childDivs[i].style.display = "none";
} else {
  childDivs[i].style.display = "";
   }

   childDivs[i].addEventListener("click", () => {
    if (active.style.textDecoration == "underline") {
      if (texts[i].classList.contains("itemText")) {
        childDivs[i].style.display = "none"
      }
    }
  })
})

completed.addEventListener("click", ()=>{
completed.style.textDecoration = "underline"
active.style.textDecoration = "none"
all.style.textDecoration = "none";
if (texts[i].classList.contains("itemText")) {
  childDivs[i].style.display = ""
} else {
  childDivs[i].style.display = "none";
}

childDivs[i].addEventListener("click", () => {
  if (completed.style.textDecoration == "underline") {
    if (texts[i].classList.contains("itemText")) {
    } else {
      childDivs[i].style.display = "none"
    }
  }
})
})

clearCompleted.addEventListener("click", ()=>{
if (texts[i].classList.contains("itemText")) {
  childDivs[i].remove();
  completedValue.innerHTML = 0;
}
})
///
chdiv.addEventListener("click", function() {
funksioni(i)
});
});
*/


    let newDivsString = JSON.stringify(todoItem.innerHTML);
    console.log(newDivsString)
    localStorage.setItem("myLocalStore", newDivsString);




    if (h2.classList.contains("itemText")) {
      activeValue.innerHTML = parseInt(activeValue.innerHTML) - 1;
    } else {
      if (h2.textContent == false) {
        activeValue.innerHTML = parseInt(activeValue.innerHTML);
        } else {
          activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
        }
    }

    


    newDiv.addEventListener("click", () => {
        div.classList.toggle("ticker");
        h2.classList.toggle("itemText");
        // ACTIVE COMPLETED
        if (h2.classList.contains("itemText")) {
          activeValue.innerHTML = parseInt(activeValue.innerHTML) - 1;
          completedValue.innerHTML = parseInt(completedValue.innerHTML) + 1;
        } else {
          activeValue.innerHTML = parseInt(activeValue.innerHTML) + 1;
          completedValue.innerHTML = parseInt(completedValue.innerHTML) - 1;
        }

        let newDivsString = JSON.stringify(todoItem.innerHTML);
        console.log(newDivsString)
        localStorage.setItem("myLocalStore", newDivsString);


  })


// FILTRIMI I LISTES

    all.addEventListener("click", ()=>{
      completed.style.textDecoration = "none"
      active.style.textDecoration = "none"
      all.style.textDecoration = "underline";
      newDiv.style.display = "";
  })

    active.addEventListener("click", ()=>{
      completed.style.textDecoration = "none"
      active.style.textDecoration = "underline"
      all.style.textDecoration = "none";
      if (h2.classList.contains("itemText")) {
        newDiv.style.display = "none";
      } else {
        newDiv.style.display = "";
         }

         newDiv.addEventListener("click", () => {
          if (active.style.textDecoration == "underline") {
            if (h2.classList.contains("itemText")) {
              newDiv.style.display = "none"
            }
          }
        })
    })

    completed.addEventListener("click", ()=>{
      completed.style.textDecoration = "underline"
      active.style.textDecoration = "none"
      all.style.textDecoration = "none";
      if (h2.classList.contains("itemText")) {
        newDiv.style.display = ""
      } else {
        newDiv.style.display = "none";
      }

      newDiv.addEventListener("click", () => {
        if (completed.style.textDecoration == "underline") {
          if (h2.classList.contains("itemText")) {
          } else {
            newDiv.style.display = "none"
          }
        }
      })
    })

    clearCompleted.addEventListener("click", ()=>{
      if (h2.classList.contains("itemText")) {
        newDiv.remove();
        completedValue.innerHTML = 0;
      }

      let newDivsString = JSON.stringify(todoItem.innerHTML);
      console.log(newDivsString)
      localStorage.setItem("myLocalStore", newDivsString);
    })

    clearAll.addEventListener("click", ()=> {
    newDiv.remove();
    completedValue.innerHTML = 0;
    activeValue.innerHTML = 0;
      
    let newDivsString = JSON.stringify(todoItem.innerHTML);
      console.log(newDivsString)
      localStorage.setItem("myLocalStore", newDivsString);
  })

    todoItem.style.display = "";

    todoItem.scrollTop = 0; // not working

  


  
  


  })















