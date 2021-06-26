const Manager = require("../lib/Manager");

test("sets manager's office number using constructor function", () => {
    const officeNumber = 20;
    const employee = new Manager("Bill Lumbergh", 5, "bill-lumbergh@officespace.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
})

test("returns 'Manager' when running getRole()", () => {
    const role = "Manager";
    const employee = new Manager("Bill Lumbergh", 5, "bill-lumbergh@officespace.com", 20);
    expect(employee.getRole()).toBe(role);
})