function swimmer ({name}){
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function flier ({name}){
    return {
        fly: () => console.log(`${name} fly`)
    }
}

function attackerAndWalker ({name}) {
    return {
        attack: () => console.log(`${name} attack`),
        walk: () => console.log(`${name} walk`)
    }
}

function swimmerMonsterCreator(name) {
    const monster = {name: name}

    return {
        ...monster,
        ...attackerAndWalker(monster),
        ...swimmer(monster)
    }
}
function flyingSwimmingMonsterCreator(name) {
    const monster = {name: name}

    return {
        ...monster,
        ...flier(monster),
        ...attackerAndWalker(monster),
        ...swimmer(monster)
    }
}

const monster = swimmerMonsterCreator('Monster')
monster.swim()
monster.walk()
monster.attack()

const superMonster = flyingSwimmingMonsterCreator('Super monster')
superMonster.fly()
superMonster.attack()
superMonster.swim()
superMonster.walk()
