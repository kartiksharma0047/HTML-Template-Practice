let collapsibleData = [];
JSON_Data = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "Ospedale",
      footer_3_label: "Altra struttura",
      footer_4_label: "Casa",
      footer_5_label: "Farmacia Ospedaliera",
    },
    footer_label_position_left: {
      footer_1_left: "Level_5",
      footer_2_left: "Level_6",
      footer_3_left: "Level_5",
      footer_4_left: "Level_7",
      footer_5_left: "Level_2 ",
    },
    label_width: {
      footer_1_width: "85",
      footer_2_width: "85",
      footer_3_width: "85",
      footer_4_width: "85",
      footer_5_width: "85",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
    footer_width: "auto",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
    width: "auto",
  },
  colors: {
    white_color: "#ffffff",
    black_color: "#000000",
    Common_Header_title: "#515151",
    Common_Header_Line: "#adafaf",
    Common_SubHeader_title: "rgb(81, 81, 81)",
    Common_SubHeader_lineRight: "#c4c9ca",
    Common_logo_heading: "linear-gradient(to right top, #a334c8 20%, #f65467)",
    Common_logo_border: "#a334c8",
    Common_logo: "linear-gradient(to right top, #a334c8 20%, #f65467)",
    Common_logo_title: "linear-gradient(to right top, #a334c8 20%, #f65467)",
    Common_TopDown_arror: "#a334c8",
    Common_TopDown_Line: "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
    Common_ConnectingLine_arrow: "#a334c8",
    Common_ConnectingLine_line: "#9f30cb",
    Common_ConnectingRectangle: "#58e3d2",
    Common_AboveLine_Text: "#7a1bffff",
    Common_onLineContent_font: "#000000",
    Common_onLineContent_Background: "#e6fffc",
    Common_onLineContent_Point:
      "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
    Common_onLineContent_Line:
      "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
    Common_onLineContent_Shape: "linear-gradient(to top, #1375af 5%, #45d0cb)",
    Common_timeLineSeries_Background:
      "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
    Common_timeLineSeries_Border: "#ffc100",
    Common_transparent: "transparent",
  },
  fontConfig: {
    fontsize: "small",
  },
  body: [
    {
      component: "Start-Header",
      title: "Trattamento",
      configurations: {
        title_color: "#515151",
        line_right: true,
        line_color: "#adafaf",
        circle_color: "#767979",
        alignment: "vertical",
        vertical_config: {
          boxColor: "linear-gradient(to right, #d5d6d8, #ebebebff)",
          boxShape: "blob_soft",
        },
      },
      start_content: {
        logo_title: "Paziente",
        link: "",
        steps: [],
        stepsLink: [],
        title_detail: "Paziente",
        steps_details: [],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          mid_line_color: "#58e3d2",
          background_color: [],
          font_color: [],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Follow-up",
      configurations: {
        title_color: "Common_Header_title",
        line_right: false,
        line_color: "Common_Header_Line",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Follow-up",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: true,
          },
          content: {
            logo_heading: [""],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_titles_config: [
              {
                logo_title: ["Neurologo"],
                links: [""],
                logo_id_name: "logo_title_id1",
                logo_detail: ["Neurologo"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: ["Common_transparent"],
                  line_color: ["Common_TopDown_Line"],
                },
              },
            ],
            above_line_content: {
              content: ["hidden"],
              color: ["Common_transparent"],
              content_details: [""],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "Common_SubHeader_lineRight",
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id4",
                  height: "Level_10",
                },
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id8",
                  height: "Level_10",
                },
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id2",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id5",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id7",
                  height: "Level_1",
                },
              ],
              arrow_color: [
                "Common_ConnectingLine_arrow",
                "Common_ConnectingLine_arrow",
                "#8c9091",
                "#8c9091",
                "#8c9091",
              ],
              line_color: [
                "Common_ConnectingLine_line",
                "Common_ConnectingLine_line",
                "#8c9091",
                "#8c9091",
                "#8c9091",
              ],
            },
            connecting_Rectangle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_7",
                  end_from_ending: "true",
                  height: "Level_10",
                  border_thickness: "Level_6",
                  config: {
                    fontAwsomeicons: [
                      "fa-solid fa-angles-right",
                      "fa-solid fa-angles-right",
                      "fa-solid fa-angles-right",
                    ],
                    iconColors: ["white_color", "white_color", "white_color"],
                    iconSize: ["Size_3", "Size_3", "Size_3"],
                    justify_content: "between",
                    start_end_gaps: "Level_2",
                    shape: "rounded_bottom",
                    direction: "default",
                  },
                },
              ],
              color: ["Common_ConnectingRectangle"],
            },
            on_line_content_configuration: {
              content: ["Hidden----"],
              link: [],
              content_id: ["on_line_content_1"],
              content_details: [],
              color: ["Common_transparent"],
              background_color: ["Common_transparent"],
              background_shadow: [false],
              bottom_point_color: ["Common_transparent"],
              bottom_line_color: ["Common_transparent"],
              bottom_shape_color: ["Common_transparent"],
              bottom_Line_postion: ["Level_1"],
              bottom_shape_positions: [
                {
                  levels: ["Level_1"],
                  color: ["Common_transparent"],
                },
              ]
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "",
      configurations: {
        title_color: "#515151",
        line_right: false,
        line_color: "#adafaf",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["", "", ""],
            logo_heading_color: [
              "Common_transparent",
              "Common_transparent",
              "Common_transparent",
            ],
            logo_heading_border_color: [
              "Common_transparent",
              "#e7636b",
              "Common_transparent",
            ],
            logo_color: [
              "Common_transparent",
              "linear-gradient(to top right, #e7636b 40%, #de7883)",
              "Common_transparent",
            ],
            logo_titles_config: [
              {
                logo_title: ["hidden"],
                links: [""],
                logo_id_name: "logo_title_id2",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
              {
                logo_title: ["Alongside Coordinator"],
                links: [""],
                logo_id_name: "logo_title_id3",
                logo_detail: [""],
                logo_title_background_color: ["white"],
                logo_title_border: [true],
                logo_title_border_color: ["#e7636b"],
                logo_title_color: ["linear-gradient(to top right, #e7636b 40%, #de7883)"],
                top_down_arrow: {
                  display: true,
                  arrow_color: ["#e7636b"],
                  line_color: ["linear-gradient(to top right, #e7636b 40%, #de7883)"],
                },
              },
              {
                logo_title: ["hidden"],
                links: [""],
                logo_id_name: "logo_title_id4",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
            ],
            above_line_content: {
              content: ["prescrive", "assiste", "effettua"],
              color: ["#8c9091", "#e7636b", "Common_AboveLine_Text"],
              content_details: ["prescrive", "assiste", "effettua"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id3",
                  ending: "logo_title_id6",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#e7636b"],
              line_color: ["#e7636b"],
            },
            on_line_content_configuration: {
              content: ["KESIMPTA", "KESIMPTA ASSUNZIONE", "VISITA CONTROLLO"],
              content_id: [
                "on_line_content_2",
                "on_line_content_3",
                "on_line_content_4",
              ],
              content_details: [
                "KESIMPTA",
                "KESIMPTA ASSUNZIONE",
                "VISITA CONTROLLO",
              ],
              link: ["", "", ""],
              color: ["white", "white", "black"],
              background_color: ["#0460a9", "#0460a9", "#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_5", "Level_4", "Level_3"],
              bottom_point_position_onLine: [true, false, true],
              bottom_shape_positions: [
                {
                  levels: ["Level_5"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_4"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ]
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "",
      configurations: {
        title_color: "#515151",
        line_right: false,
        line_color: "#adafaf",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["", ""],
            logo_heading_color: ["Common_transparent", "Common_transparent"],
            logo_heading_border_color: [
              "Common_transparent",
              "Common_transparent",
            ],
            logo_color: ["Common_transparent", "Common_transparent"],
            logo_titles_config: [
              {
                logo_title: ["hidden"],
                links: [""],
                logo_id_name: "logo_title_id5",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
              {
                logo_title: ["hidden"],
                links: [""],
                logo_id_name: "logo_title_id6",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
            ],
            above_line_content: {
              content: ["prescrive", "assiste"],
              color: ["#8c9091", "#e7636b"],
              content_details: ["prescrive", "assiste"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            connecting_Circle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_6",
                  ending: "on_line_content_4",
                  start_from: "end",
                  end_from: "start",
                  border_thickness: "Level_4",
                  config: {
                    fontAwsomeicon: "fa-solid fa-angles-left",
                    iconColor: "white",
                    iconSize: "Level_2",
                    direction: "default",
                  },
                },
              ],
              color: ["#58e3d2"],
            },
            on_line_content_configuration: {
              content: ["KESIMPTA", "KESIMPTA ASSUNZIONE"],
              content_id: ["on_line_content_5", "on_line_content_6"],
              content_details: ["KESIMPTA", "KESIMPTA ASSUNZIONE"],
              link: ["", ""],
              color: ["white", "white"],
              background_color: ["#0460a9", "#0460a9"],
              bottom_point_position_onLine: [false, false],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_point_position_onLine: [true, true],
              bottom_Line_postion: ["Level_5", "Level_4"],
              bottom_shape_positions: [
                {
                  levels: ["Level_5"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_4"],
                  color: ["Common_onLineContent_Shape"],
                }
              ]
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "",
      configurations: {
        title_color: "#515151",
        line_right: true,
        line_color: "#adafaf",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["", ""],
            logo_heading_color: ["Common_transparent", "Common_transparent"],
            logo_heading_border_color: [
              "Common_transparent",
              "Common_transparent",
            ],
            logo_color: ["Common_transparent", "Common_transparent"],
            logo_titles_config: [
              {
                logo_title: ["hidden"],
                links: [""],
                logo_id_name: "logo_title_id7",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
              {
                logo_title: ["hidden"],
                links: [""],
                logo_id_name: "logo_title_id8",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
            ],
            above_line_content: {
              content: ["hidden--", "assiste"],
              color: ["Common_transparent", "Common_AboveLine_Text"],
              content_details: ["", "assiste"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            connecting_Circle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_7",
                  ending: "on_line_content_8",
                  start_from: "start",
                  end_from: "end",
                  border_thickness: "Level_4",
                  config: {
                    fontAwsomeicon: "fa-solid fa-angles-left",
                    iconColor: "white",
                    iconSize: "Level_0",
                  },
                },
              ],
              color: ["#58e3d2"],
            },
            on_line_content_configuration: {
              content: ["ALTRO FARMACO", "VISITA CONTROLLO"],
              content_id: ["on_line_content_7", "on_line_content_8"],
              content_details: ["ALTRO FARMACO", "VISITA CONTROLLO"],
              link: ["", ""],
              color: ["black", "black"],
              background_color: ["#e6fffc", "#e6fffc"],
              bottom_point_color: [
                "Common_transparent",
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "Common_transparent",
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "Common_transparent",
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_1","Level_3"],
              bottom_point_position_onLine: [false, true],
              bottom_shape_positions: [
                {
                  levels: ["Level_1"],
                  color: ["Common_transparent"],
                },
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
          },
        },
      ],
    },
  ],
};


// Color Map Function
const resolveColor = (value, colorMap) => {
  if (colorMap[value]) return colorMap[value]; // if it's a key in colors
  if (
    typeof value === "string" &&
    (value.startsWith("#") ||
      value.startsWith("rgb") ||
      value.includes("gradient"))
  ) {
    return value;
  }
  return value;
};

const getFontSize = (sm, md, lg) => {
  const fontType = JSON_Data?.fontConfig?.fontsize?.toLowerCase?.() || "small";

  switch (fontType) {
    case "small":
      return sm;
    case "medium":
      return md;
    case "large":
      return lg;
    default:
      return sm;
  }
};

// Util Function -  Safe normalize function for Appian string input
function normalizeAppianString(str) {
  if (typeof str !== "string") return "";
  // Remove wrapping quotes/backticks if any accidentally passed
  str = str.trim().replace(/^`+|`+$/g, "");
  // Decode escaped newline and quotes (Appian sometimes escapes them)
  try {
    str = JSON.parse(`"${str.replace(/"/g, '\\"')}"`);
  } catch {
    // fallback if JSON parse fails
    str = str.replace(/\\n/g, "\n").replace(/\\"/g, '"');
  }
  return str.trim();
}

// Util Function
function limitText(text, limit) {
  return text.length > limit ? text.slice(0, limit) + "..." : text;
}

const levelToPixel = (levelString) => {
  const defaultLevel = 10;
  const totalLevels = 20;
  const maxOffset = getFontSize(140, 150, 160);
  let level = parseInt(levelString?.replace("Level_", ""), 10);
  if (isNaN(level)) level = defaultLevel;
  level = Math.max(0, Math.min(totalLevels, level));
  const offsetFromCenter = level - defaultLevel;
  const pixelValue = (offsetFromCenter / defaultLevel) * maxOffset;

  return `${pixelValue}px`;
};

// Direction
function alignmentDirection(JSON_Portion) {
  const allowedDirection = ["reverse", "default"];
  if (allowedDirection.includes(JSON_Portion)) {
    return JSON_Portion.toLowerCase();
  } else {
    return "default";
  }
}
const direction =
  alignmentDirection(JSON_Data.Page_Configuration.direction) === "reverse";

function isVisible(el) {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const style = window.getComputedStyle(el);
  return (
    style.display !== "none" &&
    style.visibility !== "hidden" &&
    rect.width > 0 &&
    rect.height > 0
  );
}

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

  const generateStartHeader = (component, className) => {
    const { title, configurations, start_content } = component;
    const hasSteps = start_content.steps && start_content.steps.length > 0;
    const has2Steps = start_content.steps && start_content.steps.length >= 2;
    const alignment = configurations?.alignment || "horizontal";
    const alignment_boxColor =
      configurations?.vertical_config?.boxColor ||
      "linear-gradient(to right, #d5d6d8, #ebebebff)";
    const titleLimit = hasSteps ? 20 : 12;
    let html = `
  <div class="start slide-div ${className}">
    ${
      alignment === "horizontal"
        ? '<div class="start-mid-back-line"></div>'
        : ""
    }
    <div class="top">
      <h2 class="div-title" title="${limitText(title, 280)}">${limitText(
      title,
      titleLimit
    )}</h2>
    </div>
    <div class="mid-top">
      <div class="icon_plus_name">
        <i class="fa-solid fa-user"></i>
        <p
          title="${limitText(start_content.title_detail, 280) || ""}"
          ${
            start_content.link
              ? `class="Div-link" onclick="window.open('${start_content.link}', '_blank')"`
              : ""
          }
        >
          ${limitText(start_content.logo_title, 10)}
        </p>
      </div>
      <div class="mid-top-on-line">
  `;

    // Loop steps
    start_content.steps.slice(0, 3).forEach((step, index) => {
      const bg =
        resolveColor(
          start_content.configurations.background_color?.[index],
          JsonData.colors
        ) || "white";
      const font =
        resolveColor(
          start_content.configurations.font_color?.[index],
          JsonData.colors
        ) || "black";
      const stepLink = start_content.stepsLink?.[index] || "";
      const stepDetail = start_content.steps_details?.[index] || "";
      const hasStepLink = stepLink.trim() !== "";

      html += `<h5 
      class="start-step start-step${index + 1} box-shadow-box${
        hasStepLink ? " Div-link" : ""
      }" 
      title="${limitText(stepDetail, 280)}"
      style="background-color: ${bg}; color: ${font};"
      ${hasStepLink ? `onclick="window.open('${stepLink}', '_blank')"` : ""}
    >${limitText(step, 8)}</h5>\n`;
    });

    html += `
      </div>
    </div>
  </div>
`;

    // ✅ Extract configurations
    const titleColor =
      resolveColor(configurations?.title_color, JsonData.colors) || "#515151";

    const lineRight =
      configurations?.line_right === "True" ||
      configurations?.line_right === "true" ||
      configurations?.line_right === true;

    const logoGradient =
      resolveColor(
        start_content?.configurations?.logo_color,
        JsonData.colors
      ) || "#2394b9";
    const logo_background =
      resolveColor(
        start_content?.configurations?.logo_para_color,
        JsonData.colors
      ) || "#2394b9";
    const stepBg =
      resolveColor(
        start_content?.configurations?.background_color,
        JsonData.colors
      ) || "white";
    const font_color =
      resolveColor(
        start_content?.configurations?.font_color,
        JsonData.colors
      ) || "black";
    const logo_font_color =
      resolveColor(
        start_content?.configurations?.logo_font_color,
        JsonData.colors
      ) || "black";
    const mid_line_color =
      resolveColor(
        start_content?.configurations?.mid_line_color,
        JsonData.colors
      ) || "#58e3d2";
    const logo_border =
      resolveColor(
        start_content?.configurations?.logo_border_color,
        JsonData.colors
      ) || "#2394b9";
    const line_color =
      resolveColor(configurations?.line_color, JsonData.colors) || "#adafaf";
    const circle_color =
      resolveColor(configurations?.circle_color, JsonData.colors) || "#767979";

    const containerWidth =
      alignment === "horizontal" ? 120 : hasSteps ? 200 : 90;
    const boxMap = {
      default: "border-radius:50% 40px 40px 50%;",
      rectangle: "border-radius:0 0 0 0;",
      circle: "border-radius:50%;",
      left_circle: "border-radius:50% 0px 0px 50%;",
      right_circle: "border-radius:0 50% 50% 0;",
      rounded_sm: "border-radius:10px;",
      rounded_md: "border-radius:25px;",
      rounded_lg: "border-radius:50px;",
      rounded_x_lg: "border-radius:70px;",
      rounded_right_circle: "border-radius:40px 50% 50% 40px;",
      rounded_top: "border-radius:50px 50px 0 0;",
      rounded_bottom: "border-radius:0 0 50px 50px;",
      rounded_diagonal: "border-radius:50px 0 50px 0;",
      reverse_rounded_diagonal: "border-radius:0 50px 0 50px;",
      blob_soft: "border-radius:60% 40% 35% 65% / 55% 30% 40% 45%;",
      pill_horizontal: "border-radius:100px / 50px;",
      pill_vertical: "border-radius:50px / 100px;",
      squircle: "border-radius:30%;",
      inverted_corner: "border-radius:100% 0 100% 0 / 50% 0 50% 0;",
    };
    const boxShapeRaw = configurations?.vertical_config?.boxShape || "default";
    const boxShapeKey = boxShapeRaw.toLowerCase();
    const boxShapeStyle = boxMap[boxShapeKey] || boxMap["default"];
    const boxShapeLineColor =
      configurations?.vertical_config?.lineColor || "black";

    // ✅ Build dynamic CSS
    let css = `
  .${className} {
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    width: ${containerWidth}px;
    padding-right:10px;
    height: 100%;
    position: relative;
  }

  .${className} .top {
    ${
      alignment === "vertical"
        ? "width:100%; margin-left: 17%;"
        : "margin-right: 10%;"
    }
  }

  .${className} .top h2 {
    font-size: ${getFontSize(12, 13, 14)}px;
    color: ${titleColor};
    text-wrap:no-wrap;
  }

  .${className} .mid-top {
    ${
      alignment === "vertical"
        ? `
      display:flex;
      align-items:center;
      justify-content:${hasSteps ? "space-evenly" : "center"};
      margin-top: ${
        direction
          ? getFontSize(hasSteps ? 81 : 82, 78, hasSteps ? 70 : 64)
          : getFontSize(260, 255, 250)
      }px;
      ${boxShapeStyle}
      left:5px;
      height:200px;
      width:200px !important;
      ${
        hasSteps
          ? `background: ${resolveColor(alignment_boxColor, JsonData.colors)};`
          : ""
      }
      `
        : `margin-top: ${
            direction ? getFontSize(138, 132, 128) : getFontSize(142, 136, 132)
          }px;`
    }
    position: relative;
    z-index: 10;
    width: max-content;
  }

  ${
    lineRight
      ? `
  .${className}::after {
    content: "";
    position: absolute;
    border-right: 2px solid ${line_color};
    height: 365px;
    right: 0px;
    bottom: 324px;
  }

  .${className}::before {
    content: "";
    position: absolute;
    background-color: ${circle_color};
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
    ${direction ? "display: none;" : "display: flex; "}
    position: absolute;
    z-index: 1;
    top: 208px;
    width: 15px;
    height: 190px;
    background-color: ${mid_line_color};
    border-bottom-left-radius:10px;
  }

  .${className} .mid-top .icon_plus_name {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${
      alignment === "vertical"
        ? `margin-bottom:${getFontSize(30, 32, 35)}px;`
        : ""
    }
  }

  .${className} .mid-top .icon_plus_name .fa-user {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${getFontSize(15, 16, 17)}px;
    background: ${logoGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid ${logo_border};
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  .${className} .mid-top .icon_plus_name p {
    display: inline;
    background: ${logo_background};
    padding: 8px 11px;
    white-space: nowrap;
    font-size:${getFontSize(9, 10, 11)}px;
    border-radius: 23px;
    position: absolute;
    top: 21px;
    color: ${logo_font_color};
  }

  ${
    alignment === "vertical"
      ? `${
          hasSteps
            ? `.${className} .mid-top .icon_plus_name p::after{
      display:block;
      position:absolute;
      content:" ";
      width:${getFontSize(22, 17, 15)}px;
      height:0px;
      border:1px dashed ${resolveColor(boxShapeLineColor, JsonData.colors)};
      top:${has2Steps ? "50" : "56"}%;
      transform:translateY(50%);
      right:-${getFontSize(24, 23, 21)}px;
    } 
    .${className} .mid-top .start-step::after{
      position:absolute;
      content:" ";
      border:1px dashed ${resolveColor(boxShapeLineColor, JsonData.colors)};
      width:20px;
      left:-22px;
      top:50%;
      transform:translateY(50%);
    }
    .${className} .mid-top .start-step::before{
      position:absolute;
      content:" ";
      border-top: 4px solid transparent;
      border-bottom: 4px solid transparent;
      border-left: 5px solid ${resolveColor(
        boxShapeLineColor,
        JsonData.colors
      )};
      width:0px;
      height:0px;
      left:-4px;
      top:50%;
      transform:translateY(-35%);
  }
      ${
        has2Steps
          ? `.${className} .mid-top-on-line::after{
    position:absolute;
    content:" ";
    border:1px dashed ${resolveColor(boxShapeLineColor, JsonData.colors)};
    height:79%;
    left:10px;
    top:50%;
    transform:translateY(-50%);
    width:0;
    }`
          : ""
      }  
      `
            : ""
        }`
      : ""
  }

  .${className} .mid-top .start-step {
    background-color: ${stepBg};
    padding: 7px;
    margin: 0;
    margin-left: 35px;
    white-space: nowrap;       
    text-overflow: ellipsis;
    border-radius: 7px;
    max-width:65px;
    min-width:45px;
    font-size:${getFontSize(9, 10, 11)}px;
    color:${font_color};
    position:relative;
    border-bottom-right-radius: 23px;
  }

  .${className} .mid-top-on-line{
    margin: 0;
    padding: 0;
    ${
      direction && alignment !== "vertical"
        ? "display: none;"
        : "display: flex; "
    }
    align-items: start;
    justify-content: ${
      alignment === "vertical"
        ? `${has2Steps ? "space-between" : "center"}`
        : "space-evenly"
    };
    flex-direction: column;
    height: 135px;
    position:relative;
  }
  `;

    return { html, css };
  };

  /**
   * Generate unique Header + Sub-Headers HTML + scoped CSS
   */
  function generateHeaderHTMLandCSS(component, uniqueClassName, colors) {
    const { title, configurations, sub_groups } = component;
    // === Header Section ===
    const showParentCollapse = configurations?.collapsabile === true;
    const parentIconStyle = showParentCollapse
      ? ""
      : "style='opacity:0; pointer-events:none;'";

    let html = `<div class="Slide-box ${uniqueClassName}">\n`;
    html += `<h1 title="${title}">
    <i class="fa-regular fa-square-caret-right" ${parentIconStyle}></i> 
    ${limitText(title, 10)}
  </h1>\n`;

    html += `<div class="sub-groups">\n`;

    sub_groups.forEach((sg, idx) => {
      const showChildCollapse = sg.configurations?.collapsabile === true;
      const childIconStyle = showChildCollapse
        ? ""
        : "style='opacity:0; pointer-events:none;'";

      html += `<div class="sub-group-div ${uniqueClassName}-sub-group-div${
        idx + 1
      }">\n`;
      html += `<h2 title="${sg.title}">
      <i class="fa-regular fa-square-caret-right" ${childIconStyle}></i> 
      ${limitText(sg.title, 15)}
    </h2>\n`;

      if (direction) {
        // Above-line content
        if (sg.content.above_line_content?.content?.length) {
          html += `<div class="${uniqueClassName}-above-line-content-${
            idx + 1
          } above-line-content">\n`;

          sg.content.above_line_content.content.forEach((txt, i) => {
            if (txt && txt.trim() !== "") {
              const color = sg.content.above_line_content.color?.[i] || "#000";
              const detail =
                (sg.content.above_line_content.content_details?.[i] ?? "") ||
                "";

              html += `<p 
              class="above-line-text above-line-text-${i + 1}" 
              title="${limitText(detail || "", 280)}" 
              style="color:${resolveColor(color, colors)};"
              >${limitText(txt || "", 10)}</p>\n`;
            }
          });

          html += `</div>\n`;
        }
        // On-line content
        html += `<div class="subgroups-on-line">\n`;

        sg.content.on_line_content_configuration.content.forEach((c, i) => {
          const contentId =
            sg.content.on_line_content_configuration.content_id?.[i] || "";

          const link = sg.content.on_line_content_configuration.link?.[i];
          const hasShadow =
            sg.content.on_line_content_configuration.background_shadow?.[i] ??
            true;
          const hasLink = link && link.trim() !== "";
          const contentDetail =
            sg.content.on_line_content_configuration.content_details?.[i] || "";
          const isStriped =
            sg.content.on_line_content_configuration.striping?.[i]?.stripped;
          const contentDetailHTML =
            sg.content.on_line_content_configuration.content_details_HTML?.[
              i
            ] || null;
          if (contentDetailHTML) {
            if (typeof contentDetailHTML.content_HTML === "string") {
              contentDetailHTML.content_HTML = normalizeAppianString(
                contentDetailHTML.content_HTML
              );
            }
            if (typeof contentDetailHTML.content_CSS === "string") {
              contentDetailHTML.content_CSS = normalizeAppianString(
                contentDetailHTML.content_CSS
              );
            }
          }

          // ✅ Detect valid HTML/CSS for popup
          const hasValidHTML =
            contentDetailHTML &&
            typeof contentDetailHTML === "object" &&
            contentDetailHTML.content_HTML &&
            contentDetailHTML.content_HTML.trim() !== "";

          const hasValidCSS =
            contentDetailHTML &&
            typeof contentDetailHTML === "object" &&
            contentDetailHTML.content_CSS &&
            contentDetailHTML.content_CSS.trim() !== "";

          const shouldShowPopup = hasValidHTML;

          html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
            i + 1
          }" id="${contentId}" style="position:relative;">\n`;

          // ✅ Render title h6
          html += `<h6
      title="${shouldShowPopup ? "" : limitText(contentDetail, 280)}"
      class="${hasShadow ? "box-shadow-box" : ""}${hasLink ? " Div-link" : ""}${
            isStriped ? " striped" : ""
          }"
      ${hasLink ? ` onclick="window.open('${link}', '_blank')"` : ""}>
      ${limitText(c, 10)}
  </h6>\n`;

          // ✅ Add hover popup (if HTML valid)
          if (shouldShowPopup) {
            html += `
      <div class="${contentId}-hover-popup" 
           style="display:none; position:absolute; top:0; transform:translate(25%,-70%); left:0; z-index:9999;">
        ${contentDetailHTML.content_HTML}
      </div>
      <style>
        .${contentId}-hover-popup {
          ${hasValidCSS ? contentDetailHTML.content_CSS : ""}
        }
      </style>
      <script>
        (function(){
          try {
            const container = document.querySelector('#${contentId}');
            const h6 = container?.querySelector('h6');
            const popup = container?.querySelector('.${contentId}-hover-popup');
            if (!h6 || !popup) return;

            h6.addEventListener('mouseenter', () => {
              popup.style.display = 'block';
            });
            h6.addEventListener('mouseleave', () => {
              setTimeout(() => {
                if (!popup.matches(':hover')) popup.style.display = 'none';
              }, 100);
            });
            popup.addEventListener('mouseleave', () => {
              popup.style.display = 'none';
            });
          } catch (e) {
            console.error('Hover popup error for ${contentId}:', e);
          }
        })();
      </script>
    `;
          }

          html += `</div>\n`;
        });

        // ✅ Attach hover listeners after DOM insert (backup)
        setTimeout(() => {
          sg.content.on_line_content_configuration.content.forEach((c, i) => {
            const contentId =
              sg.content.on_line_content_configuration.content_id?.[i];
            if (!contentId) return;

            const h6 = document.querySelector(`#${contentId} h6`);
            const popup = document.querySelector(
              `#${contentId} .${contentId}-hover-popup`
            );
            if (h6 && popup) {
              h6.addEventListener("mouseenter", () => {
                popup.style.display = "block";
              });
              h6.addEventListener("mouseleave", () => {
                setTimeout(() => {
                  if (!popup.matches(":hover")) popup.style.display = "none";
                }, 100);
              });
              popup.addEventListener("mouseleave", () => {
                popup.style.display = "none";
              });
            }
          });
        }, 100);

        html += `</div>\n`;
      }

      // Top Icons with logo heading + logo title
      html += `<div class="subgroups-mid-top">\n`;

      sg.content.logo_titles_config.forEach((config, i) => {
        if (
          !config ||
          !config.logo_title ||
          !Array.isArray(config.logo_title) ||
          config.logo_title.length === 0 ||
          config.logo_title.every((t) => !t || t.trim() === "")
        ) {
          return;
        }

        const logoHeading = sg.content.logo_heading[i];
        const headings = config.logo_title;
        const logoId = config.logo_id_name;
        const links = config.links;
        const logoDetails = config.logo_detail;

        html += `<div class="icon_plus_name icon_plus_name_${i + 1}">\n`;

        if (logoHeading) {
          html += `<span class="span-${i + 1}">${limitText(
            logoHeading,
            5
          )}</span>\n`;
        }

        html += `<i class="fa-solid fa-user fa-user-${i + 1}"></i>\n`;

        // 🧩 Wrapper class
        let wrapperClass = "";
        if (headings.length === 1)
          wrapperClass = "icon-plus-name-box icon-plus-name-box-for-one";
        else if (headings.length === 2)
          wrapperClass = "icon-plus-name-box icon-plus-name-box-for-two";
        else if (headings.length === 3)
          wrapperClass = "icon-plus-name-box icon-plus-name-box-for-three";
        else wrapperClass = "icon-plus-name-box icon-plus-name-box-for-four";

        html += `<div ${
          logoId ? `id="${logoId}"` : ""
        } class="${wrapperClass}">\n`;

        // ✅ helper to render <p> safely
        const renderParagraph = (text, detail, link, className) => {
          const hasLink = link && link.trim() !== "";
          const hasText = text && text.trim() !== "";

          // if empty, no styling class
          const classes = hasText
            ? className
            : "icon-plus-name-paragraph-hidden";
          const titleAttr = hasText ? `title="${limitText(detail, 280)}"` : "";

          return `<p ${titleAttr} class="${classes}" ${
            hasLink ? "Div-link" : ""
          } ${hasLink ? `onclick="window.open('${link}', '_blank')"` : ""}>${
            hasText ? text : ""
          }</p>\n`;
        };

        // 🧩 Layout logic
        if (headings.length === 3) {
          html += `<div class="icon-plus-name-box-enclosed">\n`;
          for (let j = 0; j < 2; j++) {
            html += renderParagraph(
              headings[j],
              logoDetails?.[j],
              links?.[j],
              `icon-plus-name-paragraph-${j + 1}`
            );
          }
          html += `</div>\n`;

          html += `<div class="icon-plus-name-box-enclosed">\n`;
          html += renderParagraph(
            headings[2],
            logoDetails?.[2],
            links?.[2],
            `icon-plus-name-paragraph-3`
          );
          html += `</div>\n`;
        } else if (headings.length === 4) {
          for (let group = 0; group < 2; group++) {
            html += `<div class="icon-plus-name-box-enclosed">\n`;
            for (let j = 0; j < 2; j++) {
              const idx = group * 2 + j;
              html += renderParagraph(
                headings[idx],
                logoDetails?.[idx],
                links?.[idx],
                `icon-plus-name-paragraph-${idx + 1}`
              );
            }
            html += `</div>\n`;
          }
        } else {
          // 1 or 2 headings
          headings.forEach((logo, idx) => {
            html += renderParagraph(
              logo,
              logoDetails?.[idx],
              links?.[idx],
              `icon-plus-name-paragraph-${idx + 1}`
            );
          });
        }

        html += `</div>\n`; // close wrapper
        html += `</div>\n`; // close main box
      });

      html += `</div>\n`;

      if (
        alignmentDirection(JSON_Data.Page_Configuration.direction) !== "reverse"
      ) {
        // Above-line content
        if (sg.content.above_line_content?.content?.length) {
          html += `<div class="${uniqueClassName}-above-line-content-${
            idx + 1
          } above-line-content">\n`;

          sg.content.above_line_content.content.forEach((txt, i) => {
            if (txt && txt.trim() !== "") {
              const color = sg.content.above_line_content.color?.[i] || "#000";
              const detail = sg.content.above_line_content.content_details?.[i];

              html += `<p 
        class="above-line-text above-line-text-${i + 1}" 
        title="${limitText(detail, 280)}" 
        style="color:${resolveColor(color, colors)};"
      >${limitText(txt, 10)}</p>\n`;
            }
          });

          html += `</div>\n`;
        }
        // On-line content
        html += `<div class="subgroups-on-line">\n`;

        sg.content.on_line_content_configuration.content.forEach((c, i) => {
          const contentId =
            sg.content.on_line_content_configuration.content_id?.[i] || "";

          const link = sg.content.on_line_content_configuration.link?.[i];
          const hasShadow =
            sg.content.on_line_content_configuration.background_shadow?.[i] ??
            true;
          const hasLink = link && link.trim() !== "";
          const contentDetail =
            sg.content.on_line_content_configuration.content_details?.[i] || "";
          const isStriped =
            sg.content.on_line_content_configuration.striping?.[i]?.stripped;
          const contentDetailHTML =
            sg.content.on_line_content_configuration.content_details_HTML?.[
              i
            ] || null;
          if (contentDetailHTML) {
            if (typeof contentDetailHTML.content_HTML === "string") {
              contentDetailHTML.content_HTML = normalizeAppianString(
                contentDetailHTML.content_HTML
              );
            }
            if (typeof contentDetailHTML.content_CSS === "string") {
              contentDetailHTML.content_CSS = normalizeAppianString(
                contentDetailHTML.content_CSS
              );
            }
          }

          // ✅ Detect invalid / empty HTML or CSS objects
          const hasValidHTML =
            contentDetailHTML &&
            typeof contentDetailHTML === "object" &&
            contentDetailHTML.content_HTML &&
            contentDetailHTML.content_HTML.trim() !== "";

          const hasValidCSS =
            contentDetailHTML &&
            typeof contentDetailHTML === "object" &&
            contentDetailHTML.content_CSS &&
            contentDetailHTML.content_CSS.trim() !== "";

          const shouldShowPopup = hasValidHTML;

          html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
            i + 1
          }" id="${contentId}" style="position:relative;">\n`;

          // ✅ Always render h6 — if popup invalid, title appears
          html += `<h6
      title="${shouldShowPopup ? "" : limitText(contentDetail, 280)}"
      class="${hasShadow ? "box-shadow-box" : ""} ${
            hasLink ? "Div-link" : ""
          } ${isStriped ? "striped" : ""}"
      style="position:relative; cursor:pointer; z-index:1;"
      ${hasLink ? `onclick="window.open('${link}', '_blank')"` : ""}>
      ${limitText(c, 10)}
  </h6>\n`;

          if (shouldShowPopup) {
            html += `
      <div class="${contentId}-hover-popup" 
           style="display:none; position:absolute; top:0; transform:translate(25%,5%); left:0; z-index:2;">
        ${contentDetailHTML.content_HTML}
      </div>
      <style>
        .${contentId}-hover-popup {
          ${hasValidCSS ? contentDetailHTML.content_CSS : ""}
        }
      </style>
      <script>
        (function(){
          try {
            const container = document.querySelector('#${contentId}');
            const h6 = container.querySelector('h6');
            const popup = container.querySelector('.${contentId}-hover-popup');
            if (!h6 || !popup) {
              console.warn(' Missing h6 or popup for', '${contentId}');
              return;
            }

            h6.addEventListener('mouseenter', () => {
              popup.style.display = 'block';
            });
            h6.addEventListener('mouseleave', () => {
              setTimeout(() => {
                if (!popup.matches(':hover')) popup.style.display = 'none';
              }, 100);
            });
            popup.addEventListener('mouseleave', () => {
              popup.style.display = 'none';
            });

          } catch (e) {
            console.error('Hover popup error for ${contentId}:', e);
          }
        })();
      </script>
    `;
          }

          html += `</div>\n`;
        });

        // --- After HTML is added to DOM, add hover functionality ---
        setTimeout(() => {
          sg.content.on_line_content_configuration.content.forEach((c, i) => {
            const contentId =
              sg.content.on_line_content_configuration.content_id?.[i];
            if (!contentId) return;

            const h6 = document.querySelector(`#${contentId} h6`);
            const popup = document.querySelector(
              `#${contentId} .${contentId}-hover-popup`
            );
            if (h6 && popup) {
              h6.addEventListener("mouseenter", () => {
                popup.style.display = "block";
              });
              h6.addEventListener("mouseleave", () => {
                setTimeout(() => {
                  if (!popup.matches(":hover")) popup.style.display = "none";
                }, 100);
              });
              popup.addEventListener("mouseleave", () => {
                popup.style.display = "none";
              });
            }
          });
        }, 100);

        html += `</div>\n`;
      }

      html += `</div>\n`; // End sub-group-div
    });

    html += `</div>\n</div>\n`; // End sub-groups and Slide-box

    // === CSS ===
    let css = `

  .${uniqueClassName} .icon-plus-name-box-for-one{
    height:26px;
    justify-content: center;
    top: 27px;
  }
  .${uniqueClassName} .icon-plus-name-box-enclosed{
    width:100%;
    height:49%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .${uniqueClassName} .icon-plus-name-box-for-two{
    height:26px;
    justify-content: space-evenly;
    top: 27px;
  }
  .${uniqueClassName}  .icon-plus-name-box-for-three{
    height:52px;
    flex-direction:column;
    justify-content: space-between;
    top: 27px;
  }
  .${uniqueClassName}  .icon-plus-name-box-for-four{
    height:52px;
    flex-direction:column;
    justify-content: space-between;
    top: 27px;
  }
  .${uniqueClassName} .icon-plus-name-paragraph-hidden{
    display:none;
  }
  .${uniqueClassName} .icon-plus-name-box{
    width:100px;
    position: absolute;
    display:flex;
    align-items: center;
    z-index:0;
  }


  .${uniqueClassName} {
    width: max-content;
    height: 100%;
    position:relative;
    margin:0 10px;
  }
  .${uniqueClassName} h1 {
    color: ${resolveColor(configurations?.title_color, colors) || "#515151"};
    font-size:${getFontSize(12, 13, 14)}px;
    margin-top: 10px;
    margin-bottom: 20px;
    position:relative;
    z-index:10;
  }
  .${uniqueClassName} h1 .fa-square-caret-right,
  .${uniqueClassName} h1 .fa-square-caret-down{
    margin-right:5px;
    cursor:pointer;
    transition:0.2s all;
    &:hover{
      color:#000000;
      transform:scale(1.1);
    }
    &:active{
      transform:scale(0.9);
    }
  }
  .${uniqueClassName} h2 .fa-square-caret-right,
  .${uniqueClassName} h2 .fa-square-caret-down
  {
    margin-right:5px;
    cursor:pointer;
    transition:0.2s all;
    &:hover{
      color:#000000;
      transform:scale(1.1);
    }
    &:active{
      transform:scale(0.9);
    }
  }
    
  .${uniqueClassName} h2 {
    font-size:${getFontSize(10, 11, 12)}px;
    color: ${
      resolveColor(
        configurations?.sub_title_color || configurations?.title_color,
        colors
      ) || "#515151"
    };
    margin-bottom: 10px;
    padding-bottom: 3px;
    position:relative;
    z-index:2;
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
    ${
      direction
        ? `margin-bottom: ${getFontSize(122, 110, 108)}px;`
        : `margin-bottom: ${getFontSize(115, 110, 108)}px;`
    }
  }
  .${uniqueClassName} .subgroups-mid-top {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .Div-link:hover{
    cursor:pointer;
    box-shadow:0 0 10px #0000006b;
  }
  .Div-link:active{
    transform:scale(0.9);
  }
  .${uniqueClassName} .icon_plus_name {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    ${direction ? "margin-top:150px;" : ""}
    width: 100px;
    z-index:2;
  }
  .${uniqueClassName} .icon_plus_name span {
    position: absolute;
    top: -${getFontSize(12, 13, 14)}px;
    font-size:${getFontSize(10, 11, 12)}px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .${uniqueClassName} .icon_plus_name .fa-user{
    font-size:${getFontSize(15, 16, 17)}px;
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
    padding: 8px ${getFontSize(6, 8, 12)}px;
    border-radius: 23px;
    white-space: nowrap;
    font-size: ${getFontSize(9, 10, 11)}px;
    width: auto;
    max-width: 49%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    vertical-align: middle;
    transition: 0.1s all;
    position:relative;
    z-index:3;
  }

  .${uniqueClassName} .above-line-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 117px;
    position: relative;
  }
  .${uniqueClassName} .above-line-content p {
    font-size:${getFontSize(10, 11, 12)}px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .${uniqueClassName} .subgroups-on-line {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: relative;
    z-index: 3;
  }
  .${uniqueClassName} .subgroups-on-line-content{
    position: relative;
  }
  .${uniqueClassName} .subgroups-on-line-content h6{
    margin: 0;
    font-size:${getFontSize(9, 10, 11)}px;
    padding: 10px;
    width:${getFontSize(77, 77, 77)}px;
    text-align:center;
    position: relative;
    transition:0.1s all;
  }
  /* === Right Line example === */
  ${
    configurations.line_right
      ? `
  .${uniqueClassName}::after {
    content: "";
    position: absolute;
    border-right: 2px solid ${
      resolveColor(configurations?.line_color, colors) || "#adafaf"
    };
    height: 367px;
    right: -8px;
    bottom: 325px;
  }
  .${uniqueClassName}::before {
    content: "";
    position: absolute;
    background-color: ${
      resolveColor(configurations?.line_color, colors) || "#adafaf"
    };
    width: 5px;
    height: 5px;
    border-radius: 50%;
    right: -9.5px;
    top: 18px;
  } `
      : ""
  }
  `;

    sub_groups.forEach((sg, subGroupIdx) => {
      const hasAboveLineInner = sg.content.above_line_content?.content?.some(
        (c) => c && c.trim() !== ""
      );

      const inlineContentArray =
        sg.content.on_line_content_configuration.bottom_Line_postion || [];
      const bottomPointArray =
        sg.content.on_line_content_configuration.bottom_point_position_onLine ||
        [];
      const bottomPointColorArray =
        sg.content.on_line_content_configuration?.bottom_point_color || [];
      const onLineContentCount = [];
      sg.content.logo_titles_config.forEach((ele, i) => {
        onLineContentCount.push(ele.logo_title.length);
      });

      inlineContentArray.forEach((level, inlineIdx) => {
        let ReverseRow = 1;
        const ReverseRowContent = Number(onLineContentCount?.[inlineIdx]) || 0;

        if (direction && ReverseRowContent === 2) {
          ReverseRow = 2;
        } else if (direction && ReverseRowContent === 3) {
          ReverseRow = 3;
        }

        const revAfterTop =
          ReverseRow === 2 ? "221px" : ReverseRow === 3 ? "259px" : "235px";
        const normAfterTop = "30px";

        // Define top and height values for each level (reverse + normal)
        const levelConfig = {
          Level_1: {
            revHeight: ReverseRow === 2 ? 196 : ReverseRow === 3 ? 160 : 182,
            normHeight: [210, 212, 210],
          },
          Level_2: {
            revHeight: ReverseRow === 2 ? 218 : ReverseRow === 3 ? 180 : 202,
            normHeight: [233, 233, 233],
          },
          Level_3: {
            revHeight: ReverseRow === 2 ? 236 : ReverseRow === 3 ? 200 : 222,
            normHeight: [250, 252, 252],
          },
          Level_4: {
            revHeight: ReverseRow === 2 ? 256 : ReverseRow === 3 ? 220 : 242,
            normHeight: [270, 273, 272],
          },
          Level_5: {
            revHeight: ReverseRow === 2 ? 276 : ReverseRow === 3 ? 240 : 262,
            normHeight: [290, 293, 295],
          },
        };

        // Bottom-point overrides
        const bottomOverrides = {
          Level_1: { top: 30, height: 388 },
          Level_2: { top: 30, height: 408 },
          Level_3: { top: 30, height: 428 },
          Level_4: { top: 30, height: 450 },
          Level_5: { top: 30, height: 468 },
        };

        // Get current level config or fallback
        const config = levelConfig[level] || levelConfig.Level_1;

        // Choose base values based on direction

        let afterTop = direction ? revAfterTop : normAfterTop;
        let afterHeight = `${
          direction ? config.revHeight : getFontSize(...config.normHeight)
        }px`;

        // Apply bottom-point overrides (if needed)
        if (direction && bottomPointArray?.[inlineIdx]) {
          const override = bottomOverrides[level];
          if (override) {
            afterTop = `${override.top}px`;
            afterHeight = `${override.height}px`;
          }
        }

        css += `
.${uniqueClassName}-sub-group-div${subGroupIdx + 1} 
.${uniqueClassName}-on-line-content${inlineIdx + 1}{
  margin-top: ${
    hasAboveLineInner
      ? "4px"
      : `${direction ? getFontSize(15, 23, 26) : "132"}px`
  };
}

.${uniqueClassName}-sub-group-div${subGroupIdx + 1} 
.${uniqueClassName}-on-line-content${inlineIdx + 1}::after {
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
}
`;

        // compute color
        const bottomPointColor =
          resolveColor(bottomPointColorArray?.[inlineIdx], colors) ||
          "linear-gradient(to right top, #207cb2 1%, #41cbc8)";

        // whether this particular inline content wants the dot on-line (true) or on the icon (false)
        const showBottomPoint = bottomPointArray?.[inlineIdx] === true;

        let bottomPointPosition = 15;
        if (onLineContentCount[inlineIdx] == 2) {
          bottomPointPosition = 28;
        } else if (onLineContentCount[inlineIdx] == 3) {
          bottomPointPosition = -11;
        } else if (onLineContentCount[inlineIdx] == 4) {
          bottomPointPosition = 15;
        } else {
          bottomPointPosition = 15;
        }

        if (direction && showBottomPoint) {
          css += `


.${uniqueClassName}-sub-group-div${subGroupIdx + 1} 
  .${uniqueClassName}-on-line-content${inlineIdx + 1} h6::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${bottomPointColor};
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}
`;
        } else if (direction) {
          css += `
.${uniqueClassName}-sub-group-div${subGroupIdx + 1} 
  .icon_plus_name:nth-of-type(${inlineIdx + 1}) .fa-user::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${bottomPointColor};
  bottom: ${bottomPointPosition}px;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 4;
}
`;
        } else {
          css += `
      .${uniqueClassName}-sub-group-div${subGroupIdx + 1} 
  .${uniqueClassName}-on-line-content${inlineIdx + 1} h6::after {
        content: "";
        position: absolute;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: ${bottomPointColor};
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 50%);
        z-index: 4;
      }
    `;
        }
      });
    });

    sub_groups.forEach((sg, idx) => {
      const logoLength = sg.content?.logo_titles_config?.length || 0;
      const hasAboveLine = sg.content.above_line_content?.content?.some(
        (c) => c && c.trim() !== ""
      );
      const dynamicWidth = logoLength * getFontSize(115, 125, 135);
      css += `
.${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .icon_plus_name::after {
      height: ${(() => {
        return `${
          hasAboveLine
            ? direction
              ? 144
              : 120
            : direction
            ? 144
            : getFontSize(140, 132, 132)
        }px`;
      })()};
}
.${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .icon_plus_name::before {
      top: ${
        hasAboveLine
          ? `${direction ? "-150" : "175"}px`
          : `${direction ? "-150" : "190"}px`
      };
}
`;

      css += `
.${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} {
  margin: 0px;
  padding: 0 ${getFontSize(10, 12, 14)}px;
}
.${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} h2 {
  color: ${
    resolveColor(sg.configurations?.title_color, colors) || "rgb(81, 81, 81)"
  };
  font-size:${getFontSize(10, 11, 12)}px;
}
.${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .subgroups-mid-top {
  width: ${dynamicWidth}px;
}
`;
      if (sg.content.line_right === "true" || sg.content.line_right === true) {
        css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}::after {
    position: absolute;
    content: "";
    border-left: 1px solid ${
      resolveColor(sg.content.line_color, colors) || "#c4c9ca"
    };
    height: 330px;
    right: -1px;
    top: 10px;
  }
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1}::before {
    position: absolute;
    content: "";
    height: 5px;
    background-color: ${
      resolveColor(sg.content.line_color, colors) || "#c4c9ca"
    };
    border-radius: 50%;
    width: 5px;
    right: -3px;
    top: 5px;
  }`;
      }

      const onLine = sg.content.on_line_content_configuration;

      (onLine?.content_id || []).forEach((id, index) => {
        const stripeConfig = onLine.striping?.[index];
        const bgColor =
          resolveColor(onLine.background_color?.[index], colors) || "#e6fffc";
        const fontColor = resolveColor(onLine.color?.[index], colors) || "#000";
        const bottomPoint =
          resolveColor(onLine.bottom_point_color?.[index], colors) ||
          "linear-gradient(to right top, #207cb2 1%, #41cbc8)";
        const bottomLine =
          resolveColor(onLine.bottom_line_color?.[index], colors) ||
          "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)";

        const shapeMap = {
          rectangle: "border-radius: 0 0 0 0;",
          default: "border-radius: 5px 5px 18px 5px;",
          rounded_sm: "border-radius: 5px;",
          rounded_lg: "border-radius: 15px;",
          rounded_bottom_left: "border-radius: 0 0 0 18px;",
          rounded_bottom_right: "border-radius: 0 0 18px 0;",
          rounded_top_left: "border-radius: 18px 0 0 0;",
          rounded_top_right: "border-radius: 0 18px 0 0;",
          rounded_top: "border-radius: 18px 18px 0 0;",
          rounded_bottom: "border-radius: 0 0 18px 18px;",
          rounded_left: "border-radius: 18px 0 0 18px;",
          rounded_right: "border-radius: 0 18px 18px 0;",
          rounded_vertices: "border-radius: 18px 0px 18px 0;",
          rounded_reverse_vertices: "border-radius: 0 18px 0 18px;",
        };

        const rawShape = onLine.shapes?.[index] || "default";
        const shapeStyle =
          shapeMap[rawShape.toLowerCase()] || shapeMap["default"];

        const borderConfig = onLine.bordered?.[index] || {};
        const borderEnabled = borderConfig.border ?? false;
        const borderColor = resolveColor(borderConfig.color, colors) || "black";
        const borderStyle = borderEnabled
          ? `border: 1px solid ${borderColor};`
          : "border: none;";

        css += `
    .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} #${id} {
        background: ${bgColor};
        color: ${fontColor};
        
        ${shapeStyle}
    }

    .${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} #${id} h6 {
        ${shapeStyle}
        ${borderStyle}
    }
    .${uniqueClassName} .${uniqueClassName}-sub-group-div${
          idx + 1
        } #${id} h6::after {
        background: ${bottomPoint};
    }

  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
          idx + 1
        } #${id}.subgroups-on-line-content::after {
    background: ${bottomLine};
  }
  `;
        if (stripeConfig?.stripped) {
          let degree = 0;
          const [c1, c2, c3, c4] = stripeConfig.colors || [
            "rgba(255,255,255,0.5)",
            "rgba(255,255,255,0.5)",
            "rgba(0,191,255,0.15)",
            "rgba(0,191,255,0.15)",
          ];
          if (stripeConfig?.reversed) {
            degree = 45;
          } else {
            degree = -45;
          }

          css += `
  .${uniqueClassName} .${uniqueClassName}-sub-group-div${
            idx + 1
          } #${id} .striped {
    background: repeating-linear-gradient(
        ${degree}deg,
      ${c1},
      ${c2} 4px,
      ${c3} 4px,
      ${c4} 8px
    );
  }
  `;
        }
      });
    });

    sub_groups.forEach((sg, idx) => {
      const justify =
        sg.content.above_line_content?.justify_content?.toLowerCase();

      // default fallback handling
      const validValues = ["evenly", "between"];
      const finalJustify = validValues.includes(justify) ? justify : "evenly";

      // convert to actual CSS value
      const justifyMap = {
        evenly: "space-evenly",
        between: "space-between",
      };

      css += `
  .${uniqueClassName} .${uniqueClassName}-above-line-content-${idx + 1} {
    display: flex;
    justify-content: ${justifyMap[finalJustify]};
    align-items: center;
  }
  `;
    });

    // Handling Colors Dynamically
    sub_groups.forEach((sg, subGroupIdx) => {
      const styleConfigs = [
        {
          array: sg.content.logo_heading_color || [],
          classPrefix: "span-",
          selector: ".icon_plus_name",
          styles: (color) => {
            const resolved =
              resolveColor(color, colors) ||
              "linear-gradient(to right top, #a334c8 20%, #f65467)";
            return `
        background: ${resolved};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `;
          },
        },
        {
          array: sg.content.logo_heading_border_color || [],
          classPrefix: "fa-user-",
          selector: ".icon_plus_name",
          styles: (color, idx) => {
            const resolvedBorder = resolveColor(color, colors) || "#a334c8";
            const resolvedBg =
              resolveColor((sg.content.logo_color || [])[idx], colors) ||
              "linear-gradient(to right top, #a334c8 20%, #f65467)";
            return `
        border: 2px solid ${resolvedBorder};
        background: ${resolvedBg};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      `;
          },
        },
        {
          array: sg.content.logo_title_color || [],
          classPrefix: "icon-plus-name-paragraph-",
          selector: ".icon_plus_name",
          styles: (color) => {
            const resolved =
              resolveColor(color, colors) ||
              "linear-gradient(to right top, #a334c8 20%, #f65467)";
            return `background: ${resolved};`;
          },
        },
      ];

      // 🎨 Existing color config handling
      styleConfigs.forEach(({ array, classPrefix, selector, styles }) => {
        array.forEach((color, inlineIdx) => {
          css += `.${uniqueClassName} .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } ${selector} .${classPrefix}${inlineIdx + 1} {${styles(
            color,
            inlineIdx
          )}
}\n`;
        });
      });

      // 🆕 New handling for nested logo_titles_config colors
      (sg.content.logo_titles_config || []).forEach((config, logoIdx) => {
        if (!config || !Array.isArray(config.logo_title)) return;

        const bgColors = config.logo_title_background_color || [];
        const textColors = config.logo_title_color || [];
        const bgBorder = config.logo_title_border || [];
        const bgBorderColor = config.logo_title_border_color || [];

        bgColors.forEach((bgColor, titleIdx) => {
          const resolvedBg =
            resolveColor(bgColor, colors) ||
            "linear-gradient(to right top, #a334c8 20%, #f65467)";
          const resolvedText =
            resolveColor(textColors[titleIdx], colors) || "white";

          const resolvedBorderColor =
            resolveColor(bgBorderColor[titleIdx], colors) || "black";

          css += `.${uniqueClassName} .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } .icon_plus_name_${logoIdx + 1} .icon-plus-name-paragraph-${
            titleIdx + 1
          } {
        background: ${resolvedBg};
        color: ${resolvedText};
        -webkit-text-fill-color: ${resolvedText};
        min-width:30px;
        ${bgBorder[titleIdx] ? `border:1px solid ${resolvedBorderColor}` : ""}
      }\n`;
        });
      });

      // Keep your existing top_down_arrow logic intact
      sub_groups.forEach((sg, subGroupIdx) => {
        const aboveLineContent = sg.content?.above_line_content || null;
        const hasAboveLine = !!(
          aboveLineContent &&
          aboveLineContent.content &&
          aboveLineContent.content.length
        );
        const logoTitleCount = [];
        sg.content.logo_titles_config.forEach((ele) => {
          logoTitleCount.push(ele.logo_title.length);
        });

        sg.content.logo_titles_config.forEach((config, i) => {
          const arrowCfg = config.top_down_arrow || {};
          if (!arrowCfg.display) return;

          const lineColor =
            resolveColor(arrowCfg.line_color, colors) ||
            "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)";
          const arrowColor =
            resolveColor(arrowCfg.arrow_color, colors) || "#a334c8";

          const lineHeight = hasAboveLine ? 138 : direction ? 138 : 152;
          const arrowTop = hasAboveLine
            ? getFontSize(148, 148, 148)
            : getFontSize(162, 162, 162);

          let linePosition = 53;
          if (logoTitleCount[i] == 2 || logoTitleCount[i] == 1) {
            linePosition = 53;
          } else if (logoTitleCount[i] == 3 || logoTitleCount[i] == 4) {
            linePosition = 78;
          }

          let arrowPosition = 190;
          if (logoTitleCount[i] == 2 || logoTitleCount[i] == 1) {
            arrowPosition = 190;
          } else if (logoTitleCount[i] == 3 || logoTitleCount[i] == 4) {
            arrowPosition = 214;
          }

          css += `
.${uniqueClassName} .${uniqueClassName}-sub-group-div${subGroupIdx + 1}
  .icon_plus_name_${i + 1} .icon-plus-name-box::after {
      content: "";
      position: absolute;
      width: 1px;
      left: 50%;
      ${
        direction
          ? `bottom: ${linePosition}px;`
          : `top: ${getFontSize(11, 11, 11)}px;`
      }
      height: ${lineHeight}px;
      padding: 0;
      margin: 0;
      z-index: -1 !important;
      transform: translateX(-50%);
      background: ${lineColor};
  }

.${uniqueClassName} .${uniqueClassName}-sub-group-div${subGroupIdx + 1}
  .icon_plus_name_${i + 1} .icon-plus-name-box::before {
      content: "";
      position: absolute;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      left: 50%;
      ${direction ? `bottom:${arrowPosition}px;` : `top: ${arrowTop}px;`}
      z-index: -1 !important;
      transform: translateX(-50%);
      border-${direction ? "bottom" : "top"}: 7px solid ${arrowColor};
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
        return generateHeaderHTMLandCSS(component, className, JsonData.colors);
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
  overflow:hidden;
}
.PPT-Box {
  border: 1px solid ${JSON_Data.Page_Configuration.border_color || "#000000"};
  width:1520px;
  height:710px;
  background: ${JSON_Data.Page_Configuration.background_color || "#f6fcfc"};
  position: relative;
  display: flex;
  overflow-x:${
    JSON_Data.Page_Configuration.scroll_horizontal ? "scroll" : "hidden"
  };
  overflow-y:hidden;
  align-items: center;
  justify-content: start;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.mid-Line {
  position: absolute;
  top: ${direction ? 30 : 55}%;
  left: 55px;
  transform: translateY(-50%);
  height: 15px;
  box-shadow: ${
    JSON_Data.mid_line_config.shadow ||
    "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb"
  };
  background-color: ${JSON_Data.mid_line_config.color || "#58e3d2"};
  z-index: 3;
  border-bottom-left-radius:10px;
}
.box-shadow-box {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.218);
}
.footer-dark-five-lines {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: end; 
}
.footer-dark-five-lines div {
  background: ${
    JSON_Data.footer.footer_lines_color ||
    "linear-gradient(to bottom, #f5fbfb, #eaf0f0)"
  };
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
  font-size:${getFontSize(9, 10, 11)}px;
  text-align: right;
  color: #333;
  position:absolute;
}
`;

let dynamicFooterCSS = "";

// Add widths for each footer div
Object.keys(JSON_Data.footer.label_width).forEach((key, idx) => {
  let widthValue = parseFloat(JSON_Data.footer.label_width[key]);
  if (isNaN(widthValue)) widthValue = 70;
  widthValue = Math.max(0, Math.min(200, widthValue));
  dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${
    idx + 1
  }) { width: ${widthValue}%; }\n`;
});

// Add left positions for each h4
Object.keys(JSON_Data.footer.footer_label_position_left).forEach((key, idx) => {
  const levelString = JSON_Data.footer.footer_label_position_left[key];
  const leftValue = levelToPixel(levelString);
  dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${
    idx + 1
  }) h4 { left: ${leftValue}; }\n`;
});

let footerHTML = "";
const labels = JSON_Data.footer.footer_label;
Object.keys(labels).forEach((key, idx) => {
  footerHTML += `<div><h4 class="footer-label-${idx + 1}">${limitText(
    labels[key],
    30
  )}</h4></div>\n`;
});

let userScale = parseFloat(JSON_Data.scaling);
if (isNaN(userScale)) {
  userScale = 1;
} else if (userScale > 1) {
  userScale = 1;
} else if (userScale < 0) {
  userScale = 0;
}
const PreDefined_CSS_WithScale = PreDefined_CSS;
const Final_CSS = PreDefined_CSS_WithScale + result.CSS + dynamicFooterCSS;

const Final_HTML = PreDefined_HTML.replace(
  "<!-- Footer Divs Will Be Added Here -->",
  footerHTML
).replace("<!-- Add Here -->", result.HTML);

document.body.innerHTML = Final_HTML;

const styleTag = document.createElement("style");
styleTag.textContent = Final_CSS;
document.head.appendChild(styleTag);

function applyFontConfig(JSON_Data) {
  const { fontConfig } = JSON_Data || {};
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox || !fontConfig) return;

  try {
    //  Handle CDN font loading
    if (fontConfig.fontFamilyCDN) {
      const cdnHTML = fontConfig.fontFamilyCDN.trim();

      // Case 1: Full <link> tag string (escaped or raw)
      if (cdnHTML.startsWith("<")) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(cdnHTML, "text/html");

        doc.querySelectorAll("link").forEach((link) => {
          const href = link.getAttribute("href");
          if (href && !document.querySelector(`link[href="${href}"]`)) {
            const newLink = document.createElement("link");
            newLink.rel = link.rel || "stylesheet";
            newLink.href = href;
            document.head.appendChild(newLink);
          }
        });
      }

      // Case 2: Plain Google Fonts URL string
      else if (cdnHTML.startsWith("http")) {
        if (!document.querySelector(`link[href="${cdnHTML}"]`)) {
          const link = document.createElement("link");
          link.rel = "stylesheet";
          link.href = cdnHTML;
          document.head.appendChild(link);
        }
      }
    }

    //  Apply font-family only to PPT-Box
    if (fontConfig.fontFamily) {
      // Normalize to array (Appian may pass single or multiple)
      const fontFamilies = Array.isArray(fontConfig.fontFamily)
        ? fontConfig.fontFamily
        : [fontConfig.fontFamily];

      // Quote fonts with spaces and join into CSS string
      const familyString = fontFamilies
        .map((f) => (f.includes(" ") ? `"${f}"` : f))
        .join(", ");

      // Remove any prior style tag
      const existing = document.querySelector(
        "style[data-font-family='ppt-font']"
      );
      if (existing) existing.remove();

      // Create a new style tag scoped to PPT-Box
      const styleTag = document.createElement("style");
      styleTag.setAttribute("data-font-family", "ppt-font");
      styleTag.textContent = `
#PPT-Box,
#PPT-Box *:not(.fa):not(.fas):not(.far):not(.fab):not(.fa-solid):not(.fa-regular):not(.fa-brands) {
  font-family: ${familyString};
  font-weight: 400;
  line-height: 1;
}
      `;
      document.head.appendChild(styleTag);
    }
  } catch (err) {
    console.error("Error applying font configuration:", err);
  }
}

applyFontConfig(JSON_Data);

//  Adjust Mid-Line Width Dynamically
function adjustMidLineWidth(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  const midLine = pptBox?.querySelector(".mid-Line");
  if (!pptBox || !midLine) return;

  // 🧩 Find all logo title containers by id prefix
  const allChildren = pptBox.querySelectorAll("*[id^='logo_title_id']");
  const pptRect = pptBox.getBoundingClientRect();

  let maxRight = 0;
  let lastVisibleId = null;

  // 🔍 Step 1: Track farthest visible logo_title_id element within PPT box
  allChildren.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible =
      rect.right > pptRect.left && rect.left < pptRect.right && rect.width > 0;
    if (isVisible) {
      const relativeRight = rect.right - pptRect.left;
      if (relativeRight > maxRight) {
        maxRight = relativeRight;
        lastVisibleId = el.id;
      }
    }
  });

  // 🧩 Step 2: Find last valid logo_titles_config entry with a real logo_title
  let lastParentConfig = null;
  try {
    const configs =
      JSON_Data.body?.[JSON_Data.body.length - 1]?.sub_groups?.[
        JSON_Data.body?.[JSON_Data.body.length - 1]?.sub_groups?.length - 1
      ]?.content?.logo_titles_config || [];

    // Get last config that actually has logo_title array with non-empty entries
    lastParentConfig = configs
      .slice()
      .reverse()
      .find(
        (cfg) =>
          cfg &&
          Array.isArray(cfg.logo_title) &&
          cfg.logo_title.some((t) => t && t.trim() !== "")
      );
  } catch (err) {
    console.warn("Could not extract lastParentConfig:", err);
  }

  let logoCount = 0;
  let lastParentId = null;

  const lastSubGroup = JSON_Data.body?.at(-1)?.sub_groups?.at(-1);
  const configs = lastSubGroup?.content?.logo_titles_config || [];

  const validTitles = configs.flatMap((cfg) =>
    (cfg.logo_title || []).filter((t) => t && t.trim() !== "")
  );
  logoCount = validTitles.length;

  // last id from last config
  const lastConfigWithId = configs.filter((c) => c.logo_id_name).at(-1);
  lastParentId = lastConfigWithId?.logo_id_name || null;

  // ⚙️ Step 4: Decide base offset based on logo count
  let offset = getFontSize(24, 23, 24);
  if (logoCount === 1) offset = getFontSize(52, 46, 53);
  else if (logoCount === 2) offset = getFontSize(24, 29, 32);
  else if (logoCount >= 3) offset = getFontSize(16, 24, 26);

  // 🧮 Step 5: Add extra if last logo_title_id not visible
  if (lastParentId && lastVisibleId !== lastParentId) {
    offset += getFontSize(35, 40, 45);
  }

  // ⚡ Step 6: Calculate and apply width
  const midLineWidthSetting = (
    JSON_Data.mid_line_config?.width || "auto"
  ).toLowerCase();

  if (midLineWidthSetting === "default") {
    midLine.style.width = `100%`;
  } else {
    const dynamicWidth = maxRight ? maxRight - 55 + offset : 0;
    midLine.style.width = `${dynamicWidth}px`;
  }
}

adjustMidLineWidth(JSON_Data);

// Adjust Footer Width Dynamically
function adjustFooterWidth(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  const footer = pptBox?.querySelector(".footer-dark-five-lines");
  if (!pptBox || !footer) return;

  const allChildren = pptBox.querySelectorAll("*[id^='logo_title_id']");
  const pptRect = pptBox.getBoundingClientRect();

  let maxRight = 0;
  let lastVisibleId = null;

  // 1️⃣ Find farthest visible element
  allChildren.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.right > pptRect.left && rect.left < pptRect.right;

    if (isVisible) {
      const relativeRight = rect.right - pptRect.left;
      if (relativeRight > maxRight) {
        maxRight = relativeRight;
        lastVisibleId = el.id;
      }
    }
  });

  // 2️⃣ Extract logo IDs from the last subgroup’s logo_titles_config
  let logoCount = 0;
  let lastParentId = null;

  try {
    const lastBody = JSON_Data.body?.[JSON_Data.body.length - 1];
    const lastSubGroup = lastBody?.sub_groups?.[lastBody.sub_groups.length - 1];

    const configs = lastSubGroup?.content?.logo_titles_config || [];
    const logoIds = configs
      .map((cfg) => cfg.logo_id_name)
      .filter((id) => id && id.trim() !== "");

    logoCount = logoIds.length;
    lastParentId = logoIds[logoIds.length - 1] || null;
  } catch (err) {
    console.warn("Could not determine logo count from JSON_Data:", err);
  }

  // 3️⃣ Base padding adjustment by logo count
  let padding_border_width_add = getFontSize(20, 23, 26); // default
  if (logoCount === 1) padding_border_width_add = getFontSize(40, 43, 46);
  else if (logoCount === 2) padding_border_width_add = getFontSize(24, 26, 28);

  // 4️⃣ Add extra offset if last ID not visible
  if (lastParentId && lastVisibleId !== lastParentId) {
    padding_border_width_add += 48;
  }

  // 5️⃣ Apply footer width logic
  const footerWidthSetting = (
    JSON_Data.footer?.footer_width || "auto"
  ).toLowerCase();

  if (footerWidthSetting === "default") {
    footer.style.width = "100%";
  } else {
    const dynamicWidth = maxRight + padding_border_width_add;
    footer.style.width = `${dynamicWidth}px`;
  }
}

adjustFooterWidth(JSON_Data);

function drawConnectingLines(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("PPT-Box not found.");
    return;
  }

  // Clear previously drawn connecting lines
  pptBox
    .querySelectorAll("[class^='connecting-line-sec']")
    .forEach((el) => el.remove());
  document.querySelectorAll("style").forEach((styleEl) => {
    if (styleEl.textContent.includes("connecting-line-sec")) styleEl.remove();
  });

  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, idx) => {
      // Skip if parent group is collapsed
      const parentItem = collapsibleData.find(
        (p) => p.parent_class === section.unique_class
      );

      const hasAboveLine = sg.content?.above_line_content?.content?.some(
        (c) => c && c.trim() !== ""
      );
      if (parentItem && parentItem.collapsed) return;

      if (
        sg.content &&
        sg.content.connecting_Line &&
        (sg.content.connecting_Line.display === "true" ||
          sg.content.connecting_Line.display === true)
      ) {
        sg.content.connecting_Line.connections.forEach((connection, i) => {
          // Look up endpoints
          const startEl = document.getElementById(connection.starting);
          const endEl = document.getElementById(connection.ending);

          // Require BOTH elements present AND visible
          if (!startEl || !endEl || !isVisible(startEl) || !isVisible(endEl)) {
            console.warn(
              "Skipping connection: missing or hidden element",
              connection
            );
            return; // skip drawing this line
          }

          // --- Position + style calculations ---
          const levelStr = connection.height || "Level_1";
          const levelNum = parseInt(levelStr.split("_")[1]) || 1;

          const baseHeight = 30;
          const baseTopH = 130;
          const baseBottomH = 165;
          const increment = 5;

          let rawHeight = baseHeight + (levelNum - 1) * increment;
          let rawTopH = baseTopH - (levelNum - 1) * increment;

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
          const top = startRect.top - pptRect.top + (hasAboveLine ? -11 : 0);

          const lineClass = `connecting-line-sec${sectionIdx}-sub${idx}-line${i}`;
          const dynamicStyle = `
              .${lineClass} {
                position: absolute;
                z-index: 2;
                left: ${left}px;
                width: ${width}px;
                height: ${height}px;
                border-top: 1px solid ${
                  resolveColor(
                    sg.content.connecting_Line.line_color[i],
                    JSON_Data.colors
                  ) || "#9f30cb"
                };
                border-right: 1px solid ${
                  resolveColor(
                    sg.content.connecting_Line.line_color[i],
                    JSON_Data.colors
                  ) || "#9f30cb"
                };
                border-top-right-radius: 20px;
                ${
                  direction
                    ? `transform: rotateX(180deg);
                   top: ${top - baseBottomH}px;
                  `
                    : `top: ${topH + top}px;`
                }
              }
              .${lineClass}::after {
                content: "";
                position: absolute;
                bottom:0px;
                right: 0px;
                transform: translateX(50%);
                border-top: 6px solid ${
                  resolveColor(
                    sg.content.connecting_Line.arrow_color[i],
                    JSON_Data.colors
                  ) || "#a334c8"
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

      // If no timeline or no items, remove any previous lines for this subgroup
      if (!timeline || !timeline.timlines || timeline.timlines.length === 0) {
        const oldLines = pptBox.querySelectorAll(
          `[class*="timeline-bottom-line-${sectionIdx}-${idx}-"]`
        );
        oldLines.forEach((line) => line.remove());
        return;
      }

      timeline.timlines.forEach((item, i) => {
        const timelineClass = `timeline-bottom-line-${sectionIdx}-${idx}-${i}`;

        // Always remove any old instance first
        const oldLine = pptBox.querySelector(`.${timelineClass}`);
        if (oldLine) oldLine.remove();
        const oldStyle = document.querySelector(
          `style[data-timeline="${timelineClass}"]`
        );
        if (oldStyle) oldStyle.remove();

        // --- Look up endpoints ---
        const startEl = document.getElementById(item.starting);
        const endEl = document.getElementById(item.ending);

        // Require BOTH elements present AND visible
        if (!startEl || !endEl || !isVisible(startEl) || !isVisible(endEl)) {
          return; // skip if either is missing or hidden
        }

        // --- Position + style calculations ---
        const levelStr = item.height || "Level_1";
        const levelNum = parseInt(levelStr.split("_")[1]) || 1;
        const baseTopH = 160;
        const increment = 5;
        const rawTopH = baseTopH + (levelNum - 1) * increment;
        const topH = Math.min(Math.max(rawTopH, 30), direction ? 280 : 210);

        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const pptRect = pptBox.getBoundingClientRect();

        const startCenterX =
          startRect.left - pptRect.left + startRect.width / 2;
        const endCenterX = endRect.left - pptRect.left + endRect.width / 2;
        const width2 = Math.abs(endCenterX - startCenterX);
        const left = startRect.left - pptRect.left + startRect.width / 2;
        const top = startRect.top - pptRect.top + (direction ? 105 : 0);

        const bg =
          resolveColor(timeline.background_color, JSON_Data.colors) ||
          "linear-gradient(to right, #f6f4dc10 10%, #ffc305)";
        const showBorder =
          item.show_border === "true" || item.show_border === true;
        const borderColor = showBorder
          ? resolveColor(timeline.border_color, JSON_Data.colors) || "#ffc100"
          : "transparent";

        // --- Inject new style ---
        const style = document.createElement("style");
        style.setAttribute("data-timeline", timelineClass);
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
            text-align:right;
            padding-right: 5px;
            color: black;
          }
          .${timelineClass} p{
            width:70%;
            font-size:${getFontSize(7, 8, 9)}px;
            font-weight:bold;
            white-space: nowrap;        
            overflow: hidden;           
            text-overflow: ellipsis;
          }
          .${timelineClass} i{
            font-size:${getFontSize(10, 11, 12)}px;
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

        // --- Add timeline div ---
        const div = document.createElement("div");
        div.className = timelineClass;
        div.innerHTML =
          "<p title='" +
          item.content +
          "'>" +
          item.content +
          "</p><i class='fa-regular fa-clock'></i>";
        pptBox.appendChild(div);
      });
    });
  });
}
drawBottomTimelineSeries(JSON_Data);

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

      // If not enabled → remove old and skip
      if (
        !rectangleData ||
        !(rectangleData.display === "true" || rectangleData.display === true)
      ) {
        const oldRects = pptBox.querySelectorAll(
          `[class*="connection-Rectangle-sec${sectionIdx}-sub${idx}-rect"]`
        );
        oldRects.forEach((rect) => rect.remove());
        return;
      }

      rectangleData.connections.forEach((connection, i) => {
        const className = `connection-Rectangle-sec${sectionIdx}-sub${idx}-rect${i}`;

        // Remove any prior one
        const oldRect = pptBox.querySelector(`.${className}`);
        if (oldRect) oldRect.remove();

        // look up endpoints
        const startEl = document.getElementById(connection.starting);
        const endEl = document.getElementById(connection.ending);
        if (!startEl || !endEl || !isVisible(startEl) || !isVisible(endEl))
          return;

        // measurements
        const pptRect = pptBox.getBoundingClientRect();
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const distant_Space = 5;

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

        const heightLevelNum =
          parseInt((connection.height || "Level_1").split("_")[1]) || 1;
        const height = Math.min(
          Math.max(20 + (heightLevelNum - 1) * 5, 10),
          direction ? 140 : 95
        );

        const borderLevelNum =
          parseInt((connection.border_thickness || "Level_1").split("_")[1]) ||
          1;
        const borderSize = Math.min(
          Math.max(6 + (borderLevelNum - 1) * 2, 4),
          20
        );

        const color =
          resolveColor(rectangleData.color?.[i], JSON_Data.colors) || "#58e3d2";
        const topOffset = 397;
        const reverseTopOffset = 312;
        const topOffsetPageReverse = 220;
        const topOffsetrReversePageReverse = 490;

        // ---- Handle Config ----
        const config = connection.config;
        const hasConfig = !!config;

        const icons = config?.fontAwsomeicons || config?.fontAwsomeicon || [];
        const colors = config?.iconColors || config?.iconColor || [];
        const iconSizes = config?.iconSize || config?.iconSizes || [];
        const iconCount = icons.length;

        // justify_content mapping
        const justifyMap = {
          center: "center",
          between: "space-between",
          evenly: "space-evenly",
        };
        const justifyValue =
          justifyMap[config?.justify_content?.toLowerCase()] || "center";

        // width calculation from start_end_gaps
        const startEndGapsLevel =
          parseInt((config?.start_end_gaps || "Level_0").split("_")[1]) || 0;
        const widthPercent = Math.max(0, 100 - startEndGapsLevel * 5);

        const midLineHeight = 14;

        // Shape mapping (NEW PART)
        const shapeMap = {
          rectangle: "border-radius: 0 0 0 0;",
          rounded_sm: "border-radius: 5px;",
          rounded_lg: "border-radius: 15px;",
          rounded_x_lg: "border-radius: 25px;",
          rounded_xx_lg: "border-radius: 35px;",
          rounded_xxx_lg: "border-radius: 50px;",
          rounded_bottom_left: "border-radius: 0 0 0 20px;",
          rounded_bottom_right: "border-radius: 0 0 20px 0;",
          rounded_top_left: "border-radius: 12px 0 0 0;",
          rounded_top_right: "border-radius: 0 12px 0 0;",
          rounded_top: "border-radius: 12px 12px 0 0;",
          rounded_bottom: "border-radius: 0 0 12px 12px;",
        };

        const shapeStyle =
          shapeMap[config?.shape?.toLowerCase()] || shapeMap["rectangle"];

        // inject style for rectangle
        const styleEl = document.createElement("style");
        styleEl.textContent = `
          .${className} {
            position: absolute;
            left: ${left}px;
            width: ${width}px;
            height: ${height}px;
            border-bottom: ${borderSize}px solid ${color};
            border-left: ${borderSize}px solid ${color};
            border-right: ${borderSize}px solid ${color};
            ${shapeStyle}
            box-sizing: border-box;
            z-index: 2;
            overflow: visible;
            display: flex;
            justify-content: center;
            align-items: center;
            ${
              alignmentDirection(config.direction) === "reverse"
                ? `bottom: ${
                    direction
                      ? topOffsetrReversePageReverse + midLineHeight
                      : reverseTopOffset + midLineHeight
                  }px;
               transform:rotateZ(180deg);
              `
                : `top: ${direction ? topOffsetPageReverse : topOffset}px;`
            }
          }

          .${className} .icon-row {
            display: flex;
            justify-content: ${justifyValue};
            width: ${widthPercent}%;
            align-items: center;
            position: absolute;
            margin: 0;
            bottom: -${borderSize / 2}px;
            transform: translateY(50%);
          }

          .${className} .icon-row i {
            transition: font-size 0.2s ease;
          }
        `;
        document.head.appendChild(styleEl);

        // create main rect container
        const rectDiv = document.createElement("div");
        rectDiv.className = className;

        // if config present → add icon row
        if (hasConfig && iconCount > 0) {
          const iconRow = document.createElement("div");
          iconRow.className = "icon-row";

          icons.forEach((iconClass, iconIdx) => {
            const iconEl = document.createElement("i");
            iconEl.className = iconClass;
            iconEl.style.color =
              resolveColor(colors[iconIdx], JSON_Data.colors) || "black";

            // dynamic icon size
            const sizeLevel =
              parseInt((iconSizes[iconIdx] || "Size_0").split("_")[1]) || 0;
            const baseSize = 8;
            const fontSize = Math.min(baseSize + sizeLevel * 2, 20);
            iconEl.style.fontSize = `${fontSize}px`;

            iconRow.appendChild(iconEl);
          });

          rectDiv.appendChild(iconRow);
        }

        pptBox.appendChild(rectDiv);
      });
    });
  });
}

