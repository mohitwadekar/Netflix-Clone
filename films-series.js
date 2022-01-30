function toggleFilms() {
    var films=document.getElementById('films');    
    var series=document.getElementById('series');
    if (films.style.display=='none') {
        films.style.display='block';
        series.style.display='none';
    }
    
}

function toggleSeries() {
    if (series.style.display=='none') {
        series.style.display='block';
        films.style.display='none';        
    }
}