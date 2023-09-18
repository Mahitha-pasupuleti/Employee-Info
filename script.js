// Table element
const table = document.getElementById('table');

// Constraints on Name
function checkName(name) {
    if (!name) {
        alert("Name field should not be empty! Try Again!");
        exitFunc();
    }
    var hasNumber = /\d/;
    if (hasNumber.test(name) == true) {
        alert("Name should not contain Numbers! Try Again!");
        exitFunc();
    }
}

// Constraints on Address
function checkAddress(address) {
    if (!address) {
        alert("Address field should not be empty! Try Again!");
        exitFunc();
    }
    let addressRegEx = /[a-zA-Z0-9-.:_ ]{5,100}$/;
    if (addressRegEx.test(address) == false) {
        if (address.length < 5 || address.length > 100) {
            alert("Address should be between 5 to 100 characters");
        } else {
            alert("Address is Invalid!");
        }
        exitFunc();
    }
}

// Constraints on Salary
function checkSalary(salary) {
    if (!salary) {
        alert("Salary field should not be empty! Try Again!");
        exitFunc();
    }
    let hasCharacter = /[^0-9]/;
    if (hasCharacter.test(salary) == true) {
        alert("Salary should not contain Characters! Try Again!");
        exitFunc();
    }
}



// Creating new Employee entry into existing table
function createNewEntry() {

    try {
        // Input of Employee Details
        const name = window.prompt("Enter Employee Name:");
        checkName(name);
        const address = window.prompt("Enter Employee Address:");
        checkAddress(address);
        const salary = window.prompt("Enter Employee Salary:");
        checkSalary(salary);

        // Create a new row in table
        const tableRowNew = document.createElement('tr');

        // Create table data enties in table
        let tableDataName = document.createElement('td');
        let tableDataAddress = document.createElement('td');
        let tableDataSalary = document.createElement('td');

        // Add employee data to the td elements
        tableDataName.innerHTML = name;
        tableDataAddress.innerHTML = address;
        tableDataSalary.innerHTML = salary;

        // Append the entries to the table
        table.appendChild(tableRowNew);
        tableRowNew.appendChild(tableDataName);
        tableRowNew.appendChild(tableDataAddress);
        tableRowNew.appendChild(tableDataSalary);

    } catch (error) {
        // Error
    }

}