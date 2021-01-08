class Person {
}

class Member extends Person {
    access() {
        console.log('You have access!');
    }
}

class Guest extends Person {
    access() {
        throw new Error('you dont have access')
    }
}


class Frontend extends Member {
}

class Backand extends Member {
}

class PersonFromDifferentCompany extends Guest {
}

function openSecretDoor(member) {
    member.access()
}

openSecretDoor(new Frontend)
openSecretDoor(new Backand)
//openSecretDoor(new PersonFromDifferentCompany)
