'use strict';

const images = [
    { 'id': '1', 'url':'./imagens/download.jpeg' },
    { 'id': '2', 'url':'./imagens/download (1).jpeg' },
    { 'id': '3', 'url':'./imagens/download (2).jpeg' },
    { 'id': '4', 'url':'./imagens/download (3).jpeg' },
    { 'id': '5', 'url':'./imagens/download (4).jpeg' },
    { 'id': '6', 'url':'./imagens/images.jpeg' },
    { 'id': '7', 'url':'./imagens/images (1).jpeg' },
    { 'id': '8', 'url':'./imagens/images (2).jpeg' },
    { 'id': '9', 'url':'./imagens/ippo.png' },
    { 'id': '10', 'url':'./imagens/jogo-de-plataforma-tecnicas-915x720.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = ( images, container ) => {
    images.forEach ( image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages( images, containerItems );

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore( lastItem, items[0] );
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);