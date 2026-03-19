enum Website {
    YouTube = 'YouTube',
    Facebook = 'Facebook',
    Instagram = 'Instagram',
    Twitter = 'Twitter',
}

const person: {
    id: number
    name: string
    isMarried: boolean
    username: string
    email: string[]
    address: {
        street: string
        suite: string
        city: string
        zipcode: string | number
        geo: [number, number]
    },
    phone: number
    website: Website
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
} = {
    "id": 1,
    "name": "Leanne Graham",
    isMarried: false,
    "username": "Bret",
    "email": ["Sincere@april.biz", "info@asil.dev"],
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": 929983874,
        "geo": [-37.3159, 81.1496]
    },
    "phone": 17707368031,
    "website": Website.Facebook,
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}