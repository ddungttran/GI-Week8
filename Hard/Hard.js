function createPII(name, ssn) {
    const PII = { 
        name: name, 
        SSN: ssn 
    };

    return {
        getName: function() {
            return PII.name;
        }
    };
    return {
        getSSN: function() {
            return PII.ssn;
        }
    };
}
// Create an instance of PII
const patient2 = createPII("John", "123-45-6789");
console.log(patient2.name); 
console.log(patient2.getName()); 
console.log(patient2.getSSN());
