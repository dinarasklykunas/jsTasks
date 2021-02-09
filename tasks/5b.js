var houses = [
    { name: 'Targaryen', motto: 'Fire and Blood' },
    { name: 'Stark', motto: 'Winter is Coming' },
    { name: 'Bolton', motto: 'Our Blades Are Sharp' },
    { name: 'Greyjoy', motto: 'We Do Not Sow' },
    { name: 'Tully', motto: 'Family, Duty, Honor' },
    { name: 'Arryn', motto: 'As High as Honor' },
    { name: 'Lannister', motto: 'Hear Me Roar!' },
    { name: 'Tyrell', motto: 'Growing Strong' },
    { name: 'Baratheon', motto: 'Ours is the Fury' },
    { name: 'Martell', motto: 'Unbowed, Unbent, Unbroken' }
]

const getMotto = (name) => {
    let found = houses.find(h => h.name === name)
    return found ? found.motto : ''
}

console.log(getMotto('Stark'))
console.log(getMotto('Tyrell'))
console.log(getMotto('Tyrellis'))