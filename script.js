

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

target([
    "Fuchsia",
    "Red",
    "Yellow",
    "Green",
],
    1, 2, 3
);




function target() {
    const color = [
        "Fuchsia",
        "Red",
        "Yellow",
        "Green",
    ];

    let data = {
        block_number: document.querySelector(".block_number"),
        number: document.getElementsByClassName("number"),
        fon: document.createElement('div'),
        numberColor: NaN,
        spaunBlobPermission: false,
        animationOffTime: 500,
        minSpeedBlob: 250,
        maxSpeedBlob: 350,
        spawnPoints: 5,
    };
    let { block_number, number, fon, numberColor, spaunBlobPermission, animationOffTime, minSpeedBlob, maxSpeedBlob, spawnPoints } = data;


    fon.classList.add('fon');
    let animKey;
    let animKeyStop;


    number[0].style.transitionDuration = animationOffTime + maxSpeedBlob - minSpeedBlob + "ms";

    block_number.addEventListener("mouseenter", (e) => {
        block_number.append(fon);
        numberColor = checkForRepetition();
        spaunBlobPermission = true;
        spaunBlob();

        animKey = setInterval(spaunBlob, 100);
        animKeyStop = setTimeout(() => {
            spaunBlobPermission = false;
        }, animationOffTime)


        number[0].style.color = color[numberColor];


    });

    block_number.addEventListener("mouseleave", (e) => {
        number[0].style.color = "";
        deleyBlob();
    });


    const spaunBlob = () => {
        if (spaunBlobPermission) {

            for (let i = 0; i < spawnPoints; i++) {

                const blob = document.createElement('div');
                blob.classList.add('blob');

                blob.style.animation =
                    `q1 ${getRandomNumber(minSpeedBlob, maxSpeedBlob)}ms ease-in forwards`;

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
                blob.style.backgroundColor = color[numberColor];
                block_number.append(blob);
            };
        }
    }

    const deleyBlob = () => {
        clearTimeout(animKeyStop);
        clearInterval(animKey);
        block_number.innerHTML = number[0].outerHTML;
    }

    const getRandomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min)) + min;
    };

    const checkForRepetition = () => {
        let x = Number;

        do {
            x = getRandomNumber(0, 3);
        } while (numberColor == x);

        return x;
    };
}

const a = (x) => {
    return "test1" + x;
}
const q1 = {
    [a(1)]: 11,
    [a(2)]: 22,
    [a(3)]: 33,
}

console.log(q1[a(2)]);