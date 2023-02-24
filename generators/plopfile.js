module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "application component",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name please?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "templates/component.js.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/index.js",
        templateFile: "templates/index.js.hbs",
      },
      {
        type: "add",
        path: "../src/components/{{pascalCase name}}/styles.js",
        templateFile: "templates/stylescomponent.js.hbs",
      },
    ],
  });
  plop.setGenerator("page", {
    description: "application page",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "page name please?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/{{pascalCase name}}.jsx",
        templateFile: "templates/pagescomponent.js.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/index.js",
        templateFile: "templates/index.js.hbs",
      },
      {
        type: "add",
        path: "../src/pages/{{pascalCase name}}/styles.js",
        templateFile: "templates/stylescomponent.js.hbs",
      }
    ],
  });
  plop.setGenerator("redux", {
    description: "application redux",

    // inquirer prompts
    prompts: [
      {
        type: "input",
        name: "name",
        message: "redux name please?",
      },
    ],

    // actions to perform
    actions: [
      {
        type: "add",
        path: "../src/redux/actions/{{name}}.js",
        templateFile: "templates/reduxaction.js.hbs",
      },
      {
        type: "add",
        path: "../src/redux/mappers/{{name}}.js",
        templateFile: "templates/reduxmappers.js.hbs",
      },
      {
        type: "add",
        path: "../src/redux/reducers/{{name}}.js",
        templateFile: "templates/reduxreducer.js.hbs",
      },
    ],
  });
};
