const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;


const createUser = ()=>({
    passsword: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
});

const createCompany = () =>({
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.cityName(),
        state: faker.address.state(),
        zipcode: faker.address.zipCode(),
        country: faker.address.country(),
    }
});

console.log(createCompany())
app.get("/api/user/new",(req,res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("api/companies/new", (req,res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("api/user/company", (req,res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const userCompany = {
        user : newUser,
        company : newCompany,
    };
    res.json(userCompany);
});

app.listen(port, () => console.log(`Listening on port: ${port}`))