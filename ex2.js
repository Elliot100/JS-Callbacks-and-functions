const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function teaAndBiscuits() {
  reader.question("Do you like tea? (eg. yes/no) :", function (ans1) {
    console.log(`you replied ${ans1}`);
    reader.question("Do you like biscuits? (eg. yes/no) :", function (ans2) {
        console.log(`you replied ${ans2}`);

        const res1 = (ans1 === 'yes')? 'do' : 'don\'t';
        const res2 = (ans2 === 'yes')? 'do' : 'dont\'t';
        console.log(`So you ${res1} want tea and you ${res2} want biscuits.`);
        reader.close();
    });
  });
}

teaAndBiscuits();