drawConnectingRectangle(JSON_Data);

function drawConnectingCircle(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("PPT-Box not found.");
    return;
  }

  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, idx) => {
      const circleData = sg.content?.connecting_Circle;

      // Remove old circles for this sub-group if display disabled or config missing
      if (
        !circleData ||
        !(circleData.display === "true" || circleData.display === true)
      ) {
        const oldEls = pptBox.querySelectorAll(
          `[class*="connection-Circle-sec${sectionIdx}-sub${idx}-circle"]`
        );
        oldEls.forEach((el) => {
          // remove related style if present
          const styleTag = document.querySelector(
            `style[data-conn="${el.className}"]`
          );
          if (styleTag) styleTag.remove();
          el.remove();
        });
        return;
      }

      (circleData.connections || []).forEach((connection, i) => {
        const className = `connection-Circle-sec${sectionIdx}-sub${idx}-circle${i}`;

        // remove any prior one + its style
        const old = pptBox.querySelector(`.${className}`);
        const oldStyle = document.querySelector(
          `style[data-conn="${className}"]`
        );
        if (old) old.remove();
        if (oldStyle) oldStyle.remove();

        // look up endpoints
        const startEl = document.getElementById(connection.starting);
        const endEl = document.getElementById(connection.ending);
        if (!startEl || !endEl || !isVisible(startEl) || !isVisible(endEl))
          return;

        // measurements
        const pptRect = pptBox.getBoundingClientRect();
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const distant_Space = 5;

        // normalize start_from / end_from to "start" | "middle" | "end"
        const normalize = (v) => {
          if (v === undefined || v === null) return "middle";
          const s = String(v).toLowerCase();
          return s === "start" || s === "end" || s === "middle" ? s : "middle";
        };
        const startFrom = normalize(connection.start_from);
        const endFrom = normalize(connection.end_from);

        const computeX = (rect, part) => {
          if (part === "start") return rect.left - distant_Space;
          if (part === "end") return rect.left + rect.width + distant_Space;
          return rect.left + rect.width / 2;
        };

        const startX = computeX(startRect, startFrom);
        const endX = computeX(endRect, endFrom);

        const leftAbs = Math.min(startX, endX);
        const distance = Math.abs(endX - startX);

        // nothing or too small to draw
        if (distance <= 1) return;

        const diameter = distance;
        const radius = diameter / 2;

        // border_thickness mapping (same formula as rectangle)
        const borderLevelNum =
          parseInt((connection.border_thickness || "Level_1").split("_")[1]) ||
          1;
        const borderSize = Math.min(
          Math.max(6 + (borderLevelNum - 1) * 2, 4),
          20
        );

        // Mid Line Height static
        const midLineHeight = 14;

        // color resolution (use the i-th color if provided)
        const color =
          resolveColor(circleData.color?.[i], JSON_Data.colors) || "#58e3d2";

        const minTop = Math.min(startRect.top, endRect.top);
        const topOffset =
          minTop -
          pptRect.top -
          diameter +
          borderSize / 2 +
          diameter / 2 +
          getFontSize(0, 5, 5);

        const styleEl = document.createElement("style");
        styleEl.setAttribute("data-conn", className);
        styleEl.textContent = `
          .${className} {
            position: absolute;
            left: ${leftAbs - pptRect.left - distant_Space}px;
            width: ${diameter}px;
            height: ${radius}px;
            overflow: hidden;
            ${
              alignmentDirection(connection.config.direction) === "reverse"
                ? `
              transform: rotateZ(180deg);
              top: ${topOffset + midLineHeight + diameter / 2}px;
            `
                : `
              top: ${topOffset}px;
            `
            }
            z-index: 1;
            pointer-events: none;
            display: block;
            box-sizing: content-box;
          }

          .${className} .inner-circle {
            position: absolute;
            top: 0px;
            left: 0px;
            width: ${diameter}px;
            height: ${diameter}px;
            border-radius: 50%;
            box-sizing: border-box;
            border: ${borderSize}px solid ${color};
            background: transparent;
          }

          /* optional helper so icons inside container can sit above the stroke */
          .${className} .conn-icon {
            position: absolute;
            transform-origin: center;
            pointer-events: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
            line-height: 1;
          }
        `;
        document.head.appendChild(styleEl);

        // build DOM
        const container = document.createElement("div");
        container.className = className;

        const circle = document.createElement("div");
        circle.className = "inner-circle";

        container.appendChild(circle);

        const cfg = connection.config || {};
        // don't crash for very small circles
        const MIN_DIAMETER_FOR_ICONS = 40;
        if (cfg && diameter >= MIN_DIAMETER_FOR_ICONS) {
          // Accept either single string or array for icon classes
          let iconClasses = [];
          if (Array.isArray(cfg.fontAwsomeicons)) {
            iconClasses = cfg.fontAwsomeicons;
          } else if (typeof cfg.fontAwsomeicon === "string") {
            iconClasses = [
              cfg.fontAwsomeicon,
              cfg.fontAwsomeicon,
              cfg.fontAwsomeicon,
            ];
          }

          // Colors can be array or single value
          const iconColors = Array.isArray(cfg.iconColor)
            ? cfg.iconColor
            : [cfg.iconColor, cfg.iconColor, cfg.iconColor].map(
                (c) => c || "black"
              );

          const iconSizeArr = Array.isArray(cfg.iconSize)
            ? cfg.iconSize
            : [cfg.iconSize, cfg.iconSize, cfg.iconSize];

          const D = diameter;
          const cx = D / 2;
          const cy = D / 2;
          const ringRadius = Math.max(6, cx - borderSize / 2);
          const anglesDeg = [-90, -155, -25];

          for (let iconIdx = 0; iconIdx < 3; iconIdx++) {
            const deg = anglesDeg[iconIdx];
            const theta = (deg * Math.PI) / 180;
            const iconClass = iconClasses[iconIdx] || iconClasses[0];
            const iconColor = iconColors[iconIdx] || iconColors[0] || "black";

            // parse Level_N -> N
            const sizeLevel =
              parseInt((iconSizeArr[iconIdx] || "Level_0").split("_")[1]) || 0;
            const baseSize = 8;
            const fontSize = Math.min(baseSize + sizeLevel * 2, 20);

            // compute center position on full-circle coordinates
            const iconCenterX = cx + ringRadius * Math.cos(theta);
            const iconCenterY = cy + ringRadius * Math.sin(theta);

            // create element (Font Awesome <i> expected)
            const iconEl = document.createElement("i");
            iconEl.className = iconClass + " conn-icon";
            iconEl.setAttribute("aria-hidden", "true");

            // inline styles for exact placement and appearance
            iconEl.style.left = `${iconCenterX}px`;
            iconEl.style.top = `${iconCenterY}px`;
            iconEl.style.transform = `translate(-50%, -50%) ${
              iconIdx === 1
                ? "rotateZ(-60deg)"
                : iconIdx === 2
                ? "rotateZ(60deg)"
                : ""
            }`;
            iconEl.style.fontSize = `${fontSize}px`;
            iconEl.style.color = iconColor;
            iconEl.style.zIndex = "3";
            iconEl.style.pointerEvents = "none";
            container.appendChild(iconEl);
          }
        }
        pptBox.appendChild(container);
      });
    });
  });
}

