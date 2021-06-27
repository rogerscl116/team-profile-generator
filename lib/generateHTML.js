const fs = require("fs");
const path = require("path");
const templatesDir = path.resolve(__dirname, "../templates");

const renderHTML = function(employees) {
    const html = [];

    // filter through managers
    html.push(...employees
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => renderManager(manager))
    );

    // filter through engineers
    html.push(...employees
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => renderEngineer(engineer))
    );
  
    // filter through interns
    html.push(...employees
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => renderIntern(intern))
    );
      
      return renderMain(html.join(""));
}

// creates the HTML div for each manager
const renderManager = function(manager) {
    let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
    template = replaceHTML(template, "name", manager.getName());
    template = replaceHTML(template, "role", manager.getRole());
    template = replaceHTML(template, "email", manager.getEmail());
    template = replaceHTML(template, "id", manager.getId());
    template = replaceHTML(template, "officeNumber", manager.getOfficeNumber());
    return template;
  };
  
// creates the HTML div for each engineer
  const renderEngineer = function(engineer) {
    let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
    template = replaceHTML(template, "name", engineer.getName());
    template = replaceHTML(template, "role", engineer.getRole());
    template = replaceHTML(template, "email", engineer.getEmail());
    template = replaceHTML(template, "id", engineer.getId());
    template = replaceHTML(template, "github", engineer.getGithub());
    return template;
  };
  
// creates the HTML div for each intern
  const renderIntern = function(intern) {
    let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
    template = replaceHTML(template, "name", intern.getName());
    template = replaceHTML(template, "role", intern.getRole());
    template = replaceHTML(template, "email", intern.getEmail());
    template = replaceHTML(template, "id", intern.getId());
    template = replaceHTML(template, "school", intern.getSchool());
    return template;
  };


// takes array from renderHTML function and creates the index.html file
const renderMain = function(html) {
    const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");

    return replaceHTML(template, "team", html);
}

// replaces all the placeholders in the html templates
const replaceHTML = function(template, placeholder, value) {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
}

module.exports = renderHTML;        