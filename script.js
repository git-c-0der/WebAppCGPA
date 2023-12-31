function calculateCGPA() {
    // all course inputs
    const courseInputs = document.querySelectorAll('.course-input');

    let totalGradePoints = 0;
    let totalCredits = 0;

    // Calculate total grade points and credits
    courseInputs.forEach(input => {
        const grade = input.querySelector('.grade').value;
        const credits = 1;

        if (!isNaN(credits)) {
            totalGradePoints += calculateGradePoints(grade) * credits;
            totalCredits += credits;
        }
    });

    const cgpa = totalCredits === 0 ? 0 : totalGradePoints / totalCredits;

    const cgpaElement = document.getElementById('cgpa');
    cgpaElement.textContent = cgpa.toFixed(2);

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = (cgpa / 4) * 100 + '%';
     
     updateProgressBarColor(cgpa);
}
CGPA
function updateProgressBarColor(cgpa) {
    const progressBar = document.getElementById('progress-bar');


    const percentage = (cgpa / 10) * 100;
    progressBar.style.width = `${percentage}%`;

    // Set color based on CGPA range
    if (cgpa >= 8.0) {
        progressBar.className = 'green';
    } else if (cgpa >= 6.0) {
        progressBar.className = 'yellow';
    } else if (cgpa >= 4.0) {
        progressBar.className = 'orange';
    } else {
        progressBar.className = 'red';
    }
}

function calculateGradePoints(grade) {
    //your grade 
    const gradePointMapping = {
        'A+': 10.0,
        'A': 9.0,
        'B+': 8.0,
        'B': 7.0,
        'C+': 6.0,
        'C': 5.0,
        'D': 4.0,
        'F': 3.0
    };

    return gradePointMapping[grade] || 0;
}

//Reset
function resetForm() {
    document.getElementById('courses').innerHTML = '';
    document.getElementById('cgpa').textContent = '0.00';
    document.getElementById('progress-bar').style.width = '0';
}

// Function to add course input fields
function addCourse() {
    const coursesDiv = document.getElementById('courses');

    const courseDiv = document.createElement('div');
    courseDiv.classList.add('course-input');

    courseDiv.innerHTML = `
        <input type="text" placeholder="Course Name">
        <input type="text" placeholder="Grade" class="grade"> `;
    coursesDiv.appendChild(courseDiv);
}
// Function to remove the last added course input fields
function removeCourse() {
    const coursesDiv = document.getElementById('courses');
    const courseInputs = coursesDiv.getElementsByClassName('course-input');

    if (courseInputs.length > 0) {
        coursesDiv.removeChild(courseInputs[courseInputs.length - 1]);
    }
}

addCourse();
