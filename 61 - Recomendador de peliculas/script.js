function recomendar(genero){
    let edad = document.getElementById("edad").value;
    let recomendacion = document.getElementById("recomendacion");

    switch(genero){
        case 'drama':
            if(edad < 13) {
                recomendacion.innerHTML = "<p>Casa Blanca</p><a href='https://tv.apple.com/gt/movie/casablanca/umc.cmc.6i7o1550iyqet6xexqniqyp4k?action=play'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else if(edad < 16){
                recomendacion.innerHTML = "<p>The Shawnshank Redeption</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else {
                recomendacion.innerHTML = "<p>Taxi Driver</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            }
            break;
        case 'comedia':
            if(edad < 13) {
                recomendacion.innerHTML = "<p>Back to the Future</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else if(edad < 16){
                recomendacion.innerHTML = "<p>The Truman Show</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else {
                recomendacion.innerHTML = "<p>The Wolf of Wall Street</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            }
            break;
        case 'musical':
            if(edad < 13) {
                recomendacion.innerHTML = "<p>La La Land</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else if(edad < 16){
                recomendacion.innerHTML = "<p>Interstellar 555</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else {
                recomendacion.innerHTML = "<p>The Rocky's Horror Picture Show</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            }
            break;
        case 'crimen':
            if(edad < 13) {
                recomendacion.innerHTML = "<p>No hay recomencaciones</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else if(edad < 16){
               recomendacion.innerHTML = "<p>El Secreto de tus ojos</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else {
                recomendacion.innerHTML = "<p>The Goldfather</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            }
            break;
        case 'psicho':
            if(edad < 13) {
                recomendacion.innerHTML = "<p>No hay recomendación para esta edad</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";;
            } else if(edad < 16){
                recomendacion.innerHTML = "<p>El efecto Mariposa</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            } else {
                recomendacion.innerHTML = "<p>American Psycho</p><a href='#'>Enlace</a><img src='https://placehold.co/600x400/005599/000'>";
            }
            break;
    }
}