JSON_Data = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "Centro di Senologia/Ospedale",
      footer_3_label: "Casa",
      footer_4_label: "Altra struttura",
      footer_5_label: "Earmacia ospedaliera",
    },
    footer_label_position_left: {
      footer_1_left: "-70px",
      footer_2_left: "-140px",
      footer_3_left: "-30px",
      footer_4_left: "-70px",
      footer_5_left: "-100px",
    },
    label_width: {
      footer_1_width: "92%",
      footer_2_width: "84.5%",
      footer_3_width: "67%",
      footer_4_width: "50%",
      footer_5_width: "20%",
    },
  },
  scaling: "1",
  body: [
    // Start of Prediagnosi
    {
      component: "Start-Header",
      title: "Pre-diagnosi",
      configurations: {
        title_color: "#515151",
        line_right: "True",
      },
      start_content: {
        logo_title: "Paziente",
        steps: ["SINTOMI", "REPERTO INCIDENTALE", "SCREENING I LIVELLO"],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          background_color: "white",
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
        line_right: "true",
        line_color: "#adafaf",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Diagnosi a presa in carico",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["", "GOM", "GOM"],
            logo_heading_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["MMG", "Chirurgo Senologo", "Radiologo"],
            logo_id_names: [
              "logo_title_id1",
              "logo_title_id2",
              "logo_title_id3",
            ],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id2",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
              ],
              arrow_color: ["#a334c8", "#9f30cb"],
              line_color: ["#9f30cb", "#9f30cb"],
            },
            connecting_Rectangle: {
              display: "true",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "false",
                  ending: "on_line_content_3",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_1",
                },
              ],
              color: ["#58e3d2", "#9f30cb"],
            },
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["VISITA", "VISITA", "ESAMI"],
              content_id: [
                "on_line_content_1",
                "on_line_content_2",
                "on_line_content_3",
              ],
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
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "<10 gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_1",
                  ending: "on_line_content_2",
                },
                {
                  content: "<10 gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_2",
                  ending: "on_line_content_3",
                },
              ],
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Decisione Terapeutica",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: [""],
            logo_heading_color:
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["GOM"],
            logo_id_names: ["logo_title_id4"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#ffc100",
              line_color: "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id4",
                  ending: "logo_title_id6",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id4",
                  ending: "logo_title_id5",
                  height: "Level_1",
                },
              ],
              arrow_color: ["#ffc305", "#ffc305"],
              line_color: ["#ffc305", "#ffc305"],
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "false",
                  ending: "on_line_content_3",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_1",
                },
              ],
              color: ["#58e3d2", "#9f30cb"],
            },
            line_right: "false",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["DIAGNOSI"],
              content_id: ["on_line_content_4"],
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
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "<30 gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_3",
                  ending: "on_line_content_4",
                },
              ],
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
        line_right: "true",
        line_color: "#adafaf",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Terapia Neo-Adiuvante",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["GOM", "GOM"],
            logo_heading_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["Oncologo", "Infermiere"],
            logo_id_names: ["logo_title_id5", "logo_title_id6"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
                {
                  starting: "logo_title_id6",
                  ending: "logo_title_id11",
                  height: "Level_6",
                },
                {
                  starting: "logo_title_id6",
                  ending: "logo_title_id12",
                  height: "Level_6",
                },
              ],
              arrow_color: ["#9f30cb", "#9f30cb", "#9f30cb"],
              line_color: ["#9f30cb", "#9f30cb", "#9f30cb"],
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "false",
                  ending: "on_line_content_3",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
              ],
              color: ["#58e3d2"],
            },
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["ET", "TT", "CT"],
              content_id: [
                "on_line_content_5",
                "on_line_content_6",
                "on_line_content_7",
              ],
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
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "<30 gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_4",
                  ending: "on_line_content_7",
                },
              ],
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Chirurgia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["GOM", ""],
            logo_heading_color:
              "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["Chirurgo/ Senologo", "Chirurgo Plastico"],
            logo_id_names: ["logo_title_id7", "logo_title_id8"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "false",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "false",
                  ending: "on_line_content_3",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
              ],
              color: ["#58e3d2"],
            },
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["INTERVENTO"],
              content_id: ["on_line_content_8"],
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
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "<30 gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_7",
                  ending: "on_line_content_8",
                },
                {
                  content: "<60 gg da",
                  height: "Level_6",
                  show_border: "false",
                  starting: "on_line_content_3",
                  ending: "on_line_content_8",
                },
              ],
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Chemioterapia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["GOM", "DOM"],
            logo_heading_color:
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
            logo_heading_border_color: "#a334c801",
            logo_title: ["GOM", "DOM"],
            logo_id_names: ["logo_title_id9", "logo_title_id10"],
            logo_color:
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
            logo_title_color:
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
            top_down_arrow: {
              display: "false",
              arrow_color: "#ffc100",
              line_color: "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "false",
                  ending: "on_line_content_3",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
              ],
              color: ["#58e3d2"],
            },
            line_right: "true",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["DICT", "CTDI"],
              content_id: ["on_line_content_9", "on_line_content_10"],
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
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "<60 gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_8",
                  ending: "on_line_content_10",
                },
              ],
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Radioterapia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["ROM"],
            logo_heading_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_heading_border_color: "#a334c8",
            logo_color: "linear-gradient(to right top, #a334c8 20%, #f65467)",
            logo_title: ["MMG"],
            logo_id_names: ["logo_title_id11"],
            logo_title_color:
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#a334c8",
              line_color: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "false",
                  ending: "on_line_content_3",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
              ],
              color: ["#58e3d2"],
            },
            line_right: "false",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["VISITA"],
              content_id: ["on_line_content_11"],
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
          },
        },
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: [""],
            logo_heading_color:
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            logo_heading_border_color: "#ffc100",
            logo_color:
              "linear-gradient(to right top, #ffc100 1%, #ff5e58 80%)",
            logo_title: ["GOM"],
            logo_id_names: ["logo_title_id12"],
            logo_title_color:
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            top_down_arrow: {
              display: "true",
              arrow_color: "#ffc100",
              line_color: "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "false",
                  ending: "on_line_content_3",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
              ],
              color: ["#58e3d2"],
            },
            line_right: "false",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["RT"],
              content_id: ["on_line_content_12"],
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
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "<60 gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_10",
                  ending: "on_line_content_12",
                },
              ],
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
    const titleColor = configurations?.title_color || "#515151";
    const lineRight = configurations?.line_right === "True";
    const logoGradient = start_content?.configurations?.logo_color || "#2394b9";
    const stepBg = start_content?.configurations?.background_color || "white";
    const font_color = start_content?.configurations?.font_color || "black";

    // ✅ Build dynamic CSS
    let css = `
  .${className} {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: 120px;
    padding-right:10px;
    height: 100%;
    position: relative;
  }

  .${className} .top {
    margin-right: 10%;
  }

  .${className} .top h2 {
    font-size: 12px;
    color: ${titleColor};
  }

  .${className} .mid-top {
    margin-top: 140px;
    position: relative;
    z-index: 1;
    width: max-content;
  }

  ${
    lineRight
      ? `
  .${className}::after {
    content: "";
    position: absolute;
    border-right: 2px solid #adafaf;
    height: 365px;
    right: 0px;
    bottom: 324px;
  }

  .${className}::before {
    content: "";
    position: absolute;
    background-color: #767979;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    right: -2px;
    top: 16px;
    z-index: 1;
  }
  `
      : ""
  }
  
  .${className} .start-mid-back-line {
    position: absolute;
    z-index: 1;
    top: 208px;
    width: 15px;
    height: 190px;
    background-color: #58e3d2;
    border-bottom-left-radius:10px;
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
    font-size: 15px;
    background: ${logoGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid #2394b9;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .${className} .mid-top .icon_plus_name p {
    display: inline;
    background: ${logoGradient};
    padding: 8px 11px;
    font-size:9px;
    border-radius: 23px;
    position: absolute;
    top: 21px;
    color: white;
  }

  .${className} .mid-top .start-step {
    background-color: ${stepBg};
    padding: 7px;
    margin: 0;
    margin-left: 35px;
    border-radius: 7px;
    max-width:65px;
    min-width:45px;
    font-size: 9px;
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
    height: 135px;
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
        const logoId = sg.content.logo_id_names?.[i] || ""; // Safe optional chaining
        html += `<div class="icon_plus_name">\n`;
        if (heading) html += `<span>${limitText(heading, 5)}</span>\n`;
        html += `<i class="fa-solid fa-user"></i>\n`;
        html += `<p${logoId ? ` id="${logoId}"` : ""}>${limitText(
          logo,
          8
        )}</p>\n`;
        html += `</div>\n`;
      });

      html += `</div>\n`;

      // ▶️ On-line content
      html += `<div class="subgroups-on-line">\n`;

      sg.content.on_line_content_configuration.content.forEach((c, i) => {
        const contentId =
          sg.content.on_line_content_configuration.content_id?.[i] || "";

        html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
          i + 1
        }" id="${contentId}">\n`;
        html += `<h6 class="box-shadow-box">${limitText(c, 10)}</h6>\n`;
        html += `</div>\n`;
      });

      html += `</div>\n`;

      html += `</div>\n`; // End sub-group-div
    });

    html += `</div>\n</div>\n`; // End sub-groups and Slide-box

    // === CSS ===
    let css = `
  .${uniqueClassName} {
    width: max-content;
    height: 100%;
    position:relative;
    margin:0 10px;
  }
  .${uniqueClassName} h1 {
    color: ${configurations?.title_color || "#515151"};
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 20px;
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
    margin-bottom: 115px;
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
    height: 140px;
    width: 1px;
    top: 55px;
    left: 50%;
    padding: 0;
    margin: 0;
    z-index: 1;
    transform: translateX(-50%);
  }
  .${uniqueClassName} .icon_plus_name::before{
    content: "";
    position: absolute;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    top: 195px;
    left: 50%;
    z-index:2;
    transform: translateX(-50%);
  }`
        : ""
    }
  .${uniqueClassName} .icon_plus_name span {
    position: absolute;
    top: -12px;
    font-size:10px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .${uniqueClassName} .icon_plus_name .fa-user{
    font-size: 15px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-bottom: 30px; 
  }
  .${uniqueClassName} .icon_plus_name p {
    display: inline;
    padding: 8px 11px;
    border-radius: 23px;
    position: absolute;
    top: 21px;
    font-size: 9px;
    color: white;
    width: 40px;
    text-align: center;
  }
  .${uniqueClassName} .subgroups-on-line {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    margin-top: 135px;
    z-index: 3;
  }
  .${uniqueClassName} .subgroups-on-line-content{
    position: relative;
  }
  .${uniqueClassName} .subgroups-on-line-content h6{
    margin: 0;
    font-size: 9px;
    border-radius: 5px;
    border-bottom-right-radius: 18px;
    padding: 10px 15px;
    position: relative;
  }
  .${uniqueClassName} .subgroups-on-line-content h6::after {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 50%);
    z-index: 4;
  }
  
  /* === Right Line example === */
  ${
    configurations.line_right
      ? `
  .${uniqueClassName}::after {
    content: "";
    position: absolute;
    border-right: 2px solid ${configurations?.line_color};
    height: 367px;
    right: -8px;
    bottom: 325px;
  }
  .${uniqueClassName}::before {
    content: "";
    position: absolute;
    background-color: ${configurations?.line_color};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    right: -10.5px;
    top: 18px;
  } `
      : ""
  }
  `;

    sub_groups.forEach((sg, idx) => {
      const logoLength = sg.content?.logo_title?.filter(Boolean)?.length || 0;
      const dynamicWidth = 110 + (logoLength - 1) * 50;
      css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} {
    margin:0px;
    padding:0 10px;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} h2 {
    color: ${sg.configurations?.title_color || "#333"};
    font-size: 10px;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .subgroups-mid-top {
    width: ${dynamicWidth}px;
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
    border-top: 7px solid ${sg.content.top_down_arrow.arrow_color};
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

      if (sg.content.line_right === "true" || sg.content.line_right === true) {
        css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}::after {
    position: absolute;
    content: "";
    border-left: 1px solid ${sg.content.line_color};
    height: 330px;
    right: -1px;
    top: 10px;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}::before {
    position: absolute;
    content: "";
    height: 5px;
    background-color: ${sg.content.line_color};
    border-radius: 50%;
    width: 5px;
    right: -3px;
    top: 5px;
  }`;
      }

      sub_groups.forEach((sg, subGroupIdx) => {
        const inlineContentArray =
          sg.content.on_line_content_configuration.bottom_shape_postion || [];

        inlineContentArray.forEach((level, inlineIdx) => {
          let beforeTop = "245px";
          let afterTop = "30px";
          let afterHeight = "210px";

          switch (level) {
            case "Level_2":
              beforeTop = "265px";
              afterTop = "30px";
              afterHeight = "230px";
              break;
            case "Level_3":
              beforeTop = "285px";
              afterTop = "30px";
              afterHeight = "250px";
              break;
            case "Level_4":
              beforeTop = "305px";
              afterTop = "30px";
              afterHeight = "270px";
              break;
            case "Level_5":
              beforeTop = "325px";
              afterTop = "30px";
              afterHeight = "290px";
              break;
          }

          css += ` .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } .${uniqueClassName}-on-line-content${inlineIdx + 1}::after {
        content: "";
        position: absolute;
        height: ${afterHeight};
        width: 1px !important;
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
        width: 13px;
        height: 11px;
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
<div class="PPT-Box" id="PPT-Box">
  <div class="mid-Line"></div>
  <div class="footer-dark-five-lines">
    <!-- Footer Divs Will Be Added Here -->
  </div>
  <!-- Add Here -->
</div>
`;

// 3️⃣ Your predefined CSS
const PreDefined_CSS = `
body {
  display: flex;
  align-items:center;
  justify-content: center;
  font-family: sans-serif;
  transform:scale(1);
  overflow:hidden;
}
.PPT-Box {
  border: 1px solid black;
  width:1520px;
  height:710px;
  background-color: #f6fcfc;
  position: relative;
  display: flex;
  overflow-x:hidden;
  overflow-y:hidden;
  align-items: center;
  justify-content: start;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.mid-Line {
  width:100%;
  position: absolute;
  top: 55%;
  left: 55px;
  transform: translateY(-50%);
  height: 15px;
  box-shadow: 0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;
  background-color: #58e3d2;
  z-index: 3;
  border-bottom-left-radius:10px;
}
.box-shadow-box {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.218);
}
.footer-dark-five-lines {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: end;
}
.footer-dark-five-lines div {
  background: linear-gradient(to bottom, #f5fbfb, #eaf0f0);
  height: calc(100px / 5);
  border-bottom-left-radius: 20px;
  border-top-left-radius: 20px;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:start;
}
.footer-dark-five-lines div h4 {
  margin: 0;
  font-size: 9px;
  text-align: right;
  color: #333;
  position:absolute;
}
`;

let dynamicFooterCSS = "";

// Add widths for each footer div
Object.keys(JSON_Data.footer.label_width).forEach((key, idx) => {
  const widthValue = JSON_Data.footer.label_width[key];
  dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${
    idx + 1
  }) { width: ${widthValue}; }\n`;
});

// Add left positions for each h4
Object.keys(JSON_Data.footer.footer_label_position_left).forEach((key, idx) => {
  const leftValue = JSON_Data.footer.footer_label_position_left[key];
  dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${
    idx + 1
  }) h4 { left: ${leftValue}; }\n`;
});

let footerHTML = "";
const labels = JSON_Data.footer.footer_label;
Object.keys(labels).forEach((key, idx) => {
  footerHTML += `<div><h4 class="footer-label-${idx + 1}">${
    labels[key]
  }</h4></div>\n`;
});

const PreDefined_CSS_WithScale = PreDefined_CSS.replace(
  /transform:scale\([^)]*\)/,
  `transform: scale(${JSON_Data.scaling})`
);

const Final_CSS = PreDefined_CSS_WithScale + result.CSS + dynamicFooterCSS;

const Final_HTML = PreDefined_HTML.replace(
  "<!-- Footer Divs Will Be Added Here -->",
  footerHTML
).replace("<!-- Add Here -->", result.HTML);

document.body.innerHTML = Final_HTML;

const styleTag = document.createElement("style");
styleTag.textContent = Final_CSS;
document.head.appendChild(styleTag);

// Make Connecting Lines
function drawConnectingLines(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");

  if (!pptBox) {
    console.warn("PPT-Box not found.");
    return;
  }

  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, idx) => {
      if (
        sg.content &&
        sg.content.connecting_Line &&
        (sg.content.connecting_Line.display === "true" ||
          sg.content.connecting_Line.display === true)
      ) {
        sg.content.connecting_Line.connections.forEach((connection, i) => {
          const startEl = document.getElementById(connection.starting);
          const endEl = document.getElementById(connection.ending);

          if (!startEl || !endEl) {
            console.warn("Element not found for connection:", connection);
            return;
          }

          const levelStr = connection.height || "Level_1";
          const levelNum = parseInt(levelStr.split("_")[1]) || 1;

          const baseHeight = 30;
          const baseTopH = 130;
          const increment = 5;

          // Calculate raw values
          let rawHeight = baseHeight + (levelNum - 1) * increment;
          let rawTopH = baseTopH - (levelNum - 1) * increment;

          // Apply bounds (min = 30, max = 130)
          const height = Math.min(Math.max(rawHeight, 30), 130);
          const topH = Math.min(Math.max(rawTopH, 30), 130);

          const startRect = startEl.getBoundingClientRect();
          const endRect = endEl.getBoundingClientRect();
          const pptRect = pptBox.getBoundingClientRect();

          const deltaX = endRect.left - startRect.left;
          const deltaY = endRect.top - startRect.top;
          const width = Math.sqrt(deltaX * deltaX + deltaY * deltaY) - 10;
          const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

          const left = startRect.left - pptRect.left + startRect.width / 2;
          const top = startRect.top - pptRect.top;

          const lineClass = `connecting-line-sec${sectionIdx}-sub${idx}-line${i}`;
          const dynamicStyle = `
              .${lineClass} {
                position: absolute;
                z-index: 1;
                top: ${topH + top}px;
                left: ${left}px;
                width: ${width}px;
                height: ${height}px;
                border-top: 1px solid ${
                  sg.content.connecting_Line.line_color[i] || "black"
                };
                border-right: 1px solid ${
                  sg.content.connecting_Line.line_color[i] || "black"
                };
                border-top-right-radius: 20px;
                transform: rotate(${angle}deg);
              }
              .${lineClass}::after {
                content: "";
                position: absolute;
                top: 90%;
                right: 0px;
                transform: translateX(50%);
                border-top: 6px solid ${
                  sg.content.connecting_Line.arrow_color[i] || "#000"
                };
                border-left: 4px solid transparent;
                border-right: 4px solid transparent;
              }
            `;

          const style = document.createElement("style");
          style.textContent = dynamicStyle;
          document.head.appendChild(style);

          const lineDiv = document.createElement("div");
          lineDiv.className = lineClass;
          pptBox.appendChild(lineDiv);
        });
      }
    });
  });
}

