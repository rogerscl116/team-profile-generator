const Engineer = require("../lib/Engineer");

test("sets github name using constructor function", () => {
    const github = "tom-smykowski";
    const employee = new Engineer("Tom", 15, "tom-smykowski@officespace.com", github);
    expect(employee.github).toBe(github);
})

test("returns 'Engineer' when running getRole()", () => {
    const role = "Engineer";
    const employee = new Engineer("Tom", 15, "tom-smykowski@officespace.com", "tom-smykowski");
    expect(employee.getRole()).toBe(role);
})