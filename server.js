const express = require('express')
const { faker } = require('@faker-js/faker')
const app = express()
const port = 8000

const createUser = () => {
    newUser = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phoneNumber: faker.phone.number()
    }
    return newUser
}

const createCompany = () => {
    newCompany = {
        _id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany
}

app.get("/api/users/new", (req,res) => {
    const newUser = createUser()
    res.json(newUser)
})

app.get("/api/companies/new", (req,res) => {
    const newCompany = createCompany()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const newUser = createUser()
    const newCompany = createCompany()
    res.json({
        user: newUser,
        company: newCompany
    })
})

app.listen( port, () => console.log(`Listening on port: ${port}`) )