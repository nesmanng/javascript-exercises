const findTheOldest = function(array) {
    return array.reduce((oldestPerson, currentPerson) => {
        const oldest  = oldestPerson.yearOfDeath ? oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
                                                : new Date().getFullYear() - oldestPerson.yearOfBirth;
        const current = currentPerson.yearOfDeath ? currentPerson.yearOfDeath - currentPerson.yearOfBirth
                                                : new Date().getFullYear() - currentPerson.yearOfBirth;
        return oldest >= current ? oldestPerson : currentPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
