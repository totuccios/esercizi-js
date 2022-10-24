const persons = [
    {
      id: 1,
      firstName: 'Mario',
      lastName: 'Rossi',
      age: 25
    },
    {
      id: 2,
      firstName: 'Maria',
      lastName: 'Verdi',
      age: 32
    },
    {
      id: 3,
      firstName: 'Giovanni',
      lastName: 'Rossi',
      age: 35
    }
  ];
  
  const jobs = [
    {
      id: 1,
      jobTitle: 'CEO'
    },
    {
      id: 2,
      jobTitle: 'Project Manager'
    },
    {
      id: 3,
      jobTitle: 'Developer'
    }
  ];
  function fetchPersonsById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = persons.find((item) => item.id === id);
        if (item) {
          return resolve(JSON.stringify(item));
        }
        return reject(`person with id : ${id} doesn't exist`);
      }, 1000);
    });
  }
  
  function fetchJobsById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = jobs.find((item) => item.id === id);
        if (item) {
          return resolve(JSON.stringify(item));
        }
        return reject(`job with id : ${id} doesn't exist`);
      }, 500);
    });
  }
  
  Promise.race([fetchPersonsById(2), fetchJobsById(1)]).then((values) => {
    console.log(values);
  });