drawConnectingCircle(JSON_Data);

function connectingBottomText(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("connectingBottomText: PPT-Box not found.");
    return;
  }

  const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

  // parses "Level_X" -> integer X (fallback 1)
  const parseLevel = (levelStr, max = 10) => {
    if (!levelStr) return 1;
    const m = String(levelStr).match(/Level[_\- ]?(\d+)/i);
    const n = m ? parseInt(m[1], 10) : 1;
    return clamp(n || 1, 1, max);
  };

  JSON_Data.body?.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, subIdx) => {
      const bottomArr = sg.content?.connectingBottomText;
      if (!Array.isArray(bottomArr) || bottomArr.length === 0) {
        const oldEls = pptBox.querySelectorAll(
          `[class*="connection-BottomText-sec${sectionIdx}-sub${subIdx}-"]`
        );
        oldEls.forEach((el) => {
          const styleTag = document.querySelector(
            `style[data-conn="${el.className}"]`
          );
          if (styleTag) styleTag.remove();
          el.remove();
        });
        return;
      }

      bottomArr.forEach((item, i) => {
        const className = `connection-BottomText-sec${sectionIdx}-sub${subIdx}-${i}`;

        // cleanup old
        const old = pptBox.querySelector(`.${className}`);
        const oldStyle = document.querySelector(
          `style[data-conn="${className}"]`
        );
        if (old) old.remove();
        if (oldStyle) oldStyle.remove();

        const targetEl = document.getElementById(item.target_On_Line_Content);
        if (!targetEl || !isVisible(targetEl)) return;

        const pptRect = pptBox.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const level = parseLevel(item.height, 10);
        const baseHeight = 15;
        const rectHeight = baseHeight + (level - 1) * 5;
        const rectWidth = 7;

        const borderColor =
          resolveColor(item.borderColor, JSON_Data.colors) || "#000";
        const textColor =
          resolveColor(item.textColor, JSON_Data.colors) || "#000";

        const outset = 8;
        const posRaw = String(item.position || "start").toLowerCase();
        const elemLeft = targetRect.left - pptRect.left;
        const elemRight = targetRect.left - pptRect.left + targetRect.width;
        const elemCenter = elemLeft + targetRect.width / 2;

        let leftPx;
        if (posRaw === "middle") {
          leftPx = elemCenter - rectWidth / 2 + 2;
        } else if (posRaw === "end") {
          leftPx = elemRight - rectWidth - outset;
        } else {
          leftPx = elemLeft + outset;
        }

        const topPx = targetRect.bottom - pptRect.top - 1;

        const styleEl = document.createElement("style");
        styleEl.setAttribute("data-conn", className);
        styleEl.textContent = `
          .${className} {
            position: absolute;
            left: ${Math.round(leftPx)}px;
            top: ${Math.round(topPx)}px;
            width: ${rectWidth}px;
            height: ${rectHeight}px;
            border-left:1px solid ${borderColor};
            border-bottom:1px solid ${borderColor};
            border-bottom-left-radius:10px;
            box-sizing: border-box;
            z-index: 3;
            pointer-events: none;
            display: block;
          }
          .${className} .bt-text {
            position: absolute;
            left: calc(100% + 3px);
            bottom: 0px;
            transform: translateY(50%);
            white-space: nowrap;
            pointer-events: auto;
            font-family: inherit;
            font-size: ${getFontSize(10, 11, 12)}px;
            color: ${textColor};
            margin: 0;
            padding: 0;
            line-height: 1;
          }
        `;
        document.head.appendChild(styleEl);

        const container = document.createElement("div");
        container.className = className;

        const textWrap = document.createElement("div");
        textWrap.className = "bt-text";
        const pTitle = document.createElement("p");
        pTitle.style.margin = "0";
        pTitle.style.padding = "0";
        pTitle.textContent = limitText(item.text, 15) || "";
        textWrap.appendChild(pTitle);

        container.appendChild(textWrap);

        // tooltip on hover (only if text or detail exists)
        container.title = item.textDetail || item.text || "";

        pptBox.appendChild(container);
      });
    });
  });
}

