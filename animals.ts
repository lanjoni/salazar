import fetch from 'cross-fetch'

// This code call an API with animals pictures;

export async function cat(){
    const res = await fetch('https://some-random-api.ml/img/cat');
    if (res.ok){
        const link = await res.json();
        const jsonCat = link;

        const objCat = JSON.parse(JSON.stringify(jsonCat));

        var cat = objCat.link;
    }

    return cat;
}

export async function dog(){
    const res = await fetch('https://some-random-api.ml/img/dog');
    if (res.ok){
        const link = await res.json();
        const jsonDog = link;

        const objDog = JSON.parse(JSON.stringify(jsonDog));

        var dog = objDog.link;
    }

    return dog;
}

export async function raccoon(){
    const res = await fetch('https://some-random-api.ml/img/raccoon');
    if (res.ok){
        const link = await res.json();
        const jsonRaccoon = link;

        const objRaccoon = JSON.parse(JSON.stringify(jsonRaccoon));

        var raccoon = objRaccoon.link;
    }

    return raccoon;
}

export async function duck() {
    const res = await fetch('https://random-d.uk/api/v1/random?type=png');
    if (res.ok){
        const url = await res.json();
        const jsonDuck = url;

        const objDuck = JSON.parse(JSON.stringify(jsonDuck));

        var duck = objDuck.url;
    }

    return duck;
}

export async function panda(){
    const res = await fetch('https://some-random-api.ml/img/panda');
    if (res.ok){
        const link = await res.json();
        const jsonPanda = link;

        const objPanda = JSON.parse(JSON.stringify(jsonPanda));

        var panda = objPanda.link;
    }

    return panda;
}

export async function coala(){
    const res = await fetch('https://some-random-api.ml/img/koala');
    if (res.ok){
        const link = await res.json();
        const jsonCoala = link;

        const objCoala = JSON.parse(JSON.stringify(jsonCoala));

        var coala = objCoala.link;
    }

    return coala;
}

export async function camaleao(){
    const res = await fetch('https://nekos.life/api/v2/img/lizard');
    if (res.ok){
        const url = await res.json();
        const jsonCamaleao = url;

        const objCamaleao = JSON.parse(JSON.stringify(jsonCamaleao));

        var camaleao = objCamaleao.url;
    }

    return camaleao;
}

export async function bird() {
    const res = await fetch('https://some-random-api.ml/img/birb');
    if (res.ok){
        const link = await res.json();
        const jsonBird = link;

        const objBird = JSON.parse(JSON.stringify(jsonBird));

        var bird = objBird.link;
    }

    return bird;
}

export async function fox() {
    const res = await fetch('https://some-random-api.ml/img/fox');
    if (res.ok){
        const link = await res.json();
        const jsonFox = link;

        const objFox = JSON.parse(JSON.stringify(jsonFox));

        var fox = objFox.link;
    }

    return fox;
}

export async function red() {
    const res = await fetch('https://some-random-api.ml/img/red_panda');
    if (res.ok){
        const link = await res.json();
        const jsonRed = link;

        const objRed = JSON.parse(JSON.stringify(jsonRed));

        var red = objRed.link;
    }

    return red;
}