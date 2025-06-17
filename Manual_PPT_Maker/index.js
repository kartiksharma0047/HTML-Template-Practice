JsonData = [
  {
    page: "Page1",
    Data: [
      {
        component: "Title",
        font_size: "40px",
        margin: "10px 0",
        color: "black",
        text_align: "left",
        content: "Title of Project",
      },
      {
        component: "Description",
        font_size: "15px",
        margin: "5px 0",
        color: "black",
        text_align: "left",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla neque, posuere eu porta eu, ultricies quis elit. Phasellus ac euismod est. Nulla non dui ut turpis vehicula interdum. Nullam in mauris vitae sapien aliquam commodo. Maecenas euismod massa in leo pellentesque varius ut eu diam. Nulla ac iaculis eros.",
      },
      {
        component: "Heading",
        font_size: "30px",
        margin: "10px 0",
        color: "black",
        content: "Heading",
      },
      {
        component: "Section",
        display: "flex",
        align_items: "center",
        justify_content: "space-evenly",
        height: "300px",
        width: "100%",
        margin: "15px 0",
        child_components: [
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "300px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Sub Heading 1",
              },
              {
                component: "Image",
                display: "flex",
                align_items: "center",
                justify_content: "center",
                image_link: "./Images/Screenshots_PPT/Xebia_logo.png",
                height: "150px",
                width: "150px",
              },
            ],
          },
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "300px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Sub Heading 2",
              },
              {
                component: "Table",
                child_components: [
                  {
                    component: "table_heading",
                    font_size: "17px",
                    color: "black",
                    text_align: "center",
                    border: "1px solid black",
                    padding: "6px 13px",
                    content: "Head 1",
                    child_components_extended: [
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 1",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 2",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 3",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 4",
                      },
                    ],
                  },
                  {
                    component: "table_heading",
                    font_size: "17px",
                    color: "black",
                    text_align: "center",
                    border: "1px solid black",
                    padding: "6px 13px",
                    content: "Head 2",
                    child_components_extended: [
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 5",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 6",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 7",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 8",
                      },
                    ],
                  },
                  {
                    component: "table_heading",
                    font_size: "17px",
                    color: "black",
                    text_align: "center",
                    border: "1px solid black",
                    padding: "6px 13px",
                    content: "Head 3",
                    child_components_extended: [
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 9",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 10",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 11",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 12",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

function convertToFormat(JsonData) {
  let HTML = ``;
  let CSS = ``;
  const componentCount = {};

  const getClassName = (page, component) => {
    const key = `${page.toLowerCase()}-${component.toLowerCase()}`;
    componentCount[key] = (componentCount[key] || 0) + 1;
    return `${key}-${componentCount[key]}`;
  };

  const getDefault = (type) => {
    const defaults = {
      Title: "Title of Project",
      Heading: "Heading",
      SubHeading: "Sub Heading",
      Description: "This is a description.",
      BulletPoints: ["Sample Point 1", "Sample Point 2"],
      ImageLink: "https://via.placeholder.com/150",
    };
    return defaults[type] || "Default Content";
  };

  const processComponent = (component, page) => {
    const tagMap = {
      Title: "h1",
      Heading: "h2",
      "Sub-Heading": "h3",
      Description: "p",
      Section: "div",
      "Sub-Section": "div",
      "Bullet-Points": "ul",
      Image: "img",
      Table: "table",
      table_heading: "th",
      table_row: "tr",
      table_data: "td",
    };

    const className = getClassName(page, component.component);
    let html = ``;
    let css = ``;

    if (component.component === "Bullet-Points") {
      html += `<ul class="${className}">`;
      const points = component.points || getDefault("BulletPoints");
      points.forEach((pt) => {
        html += `<li>${pt}</li>`;
      });
      html += `</ul>`;
      const li = component.li || {};
      css += `.${className} li {\n  font-size: ${
        li.font_size || "14px"
      };\n  color: ${li.color || "black"};\n}\n`;
    } else if (component.component === "Image") {
      html += `<img class="${className}" src="${
        component.image_link || getDefault("ImageLink")
      }" alt="image" />`;
      css += `.${className} {\n  display: ${
        component.display || "block"
      };\n  align-items: ${
        component.align_items || "center"
      };\n  justify-content: ${
        component.justify_content || "center"
      };\n  height: ${component.height || "150px"};\n  width: ${
        component.width || "150px"
      };\n}\n`;
    } else if (
      component.component === "Section" ||
      component.component === "Sub-Section"
    ) {
      html += `<div class="${className}">`;
      css += `.${className} {\n  display: ${
        component.display || "block"
      };\n  align-items: ${
        component.align_items || "center"
      };\n  justify-content: ${
        component.justify_content || "center"
      };\n  flex-direction: ${component.flex_direction || "row"};\n  padding: ${
        component.padding || "0"
      };\n  height: ${component.height || "auto"};\n  width: ${
        component.width || "100%"
      };\n  margin: ${component.margin || "0"};\n}\n`;

      const children = component.child_components || component.contents || [];
      children.forEach((child) => {
        const { html: childHTML, css: childCSS } = processComponent(
          child,
          page
        );
        html += childHTML;
        css += childCSS;
      });
      html += `</div>`;
    } else if (component.component === "Table") {
      html += `<table class="${className}">\n`;
      css += `.${className} {\n  border-collapse: collapse;\n  width: 100%;\n  margin: 10px 0;\n}\n`;

      const rows = component.child_components || [];

      // STEP 1: Add the <tr> with all <th>
      html += `  <tr>\n`;
      rows.forEach((row, index) => {
        const rowClass = getClassName(page, row.component + "-" + (index + 1));
        html += `    <th class="${rowClass}">${row.content || "Header"}</th>\n`;

        css += `.${rowClass} {\n  font-size: ${
          row.font_size || "16px"
        };\n  color: ${row.color || "black"};\n  text-align: ${
          row.text_align || "center"
        };\n  border: ${row.border || "1px solid black"};\n  padding: ${
          row.padding || "6px 13px"
        };\n}\n`;
      });
      html += `  </tr>\n`;

      // STEP 2: Add rows of <td>
      const rowCount = rows[0]?.child_components_extended?.length || 0;

      for (let i = 0; i < rowCount; i++) {
        const dataRowClass = getClassName(page, `table_data_row-${i + 1}`);
        html += `  <tr class="${dataRowClass}">\n`;

        rows.forEach((row) => {
          const cell = row.child_components_extended?.[i];
          const tag = tagMap[cell?.component] || "td";
          const content = cell?.content || "";

          html += `    <${tag}>${content}</${tag}>\n`;

          css += `.${dataRowClass} ${tag} {\n  font-size: ${
            cell?.font_size || "16px"
          };\n  color: ${cell?.color || "black"};\n  text-align: ${
            cell?.text_align || "center"
          };\n  border: ${cell?.border || "1px solid black"};\n  padding: ${
            cell?.padding || "6px 13px"
          };\n}\n`;
        });

        html += `  </tr>\n`;
      }

      html += `</table>\n`;
    } else {
      const tag = tagMap[component.component] || "div";
      const content = component.content || getDefault(component.component);
      html += `<${tag} class="${className}">${content}</${tag}>`;

      css += `.${className} {\n`;
      css += `  font-size: ${component.font_size || "16px"};\n`;
      css += `  margin: ${component.margin || "10px 0"};\n`;
      css += `  color: ${component.color || "black"};\n`;
      if (component.text_align)
        css += `  text-align: ${component.text_align};\n`;
      css += `}\n`;
    }

    return { html, css };
  };

  JsonData.forEach((pageObj) => {
    const page = pageObj.page || "page";
    pageObj.Data.forEach((component) => {
      const { html, css } = processComponent(component, page);
      HTML += html + "\n";
      CSS += css + "\n";
    });
  });

  return { HTML, CSS };
}

console.log(convertToFormat(JsonData));