connectingBottomText(JSON_Data);

function drawConnectingTextLine(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("PPT-Box not found.");
    return;
  }

  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, idx) => {
      const textLineData = sg.content?.connecting_Text_Line;

      // Remove old text-lines for this sub-group if display disabled or config missing
      if (
        !textLineData ||
        !(textLineData.display === "true" || textLineData.display === true)
      ) {
        const oldEls = pptBox.querySelectorAll(
          `[class*="connection-TextLine-sec${sectionIdx}-sub${idx}-line"]`
        );
        oldEls.forEach((el) => {
          const styleTag = document.querySelector(
            `style[data-conn="${el.className}"]`
          );
          if (styleTag) styleTag.remove();
          el.remove();
        });
        return;
      }

      (textLineData.connections || []).forEach((connection, i) => {
        const className = `connection-TextLine-sec${sectionIdx}-sub${idx}-line${i}`;

        // remove any prior one + its style
        const old = pptBox.querySelector(`.${className}`);
        const oldStyle = document.querySelector(
          `style[data-conn="${className}"]`
        );
        if (old) old.remove();
        if (oldStyle) oldStyle.remove();

        // look up endpoints
        const startEl = document.getElementById(connection.starting);
        const endEl = document.getElementById(connection.ending);
        if (!startEl || !endEl || !isVisible(startEl) || !isVisible(endEl))
          return;

        // measurements
        const pptRect = pptBox.getBoundingClientRect();
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();

        // normalize start_from / end_from to "start" | "middle" | "end"
        const normalize = (v) => {
          if (v === undefined || v === null) return "middle";
          const s = String(v).toLowerCase();
          return s === "start" || s === "end" || s === "middle" ? s : "middle";
        };
        const startFrom = normalize(connection.start_from);
        const endFrom = normalize(connection.end_from);

        const computeX = (rect, part) => {
          if (part === "start") return rect.left;
          if (part === "end") return rect.left + rect.width;
          return rect.left + rect.width / 2;
        };

        const startX = computeX(startRect, startFrom);
        const endX = computeX(endRect, endFrom);

        const leftAbs = Math.min(startX, endX);
        const distance = Math.abs(endX - startX);

        // nothing or too small to draw
        if (distance <= 1) return;

        // line position level -> top offset (static baseline + 2px per level)
        const linePosLevel = Math.min(
          Math.max(
            parseInt((connection.line_Position || "Level_1").split("_")[1]) ||
              1,
            1
          ),
          20
        );
        const topOffset = (direction ? 238 : 415) + (linePosLevel - 1) * 2; // relative to PPT-Box top

        // line thickness mapping (Level_1|2|3)
        const thicknessLevel = Math.min(
          Math.max(
            parseInt((connection.line_Thickness || "Level_1").split("_")[1]) ||
              1,
            1
          ),
          3
        );
        const thicknessMap = { 1: 1, 2: 2, 3: 4 };
        const lineThickness = thicknessMap[thicknessLevel] || 1;

        // colors
        const lineColor =
          resolveColor(connection.line_color, JSON_Data.colors) ||
          resolveColor(textLineData.line_color, JSON_Data.colors) ||
          "#000";
        const textColor =
          resolveColor(connection.text_color, JSON_Data.colors) || "#000";

        // text position
        const textPos = String(
          connection.text_Position || "middle"
        ).toLowerCase();
        const textRaw = connection.text || "";

        // tri size (caps) derived from thickness
        const triSize = Math.max(4, Math.min(12, Math.floor(lineThickness)));

        // compute text max widths
        const centerTextMax = Math.floor(distance * 0.8);
        const fullTextMax = Math.floor(distance * 0.99);

        // create style (tagged so we can remove it later)
        const styleEl = document.createElement("style");
        styleEl.setAttribute("data-conn", className);

        // CSS (scoped to this unique className)
        styleEl.textContent = `
          .${className} {
            position: absolute;
            left: ${leftAbs - pptRect.left}px;
            width: ${distance}px;
            top: ${topOffset}px;
            z-index: 2;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: inherit;
          }
          .${className}__row {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .${className}__line {
            flex: 1 1 0;
            height: ${lineThickness}px;
            background: ${lineColor};
            position: relative;
            min-width: 0;
          }

          .${className}__line.left::before {
            content: "";
            position: absolute;
            top: 50%;
            left:-3px;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: ${triSize}px solid transparent;
            border-bottom: ${triSize}px solid transparent;
            border-right: ${triSize}px solid ${lineColor};
          }

          .${className}__line.right::after {
            content: "";
            position: absolute;
            top: 50%;
            right:-3px;
            transform: translateY(-50%);
            width: 0;
            height: 0;
            border-top: ${triSize}px solid transparent;
            border-bottom: ${triSize}px solid transparent;
            border-left: ${triSize}px solid ${lineColor};
          }

          .${className}__textwrap {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 8px;
            box-sizing: border-box;
            max-width: ${
              textPos === "middle" ? centerTextMax + "px" : fullTextMax + "px"
            };
            min-width: 0;
          }

          .${className}__text {
            margin: 0;
            color: ${textColor};
            font-size:${getFontSize(11, 12, 13)}px;
            line-height: 1;
            display: inline-block;
            box-sizing: border-box;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
          }

          /* when text is above/below, stack vertically */
          .${className}--col {
            flex-direction: column;
          }
          .${className}--col .${className}__row {
            margin-top: 4px;
          }
        `;
        document.head.appendChild(styleEl);

        // build DOM structure
        const container = document.createElement("div");
        container.className = className;

        // if above/below -> column layout (text then row)
        if (textPos === "above" || textPos === "below") {
          container.classList.add(`${className}--col`);
        }

        // text element
        const textEl = document.createElement("p");
        textEl.className = `${className}__text`;
        textEl.textContent = textRaw;

        // the row with left-line / textwrap / right-line
        const row = document.createElement("div");
        row.className = `${className}__row`;
        row.title = textRaw;

        const leftLine = document.createElement("div");
        leftLine.className = `${className}__line left`;

        const rightLine = document.createElement("div");
        rightLine.className = `${className}__line right`;

        const textWrap = document.createElement("div");
        textWrap.className = `${className}__textwrap`;

        // Append children in the order depending on text position
        if (textPos === "above") {
          // text above row
          const textAbove = textEl;
          textWrap.appendChild(textAbove);
          row.appendChild(leftLine);
          row.appendChild(rightLine);
          container.appendChild(textWrap);
          container.appendChild(row);
        } else if (textPos === "below") {
          // text below row
          row.appendChild(leftLine);
          row.appendChild(rightLine);
          textWrap.appendChild(textEl);
          container.appendChild(row);
          container.appendChild(textWrap);
        } else {
          // middle: left-line | text-wrap | right-line
          textWrap.appendChild(textEl);
          row.appendChild(leftLine);
          row.appendChild(textWrap);
          row.appendChild(rightLine);
          container.appendChild(row);
        }

        // append to PPT box
        pptBox.appendChild(container);
      });
    });
  });
}

