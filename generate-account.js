// generate email and password

const fs = require('fs');
const { argv } = require('process');
// number from agre
const number = argv[2];
console.log("number", number);

if (!number) {
    console.log('Missing number');
    process.exit(1);
}else{
    console.log(number);
    let account = [];
    for (let index = 0; index < number; index++) {
        const email = `phu${index}@gmail.com`;
        // hash password with md5
        const password = '12345';
        account.push({
            email,
            password
        });
    }

    fs.writeFileSync('resources/account.json', JSON.stringify(account));
}
