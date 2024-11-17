function exerciseOfTheDay() {
    return function(exerciseName) {
        return `Today's exercise: ${exerciseName}`;
    };
}
const exercise = exerciseOfTheDay();
console.log(exercise("Running"));  
console.log(exercise("Swimming")); 
console.log(exercise("Dancing"));  
console.log(exercise("Fencing")); 
