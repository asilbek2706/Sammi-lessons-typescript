function infiteLoop(): never{
    while (true) {
        console.log('Hello')
    }
}

infiteLoop(); // Bu funksiya hech qachon tugamaydi

/*
function throwError(message: string): never {
    throw new Error(message);
}

async function fetchData(){
      try {
          const response = await fetch("https://jsonplaceholder.typicode.com/uses");
          if(!response.ok){
              throwError('No data found.');
          }
          const data = await response.json();
          console.log(data);
      } catch (error) {
          throwError('No data found.');
      }
}

fetchData();*/
