// Fetching user data
async function getUserFile() {
     let response = await fetch('https://jsonplaceholder.typicode.com/users');
     if (!response.ok) {
         throw new Error('User data contains some error');
     }
     return response.json();
 }

 // Displaying user data
 async function displayUserFile() {
     let userData = document.getElementById('user-dataFile');
     
     try {
         let users = await getUserFile();
         let listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`).join('');
         userData.innerHTML = listItems;
     } catch (error) {
         console.log('Error fetching data:', error);
         userData.innerHTML = '<li>Error fetching user data. Please try again later.</li>';
     }
 }

 // Button functionality
 let displayButton = document.getElementById('displayButton');
 let hideButton = document.getElementById('hideButton');
 let userData = document.getElementById('user-dataFile');

 displayButton.addEventListener('click', () => {
     userData.style.display = 'block';
     displayUserFile();
 });

 hideButton.addEventListener('click', () => {
     userData.style.display = 'none';
 });