// change theme
const icon = document.querySelector('.icon');
const button = document.querySelector('.button');
const inputName = document.getElementById("type-box");
const list = document.querySelector("ul");
const count = document.getElementById('count');
const allItems = [];
let countValue;

icon.addEventListener('click', ()  => {
   document.body.classList.toggle('light')
if(document.body.classList.contains('light')){
    document.getElementById("img").src="/images/icon-moon.svg"
}else{
    document.getElementById("img").src="/images/icon-sun.svg"  
}
});


//add items
//  function createListElement() {
//     const check = document.createElement('span');
//     var li = document.createElement("li");
//     var inputValue = document.getElementById("type-box").value;
//     var t = document.createTextNode(inputValue);
//     const close = document.createElement('span');
//     if (inputValue === '') {
//      } else {
//      li.appendChild(check);
//      document.getElementById("my-list").appendChild(li);
//      li.appendChild(t);
//      li.appendChild(close);
//     }
   
//    check.classList.add("checked");
//    document.getElementById("type-box").value = "";
//    close.classList.add("remove");
   
//     }



function createListElement(e) {
   
    if (inputName.value) {
      console.log(inputName.value);
      allItems.push(inputName.value);
      let newItem;
      for (let index = 0; index < allItems.length; index++) {
         newItem = `<li class="item"><button class="check"></button> ${allItems[index]} <span class="remove"></li>`;
        
      }
      list.insertAdjacentHTML("afterbegin", newItem);
      inputName.value = "";
      updateCount(1);
    }


   
  }

function createListElement1(e) {
    if (event.keyCode === 13) {
      if (inputName.value) {
        allItems.push(inputName.value);
        let newItem;
        for (let index = 0; index < allItems.length; index++) {
           newItem = `<li class="item"><button class="check"></button> ${allItems[index]} <span class="remove"></li>`;
           
        }
        list.insertAdjacentHTML("afterbegin", newItem);
        inputName.value = "";
        updateCount(1)
      }
    }
  }

  allItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      const el = e.target;
      el.classList.toggle(".checked");
    });
  });

button.addEventListener('click', createListElement);
document.addEventListener("keypress", createListElement1);


// updating counter
function updateCount(num) {
    count.innerText = allItems.length ;
}















