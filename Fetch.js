console.log(1111)
console.log(2222)
setTimeout(() => console.log('aaaaa'), 5000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
console.log(3333)
console.log(4444)

for (let i = 0; i < 40000; i++) {
    console.log(i)
}