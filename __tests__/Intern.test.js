const Intern = require("../lib/Intern");

test("sets school using constructor function", () => {
    const school = "Yale University";
    const employee = new Intern("Peter Gibbons", 13, "peter-gibbons@officespace.com", school);
    expect(employee.getSchool()).toBe(school); 
})

test("returns 'Intern' when running getRole()", () => {
    const role = "Intern";
    const employee = new Intern("Peter Gibbons", 13, "peter-gibbons@officespace.com", "Yale University");
    expect(employee.getRole()).toBe(role);
})