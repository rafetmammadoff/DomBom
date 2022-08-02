let container=document.createElement("div");



container.classList.add("m-contain")
let row=document.createElement("div");
let colLg12=document.createElement("div");
let colLg4=document.createElement("div");
let colLg4_2=document.createElement("div");
let colLg4_3=document.createElement("div");
var img=document.createElement("img")

container.classList.add("container");
row.classList.add("row");
colLg12.classList.add("col-lg-12");
colLg4.classList.add("col-lg-4");
colLg4_2.classList.add("col-lg-4");
colLg4_3.classList.add("col-lg-4");

container.append(row);
row.append(colLg12);
colLg12.append(img)
img.src="./assets/img/m.webp"
img.classList.add("w-100")
img.style.height="500px"




row.append(colLg4);
let title=document.createElement("p");
title.classList.add("title")
let content=document.createElement("span");
content.classList.add("content")
let foot=document.createElement("div");
foot.classList.add("foot")
var img1=document.createElement("img")
colLg4.append(img1)
img1.src="./assets/img/m.webp"
img1.classList.add("w-100")
colLg4.append(title)
title.innerText="Lorem ipsum"
colLg4.append(content)
content.innerText="Rafet gedir yol ile Elnur verir 100 bal :) Bu hekaye de burda sona catir"
colLg4.append(foot)
foot.innerHTML="Read More <i class='fa-solid fa-angles-right'></i> "

row.append(colLg4_2);
let title1=document.createElement("p");
title1.classList.add("title")
let content1=document.createElement("span");
content1.classList.add("content")
let foot1=document.createElement("div");
foot1.classList.add("foot")
var img2=document.createElement("img")
colLg4_2.append(img2)
img2.src="./assets/img/m.webp"
img2.classList.add("w-100")
colLg4_2.append(title1)
title1.innerText="Lorem ipsum"
colLg4_2.append(content1)
content1.innerText="Rafet gedir yol ile Elnur verir 100 bal :) Bu hekaye de burda sona catir"
colLg4_2.append(foot1)
foot1.innerHTML="Read More <i class='fa-solid fa-angles-right'></i> "

row.append(colLg4_3);
let title2=document.createElement("p");
title2.classList.add("title")
let content2=document.createElement("span");
content2.classList.add("content")
let foot2=document.createElement("div");
foot2.classList.add("foot")
var img2=document.createElement("img")
colLg4_3.append(img2)
img2.src="./assets/img/m.webp"
img2.classList.add("w-100")
colLg4_3.append(title2)
title2.innerText="Lorem ipsum"
colLg4_3.append(content2)
content2.innerText="Rafet gedir yol ile Elnur verir 200 bal :) Bu hekaye de burda sona catir"
colLg4_3.append(foot2)
foot2.innerHTML="Read More <i class='fa-solid fa-angles-right'></i> "





document.body.prepend(container)