drawConnectingTextLine(JSON_Data);

function drawMultiplePolygons(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("drawMultiplePolygons: PPT-Box not found.");
    return;
  }

  // Allowed levels
  const allowedLevels = ["Level_1", "Level_2", "Level_3", "Level_4", "Level_5"];
  const compartmentTop = 611;
  const compartmentHeight = 100;
  const compartmentSize = 20;
  const SHAPE_W = 13;
  const SHAPE_H = 11;

  // iterate body -> sub_groups
  (JSON_Data.body || []).forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, subIdx) => {
      const cfg = sg.content?.on_line_content_configuration;
      if (
        !cfg ||
        !Array.isArray(cfg.bottom_shape_positions) ||
        cfg.bottom_shape_positions.length === 0
      ) {
        // remove old containers
        const oldEls = pptBox.querySelectorAll(
          `[class*="connection-Polygons-sec${sectionIdx}-sub${subIdx}-grp"]`
        );
        oldEls.forEach((el) => {
          const styleTag = document.querySelector(
            `style[data-conn="${el.className}"]`
          );
          if (styleTag) styleTag.remove();
          el.remove();
        });
        return;
      }

      const contentIds = Array.isArray(cfg.content_id) ? cfg.content_id : [];

      cfg.bottom_shape_positions.forEach((group, groupIdx) => {
        // Determine target element
        let targetId;
        if (contentIds.length === cfg.bottom_shape_positions.length) {
          targetId = contentIds[groupIdx];
        } else {
          targetId =
            contentIds[groupIdx] || contentIds[0] || "on_line_content_1";
        }

        const subGroupContainer =
          document.getElementById(`sub_group_${sectionIdx}_${subIdx}`) ||
          sg.el ||
          null;

        // --- NEW: if sub-group exists but is not visible, remove any previously rendered container for this group and skip ---
        const className = `connection-Polygons-sec${sectionIdx}-sub${subIdx}-grp${groupIdx}`;
        if (subGroupContainer && !isVisible(subGroupContainer)) {
          const old = pptBox.querySelector(`.${className}`);
          if (old) old.remove();
          const oldStyle = document.querySelector(
            `style[data-conn="${className}"]`
          );
          if (oldStyle) oldStyle.remove();
          return;
        }
        // --- end NEW ---

        const targetEl = document.getElementById(targetId);

        // --- NEW: If target missing or not visible, ensure cleanup of previous container/style then skip ---
        if (!targetEl || !isVisible(targetEl)) {
          const old = pptBox.querySelector(`.${className}`);
          if (old) old.remove();
          const oldStyle = document.querySelector(
            `style[data-conn="${className}"]`
          );
          if (oldStyle) oldStyle.remove();
          return;
        }
        // --- end NEW ---

        const pptRect = pptBox.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const midpointX = targetRect.left + targetRect.width / 2;
        const leftRelativeToPPT = Math.round(midpointX - pptRect.left);

        // Unique container class
        const prev = pptBox.querySelector(`.${className}`);
        if (prev) prev.remove();
        const prevStyle = document.querySelector(
          `style[data-conn="${className}"]`
        );
        if (prevStyle) prevStyle.remove();

        let rawLevels = Array.isArray(group.levels) ? group.levels : [];
        let levelsArr = rawLevels
          .map((lv) => lv.trim())
          .filter(
            (lv, i, self) =>
              allowedLevels.includes(lv) && self.indexOf(lv) === i
          );

        if (!levelsArr.length) return;

        // Style
        const styleEl = document.createElement("style");
        styleEl.setAttribute("data-conn", className);
        styleEl.textContent = `
.${className} {
  position: absolute;
  left: ${leftRelativeToPPT - Math.round(SHAPE_W / 2)}px;
  top: ${compartmentTop}px;
  width: ${SHAPE_W}px;
  height: ${compartmentHeight}px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  pointer-events: none;
  box-sizing: border-box;
}
.${className} .polygon-inner {
  width: ${SHAPE_W}px;
  height: ${SHAPE_H}px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
  transform: translateY(0) rotateZ(30deg);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 0px;
  visibility: hidden;
  position: absolute;
}
`;
        document.head.appendChild(styleEl);

        // container
        const container = document.createElement("div");
        container.className = className;

        // Create 5 compartments
        for (let i = 1; i <= 5; i++) {
          const inner = document.createElement("div");
          inner.className = "polygon-inner";
          inner.style.top = `${
            (i - 1) * compartmentSize + (compartmentSize - SHAPE_H) / 2
          }px`; // centered in compartment

          // If JSON has this level, make it visible and set color
          const levelName = `Level_${i}`;
          if (levelsArr.includes(levelName)) {
            inner.style.visibility = "visible";

            // resolve color
            let colorVal = null;
            if (Array.isArray(group.color) && group.color[i - 1])
              colorVal = group.color[i - 1];
            else if (Array.isArray(group.color) && group.color[0])
              colorVal = group.color[0];
            else if (group.color) colorVal = group.color;

            let resolvedColor = null;
            try {
              if (typeof resolveColor === "function" && colorVal)
                resolvedColor = resolveColor(colorVal, JSON_Data.colors);
            } catch (e) {
              resolvedColor = null;
            }
            inner.style.background = resolvedColor || colorVal || "#dcdcdc";
          }

          container.appendChild(inner);
        }

        pptBox.appendChild(container);
      });
    });
  });
}

