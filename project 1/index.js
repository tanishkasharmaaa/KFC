let arr = [
  "images/1.png",
  "images/2.png",
  "images/3.png",
  "images/4.png",
  "images/5.png",
];
let menuArr = [
  {
    img: "https://images.ctfassets.net/9tka4b3550oc/5gtcL4ScmidI4W3wbIedWY/f26db510b8d8f5e61f113ca1cd94efe0/MicrosoftTeams-image__32_.png",
    title: "SPECIAL OFFERS",
  },
  {
    img: "https://images.ctfassets.net/9tka4b3550oc/17KR2rcDOck3QsFXGEEuRx/1d0dd5414d75ddf16eaaa36f8d152e2d/kfc-FamilyMealCategory.png",
    title: "FAMILY MEALS",
  },
  {
    img: "https://images.ctfassets.net/9tka4b3550oc/2F8CqBF9HZ45Un3CZYwRUG/1c4223a4413473e279da6d4955ec3108/9891_2pc_DrumThigh_Web.png",
    title: "FRIED CHICKEN",
  },
  {
    img: "https://images.ctfassets.net/9tka4b3550oc/qFFj4OIPzC1gKgiuP776h/e550723849708b803b298507a0d80970/kfc-8pcNuggetsComboV2__2_.png",
    title: "COMBOS",
  },
  {
    img: "https://images.ctfassets.net/9tka4b3550oc/7wFSUsWFtJpOpRKC9TUzG3/d88c50422259d6c70c49617440cdf35a/Sandwiches.png",
    title: "SANDWICHES",
  },
  {
    img: "https://images.ctfassets.net/9tka4b3550oc/423il45HU7Gase2iVxdbjV/ae2162ad416fa46f3f04440f088da926/Special_Offers__1_.png",
    title: "FULL MENU",
  }
];

let special_menu=[
  {
    img:'https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue2pc.png?q=75&w=1024',
    title:'Taste of KFC 2pc .Deal',
    Cal:'Cal.:540-810',
    set:'Set location for pricing.'
  },
  {
    img:'https://digitaleat.kfc.com/menus/image/bare/kfc-TasteofKFCValue4pc.png?q=75&w=1024',
    title:'Taste of KFC 4pc .Deal',
    Cal:'Cal.:1130-1820',
    set:'Set location for pricing.'
  },
  {
    img:'https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggetsCombo.png?q=75&w=1024',
    title:'10pc. Saucy Nuggets Combo',
    Cal:'Cal.:940-3070',
    set:'Set location for pricing.'
  },
  {
    img:'https://digitaleat.kfc.com/menus/image/bare/kfc-10pcStickyChickyNuggets.png?q=75&w=1024',
    title:'10pc. Saucy Nuggets',
    Cal:'Cal.:440-580',
    set:'Set location for pricing.'
  }
]
// creation and catching and ids
let slider_div = document.querySelector(".slider>div");
let slider_img = document.querySelector(".slider>div>img");
let menu = document.querySelector(".items");
let special_offers=document.querySelector('.special_offers');

let p = document.createElement("p");
let p_div = document.createElement("div");


p_div.id = "p_div";

//apending && styling
p_div.appendChild(p);
slider_div.appendChild(slider_img, p_div);

slider_div.style.backgroundColor = "black";
p.innerText =
  "Prices, participation and product offering may vary. Prices higher in AK, HI, CA and third-party ordering websites. Tax, tip and fees extra. Offer includes drum, thigh, ind. mashed potatoes & gravy, and biscuit.";

// slider
arr.forEach((ele, i) => {
  let button = document.createElement("button");

  button.addEventListener("click", function () {
    handleImages(ele);
  });
  slider_div.append(button);
});
slider_div.append(p);

// Menu
menuArr.forEach((ele,i)=>{
let main_div=document.createElement('div');
let img=document.createElement('img');
let title=document.createElement('p');

img.src=ele.img;
title.innerText=ele.title;

img.style.width='150px'
console.log(ele.title)

main_div.append(img,title);
menu.appendChild(main_div)

title.style.fontWeight=600;
title.style.fontFamily="National 2 Condensed";
})

// special offers
special_menu.forEach((ele,i)=>{
  let main_div=document.createElement('div');
let img=document.createElement('img');
let p=document.createElement('p');
let p2=document.createElement('p');
let p3=document.createElement('p');

img.style.width='100%';
p.style.fontSize='12px';
p2.style.fontSize='12px';
p3.style.fontSize='12px';
p.style.fontWeight='700'

img.src=ele.img;
p.innerText=ele.title;
p2.innerText=ele.Cal;
p3.innerText=ele.set;



main_div.append(img,p,p2,p3)
special_offers.appendChild(main_div)
})

// Related function
function handleImages(ele) {
  slider_img.src = ele;
}
