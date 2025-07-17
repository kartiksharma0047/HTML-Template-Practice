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
        title_size: "12px",
        box_width: "150px",
        line_right: "True",
      },
      start_content: {
        logo_title: "Paziente",
        steps: ["SINTOMI", "REPERTO INCIDENTALE", "SCREENING I LIVELLO"],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          width: ["40px", "65px", "55px"],
          background_color: "white",
          font_size: "9px",
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
        title_size: "12px",
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
            title_size: "10px",
            margin: "0",
            padding: "0 10px 0 0",
          },
          content: {
            logo_heading: ["", "GOM", "GOM"],
            content_width: "210px",
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
              border_radius: "10px",
            },
            connection_Circle: {
              display: "false",
              position_Left: "0px",
              Width_And_Height: "130px",
              border_size: "15px",
              border_color: "#58e3d2",
            },
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
                "linear-gradient(to right, #f6f4dc60 , #ffc305)",
              configuration: {
                position_left: ["38px", "117px"],
                position_top: ["0px", "0px"],
                width: ["72px", "60px"],
                pseudo_Element_Configuration: {
                  color: ["#ffc100", "#ffc100"],
                  border_width: ["1px", "1px"],
                  circle_size: ["5px", "5px"],
                  line_width: ["66px", "66px"],
                  line_height: ["43px", "43px"],
                  circle_position: {
                    bottom: ["61px", "61px"],
                    right: ["77px", "77px"],
                  },
                  line_position: {
                    bottom: ["20px", "20px"],
                    right: ["13px", "13px"],
                    radius: ["30px", "30px"],
                  },
                },
              },
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Decisione Terapeutica",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "10px",
            margin: "0px",
            padding: "0 0 0 15px",
          },
          content: {
            logo_heading: [""],
            content_width: "110px",
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
              position_Left: "95px",
              width: "360px",
              height: "60px",
              border_size: "10px",
              border_color: "#58e3d2",
              border_radius: "6px",
            },
            connection_Circle: {
              display: "false",
              position_Left: "0px",
              Width_And_Height: "130px",
              border_size: "15px",
              border_color: "#58e3d2",
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
              configuration: {
                position_left: ["-50px"],
                position_top: ["0px"],
                width: ["110px"],
                pseudo_Element_Configuration: {
                  color: ["#ffc100"],
                  border_width: ["1px"],
                  circle_size: ["5px"],
                  line_width: ["115px"],
                  line_height: ["43px"],
                  circle_position: {
                    bottom: ["61px"],
                    right: ["128px"],
                  },
                  line_position: {
                    bottom: ["20px"],
                    right: ["13px"],
                    radius: ["30px"],
                  },
                },
              },
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
        title_size: "12px",
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
            title_size: "10px",
            margin: "0",
            padding: "0",
          },
          content: {
            logo_heading: ["GOM", "GOM"],
            content_width: "150px",
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
                left: ["37px", "113px", "37px"],
                bottom: ["40px", "40px", "40px"],
              },
              width: ["192px", "460px", "465px"],
              height: ["30px", "40px", "30px"],
              arrow_color: ["#a334c8", "#ffc100", "#a334c8"],
              line_color: ["#9f30cb", "#ffc100", "#9f30cb"],
            },
            connection_Rectangle: {
              display: "true",
              position_Left: "-5px",
              width: "170px",
              height: "40px",
              border_size: "9px",
              border_color: "#58e3d2",
              border_radius: "6px",
            },
            connection_Circle: {
              display: "false",
              position_Left: "0px",
              Width_And_Height: "130px",
              border_size: "15px",
              border_color: "#58e3d2",
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
              configuration: {
                position_left: ["-63px"],
                position_top: ["0px"],
                width: ["191px"],
                pseudo_Element_Configuration: {
                  color: ["#ffc100"],
                  border_width: ["1px"],
                  circle_size: ["5px"],
                  line_width: ["196px"],
                  line_height: ["43px"],
                  circle_position: {
                    bottom: ["61px"],
                    right: ["208px"],
                  },
                  line_position: {
                    bottom: ["20px"],
                    right: ["13px"],
                    radius: ["30px"],
                  },
                },
              },
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Chirurgia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "10px",
            margin: "0px",
            padding: "0 10px",
          },
          content: {
            logo_heading: ["GOM", ""],
            content_width: "140px",
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
              border_radius: "10px",
            },
            connection_Circle: {
              display: "false",
              position_Left: "0px",
              Width_And_Height: "130px",
              border_size: "15px",
              border_color: "#58e3d2",
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
              content: ["<30 gg da", "<60 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
              configuration: {
                position_left: ["-25px", "-352px"],
                position_top: ["0px", "33px"],
                width: ["100px", "427px"],
                pseudo_Element_Configuration: {
                  color: ["#ffc100"],
                  border_width: ["1px"],
                  circle_size: ["5px"],
                  line_width: ["105px"],
                  line_height: ["43px"],
                  circle_position: {
                    bottom: ["61px"],
                    right: ["117px"],
                  },
                  line_position: {
                    bottom: ["20px"],
                    right: ["13px"],
                    radius: ["30px"],
                  },
                },
              },
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Chemioterapia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "10px",
            margin: "0px 0px",
            padding: "0px 10px",
          },
          content: {
            logo_heading: [""],
            content_width: "130px",
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
              border_radius: "10px",
            },
            connection_Circle: {
              display: "true",
              position_Left: "10px",
              Width_And_Height: "110px",
              border_size: "10px",
              border_color: "#58e3d2",
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
              content: ["<60 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
              configuration: {
                position_left: ["-78px"],
                position_top: ["3.5px"],
                width: ["188px"],
                pseudo_Element_Configuration: {
                  color: ["#ffc100"],
                  border_width: ["1px"],
                  circle_size: ["5px"],
                  line_width: ["193px"],
                  line_height: ["43px"],
                  circle_position: {
                    bottom: ["61px"],
                    right: ["204px"],
                  },
                  line_position: {
                    bottom: ["20px"],
                    right: ["13px"],
                    radius: ["30px"],
                  },
                },
              },
            },
          },
        },
        {
          component: "Sub-Header",
          title: "Radioterapia",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "10px",
            margin: "0",
            padding: "0 0 0 10px",
          },
          content: {
            logo_heading: ["ROM"],
            content_width: "90px",
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
              border_radius: "10px",
            },
            connection_Circle: {
              display: "false",
              position_Left: "0px",
              Width_And_Height: "130px",
              border_size: "15px",
              border_color: "#58e3d2",
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
          },
        },
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            title_size: "14px",
            margin: "0",
            padding: "0 15px 0 0",
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
              border_radius: "10px",
            },
            connection_Circle: {
              display: "false",
              position_Left: "0px",
              Width_And_Height: "130px",
              border_size: "15px",
              border_color: "#58e3d2",
            },
            line_right: "false",
            line_color: "#c4c9ca",
            logo_para_color: "white",
            on_line_content_configuration: {
              content: ["RT"],
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
            timelineSeries: {
              content: ["<60 gg da"],
              background_color:
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
              configuration: {
                position_left: ["-123px"],
                position_top: [""],
                width: ["153px"],
                pseudo_Element_Configuration: {
                  color: ["#ffc100"],
                  border_width: ["1px"],
                  circle_size: ["5px"],
                  line_width: ["159px"],
                  line_height: ["43px"],
                  circle_position: {
                    bottom: ["61px"],
                    right: ["170px"],
                  },
                  line_position: {
                    bottom: ["20px"],
                    right: ["12.5px"],
                    radius: ["30px"],
                  },
                },
              },
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
    const title_size = configurations?.title_size || "12px";
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
    height: 135px;
  }
  `;

    stepWidths.forEach((w, i) => {
      css += `
    .${className} .mid-top .start-step${i + 1} {
      width: ${w};
    }
    `;
    });

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
        sg.content.connection_Circle &&
        (sg.content.connection_Circle.display === "true" ||
          sg.content.connection_Circle.display === true)
      ) {
        html += `<div class="connection-Circle-box${idx + 1}">
        <div class="connection-Circle-shape"></div>
        </div>\n`;
      }

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
    font-size: ${configurations?.title_size || "12px"};
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
    width: 0.5px;
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
  .${uniqueClassName} .subgroups-Timeline-bottom-content {
    display: flex;
    margin-top: 130px;
    align-items: center;
    position: absolute;
    width: 100%;
    z-index: 3;
  }
  .${uniqueClassName} .subgroups-Timeline-bottom-content .fa-clock{
    font-size: 10px;
    margin: 0;
    padding: 0;
    margin-top: 2px;
    padding-left: 3px;
  }
  .${uniqueClassName} .subgroups-Timeline-bottom-logo_text {
    display: flex;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    align-items: center;
    justify-content: end;
    font-size:7px;
    margin: 0;
    padding: 0;
    padding-right: 7px;
    position: absolute;
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
    right: 0px;
    bottom: 325px;
  }
  .${uniqueClassName}::before {
    content: "";
    position: absolute;
    background-color: ${configurations?.line_color};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    right: -1.5px;
    top: 18px;
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
    font-size: ${sg.configurations?.title_size || "10px"};
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

      sg.content.timelineSeries?.content.forEach((t, i) => {
        const pseudoConfig =
          sg.content.timelineSeries.configuration.pseudo_Element_Configuration;

        css += `
  /* Timeline base block */
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
          idx + 1
        } .${uniqueClassName}-timeline-bottom${i + 1} {
    background: ${sg.content.timelineSeries.background_color};
  }

  /* Main logo text block */
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}
    .subgroups-Timeline-bottom-logo_text.${uniqueClassName}-timeline-bottom${
          i + 1
        } {
      width: ${sg.content.timelineSeries.configuration.width[i] || "100px"};
      left: ${
        sg.content.timelineSeries.configuration.position_left[i] || "0px"
      };
      top: ${sg.content.timelineSeries.configuration.position_top[i] || "0px"};
      position: absolute;
  }

  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}
    .subgroups-Timeline-bottom-logo_text.${uniqueClassName}-timeline-bottom${
          i + 1
        }::before {
      content: "";
      position: absolute;
      width: ${pseudoConfig.line_width[i] || "100px"};
      height: ${pseudoConfig.line_height[i] || "43px"};
      border-top: ${pseudoConfig.border_width[i] || "1px"} solid ${
          pseudoConfig.color[i] || "transparent"
        };
      border-right: ${pseudoConfig.border_width[i] || "1px"} solid ${
          pseudoConfig.color[i] || "transparent"
        };
      border-top-right-radius:${pseudoConfig.line_position.radius[i] || "20px"};
      bottom: ${pseudoConfig.line_position.bottom[i] || "70px"};
      right: ${pseudoConfig.line_position.right[i] || "0px"};
  }

  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}
    .subgroups-Timeline-bottom-logo_text.${uniqueClassName}-timeline-bottom${
          i + 1
        }::after {
      content: "";
      position: absolute;
      border-radius:50%;
      width: ${pseudoConfig.circle_size[i] || "7px"};
      height: ${pseudoConfig.circle_size[i] || "7px"};
      background: ${pseudoConfig.color[i] || "transparent"};
      bottom: ${pseudoConfig.circle_position.bottom[i] || "70px"};
      right: ${pseudoConfig.circle_position.right[i] || "0px"};
  }
  `;
      });

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

      // connection_Circle CSS generation
      if (
        sg.content.connection_Circle &&
        (sg.content.connection_Circle.display === "true" ||
          sg.content.connection_Circle.display === true)
      ) {
        css += `