drawMultiplePolygons(JSON_Data);

function drawLogoOnMidLine(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("drawLogoOnMidLine: PPT-Box not found.");
    return;
  }

  const cfg = JSON_Data?.mid_line_config;
  if (!cfg || !Array.isArray(cfg.logo_config)) {
    // nothing to draw (graceful)
    // remove any lingering midline logos from previous renders
    const oldAll = pptBox.querySelectorAll(`[class*="midline-logo-"]`);
    oldAll.forEach((el) => {
      const styleTag = document.querySelector(
        `style[data-conn="${el.className}"]`
      );
      if (styleTag) styleTag.remove();
      el.remove();
    });
    return;
  }

  // helper: parse Level_N -> int
  const parseLevel = (levelStr, max = 3) => {
    if (!levelStr) return 1;
    const m = String(levelStr).match(/Level[_\- ]?(\d+)/i);
    const n = m ? parseInt(m[1], 10) : 1;
    return Math.min(Math.max(n || 1, 1), max);
  };

  // font size map for Level 1..3 (adjust pixels if you want)
  const fontSizeFromLevel = (lvl) => {
    const map = { 1: 12, 2: 14, 3: 16 };
    return map[lvl] || map[1];
  };

  // cleanup any previous midline logos/styles
  const prev = pptBox.querySelectorAll(`[class*="midline-logo-"]`);
  prev.forEach((el) => {
    const styleTag = document.querySelector(
      `style[data-conn="${el.className}"]`
    );
    if (styleTag) styleTag.remove();
    el.remove();
  });

  // config-level shared values
  const globalColor =
    resolveColor(cfg.color, JSON_Data.colors) || cfg.color || "#000";

  cfg.logo_config.forEach((logoCfg, idx) => {
    // skip if it's empty or not an object
    if (
      !logoCfg ||
      typeof logoCfg !== "object" ||
      Object.keys(logoCfg).length === 0
    ) {
      return;
    }

    // type must exist
    const typeRaw = String(logoCfg.type || "").toLowerCase();
    if (!typeRaw) return;

    const className = `midline-logo-sec-${idx}`;

    // create and remove old if present (safety)
    const oldEl = pptBox.querySelector(`.${className}`);
    const oldStyle = document.querySelector(`style[data-conn="${className}"]`);
    if (oldEl) oldEl.remove();
    if (oldStyle) oldStyle.remove();

    // determine endpoints depending on type
    let startEl = null;
    let endEl = null;
    if (typeRaw === "between") {
      if (!logoCfg.on_line_id_start || !logoCfg.on_line_id_end) return;
      startEl = document.getElementById(logoCfg.on_line_id_start);
      endEl = document.getElementById(logoCfg.on_line_id_end);
      if (!startEl || !endEl) return;
      if (!isVisible(startEl) || !isVisible(endEl)) return;
    } else if (typeRaw === "start") {
      if (!logoCfg.on_line_id_start) return;
      startEl = document.getElementById(logoCfg.on_line_id_start);
      if (!startEl) return;
      if (!isVisible(startEl)) return;
    } else if (typeRaw === "end") {
      if (!logoCfg.on_line_id_end) return;
      endEl = document.getElementById(logoCfg.on_line_id_end);
      if (!endEl) return;
      if (!isVisible(endEl)) return;
    } else {
      // unknown type: skip
      return;
    }

    // get bounding rects relative to PPT-Box
    const pptRect = pptBox.getBoundingClientRect();
    const sRect = startEl ? startEl.getBoundingClientRect() : null;
    const eRect = endEl ? endEl.getBoundingClientRect() : null;

    // compute icon center coordinates (left, top) relative to PPT-Box
    let iconCenterX = 0;
    let iconCenterY = 0;
    const offsetBetween = 10;
    if (typeRaw === "between") {
      // x1 = start.right, x2 = end.left
      const x1 = sRect.left - pptRect.left + sRect.width;
      const x2 = eRect.left - pptRect.left;
      const midX = x1 + (x2 - x1) / 2;
      iconCenterX = midX;
      // y: midpoint between vertical centers of the two elements (so "mid line")
      const sCenterY = sRect.top - pptRect.top + sRect.height / 2;
      const eCenterY = eRect.top - pptRect.top + eRect.height / 2;
      iconCenterY = (sCenterY + eCenterY) / 2;
    } else if (typeRaw === "start") {
      // place left of element (so icon to left of element)
      const elemLeft = sRect.left - pptRect.left;
      const elemCenterY = sRect.top - pptRect.top + sRect.height / 2;
      iconCenterX = elemLeft - offsetBetween;
      iconCenterY = elemCenterY;
    } else if (typeRaw === "end") {
      // place right of element
      const elemRight = eRect.left - pptRect.left + eRect.width;
      const elemCenterY = eRect.top - pptRect.top + eRect.height / 2;
      iconCenterX = elemRight + offsetBetween;
      iconCenterY = elemCenterY;
    }

    // icon size from fontSize Level_1..3
    const level = parseLevel(logoCfg.fontSize || "Level_1", 3);
    const iconFontPx = fontSizeFromLevel(level);

    // colors
    const fontColor =
      resolveColor(logoCfg.fontColor, JSON_Data.colors) ||
      logoCfg.fontColor ||
      globalColor;

    // build style for this logo
    const styleEl = document.createElement("style");
    styleEl.setAttribute("data-conn", className);

    // We'll create an icon container centered at (iconCenterX, iconCenterY)
    // container size is based on font size (square)
    const containerSize = Math.round(iconFontPx * 1.6); // padding around icon
    const leftPx = Math.round(iconCenterX - containerSize / 2);
    const topPx = Math.round(iconCenterY - containerSize / 2);

    styleEl.textContent = `
      .${className} {
        position: absolute;
        left: ${leftPx}px;
        top: ${topPx + getFontSize(0, 3, direction ? 0 : 3)}px;
        width: ${containerSize}px;
        height: ${containerSize}px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5;
        pointer-events: none;
        background-color:transparent;
      }
      .${className} .midline-icon {
        font-size: ${iconFontPx}px;
        line-height: 1;
        color: ${fontColor};
        width: ${containerSize}px;
        height: ${containerSize}px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        pointer-events: none;
      }
    `;
    document.head.appendChild(styleEl);

    // build DOM node
    const wrapper = document.createElement("div");
    wrapper.className = className;

    const iEl = document.createElement("i");
    // ensure any icon class provided is added
    if (logoCfg.fontAwsomeIcon) {
      const faClasses = String(logoCfg.fontAwsomeIcon).trim().split(/\s+/);
      faClasses.forEach((c) => iEl.classList.add(c));
    } else {
      // fallback to a simple pseudo-circle if no icon class passed
      iEl.textContent = "•";
    }
    iEl.classList.add("midline-icon");

    // apply inline style color if needed (safety)
    iEl.style.color = fontColor;

    wrapper.appendChild(iEl);
    // set title for accessibility if any label provided
    wrapper.title = logoCfg.title || logoCfg.tooltip || "";

    pptBox.appendChild(wrapper);
  });
}

