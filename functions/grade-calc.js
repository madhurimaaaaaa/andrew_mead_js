// challenge

let findGrade = function (studentscore = 18, totalScore = 20) {
    let percentage = studentscore / totalScore * 100
    if (percentage >= 90) {
        letterGrade = "A"
    }
        else if (percentage >= 80) {
            letterGrade = "B"
        }
        return `You got a ${letterGrade} (${percentage}%)`
    } 
    

let percentageGot = findGrade(16)
console.log(percentageGot)