drawConnectingLines(JSON_Data);

// Rendering Timeline Series
function drawBottomTimelineSeries(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");

  if (!pptBox) {
    console.warn("PPT-Box not found.");
    return;
  }

  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, idx) => {
      const timeline = sg.content?.BottomtimelineSeries;
      if (!timeline || !timeline.timlines || timeline.timlines.length === 0)
        return;

      timeline.timlines.forEach((item, i) => {
        const startEl = document.getElementById(item.starting);
        const endEl = document.getElementById(item.ending);

        if (!startEl || !endEl) {
          console.warn("Start or End element not found for timeline:", item);
          return;
        }

        // Level-based height logic
        const levelStr = item.height || "Level_1";
        const levelNum = parseInt(levelStr.split("_")[1]) || 1;

        const baseTopH = 160;
        const increment = 5;

        let rawTopH = baseTopH + (levelNum - 1) * increment;

        const topH = Math.min(Math.max(rawTopH, 30), 210);

        // Get bounding rectangles
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const pptRect = pptBox.getBoundingClientRect();

        const startCenterX =
          startRect.left - pptRect.left + startRect.width / 2;
        const endCenterX = endRect.left - pptRect.left + endRect.width / 2;

        const width2 = Math.abs(endCenterX - startCenterX);

        const left = startRect.left - pptRect.left + startRect.width / 2;
        const top = startRect.top - pptRect.top;

        const timelineClass = `timeline-bottom-line-${sectionIdx}-${idx}-${i}`;
        const bg = timeline.background_color || "yellow";
        const showBorder =
          item.show_border === "true" || item.show_border === true;
        const borderColor = showBorder
          ? timeline.border_color || "black"
          : "transparent";

        const style = document.createElement("style");
        style.textContent = `
          .${timelineClass} {
            position: absolute;
            z-index: 3;
            top: ${topH + top}px;
            left: ${left}px;
            width: ${width2 + 4}px;
            height:20px;
            background: ${bg};
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: end;
            padding-right: 5px;
            color: black;
          }
          .${timelineClass} p{
            font-size: 7px;
            font-weight:bold;
          }
          .${timelineClass} i{
            font-size: 10px;
            margin-top:1px;
            margin-left: 5px;
          }
          .${timelineClass}::after {
            content: "";
            position: absolute;
            bottom: 55px;
            left: -4px;
            border-radius: 50%;
            width: 6px;
            height: 6px;
            background: ${borderColor};
          }
          .${timelineClass}::before {
            content: "";
            position: absolute;
            bottom: 20px;
            border-top:1px solid ${borderColor};
            border-right:1px solid ${borderColor};
            width:${width2}px;
            left: -3px;
            height:38px;
            border-top-right-radius:20px;
          }

        `;
        document.head.appendChild(style);

        const div = document.createElement("div");
        div.className = timelineClass;
        div.innerHTML = `<p>${item.content}</p><i class="fa-regular fa-clock"></i>`;
        pptBox.appendChild(div);
      });
    });
  });
}

