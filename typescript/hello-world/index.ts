interface User {
    name: string
}

const greet = (user: User) => {
    console.log('Hello,', user.name)
}

const me : User = {
    name: 'td-bn',
}

greet(me)