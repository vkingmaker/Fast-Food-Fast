'use strict';
let count = 0,
order = [],
updated = [],
template = [];

let buyFood = document.getElementById('buyFood');
let itemCount = document.getElementById('items-in-chart');

document.addEventListener('click',(e)=>{
    if(e.target.tagName === 'A'){

        let food = {};
         food.quantity = 1;
        e.preventDefault();
        console.log(e.target.nextSibling);
        let addButton = e.target;
        food.id = ++count;
        food.name = addButton.getAttribute('data-name');
        if(+addButton.nextSibling.value){
        food.quantity = +addButton.nextSibling.value;
        }
        order.push(food);
        if(localStorage){
            localStorage.setItem(food.quantity+ '', JSON.stringify(order));
        }
        let gotten = localStorage.getItem(food.quantity + '');

        buyFood.innerHTML = `<tr></tr>`

        let storeLen = Object.keys(localStorage);

        updated = localStorage.getItem(storeLen.pop());

        console.log('Finally ',JSON.parse(gotten));
        console.log('updated List', JSON.parse(updated));

        itemCount.textContent = count;

        template = '<tr>' + JSON.parse(updated).map((value)=>{
           return  `<td>${value.name}</td><td>${value.quantity}</td><td><a href="" class="add" style="background-color:red;">delete</a></td></tr>`
        }).join('') + '</tr>';

        buyFood.insertAdjacentHTML('beforeend',template);
        console.log('This is the template',template);
    }
});
