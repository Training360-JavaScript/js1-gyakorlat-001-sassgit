const personDataLog = ({ firstname = "John", lastname = "Doe", age = 33 } = {}) => {
    return `My name is ${firstname} ${lastname}. I'm ${age} year${age > 1 ? "s" : ""} old.`
}