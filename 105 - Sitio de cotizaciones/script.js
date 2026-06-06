async function cargarContenido(){
    cargarElementos();
    cargarTextos();
    await cargarCotizaciones(mostrarCotizacion);
}

function cargarElementos(){
    document.getElementById('imgLogo').setAttribute('src','logo.jpg');
    document.getElementById('titulo').textContent = "Cotizaciones Online";
    document.getElementById('imgEspera').setAttribute('src','loading.gif');
    document.getElementById('imgEspera').style.visibility = 'hidden';
}

function cargarTextos(){
    document.getElementById('UsdEur').append("EUR a USD");
    document.getElementById('UsdArs').append("ARG a USD");
    document.getElementById('BitcoinUsd').append("Bitcoin a USD");
}

function delay(ms){
    return new Promise(res => setTimeout(res, ms));
}

async function cargarCotizaciones(callback){
    try{
        document.getElementById('imgEspera').style.visibility = 'visible';
        await delay(2500);

        const r1 = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
        const datos = await r1.json();
        callback(datos);

        const r2 = await fetch('https://open.er-api.com/v6/latest/USD');
        const datos2 = await r2.json();
        document.getElementById('UsdEur').append(datos2.rates.EUR);

        const datos3 = await crearPedido('https://open.er-api.com/v6/latest/ARS');
        document.getElementById('UsdArs').append(datos3.rates.USD);
    }catch(err){
        console.error(err);

    }finally{
        document.getElementById('imgEspera').style.visibility = 'hidden';
    }
}

function mostrarCotizacion(datos){
    const price = Number(datos.price);
    document.getElementById('BitcoinUsd').append(price);
}

async function crearPedido(url){
    return new Promise(function(resolve, reject){
        const xhr = new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onload = function(){
            if(xhr.status === 200){
                resolve(JSON.parse(xhr.responseText))
            } else{
                reject(xhr.statusText);
            }
        };
        xhr.onerror = () => reject("Error de red");
        xhr.send();
    });
}