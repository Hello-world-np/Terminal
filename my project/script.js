let nextDom = document.getElementById('next');
let backDom = document.getElementById('back');

let designDom = document.querySelector('.design-part');
let SliderDom = designDom.querySelector('.design-part .list');
let thumbnailBorderDom = document.querySelector('.design-part .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.design-part .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;

nextDom.onclick = function () {
    showSlider('next');
}

backDom.onclick = function () {
    showSlider('back');
}
function showSlider(type) {
    let SliderItemsDom = SliderDom.querySelectorAll('.design-part .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.design-part .thumbnail .item');

    if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        designDom.classList.add('next');
    } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        designDom.classList.add('back');
    }

    // let timeAutoNext = 7000;

    // let runTimeOut;
    // let runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)

    // clearTimeout(runTimeOut);
    // runTimeOut = setTimeout(() => {
    //     designDom.classList.remove('next');
    //     designDom.classList.remove('back');
    // }, timeRunning);

    // clearTimeout(runNextAuto);
    // runNextAuto = setTimeout(() => {
    //     next.click();
    // }, timeAutoNext)
}
//  $("a").click(function(){
//             $("a").css("background-color","");
//             $(this).css("background-color","yellow");
//         });




// const nav = document.querySelectorAll(".nav-link");
// console.log(nav)
// nav.forEach(link => {
//     link.addEventListner('click', function () {
//         nav.forEach(l => l.classList.remove('active'));
//         this.classList.add('active');
//     });
// });

// let marker = document.querySelector("#marker");
// let item = document.querySelectorAll(".nav_link");

// function indicator(e) {
//     marker.style.left = e.offsetLeft + "px";
//     marker.style.width = e.offsetWidth + "px";

//     item.forEach(link => link.classList.remove("active"))

//     e.classList.add("active")
// }

// item.forEach(link => {
//     link.addEventListener('click', (e) => {
//         indicator(e.target);

//     })
// })
// if (item.length>0){
//     indicator(item[0])
// }
