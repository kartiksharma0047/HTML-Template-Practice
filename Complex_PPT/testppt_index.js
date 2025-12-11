let collapsibleData = [];
JSON_Data = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatory",
      footer_2_label: "Hospital",
      footer_3_label: "Other structure",
      footer_4_label: "Home",
      footer_5_label: "Hospital Drugstore",
      footer_6_label: "Ambulatory",
      footer_7_label: "Hospital",
      footer_8_label: "Other structure",
      footer_9_label: "Home",
      footer_10_label: "Hospital Drugstore",
    },
    label_width: {
      footer_1_width: "92",
      footer_2_width: "92",
      footer_3_width: "92",
      footer_4_width: "92",
      footer_5_width: "92",
      footer_6_width: "92",
      footer_7_width: "92",
      footer_8_width: "92",
      footer_9_width: "92",
      footer_10_width: "92",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
  },
  Page_Configuration: {
    background_color: "linear-gradient(to bottom, #92cfdf,white 60%)",
    border_color: "black",
    scroll_horizontal: true,
    // direction: "reverse",
    exportName: "Process_Journey",
    bottomShapesConfig: {
      shapes: ["circle", "trapezium", "circle", "trapezium"],
      shapesColor: ["#ffc130", "#00a9bd", "#ffc130", "#00a9bd"],
      text: ["Timings", "Locus", "Timings", "Locus"],
      textColor: ["white", "white", "white", "white"],
    },
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
    logo_config: [
      {
        type: "Between",
        on_line_id_start: "on_line_content_4",
        on_line_id_end: "on_line_content_5",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
      {
        type: "Between",
        on_line_id_start: "on_line_content_6",
        on_line_id_end: "on_line_content_7",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
      {
        type: "Between",
        on_line_id_start: "on_line_content_8",
        on_line_id_end: "on_line_content_9",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
      {
        type: "Start",
        on_line_id_start: "on_line_content_1",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
      {
        type: "End",
        on_line_id_end: "on_line_content_10",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
    ],
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
    fontFamilyCDN:
      "https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&display=swap",
    fontFamily: ["sans-serif"],
  },
  body: [
    {
      component: "Header",
      title: "Diagnosis",
      configurations: {
        title_color: "#304c8c",
        line_right: true,
        line_color: "white",
        collapsabile: true,
      },
      start_content: {
        display: true,
        logo_title: "Patient",
        link: "www.youtube.com",
        logo_title_detail: "Patients",
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_title_color: "white_color",
          logo_background_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
        },
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: false,
          },
          content: {
            logo_heading: ["", ""],
            logo_heading_color: [
              "#a334c8",
              "#a334c8",
              "#a334c8",
              "Common_transparent",
            ],
            logo_heading_border_color: [
              "#a334c8",
              "#a334c8",
              "#a334c8",
              "Common_transparent",
            ],
            logo_color: ["#a334c8", "#a334c8", "#a334c8", "Common_transparent"],
            logo_titles_config: [
              {
                logo_title: ["GP"],
                links: [""],
                logo_id_name: "logo_title_id1",
                logo_detail: ["GP"],
                logo_title_background_color: ["white"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["#a334c8"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Neurologist", "", "Nurse"],
                links: [""],
                logo_id_name: "logo_title_id2",
                logo_detail: ["Neurologist", "", "Nurse"],
                logo_title_background_color: ["white", "white", "white"],
                logo_title_border: [true, true, true],
                logo_title_border_color: ["#a334c8", "#a334c8", "#a334c8"],
                logo_title_color: ["#a334c8", "#a334c8", "#a334c8"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Radiologist", "", "Bio & Other"],
                links: [""],
                logo_id_name: "logo_title_id3",
                logo_detail: ["Radiologist", "", "Bio & Other"],
                logo_title_background_color: ["white", "white", "white"],
                logo_title_border: [true, true, true],
                logo_title_border_color: ["#a334c8", "#a334c8", "#a334c8"],
                logo_title_color: ["#a334c8", "#a334c8", "#a334c8"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["GP"],
                links: [""],
                logo_id_name: "logo_title_id4",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [false],
                logo_title_border_color: ["black"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id2",
                  height: "Level_5",
                },
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id4",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb", "#9f30cb"],
              line_color: ["#9f30cb", "#9f30cb"],
            },
            connecting_Text_Line: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_3",
                  ending: "on_line_content_6",
                  start_from: "start",
                  end_from: "mid",
                  line_Thickness: "Level_1",
                  line_Position: "Level_1",
                  text_Position: "above",
                  text: "Process",
                  text_color: "black",
                  line_color: "black",
                },
              ],
            },
            ToolTip_Creation: [
              {
                display: true,
                content_id: "on_line_content_4",
                vertical_position: "bottom",
                horizontal_position: "right",
                openBy: "click",
                content_HTML:
                  "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                content_CSS:
                  ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
              },
              {
                display: true,
                content_id: "on_line_content_3",
                vertical_position: "bottom",
                horizontal_position: "right",
                openBy: "click",
                content_HTML:
                  "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                content_CSS:
                  ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
              },
              {
                display: true,
                content_id: "on_line_content_1",
                vertical_position: "bottom",
                horizontal_position: "right",
                openBy: "hover",
                content_HTML:
                  "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                content_CSS:
                  ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
              },
            ],
            on_line_content_configuration: {
              content: ["SYMPTOMS", "VISIT", "DIAGNOSTIC TESTS", "DIAGNOSIS"],
              bordered: [{}, { border: true }],
              showHideBtn: [
                {
                  display: true,
                  OpenFontAwsomeicon: "fa-regular fa-user",
                  CloseFontAwsomeicon: "fa-regular fa-ban",
                  OpenFontAwsomeiconColor: "purple",
                  CloseFontAwsomeiconColor: "red",
                  ByDefaultBehaviour: "open",
                },
                {
                  display: true,
                  OpenFontAwsomeicon: "fa-regular fa-user",
                  CloseFontAwsomeicon: "fa-regular fa-ban",
                  OpenFontAwsomeiconColor: "purple",
                  CloseFontAwsomeiconColor: "red",
                  ByDefaultBehaviour: "open",
                },
                {
                  display: true,
                  OpenFontAwsomeicon: "fa-regular fa-user",
                  CloseFontAwsomeicon: "fa-regular fa-ban",
                  OpenFontAwsomeiconColor: "purple",
                  CloseFontAwsomeiconColor: "red",
                  ByDefaultBehaviour: "open",
                },
                {
                  display: true,
                  OpenFontAwsomeicon: "fa-regular fa-user",
                  CloseFontAwsomeicon: "fa-regular fa-ban",
                  OpenFontAwsomeiconColor: "purple",
                  CloseFontAwsomeiconColor: "red",
                  ByDefaultBehaviour: "open",
                },
              ],
              logo: [
                {
                  display: true,
                  logoPosition: "Start",
                  logo: "fa-solid fa-location-dot",
                  logoColor: "black",
                },
                {
                  display: true,
                  logoPosition: "End",
                  logo: "fa-solid fa-link",
                  logoColor: "blue",
                },
                {
                  display: true,
                  logoPosition: "Both",
                  logo: [
                    "fa-solid fa-code-branch",
                    "fa-solid fa-hexagon-nodes",
                  ],
                  logoColor: ["purple", "green"],
                },
                {
                  display: false,
                },
              ],
              striping: [
                {
                  stripped: true,
                  reversed: false,
                  colors: [
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(0, 191, 255, 0.35)",
                    "rgba(0, 191, 255, 0.35)",
                  ],
                },
                {
                  stripped: false,
                },
                {
                  stripped: false,
                },
                {
                  stripped: true,
                  reversed: true,
                  colors: [
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(0, 191, 255, 0.35)",
                    "rgba(0, 191, 255, 0.35)",
                  ],
                },
              ],
              link: [""],
              shapes: [
                "rounded_right",
                "rounded_vertices",
                "rounded_left",
                "rounded_bottom",
              ],
              content_id: [
                "on_line_content_1",
                "on_line_content_2",
                "on_line_content_3",
                "on_line_content_4",
              ],
              content_details: [
                "SYMPTOMS",
                "VISIT",
                "DIAGNOSTIC TESTS",
                "DIAGNOSIS",
              ],
              color: [
                "Common_onLineContent_font",
                "Common_onLineContent_font",
                "Common_onLineContent_font",
                "Common_onLineContent_font",
              ],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
              ],
              bottom_point_position_onLine: [false, false, false, true],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
              ],
              bottom_Line_postion: ["Level_6", "Level_7", "Level_8", "Level_7"],
              bottom_shape_positions: [
                {
                  levels: ["Level_6"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_7"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_8"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_7"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc305",
              timlines: [
                {
                  content: "_?? days from symptoms",
                  height: "Level_3",
                  show_border: false,
                  starting: "on_line_content_1",
                  ending: "on_line_content_2",
                },
                {
                  content: "_?? days from results",
                  height: "Level_10",
                  show_border: false,
                  starting: "on_line_content_2",
                  ending: "on_line_content_3",
                },
                {
                  content: "_?? days from results",
                  height: "Level_3",
                  show_border: false,
                  starting: "on_line_content_3",
                  ending: "on_line_content_4",
                },
                {
                  content: "_?? days from symptoms",
                  height: "Level_18",
                  show_border: false,
                  starting: "on_line_content_1",
                  ending: "on_line_content_4",
                },
              ],
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "Treatment",
      configurations: {
        title_color: "#304c8c",
        line_right: true,
        line_color: "white",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: false,
          },
          content: {
            logo_heading: ["", ""],
            logo_heading_color: ["#a334c8", "Common_transparent"],
            logo_heading_border_color: ["#a334c8", "Common_transparent"],
            logo_color: ["#a334c8", "Common_transparent"],
            logo_titles_config: [
              {
                logo_title: [
                  "Neurologist",
                  "Gynecologist",
                  "Nurse",
                  "Other Specialists",
                ],
                links: [""],
                logo_id_name: "logo_title_id5",
                logo_detail: [
                  "Neurologist",
                  "Gynecologist",
                  "Nurse",
                  "Other Specialists",
                ],
                logo_title_background_color: [
                  "white",
                  "white",
                  "white",
                  "white",
                ],
                logo_title_border: [true, true, true, true],
                logo_title_border_color: [
                  "#a334c8",
                  "#a334c8",
                  "#a334c8",
                  "#a334c8",
                ],
                logo_title_color: ["#a334c8", "#a334c8", "#a334c8", "#a334c8"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Neurologist"],
                links: [""],
                logo_id_name: "logo_title_id6",
                logo_detail: ["Neurologist"],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            line_right: false,
            line_color: "Common_SubHeader_lineRight",
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id7",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
            },
            warning_logos: [
              {
                target_On_Line_Content: "on_line_content_5",
                fontAwsomeIcon: "fa-solid fa-exclamation",
                fontAwsomeIconColor: "white",
                position: "end",
                openBy: "click",
                warningColor: "#fb2932",
                warningCircleConfig: {
                  display: true,
                  circleColor: "#fb2932",
                  circleNumber: "1",
                  circleBorder: "#2323239c",
                  circleNumberColor: "white",
                },
                Tooltip_content_HTML:
                  "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                Tooltip_content_CSS:
                  ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
              },
            ],
            on_line_content_configuration: {
              content: ["ST DMT SELECTION", "DMT INITIATION"],
              striping: [
                {
                  stripped: false,
                  reversed: false,
                  colors: [
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(0, 191, 255, 0.35)",
                    "rgba(0, 191, 255, 0.35)",
                  ],
                },
              ],
              link: [""],
              shapes: ["rounded_sm", "rounded_reverse_vertices"],
              content_id: ["on_line_content_5", "on_line_content_6"],
              content_details: ["ST DMT SELECTION", "DMT INITIATION"],
              color: ["Common_onLineContent_font", "Common_onLineContent_font"],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
              ],
              bottom_point_position_onLine: [false, true],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
              ],
              bottom_Line_postion: ["Level_7", "Level_10"],
              bottom_shape_positions: [
                {
                  levels: ["Level_7"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_7", "Level_9", "Level_10"],
                  color: [
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                  ],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc305",
              timlines: [
                {
                  content: "_?? days from diagnosis",
                  height: "Level_10",
                  show_border: false,
                  starting: "on_line_content_4",
                  ending: "on_line_content_5",
                },
                {
                  content: "_?? days from DMT choice",
                  height: "Level_3",
                  show_border: false,
                  starting: "on_line_content_5",
                  ending: "on_line_content_6",
                },
              ],
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "Follow-Up",
      configurations: {
        title_color: "#304c8c",
        line_right: true,
        line_color: "white",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: false,
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
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
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
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            line_right: false,
            line_color: "Common_SubHeader_lineRight",
            connectingBottomText: [
              {
                target_On_Line_Content: "on_line_content_8",
                position: "start",
                text: "1 alla settimana",
                textDetail: "1 alla settimana x 3 settimane",
                textColor: "black",
                borderColor: "black",
                height: "Level_1",
              },
            ],
            connecting_Circle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_7",
                  ending: "on_line_content_8",
                  start_from: "start",
                  end_from: "end",
                  border_thickness: "Level_10",
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
            warning_logos: [
              {
                target_On_Line_Content: "on_line_content_7",
                fontAwsomeIcon: "fa-solid fa-exclamation",
                fontAwsomeIconColor: "white",
                position: "end",
                warningColor: "#fb2932",
                warningCircleConfig: {
                  display: true,
                  circleColor: "#fb2932",
                  circleNumber: "2",
                  circleBorder: "#2323239c",
                  circleNumberColor: "white",
                },
              },
            ],
            connecting_Text_Line: {
              display: false,
              connections: [
                {
                  starting: "on_line_content_4",
                  ending: "on_line_content_5",
                  start_from: "start",
                  end_from: "end",
                  line_Thickness: "Level_1",
                  line_Position: "Level_1",
                  text: "procedure pre-trettamento",
                  text_Position: "middle",
                  text_color: "black",
                  line_color: "black",
                },
              ],
            },
            on_line_content_configuration: {
              content: ["VISIT", "TX CONTINUES"],
              striping: [
                {
                  stripped: false,
                  reversed: false,
                  colors: [
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(0, 191, 255, 0.35)",
                    "rgba(0, 191, 255, 0.35)",
                  ],
                },
              ],
              link: [""],
              shapes: ["rounded_top", "rounded_top_right"],
              content_id: ["on_line_content_7", "on_line_content_8"],
              content_details: ["ST DMT SELECTION", "DMT INITIATION"],
              color: ["Common_onLineContent_font", "Common_onLineContent_font"],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
              ],
              bottom_point_position_onLine: [true, true],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
              ],
              bottom_Line_postion: ["Level_7", "Level_9"],
              bottom_shape_positions: [
                {
                  levels: ["Level_7"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_6", "Level_7", "Level_8", "Level_9"],
                  color: [
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                  ],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc305",
              timlines: [
                {
                  content: "_?? days from DMT initiation",
                  height: "Level_10",
                  show_border: false,
                  starting: "on_line_content_5",
                  ending: "on_line_content_7",
                },
                {
                  content: "6 months wihout events",
                  height: "Level_3",
                  show_border: false,
                  starting: "on_line_content_7",
                  ending: "on_line_content_8",
                },
              ],
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "Treatment",
      configurations: {
        title_color: "#304c8c",
        line_right: false,
        line_color: "white",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: false,
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
                logo_title: ["Hidden"],
                links: [""],
                logo_id_name: "logo_title_id9",
                logo_detail: ["Common_transparent"],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [false],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Hidden"],
                links: [""],
                logo_id_name: "logo_title_id10",
                logo_detail: [""],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [false],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            line_right: false,
            line_color: "Common_SubHeader_lineRight",
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id7",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
            },
            ToolTip_Creation: [
              {
                display: true,
                content_id: "on_line_rectangle_1",
                vertical_position: "bottom",
                horizontal_position: "left",
                openBy: "hover",
                content_HTML:
                  "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                content_CSS:
                  ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
              },
            ],
            connecting_Rectangle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_7",
                  start_from_starting: false,
                  ending: "on_line_content_10",
                  end_from_ending: true,
                  height: "Level_23",
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
                    content: [
                      {
                        text: "PROGRESSION SUSPICION",
                        textColor: "white",
                        textDetail: "PROGRESSION SUSPICION",
                      },
                      {
                        text: "PROGRESSION DMT SELECTION",
                        textColor: "black",
                        textDetail: "PROGRESSION DMT SELECTION",
                        rectangleTooltipId: "on_line_rectangle_2",
                        background_color: "Common_onLineContent_Background",
                      },
                      {},
                    ],
                  },
                },
                {
                  starting: "on_line_content_7",
                  start_from_starting: false,
                  ending: "on_line_content_10",
                  end_from_ending: true,
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
                    content: [
                      {
                        text: "RELAPSE",
                        textColor: "white",
                        textDetail: "RELAPSE",
                        rectangleTooltipId: "on_line_rectangle_1",
                      },
                      {
                        text: "HET DMT SELECTION",
                        textColor: "black",
                        textDetail: "HET DMT SELECTION",
                        rectangleTooltipId: "on_line_rectangle_3",
                        background_color: "Common_onLineContent_Background",
                        iconConfig: {
                          display: true,
                          OpenFontAwsomeicon: "fa-regular fa-user",
                          CloseFontAwsomeicon: "fa-regular fa-ban",
                          OpenFontAwsomeiconColor: "purple",
                          CloseFontAwsomeiconColor: "red",
                          ByDefaultBehaviour: "open",
                        },
                        content_conversion: {
                          display: true,
                          bottom_point_color: "Common_onLineContent_Point",
                          bottom_line_color: "Common_onLineContent_Line",
                          bottom_Line_postion: "Level_9",
                          bottom_shape_positions: {
                            levels: [
                              "Level_6",
                              "Level_7",
                              "Level_8",
                              "Level_9",
                            ],
                            color: [
                              "Common_onLineContent_Shape",
                              "Common_onLineContent_Shape",
                              "Common_onLineContent_Shape",
                              "Common_onLineContent_Shape",
                            ],
                          },
                          logo_heading: "",
                          logo_heading_color: "#a334c8",
                          logo_heading_border_color: "#a334c8",
                          logo_color: "#a334c8",
                          logo_titles_config: {
                            logo_title: [
                              "Neurologist",
                              "Gynecologist",
                              "Nurse",
                              "Other Specialists",
                            ],
                            links: [""],
                            logo_id_name: "on_line_rectangle_logo_title_id1",
                            logo_detail: [
                              "Neurologist",
                              "Gynecologist",
                              "Nurse",
                              "Other Specialists",
                            ],
                            logo_title_background_color: [
                              "white",
                              "white",
                              "white",
                            ],
                            logo_title_border_color: [
                              "#a334c8",
                              "#a334c8",
                              "#a334c8",
                            ],
                            logo_title_color: [
                              "#a334c8",
                              "#a334c8",
                              "#a334c8",
                              "#a334c8",
                            ],
                            top_down_arrow: {
                              display: true,
                              arrow_color: "#a334c8",
                              line_color: "#a334c8",
                            },
                          },
                        },
                      },
                      {
                        text: "TX CONTINUES",
                        textColor: "black",
                        textDetail: "TX CONTINUES",
                        rectangleTooltipId: "on_line_rectangle_4",
                        background_color: "Common_onLineContent_Background",
                        content_conversion: {
                          display: false,
                          bottom_point_color: "Common_onLineContent_Point",
                          bottom_line_color: "Common_onLineContent_Line",
                          bottom_Line_postion: "Level_9",
                          bottom_shape_positions: {
                            levels: [
                              "Level_6",
                              "Level_7",
                              "Level_8",
                              "Level_9",
                            ],
                            color: [
                              "Common_onLineContent_Shape",
                              "Common_onLineContent_Shape",
                              "Common_onLineContent_Shape",
                              "Common_onLineContent_Shape",
                            ],
                          },
                          logo_heading: "",
                          logo_heading_color: "#a334c8",
                          logo_heading_border_color: "#a334c8",
                          logo_color: "#a334c8",
                          logo_titles_config: {
                            logo_title: [
                              "Neurologist",
                              "Gynecologist",
                              "Nurse",
                              "Other Specialists",
                            ],
                            links: [""],
                            logo_id_name: "on_line_rectangle_logo_title_id1",
                            logo_detail: [
                              "Neurologist",
                              "Gynecologist",
                              "Nurse",
                              "Other Specialists",
                            ],
                            logo_title_background_color: [
                              "white",
                              "white",
                              "white",
                              "white",
                            ],
                            logo_title_border_color: [
                              "#a334c8",
                              "#a334c8",
                              "#a334c8",
                              "#a334c8",
                            ],
                            logo_title_color: [
                              "#a334c8",
                              "#a334c8",
                              "#a334c8",
                              "#a334c8",
                            ],
                            top_down_arrow: {
                              display: true,
                              arrow_color: "#a334c8",
                              line_color: "#a334c8",
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  starting: "on_line_content_8",
                  start_from_starting: false,
                  ending: "on_line_content_10",
                  end_from_ending: true,
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
                    direction: "reverse",
                  },
                },
              ],
              color: ["#58e3d2", "#58e3d2", "#58e3d2"],
            },
            on_line_content_configuration: {
              content: ["Hidden", "Hidden"],
              striping: [
                {
                  stripped: false,
                  reversed: false,
                  colors: [
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(255, 255, 255, 0.6)",
                    "rgba(0, 191, 255, 0.35)",
                    "rgba(0, 191, 255, 0.35)",
                  ],
                },
              ],
              link: [""],
              shapes: ["rounded_bottom_right", "rounded_lg"],
              content_id: ["on_line_content_9", "on_line_content_10"],
              content_details: ["", ""],
              color: ["Common_transparent", "Common_transparent"],
              background_shadow: [false, false],
              background_color: ["Common_transparent", "Common_transparent"],
              bottom_point_color: ["Common_transparent", "Common_transparent"],
              bottom_point_position_onLine: [false, false],
              bottom_line_color: ["Common_transparent", "Common_transparent"],
              bottom_Line_postion: ["Level_1", "Level_1"],
              bottom_shape_positions: [],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc305",
              timlines: [
                {
                  content: "2.3 - 3.6 years with some DMT",
                  height: "Level_18",
                  show_border: false,
                  starting: "on_line_content_6",
                  ending: "on_line_content_9",
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

const footerLabels = JSON_Data.footer.footer_label;
const footerKeys = Object.keys(footerLabels)
  .filter((key) => {
    const index = parseInt(key.replace("footer_", "").replace("_label", ""));
    return index >= 1 && index <= 10;
  })
  .sort((a, b) => {
    const ia = parseInt(a.replace("footer_", "").replace("_label", ""));
    const ib = parseInt(b.replace("footer_", "").replace("_label", ""));
    return ia - ib;
  });

const footerLineCount = footerKeys.length;

let currentlyOpenTooltip = null;

function closeAllTooltips() {
  if (currentlyOpenTooltip && typeof currentlyOpenTooltip.hide === "function") {
    try {
      currentlyOpenTooltip.hide();
      currentlyOpenTooltip.isOpen = false;
    } catch (e) {}
  }
  currentlyOpenTooltip = null;
}

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
    z-index: 2;
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
    const { title, configurations, sub_groups, start_content } = component;
    // === Header Section ===
    const showParentCollapse = configurations?.collapsabile === true;
    const parentIconStyle = showParentCollapse
      ? ""
      : "style='opacity:0; pointer-events:none;'";

    const displayStart = start_content?.display === true;
    const logoGradient =
      resolveColor(start_content?.configurations?.logo_color, colors) ||
      "linear-gradient(to right top, #2394b9 10%, #5df3e4)";
    const logoBorder =
      resolveColor(start_content?.configurations?.logo_border_color, colors) ||
      "#2394b9";
    const logoTitleColor =
      resolveColor(start_content?.configurations?.logo_title_color, colors) ||
      "white";
    const logoBackground =
      resolveColor(
        start_content?.configurations?.logo_background_color,
        colors
      ) || "linear-gradient(to right top, #2394b9 10%, #5df3e4)";

    let html = `<div class="Slide-box ${uniqueClassName}">\n`;
    html += `<h1 title="${title}">
    <i class="fa-regular fa-square-caret-right" ${parentIconStyle}></i> 
    ${title}
  </h1>\n`;

    html += `<div class="sub-groups">\n`;

    if (displayStart) {
      html += `
        <div class="${uniqueClassName}-start-block">
          <div class="icon-plus-name-inner">
            <i class="fa-solid fa-user start-avatar" aria-hidden="true"></i>
            <p class="start-pill ${start_content.link ? "Div-link" : ""}" ${
        start_content.link
          ? `onclick="window.open('${start_content.link}', '_blank')"`
          : ""
      } title="${limitText(start_content?.logo_title_detail, 280)}">
              ${limitText(start_content?.logo_title, 12)}
            </p>
          </div>
        </div>
      `;
    }

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
      ${limitText(sg.title, 20)}
    </h2>\n`;

      if (direction) {
        // Above-line content
        if (sg.content.above_line_content?.content?.length) {
          html += `<div class="${uniqueClassName}-above-line-content-${
            idx + 1
          } above-line-content">\n`;

          sg.content.on_line_content_configuration.content.forEach((c, i) => {
            const onLine = sg.content.on_line_content_configuration;
            const contentId = onLine.content_id?.[i] || "";
            const link = onLine.link?.[i];
            const hasShadow = onLine.background_shadow?.[i] ?? true;
            const hasLink = link && link.trim() !== "";
            const contentDetail = onLine.content_details?.[i] || "";
            const isStriped = onLine?.striping?.[i]?.stripped;

            // 🔥 Logo config (safe & simple)
            const logoCfg = onLine.logo?.[i] || {};
            const displayLogo = logoCfg.display === true && logoCfg.logo;

            let logoStart = "";
            let logoEnd = "";

            if (displayLogo) {
              if (logoCfg.logoPosition === "Start") {
                logoStart = `<i class="${
                  logoCfg.logo
                }" style="color:${resolveColor(
                  logoCfg.logoColor,
                  "black"
                )}"></i>`;
              }
              if (logoCfg.logoPosition === "End") {
                logoEnd = `<i class="${
                  logoCfg.logo
                }" style="color:${resolveColor(
                  logoCfg.logoColor,
                  "black"
                )}"></i>`;
              }
              if (logoCfg.logoPosition === "Both") {
                const first = Array.isArray(logoCfg.logo)
                  ? logoCfg.logo[0]
                  : logoCfg.logo;
                const second = Array.isArray(logoCfg.logo)
                  ? logoCfg.logo[1]
                  : logoCfg.logo;

                const firstColor = Array.isArray(logoCfg.logoColor)
                  ? logoCfg.logoColor[0]
                  : logoCfg.logoColor || "black";
                const secondColor = Array.isArray(logoCfg.logoColor)
                  ? logoCfg.logoColor[1]
                  : logoCfg.logoColor || "black";

                logoStart = `<i class="${first}" style="color:${firstColor}"></i>`;
                logoEnd = `<i class="${second}" style="color:${secondColor}"></i>`;
              }
            }

            html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
              i + 1
            }" id="${contentId}" style="position:relative;">`;

            html += `<h6
  title="${limitText(contentDetail, 280)}"
  class="${hasShadow ? "box-shadow-box" : ""}${hasLink ? " Div-link" : ""}${
              isStriped ? " striped" : ""
            }"
  ${hasLink ? ` onclick="window.open('${link}', '_blank')"` : ""}
>
  ${logoStart}
  <span>${limitText(c, 15)}</span>
  ${logoEnd}
</h6>`;

            html += `</div>`;
          });

          html += `</div>\n`;
        }
        // On-line content
        html += `<div class="subgroups-on-line">\n`;

        sg.content.on_line_content_configuration.content.forEach((c, i) => {
          const onLine = sg.content.on_line_content_configuration;
          const contentId = onLine.content_id?.[i] || "";
          const link = onLine.link?.[i];
          const hasShadow = onLine.background_shadow?.[i] ?? true;
          const hasLink = link && link.trim() !== "";
          const contentDetail = onLine.content_details?.[i] || "";
          const isStriped = onLine.striping?.[i]?.stripped;

          // 🔥 Logo config (safe & simple)
          const logoCfg = onLine.logo?.[i] || {};
          const displayLogo = logoCfg.display === true && logoCfg.logo;

          let logoStart = "";
          let logoEnd = "";

          if (displayLogo) {
            if (logoCfg.logoPosition === "Start") {
              logoStart = `<i class="${logoCfg.logo}" style="color:${
                logoCfg.logoColor || "black"
              }"></i>`;
            }
            if (logoCfg.logoPosition === "End") {
              logoEnd = `<i class="${logoCfg.logo}" style="color:${
                logoCfg.logoColor || "black"
              }"></i>`;
            }
            if (logoCfg.logoPosition === "Both") {
              const first = Array.isArray(logoCfg.logo)
                ? logoCfg.logo[0]
                : logoCfg.logo;
              const second = Array.isArray(logoCfg.logo)
                ? logoCfg.logo[1]
                : logoCfg.logo;

              const firstColor = Array.isArray(logoCfg.logoColor)
                ? logoCfg.logoColor[0]
                : logoCfg.logoColor || "black";
              const secondColor = Array.isArray(logoCfg.logoColor)
                ? logoCfg.logoColor[1]
                : logoCfg.logoColor || "black";

              logoStart = `<i class="${first}" style="color:${firstColor}"></i>`;
              logoEnd = `<i class="${second}" style="color:${secondColor}"></i>`;
            }
          }

          html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
            i + 1
          }" id="${contentId}" style="position:relative;">\n`;

          html += `
    <h6
      title="${limitText(contentDetail, 280)}"
      class="${hasShadow ? "box-shadow-box" : ""}${hasLink ? " Div-link" : ""}${
            isStriped ? " striped" : ""
          }"
      ${hasLink ? ` onclick="window.open('${link}', '_blank')"` : ""}
    >
      ${logoStart}
      <span>${limitText(c, 20)}</span>
      ${logoEnd}
    </h6>
  `;

          html += `</div>\n`;
        });

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
        const contentIds = sg.content.on_line_content_configuration.content_id;
        const contentId = contentIds[i];

        const logoHeading = sg.content.logo_heading[i];
        const headings = config.logo_title;
        const logoId = config.logo_id_name;
        const links = config.links;
        const logoDetails = config.logo_detail;

        html += `<div class="icon_plus_name icon_plus_name_${
          i + 1
        }" data-midtop-for="${contentId}">\n`;

        if (logoHeading) {
          html += `<span class="span-${i + 1}">${limitText(
            logoHeading,
            10
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
      >${limitText(txt, 20)}</p>\n`;
            }
          });

          html += `</div>\n`;
        }
        // On-line content
        html += `<div class="subgroups-on-line">\n`;

        sg.content.on_line_content_configuration.content.forEach((c, i) => {
          const onLine = sg.content.on_line_content_configuration;
          const contentId = onLine.content_id?.[i] || "";
          const link = onLine.link?.[i];
          const hasShadow = onLine.background_shadow?.[i] ?? true;
          const hasLink = link && link.trim() !== "";
          const contentDetail = onLine.content_details?.[i] || "";
          const isStriped = onLine.striping?.[i]?.stripped;

          // 🔥 Logo config (safe & simple)
          const logoCfg = onLine.logo?.[i] || {};
          const displayLogo = logoCfg.display === true && logoCfg.logo;

          let logoStart = "";
          let logoEnd = "";

          if (displayLogo) {
            if (logoCfg.logoPosition === "Start") {
              logoStart = `<i class="${
                logoCfg.logo
              }" style="color:${resolveColor(
                logoCfg.logoColor,
                "black"
              )}"></i>`;
            }
            if (logoCfg.logoPosition === "End") {
              logoEnd = `<i class="${logoCfg.logo}" style="color:${resolveColor(
                logoCfg.logoColor,
                "black"
              )}"></i>`;
            }
            if (logoCfg.logoPosition === "Both") {
              const first = Array.isArray(logoCfg.logo)
                ? logoCfg.logo[0]
                : logoCfg.logo;
              const second = Array.isArray(logoCfg.logo)
                ? logoCfg.logo[1]
                : logoCfg.logo;

              const firstColor = Array.isArray(logoCfg.logoColor)
                ? logoCfg.logoColor[0]
                : resolveColor(logoCfg.logoColor, "black");
              const secondColor = Array.isArray(logoCfg.logoColor)
                ? logoCfg.logoColor[1]
                : resolveColor(logoCfg.logoColor, "black");

              logoStart = `<i class="${first}" style="color:${resolveColor(
                firstColor,
                "black"
              )}"></i>`;
              logoEnd = `<i class="${second}" style="color:${resolveColor(
                secondColor,
                "black"
              )}"></i>`;
            }
          }

          html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
            i + 1
          }" id="${contentId}" style="position:relative;">\n`;

          html += `
    <h6
      title="${limitText(contentDetail, 280)}"
      class="${hasShadow ? "box-shadow-box" : ""}${hasLink ? " Div-link" : ""}${
            isStriped ? " striped" : ""
          }"
      ${hasLink ? ` onclick="window.open('${link}', '_blank')"` : ""}
    >
      ${logoStart}
      <span>${limitText(c, 20)}</span>
      ${logoEnd}
    </h6>
  `;

          html += `</div>\n`;
        });

        html += `</div>\n`;
      }

      html += `</div>\n`; // End sub-group-div
    });

    html += `</div>\n</div>\n`; // End sub-groups and Slide-box

    // === CSS ===
    let css = `

    .showHideBtn {
        position:absolute;
        right:0px;
        width:15px;
        height:15px;
        top:-17px;
        cursor:pointer;
        background:white;
        border-radius:2px;
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:5;
        border-width:1px;
        border-style:solid;
    }
    .showHideBtn i {
        font-size:10px;
    }
    .showHideBtn:active {
        transform: scale(.96);
}


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
    width:145px;
    position: absolute;
    display:flex;
    align-items: center;
    z-index:1;
  }


  .${uniqueClassName}-start-block {
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: auto;
    top:${
      direction ? getFontSize(128, 126, 123) : getFontSize(307, 304, 301)
    }px;
    left:10px;
    z-index:2;
  }

  .${uniqueClassName}-start-block .icon-plus-name-inner {
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    width: max-content;
  }

  .${uniqueClassName}-start-block .start-avatar {
    font-size: ${getFontSize(15, 16, 17)}px;
    background: ${logoGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid ${logoBorder};
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .${uniqueClassName}-start-block .start-pill {
    display:inline;
    background: ${logoBackground};
    padding: 6px 10px;
    white-space: nowrap;
    font-size:${getFontSize(9, 10, 11)}px;
    border-radius: 20px;
    color: ${logoTitleColor};
    cursor: ${start_content?.link ? "pointer" : "default"};
    box-shadow: 0 1px 3px rgba(0,0,0,0.12);
    user-select: none;
    position: relative;
    top: -17px;
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
    z-index:1;
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
    width: 145px;
    z-index:4;
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
    width:${getFontSize(125, 125, 125)}px;
    text-align:center;
    position: relative;
    transition:0.1s all;
  }
  .${uniqueClassName} .subgroups-on-line-content h6 i {
    position: absolute;
    display: inline-block;
    vertical-align: middle;
    font-size: ${getFontSize(15, 15, 15)}px;
    top: 50%;
    transform: translateY(-50%);
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
    z-index:1;
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
    z-index:1;
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
            revHeight: ReverseRow === 2 ? 76 : ReverseRow === 3 ? 60 : 82,
            normHeight: [110, 112, 110],
          },
          Level_2: {
            revHeight: ReverseRow === 2 ? 118 : ReverseRow === 3 ? 80 : 102,
            normHeight: [133, 133, 133],
          },
          Level_3: {
            revHeight: ReverseRow === 2 ? 136 : ReverseRow === 3 ? 100 : 122,
            normHeight: [150, 152, 152],
          },
          Level_4: {
            revHeight: ReverseRow === 2 ? 156 : ReverseRow === 3 ? 120 : 142,
            normHeight: [170, 173, 172],
          },
          Level_5: {
            revHeight: ReverseRow === 2 ? 176 : ReverseRow === 3 ? 140 : 162,
            normHeight: [190, 193, 195],
          },
          Level_6: {
            revHeight: ReverseRow === 2 ? 176 : ReverseRow === 3 ? 160 : 182,
            normHeight: [210, 212, 210],
          },
          Level_7: {
            revHeight: ReverseRow === 2 ? 218 : ReverseRow === 3 ? 180 : 202,
            normHeight: [233, 233, 233],
          },
          Level_8: {
            revHeight: ReverseRow === 2 ? 236 : ReverseRow === 3 ? 200 : 222,
            normHeight: [250, 252, 252],
          },
          Level_9: {
            revHeight: ReverseRow === 2 ? 256 : ReverseRow === 3 ? 220 : 242,
            normHeight: [270, 273, 272],
          },
          Level_10: {
            revHeight: ReverseRow === 2 ? 276 : ReverseRow === 3 ? 240 : 262,
            normHeight: [290, 293, 295],
          },
        };

        // Bottom-point overrides
        const bottomOverrides = {
          Level_1: { top: 30, height: 288 },
          Level_2: { top: 30, height: 308 },
          Level_3: { top: 30, height: 328 },
          Level_4: { top: 30, height: 350 },
          Level_5: { top: 30, height: 368 },
          Level_6: { top: 30, height: 388 },
          Level_7: { top: 30, height: 408 },
          Level_8: { top: 30, height: 428 },
          Level_9: { top: 30, height: 450 },
          Level_10: { top: 30, height: 468 },
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
  z-index: 2;
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
        z-index: 3;
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
      const dynamicWidth =
        logoLength * getFontSize(160, 170, 180) + (displayStart ? 50 : 0);
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

      .${uniqueClassName} .${uniqueClassName}-sub-group-div${
          idx + 1
        } #${id} h6 {
          ${shapeStyle}
          ${borderStyle}
          position: relative;
          overflow: visible !important;
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

        const logoCfg = onLine.logo?.[index] || {};
        const displayLogo = logoCfg.display === true && logoCfg.logo;
        const logoPosition = (logoCfg.logoPosition || "").toLowerCase();
        const iconSize = getFontSize(15, 16, 17);
        const iconOffset = Math.round(iconSize / 2) - getFontSize(5, 7, 7);

        // Base icon style for this element
        if (displayLogo) {
          if (logoPosition === "start") {
            css += `
      .${uniqueClassName} .${uniqueClassName}-sub-group-div${
              idx + 1
            } #${id} h6 i:first-of-type {
          left: ${iconOffset}px;
      }
      `;
          }

          if (logoPosition === "end") {
            css += `
      .${uniqueClassName} .${uniqueClassName}-sub-group-div${
              idx + 1
            } #${id} h6 i:first-of-type {
          right: ${iconOffset}px;
      }
      `;
          }

          if (logoPosition === "both") {
            css += `
      .${uniqueClassName} .${uniqueClassName}-sub-group-div${
              idx + 1
            } #${id} h6 i:first-of-type {
          left: ${iconOffset}px;
      }

      .${uniqueClassName} .${uniqueClassName}-sub-group-div${
              idx + 1
            } #${id} h6 i:last-of-type {
          right: ${iconOffset}px;
      }
      `;
          }
        }

        // ---------------------------
        // Striped logic (unchanged)
        // ---------------------------
        if (stripeConfig?.stripped) {
          let degree = stripeConfig?.reversed ? 45 : -45;
          const [c1, c2, c3, c4] = stripeConfig.colors || [
            "rgba(255,255,255,0.5)",
            "rgba(255,255,255,0.5)",
            "rgba(0,191,255,0.15)",
            "rgba(0,191,255,0.15)",
          ];

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
      z-index: 1;
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
      z-index: 1;
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
  z-index:50;
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
  z-index: 2;
  border-bottom-left-radius:10px;
}
.box-shadow-box {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.218);
}
.footer-dark-five-lines {
  position: absolute;
  bottom: 0;
  left: 0;
  height: ${footerLineCount * 20}px;
  display: flex;
  flex-direction: column;
  align-items: end; 
}
.footer-dark-five-lines div {
  background: ${
    JSON_Data.footer.footer_lines_color ||
    "linear-gradient(to bottom, #f5fbfb, #eaf0f0)"
  };
  height: 20px;
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
  width:100px;
  color: #333;
  position:absolute;
  left: -105px;
}
`;

let dynamicFooterCSS = "";

// Add widths for each footer div
footerKeys.forEach((labelKey, idx) => {
  const index = idx + 1;
  const widthKey = `footer_${index}_width`;

  let widthValue = parseFloat(JSON_Data.footer.label_width[widthKey]);
  if (isNaN(widthValue)) widthValue = 70;

  widthValue = Math.max(0, Math.min(200, widthValue));

  dynamicFooterCSS += `
    .footer-dark-five-lines > div:nth-child(${index}) {
      width: ${widthValue}%;
    }
  `;
});

let footerHTML = "";
footerKeys.forEach((key, index) => {
  footerHTML += `
    <div>
      <h4 class="footer-label-${index + 1}">
        ${limitText(footerLabels[key], 30)}
      </h4>
    </div>
  `;
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
          link.crossOrigin = "anonymous";
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

  // all logo elements (DOM nodes). Adjust selector if your ids differ.
  const allChildren = Array.from(
    pptBox.querySelectorAll("[id^='logo_title_id']")
  );
  if (!allChildren.length) {
    // nothing to measure
    midLine.style.width = "0px";
    return;
  }

  // container scroll coordinates (relative to container content)
  const containerScrollLeft = pptBox.scrollLeft;
  const containerWidth = pptBox.clientWidth;
  const containerLeft = containerScrollLeft;
  const containerRight = containerScrollLeft + containerWidth;

  const nodesInfo = allChildren.map((el) => {
    let x = 0;
    let node = el;
    while (node && node !== pptBox && node.offsetParent) {
      x += node.offsetLeft;
      node = node.offsetParent;
    }
    if (node !== pptBox) {
      const elRect = el.getBoundingClientRect();
      const pptRect = pptBox.getBoundingClientRect();
      x = elRect.left - pptRect.left + pptBox.scrollLeft;
    }
    const w = el.offsetWidth || el.getBoundingClientRect().width || 0;
    return { el, left: x, right: x + w, width: w };
  });

  // 1) Prefer the right-most element that is currently visible in the container viewport
  const visibleNodes = nodesInfo.filter(
    (n) => n.right > containerLeft && n.left < containerRight && n.width > 0
  );
  let targetNodeInfo = null;
  if (visibleNodes.length) {
    targetNodeInfo = visibleNodes.reduce(
      (a, b) => (b.right > a.right ? b : a),
      visibleNodes[0]
    );
  } else {
    try {
      const lastSubGroup = JSON_Data.body?.at(-1)?.sub_groups?.at(-1);
      const configs = lastSubGroup?.content?.logo_titles_config || [];
      const lastConfigWithId = configs.filter((c) => c.logo_id_name).at(-1);
      const lastParentId = lastConfigWithId?.logo_id_name || null;

      if (lastParentId) {
        const elById = pptBox.querySelector(`#${CSS.escape(lastParentId)}`);
        if (elById) {
          // find nodeInfo for this element if present
          targetNodeInfo = nodesInfo.find((n) => n.el === elById) || null;
        }
      }
    } catch (err) {
      // ignore and fallback below
      console.warn("adjustMidLineWidth: safe JSON parse failed", err);
    }

    // 3) If still no target, pick the furthest-right element in DOM (max right)
    if (!targetNodeInfo) {
      targetNodeInfo = nodesInfo.reduce(
        (a, b) => (b.right > a.right ? b : a),
        nodesInfo[0]
      );
    }
  }

  if (!targetNodeInfo) {
    midLine.style.width = "0px";
    return;
  }

  // midLine offsetLeft relative to container: similar strategy as above
  let midLeft = 0;
  {
    let node = midLine;
    while (node && node !== pptBox && node.offsetParent) {
      midLeft += node.offsetLeft;
      node = node.offsetParent;
    }
    if (node !== pptBox) {
      // fallback to rect-based correction
      const elRect = midLine.getBoundingClientRect();
      const pptRect = pptBox.getBoundingClientRect();
      midLeft = elRect.left - pptRect.left + pptBox.scrollLeft;
    }
  }

  // compute width we need so that midLine reaches the right edge of targetNode relative to container content
  // optionally subtract small right padding if you want a bit of breathing room (0-10 px)
  const rightPadding = 0;

  // width in pixels relative to container content
  let desiredWidth = Math.max(0, targetNodeInfo.right - midLeft - rightPadding);

  // clamp width between 0 and the full content width starting from midLeft.
  // Need maximum possible content width: you can use the furthest right node in nodesInfo.
  const furthestRight = nodesInfo.reduce(
    (a, b) => (b.right > a ? b.right : a),
    0
  );
  const maxPossibleWidth = Math.max(0, furthestRight - midLeft);

  if (desiredWidth > maxPossibleWidth) desiredWidth = maxPossibleWidth;
  if (desiredWidth < 0) desiredWidth = 0;

  const offset = getFontSize(25, 30, 35);

  desiredWidth = Math.max(0, desiredWidth + offset);
  midLine.style.width = `${Math.round(desiredWidth)}px`;
}

// Usage: call on load and whenever the container scrolls/resizes or content changes
adjustMidLineWidth(JSON_Data);

const pptBoxEl = document.getElementById("PPT-Box");
if (pptBoxEl) {
  // debounce helper to avoid too many layout recalcs
  let _timer = null;
  const debouncedAdjust = () => {
    clearTimeout(_timer);
    _timer = setTimeout(() => adjustMidLineWidth(JSON_Data), 40);
  };
  pptBoxEl.addEventListener("scroll", debouncedAdjust, { passive: true });
  window.addEventListener("resize", debouncedAdjust);
}

adjustMidLineWidth(JSON_Data);

// Adjust Footer Width Dynamically
function adjustFooterWidth(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  const footer = pptBox?.querySelector(".footer-dark-five-lines");
  if (!pptBox || !footer) return;

  // one-time binding guard on pptBox to avoid multiple listeners
  if (!pptBox.__footerWidthBinderAttached) {
    // debounced runner
    let t;
    const runner = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        try {
          adjustFooterWidth(JSON_Data);
        } catch (e) {
          console.warn("adjustFooterWidth runner error", e);
        }
      }, 40);
    };
    pptBox.addEventListener("scroll", runner, { passive: true });
    window.addEventListener("resize", runner);
    pptBox.__footerWidthBinderAttached = true;
  }

  // gather logo nodes (those with id starting with logo_title_id) - as a stable array
  const allChildren = Array.from(
    pptBox.querySelectorAll("[id^='logo_title_id']")
  );
  if (!allChildren.length) {
    footer.style.width = "0px";
    return;
  }

  // container coords for viewport (in content coordinate space)
  const containerScrollLeft = pptBox.scrollLeft;
  const containerWidth = pptBox.clientWidth;
  const viewportLeft = containerScrollLeft;
  const viewportRight = containerScrollLeft + containerWidth;

  // build nodesInfo with left/right relative to container content (offsetLeft accumulation, fallback to rect)
  const nodesInfo = allChildren.map((el) => {
    let left = 0;
    let node = el;
    while (node && node !== pptBox && node.offsetParent) {
      left += node.offsetLeft;
      node = node.offsetParent;
    }
    if (node !== pptBox) {
      // fallback to bounding rect correction
      const elRect = el.getBoundingClientRect();
      const pptRect = pptBox.getBoundingClientRect();
      left = elRect.left - pptRect.left + pptBox.scrollLeft;
    }
    const width =
      el.offsetWidth ||
      (el.getBoundingClientRect && el.getBoundingClientRect().width) ||
      0;
    return { el, left, right: left + width, width };
  });

  // find right-most visible node
  const visibleNodes = nodesInfo.filter(
    (n) => n.right > viewportLeft && n.left < viewportRight && n.width > 0
  );
  let targetNode = null;

  if (visibleNodes.length) {
    targetNode = visibleNodes.reduce((a, b) => (b.right > a.right ? b : a));
  } else {
    try {
      const lastSubGroup = JSON_Data.body?.at(-1)?.sub_groups?.at(-1);
      const configs = lastSubGroup?.content?.logo_titles_config || [];
      const logoIds = configs
        .map((c) => c.logo_id_name)
        .filter((id) => id && id.trim() !== "");
      const lastParentId = logoIds.at(-1) || null;
      if (lastParentId) {
        // safe id selector (use CSS.escape if available)
        const safeId =
          typeof CSS !== "undefined" && CSS.escape
            ? CSS.escape(lastParentId)
            : lastParentId.replace(
                /([#.;?+*~\[\]()>:@!^$\\,{}|\/<>])/g,
                "\\$1"
              );
        const elById = pptBox.querySelector(`#${safeId}`);
        if (elById) {
          targetNode = nodesInfo.find((n) => n.el === elById) || null;
        }
      }
    } catch (err) {
      // ignore and fallback below
      console.warn("adjustFooterWidth: JSON parse fallback failed", err);
    }

    if (!targetNode) {
      targetNode = nodesInfo.reduce(
        (a, b) => (b.right > a.right ? b : a),
        nodesInfo[0]
      );
    }
  }

  if (!targetNode) {
    footer.style.width = "0px";
    return;
  }

  // compute footerLeft relative to container
  let footerLeft = 0;
  {
    let node = footer;
    while (node && node !== pptBox && node.offsetParent) {
      footerLeft += node.offsetLeft;
      node = node.offsetParent;
    }
    if (node !== pptBox) {
      const fRect = footer.getBoundingClientRect();
      const pRect = pptBox.getBoundingClientRect();
      footerLeft = fRect.left - pRect.left + pptBox.scrollLeft;
    }
  }

  // compute logoCount and lastParentId for padding logic (safe)
  let logoCount = 0;
  let lastParentIdForCheck = null;
  try {
    const lastBody = JSON_Data.body?.at(-1);
    const lastSubGroup = lastBody?.sub_groups?.at(-1);
    const configs = lastSubGroup?.content?.logo_titles_config || [];
    const logoIds = configs
      .map((cfg) => cfg.logo_id_name)
      .filter((id) => id && id.trim() !== "");
    logoCount = logoIds.length;
    lastParentIdForCheck = logoIds.at(-1) || null;
  } catch (err) {
    console.warn("adjustFooterWidth: logo count parse failed", err);
  }

  // decide footer width setting and calculate desired width clamped to content bounds
  const footerWidthSetting = (
    JSON_Data.footer?.footer_width || "auto"
  ).toLowerCase();
  if (footerWidthSetting === "default") {
    footer.style.width = "100%";
  } else {
    const rightMost = targetNode.right;
    const offset = getFontSize(20, 30, 36);
    let desiredWidth = Math.max(0, rightMost + offset);
    footer.style.width = `${Math.round(desiredWidth)}px`;
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
                z-index: 3;
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
            z-index: 4;
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

        // also remove any conversion rectangles for this section/sub
        const oldConvRects = pptBox.querySelectorAll(
          `[class*="conversion-rect-sec${sectionIdx}-sub${idx}-"]`
        );
        oldConvRects.forEach((c) => c.remove());

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
          justifyMap[(config?.justify_content || "").toLowerCase()] || "center";

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
          shapeMap[(config?.shape || "").toLowerCase()] ||
          shapeMap["rectangle"];

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
        // inject style for the small square logo above text (only once)
        if (!document.getElementById("rect-icon-style")) {
          const style = document.createElement("style");
          style.id = "rect-icon-style";
          style.innerHTML = `
            .rect-logo {
              position: absolute;
              top: -15px; 
              right: 5px;
              width: 15px;
              height: 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 2px;
              box-sizing: border-box;
              cursor: pointer;
              background: white;
              z-index: 5;
              transition: border-color .12s, transform .08s;
            }
            .rect-logo:active { transform: scale(.96); }
            .rect-logo i { font-size: 10px; line-height: 1; margin-top:1px; }
            .icon-row .wrapper-relative { position: relative; }
          `;
          document.head.appendChild(style);
        }

        document.head.appendChild(styleEl);

        // create main rect container
        const rectDiv = document.createElement("div");
        rectDiv.className = className;

        // Prepare a list to track conversion tasks that must be created AFTER rectDiv is appended
        const conversionTasks = [];
        const thingsToDisplay = [];

        // if config present → add icon row
        if (hasConfig && iconCount > 0) {
          const iconRow = document.createElement("div");
          iconRow.className = "icon-row";

          const contents = Array.isArray(config?.content) ? config.content : [];

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

            const contentItem = contents[iconIdx] || {};

            // If content object is empty, append icon only
            if (!Object.keys(contentItem).length) {
              iconRow.appendChild(iconEl);
              return;
            }

            // normalize content keys (support provided keys)
            const text = contentItem.text || "";
            const textDetail = contentItem.textDetail || text;
            const IdName = contentItem?.rectangleTooltipId;
            const contentConversionShow =
              contentItem?.content_conversion?.display || false;
            const contentConversion = contentItem?.content_conversion;

            // wrapper that contains icon + text
            const wrapper = document.createElement("div");
            wrapper.style.display = "flex";
            wrapper.style.alignItems = "center";
            wrapper.style.justifyContent = "space-between";
            wrapper.style.gap = "4px";

            const p = document.createElement("p");
            p.textContent = limitText(text, 10);
            p.style.color = contentItem.textColor || "white";
            p.style.margin = "0";
            direction ? "" : (p.style.position = "relative");
            if (contentItem?.background_color) {
              p.style.padding = "10px";
              p.classList.add("box-shadow-box");
              p.style.textAlign = "center";
              p.style.borderRadius = "20px";
              p.style.width = "130px";
              p.style.backgroundColor =
                resolveColor(contentItem?.background_color, JSON_Data.colors) ||
                "white";
              p.style.color = contentItem.textColor || "black";
              p.textContent = limitText(text, 20);
            }

            p.style.fontSize = `${getFontSize(9, 10, 11)}px`;
            p.title = textDetail || text;
            if (IdName) p.id = IdName;

            wrapper.appendChild(iconEl);
            wrapper.appendChild(p);
            if (
              contentItem?.iconConfig?.display == true &&
              contentItem?.content_conversion?.display == true
            ) {
              const iconCfg = contentItem.iconConfig;

              wrapper.classList.add("wrapper-relative");

              // SET INITIAL TOGGLE STATE
              const defaultState = (
                iconCfg.ByDefaultBehaviour || "Close"
              ).toLowerCase();
              let isOpen = defaultState === "open";

              // DEFINE UNIQUE RECTANGLE ID NOW (same format as conversionClass later)
              const rectangle_id = contentItem.rectangleTooltipId;

              // STORE INITIAL STATE IN thingsToDisplay
              thingsToDisplay.push({
                rectangle_id,
                isOpen,
              });

              // BUILD THE TOGGLE BUTTON
              const logo = document.createElement("div");
              logo.className = "rect-logo";

              const icon = document.createElement("i");
              logo.appendChild(icon);

              // UPDATE UI FUNCTION
              function updateLogoUI() {
                if (isOpen) {
                  icon.className = iconCfg.OpenFontAwsomeicon;
                  icon.style.color =
                    resolveColor(
                      iconCfg.OpenFontAwsomeiconColor,
                      JSON_Data.colors
                    ) || "black";
                  logo.style.border = `1px solid ${
                    resolveColor(
                      iconCfg.OpenFontAwsomeiconColor,
                      JSON_Data.colors
                    ) || "black"
                  }`;
                } else {
                  icon.className = iconCfg.CloseFontAwsomeicon;
                  icon.style.color =
                    resolveColor(
                      iconCfg.CloseFontAwsomeiconColor,
                      JSON_Data.colors
                    ) || "black";
                  logo.style.border = `1px solid ${
                    resolveColor(
                      iconCfg.CloseFontAwsomeiconColor,
                      JSON_Data.colors
                    ) || "black"
                  }`;
                }
              }

              // INITIAL UPDATE
              updateLogoUI();

              // CLICK TOGGLE
              logo.addEventListener("click", (e) => {
                e.stopPropagation();

                // 1) Toggle state
                isOpen = !isOpen;

                // 2) Update global array
                const stored = thingsToDisplay.find(
                  (t) => t.rectangle_id === rectangle_id
                );
                if (stored) stored.isOpen = isOpen;

                // 3) Find rectangle via ID and toggle it
                const rectId = rectangle_id + "_rectangle";
                const rectEl = document.getElementById(rectId);
                if (rectEl) {
                  rectEl.style.display = isOpen ? "" : "none";
                }

                // 4) Toggle polygon stack using the new ID
                const polygonId = rectangle_id + "_Polygon";
                const polygonEl = document.getElementById(polygonId);
                if (polygonEl) {
                  polygonEl.style.display = isOpen ? "" : "none";
                }

                const lineEl = document.getElementById(rectangle_id + "_Line");
                if (lineEl) lineEl.style.display = isOpen ? "" : "none";

                const pointEl = document.getElementById(
                  rectangle_id + "_Line_Point"
                );
                if (pointEl) pointEl.style.display = isOpen ? "" : "none";

                // 5) Update icon UI
                updateLogoUI();
              });

              wrapper.appendChild(logo);
            }

            iconRow.appendChild(wrapper);
            if (contentConversionShow) {
              conversionTasks.push({
                contentConversion,
                iconIdx,
                targetId: IdName || null,
                wrapperIndex: iconRow.children.length - 1,
                connectionIndex: i,
              });
            }
          });

          rectDiv.appendChild(iconRow);
        }
        pptBox.appendChild(rectDiv);

        let linkPairs = [];
        // --- New Part ---
        if (conversionTasks.length > 0) {
          conversionTasks.forEach((task, tIndex) => {
            const convClass = `conversion-rect-sec${sectionIdx}-sub${idx}-conn${i}-icon${task.iconIdx}`;
            const oldConv = pptBox.querySelector(`.${convClass}`);
            if (oldConv) oldConv.remove();

            let targetEl = task.targetId
              ? document.getElementById(task.targetId)
              : null;

            if (!targetEl) {
              const iconRowEl = rectDiv.querySelector(".icon-row");
              if (iconRowEl) {
                const wrapperEl = iconRowEl.children[task.wrapperIndex];
                if (wrapperEl)
                  targetEl = wrapperEl.querySelector("p") || wrapperEl;
              }
            }
            if (!targetEl) return;

            const targetRect = targetEl.getBoundingClientRect();
            const pptNowRect = pptBox.getBoundingClientRect();

            // MAIN DIV
            const convDiv = document.createElement("div");
            convDiv.className = convClass;
            convDiv.id = task.targetId + "_rectangle";
            convDiv.style.position = "absolute";
            convDiv.style.zIndex = 5;
            linkPairs.push({
              convClass,
              polygonClass: null,
            });

            const convWidth = 145;
            const offSet = 6;

            convDiv.style.left =
              Math.round(
                targetRect.left -
                  pptNowRect.left +
                  targetRect.width / 2 -
                  convWidth / 2
              ) +
              offSet +
              "px";
            convDiv.style.width = "125px";
            convDiv.style.top = `${direction ? 365 : 164}px`;

            const cfg = task.contentConversion;
            const logoCfg = cfg?.logo_titles_config || {};

            const titles = logoCfg.logo_title || [];
            const details = logoCfg.logo_detail || [];
            const bgColors = logoCfg.logo_title_background_color || [];
            const borderColors = logoCfg.logo_title_border_color || [];
            const textColors = logoCfg.logo_title_color || [];
            const idPrefix = logoCfg.logo_id_name || "";

            // UNIQUE CLASS NAME FOR THIS RECTANGLE
            const uniqueRectClass = `icon_plus_name_rectangle_${i}_${task.iconIdx}`;

            const iconPlus = document.createElement("div");
            iconPlus.className = `icon_plus_name ${uniqueRectClass}`;
            iconPlus.style.display = "flex";
            iconPlus.style.flexDirection = "column";
            iconPlus.style.alignItems = "center";

            // USER ICON
            const userIcon = document.createElement("i");
            userIcon.className = `fa-solid fa-user fa-user-rectangle_${i}_${task.iconIdx}`;

            // dynamic user icon colors
            userIcon.style.border = `2px solid ${
              resolveColor(cfg.logo_heading_border_color, JSON_Data.colors) ||
              "#a334c8"
            }`;
            userIcon.style.background =
              resolveColor(cfg.logo_color, JSON_Data.colors) || "#a334c8";
            userIcon.style.position = "relative";
            userIcon.style.webkitBackgroundClip = "text";
            userIcon.style.webkitTextFillColor = "transparent";
            userIcon.style.display = "flex";
            userIcon.style.alignItems = "center";
            userIcon.style.justifyContent = "center";
            userIcon.style.width = "35px";
            userIcon.style.height = "35px";
            userIcon.style.borderRadius = "50%";
            userIcon.style.bottom = "-10px";
            userIcon.style.zIndex = "3";

            iconPlus.appendChild(userIcon);

            // WRAPPER CLASS
            let wrapperClass = "";
            if (titles.length === 1)
              wrapperClass = "icon-plus-name-box icon-plus-name-box-for-one";
            else if (titles.length === 2)
              wrapperClass = "icon-plus-name-box icon-plus-name-box-for-two";
            else if (titles.length === 3)
              wrapperClass = "icon-plus-name-box icon-plus-name-box-for-three";
            else
              wrapperClass = "icon-plus-name-box icon-plus-name-box-for-four";

            const wrapper = document.createElement("div");
            wrapper.className = wrapperClass;
            wrapper.style.position = "relative";
            wrapper.style.zIndex = "5";
            if (idPrefix) wrapper.id = idPrefix;

            // ==== 2×2 PILL GRID ====
            function hasValue(v) {
              return v !== null && v !== undefined && String(v).trim() !== "";
            }

            // Find how many actual items you have
            const itemsCount = Math.max(
              (titles && titles.length) || 0,
              (details && details.length) || 0
            );

            for (let row = 0; row < 2; row++) {
              const rowDiv = document.createElement("div");
              rowDiv.className = "icon-plus-name-box-enclosed-rectangle";
              rowDiv.style.width = "100%";
              rowDiv.style.height = "49%";
              rowDiv.style.display = "flex";
              rowDiv.style.alignItems = "center";
              rowDiv.style.justifyContent = "center";

              for (let col = 0; col < 2; col++) {
                const idx2 = row * 2 + col;

                //  If no data exists for this index → SKIP
                if (idx2 >= itemsCount) continue;
                const title = titles?.[idx2];
                const detail = details?.[idx2];

                //  Skip if both title & detail are empty/undefined
                if (!hasValue(title) && !hasValue(detail)) continue;

                // Build pill
                const pill = document.createElement("p");
                pill.className = `icon-plus-name-paragraph-${i}-${
                  task.iconIdx
                }-${idx2 + 1}`;
                pill.title = hasValue(detail)
                  ? detail
                  : hasValue(title)
                  ? title
                  : "";
                pill.textContent = hasValue(title)
                  ? title
                  : hasValue(detail)
                  ? detail
                  : "";

                pill.style.fontSize = "9px";
                pill.style.margin = "0";
                pill.style.padding = "8px 6px";
                pill.style.borderRadius = "16px";
                pill.style.minWidth = "30px";
                pill.style.whiteSpace = "nowrap";
                pill.style.overflow = "hidden";
                pill.style.textOverflow = "ellipsis";

                pill.style.background =
                  resolveColor(bgColors[idx2], JSON_Data.colors) || "white";

                pill.style.border = `1px solid ${
                  resolveColor(borderColors[idx2], JSON_Data.colors) ||
                  "#a334c8"
                }`;

                pill.style.color = textColors[idx2] || "#000";

                rowDiv.appendChild(pill);
              }

              wrapper.appendChild(rowDiv);
            }

            iconPlus.appendChild(wrapper);
            convDiv.appendChild(iconPlus);
            pptBox.appendChild(convDiv);

            const titleEl = document.getElementById(task.targetId);
            const pptRect = pptBox.getBoundingClientRect();
            const titleRect = titleEl.getBoundingClientRect();
            const reactEl = convDiv.querySelector(".icon_plus_name");
            const rectBoxRect = reactEl.getBoundingClientRect();

            const titleBottomY = titleRect.bottom - pptRect.top;
            const rectangleTopY = rectBoxRect.top - pptRect.top;
            let verticalGap = rectangleTopY - titleBottomY;
            if (!direction) {
              verticalGap =
                titleRect.y - rectBoxRect.y - rectBoxRect.height + 38;
            }
            const styleId = `style-${convClass}`;
            let oldStyle = document.getElementById(styleId);
            if (oldStyle) oldStyle.remove();
            const style = document.createElement("style");
            style.id = styleId;
            const safeClass = convClass.replace(/:/g, "\\:");

            const state = thingsToDisplay.find(
              (t) => t.rectangle_id === task.targetId
            );
            if (state && !state.isOpen) {
              convDiv.style.display = "none";
            }

            // Inject CSS with dynamic height using verticalGap
            style.textContent = `
  .${safeClass}::before {
      content: "";
      position: absolute;
      top: ${direction ? -verticalGap + 10 : "45"}px;
      left: 50%;
      transform: translateX(-50%);
      width: 1px;
      height: ${verticalGap}px;
      background: ${
        resolveColor(cfg.top_down_arrow?.line_color, JSON_Data.colors) ||
        "#a334c8"
      };
      z-index: 2;
  }
  .${safeClass}::after {
      content: "";
      position: absolute;
      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      left: 50%;
      top: ${direction ? -verticalGap + 5 : verticalGap + 40}px;
      z-index: 1;
      transform: translateX(-50%);
      border-${direction ? "bottom" : "top"}: 7px solid ${
              resolveColor(cfg.top_down_arrow?.arrow_color, JSON_Data.colors) ||
              "#a334c8"
            };;
  }
`;

            document.head.appendChild(style);
          });
        }
        // New Part - Polygons
        if (conversionTasks.length > 0) {
          const allowedLevels = [
            "Level_1",
            "Level_2",
            "Level_3",
            "Level_4",
            "Level_5",
            "Level_6",
            "Level_7",
            "Level_8",
            "Level_9",
            "Level_10",
          ];
          const compartmentTop = 510; // vertical placement (tweak if you use different offsets)
          const compartmentHeight = 200; // container height
          const compartmentSize = 20; // distance between shapes vertically
          const SHAPE_W = 13;
          const SHAPE_H = 11;

          // For this connection: look at content[] (each may carry content_conversion)
          const contents = Array.isArray(connection.config?.content)
            ? connection.config.content
            : [];

          contents.forEach((contentItem, contentIdx) => {
            const conv = contentItem?.content_conversion;
            if (!conv || !(conv.display === true || conv.display === "true"))
              return;
            const targetId = contentItem.rectangleTooltipId;

            // bottom_shape_positions may be an object (single) or array (normalize to array)
            let bottomShapePositions =
              conv.bottom_shape_positions || conv.bottom_shape_positions;
            // support both object and array-of-objects
            if (!bottomShapePositions) return;
            if (!Array.isArray(bottomShapePositions)) {
              bottomShapePositions = [bottomShapePositions];
            }
            let targetEl = null;
            const rectTooltipId = contentItem.rectangleTooltipId || null;
            if (rectTooltipId)
              targetEl = document.getElementById(rectTooltipId);

            // fallback: try to find matching wrapper inside rectDiv (if it exists)
            if (!targetEl) {
              const iconRowEl = rectDiv
                ? rectDiv.querySelector(".icon-row")
                : null;
              if (iconRowEl) {
                const wrapper =
                  iconRowEl.children[contentIdx] || iconRowEl.children[0];
                if (wrapper) {
                  targetEl = wrapper.querySelector("p") || wrapper;
                }
              }
            }

            if (!targetEl || !isVisible(targetEl)) {
              const oldClassNamePrefix = `connecting_polygons_rect_${sectionIdx}_${idx}_conn${i}_content${contentIdx}`;
              const oldEls = pptBox.querySelectorAll(
                `[class*="${oldClassNamePrefix}"]`
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

            const pptNow = pptBox.getBoundingClientRect();
            const targetRect = targetEl.getBoundingClientRect();
            const midpointX = targetRect.left + targetRect.width / 2;
            const leftRelativeToPPT = Math.round(midpointX - pptNow.left);

            // For each bottomShapePositions group create a vertical polygon stack container
            bottomShapePositions.forEach((group, groupIdx) => {
              // className must be unique
              const className = `connecting_polygons_rect_${sectionIdx}_${idx}_conn${i}_content${contentIdx}_grp${groupIdx}`;
              linkPairs[linkPairs.length - 1].polygonClass = className;

              // cleanup previous
              const prev = pptBox.querySelector(`.${className}`);
              if (prev) prev.remove();
              const prevStyle = document.querySelector(
                `style[data-conn="${className}"]`
              );
              if (prevStyle) prevStyle.remove();

              // normalize levels array
              let rawLevels = Array.isArray(group.levels) ? group.levels : [];
              const levelsArr = rawLevels
                .map((lv) => (lv || "").toString().trim())
                .filter(
                  (lv, p, self) =>
                    allowedLevels.includes(lv) && self.indexOf(lv) === p
                );

              if (!levelsArr.length) return; // nothing to draw

              const state = thingsToDisplay.find(
                (t) => t.rectangle_id === contentItem.rectangleTooltipId
              );
              // prepare style (vertical container positioned by midpoint)
              const styleEl = document.createElement("style");
              styleEl.setAttribute("data-conn", className);
              styleEl.textContent = `
.${className} {
  position: absolute;
  left: ${leftRelativeToPPT - Math.round(SHAPE_W / 2) - (direction ? 3 : 0)}px;
  top: ${compartmentTop}px;
  width: ${SHAPE_W}px;
  height: ${compartmentHeight}px;
  z-index: 5;
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

              // build container
              const container = document.createElement("div");
              container.className = className;
              container.id = targetId + "_Polygon";
              // create up to 10 compartments (Level_1 .. Level_10)
              for (let levelIndex = 1; levelIndex <= 10; levelIndex++) {
                const inner = document.createElement("div");
                inner.className = "polygon-inner";
                inner.style.top = `${
                  (levelIndex - 1) * compartmentSize +
                  (compartmentSize - SHAPE_H) / 2
                }px`;

                const levelName = `Level_${levelIndex}`;
                if (levelsArr.includes(levelName)) {
                  inner.style.visibility = "visible";

                  // color resolution: group.color can be array or single value
                  let colorVal = null;
                  if (
                    Array.isArray(group.color) &&
                    group.color[levelIndex - 1]
                  ) {
                    colorVal = group.color[levelIndex - 1];
                  } else if (Array.isArray(group.color) && group.color[0]) {
                    colorVal = group.color[0];
                  } else if (group.color) {
                    colorVal = group.color;
                  }

                  let resolvedColor = null;
                  try {
                    if (typeof resolveColor === "function" && colorVal)
                      resolvedColor = resolveColor(colorVal, JSON_Data.colors);
                  } catch (e) {
                    resolvedColor = null;
                  }
                  inner.style.background =
                    resolvedColor || colorVal || "#dcdcdc";
                }

                container.appendChild(inner);
              }
              if (state && !state.isOpen) {
                container.style.display = "none";
              }
              pptBox.appendChild(container);
            });
          });
        }

        if (conversionTasks.length > 0) {
          conversionTasks.forEach((task, tIndex) => {
            linkPairs.forEach((pair) => {
              const rectSelector = direction
                ? `.${pair.convClass}`
                : `#${task.targetId}`;
              const rectEl = document.querySelector(rectSelector);
              const polyEl = document.querySelector(`.${pair.polygonClass}`);

              if (!rectEl || !polyEl) return;

              // Temporarily show hidden elements for measurement
              const wasRectHidden = rectEl.style.display === "none";
              const wasPolyHidden = polyEl.style.display === "none";

              if (wasRectHidden) rectEl.style.display = "";
              if (wasPolyHidden) polyEl.style.display = "";

              // Measure
              const rectBox = rectEl.getBoundingClientRect();
              const polyBox = polyEl.getBoundingClientRect();
              const pptRect = pptBox.getBoundingClientRect();

              // Restore original hidden state
              if (wasRectHidden) rectEl.style.display = "none";
              if (wasPolyHidden) polyEl.style.display = "none";

              const top = rectBox.bottom - pptRect.top;
              const bottom = polyBox.top - pptRect.top;
              const height = bottom - top;

              if (height <= 0) return;

              // Unique IDs for line and point
              const lineId = task.targetId + "_Line";
              const pointId = task.targetId + "_Line_Point";

              // Remove old line & point
              const oldLine = document.getElementById(lineId);
              if (oldLine) oldLine.remove();

              const oldPoint = document.getElementById(pointId);
              if (oldPoint) oldPoint.remove();

              // Colors
              const BottomLineColor =
                resolveColor(
                  task.contentConversion.bottom_line_color,
                  JSON_Data.colors
                ) || "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)";
              const BottomPointColor =
                resolveColor(
                  task.contentConversion.bottom_point_color,
                  JSON_Data.colors
                ) || "linear-gradient(to right top, #207cb2 1%, #41cbc8)";

              // Height offset by levels
              const offsets = [5, 25, 45, 65, 85, 105, 125, 145, 165, 185];
              const levelStr =
                task.contentConversion.bottom_Line_postion || "Level_1";
              const levelNum = parseInt(levelStr.split("_")[1]);
              let LineHeightOffset = offsets[levelNum - 1] ?? offsets[0];

              // Point position adjustment
              let logo_title_num =
                task.contentConversion.logo_titles_config.logo_title.length;
              logo_title_num = Math.max(1, Math.min(logo_title_num, 4));

              const topValues = { 1: 4, 2: 4, 3: 4, 4: 30 };
              const topPx = topValues[logo_title_num] ?? 22;

              // Calculate X position
              const xCenter = rectBox.left + rectBox.width / 2 - pptRect.left;

              // --- Create the vertical line ---
              const lineDiv = document.createElement("div");
              lineDiv.id = lineId;
              lineDiv.style.position = "absolute";
              lineDiv.style.left = xCenter + "px";
              lineDiv.style.top = top + "px";
              lineDiv.style.width = "1px";
              lineDiv.style.height = height + LineHeightOffset + "px";
              lineDiv.style.background = BottomLineColor;
              lineDiv.style.transform = "translateX(-50%)";
              lineDiv.style.zIndex = "3";

              // --- Create the circle point ---
              const pointDiv = document.createElement("div");
              pointDiv.id = pointId;
              pointDiv.style.position = "absolute";
              pointDiv.style.left = xCenter + "px";
              pointDiv.style.top = top - topPx + "px";
              if (!direction) {
                pointDiv.style.top = top - 3 + "px";
              }
              pointDiv.style.width = "5px";
              pointDiv.style.height = "5px";
              pointDiv.style.borderRadius = "50%";
              pointDiv.style.background = BottomPointColor;
              pointDiv.style.transform = "translateX(-50%)";
              pointDiv.style.zIndex = "5";

              pptBox.appendChild(lineDiv);
              pptBox.appendChild(pointDiv);

              // Hide if default state = close
              const state = thingsToDisplay.find(
                (t) => t.rectangle_id === task.targetId
              );
              if (state && !state.isOpen) {
                lineDiv.style.display = "none";
                pointDiv.style.display = "none";
              }
            });
          });
        }
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
            z-index: 5;
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
            z-index: 3;
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
  const allowedLevels = [
    "Level_1",
    "Level_2",
    "Level_3",
    "Level_4",
    "Level_5",
    "Level_6",
    "Level_7",
    "Level_8",
    "Level_9",
    "Level_10",
  ];
  const compartmentTop = 510;
  const compartmentHeight = 200;
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
        const targetEl = document.getElementById(targetId);
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
  z-index: 5;
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
        container.setAttribute("data-target", targetId);

        // Create 5 compartments
        for (let i = 1; i <= 10; i++) {
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
        z-index: 3;
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

function warning_Logo(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("warning_Logo: PPT-Box not found.");
    return;
  }

  // iterate sections
  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, subIdx) => {
      const warns = sg.content?.warning_logos;
      if (!warns || warns.length === 0) {
        // Cleanup old warning badges for this subgroup if no display data
        const oldEls = pptBox.querySelectorAll(
          `[class*="warning-logo-sec${sectionIdx}-sub${subIdx}-"]`
        );
        oldEls.forEach((el) => {
          const styleTag = document.querySelector(
            `style[data-warn="${el.className}"]`
          );
          if (styleTag) styleTag.remove();
          el.remove();
        });
        return;
      }

      // Remove previous badges for this subgroup first
      const oldBadges = pptBox.querySelectorAll(
        `[class*="warning-logo-sec${sectionIdx}-sub${subIdx}-"]`
      );
      oldBadges.forEach((el) => {
        const styleTag = document.querySelector(
          `style[data-warn="${el.className}"]`
        );
        if (styleTag) styleTag.remove();
        el.remove();
      });

      warns.forEach((warn, warnIdx) => {
        try {
          if (!warn || typeof warn !== "object") return;
          const targetId = warn.target_On_Line_Content;
          if (!targetId) return;

          const targetEl = document.getElementById(targetId);
          if (!targetEl) return;
          if (!isVisible(targetEl)) return;

          // Build unique scoped base
          const base = `warning-logo-sec${sectionIdx}-sub${subIdx}-${warnIdx}-${targetId}`;
          const pptRect = pptBox.getBoundingClientRect();
          const tgtRect = targetEl.getBoundingClientRect();

          // cleanup previous with same class
          const old = pptBox.querySelector(`.${base}`);
          const oldStyle = document.querySelector(`style[data-warn="${base}"]`);
          if (old) old.remove();
          if (oldStyle) oldStyle.remove();

          // colors (fall back safely)
          const triColor =
            (typeof resolveColor === "function" &&
              resolveColor(warn.warningColor, JSON_Data.colors)) ||
            warn.warningColor ||
            "#fb2932";
          const iconColor =
            (typeof resolveColor === "function" &&
              resolveColor(warn.fontAwsomeIconColor, JSON_Data.colors)) ||
            warn.fontAwsomeIconColor ||
            "#fff";
          const circleColor = warn.warningCircleConfig?.circleColor
            ? typeof resolveColor === "function"
              ? resolveColor(
                  warn.warningCircleConfig.circleColor,
                  JSON_Data.colors
                )
              : warn.warningCircleConfig.circleColor
            : "#ffeb3b";
          const circleBorderColor = warn.warningCircleConfig?.circleBorder
            ? typeof resolveColor === "function"
              ? resolveColor(
                  warn.warningCircleConfig.circleBorder,
                  JSON_Data.colors
                )
              : warn.warningCircleConfig.circleBorder
            : "#000";
          const circleNumberColor = warn.warningCircleConfig?.circleNumberColor
            ? typeof resolveColor === "function"
              ? resolveColor(
                  warn.warningCircleConfig.circleNumberColor,
                  JSON_Data.colors
                )
              : warn.warningCircleConfig.circleNumberColor
            : "#000";
          const circleLineColor = warn.warningCircleConfig?.circleLineColor
            ? typeof resolveColor === "function"
              ? resolveColor(
                  warn.warningCircleConfig.circleLineColor,
                  JSON_Data.colors
                )
              : warn.warningCircleConfig.circleLineColor
            : "#fb2932";
          const circlePointColor = warn.warningCircleConfig?.circlePointColor
            ? typeof resolveColor === "function"
              ? resolveColor(
                  warn.warningCircleConfig.circlePointColor,
                  JSON_Data.colors
                )
              : warn.warningCircleConfig.circlePointColor
            : "#fb2932";

          // validate number
          let circleNumber = null;
          if (warn.warningCircleConfig?.display) {
            const parsed = parseInt(warn.warningCircleConfig.circleNumber, 10);
            if (!isNaN(parsed) && parsed >= 1 && parsed <= 99)
              circleNumber = String(parsed);
          }

          // compute anchor X
          const pos = String(warn.position || "middle").toLowerCase();
          const computeAnchorX = (rect, part) => {
            if (part === "start") return rect.left - pptRect.left + 20;
            if (part === "end")
              return rect.left - pptRect.left + rect.width - 20;
            return rect.left - pptRect.left + rect.width / 2;
          };
          const anchorX = computeAnchorX(tgtRect, pos);

          // geometry
          const badgeWidth = 34;
          const halfBase = Math.round(badgeWidth / 2.2);
          const triangleHeight = 28;
          const gapAbove = 20;

          const badgeTop = Math.round(
            tgtRect.top - pptRect.top - triangleHeight - gapAbove
          );
          const badgeLeft = Math.round(anchorX);

          // create style scoped
          const styleEl = document.createElement("style");
          styleEl.setAttribute("data-warn", base);
          const iconFs =
            typeof getFontSize === "function" ? getFontSize(12, 13, 14) : 13;
          const circleFs =
            typeof getFontSize === "function" ? getFontSize(8, 9, 10) : 9;

          styleEl.textContent = `
            .${base} {
              position: absolute;
              left: ${badgeLeft}px;
              top: ${badgeTop}px;
              transform: translate(-50%, 0);
              width: ${badgeWidth}px;
              height: ${triangleHeight}px;
              pointer-events: auto;
              z-index: 50;
              box-sizing: border-box;
            }
            .${base}::after{
              content:"";
              position:absolute;
              height:5px;
              width:5px;
              border-radius:50%;
              left:50%;
              bottom:0px;
              background:${circlePointColor};
              transform:translate(-50%,50%);
            }
            .${base}::before{
              content:"";
              position:absolute;
              left:50%;
              bottom:0px;
              border-left:2px solid ${circleLineColor};
              height:19px;
              transform:translate(-50%,100%);
            }
            .${base}__triangle {
              width: 0;
              height: 0;
              margin: 0 auto;
              border-left: ${halfBase}px solid transparent;
              border-right: ${halfBase}px solid transparent;
              border-bottom: ${triangleHeight}px solid ${triColor};
              position: relative;
              pointer-events: auto;
            }
            .${base}__fa {
              position: absolute;
              left: 50%;
              top: ${Math.round(triangleHeight * 0.6)}px;
              transform: translate(-50%, -50%);
              font-size: ${iconFs}px;
              color: ${iconColor};
              pointer-events: none;
            }
            .${base}__circle {
              position: absolute;
              right: -8px;
              top: 16px;
              width: 18px;
              height: 18px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              border:1px solid ${circleBorderColor};
              justify-content: center;
              font-size: ${circleFs}px;
              font-weight: 600;
              color: ${circleNumberColor};
              background: ${circleColor};
              pointer-events: none;
            }
            .${base}__popup {
              display: none;
              position: absolute;
              left: 0%;
              top: calc(100% + 6px);
              z-index: 60;
              pointer-events: auto;
              /* popup initial basic box-sizing so user CSS can override */
              box-sizing: border-box;
            }
          `;
          document.head.appendChild(styleEl);

          // main badge DOM
          const badgeWrap = document.createElement("div");
          badgeWrap.className = base;

          const triDiv = document.createElement("div");
          triDiv.className = `${base}__triangle`;

          const iEl = document.createElement("i");
          (warn.fontAwsomeIcon || "fa-solid fa-exclamation")
            .trim()
            .split(/\s+/)
            .forEach((c) => iEl.classList.add(c));
          iEl.classList.add(`${base}__fa`);

          badgeWrap.appendChild(triDiv);
          badgeWrap.appendChild(iEl);
          if (circleNumber) {
            const circ = document.createElement("div");
            circ.className = `${base}__circle`;
            circ.textContent = circleNumber;
            badgeWrap.appendChild(circ);
          }

          // popup content
          const hasPopupHTML = !!(
            warn.Tooltip_content_HTML &&
            String(warn.Tooltip_content_HTML).trim()
          );
          let popupNode = null;
          if (hasPopupHTML) {
            const popup = document.createElement("div");
            popup.className = `${base}__popup`;
            popup.innerHTML =
              typeof normalizeAppianString === "function"
                ? normalizeAppianString(warn.Tooltip_content_HTML)
                : warn.Tooltip_content_HTML;

            if (warn.Tooltip_content_CSS) {
              const popupStyle = document.createElement("style");
              popupStyle.setAttribute("data-warn", `${base}-popup`);
              // scope this css to the PPT box + popup
              popupStyle.textContent = `#${pptBox.id} .${base}__popup { ${warn.Tooltip_content_CSS} }`;
              document.head.appendChild(popupStyle);
            }
            badgeWrap.appendChild(popup);
            popupNode = popup;
          }

          // append to pptBox
          pptBox.appendChild(badgeWrap);

          // popup API and handlers
          const handlers = [];
          let api = null;

          const showPopup = () => {
            closeAllTooltips();
            if (popupNode) {
              popupNode.style.display = "block";
              // measure or reposition if needed in future - currently absolute positioned relative to badgeWrap
            }
            api.isOpen = true;
            currentlyOpenTooltip = api;
          };

          const hidePopup = () => {
            if (popupNode) popupNode.style.display = "none";
            api.isOpen = false;
            if (currentlyOpenTooltip === api) currentlyOpenTooltip = null;
          };

          // default openBy handling: click unless explicitly "hover"
          const openByRaw = (warn.openBy || "click").toString().toLowerCase();
          const openBy = openByRaw === "hover" ? "hover" : "click";

          if (openBy === "hover") {
            // Hover: show on tri or badge hover, keep open when cursor is over popup
            const onEnter = (ev) => {
              // close other tooltips/popups and open this
              closeAllTooltips();
              showPopup();
            };
            const onLeaveBadge = (ev) => {
              setTimeout(() => {
                if (popupNode) {
                  if (
                    !popupNode.matches(":hover") &&
                    !badgeWrap.matches(":hover")
                  )
                    hidePopup();
                } else {
                  // no popup → nothing to keep open
                  hidePopup();
                }
              }, 120);
            };
            const onPopupLeave = () => {
              hidePopup();
            };

            triDiv.addEventListener("mouseenter", onEnter);
            badgeWrap.addEventListener("mouseenter", onEnter);
            triDiv.addEventListener("mouseleave", onLeaveBadge);
            badgeWrap.addEventListener("mouseleave", onLeaveBadge);
            if (popupNode) {
              popupNode.addEventListener("mouseleave", onPopupLeave);
              popupNode.addEventListener("mouseenter", () => {
                // keep open while hovered
              });
              handlers.push({
                el: popupNode,
                type: "mouseleave",
                fn: onPopupLeave,
              });
              handlers.push({
                el: popupNode,
                type: "mouseenter",
                fn: () => {},
              });
            }

            handlers.push({ el: triDiv, type: "mouseenter", fn: onEnter });
            handlers.push({ el: badgeWrap, type: "mouseenter", fn: onEnter });
            handlers.push({ el: triDiv, type: "mouseleave", fn: onLeaveBadge });
            handlers.push({
              el: badgeWrap,
              type: "mouseleave",
              fn: onLeaveBadge,
            });
          } else {
            // Click mode: toggle popup on badge click. Clicking outside closes it. Clicking inside popup should not close it.
            let isOpen = false;

            const onDocClick = (ev) => {
              if (
                !badgeWrap.contains(ev.target) &&
                !(popupNode && popupNode.contains(ev.target))
              ) {
                isOpen = false;
                hidePopup();
                document.removeEventListener("click", onDocClick);
                document.removeEventListener("keydown", onEsc);
              }
            };

            const onEsc = (ev) => {
              if (ev.key === "Escape" || ev.key === "Esc") {
                isOpen = false;
                hidePopup();
                document.removeEventListener("click", onDocClick);
                document.removeEventListener("keydown", onEsc);
              }
            };

            const onBadgeClick = (ev) => {
              // prevent document click from closing immediately
              ev.stopPropagation();

              // close other open tooltip/popup (but not self if toggling)
              if (currentlyOpenTooltip && currentlyOpenTooltip !== api) {
                closeAllTooltips();
              }

              isOpen = !isOpen;
              if (isOpen) {
                showPopup();
                document.addEventListener("click", onDocClick);
                document.addEventListener("keydown", onEsc);
              } else {
                hidePopup();
                document.removeEventListener("click", onDocClick);
                document.removeEventListener("keydown", onEsc);
              }
            };

            // allow clicking triangle or entire badgeWrap to toggle
            triDiv.addEventListener("click", onBadgeClick);
            badgeWrap.addEventListener("click", onBadgeClick);

            handlers.push({ el: triDiv, type: "click", fn: onBadgeClick });
            handlers.push({ el: badgeWrap, type: "click", fn: onBadgeClick });
          }

          // Expose API so global closeAllTooltips can call hide()
          api = {
            hide: hidePopup,
            show: showPopup,
            get isOpen() {
              return this._isOpen || false;
            },
            set isOpen(v) {
              this._isOpen = !!v;
            },
          };

          // store a small reference on the DOM node (useful for debugging / external control)
          badgeWrap.__warningApi = api;

          // Done - no need to return, but created popup will now behave as required
        } catch (e) {
          console.error("warning_Logo error for", warnIdx, e);
        }
      });
    });
  });
}

warning_Logo(JSON_Data);

function ToolTip_Creation(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("ToolTip_Creation: PPT-Box not found.");
    return;
  }
  const tooltipRegistry = new WeakMap();

  JSON_Data.body.forEach((section, sectionIdx) => {
    if (!section.sub_groups) return;

    section.sub_groups.forEach((sg, subIdx) => {
      const tips = sg.content?.ToolTip_Creation;
      if (!tips || tips.length === 0) return;

      const tooltipPrefix = `tooltip-sec${sectionIdx}-sub${subIdx}-`;

      tips.forEach((tip, tipIdx) => {
        if (!tip || typeof tip !== "object" || !tip.display) return;

        const targetId = tip.content_id;
        if (!targetId) return;
        
        const rawTargetEl = document.getElementById(targetId);
        if (!rawTargetEl) return;

        let targetEl = rawTargetEl;
        if (/^on_line_content/i.test(targetId)) {
          const innerH6 = rawTargetEl.querySelector("h6");
          if (innerH6) {
            targetEl = innerH6;
          }
        }

        const base = `${tooltipPrefix}${tipIdx}-${targetId}`;

        // Normalize positions
        const vPos = (tip.vertical_position || "top").toLowerCase();
        const hPos = (tip.horizontal_position || "right").toLowerCase();

        // openBy: "click" or "hover"; default to "click"
        const openByRaw = (tip.openBy || "click").toString().toLowerCase();
        const openBy = openByRaw === "hover" ? "hover" : "click";

        // CLEANUP previous tooltip tied to this target
        const cleanup = () => {
          const prev = tooltipRegistry.get(targetEl);
          if (!prev) {
            const oldWrapper = pptBox.querySelector(`.${base}`);
            if (oldWrapper) oldWrapper.remove();
            const style = document.querySelector(
              `style[data-tooltip="${base}"]`
            );
            if (style) style.remove();
            const popupStyle = document.querySelector(
              `style[data-tooltip="${base}-popup"]`
            );
            if (popupStyle) popupStyle.remove();
            return;
          }

          try {
            if (prev.wrapper && prev.wrapper.parentNode)
              prev.wrapper.parentNode.removeChild(prev.wrapper);
          } catch (e) {}
          if (prev.styleEls && prev.styleEls.length) {
            prev.styleEls.forEach((el) => {
              if (el && el.parentNode) el.parentNode.removeChild(el);
            });
          }
          if (prev.handlers) {
            prev.handlers.forEach(({ el, type, fn, options }) => {
              try {
                el.removeEventListener(type, fn, options);
              } catch (e) {}
            });
          }
          tooltipRegistry.delete(targetEl);
        };

        cleanup();

        // create tooltip
        const createTooltip = () => {
          const styleEl = document.createElement("style");
          styleEl.setAttribute("data-tooltip", base);
          styleEl.textContent = `
            .${base} {
              position: fixed;
              z-index: 50;
              pointer-events: auto;
            }
          `;
          document.head.appendChild(styleEl);

          const wrapper = document.createElement("div");
          wrapper.className = base;
          const htmlContent = tip.content_HTML || "";
          wrapper.innerHTML =
            typeof normalizeAppianString === "function"
              ? normalizeAppianString(htmlContent)
              : htmlContent;

          // hide initially
          wrapper.style.display = "none";
          wrapper.style.visibility = "hidden";
          pptBox.appendChild(wrapper);

          // optional popup CSS
          const styleEls = [styleEl];
          if (tip.content_CSS) {
            const popupStyle = document.createElement("style");
            popupStyle.setAttribute("data-tooltip", `${base}-popup`);
            popupStyle.textContent = tip.content_CSS;
            document.head.appendChild(popupStyle);
            styleEls.push(popupStyle);
          }

          // measure & position function (reads current rectangles)
          const measureAndPosition = () => {
            const pptRectNow = pptBox.getBoundingClientRect();
            const tgtRectNow = targetEl.getBoundingClientRect();
            const popupRect = wrapper.getBoundingClientRect();
            const TW = popupRect.width,
              TH = popupRect.height;
            const CW = tgtRectNow.width,
              CH = tgtRectNow.height;
            let wrapperY, wrapperX;

            if (vPos === "top") wrapperY = tgtRectNow.top - TH + CH / 3;
            else if (vPos === "middle")
              wrapperY = tgtRectNow.top + CH / 2 - TH / 2;
            else if (vPos === "bottom") wrapperY = tgtRectNow.top + CH / 3;
            else wrapperY = tgtRectNow.top - TH + CH / 3;

            if (hPos === "left") wrapperX = tgtRectNow.left + CW / 3 - TW;
            else if (hPos === "middle")
              wrapperX = tgtRectNow.left - TW / 2 + CW / 2;
            else if (hPos === "right")
              wrapperX = tgtRectNow.left + tgtRectNow.width - CW / 3;
            else wrapperX = tgtRectNow.left - CW / 3 + TW;

            const finalTop = Math.round(wrapperY - pptRectNow.top);
            const finalLeft = Math.round(wrapperX - pptRectNow.left);

            wrapper.style.top = `${finalTop}px`;
            wrapper.style.left = `${finalLeft}px`;
            wrapper.style.visibility = "visible";
          };

          // show/hide helpers
          const show = () => {
            // Before showing this tooltip, close any other tooltip
            closeAllTooltips();

            wrapper.style.display = "block";
            requestAnimationFrame(() => {
              measureAndPosition();
            });
            // mark as currently open for global tracking
            api.isOpen = true;
            currentlyOpenTooltip = api;
          };
          const hide = () => {
            wrapper.style.display = "none";
            api.isOpen = false;
            // if this is the current global tooltip, clear it
            if (currentlyOpenTooltip === api) currentlyOpenTooltip = null;
          };

          // handlers to attach and store for cleanup
          const handlers = [];

          // reposition helper
          const repositionOnScrollOrResize = () => {
            const prevDisplay = wrapper.style.display;
            wrapper.style.display = "block";
            measureAndPosition();
            wrapper.style.display = prevDisplay || "none";
          };

          // add global listeners for repositioning
          window.addEventListener("resize", repositionOnScrollOrResize);
          window.addEventListener("scroll", repositionOnScrollOrResize, true);
          handlers.push({
            el: window,
            type: "resize",
            fn: repositionOnScrollOrResize,
          });
          handlers.push({
            el: window,
            type: "scroll",
            fn: repositionOnScrollOrResize,
            options: true,
          });

          if (openBy === "hover") {
            const onEnter = (ev) => {
              // stop propagation not required for hover
              // ensure only this tooltip opens
              closeAllTooltips();
              show();
            };
            const onLeaveTarget = () => {
              setTimeout(() => {
                if (!wrapper.matches(":hover") && !targetEl.matches(":hover"))
                  hide();
              }, 120);
            };
            const onLeaveWrapper = () => {
              hide();
            };

            targetEl.addEventListener("mouseenter", onEnter);
            targetEl.addEventListener("mouseleave", onLeaveTarget);
            wrapper.addEventListener("mouseleave", onLeaveWrapper);

            handlers.push({ el: targetEl, type: "mouseenter", fn: onEnter });
            handlers.push({
              el: targetEl,
              type: "mouseleave",
              fn: onLeaveTarget,
            });
            handlers.push({
              el: wrapper,
              type: "mouseleave",
              fn: onLeaveWrapper,
            });
          } else {
            // click mode
            let isOpen = false;

            const onDocClick = (ev) => {
              // if click is outside both target and wrapper -> close
              if (
                !wrapper.contains(ev.target) &&
                !targetEl.contains(ev.target)
              ) {
                isOpen = false;
                hide();
                document.removeEventListener("click", onDocClick);
                document.removeEventListener("keydown", onEsc);
              }
            };

            const onEsc = (ev) => {
              if (ev.key === "Escape" || ev.key === "Esc") {
                isOpen = false;
                hide();
                document.removeEventListener("click", onDocClick);
                document.removeEventListener("keydown", onEsc);
              }
            };

            const onWrapperMouseLeave = () => {
              // no auto close on wrapper mouseleave for click mode
            };

            const onTargetClick = (ev) => {
              // Stop propagation so the click that opened the tooltip doesn't immediately bubble to document click handler
              ev.stopPropagation();

              // If some other tooltip is open, close it (note: don't close self - will toggle)
              if (currentlyOpenTooltip && currentlyOpenTooltip !== api) {
                closeAllTooltips();
              }

              isOpen = !isOpen;
              if (isOpen) {
                show();
                measureAndPosition();
                // Attach global listeners to detect outside click / ESC only when open
                // Use capturing=false so clicks inside wrapper are seen by contains() check
                document.addEventListener("click", onDocClick);
                document.addEventListener("keydown", onEsc);
              } else {
                hide();
                document.removeEventListener("click", onDocClick);
                document.removeEventListener("keydown", onEsc);
              }
            };

            targetEl.addEventListener("click", onTargetClick);
            wrapper.addEventListener("mouseleave", onWrapperMouseLeave);

            handlers.push({ el: targetEl, type: "click", fn: onTargetClick });
            handlers.push({
              el: wrapper,
              type: "mouseleave",
              fn: onWrapperMouseLeave,
            });
          }

          // expose a small api for global control
          const api = {
            hide,
            show,
            get isOpen() {
              return this._isOpen || false;
            },
            set isOpen(v) {
              this._isOpen = !!v;
            },
          };

          // store registry for cleanup
          tooltipRegistry.set(targetEl, {
            wrapper,
            styleEls,
            handlers,
            wrapperClass: base,
          });

          // measure once after creation to set initial coordinates (invisible measurement)
          wrapper.style.display = "block";
          wrapper.style.visibility = "hidden";
          requestAnimationFrame(() => {
            measureAndPosition();
            wrapper.style.display = "none";
            wrapper.style.visibility = "visible";
          });

          return api;
        };

        // create tooltip and ignore returned API (internally it stores itself in currentlyOpenTooltip when shown)
        createTooltip();
      });
    });
  });
}

ToolTip_Creation(JSON_Data);

function drawPageBottomShapes(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  if (!pptBox) {
    console.warn("drawPageBottomShapes: PPT-Box not found.");
    return;
  }

  const config = JSON_Data?.Page_Configuration?.bottomShapesConfig;
  if (!config || !config.shapes || config.shapes.length === 0) {
    console.warn("drawPageBottomShapes: bottomShapesConfig missing or empty.");
    return;
  }

  // Ensure pptBox is positioned so absolute children align to it
  const computedPosition = window.getComputedStyle(pptBox).position;
  if (!computedPosition || computedPosition === "static") {
    pptBox.style.position = "relative";
  }

  // Cleanup previous elements / handlers
  const prevParent = pptBox.querySelector(".page-bottom-shapes-parent");
  if (prevParent) prevParent.remove();
  if (window._pptBottomShapesResizeHandler) {
    window.removeEventListener("resize", window._pptBottomShapesResizeHandler);
    window._pptBottomShapesResizeHandler = null;
  }
  if (window._pptBottomShapesScrollHandler) {
    pptBox.removeEventListener("scroll", window._pptBottomShapesScrollHandler);
    window._pptBottomShapesScrollHandler = null;
  }

  const shapes = config.shapes;
  const colors = config.shapesColor || [];
  const texts = config.text || [];
  const textColors = config.textColor || [];

  // Create parent container that will span content width
  const parent = document.createElement("div");
  parent.className = "page-bottom-shapes-parent";
  parent.style.position = "absolute";
  parent.style.left = "0px";
  parent.style.bottom = "100px";
  // parent.style.height = "170px";
  parent.style.zIndex = "3";
  // parent.style.overflow = "hidden";
  parent.style.pointerEvents = "none";
  parent.style.display = "flex";
  parent.style.justifyContent = "space-between";
  parent.style.alignItems = "center";

  // Create two child wrappers (left and right)
  const leftChild = document.createElement("div");
  const rightChild = document.createElement("div");
  [leftChild, rightChild].forEach((c) => {
    c.style.display = "flex";
    c.style.flexDirection = "row";
    c.style.gap = "15px";
    c.style.padding = "0";
    c.style.margin = "0";
    c.style.width = "40px";
    c.style.position = "relative";
    c.style.pointerEvents = "auto";
  });
  leftChild.style.transform = "rotate(90deg)";
  leftChild.style.top = "-135px";
  rightChild.style.transform = "rotate(-90deg)";
  leftChild.className = "page-bottom-shapes-wrapper side-left";
  rightChild.className = "page-bottom-shapes-wrapper side-right";

  // Create shape wrapper + rotated inner shape (prevents layout gap)
  function createShape(i, sideIndex) {
    const shapeType = shapes[i] || "circle";
    const bgColor = resolveColor(colors[i], "#888");
    const label = texts[i] || "";
    const labelColor = resolveColor(textColors[i], "white");

    // outer wrapper takes the rotated footprint so layout doesn't leave gaps
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.justifyContent = "center";
    wrapper.style.overflow = "visible";
    wrapper.style.height = "40px";
    wrapper.style.pointerEvents = "none";
    // wrapper.style.transform =
    //   sideIndex === 0 ? "rotate(90deg)" : "rotate(-90deg)";

    const shape = document.createElement("div");
    shape.className = `bottom-shape-${i}-${shapeType}`;
    shape.innerText = label;
    shape.style.color = labelColor;
    shape.style.fontSize = "10px";
    shape.style.fontWeight = "600";
    shape.style.display = "flex";
    shape.style.alignItems = "center";
    shape.style.justifyContent = "center";
    shape.style.width = "80px";
    shape.style.height = "40px";
    shape.style.background = bgColor;
    shape.style.pointerEvents = "auto";

    if (shapeType === "circle") {
      shape.style.borderTopLeftRadius = "80px";
      shape.style.borderTopRightRadius = "80px";
      shape.style.borderBottomLeftRadius = "0";
      shape.style.borderBottomRightRadius = "0";
    } else if (shapeType === "trapezium") {
      shape.style.clipPath = "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)";
    }
    wrapper.appendChild(shape);
    return wrapper;
  }

  // place shapes (1-2 -> left, 3-4 -> right)
  const leftShapesCount = Math.min(2, shapes.length);
  for (let i = 0; i < leftShapesCount; i++) {
    leftChild.appendChild(createShape(i, 0));
  }
  for (let i = 2; i < Math.min(4, shapes.length); i++) {
    rightChild.appendChild(createShape(i, 1));
  }

  parent.appendChild(leftChild);
  parent.appendChild(rightChild);
  pptBox.appendChild(parent);

  function computeContentWidth() {
    try {
      // selector used in your adjustMidLineWidth
      const allChildren = Array.from(
        pptBox.querySelectorAll("[id^='logo_title_id']")
      );
      if (!allChildren.length) {
        // fallback to scrollWidth (includes full content width)
        return Math.max(pptBox.clientWidth, pptBox.scrollWidth || 0);
      }

      const pptRect = pptBox.getBoundingClientRect();
      const nodesInfo = allChildren.map((el) => {
        const elRect = el.getBoundingClientRect();
        const left = elRect.left - pptRect.left + pptBox.scrollLeft;
        const w = el.offsetWidth || elRect.width || 0;
        return { el, left, right: left + w, width: w };
      });

      // find furthest-right node
      const furthest = nodesInfo.reduce(
        (acc, n) => (n.right > acc ? n.right : acc),
        0
      );
      if (furthest > 0) {
        return Math.max(Math.ceil(furthest + 4), pptBox.clientWidth);
      }

      // fallback
      return Math.max(pptBox.clientWidth, pptBox.scrollWidth || 0);
    } catch (err) {
      console.warn("computeContentWidth failed:", err);
      return Math.max(pptBox.clientWidth, pptBox.scrollWidth || 0);
    }
  }

  // size parent to content width
  function sizeParentToContent() {
    const contentW = computeContentWidth();
    parent.style.width = contentW + "px";
  }
  sizeParentToContent();
  parent.recalcBottomShapes = sizeParentToContent;
  window._pptBottomShapesResizeHandler = function () {
    sizeParentToContent();
  };
  window.addEventListener("resize", window._pptBottomShapesResizeHandler);
  window._pptBottomShapesScrollHandler = function () {
    sizeParentToContent();
  };
  pptBox.addEventListener("scroll", window._pptBottomShapesScrollHandler);
}

drawPageBottomShapes(JSON_Data);

function AddOrRemoveShowHideBtn(Json_Data) {
  const onLineContentData = [];

  if (!Json_Data || !Array.isArray(Json_Data.body)) {
    console.warn("Invalid JSON data");
    return onLineContentData;
  }

  Json_Data.body.forEach((page) => {
    if (!page || page.component !== "Header") return;

    const subGroups = page.sub_groups || [];

    subGroups.forEach((sg) => {
      const onLineCfg = sg?.content?.on_line_content_configuration;
      if (!onLineCfg) return;

      const ids = onLineCfg.content_id || [];
      const showHideArr = onLineCfg.showHideBtn || [];

      ids.forEach((id, index) => {
        const sh = showHideArr[index];

        const display = !!(sh && sh.display === true);
        const show = display;

        let currentDisplay =
          (sh?.ByDefaultBehaviour || "open").toLowerCase() === "open";

        const OpenFontAwsomeicon = sh?.OpenFontAwsomeicon;
        const CloseFontAwsomeicon = sh?.CloseFontAwsomeicon;
        const OpenFontAwsomeiconColor =
          resolveColor(sh?.OpenFontAwsomeiconColor, Json_Data.colors) ||
          "black";
        const CloseFontAwsomeiconColor =
          resolveColor(sh?.CloseFontAwsomeiconColor, Json_Data.colors) ||
          "black";

        onLineContentData.push({
          onlineId: id,
          show,
          currentDisplay,
          OpenFontAwsomeicon,
          CloseFontAwsomeicon,
          OpenFontAwsomeiconColor,
          CloseFontAwsomeiconColor,
          ByDefaultBehaviour: sh?.ByDefaultBehaviour || "open",
        });

        if (display) {
          const subgroupsOnLineContentDiv = document.getElementById(id);
          if (!subgroupsOnLineContentDiv) return;
          const btnId = `${id}_toggle_${index}_${Math.random()
            .toString()
            .slice(2)}`;
          const btnWrapper = document.createElement("div");
          btnWrapper.id = btnId;
          btnWrapper.className = "showHideBtn";

          const iEl = document.createElement("i");

          const initialIcon = currentDisplay
            ? OpenFontAwsomeicon
            : CloseFontAwsomeicon;
          const initialColor = currentDisplay
            ? OpenFontAwsomeiconColor
            : CloseFontAwsomeiconColor;

          initialIcon.split(/\s+/).forEach((cls) => iEl.classList.add(cls));
          iEl.style.color = initialColor;

          btnWrapper.appendChild(iEl);

          btnWrapper.style.borderColor = initialColor;

          subgroupsOnLineContentDiv.appendChild(btnWrapper);

          btnWrapper.addEventListener("click", () => {
            const entry = onLineContentData.find((o) => o.onlineId === id);
            if (!entry) return;

            entry.currentDisplay = !entry.currentDisplay;

            iEl.className = "";
            const newIconClass = entry.currentDisplay
              ? entry.OpenFontAwsomeicon
              : entry.CloseFontAwsomeicon;

            newIconClass.split(/\s+/).forEach((cls) => iEl.classList.add(cls));

            const newColor = entry.currentDisplay
              ? entry.OpenFontAwsomeiconColor
              : entry.CloseFontAwsomeiconColor;

            iEl.style.color = newColor;
            btnWrapper.style.borderColor = newColor;

            // === NEW PART: toggle inside subgroups-mid-top ===
            // === NEW PART: toggle the specific icon row mapped to this content id ===
            const subgroupsOnLine = subgroupsOnLineContentDiv.parentElement;
            const SubGroupDiv = subgroupsOnLine.parentElement;
            const subgroupsOnLineContentDivH6 = subgroupsOnLineContentDiv.querySelector("h6");

            if (!direction && subgroupsOnLineContentDivH6) {
                const uniqueId = subgroupsOnLineContentDiv.id;

                if (entry.currentDisplay) {
                    // SHOW → remove override
                    delete dynamicAfterCSS[uniqueId + "_h6"];
                } else {
                    // HIDE → override pseudo-element background
                    dynamicAfterCSS[uniqueId + "_h6"] = `
                        #${uniqueId} h6::after {
                            background: transparent !important;
                        }
                    `;
                }
                updateDynamicAfterCSS();
            }



            const iconBlock = SubGroupDiv.querySelector(
              `.icon_plus_name[data-midtop-for="${id}"]`
            );

            if (iconBlock) {
              if (entry.currentDisplay) {
                // SHOW
                iconBlock.style.opacity = "1";
                iconBlock.style.borderColor = "";
                iconBlock.style.background = "";
                iconBlock.querySelectorAll("*").forEach((el) => {
                  el.style.opacity = "";
                  el.style.color = "";
                  el.style.background = "";
                  el.style.borderColor = "";
                  el.style.webkitTextFillColor = "";
                });
              } else {
                // HIDE
                iconBlock.style.opacity = "0";
                iconBlock.style.borderColor = "transparent";
                iconBlock.style.background = "transparent";

                iconBlock.querySelectorAll("*").forEach((el) => {
                  el.style.opacity = "0";
                  el.style.color = "transparent";
                  el.style.background = "transparent";
                  el.style.borderColor = "transparent";
                  el.style.webkitTextFillColor = "transparent";
                });
              }
            }
            if (subgroupsOnLineContentDiv) {
              const uniqueId = subgroupsOnLineContentDiv.id;

              if (!uniqueId) {
                console.warn(
                  "Element does not have an ID, cannot toggle ::after"
                );
              } else {
                if (entry.currentDisplay) {
                  delete dynamicAfterCSS[uniqueId];
                } else {
                  dynamicAfterCSS[uniqueId] = `
                #${uniqueId}::after {
                    display: none !important;
                }
            `;
                }
                updateDynamicAfterCSS();
              }
            }

            document.querySelectorAll(`[data-target="${id}"]`).forEach((el) => {
              if (entry.currentDisplay) {
                el.style.opacity = "1";
                el.style.pointerEvents = "auto";
              } else {
                el.style.opacity = "0";
                el.style.pointerEvents = "none";
              }
            });
          });
        }
      });
    });
  });
  console.log(onLineContentData);
}

AddOrRemoveShowHideBtn(JSON_Data);

const dynamicAfterCSS = {};

function updateDynamicAfterCSS() {
  const css = Object.values(dynamicAfterCSS).join("\n");

  let styleEl = document.getElementById("dynamicAfterStyle");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.id = "dynamicAfterStyle";
    document.head.appendChild(styleEl);
  }

  styleEl.textContent = css;
}

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
      warning_Logo(JSON_Data);
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
        warning_Logo(JSON_Data);
      });
    }
  });
}

collapsabile();