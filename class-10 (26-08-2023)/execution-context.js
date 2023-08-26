// Function Declaration
function moviesForWeekend() {
    const movies = ["Jailer", "Oppenheimer", "Kick", "Barbie"];
    function getName(movieArray, idx) {
        return movieArray[idx];    
    }
    return getName(movies, 2)
}

// Function Execution/Invocation
const movie = moviesForWeekend();
console.log(movie);