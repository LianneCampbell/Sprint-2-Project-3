 // FETCH and READ the Project3.JSON disk file
alert('Sprint 2 Project 3 Javascript')
console.log("Project 3 for Javascript.js");
fetch('./Project3.json')
  .then(response => response.json())
  .then(data => {

// Iterate over all the records available from the JSON file and display one of the key-value pairs of data

   data.forEach(record => {
        console.log('Student ID:', record.id);
      }); 
   data.forEach(record => {
        console.log('First Name:', record.fname);
      });

   data.forEach(record => {
        console.log('Last Name:', record.lname);
      });

    data.forEach(record => {
        console.log('Gender:', record.gender);
      });

    data.forEach(record => {
        console.log('Student:', record.isStudent);
      });

    // Log the JSON data to the console
    console.log(data); 

    // Access a value from the JSON data
    console.log(data[0].fname);

    // Loop through an array in the JSON data from Project3.JSON

        // Check age values
        data.forEach(record => {
            console.log('Age:', record.age);
          });
  })

  .catch(error => {
    // Catch any errors that occur while fetching the file
    console.error(error);
  });

// Create functions for Name, Student, and Average ages.
  function getNameList(data) {
    return `Name List: ${data.map(record => record.fname).join(', ')}`;
  }
  
  function getStudents(data) {
    return `Student List: ${data.filter(record => record.isStudent).map(record => record.fname).join(', ')}`;
  }
  
  function getAverageAge(data) {
    // Convert "age" values to numbers
    const numericAges = data.map(record => parseInt(record.age, 10));
    const totalAge = numericAges.reduce((sum, age) => sum + age, 0);
    const averageAge = totalAge / numericAges.length;

    console.log('Total Age:', totalAge);
    console.log('Average Age:', averageAge);
    return `Average Age: ${averageAge.toFixed(2)}`;
  }
  
  // Call the functions and display the results in the browser window
  fetch('Project3.json')
    .then(response => response.json())
    .then(data => {
      console.log('Data from JSON file:', data);
  
      const namelist = getNameList(data);
      const studentlist = getStudents(data);
      const averageages = getAverageAge(data);
  
      console.log(namelist);
      console.log(studentlist);
      console.log(averageages);
  
      // Display results in the browser window
      document.body.innerHTML += `<p>${namelist}</p>`;
      document.body.innerHTML += `<p>${studentlist}</p>`;
      document.body.innerHTML += `<p>${averageages}</p>`;
    })
