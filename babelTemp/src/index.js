
const person = {
    name: '123',
    age: '456',
    info: {
        fimaly: {
            address: 'ss',
            phone: 123
        }
    }
}

const fn = () => {
    let b
    if (person?.info?.fimaly) {
        b = person.info.fimaly
    }
  console.log("a===>" + b);
};


const isHas = [1,2,3].includes(2);

const p = new Promise((resolve, reject) => {
    resolve(100);
});
