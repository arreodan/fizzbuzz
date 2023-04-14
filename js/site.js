function getValues() {
  let fizzValue = document.getElementById('fizzValue').value;
  let buzzValue = document.getElementById('buzzValue').value;
  let stopValue = document.getElementById('stopValue').value;

  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);

if (Number.isInteger(fizzValue) == false || Number.isInteger(buzzValue) == false){
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Please enter a valid Fizz and Buzz values",
      backdrop: false,
    });
}



  stopValue = parseInt(stopValue);
  let startValue = 1;

  if (Number.isInteger(stopValue) && stopValue < 5001) {
    let array = generateFizzBuzz(startValue, stopValue);
    displayFizzBuzz(array, fizzValue, buzzValue);
  } else {Swal.fire({
    icon: "error",
    title: "Oops!",
    text: "Please enter a valid stop value",
    backdrop: false,
  });

  }
}

function generateFizzBuzz(start, end) {
  let basketOfNumbers = [];

  for (let number = start; number <= end; number = number + 1) {
    basketOfNumbers.push(number);
  }

  return basketOfNumbers;
}

function displayFizzBuzz(numbers, fizzValue, buzzValue) {
  let results = "";

  for (let i = 0; i < numbers.length; i = i + 1) {
    let currentNumber = numbers[i];

    if (currentNumber % fizzValue == 0 && currentNumber % buzzValue == 0) {
      results += `<tr><td class="fizzBuzz">FizzBuzz</td></tr>`;
    } else if (currentNumber % fizzValue == 0) {
      results += `<tr><td class="bg-fizz bolder">Fizz</td></tr>`;
    } else if (currentNumber % buzzValue == 0) {
      results += `<tr><td class="bg-buzz bolder">Buzz</td></tr>`;
    } else {
      results += `<tr><td class="bolder">${currentNumber}</td></tr>`;
    }
  }

  let tableBody = document.getElementById("results");
  tableBody.innerHTML = results;
}
