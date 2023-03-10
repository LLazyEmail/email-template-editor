// const { getFullHtml } = require("./getFullHtml");

// const regexp = /{{[A-Za-z]{0,}}}/g;

// const result = getFullHtml().match(regexp);
// console.log("result", result);

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
        {{twoBlocks}}`,
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
        ],
      },
    ],
  },
];

const getValue = (children, parentValue) => {
  //   console.log("call", treeData);
  if (!children?.length) {
    return "";
  }

  let parentValueTmp = parentValue;

  children.forEach((item) => {
    if (!item.children?.length) {
      parentValueTmp.replace(item.title, item.value);

      return;
    }

    // getValue(item.children, parentValueTmp);
  });

  return parentValueTmp;

  //   return getValue(treeData.children);
  //   let value = treeData.value;

  //   treeData.forEach((item) => {
  //     value = treeData.value.replace(item.title, item.value);
  //   });

  //   console.log("value", value);

  //   return value;
  // .match(regexp);
};

console.log(JSON.stringify(getValue(treeData[0].children, treeData[0].value)));
