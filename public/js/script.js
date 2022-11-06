import { annotate } from 'https://unpkg.com/rough-notation?module';

let respData = document.getElementById('response_data');
let queryLink = document.getElementById('query-link');

fetch('https://indianpincodeapi.herokuapp.com/pincode')
    .then((res) => res.json())
    .then((data) => {
        // console.log(data[Math.floor(Math.random()*data.length)]);
        let responseData = data[Math.floor(Math.random() * data.length)];
        queryLink.innerText = `https://indianpincodeapi.herokuapp.com/pincode?Pincode=${responseData.Pincode}`;
        respData.innerText = JSON.stringify(responseData);
    })
    .catch((error) => {
        queryLink.innerText = "Error";
        respData.innerText = "Error";
    })



const n = document.querySelector('#link');
const n1 = document.querySelector('#query');
// const n2 = document.querySelector('.note');
const a = annotate(n, { type: 'underline', color: 'blue', strokeWidth: 5 });
const a1 = annotate(n1, { type: 'circle', color: 'red', padding: 6 });
// const a2 = annotate(n2, { type: 'highlight', color: 'yellow', iterations: 1, multiline: true });
a.show();
a1.show();
// a2.show();

new ClipboardJS('.copy-icon');