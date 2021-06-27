const Employee = require("../lib/Employee");

test("sets user's name using constructor function", () => {
    const name = "Bill Lumbergh";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
})

test("sets user's ID using constructor function", () => {
    const id = 5;
    const employee = new Employee("Bill Lumbergh", id);
    expect(employee.id).toBe(id);
})

test("sets user's email using constructor function", () => {
    const email = "bill-lumbergh@officespace.com";
    const employee = new Employee("Bill Lumbergh", 5, email);
    expect(employee.email).toBe(email);
})

test("gets name when running getName()", () => {
    const name = "Michael Bolton";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
})

test("gets id when running getId()", () => {
    const id = 11;
    const employee = new Employee("Michael Bolton", id);
    expect(employee.getId()).toBe(id);
})

test("gets email when running getEmail()", () => {
    const email = "michael-bolton@officespace.com";
    const employee = new Employee("Michael Bolton", 11, email);
    expect(employee.getEmail()).toBe(email);
})

test("returns 'Employee' when running getRole()", () => {
    const role = "Employee";
    const employee = new Employee("Peter Gibbons", 13, "peter-gibbons@officespace.com");
    expect(employee.getRole()).toBe(role);
})