.${uniqueClassName} .subgroups-on-line .connection-Circle-box${idx + 1} {
  position: absolute;
  left: ${sg.content.connection_Circle.position_Left || "0px"};
  width: ${sg.content.connection_Circle.Width_And_Height || "0px"};
  height: ${sg.content.connection_Circle.Width_And_Height || "0px"};
  bottom:20px;
  overflow: hidden;
  z-index:-2;
  transform: rotateZ(180deg);
}
.${uniqueClassName} .subgroups-on-line .connection-Circle-box${
          idx + 1
        } .connection-Circle-shape {
  position: absolute;
  box-sizing: border-box;
  width: ${sg.content.connection_Circle.Width_And_Height || "130px"};
  height: ${sg.content.connection_Circle.Width_And_Height || "130px"};
  border: ${sg.content.connection_Circle.border_size || "15px"} solid ${
          sg.content.connection_Circle.border_color || "#000"
        };
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 0%;
}
  `;
      }
      // connection_Line CSS block:
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
    z-index:-1;
    bottom: ${sg.content.connection_Line.position?.bottom[i] || "0px"};
    left: ${sg.content.connection_Line.position?.left[i] || "0px"};
    width: ${sg.content.connection_Line.width[i] || "0px"};
    height: ${sg.content.connection_Line.height[i] || "0px"};
    border-top:1px solid ${sg.content.connection_Line.line_color[i] || "black"};
    border-right:1px solid ${
      sg.content.connection_Line.line_color[i] || "black"
    };
    border-top-right-radius:20px;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
            idx + 1
          }-connection-line-${i + 1}::after {
    content: "";
    z-index:-1;
    position: absolute;
    width: 0;
    height: 0;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
    border-top: 6px solid ${
      sg.content.connection_Line.arrow_color[i] || "#000"
    };
    right: -4px;
    bottom:-5px;
  }
      `;
        }
      }

      // connection_Rectangle CSS generation
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
  border-bottom: ${
    sg.content.connection_Rectangle.border_size || "12px"
  } solid ${sg.content.connection_Rectangle.border_color || "#000"};
  border-left: ${sg.content.connection_Rectangle.border_size || "12px"} solid ${
          sg.content.connection_Rectangle.border_color || "#000"
        };
  border-right: ${
    sg.content.connection_Rectangle.border_size || "12px"
  } solid ${sg.content.connection_Rectangle.border_color || "#000"};
  border-bottom-left-radius:${
    sg.content.connection_Rectangle.border_radius || "0px"
  };
  border-bottom-right-radius:${
    sg.content.connection_Rectangle.border_radius || "0px"
  };
  box-sizing: border-box;
  top:21px;
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
  transform:scale(0.6);
  font-family: sans-serif;
}
.PPT-Box {
  border: 1px solid black;
  height: 710px;
  width:1520px;
  background-color: #f6fcfc;
  position: relative;
  display: flex;
  align-items: center;
  overflow:hidden;
  justify-content: start;
}
.mid-Line {
  width: 95%;
  position: absolute;
  top: 55%;
  left: 52%;
  transform: translate(-50%, -50%);
  height: 15px;
  box-shadow: 0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;
  background-color: #58e3d2;
  z-index: 1;
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
  dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${idx + 1}) { width: ${widthValue}; }\n`;
});

// Add left positions for each h4
Object.keys(JSON_Data.footer.footer_label_position_left).forEach((key, idx) => {
  const leftValue = JSON_Data.footer.footer_label_position_left[key];
  dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${idx + 1}) h4 { left: ${leftValue}; }\n`;
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
