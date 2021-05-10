const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];



const btnContainer = document.querySelector('.btn-container')
const allButton = document.createElement('button')
const koreaButton = document.createElement('button')
const japanButton = document.createElement('button')
const chinaButton = document.createElement('button')

allButton.className = "btn btn-outline-dark btn-item"
allButton.setAttribute('value','All')
allButton.setAttribute('type','button')
allButton.innerText = 'All'

koreaButton.className = "btn btn-outline-dark btn-item"
koreaButton.setAttribute('value','Korea')
koreaButton.setAttribute('type','button')
koreaButton.innerText = 'Korea'

japanButton.className = "btn btn-outline-dark btn-item"
japanButton.setAttribute('value','Japan')
japanButton.setAttribute('type','button')
japanButton.innerText = 'Japan'

chinaButton.className = "btn btn-outline-dark btn-item"
chinaButton.setAttribute('value','China')
chinaButton.setAttribute('type','button')
chinaButton.innerText = 'China'

btnContainer.appendChild(allButton)
btnContainer.appendChild(koreaButton)
btnContainer.appendChild(japanButton)
btnContainer.appendChild(chinaButton)

const sectionRow = document.querySelector('.row')

const japan = []
const china = []
const korea = []
const allItems = []

const menuCategories = menu.map((value)=>{
    console.log(value)
    if(value.category == 'Japan')
      japan.push(value)
    else if(value.category == 'China')
      china.push(value)
    else if(value.category == 'Korea')
      korea.push(value)
    
    allItems.push(value)
})
console.log(allItems)
var buttonGroups = document.querySelector('.btn-container')
buttonGroups.addEventListener('click',function(event){
    if(event.target.value === "Korea"){
      printKoreaItems(korea)
    }
    else if(event.target.value === "China"){
      printChinaItems(china)
    }
    else if(event.target.value === "Japan"){
      printJapanItems(japan)
    }
    else if(event.target.value === "All"){
      printAllItems(allItems);
    }
})

function printKoreaItems(korea){
    sectionRow.innerHTML = "";
    for(let i = 0;i<korea.length;i++){
      let goruntulenecek = `<div class="menu-items col-lg-6 col-sm-12">
      <img src="${korea[i].img}" alt="${korea[i].title}" class="photo">
      <div class="menu-info">
        <div class="menu-title">
          <h4>${korea[i].title}</h4>
          <h4 class="price">${korea[i].price}</h4>
        </div>
        <div class="menu-text">
          ${korea[i].desc}
        </div>
      </div>
      </div>`
      sectionRow.innerHTML += goruntulenecek      
    }
}

function printChinaItems(china){
  sectionRow.innerHTML = "";
  for(let i = 0;i<china.length;i++){
    let goruntulenecek = `<div class="menu-items col-lg-6 col-sm-12">
    <img src="${china[i].img}" alt="${china[i].title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${china[i].title}</h4>
        <h4 class="price">${china[i].price}</h4>
      </div>
      <div class="menu-text">
        ${china[i].desc}
      </div>
    </div>
    </div>`
    sectionRow.innerHTML += goruntulenecek      
  }
}

function printJapanItems(japan){
  sectionRow.innerHTML = "";
  for(let i = 0;i<japan.length;i++){
    let goruntulenecek = `<div class="menu-items col-lg-6 col-sm-12">
    <img src="${japan[i].img}" alt="${japan[i].title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${japan[i].title}</h4>
        <h4 class="price">${japan[i].price}</h4>
      </div>
      <div class="menu-text">
        ${japan[i].desc}
      </div>
    </div>
    </div>`
    sectionRow.innerHTML += goruntulenecek      
  }
}

function printAllItems(allItems){
  sectionRow.innerHTML = "";
  for(let i = 0;i<allItems.length;i++){
    let goruntulenecek = `<div class="menu-items col-lg-6 col-sm-12">
    <img src="${allItems[i].img}" alt="${allItems[i].title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${allItems[i].title}</h4>
        <h4 class="price">${allItems[i].price}</h4>
      </div>
      <div class="menu-text">
        ${allItems[i].desc}
      </div>
    </div>
    </div>`
    sectionRow.innerHTML += goruntulenecek      
  }
}

window.onload = function(){
  printAllItems(allItems)
}
