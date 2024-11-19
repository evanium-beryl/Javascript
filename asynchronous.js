// setTimeout(() => {
//      console.log('this will log in 2 seconds')
// }, 2000);


// function greet() {
//      console.log('hello from greet function')
// }
// setTimeout(greet, 4000)


// setTimeout(() => {
//      console.log('data fetched')
// }, 2000)

// console.log('data fetching')

// setTimeout(() => {
//      console.log('datas')
// }, 4000)



// const sampleData = [
//     { id: 1, name: 'item1', description: 'Description for item 1' },
//     { id: 2, name: 'item2', description: 'Description for item 2' },
//     { id: 3, name: 'item3', description: 'Description for item 3' },
// ]

//async function fetchData() {
 //    console.log('Fetching data......')

//     return await new Promise((resolve, reject) => {
  //        setTimeout(() => {
//             resolve(sampleData)
//               console.log('data successfully fetched', sampleData)
 //         }, 4000)
  //   })
//}

//fetchData();

//async function displayData() {
 //    const dataList = document.getElementById('data-list')
     //    try {
     //         const data = await fetchData()
 //    const listItems = data.map(item => `<li>${item.name}:
 //         ${item.description}</li>`).join('');
 //    dataList.innerHTML = listItems;
//} catch (error) {
//     console.log('the error in ur code is:', error)
//}
//}

//displayData()


// function to fetch user data
async function fetchUserData() {
     const response = await fetch('https:jsonplaceholder.typicode.com/users');
     if (!response.ok) {
          throw new Error('User data contains some error')
     }
     return response.json();
}

// function to display data in HTML
async function displayUserData() {
     const userList = document.getElementById('user-List');
     try {
          const users = await fetchUserData();
          const listItems = users.map(user => `<li>${user.name} - ${user.email}</li>`)
          userList.innerHTML = listItems;
     } catch (error) {
          console.log('error fetching data:', error)
          userList.innerHTML = '<li> Error Fetching User Data. pls try again later. </li>'
     }

}

displayUserData()