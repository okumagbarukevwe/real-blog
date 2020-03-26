let users = []



const filters = {
    firstName: '',
    lastName: '',
    email: '',
    areaCode: '',
    phoneNumber:'',
    username: '',
    password: ''
}
 



document.querySelector('#firstName').addEventListener('input', function(e) {
    filters.firstName = e.target.value
  
})

document.querySelector('#lastName').addEventListener('input', function(e) {
    filters.lastName = e.target.value
    
})

document.querySelector('#email').addEventListener('input', function(e) {
    filters.email = e.target.value
   
})

document.querySelector('#areaCode').addEventListener('input', function(e) {
    filters.areaCode = e.target.value
    
})
document.querySelector('#phoneNumber').addEventListener('input', function(e) {
    filters.phoneNumber = e.target.value
    
})


document.querySelector('#username').addEventListener('input', function(e) {
    filters.username = e.target.value
   
})

document.querySelector('#password').addEventListener('input', function(e) {
    filters.password = e.target.value
    
})


const RandomNum = Math.random() * Math.random() * Math.random() + 'e'
// console.log(RandomNum)

document.querySelector('#submit').addEventListener('click', function(e) {
    e.preventDefault()
    userArr = localStorage.getItem('users')

    if (userArr !== null) {
        users = JSON.parse(userArr)
    }
    
   
    users.push({
        id: RandomNum,
        firstName: filters.firstName,
        lastName: filters.lastName,
        email: filters.email,
        areaCode: filters.areaCode,
        phoneNumber:filters.phoneNumber,
        username: filters.username,
        password: filters.password
    })

    users = JSON.stringify(users)

    localStorage.setItem('users', users)
    
    
    document.querySelector('.fillForm').innerHTML = ''
    // const a1 = document.createElement('a').setAttribute('href', '#')
    // a1.textContent = 'Your Page'
    // const p1 = document.createElement('p').setAttribute('class', 'popUp')
    // p1.textContent = 'Thanks for registering'
    // document.querySelector('.AfterReg').appendChild(p1)
    // const p2 = document.createElement('p').setAttribute('class', 'secondPop')
    // p2.textContent = 'Go to'/* + a */
    // document.querySelector('.AfterReg').appendChild(p2)
    // window.open('../user/index.html')
    alert('thanks for registering')
    const p1 = document.querySelector('.popUp')
    p1.textContent = 'Thanks for registering'
    const p2 = document.querySelector('.secondPop')
    p2.textContent = 'Go to' 
    const a1 = document.querySelector('.popUpId')
    a1.textContent = 'Your Page'
})

    
    
console.log(users)