function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 34;
    var country = country || 'MX';

    console.log(name, age, country);
}

function newAdmin(name='Oscar', age=34, country='CL') {
    console.log(name, age, country);
}

newUser();
newUser('David', 15, 'COL');

newAdmin();
newAdmin('Ana', 18, 'PE');