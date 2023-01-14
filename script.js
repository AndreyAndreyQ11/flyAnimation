

// const fild = document.querySelector(".fild");
// // const translate = () => {
// //     return `style="top:0%; left:0%"`;
// // }

// // fild.insertAdjacentHTML("beforeend", `
// // <div class="object" ${setTimeout(translate, 10)}>

// // </div > 
// // `
// // )
// const foo = () => {



//     const object = document.createElement('div');
//     object.classList.add('object');   ///точку надо убрать. 


//     // размещаем в конце div class = unit
//     fild.append(object);

//     setTimeout(() => {
//         object.style.left = "-20%";
//         object.style.top = "-20%";
//         object.style.transform = `scale(11, 11)`;
//     }, 5);

//     // setTimeout(foo, 1000);
// }
// foo();


////////////////////////////////////////////////////

const block_number = document.querySelector(".block_number");
const number = document.querySelector(".number");


const blob = document.querySelector(".blob");
const options = {
    root: number,
    // rootMargin: "0px 0px -50 % 0px",
    // rootMargin: "-50px 0px -50px 0px",
    // rootMargin: "0",
    // threshold: 0
    threshold: 0,
}



const callback = function (entries, observer) {

    console.log(entries[0].isIntersecting);
    // console.log(observer);
    // if (entries[0].isIntersecting) {
    //     
    // } else {

    // }

}

let observer = new IntersectionObserver(callback, options);
observer.observe(blob);