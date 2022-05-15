import fetch from 'cross-fetch'

export async function quote(){
        const res = await fetch('https://positive-vibes-api.herokuapp.com/quotes/random');
        if (res.ok){
            const data = await res.json();
            const jsonFrases = data;
    
            const objFrases = JSON.parse(JSON.stringify(jsonFrases));

            var frase = objFrases.data;
        }

        return frase;
}