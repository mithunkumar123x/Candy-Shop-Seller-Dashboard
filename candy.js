// Fetch candy data from the API
function fetchCandyData() {
    fetch('https://api.example.com/candies')
      .then(response => response.json())
      .then(data => displayCandyData(data))
      .catch(error => console.log(error));
  }
  
  // Display candy data in the HTML
  function displayCandyData(candies) {
    const candyList = document.getElementById('candy-list');
    candyList.innerHTML = '';
  
    candies.forEach(candy => {
      const candyItem = document.createElement('div');
      candyItem.innerHTML = `
        <h3>${candy.name}</h3>
        <p>Description: ${candy.description}</p>
        <p>Price: $${candy.price}</p>
        <p>Stock: ${candy.stock}</p>
      `;
  
      candyList.appendChild(candyItem);
    });
  }
  
  // Buy one candy
  function buyOne() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceElement.innerText);
  
    fetch('https://api.example.com/buy', {
      method: 'POST',
      body: JSON.stringify({ quantity: 1 }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          totalPriceElement.innerText = totalPrice + data.price;
          fetchCandyData();
        }
      })
      .catch(error => console.log(error));
  }
  
  // Buy two candies
  function buyTwo() {
    const totalPriceElement = document.getElementById('total-price');
    const totalPrice = parseInt(totalPriceElement.innerText);
  
    fetch('https://api.example.com/buy', {
      method: 'POST',
      body: JSON.stringify({ quantity: 2 }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          totalPriceElement.innerText = totalPrice + data.price;
          fetchCandyData();
        }
      })
      .catch(error => console.log(error));
  }
  
  // Fetch candy data on page load
  document.addEventListener('DOMContentLoaded', () => {
    fetchCandyData();
  });
  