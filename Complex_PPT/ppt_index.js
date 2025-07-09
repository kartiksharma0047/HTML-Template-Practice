JSON_Data = {
  footer: {
    footer_1_width: "92%",
    footer_2_width: "84.5%",
    footer_3_width: "67%",
    footer_4_width: "50%",
    footer_5_width: "20%",
  },
  body: [
    // Start of Prediagnosi
    {
      component: "Start-Header",
      title: "Pre-diagnosi",
      configurations: {
        title_color: "#515151",
        title_size: "19px",
        box_width: "180px",
        line_right: "True",
      },
      start_content: {
        logo_title: "Paziente",
        steps: ["SINTOMI", "REPERTO INCIDENTALE", "SCREENING I LIVELLO"],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          width: ["70px", "110px", "95px"],
          background_color: "white",
          font_size: "15px",
          font_color: "black",
        },
      },
    },
    // Diagnosi e pre-treatment
    {
      component: "Header",
      title: "Diagnosi e pre-treatment",
      configurations: {
        title_color: "#515151",
        title_size: "19px",
        line_right: "true",
        line_color: "#adafaf",
        box_padding: "0 10px",
        box_margin: "0px 0px",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Diagnosi a presa in carico",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0",
            padding: "0",
          },
          content: {
            logo_heading: ["", "GOM", "GOM"],
            content_width: "300px",
            logo_heading_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["MMG", "Chirurgo Senologo", "Radiologo"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connection_Line: {
              display: "false",
              content_Num: 0,
              position: {
                left: ["0px"],
                top: ["0px"],
              },
              width: ["0px"],
              arrow_color: ["#a334c8"],
              line_color: ["#9f30cb"],
            },
            connection_Rectangle: {
              display: "false",
              position_Left: "0px",
              width: "0px",
              height: "0px",
              border_size: "12px",
              border_color: "#58e3d2",
              border_radius:"10px"
            },
            connection_Circle:{},
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["VISITA", "VISITA", "ESAMI"],
              color: "black",
              background_color: "#e6fffc",
              bottom_point_color:
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              bottom_line_color:
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              bottom_shape_color:
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              bottom_shape_postion: ["Level_1", "Level_2", "Level_2"],
            },
            timelineSeries: {
              content: ["<10 gg da", "<10 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Decisione Terapeutica",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0px",
            padding: "0 0 0 15px",
          },
          content: {
            logo_heading: [""],
            content_width: "150px",
            logo_heading_color:
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["GOM"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#ffc100",
              line_color: "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
            connection_Line: {
              display: "false",
              content_Num: 0,
              position: {
                left: ["0px"],
                top: ["0px"],
              },
              width: ["0px"],
              arrow_color: ["#a334c8"],
              line_color: ["#9f30cb"],
            },
            connection_Rectangle: {
              display: "true",
              position_Left: "135px",
              width: "465px",
              height: "100px",
              border_size:"12px",
              border_color: "#58e3d2",
              border_radius:"10px"
            },
            line_right: "false",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["DIAGNOSI"],
              color: "black",
              background_color: "#e6fffc",
              bottom_point_color:
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              bottom_line_color:
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              bottom_shape_color:
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              bottom_shape_postion: ["Level_2"],
            },
            timelineSeries: {
              content: ["<30 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
          },
        },
      ],
    },
    // Treatment
    {
      component: "Header",
      title: "Treatment",
      configurations: {
        title_color: "#515151",
        title_size: "19px",
        line_right: "true",
        line_color: "#adafaf",
        box_padding: "0 10px",
        box_margin: "0px 0px",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Terapia Neo-Adiuvante",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0",
            padding: "0",
          },
          content: {
            logo_heading: ["GOM", "GOM"],
            content_width: "200px",
            logo_heading_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["Oncologo", "Infermiere"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connection_Line: {
              display: "true",
              content_Num: 3,
              position: {
                left: ["50px", "150px", "50px"],
                bottom: ["60px", "60px", "60px"],
              },
              width: ["440px", "426px", "640px"],
              height: ["54px", "70px", "54px"],
              arrow_color: ["#a334c8", "#ffc100", "#a334c8"],
              line_color: ["#9f30cb", "#ffc100", "#9f30cb"],
            },
            connection_Rectangle: {
              display: "true",
              position_Left: "-5px",
              width: "245px",
              height: "70px",
              border_size: "12px",
              border_color: "#58e3d2",
              border_radius:"10px"
            },
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["ET", "TT", "CT"],
              color: "black",
              background_color: "#e6fffc",
              bottom_point_color:
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              bottom_line_color:
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              bottom_shape_color:
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              bottom_shape_postion: ["Level_3", "Level_3", "Level_2"],
            },
            timelineSeries: {
              content: ["<30 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Chirurgia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0px",
            padding: "0 0 0 15px",
          },
          content: {
            logo_heading: ["GOM", ""],
            content_width: "200px",
            logo_heading_color:
              "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["Chirurgo/ Senologo", "Chirurgo Plastico"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "false",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connection_Line: {
              display: "false",
              content_Num: 0,
              position: {
                left: ["0px"],
                top: ["0px"],
              },
              width: ["0px"],
              arrow_color: ["#a334c8"],
              line_color: ["#9f30cb"],
            },
            connection_Rectangle: {
              display: "false",
              position_Left: "0px",
              width: "0px",
              height: "0px",
              border_size: "12px",
              border_color: "#58e3d2",
              border_radius:"10px"
            },
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["INTERVENTO"],
              color: "black",
              background_color: "#e6fffc",
              bottom_point_color:
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              bottom_line_color:
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              bottom_shape_color:
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              bottom_shape_postion: ["Level_2"],
            },
            timelineSeries: {
              content: ["<60 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Chemioterapia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0px",
            padding: "0 15px",
          },
          content: {
            logo_heading: [""],
            content_width: "180px",
            logo_heading_color:
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            logo_title: [""],
            top_down_arrow: {
              display: "false",
              arrow_color: "#ffc100",
              line_color: "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
            connection_Line: {
              display: "false",
              content_Num: 0,
              position: {
                left: ["0px"],
                top: ["0px"],
              },
              width: ["0px"],
              arrow_color: ["#a334c8"],
              line_color: ["#9f30cb"],
            },
            connection_Rectangle: {
              display: "false",
              position_Left: "0px",
              width: "0px",
              height: "0px",
              border_size: "12px",
              border_color: "#58e3d2",
              border_radius:"10px"
            },
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["DIAGNOSI", "CT"],
              color: "black",
              background_color: "#e6fffc",
              bottom_point_color:
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              bottom_line_color:
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              bottom_shape_color:
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              bottom_shape_postion: ["Level_2", "Level_2"],
            },
            timelineSeries: {
              content: ["<30 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Radioterapia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0",
            padding: "0 0 0 15px",
          },
          content: {
            logo_heading: ["ROM"],
            content_width: "140px",
            logo_heading_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["MMG"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connection_Line: {
              display: "false",
              content_Num: 0,
              position: {
                left: ["0px"],
                top: ["0px"],
              },
              width: ["0px"],
              arrow_color: ["#a334c8"],
              line_color: ["#9f30cb"],
            },
            connection_Rectangle: {
              display: "false",
              position_Left: "0px",
              width: "0px",
              height: "0px",
              border_size: "12px",
              border_color: "#58e3d2",
              border_radius:"10px"
            },
            line_right: "false",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["VISITA"],
              color: "black",
              background_color: "#e6fffc",
              bottom_point_color:
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              bottom_line_color:
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              bottom_shape_color:
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              bottom_shape_postion: ["Level_3"],
            },
            timelineSeries: {
              content: ["<60 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
          },
        },
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0",
            padding: "0 40px 0 0",
          },
          content: {
            logo_heading: [""],
            content_width: "50px",
            logo_heading_color:
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            logo_heading_border_color: "#ffc100",
            logo_color:
              "linear-gradient(to right top, #ffc100 1%, #ff5e58 80%)",
            logo_title: ["GOM"],
            logo_title_color:
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#ffc100",
              line_color: "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
            connection_Line: {
              display: "false",
              content_Num: 0,
              position: {
                left: ["0px"],
                top: ["0px"],
              },
              width: ["0px"],
              arrow_color: ["#a334c8"],
              line_color: ["#9f30cb"],
            },
            connection_Rectangle: {
              display: "false",
              position_Left: "0px",
              width: "0px",
              height: "0px",
              border_size: "12px",
              border_color: "#58e3d2",
              border_radius:"10px"
            },
            line_right: "false",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["CT"],
              color: "black",
              background_color: "#e6fffc",
              bottom_point_color:
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              bottom_line_color:
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              bottom_shape_color:
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              bottom_shape_postion: ["Level_4"],
            },
          },
        },
      ],
    },
  ],
};

// Function to return predefined HTML and CSS
function convertToFormat(JsonData) {
  let HTML = ``;
  let CSS = ``;
  const componentCount = {};

  // Util Function
  const getClassName = (page, component) => {
    const normalize = (str) => str.toLowerCase().replace(/\s+/g, "-");
    const key = `${normalize(page)}-${normalize(component)}`;
    componentCount[key] = (componentCount[key] || 0) + 1;
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 100000);
    return `${key}-${componentCount[key]}-${timestamp}-${random}`;
  };

  // Util Function
  function limitText(text, maxLength) {
    if (!text) return "";
    return text.length > maxLength
      ? text.slice(0, maxLength - 3) + "..."
      : text;
  }

  const generateStartHeader = (component, className) => {
    const { title, configurations, start_content } = component;

    // HTML
    let html = `
  <div class="start slide-div ${className}">
    <div class="start-mid-back-line"></div>
    <div class="top">
      <h2 class="div-title">${limitText(title, 20)}</h2>
    </div>
    <div class="mid-top">
      <div class="icon_plus_name">
        <i class="fa-solid fa-user"></i>
        <p>${limitText(start_content.logo_title, 10)}</p>
      </div>
      <div class="mid-top-on-line">
      `;
    start_content.steps.slice(0, 3).forEach((step, index) => {
      html += `<h5 class="start-step start-step${
        index + 1
      } box-shadow-box">${limitText(step, 20)}</h5>\n`;
    });

    html += `
    </div>
    </div>
  </div>
  `;

    // ✅ Extract configurations
    const boxWidth = configurations?.box_width || "180px";
    const titleColor = configurations?.title_color || "#515151";
    const title_size = configurations?.title_size || "19px";
    const lineRight = configurations?.line_right === "True";
    const font_size = start_content?.configurations?.font_size || "15px";
    const logoGradient = start_content?.configurations?.logo_color || "#2394b9";
    const stepWidths = start_content?.configurations?.width || [
      "70px",
      "110px",
      "95px",
    ];
    const stepBg = start_content?.configurations?.background_color || "white";
    const font_color = start_content?.configurations?.font_color || "black";

    // ✅ Build dynamic CSS
    let css = `
  .${className} {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: ${boxWidth};
    height: 100%;
    position: relative;
  }

  .${className} .top {
    margin-right: 10%;
  }

  .${className} .top h2 {
    font-size: ${title_size};
    color: ${titleColor};
  }

  .${className} .mid-top {
    margin-top: 200px;
    position: relative;
    z-index: 3;
    width: max-content;
  }

  ${
    lineRight
      ? `
  .${className}::after {
    content: "";
    position: absolute;
    border-right: 3px solid #adafaf;
    height: 550px;
    right: 0px;
    bottom: 500px;
    z-index: 1;
  }

  .${className}::before {
    content: "";
    position: absolute;
    background-color: #767979;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    right: -4px;
    top: 30px;
    z-index: 2;
  }
  `
      : ""
  }
  
  .${className} .start-mid-back-line {
    position: absolute;
    z-index: 1;
    top: 340px;
    width: 25px;
    height: 257px;
    background-color: #58e3d2;
  }

  .${className} .mid-top .icon_plus_name {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .${className} .mid-top .icon_plus_name .fa-user {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    background: ${logoGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid #2394b9;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin-bottom: 50px;
  }

  .${className} .mid-top .icon_plus_name p {
    display: inline;
    background: ${logoGradient};
    padding: 13px 23px;
    border-radius: 23px;
    position: absolute;
    top: 30px;
    color: white;
  }

  .${className} .mid-top .start-step {
    background-color: ${stepBg};
    padding: 10px;
    margin: 0;
    margin-left: 40px;
    border-radius: 7px;
    font-size: ${font_size};
    color:${font_color};
    border-bottom-right-radius: 23px;
  }
  .${className} .mid-top-on-line{
    margin: 0;
    padding: 0;
    display: flex;
    align-items: start;
    justify-content: space-evenly;
    flex-direction: column;
    height: 210px;
  }
  `;

    stepWidths.forEach((w, i) => {
      css += `
    .${className} .mid-top .start-step${i + 1} {
      width: ${w};
    }
    `;
    });

    css += `
  .${className} .mid-bottom {
    height: 360px;
  }
  `;

    return { html, css };
  };

  /**
   * Helper to limit text length
   */
  function limitText(text, limit) {
    return text.length > limit ? text.slice(0, limit) + "..." : text;
  }

  /**
   * Generate unique Header + Sub-Headers HTML + scoped CSS
   */
  function generateHeaderHTMLandCSS(component, uniqueClassName) {
    const { title, configurations, sub_groups } = component;

    let html = `<div class="Slide-box ${uniqueClassName}">\n`;
    html += `<h1>${title}</h1>\n`;

    html += `<div class="sub-groups">\n`;

    sub_groups.forEach((sg, idx) => {
      html += `<div class="sub-group-div ${uniqueClassName}-sub-group-div${
        idx + 1
      }">\n`;
      html += `<h2>${sg.title}</h2>\n`;

      // ▶️ Top icons with logo_heading + logo_title
      html += `<div class="subgroups-mid-top">\n`;
      sg.content.logo_title.forEach((logo, i) => {
        const heading = sg.content.logo_heading[i];
        html += `<div class="icon_plus_name">\n`;
        if (heading) html += `<span>${limitText(heading, 5)}</span>\n`;
        html += `<i class="fa-solid fa-user"></i>\n`;
        html += `<p>${limitText(logo, 8)}</p>\n`;
        html += `</div>\n`;
      });
      html += `</div>\n`;

      // ▶️ On-line content
      html += `<div class="subgroups-on-line">\n`;

      sg.content.on_line_content_configuration.content.forEach((c, i) => {
        html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
          i + 1
        }">\n`;
        html += `<h6 class="box-shadow-box">${c}</h6>\n`;
        html += `</div>\n`;
      });
      if (
        sg.content.connection_Line &&
        (sg.content.connection_Line.display === "true" ||
          sg.content.connection_Line.display === true)
      ) {
        for (let i = 0; i < sg.content.connection_Line.content_Num; i++) {
          html += `<div class="${uniqueClassName}-sub-group-div${
            idx + 1
          }-connection-line-${i + 1}"></div>\n`;
        }
      }

      if (
        sg.content.connection_Rectangle &&
        (sg.content.connection_Rectangle.display === "true" ||
          sg.content.connection_Rectangle.display === true)
      ) {
        html += `<div class="connection-Rectangle${idx + 1}"></div>\n`;
      }

      html += `</div>\n`;

      // ▶️ Timeline bottom content — NOW DYNAMIC
      html += `<div class="subgroups-Timeline-bottom-content">\n`;
      sg.content.timelineSeries?.content.forEach((t, i) => {
        html += `<div class="subgroups-Timeline-bottom-logo_text ${uniqueClassName}-timeline-bottom${
          i + 1
        }">\n`;
        html += `<p><b>${t}</b></p>\n<i class="fa-regular fa-clock"></i>\n`;
        html += `</div>\n`;
      });
      html += `</div>\n`; // End Timeline bottom

      html += `</div>\n`; // End sub-group-div
    });

    html += `</div>\n</div>\n`; // End sub-groups and Slide-box

    // === CSS ===
    let css = `
  .${uniqueClassName} {
    width: max-content;
    height: 100%;
    position:relative;
    padding:${configurations.box_padding || "0"};
    margin:${configurations.box_margin || "0"};
  }
  .${uniqueClassName} h1 {
    color: ${configurations?.title_color || "#515151"};
    font-size: ${configurations?.title_size || "19px"};
    margin-top: 15px;
    margin-bottom: 40px;
  }
  .${uniqueClassName} .sub-groups {
    display: flex;
    align-items:start;
    position:relative;
  }
  .${uniqueClassName} .sub-groups .sub-group-div{
    position:relative;
  }
  .${uniqueClassName} .sub-group-div h2 {
    height:15px;
    margin:0;
    margin-bottom: 162px;
  }
  .${uniqueClassName} .subgroups-mid-top {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .${uniqueClassName} .icon_plus_name {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    width: 100%;
  }
    ${
      sub_groups[0].content.top_down_arrow.display
        ? `
  .${uniqueClassName} .icon_plus_name::after{
    content: "";
    position: absolute;
    height: 200px;
    width: 1px;
    top: 89px;
    left: 50%;
    padding: 0;
    margin: 0;
    z-index: 1;
    transform: translateX(-50%);
  }
  .${uniqueClassName} .icon_plus_name::before{
    content: "";
    position: absolute;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    top: 285px;
    left: 50%;
    transform: translateX(-50%);
  }`
        : ""
    }
  .${uniqueClassName} .icon_plus_name span {
    position: absolute;
    top: -20px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .${uniqueClassName} .icon_plus_name .fa-user{
    font-size: 30px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    margin-bottom: 30px; 
  }
  .${uniqueClassName} .icon_plus_name p {
    display: inline;
    padding: 13px 10px;
    border-radius: 20px;
    position: absolute;
    top: 29px;
    font-size: 16px;
    color: white;
    width: 65px;
    text-align: center;
  }
  .${uniqueClassName} .subgroups-on-line {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    margin-top: 225px;
    z-index: 2;
  }
  .${uniqueClassName} .subgroups-on-line-content{
    position: relative;
  }
  .${uniqueClassName} .subgroups-on-line-content h6{
    margin: 0;
    font-size: 15px;
    border-radius: 7px;
    border-bottom-right-radius: 20px;
    padding: 13px 17px;
    position: relative;
  }
  .${uniqueClassName} .subgroups-on-line-content h6::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 2;
  }
  .${uniqueClassName} .subgroups-Timeline-bottom-content {
    display: flex;
    margin-top: 180px;
    align-items: center;
    justify-content: space-around;
    position: relative;
    width: 100%;
    z-index: 2;
  }
  .${uniqueClassName} .subgroups-Timeline-bottom-content .fa-clock{
    font-size: 18px;
    margin: 0;
    padding: 0;
    margin-top: 2px;
    padding-left: 5px;
  }
  .${uniqueClassName} .subgroups-Timeline-bottom-logo_text {
    display: flex;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    align-items: center;
    justify-content: center;
    font-size:10px;
    width:130px;
    margin: 0;
    padding: 0;
    padding-right: 10px;
    position: relative;
  }
  
  /* === Timeline line example === */
  ${
    configurations.line_right
      ? `
  .${uniqueClassName}::after {
    content: "";
    position: absolute;
    border-right: 3px solid ${configurations?.line_color};
    height: 530px;
    right: 0px;
    bottom: 485px;
    z-index: 1;
  }
  .${uniqueClassName}::before {
    content: "";
    position: absolute;
    background-color: ${configurations?.line_color};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    right: -4px;
    top: 62px;
    z-index: 2;
  } `
      : ""
  }
  `;

    sub_groups.forEach((sg, idx) => {
      css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} {
    margin:${sg.configurations?.margin || "0px"};
    padding:${sg.configurations?.padding || "0px"};
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} h2 {
    color: ${sg.configurations?.title_color || "#333"};
    font-size: ${sg.configurations?.title_size || "14px"};
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .subgroups-mid-top {
    width: ${sg.content?.content_width || "auto"};
  }
  `;
      if (
        sg.content.top_down_arrow.display === "true" ||
        sg.content.top_down_arrow.display === true
      ) {
        css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
          idx + 1
        } .icon_plus_name::after {
    background: ${sg.content.top_down_arrow.line_color};
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
          idx + 1
        } .icon_plus_name::before {
    border-top: 10px solid ${sg.content.top_down_arrow.arrow_color};
  }
  `;
      }
      css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .icon_plus_name span {
    background: ${sg.content.logo_heading_color};
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .icon_plus_name .fa-user {
      border:2px solid ${sg.content.logo_heading_border_color};
    background: ${sg.content.logo_color};
    -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .icon_plus_name p {
    background: ${sg.content.logo_title_color};
  }
  `;
      css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .subgroups-on-line-content::after {
    background: ${sg.content.on_line_content_configuration.bottom_line_color};
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .subgroups-on-line-content::before {
    background: ${sg.content.on_line_content_configuration.bottom_shape_color};
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .subgroups-on-line-content h6 {
    background: ${sg.content.on_line_content_configuration.background_color};
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .subgroups-on-line-content h6::after {
    background: ${sg.content.on_line_content_configuration.bottom_point_color};
  }
  `;

      sg.content.timelineSeries?.content.forEach((t, i) => {
        css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
          idx + 1
        } .${uniqueClassName}-timeline-bottom${i + 1} {
    background: ${sg.content.timelineSeries.background_color};
  }`;
      });

      if (sg.content.line_right === "true" || sg.content.line_right === true) {
        css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}::after {
    position: absolute;
    content: "";
    border-left: 1px solid ${sg.content.line_color};
    height: 500px;
    right: -1px;
    top: 10px;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}::before {
    position: absolute;
    content: "";
    height: 7px;
    background-color: ${sg.content.line_color};
    border-radius: 50%;
    width: 7px;
    right: -4px;
    top: 5px;
  }`;
      }

      sub_groups.forEach((sg, subGroupIdx) => {
        const inlineContentArray =
          sg.content.on_line_content_configuration.bottom_shape_postion || [];

        inlineContentArray.forEach((level, inlineIdx) => {
          let beforeTop = "395px";
          let afterTop = "45px";
          let afterHeight = "345px";

          switch (level) {
            case "Level_2":
              beforeTop = "423px";
              afterTop = "40px";
              afterHeight = "375px";
              break;
            case "Level_3":
              beforeTop = "450px";
              afterTop = "40px";
              afterHeight = "405px";
              break;
            case "Level_4":
              beforeTop = "476px";
              afterTop = "40px";
              afterHeight = "430px";
              break;
            case "Level_5":
              beforeTop = "505px";
              afterTop = "40px";
              afterHeight = "457px";
              break;
          }

          css += ` .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } .${uniqueClassName}-on-line-content${inlineIdx + 1}::after {
        content: "";
        position: absolute;
        height: ${afterHeight};
        width: 2px !important;
        top: ${afterTop};
        left: 50%;
        padding: 0;
        margin: 0;
        z-index: 1;
        transform: translateX(-50%);
        background: ${
          sg.content.on_line_content_configuration.bottom_line_color
        };
      }
      .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } .${uniqueClassName}-on-line-content${inlineIdx + 1}::before {
        content: "";
        position: absolute;
        width: 17px;
        height: 15px;
        clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        top: ${beforeTop};
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(30deg);
        z-index: 2;
        background: ${
          sg.content.on_line_content_configuration.bottom_shape_color
        };
      }
    `;
        });
      });
      // ✅ connection_Line CSS block:
      if (
        sg.content.connection_Line &&
        (sg.content.connection_Line.display === "true" ||
          sg.content.connection_Line.display === true)
      ) {
        for (let i = 0; i < sg.content.connection_Line.content_Num; i++) {
          css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
            idx + 1
          }-connection-line-${i + 1} {
    position: absolute;
    bottom: ${sg.content.connection_Line.position?.bottom[i] || "0px"};
    left: ${sg.content.connection_Line.position?.left[i] || "0px"};
    width: ${sg.content.connection_Line.width[i] || "0px"};
    height: ${sg.content.connection_Line.height[i] || "0px"};
    border-top:2px solid ${sg.content.connection_Line.line_color[i] || "black"};
    border-right:2px solid ${
      sg.content.connection_Line.line_color[i] || "black"
    };
    border-top-right-radius:20px;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
            idx + 1
          }-connection-line-${i + 1}::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-right: 7px solid transparent;
    border-left: 7px solid transparent;
    border-top: 10px solid ${
      sg.content.connection_Line.arrow_color[i] || "#000"
    };
    right: -7px;
    bottom:-2px;
  }
      `;
        }
      }

      // ✅ New connection_Rectangle CSS generation
      if (
        sg.content.connection_Rectangle &&
        (sg.content.connection_Rectangle.display === "true" ||
          sg.content.connection_Rectangle.display === true)
      ) {
        css += `
.${uniqueClassName} .subgroups-on-line .connection-Rectangle${idx + 1} {
  position: absolute;
  left: ${sg.content.connection_Rectangle.position_Left || "0px"};
  width: ${sg.content.connection_Rectangle.width || "0px"};
  height: ${sg.content.connection_Rectangle.height || "0px"};
  border-bottom: ${sg.content.connection_Rectangle.border_size || "12px"} solid ${
    sg.content.connection_Rectangle.border_color || "#000"
  };
  border-left: ${sg.content.connection_Rectangle.border_size || "12px"} solid ${
    sg.content.connection_Rectangle.border_color || "#000"
  };
  border-right: ${sg.content.connection_Rectangle.border_size || "12px"} solid ${
    sg.content.connection_Rectangle.border_color || "#000"
  };
  border-bottom-left-radius:${sg.content.connection_Rectangle.border_radius || "0px"};
  border-bottom-right-radius:${sg.content.connection_Rectangle.border_radius || "0px"};
  box-sizing: border-box;
  top:32px;
  z-index:-1;
}
  `;
      }
    });

    return { html, css };
  }

  const processComponent = (component, page) => {
    const className = getClassName(page, component.component);

    switch (component.component) {
      case "Start-Header":
        return generateStartHeader(component, className);
      case "Header":
        return generateHeaderHTMLandCSS(component, className);
      default:
        return { html: "", css: "" }; // fallback for unknowns
    }
  };

  JsonData.body.forEach((component) => {
    const { html, css } = processComponent(component, "Page1");
    HTML += html + "\n";
    CSS += css + "\n";
  });

  return { HTML, CSS };
}

// 1️⃣ Generate result
const result = convertToFormat(JSON_Data);
console.log(result);

// 2️⃣ Your predefined HTML with placeholder
const PreDefined_HTML = `
<div class="PPT-Box">
  <div class="mid-Line"></div>
  <div class="footer-dark-five-lines">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
  <!-- Add Here -->
</div>
`;

// 3️⃣ Your predefined CSS
const PreDefined_CSS = `
body {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
}
.PPT-Box {
  border: 1px solid black;
  height: 1080px;
  width: 1920px;
  background-color: #f6fcfc;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 20px 0 0 0;
}
.mid-Line {
  width: 90%;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 25px;
  box-shadow: 0 0 70px #58e3d2, 0 0 30px #b8f4eb;
  background-color: #58e3d2;
  z-index: 2;
}
.box-shadow-box {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.218);
}
.footer-dark-five-lines {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 137px;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.footer-dark-five-lines div {
  background: linear-gradient(to bottom, #f5fbfb, #eaf0f0);
  height: calc(137px / 5);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
}
`;

let dynamicFooterCSS = "";
if (JSON_Data.footer) {
  Object.keys(JSON_Data.footer).forEach((key, idx) => {
    dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${
      idx + 1
    }) { width: ${JSON_Data.footer[key]}; }\n`;
  });
}

const Final_CSS = PreDefined_CSS + result.CSS + dynamicFooterCSS;

const Final_HTML = PreDefined_HTML.replace("<!-- Add Here -->", result.HTML);

document.body.innerHTML = Final_HTML;

const styleTag = document.createElement("style");
styleTag.textContent = Final_CSS;
document.head.appendChild(styleTag);
