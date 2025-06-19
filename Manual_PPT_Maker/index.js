import {
  JsonData1,
  JsonData2,
  JsonData3,
  JsonData4,
  JsonData5,
  JsonData6,
} from "./test.js";

function convertToFormat(JsonData) {
  let HTML = ``;
  let CSS = ``;
  const componentCount = {};

  const getClassName = (page, component) => {
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");

    const key = `${normalize(page)}-${normalize(component)}`;
    componentCount[key] = (componentCount[key] || 0) + 1;
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 100000);

    return `${key}-${componentCount[key]}-${timestamp}-${random}`;
  };

  const getDefault = (type) => {
    const defaults = {
      Title: "Title of Project",
      Heading: "Heading",
      SubHeading: "Sub Heading",
      Description: "This is a description.",
      BulletPoints: ["Sample Point 1", "Sample Point 2", "Sample Point 3"],
      ImageLink: "https://via.placeholder.com/150",
    };
    return defaults[type] || "Default Content";
  };

  // Get Tags
  const getTag = (component) => {
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
      line_through: "div",
      line_through_heading: "h4",
    };
    return tagMap[component] || "div";
  };

  // Bullet Points Generation Function
  const generateBulletPoints = (component, className) => {
    let html = `<ul class="${className}">`;
    const points = component.points || getDefault("BulletPoints");
    points.forEach((pt) => (html += `<li>${pt}</li>`));
    html += `</ul>`;

    const li = component.li || {};
    let css = `.${className} li {\n  font-size: ${
      li.font_size || "14px"
    };\n  color: ${li.color || "black"};\n}\n`;

    return { html, css };
  };

  // Image Generation Function
  const generateImage = (component, className) => {
    const imageUrl = component.image_link || getDefault("ImageLink");
    let html = `<img class="${className}" src="${imageUrl}" alt="image" />`;

    let css = `.${className} {\n  display: ${
      component.display || "block"
    };\n  align-items: ${
      component.align_items || "center"
    };\n  justify-content: ${
      component.justify_content || "center"
    };\n  height: ${component.height || "150px"};\n  width: ${
      component.width || "150px"
    };\n}\n`;

    return { html, css };
  };

  // Section Generation Function
  const generateSection = (component, page, className) => {
    let html = `<div class="${className}">`;
    let css = `.${className} {\n`;
    css += `  display: ${component.display || "block"};\n`;
    css += `  align-items: ${component.align_items || "center"};\n`;
    css += `  justify-content: ${component.justify_content || "center"};\n`;
    css += `  flex-direction: ${component.flex_direction || "row"};\n`;
    css += `  padding: ${component.padding || "0"};\n`;
    css += `  height: ${component.height || "auto"};\n`;
    css += `  width: ${component.width || "100%"};\n`;
    css += `  margin: ${component.margin || "0"};\n`;
    css += `  background-color: ${
      component.background_color || "transparent"
    };\n`;
    css += `}\n`;

    const children = component.child_components || component.contents || [];
    children.forEach((child) => {
      const { html: childHTML, css: childCSS } = processComponent(child, page);
      html += childHTML;
      css += childCSS;
    });
    html += `</div>`;

    return { html, css };
  };

  // Table Generation Function
  const generateTable = (component, page, className) => {
    let html = `<table class="${className}">\n`;
    let css = `.${className} {\n  border-collapse: collapse;\n  width: 100%;\n  margin: 10px 0;\n}\n`;

    const rows = component.child_components || [];
    html += `  <tr>\n`;
    rows.forEach((row, idx) => {
      const rowClass = getClassName(page, row.component + "-" + (idx + 1));
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

    const rowCount = rows[0]?.child_components_extended?.length || 0;
    for (let i = 0; i < rowCount; i++) {
      const dataRowClass = getClassName(page, `table_data_row-${i + 1}`);
      html += `  <tr class="${dataRowClass}">\n`;

      rows.forEach((row) => {
        const cell = row.child_components_extended?.[i];
        const tag = getTag(cell?.component);
        html += `    <${tag}>${cell?.content || ""}</${tag}>\n`;

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
    return { html, css };
  };

  // Line Through Generation Function
  const generateLineThrough = (component, className) => {
    const outerTag = getTag("line_through"); // should be <div>
    const inner = component.contents || {};

    const innerClass = `${className}-heading`;
    const innerTag = getTag("line_through_heading");

    const outerStyles = {
      position: component.position || "relative",
      border_top: component.border_top || "1px solid black",
      width: component.width || "100%",
    };

    const innerStyles = {
      position: inner.position || "absolute",
      margin: inner.margin || "0",
      background_color: inner.background_color || "white",
      padding: inner.padding || "0 20px",
      top: inner.top || "0px",
      font_size: inner.font_size || "20px",
      left: inner.left || "50%",
      color: inner.color || "black",
      transform: inner.transform || "translate(-50%,-50%)",
    };

    const innerContent = inner.content || "Line through heading";

    // HTML
    let html = `<${outerTag} class="${className}">\n`;
    html += `  <${innerTag} class="${innerClass}">${innerContent}</${innerTag}>\n`;
    html += `</${outerTag}>`;

    // CSS
    let css = `.${className} {\n`;
    css += `  position: ${outerStyles.position};\n`;
    css += `  border-top: ${outerStyles.border_top};\n`;
    css += `  width: ${outerStyles.width};\n`;
    css += `}\n\n`;

    css += `.${innerClass} {\n`;
    css += `  position: ${innerStyles.position};\n`;
    css += `  margin: ${innerStyles.margin};\n`;
    css += `  background-color: ${innerStyles.background_color};\n`;
    css += `  padding: ${innerStyles.padding};\n`;
    css += `  top: ${innerStyles.top};\n`;
    css += `  color: ${innerStyles.color};\n`;
    css += `  font-size: ${innerStyles.font_size};\n`;
    css += `  left: ${innerStyles.left};\n`;
    css += `  transform: ${innerStyles.transform};\n`;
    css += `}\n`;

    return { html, css };
  };

  // Here is Time Line Chart is being returned
  const Timeline_Chart = (data) => {
    const HTML = `
  <div class="timelineslide1-table-div">
    <!-- Left Container -->
    <div class="timelineslide1-box-container">
      <div class="timelineslide1-box-title">
        <p class="timelineslide1-ribbonDesign"></p>
        <h3>Project Stages</h3>
      </div>
      ${data.projectStages
        .map(
          (stage) =>
            `<h4 style="border-left: 4px solid ${stage.color};">${stage.name}</h4>`
        )
        .join("")}
    </div>
    <div class="timelineslide1-table-container">
      <div class="timelineslide1-months-boxes">
        ${Array.from(
          { length: data.totalMonths },
          (_, i) => `<p>Month ${i + 1}</p>`
        ).join("")}
      </div>
      <h2 class="timelineslide1-sprint-txt">SPRINTS</h2>
      <div class="timelineslide1-sprints-boxes">
        ${Array.from(
          { length: data.totalSprints },
          (_, i) => `<p>S${i}</p>`
        ).join("")}
      </div>
      <table class="timelineslide1-table">
        ${data.projectStages
          .map((stageObj) => {
            const stageData = data.timelineData.find(
              (s) => s.stage === stageObj.name
            );
            return `<tr>${Array.from(
              { length: data.totalSprints },
              (_, sprintNumber) => {
                const element = stageData.data.find(
                  (item) =>
                    sprintNumber >= item.startSprint &&
                    sprintNumber < item.startSprint + item.duration
                );
                const isFirst = element && sprintNumber === element.startSprint;
                const width = element
                  ? (890 / data.totalSprints) * element.duration
                  : 0;
                const halfWidth = width / 2;
                const isLen1 = element && element.duration === 1;
                if (element) {
                  const label = isFirst
                    ? `<p style="position:absolute; ${
                        isLen1
                          ? "transform:translateX(-50%); left:50%;"
                          : `left:${halfWidth - 10}px;`
                      } top: 0; font-size: 8px; z-index:2;">${
                        element.title
                      }</p>`
                    : "";
                  return `<td style="position:relative;" class="timelineslide1-background">${label}<div style="border-bottom: 3px solid ${stageObj.color}"></div></td>`;
                }
                return `<td></td>`;
              }
            ).join("")}</tr>`;
          })
          .join("")}
      </table>
    </div>
  </div>
`;

    const CSS = `
  .timelineslide1-table-div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .timelineslide1-box-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 210px;
    flex-direction: column;
    margin-bottom: 15px;
  }

  .timelineslide1-box-title {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .timelineslide1-ribbonDesign {
    width: 50px;
    height: 20px;
    background-color: #6c1d5f;
    margin: 0;
    padding: 0;
    margin-left: -20px;
    margin-right: 10px;
    margin-bottom: 15px;
  }

  .timelineslide1-box-container h3 {
    font-size: 19px;
    color: black;
    margin: 0;
    padding: 0;
    margin-bottom: 15px;
  }

  .timelineslide1-box-container h4 {
    font-size: 16px;
    color: #595959;
    background-color: white;
    box-shadow: 0px 0px 10px #0000003d;
    width: 190px;
    padding: 12px 0px 12px 20px;
    border-radius: 5px;
    margin: 12.5px 0;
  }

  .timelineslide1-table-container {
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 890px;
  }
    
  .timelineslide1-months-boxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 890px;
    margin: 0;
    padding: 0;
  }

  .timelineslide1-months-boxes p {
    font-size: 13px;
    flex-grow: 1;
    background-color: #73658e;
    margin: 0;
    padding: 5px 12px;
    color: white;
  }

  .timelineslide1-sprint-txt {
    font-size: 12px;
    width: 100%;
    background-color: #ebe9f0;
    margin: 0;
    padding: 5px 0;
  }

  .timelineslide1-sprints-boxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 890px;
    margin: 0;
    padding: 0;
  }

  .timelineslide1-sprints-boxes p {
    font-size: 13px;
    background-color: #73658e;
    margin: 0;
    flex-grow: 1;
    padding: 5px 0;
    color: white;
  }

  .timelineslide1-table {
    width: 890px;
  }

  .timelineslide1-table td {
    border: 1px solid #d9d9d9;
    background-color: white;
    padding: 0px !important;
    width: calc(890px / ${data.totalSprints});
    height: 55px;
  }
  `;

    return { html: HTML, css: CSS };
  };

  function generateChart(component, className) {
    const {
      type,
      data,
      width = 500,
      height = 350,
      margin = "10px 0",
    } = component;

    const chartConfig = { type, data };
    const encodedConfig = encodeURIComponent(JSON.stringify(chartConfig));
    const chartUrl = `https://quickchart.io/chart?c=${encodedConfig}&width=${width}&height=${height}`;

    const html = `<img src="${chartUrl}" class="${className}" width="${width}" height="${height}" alt="Dynamic ${type} Chart" />`;

    const css = `.${className} {
    display: block;
    margin: ${margin};
    max-width: 100%;
  }`.trim();

    return { html, css };
  }

  // For Basic components like title, description like these
  const generateBasic = (component, className) => {
    const tag = getTag(component.component);
    const content = component.content || getDefault(component.component);
    let html = `<${tag} class="${className}">${content}</${tag}>`;

    let css = `.${className} {\n`;
    css += `  font-size: ${component.font_size || "16px"};\n`;
    css += `  margin: ${component.margin || "10px 0"};\n`;
    css += `  color: ${component.color || "black"};\n`;
    if (component.text_align) css += `  text-align: ${component.text_align};\n`;
    css += `}\n`;

    return { html, css };
  };

  // Used To make Component codes
  const processComponent = (component, page) => {
    const className = getClassName(page, component.component);
    switch (component.component) {
      case "Bullet-Points":
        return generateBulletPoints(component, className);
      case "Image":
        return generateImage(component, className);
      case "Section":
      case "Sub-Section":
        return generateSection(component, page, className);
      case "Table":
        return generateTable(component, page, className);
      case "line-through":
        return generateLineThrough(component, className);
      case "TimeLine_Chart":
        return Timeline_Chart(component);
      case "Chart":
        return generateChart(component, className);
      default:
        return generateBasic(component, className);
    }
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

console.log(convertToFormat(JsonData6));
