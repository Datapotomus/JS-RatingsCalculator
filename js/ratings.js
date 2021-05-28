
function collect_ratings() {
    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    }
    let rating = 0;
    const elements = document.querySelectorAll(".rating");
    elements.forEach(function (element){
        rating = parseInt(element.id.replace("star", ""));
        ratings.count += parseInt(element.value);
        ratings.sum += parseInt(element.value) * rating;

    });

    //This is what the arrow version of it would look like.
    // elements.forEach(element => {
        
    // });
    if (ratings.count !== 0){
        ratings.average = ratings.sum / ratings.count;
    }
    return ratings;
}


document.addEventListener("change", function(){
    ratings = collect_ratings();
    document.querySelector("#average").value = ratings.average.toPrecision(3);
})
