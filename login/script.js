let users = []

const userArr = localStorage.getItem('users')

if (userArr !== null) {
    users = JSON.parse(userArr)
}

const filters = {
    username: '',
    password: ''
}

const renderUser = function (users, filters) {
    filteredUser = users.filter(function (user) {
        return user.username.toLowerCase().includes(filters.username.toLowerCase())
    })
    filteredUser.forEach(function (user) {
    })
}

renderUser(users, filters)

document.querySelector('#username').addEventListener('input', function(e) {
    filters.username = e.target.value
    renderUser(users, filters)
})

document.querySelector('#password').addEventListener('input', function(e) {
    filters.password = e.target.value
    renderUser(users, filters)
})

document.querySelector('#submit').addEventListener('click', function(e) {
    e.preventDefault()
    
    users.findIndex(function (user) {
        const welcome = `welcome ${user.username}`
        if (user.username === filters.username && user.password === filters.password) {
            alert(welcome)
            document.querySelector('body').innerHTML = ''
            
        } else {
            alert('your username or password is wrong')
           
        }
       
    })
   
    
    
})



