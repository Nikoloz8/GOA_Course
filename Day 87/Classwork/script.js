// შექმენით ციკლი, რომელიც გამოიტანს ციფრებს 1- დან, 10 - მდე.

for (let i = 1; i < 11; i++) {
    console.log(i);
}

// შექმენით ციკლი, რომელიც 0 - დან, 20 - მდე გამოიტანს ლუწ და კენტ რიცხვებს.
// output: 
// 1 კენტია
// 2 ლუწია
// 3 კენტია 
// 4 ლუწია და ა.შ

for (let i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(`${i} Even`); 
    } else {
        console.log(`${i} Odd`);  
    }
}