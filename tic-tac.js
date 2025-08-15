
// boxes.forEach((box) => {
//     box.addEventListener('click', () => {
//         // console.log('click')
//         if (valueBox === 'true') {
//             box.innerText = 'X';
//             valueBox = 'false'
//             // box.disabled = true;
//         }
//         else {
//             box.innerText = 'O';
//             valueBox = 'true'
//             // box.disabled = true;
//         }
//         box.disabled = true;
//         forResultS()
//     })
// })
// function forResultS() {

//     for (let pattern of forResult) {
// console.log(pattern[0] , pattern[1] , pattern[2])
// console.log(boxes[pattern[0]].innerText
// , boxes[pattern[1]].innerText
// , boxes[pattern[2]].innerText
// , boxes[pattern[3]].innerText
// , boxes[pattern[4]].innerText
// , boxes[pattern[5]].innerText
// , boxes[pattern[6]].innerText  
// , boxes[pattern[7]].innerText
// , boxes[pattern[8]].innerText
// )


// let pos1 = boxes[pattern[0]].innerText;
// resultMsg.innerText = `Winner is {pos1}`;
// console.log(pos1)
// let pos2 = boxes[pattern[1]].innerText;
// let pos3 = boxes[pattern[2]].innerText;
// let pos4 = boxes[pattern[3]].innerText;
// let pos5 = boxes[pattern[4]].innerText;
// let pos6 = boxes[pattern[5]].innerText;
// let pos7 = boxes[pattern[6]].innerText;
// let pos8 = boxes[pattern[7]].innerText;
// let pos9 = boxes[pattern[8]].innerText;

// if (pos1 === '' || pos2 === '' || pos3 === '') {
//     if (pos1 === pos2 && pos2 === pos3) {
//         console.log('winner')
//         console.log(pos1)
//     }
// }
// else if (pos4 === '' || pos5 === '' || pos6 === '') {
//     if (pos4 === pos5 && pos5 === pos6) {
//         console.log('winner')
//         console.log(pos4)
//     }
// }
// else if (pos7 === '' || pos8 === '' || pos9 === '') {
//     if (pos7 === pos8 && pos8 === pos9) {
//         console.log('winner')
//         console.log(pos7)
//     }
// }
// else if (pos1 === '' || pos4 === '' || pos7 === '') {
//     if (pos2 === pos4 && pos4 === pos7) {
//         console.log('winner')
//         console.log(pos1)
//     }
// }
// else if (pos2 === '' || pos5 === '' || pos8 === '') {
//     if (pos2 === pos5 && pos5 === pos8) {
//         console.log('winner')
//         console.log(pos2)
//     }
// }
// else if (pos3 === '' || pos6 === '' || pos9 === '') {
//     if (pos3 === pos6 && pos6 === pos9) {
//         console.log('winner')
//         console.log(pos3)
//     }
// }
// else if (pos1 === '' || pos5 === '' || pos9 === '') {
//     if (pos1 === pos5 && pos5 === pos9) {
//         console.log('winner')
//         console.log(pos1)
//     }
// }
// else if (pos3 === '' || pos5 === '' || pos7 === '') {
//     if (pos3 === pos5 && pos5 === pos7) {
//         console.log('winner')
//         console.log(pos3)
//     }
// }
// else{
// console.log('looser')
// }

//     }
// }


const btn = document.getElementsByTagName('button')
const boxes = document.querySelectorAll('.b');
const forResult = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resultMsg = document.querySelector('#result');
let valueBox = 'true';

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (box.innerText === '') {
            if (valueBox === 'true') {
                box.innerText = 'X';
                valueBox = 'false';
            } else {
                box.innerText = 'O';
                valueBox = 'true';
            }
            box.disabled = true;
            forResultS();
        }
    });
});

function forResultS() {
    for (let pattern of forResult) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== '' && pos1 === pos2 && pos2 === pos3) {
            resultMsg.innerText = `Winner is ${pos1}`;
            // valueBox = 'a'
            // boxes.forEach((box) => {
            //     box.disabled = true
            // }); // Disable all boxes
            return;
        }
    }
}

function resetGame(){
    console.log('c')
    boxes.forEach((box) => {
            box.innerText = '';
        }); 
        resultMsg.style.display = 'none'
}













// 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
