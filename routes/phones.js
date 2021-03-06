var express = require('express')
var app = express()
var moment = require('moment')
const JSONdb = require('simple-json-db')
const db = new JSONdb('./database/database.json')

app.get('/phones', (req, res) => {
  res.json({isError:false, data:db.JSON()})
})

app.get('/phones/set', (req, res) => {
  db.set('phones', [
    {
      id: 'phone-1',
      name: 'iPhone 11 Pro Max',
      manufacturer: 'Apple',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'apple-iphone-11-pro-max-.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-2',
      name: 'iPhone 11',
      manufacturer: 'Apple',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'apple-iphone-11-pro.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-3',
      name: 'iPhone 12 Pro Max',
      manufacturer: 'Apple',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'apple-iphone-12-pro-max-.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-4',
      name: 'iPhone 12 Pro Max',
      manufacturer: 'Apple',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'apple-iphone-12-pro-max-.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-5',
      name: 'Pixel 5',
      manufacturer: 'Google',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'google-pixel-5-5g.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-6',
      name: 'Galaxy F22',
      manufacturer: 'Samsung',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'samsung-galaxy-f22.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-7',
      name: 'Galaxy M32',
      manufacturer: 'Samsung',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'samsung-galaxy-m32.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-8',
      name: 'ROG Phone 3',
      manufacturer: 'Asus',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'asus-rog-phone-3-zs661ks.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    },
    {
      id: 'phone-9',
      name: 'Zenfone 8',
      manufacturer: 'Asus',
      description: 'lorem ipsum dolor sit amet consectetur.',
      color: 'black',
      price: 769,
      imageFileName: 'asus-zenfone-8-flip.jpg',
      screen: '4,7 inch IPS',
      processor: 'A10 Fusion',
      ram: 2,
    }
  ])

 
  res.json({ isError: false, message: 'catalouge set' })
})



module.exports = app