drawLogoOnMidLine(JSON_Data);

function collapsabile() {
  const parents = document.querySelectorAll(".Slide-box");

  // Initialize collapsibleData once
  if (collapsibleData.length === 0) {
    parents.forEach((parent) => {
      const parentClasses = Array.from(parent.classList).filter(
        (c) => c !== "Slide-box"
      );
      const parentId = parentClasses.join(" ");

      // Store original title in data-title if not already present
      const h1 = parent.querySelector("h1");
      if (h1 && !parent.hasAttribute("data-title")) {
        const textNode = Array.from(h1.childNodes).find(
          (n) => n.nodeType === Node.TEXT_NODE
        );
        const originalTitle = textNode ? textNode.textContent.trim() : "";
        parent.setAttribute("data-title", originalTitle);
      }

      // Prepare subgroup collapsible data
      const subGroups = parent.querySelectorAll(".sub-groups > div");
      const subGroupData = [];
      subGroups.forEach((sg) => {
        const sgClasses = Array.from(sg.classList);

        // Store subgroup title in data-title
        const h2 = sg.querySelector("h2");
        if (h2 && !sg.hasAttribute("data-title")) {
          const textNode = Array.from(h2.childNodes).find(
            (n) => n.nodeType === Node.TEXT_NODE
          );
          const originalTitle = textNode ? textNode.textContent.trim() : "";
          sg.setAttribute("data-title", originalTitle);
        }

        subGroupData.push({
          unique_class: sgClasses.join(" "),
          collapsed: false,
        });
      });

      collapsibleData.push({
        parent_class: parentId,
        collapsed: false,
        sub_groups: subGroupData,
      });
    });
  }

  document.addEventListener("click", function (e) {
    // ===== PARENT COLLAPSE =====
    if (e.target.matches("h1 i") && e.target.closest(".Slide-box")) {
      const parentBox = e.target.closest(".Slide-box");
      const parentId = Array.from(parentBox.classList).filter(
        (c) => c !== "Slide-box"
      )[0];
      const icon = e.target;

      const parentItem = collapsibleData.find(
        (item) => item.parent_class === parentId
      );
      if (!parentItem) return;

      const h1 = parentBox.querySelector("h1");
      const titleNode = Array.from(h1.childNodes).find(
        (n) => n.nodeType === Node.TEXT_NODE
      );
      const originalTitle = parentBox.getAttribute("data-title") || "";
      const subGroups = parentBox.querySelector(".sub-groups");

      if (!parentItem.collapsed) {
        // Collapse parent
        parentItem.collapsed = true;
        if (titleNode) titleNode.textContent = "";
        icon.title = originalTitle;
        if (subGroups) subGroups.style.display = "none";
        icon.classList.remove("fa-square-caret-right");
        icon.classList.add("fa-square-caret-down");
      } else {
        // Expand parent
        parentItem.collapsed = false;
        if (titleNode) titleNode.textContent = " " + originalTitle;
        icon.removeAttribute("title");
        if (subGroups) subGroups.style.display = "";
        icon.classList.remove("fa-square-caret-down");
        icon.classList.add("fa-square-caret-right");
      }

      // redraw after any toggle
      drawBottomTimelineSeries(JSON_Data);
      drawConnectingLines(JSON_Data);
      drawConnectingTextLine(JSON_Data);
      drawConnectingRectangle(JSON_Data);
      drawConnectingCircle(JSON_Data);
      adjustFooterWidth(JSON_Data);
      adjustMidLineWidth(JSON_Data);
      drawMultiplePolygons(JSON_Data);
      connectingBottomText(JSON_Data);
      drawLogoOnMidLine(JSON_Data);
    }

    // ===== SUBGROUP COLLAPSE =====
    if (e.target.matches(".sub-groups > div h2 i")) {
      const childDiv = e.target.closest(".sub-groups > div");
      const childId = Array.from(childDiv.classList).join(" ");
      const icon = e.target;

      collapsibleData.forEach((parentItem) => {
        const childItem = parentItem.sub_groups.find(
          (sg) => sg.unique_class === childId
        );
        if (!childItem) return;

        const h2 = childDiv.querySelector("h2");
        let labelSpan = h2.querySelector(".label-text");

        // If no label span exists, create one wrapping only the text nodes
        if (!labelSpan) {
          const textNodes = Array.from(h2.childNodes).filter(
            (n) => n.nodeType === Node.TEXT_NODE
          );
          if (textNodes.length > 0) {
            labelSpan = document.createElement("span");
            labelSpan.className = "label-text";
            labelSpan.textContent = textNodes
              .map((n) => n.textContent)
              .join("")
              .trim();
            textNodes.forEach((n) => h2.removeChild(n));
            h2.appendChild(labelSpan);
          }
        }

        const labelText = labelSpan ? labelSpan.textContent.trim() : "";
        const midTop = childDiv.querySelector(".subgroups-mid-top");
        const onLine = childDiv.querySelector(".subgroups-on-line");
        const aboveLine = childDiv.querySelector(".above-line-content");

        if (!childItem.collapsed) {
          // Collapse subgroup
          childItem.collapsed = true;
          if (labelSpan) labelSpan.style.display = "none";
          icon.title = labelText; // Tooltip now matches label
          if (midTop) midTop.style.display = "none";
          if (onLine) onLine.style.display = "none";
          if (aboveLine) aboveLine.style.display = "none";
          icon.classList.add("fa-square-caret-down");
        } else {
          // Expand subgroup
          childItem.collapsed = false;
          if (labelSpan) labelSpan.style.display = "";
          icon.removeAttribute("title");
          if (midTop) midTop.style.display = "";
          if (onLine) onLine.style.display = "";
          if (aboveLine) aboveLine.style.display = "";
          icon.classList.remove("fa-square-caret-down");
          icon.classList.add("fa-square-caret-right");
        }

        // redraw after any toggle
        drawBottomTimelineSeries(JSON_Data);
        drawConnectingLines(JSON_Data);
        drawConnectingTextLine(JSON_Data);
        drawConnectingRectangle(JSON_Data);
        drawConnectingCircle(JSON_Data);
        adjustFooterWidth(JSON_Data);
        adjustMidLineWidth(JSON_Data);
        drawMultiplePolygons(JSON_Data);
        connectingBottomText(JSON_Data);
        drawLogoOnMidLine(JSON_Data);
      });
    }
  });
}

collapsabile();