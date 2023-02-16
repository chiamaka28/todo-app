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

console.log(inputName)


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
      console.log(e);
      console.log(inputName.value);
      allItems.push(inputName.value);
      let newItem;
      for (let index = 0; index < allItems.length; index++) {
         newItem = `<li class="item"><button class="check"></button> ${allItems[index]} <span class="remove"></li>`;
        
      }
      list.insertAdjacentHTML("afterbegin", newItem);
      inputName.value = "";
    console.log(allItems);
    }


   
  }
  console.log(allItems)

function createListElement1(e) {
    if (event.keyCode === 13) {
      if (inputName.value) {
        console.log(e);
        allItems.push(inputName.value);
        let newItem;
       
        for (let index = 0; index < allItems.length; index++) {
           newItem = `<li class="item"><button class="check"></button> ${allItems[index]} <span class="remove"></li>`;
           
        }
        list.insertAdjacentHTML("afterbegin", newItem);
        inputName.value = "";
        console.log(allItems);
        updateCount(1)
      }
    }
  }

  allItems.forEach((item) => {
    item.addEventListener("click", function (e) {
      const el = e.target;
      el.classList.toggle(".checked");
      console.log(e.target);
    });
  });

button.addEventListener('click', createListElement);
document.addEventListener("keypress", createListElement1);


// updating counter
function updateCount(num) {
    count.innerText = allItems.length ;
}
















// inputValue.addEventListener('keyPress',(e)=>{
//  if(e.charCode === 13 && inputValue.value.length > 0){
//         createListElement(itemInput.value);
//         inputValue.value = '';
//    }
// // })










// //add

// const addItems = document.querySelector('.button');
// const list = document.querySelector('#my-list')

// addItems.addEventListener('click',function(e){
//     const value = document.querySelector('input[type="text"]').value;

//     //create element
//     const li = document.createElement('li');
//     const check = document.createElement('span');
//     const close = document.createElement('span');

//     //append span to li
//     li.appendChild(check);
//     li.appendChild(close);

//     //append li to list
//     list.appendChild(li);

//     //add content
//     li.innerHTML = value;
//     check.classList.add("check");
//     close.classList.add("remove");
    
   
// })


