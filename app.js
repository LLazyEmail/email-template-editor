// -------
// const { getFullHtml } = require("./getFullHtml");

// NOTE regexp for finding {{href}} {{other}}
// const regexp = /{{[A-Za-z]{0,}}}/g;
// const result = getFullHtml().match(regexp);
// console.log("result", result);
// --------

const treeData = [
  {
    title: "root",
    key: "0-0",
    value: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div>{{items}}</div>
      </body>
    </html>`,
    children: [
      {
        title: "{{items}}",
        key: "0-0-0",
        value: `{{oneBlock}}
        {{twoBlocks}}
        {{anotherBlock}}`,
        children: [
          {
            title: "{{oneBlock}}",
            value: `<div><img src="https://raw.githubusercontent.com/LLazyEmail/nomoretogo_email_template/main/data/images/logo.jpeg" id="logoBlock-4" border="0" alt="" width="560" style="display: block;"></div>`,
            key: "0-0-0-0",
            children: [],
          },
          {
            title: "{{twoBlocks}}",
            value: `<div>
            <div>first block</div>
            <div>second block</div>
            </div>`,
            key: "0-0-0-1",
            children: [],
          },
          {
            title: "{{anotherBlock}}",
            value: "{{href}}{{text}}{{image}}",
            children: [
              {
                title: "{{href}}",
                value: "https://example.com",
              },
            ],
          },
        ],
      },
    ],
  },
];

const getValue = (children, parentValue) => {
  if (!children?.length) {
    return "";
  }

  let parentValueTmp = parentValue;

  children.forEach((item) => {
    if (!item.children?.length) {
      parentValueTmp = parentValueTmp.replace(item.title, item.value);

      return;
    }

    const value = getValue(item.children, item.value);
    parentValueTmp = parentValueTmp.replace(item.title, value);
  });

  return parentValueTmp;

};

console.log(getValue(treeData[0].children, treeData[0].value));
