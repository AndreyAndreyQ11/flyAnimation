

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
// const number = document.querySelector(".number");



const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min)) + min;
}


const foo = () => {
    const blob = document.createElement('div');
    blob.classList.add('blob');   ///точку надо убрать.

    blob.style.animation =
        `q1 ${getRandomNumber(1, 4)}s linear forwards`;

    switch (getRandomNumber(0, 3)) {
        case 0:
            blob.style.left = getRandomNumber(0, 100) + "%";
            blob.style.top = "0%";
            break;
        case 1:
            blob.style.left = "0%";
            blob.style.top = getRandomNumber(0, 100) + "%";
            break;
        case 2:
            blob.style.left = getRandomNumber(0, 100) + "%";
            blob.style.top = "100%";
            break;
        case 3:
            blob.style.left = "100%";
            blob.style.top = getRandomNumber(0, 100) + "%";
            break;
    }



    // размещаем в конце div class = unit
    block_number.append(blob);

    // setTimeout(() => {
    //     block_number.removeChild();
    // }, 500);

}

block_number.addEventListener();
block_number.insertAdjacentHTML("beforeend", `
<div class="fon" ></div >`)

const anim = setInterval(foo, 500);

