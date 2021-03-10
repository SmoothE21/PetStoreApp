fs = require('fs');
fetch = require('node-fetch');

/*
User Story 1
- Fetch the information from Pet API at https://petstore.swagger.io/v2/pet/findByStatus?status=available
    + Get the avalable pets from the petstore
    + Find pets available for adoption
- Write it (fs) to the appropriate file
*/
const apiURL = 'https://petstore.swagger.io/v2/pet/findByStatus?status=available';

fs.writeFile('availablePetList.txt', '', function (err) {
    if (err) throw err;
    console.log('Created the file!');
});

fetch(apiURL)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => data.forEach( element => 
        fs.appendFile('availablePetList.txt', element['name'] + '\n', function (err) {
            if (err) throw err;
            console.log('Added the names!');
        })
        )
    )


/*
User Story 2
- Fetch the information from Pet API at https://petstore.swagger.io/v2/pet/findByStatus?status=pending
    + Get the pending pets from the petstore (unavailable for adoption)
- Write it (fs) to the appropriate file
*/
const pendingURL = 'https://petstore.swagger.io/v2/pet/findByStatus?status=pending';

fs.writeFile('pendingPetList.txt', '', function (err) {
    if (err) throw err;
    console.log('Created the file!');
});

fetch(pendingURL)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => data.forEach( element => 
        fs.appendFile('availablePetList.txt', element['name'] + '\n', function (err) {
            if (err) throw err;
            console.log('Added the names!');
        })
        )
    )