drawBottomTimelineSeries(JSON_Data);

// Rendering Rectangle
function drawConnectingRectangle(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");

  if (!pptBox) {
    console.warn("PPT-Box not found.");
    return;
  }

  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, idx) => {
      const rectangleData = sg.content?.connecting_Rectangle;

      if (
        !rectangleData ||
        !(rectangleData.display === "true" || rectangleData.display === true)
      )
        return;

      rectangleData.connections.forEach((connection, i) => {
        const startEl = document.getElementById(connection.starting);
        const endEl = document.getElementById(connection.ending);

        if (!startEl || !endEl) {
          console.warn(
            "Element not found for rectangle connection:",
            connection
          );
          return;
        }

        const pptRect = pptBox.getBoundingClientRect();
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const distant_Space = 5;

        // Determine start and end X based on flags
        const startX =
          connection.start_from_starting === "true" ||
          connection.start_from_starting === true
            ? startRect.left - distant_Space
            : startRect.left + startRect.width + distant_Space;

        const endX =
          connection.end_from_ending === "true" ||
          connection.end_from_ending === true
            ? endRect.left + endRect.width + distant_Space
            : endRect.left - distant_Space;

        const left = Math.min(startX, endX) - pptRect.left - distant_Space;
        const width = Math.abs(endX - startX);

        // Handle height level
        const heightLevelStr = connection.height || "Level_1";
        const heightLevelNum = parseInt(heightLevelStr.split("_")[1]) || 1;
        const baseHeight = 20;
        const heightIncrement = 5;
        const minHeight = 10;
        const maxHeight = 95;
        const height = Math.min(
          Math.max(
            baseHeight + (heightLevelNum - 1) * heightIncrement,
            minHeight
          ),
          maxHeight
        );

        // Handle border thickness level
        const borderLevelStr = connection.border_thickness || "Level_1";
        const borderLevelNum = parseInt(borderLevelStr.split("_")[1]) || 1;
        const baseBorder = 6;
        const borderIncrement = 2;
        const minBorder = 4;
        const maxBorder = 20;
        const borderSize = Math.min(
          Math.max(
            baseBorder + (borderLevelNum - 1) * borderIncrement,
            minBorder
          ),
          maxBorder
        );

        const color = rectangleData.color?.[i] || "#000";
        const borderRadius = "8px";
        const topOffset = 397;

        const className = `connection-Rectangle-sec${sectionIdx}-sub${idx}-rect${i}`;

        const dynamicStyle = `
          .${className} {
            position: absolute;
            left: ${left}px;
            width: ${width}px;
            height: ${height}px;
            border-bottom: ${borderSize}px solid ${color};
            border-left: ${borderSize}px solid ${color};
            border-right: ${borderSize}px solid ${color};
            border-bottom-left-radius: ${borderRadius};
            border-bottom-right-radius: ${borderRadius};
            box-sizing: border-box;
            top: ${topOffset}px;
            z-index: 2;
          }
        `;

        const styleEl = document.createElement("style");
        styleEl.textContent = dynamicStyle;
        document.head.appendChild(styleEl);

        const rectDiv = document.createElement("div");
        rectDiv.className = className;
        pptBox.appendChild(rectDiv);
      });
    });
  });
}

drawConnectingRectangle(JSON_Data);

// Practice
const PPT_Box = document.getElementById("PPT-Box");
const elem1 = document.getElementById("logo_title_id10");

const parent_rect = PPT_Box.getBoundingClientRect();
const rect1 = elem1.getBoundingClientRect();

const relativeX = rect1.left - parent_rect.left;
const relativeY = rect1.top - parent_rect.top;

console.log("Position inside PPT_Box:", {
  x: relativeX,
  y: relativeY,
  width: rect1.width,
  height: rect1.height,
});
