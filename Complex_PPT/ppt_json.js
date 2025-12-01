// Latest JSON at the Top
JSON_Data9 = {
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
    direction: "reverse",
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
                location: "on_midline",
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
                location: "on_midline",
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
                location: "on_midline",
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
              bottom_Line_color: [
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
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
              bottom_Line_color: [
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
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
                logo_id_name: "logo_title_id9",
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
                logo_id_name: "logo_title_id10",
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
            connecting_Rectangle: {
              display: true,
              connections: [
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
                        text_Details_HTML:
                          "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                        text_Details_CSS:
                          ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
                      },
                      {},
                      {},
                    ],
                  },
                },
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
                        text_Details_HTML:
                          "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                        text_Details_CSS:
                          ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
                      },
                      {},
                      {},
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
              content: ["HET DMT SELECTION", "TX CONTINUES"],
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
              content_details: ["HET DMT SELECTION", "TX CONTINUES"],
              color: ["Common_onLineContent_font", "Common_onLineContent_font"],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_transparent",
              ],
              bottom_point_position_onLine: [false, true],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_transparent",
              ],
              bottom_Line_color: [
                "Common_onLineContent_Shape",
                "Common_transparent",
              ],
              bottom_Line_postion: ["Level_9", "Level_6"],
              bottom_shape_positions: [
                {
                  levels: ["Level_6", "Level_7", "Level_8", "Level_9"],
                  color: [
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                  ],
                },
                {
                  levels: ["Level_6"],
                  color: ["Common_transparent"],
                },
              ],
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

JSON_Data8 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "Centro di Senologia/Ospedale",
      footer_3_label: "Casa",
      footer_4_label: "Altra struttura",
      footer_5_label: "Earmacia ospedaliera",
    },
    label_width: {
      footer_1_width: "92",
      footer_2_width: "85",
      footer_3_width: "67",
      footer_4_width: "50",
      footer_5_width: "20",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: true,
    direction: "default",
    exportName: "Process_Journey",
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
    logo_config: [
      {
        type: "Start",
        on_line_id_start: "on_line_content_1",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
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
        on_line_id_start: "on_line_content_3",
        on_line_id_end: "on_line_content_4",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
      {
        type: "Between",
        on_line_id_start: "on_line_content_7",
        on_line_id_end: "on_line_content_8",
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
        type: "Between",
        on_line_id_start: "on_line_content_10",
        on_line_id_end: "on_line_content_11",
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
    fontFamily: ["Poppins", "sans-serif"],
  },
  body: [
    {
      component: "Start-Header",
      title: "Pre-diagnosi",
      configurations: {
        title_color: "#515151",
        line_right: true,
        line_color: "#adafaf",
        circle_color: "#767979",
      },
      start_content: {
        logo_title: "Paziente",
        link: "https://www.youtube.com/",
        steps: ["SCREENING", "YUDHJCS CDSVYUCUD", "HADH CBSDHJBVG"],
        stepsLink: ["https://www.youtube.com/", "", "https://www.youtube.com/"],
        title_detail: "Hello World!",
        steps_details: [
          "Hello World!",
          "Lorem ipsum dolor sit amet,",
          "Hello World!",
        ],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          mid_line_color: "#58e3d2",
          background_color: ["white_color", "white_color", "white_color"],
          font_color: ["black_color", "black_color", "black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Diagnosi e pre-treatment",
      configurations: {
        title_color: "Common_Header_title",
        line_right: true,
        line_color: "Common_Header_Line",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Diagnosi a presa in carico",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: true,
          },
          content: {
            logo_heading: ["", "GOM", "GOM"],
            logo_heading_color: [
              "Common_logo_heading",
              "linear-gradient(to right top, #340046ff 20%, #bb0000ff)",
              "linear-gradient(to right top, #bf00ffff 20%, #ff8f8fff)",
            ],
            logo_heading_border_color: [
              "Common_logo_border",
              "Common_logo_border",
              "Common_logo_border",
            ],
            logo_color: ["Common_logo", "Common_logo", "Common_logo"],
            logo_titles_config: [
              {
                logo_title: ["MMG"],
                links: [""],
                logo_id_name: "logo_title_id1",
                logo_detail: ["MMG"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Chirurgo Senologo"],
                links: [""],
                logo_id_name: "logo_title_id2",
                logo_detail: ["Chirurgo Senologo"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Radiologo"],
                links: [""],
                logo_id_name: "logo_title_id3",
                logo_detail: ["Radiologo"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
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
                  ending: "logo_title_id4",
                  height: "Level_1",
                },
              ],
              arrow_color: [
                "Common_ConnectingLine_arrow",
                "Common_ConnectingLine_arrow",
              ],
              line_color: [
                "Common_ConnectingLine_line",
                "Common_ConnectingLine_line",
              ],
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
                  config: {
                    fontAwsomeicons: [
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                    ],
                    iconColors: [
                      "black_color",
                      "black_color",
                      "black_color",
                      "black_color",
                      "black_color",
                      "black_color",
                    ],
                    iconSize: [
                      "Size_0",
                      "Size_0",
                      "Size_0",
                      "Size_0",
                      "Size_0",
                      "Size_0",
                    ],
                    justify_content: "center",
                    start_end_gaps: "Level_0",
                    shape: "rounded_x_lg",
                  },
                },
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_4",
                  config: {
                    fontAwsomeicons: [
                      "fa-solid fa-caret-right",
                      "fa-solid fa-caret-right",
                      "fa-solid fa-caret-right",
                      "fa-solid fa-caret-right",
                      "fa-solid fa-caret-right",
                      "fa-solid fa-caret-right",
                    ],
                    iconColors: [
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                    ],
                    iconSize: [
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                    ],
                    justify_content: "evenly",
                    start_end_gaps: "Level_5",
                    shape: "rounded_bottom",
                  },
                },
              ],
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: true,
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettuaa", "effettua", "effettua"],
              color: [
                "Common_AboveLine_Text",
                "Common_AboveLine_Text",
                "Common_AboveLine_Text",
              ],
              content_details: [
                "effettuaastag",
                "effettuaastag",
                "effettuaastag",
              ],
              justify_content: "evenly",
            },
            on_line_content_configuration: {
              content: ["VISITA", "VISITA", "ESAMI"],
              shapes: ["rounded_vertices", "Default", "Rounded_sm"],
              striping: [
                { striped: false },
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
              bordered: [
                { border: true, color: "black_color" },
                { border: false },
                { border: false },
              ],
              link: ["www.google.com", "", "www.google.com"],
              content_id: [
                "on_line_content_1",
                "on_line_content_2",
                "on_line_content_3",
              ],
              content_details: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                "Hello World!",
                "Hello World!",
              ],
              color: [
                "Common_onLineContent_font",
                "Common_onLineContent_font",
                "Common_onLineContent_font",
              ],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
              ],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
              ],
              bottom_Line_postion: ["Level_1", "Level_2", "Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_1"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
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
          title: "Decisione Tera",
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
                logo_title: ["GOM"],
                links: [""],
                logo_id_name: "logo_title_id4",
                logo_detail: ["GOM"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
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
                  height: "Level_3",
                },
              ],
              arrow_color: ["#ffc305", "#ffc305"],
              line_color: ["#ffc305", "#ffc305"],
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_4",
                  start_from_starting: "true",
                  ending: "on_line_content_7",
                  end_from_ending: "true",
                  height: "Level_5",
                  border_thickness: "Level_2",
                },
              ],
              color: ["Common_ConnectingRectangle"],
            },
            line_right: false,
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettua"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            on_line_content_configuration: {
              content: ["DIAGNOSI"],
              content_id: ["on_line_content_4"],
              content_details: ["Hello World!"],
              link: ["www.google.com"],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
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
    {
      component: "Header",
      title: "Treatment",
      configurations: {
        title_color: "#515151",
        line_right: true,
        line_color: "#adafaf",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Terapia Neo-Adiuvante",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            collapsabile: true,
          },
          content: {
            logo_heading: ["GOM", "GOM"],
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #000000ff)",
            ],
            logo_heading_border_color: ["#a334c8", "#a334c8"],
            logo_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_titles_config: [
              {
                logo_title: ["Oncologo"],
                links: [""],
                logo_id_name: "logo_title_id5",
                logo_detail: ["Oncologo"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Infermiere"],
                links: [""],
                logo_id_name: "logo_title_id6",
                logo_detail: ["Infermiere"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
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
            line_right: true,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["ET", "TT", "CT"],
              content_id: [
                "on_line_content_5",
                "on_line_content_6",
                "on_line_content_7",
              ],
              content_details: ["Hello", "hi", "World"],
              link: ["www.google.com", "", "www.google.com"],
              color: ["black", "black", "black"],
              background_color: ["#e6fffc", "#e6fffc", "#e6fffc"],
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
              bottom_Line_postion: ["Level_3", "Level_3", "Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            collapsabile: true,
          },
          content: {
            logo_heading: ["GOM", ""],
            logo_heading_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8", "#a334c8"],
            logo_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_titles_config: [
              {
                logo_title: ["Chirurgo/ Senologo"],
                links: [""],
                logo_id_name: "logo_title_id7",
                logo_detail: ["Chirurgo/ Senologo"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
              {
                logo_title: ["Chirurgo Plastico"],
                links: [""],
                logo_id_name: "logo_title_id8",
                logo_detail: ["Chirurgo Plastico"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
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
            on_line_content_configuration: {
              content: ["INTERVENTO"],
              content_id: ["on_line_content_8"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            collapsabile: true,
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
                logo_title: ["GOM"],
                links: [""],
                logo_id_name: "logo_title_id9",
                logo_detail: ["GOM"],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [false],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
              {
                logo_title: ["DOM"],
                links: [""],
                logo_id_name: "logo_title_id10",
                logo_detail: ["DOM"],
                logo_title_background_color: ["Common_transparent"],
                logo_title_border: [false],
                logo_title_border_color: ["Common_transparent"],
                logo_title_color: ["Common_transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
            ],
            connecting_Rectangle: {
              display: false,
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
            connecting_Circle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_7",
                  ending: "on_line_content_10",
                  start_from: "middle",
                  end_from: "middle",
                  border_thickness: "Level_2",
                  config: {
                    fontAwsomeicon: "fa-solid fa-angles-left",
                    iconColor: "white",
                    iconSize: "Level_2",
                    direction: "default",
                  },
                },
                {
                  starting: "on_line_content_9",
                  ending: "on_line_content_10",
                  start_from: "start",
                  end_from: "end",
                  border_thickness: "Level_2",
                  config: {
                    fontAwsomeicon: "fa-solid fa-angles-left",
                    iconColor: "white",
                    iconSize: "Level_2",
                    direction: "default",
                  },
                },
              ],
              color: ["#c140a5", "#58e3d2"],
            },
            connecting_Text_Line: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_7",
                  ending: "on_line_content_10",
                  start_from: "start",
                  end_from: "end",
                  line_Thickness: "Level_1",
                  line_Position: "Level_1",
                  text: "procedure pre-dskfdsfdsfdsfjfsdfsdffdffdf",
                  text_Position: "middle",
                  text_color: "black",
                  line_color: "black",
                },
              ],
            },
            line_right: "true",
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["DICT", "CTDI"],
              content_id: ["on_line_content_9", "on_line_content_10"],
              link: ["www.google.com", ""],
              color: ["black", "black"],
              background_color: ["#e6fffc", "#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_2", "Level_4"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_4"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            collapsabile: true,
          },
          content: {
            logo_heading: ["ROM"],
            logo_heading_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["MMG"],
                links: [""],
                logo_id_name: "logo_title_id11",
                logo_detail: ["MMG"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [false],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
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
            on_line_content_configuration: {
              content: ["VISITA"],
              content_id: ["on_line_content_11"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: [
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            ],
            logo_heading_border_color: ["#ffc100"],
            logo_color: [
              "linear-gradient(to right top, #ffc100 1%, #ff5e58 80%)",
            ],
            logo_titles_config: [
              {
                logo_title: ["GOM"],
                links: [""],
                logo_id_name: "logo_title_id12",
                logo_detail: ["GOM"],
                logo_title_background_color: [
                  "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
                ],
                logo_title_border: [false],
                logo_title_border_color: ["#ffc100"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#ffc100",
                  line_color:
                    "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
                },
              },
            ],
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
            on_line_content_configuration: {
              content: ["RT"],
              content_id: ["on_line_content_12"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_4"],
              bottom_shape_positions: [
                {
                  levels: ["Level_4"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: [""],
            logo_heading_color: [
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            ],
            logo_heading_border_color: ["#ffc100"],
            logo_color: [
              "linear-gradient(to right top, #ffc100 1%, #ff5e58 80%)",
            ],
            logo_titles_config: [
              {
                logo_title: ["GOM"],
                links: [""],
                logo_id_name: "logo_title_id13",
                logo_detail: ["GOM"],
                logo_title_background_color: [
                  "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
                ],
                logo_title_border: [false],
                logo_title_border_color: ["#ffc100"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#ffc100",
                  line_color:
                    "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
                },
              },
            ],
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
            on_line_content_configuration: {
              content: ["RT"],
              content_id: ["on_line_content_13"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_4"],
              bottom_shape_positions: [
                {
                  levels: ["Level_4"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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

JSON_Data7 = {
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
      footer_1_width: "90",
      footer_2_width: "90",
      footer_3_width: "90",
      footer_4_width: "90",
      footer_5_width: "90",
      footer_6_width: "90",
      footer_7_width: "90",
      footer_8_width: "90",
      footer_9_width: "90",
      footer_10_width: "90",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
  },
  Page_Configuration: {
    background_color: "linear-gradient(to bottom, #92cfdf,white 60%)",
    border_color: "black",
    scroll_horizontal: true,
    direction: "reverse",
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
      component: "Start-Header",
      title: "Pre-Diagnosis",
      configurations: {
        title_color: "#304c8c",
        line_right: true,
        line_color: "white",
        circle_color: "white",
        alignment: "vertical",
        vertical_config: {
          boxColor: "linear-gradient(to right, #d5d6d8, #ebebebff)",
          boxShape: "blob_soft",
          lineColor: "black",
        },
      },
      start_content: {
        logo_title: "Patient",
        link: "",
        steps: ["GPC", "DIAGNOS", "PREMENTO"],
        stepsLink: [],
        title_detail: "Paziente",
        steps_details: [],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          mid_line_color: "#58e3d2",
          background_color: ["white_color"],
          font_color: ["black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Diagnosis",
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
                location: "on_midline",
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
                location: "on_midline",
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
                location: "on_midline",
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
              bottom_Line_color: [
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
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
              bottom_Line_color: [
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
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
                logo_id_name: "logo_title_id9",
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
                logo_id_name: "logo_title_id10",
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
            connecting_Rectangle: {
              display: true,
              connections: [
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
                        text_Details_HTML:
                          "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                        text_Details_CSS:
                          ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
                      },
                      {},
                      {},
                    ],
                  },
                },
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
                        text_Details_HTML:
                          "<div class='popup-card'><div class='popup-header'><p class='popup-section-label'>Diagnosis</p><h4 class='popup-title'>Diagnosis</h4></div><div class='popup-section'><p class='popup-subtitle'>RELATED ACTORS</p><div class='popup-tags'><a href='https://www.youtube.com/' target='_blank' class='popup-tag'>Radiologist</a><span class='popup-tag'>Bio & Other</span></div></div><div class='popup-section'><p class='popup-subtitle'>LOCUS</p><p class='popup-text'>This step takes place mainly in <strong>Private Care</strong> and other related structures.</p><p class='popup-note'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, officia.</p></div></div>",
                        text_Details_CSS:
                          ".popup-card { background: #3c3c3cff; color: #f5f5f5; width: 200px; min-height: 220px; display: flex; flex-direction: column; padding: 18px 20px; border-radius: 10px; box-shadow: 0 6px 18px rgba(0,0,0,0.35); transition: transform 0.2s ease, box-shadow 0.2s ease; } .popup-card:hover { box-shadow: 0 10px 25px rgba(0,0,0,0.45); } .popup-header { margin-bottom: 10px; } .popup-section-label { font-size: 10px; text-transform: uppercase; letter-spacing: 0.7px; color: #aaa; margin-bottom: 2px; } .popup-title { font-size: 16px; font-weight: 600; margin: 0; color: #fff; } .popup-section { margin-top: 12px; } .popup-subtitle { font-size: 11px; color: #bbb; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 5px; } .popup-tags { display: flex; flex-wrap: wrap; gap: 6px; } .popup-tag { background: #1f1f1f; border: 1px solid #333; border-radius: 4px; font-size: 10px; padding: 3px 7px; color: #eee; transition: background 0.2s; } .popup-tag:hover { background: #2c2c2c; } .popup-text { font-size: 11px; line-height: 1.4; margin: 4px 0; color: #ddd; } .popup-note { font-size: 10px; color: #aaa; line-height: 1.3; margin-top: 4px; border-left: 2px solid #444; padding-left: 6px; }",
                      },
                      {},
                      {},
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
              content: ["HET DMT SELECTION", "TX CONTINUES"],
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
              content_details: ["HET DMT SELECTION", "TX CONTINUES"],
              color: ["Common_onLineContent_font", "Common_onLineContent_font"],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_transparent",
              ],
              bottom_point_position_onLine: [false, true],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_transparent",
              ],
              bottom_Line_color: [
                "Common_onLineContent_Shape",
                "Common_transparent",
              ],
              bottom_Line_postion: ["Level_9", "Level_6"],
              bottom_shape_positions: [
                {
                  levels: ["Level_6", "Level_7", "Level_8", "Level_9"],
                  color: [
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                    "Common_onLineContent_Shape",
                  ],
                },
                {
                  levels: ["Level_6"],
                  color: ["Common_transparent"],
                },
              ],
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

JSON_Data6 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "CS / Ospedale",
      footer_3_label: "Altra struttura",
      footer_4_label: "CS / Ospedale",
      footer_5_label: "Altra struttura",
    },
    label_width: {
      footer_1_width: "100",
      footer_2_width: "100",
      footer_3_width: "100",
      footer_4_width: "100",
      footer_5_width: "100",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false,
    exportName: "Process_Journey",
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
    logo_config: [
      {
        type: "Start",
        on_line_id_start: "on_line_content_1",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
      {
        type: "End",
        on_line_id_end: "on_line_content_5",
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
      component: "Start-Header",
      title: "Prev",
      configurations: {
        title_color: "#515151",
        line_right: true,
        line_color: "#adafaf",
        circle_color: "#767979",
        alignment: "vertical",
        vertical_config: {
          boxColor: "linear-gradient(to right, #d5d6d8, #ebebebff)",
          boxShape: "blob_soft",
          lineColor: "black",
        },
      },
      start_content: {
        logo_title: "Paziente",
        link: "",
        steps: ["Hi", "there", "Byee"],
        stepsLink: [""],
        title_detail: "Paziente",
        steps_details: [],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          mid_line_color: "#58e3d2",
          background_color: ["white_color"],
          font_color: ["black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Treatment",
      configurations: {
        title_color: "Common_Header_title",
        line_right: true,
        line_color: "Common_Header_Line",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Terapia neoadiuvante",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: true,
          },
          content: {
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["#a334c8"],
            logo_titles_config: [
              {
                logo_title: ["Oncologo"],
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
            ],
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            connecting_Text_Line: {
              display: true,
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
              content: ["COMUNICAZIONE PERCORSO TERAPIA"],
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
              content_id: ["on_line_content_1"],
              content_details: ["COMUNICAZIONE PERCORSO TERAPIA"],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_point_position_onLine: [true],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_Line_postion: ["Level_4"],
              bottom_shape_positions: [
                {
                  levels: ["Level_4"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Radiology"],
                links: [""],
                logo_id_name: "logo_title_id2",
                logo_detail: ["Radiology"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["MAMMOGRAFIA"],
              content_id: ["on_line_content_2"],
              content_details: ["MAMMOGRAFIA"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: [
              "linear-gradient(to right top, #e45f65 20%, #d84987)",
            ],
            logo_heading_border_color: ["#e45f65"],
            logo_color: ["linear-gradient(to right top, #e45f65 20%, #d84987)"],
            logo_titles_config: [
              {
                logo_title: ["Anatomopatologo"],
                links: [""],
                logo_id_name: "logo_title_id3",
                logo_detail: ["Anatomopatologo"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["#feb151"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["BIOSIA + STADAZIONE"],
              content_id: ["on_line_content_3"],
              content_details: ["BIOSIA + STADAZIONE"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_titles_config: [
              {
                logo_title: ["Oncologo"],
                links: [""],
                logo_id_name: "logo_title_id4",
                logo_detail: ["Oncologo"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["VALUTAZIONE FATTORI PROGNOSTICI"],
              content_id: ["on_line_content_4"],
              content_details: ["VALUTAZIONE FATTORI PROGNOSTICI"],
              link: [""],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_titles_config: [
              {
                logo_title: ["Oncologo"],
                links: [""],
                logo_id_name: "logo_title_id5",
                logo_detail: ["Oncologo"],
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
            ],
            line_right: false,
            line_color: "#c4c9ca",
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            on_line_content_configuration: {
              content: ["TERPAIA NEO-ADIUVANTE"],
              content_id: ["on_line_content_5"],
              content_details: ["TERPAIA NEO-ADIUVANTE"],
              link: [""],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
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

JSON_Data5 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "CS / Ospedale",
      footer_3_label: "Altra struttura",
    },
    label_width: {
      footer_1_width: "100",
      footer_2_width: "100",
      footer_3_width: "100",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    exportName: "Process_Journey",
    scroll_horizontal: false,
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
    logo_config: [
      {
        type: "Start",
        on_line_id_start: "on_line_content_1",
        fontAwsomeIcon: "fa-solid fa-angles-right",
        fontColor: "white",
        fontSize: "Level_1",
      },
      {
        type: "End",
        on_line_id_end: "on_line_content_5",
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
      component: "Start-Header",
      title: "Prev",
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
        stepsLink: [""],
        title_detail: "Paziente",
        steps_details: [],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          mid_line_color: "#58e3d2",
          background_color: ["white_color"],
          font_color: ["black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Treatment",
      configurations: {
        title_color: "Common_Header_title",
        line_right: true,
        line_color: "Common_Header_Line",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Terapia neoadiuvante",
          configurations: {
            title_color: "Common_SubHeader_title",
            collapsabile: true,
          },
          content: {
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_titles_config: [
              {
                logo_title: ["Oncologo"],
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
            ],
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            on_line_content_configuration: {
              content: ["COMUNICAZIONE PERCORSO TERAPIA"],
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
              content_id: ["on_line_content_1"],
              content_details: ["COMUNICAZIONE PERCORSO TERAPIA"],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_Line_postion: ["Level_1"],
              bottom_shape_positions: [
                {
                  levels: ["Level_1"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Radiology"],
                links: [""],
                logo_id_name: "logo_title_id2",
                logo_detail: ["Radiology"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
            },
            connecting_Text_Line: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_2",
                  ending: "on_line_content_4",
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
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["MAMMOGRAFIA"],
              content_id: ["on_line_content_2"],
              content_details: ["MAMMOGRAFIA"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: [
              "linear-gradient(to right top, #e45f65 20%, #d84987)",
            ],
            logo_heading_border_color: ["#e45f65"],
            logo_color: ["linear-gradient(to right top, #e45f65 20%, #d84987)"],
            logo_titles_config: [
              {
                logo_title: ["Anatomopatologo"],
                links: [""],
                logo_id_name: "logo_title_id3",
                logo_detail: ["Anatomopatologo"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["#feb151"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["BIOSIA + STADAZIONE"],
              content_id: ["on_line_content_3"],
              content_details: ["BIOSIA + STADAZIONE"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_titles_config: [
              {
                logo_title: ["Oncologo"],
                links: [""],
                logo_id_name: "logo_title_id4",
                logo_detail: ["Oncologo"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["VALUTAZIONE FATTORI PROGNOSTICI"],
              content_id: ["on_line_content_4"],
              content_details: ["VALUTAZIONE FATTORI PROGNOSTICI"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: ["Common_transparent"],
              bottom_line_color: ["Common_transparent"],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_transparent"],
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_titles_config: [
              {
                logo_title: ["Oncologo"],
                links: [""],
                logo_id_name: "logo_title_id5",
                logo_detail: ["Oncologo"],
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
            ],
            above_line_content: {
              content: ["sceglie"],
              color: ["Common_AboveLine_Text"],
              content_details: ["sceglie"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["TERPAIA NEO-ADIUVANTE"],
              content_id: ["on_line_content_5"],
              content_details: ["TERPAIA NEO-ADIUVANTE"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: ["Common_transparent"],
              bottom_line_color: ["Common_transparent"],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_transparent"],
                },
              ],
            },
          },
        },
      ],
    },
  ],
};

JSON_Data4 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "Ospedale",
      footer_3_label: "Altra struttura",
    },
    label_width: {
      footer_1_width: "74",
      footer_2_width: "63",
      footer_3_width: "63",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false,
    exportName: "Process_Journey",
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
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
      title: "Pre-diagnosi",
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
        steps: ["SINTOMI", "REPERTO INCIDENTALE", "SCREENING I LIVELLO"],
        stepsLink: [""],
        title_detail: "Paziente",
        steps_details: [
          "SINTOMI",
          "REPERTO INCIDENTALE",
          "SCREENING I LIVELLO",
        ],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          mid_line_color: "#58e3d2",
          background_color: ["white_color"],
          font_color: ["black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Diagnosi e pre-treatment",
      configurations: {
        title_color: "Common_Header_title",
        line_right: true,
        line_color: "Common_Header_Line",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Iter diagnostico",
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
                logo_title: ["MMG"],
                links: [""],
                logo_id_name: "logo_title_id1",
                logo_detail: ["MMG"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: ["#f8c60d"],
                  line_color: ["#f8c60d"],
                },
              },
            ],
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id2",
                  height: "Level_1",
                },
              ],
              arrow_color: ["#8e9293"],
              line_color: ["#8e9293"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettuaa"],
              color: ["#e8d100ff"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            on_line_content_configuration: {
              content: ["VISITA O CONSULTO"],
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
              content_id: ["on_line_content_1"],
              content_details: ["VISITA O CONSULTO"],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_shape_color: ["Common_onLineContent_Shape"],
              bottom_Line_postion: ["Level_1"],
              bottom_shape_positions: [
                {
                  levels: ["Level_1"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
              timlines: [
                {
                  content: "entro 10gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_1",
                  ending: "on_line_content_2",
                },
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Chirurgo/Senologo"],
                links: [""],
                logo_id_name: "logo_title_id2",
                logo_detail: ["Chirurgo/Senologo"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id4",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id5",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id4",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#8e9293", "#8e9293", "#8e9293", "#9f30cb"],
              line_color: ["#8e9293", "#8e9293", "#8e9293", "#9f30cb"],
            },
            connecting_Rectangle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_2",
                  start_from_starting: true,
                  ending: "on_line_content_7",
                  end_from_ending: true,
                  height: "Level_10",
                  border_thickness: "Level_5",
                  config: {
                    fontAwsomeicons: [
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                    ],
                    iconColors: [
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                    ],
                    iconSize: [
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                    ],
                    justify_content: "evenly",
                    start_end_gaps: "Level_2",
                    shape: "rounded_bottom",
                  },
                },
              ],
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["VISITA SPECIAL."],
              content_id: ["on_line_content_2"],
              content_details: ["VISITA SPECIAL."],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "entro 10gg da",
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
          title: "",
          configurations: {
            title_color: "rgb(81, 81, 81)",
          },
          content: {
            logo_heading: ["GOM"],
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Radiologo"],
                links: [""],
                logo_id_name: "logo_title_id3",
                logo_detail: ["Radiologo"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id3",
                  ending: "logo_title_id5",
                  height: "Level_7",
                },
                {
                  starting: "logo_title_id3",
                  ending: "logo_title_id6",
                  height: "Level_7",
                },
              ],
              arrow_color: ["#9f30cb", "#9f30cb"],
              line_color: ["#9f30cb", "#9f30cb"],
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["MAMMOGR./ECOGRAFIA"],
              content_id: ["on_line_content_3"],
              content_details: ["MAMMOGR./ECOGRAFIA"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "entro 5gg da",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_3",
                  ending: "on_line_content_4",
                },
              ],
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
            logo_heading_color: ["Common_transparent"],
            logo_heading_border_color: ["Common_transparent"],
            logo_color: ["Common_transparent"],
            logo_titles_config: [
              {
                logo_title: ["Hidden"],
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
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaa"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["VISITA SPECIAL."],
              content_id: ["on_line_content_4"],
              content_details: ["VISITA SPECIAL."],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_transparent"],
            logo_heading_border_color: ["Common_transparent"],
            logo_color: ["Common_transparent"],
            logo_titles_config: [
              {
                logo_title: ["Hidden"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: "false",
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["AGOASPIRATO BIOPSIA"],
              content_id: ["on_line_content_5"],
              content_details: ["AGOASPIRATO BIOPSIA"],
              link: [""],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_trasparent"],
            logo_heading_border_color: ["Common_trasparent"],
            logo_color: ["Common_trasparent"],
            logo_titles_config: [
              {
                logo_title: ["Hidden"],
                links: [""],
                logo_id_name: "logo_title_id6",
                logo_detail: [""],
                logo_title_background_color: ["transparent"],
                logo_title_border: [true],
                logo_title_border_color: ["transparent"],
                logo_title_color: ["transparent"],
                top_down_arrow: {
                  display: false,
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: false,
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
            },
            connecting_Rectangle: {
              display: false,
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
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["RMN/TAC"],
              content_id: ["on_line_content_6"],
              content_details: ["RMN/TAC"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "entro 5 gg dal 1* screening",
                  height: "Level_6",
                  show_border: false,
                  starting: "on_line_content_3",
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
      title: "",
      configurations: {
        title_color: "#515151",
        line_right: true,
        line_color: "#adafaf",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Diagnosi e presa in carico",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            collapsabile: true,
          },
          content: {
            logo_heading: [""],
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["GOM"],
                links: [""],
                logo_id_name: "logo_title_id7",
                logo_detail: ["GOM"],
                logo_title_background_color: ["Common_logo_title"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["DIAGNOSI"],
              content_id: ["on_line_content_7"],
              content_details: ["DIAGNOSI"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
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
                  content: "entro 30 gg dali accertamento",
                  height: "Level_11",
                  show_border: true,
                  starting: "on_line_content_5",
                  ending: "on_line_content_7",
                },
              ],
            },
          },
        },
      ],
    },
  ],
};

JSON_Data3 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "Ospedale",
      footer_3_label: "Altra struttura",
      footer_4_label: "Casa",
      footer_5_label: "Farmacia Ospedaliera",
    },
    label_width: {
      footer_1_width: "85",
      footer_2_width: "85",
      footer_3_width: "85",
      footer_4_width: "85",
      footer_5_width: "85",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false,
    exportName: "Process_Journey",
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
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
              ],
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
                logo_title_color: [
                  "linear-gradient(to top right, #e7636b 40%, #de7883)",
                ],
                top_down_arrow: {
                  display: true,
                  arrow_color: ["#e7636b"],
                  line_color: [
                    "linear-gradient(to top right, #e7636b 40%, #de7883)",
                  ],
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
              ],
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
                },
              ],
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
              bottom_Line_postion: ["Level_1", "Level_3"],
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

JSON_Data2 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "Ospedale",
      footer_3_label: "Altra struttura",
    },
    footer_label_position_left: {
      footer_1_left: "Level_5",
      footer_2_left: "Level_6",
      footer_3_left: "Level_5",
    },
    label_width: {
      footer_1_width: "92",
      footer_2_width: "92",
      footer_3_width: "92",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
    footer_width: "auto",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false,
    exportName: "Process_Journey",
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
    Common_color_trattamento: "linear-gradient(to bottom,#fb5464,#de4686)",
    Common_trattamento_line: "#e37e8c",
    Common_transparent: "transparent",
  },
  fontConfig: {
    fontsize: "medium",
    fontFamilyCDN:
      "https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&display=swap",
    fontFamily: ["sans-serif"],
  },
  body: [
    {
      component: "Start-Header",
      title: "Diagnosi",
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
          background_color: ["white_color", "white_color", "white_color"],
          font_color: ["black_color", "black_color", "black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "",
      configurations: {
        title_color: "Common_Header_title",
        line_right: true,
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Diagonsi",
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
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_logo_title"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            connecting_Text_Line: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_1",
                  ending: "on_line_content_3",
                  start_from: "start",
                  end_from: "end",
                  line_Thickness: "Level_1",
                  line_Position: "Level_1",
                  text: "diagnosi e decisione trattamento",
                  text_Position: "middle",
                  text_color: "black_color",
                  line_color: "black_color",
                },
              ],
            },
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id2",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
              ],
              arrow_color: [
                "Common_ConnectingLine_arrow",
                "Common_ConnectingLine_arrow",
              ],
              line_color: [
                "Common_ConnectingLine_line",
                "Common_ConnectingLine_line",
              ],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            on_line_content_configuration: {
              content: ["DIAGNOSI"],
              shapes: ["default"],
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
              link: ["www.google.com"],
              content_id: ["on_line_content_1"],
              content_details: ["DIAGNOSI"],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_shape_color: ["Common_onLineContent_Shape"],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_transparent"],
            logo_heading_border_color: ["Common_transparent"],
            logo_color: ["Common_transparent"],
            logo_titles_config: [
              {
                logo_title: ["Hidden"],
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
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["OPZIONI DI TERAPIA"],
              content_id: ["on_line_content_2"],
              content_details: ["OPZIONI DI TERAPIA"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_transparent"],
            logo_heading_border_color: ["Common_transparent"],
            logo_color: ["Common_transparent"],
            logo_titles_config: [
              {
                logo_title: ["Hidden"],
                links: [""],
                logo_id_name: "logo_title_id3",
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
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: "false",
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
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
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["COMUNICA-ZIONE TERAPIS"],
              content_id: ["on_line_content_3"],
              content_details: ["COMUNICA-ZIONE TERAPIS"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "Trattamento",
      configurations: {
        title_color: "#515151",
        line_right: true,
        line_color: "#adafaf",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Trattamento",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            collapsabile: true,
          },
          content: {
            logo_heading: [""],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_titles_config: [
              {
                logo_title: ["Fisioterapista"],
                links: [""],
                logo_id_name: "logo_title_id4",
                logo_detail: ["Fisioterapista"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "#a334c8",
                  line_color: "#a334c8",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_trattamento_line"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["FISIOTERAPIA"],
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
              ],
              content_id: ["on_line_content_4"],
              content_details: ["FISIOTERAPIA"],
              link: [],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_titles_config: [
              {
                logo_title: ["Terapista occupaziole"],
                links: [""],
                logo_id_name: "logo_title_id5",
                logo_detail: ["Terapista occupaziole"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_trattamento_line"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_trattamento_line",
                  line_color: "Common_color_trattamento",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_trattamento_line"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["TERAPIA OCCUPAZINOLE"],
              striping: [
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
              content_id: ["on_line_content_5"],
              content_details: ["TERAPIA OCCUPAZINOLE"],
              link: [],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_titles_config: [
              {
                logo_title: ["Logopedista"],
                links: [""],
                logo_id_name: "logo_title_id6",
                logo_detail: ["Logopedista"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_trattamento_line"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_trattamento_line",
                  line_color: "Common_color_trattamento",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_trattamento_line"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["LOGOPEDIA"],
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
              ],
              content_id: ["on_line_content_6"],
              content_details: ["LOGOPEDIA"],
              link: [],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_titles_config: [
              {
                logo_title: ["Neuropsicologo"],
                links: [""],
                logo_id_name: "logo_title_id7",
                logo_detail: ["Neuropsicologo"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_trattamento_line"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_trattamento_line",
                  line_color: "Common_color_trattamento",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_trattamento_line"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["RIEDUCAZIONE COGNITIVA"],
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
              ],
              content_id: ["on_line_content_7"],
              content_details: ["RIEDUCAZIONE COGNITIVA"],
              link: [],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_titles_config: [
              {
                logo_title: ["Psicologo"],
                links: [""],
                logo_id_name: "logo_title_id8",
                logo_detail: ["Psicologo"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["Common_trattamento_line"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_trattamento_line",
                  line_color: "Common_color_trattamento",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_trattamento_line"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["SUPPPORTO PSICOLOGICO"],
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
              ],
              content_id: ["on_line_content_8"],
              content_details: ["SUPPPORTO PSICOLOGICO"],
              link: [],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
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

JSON_Data1 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "Ospedale",
      footer_3_label: "Altra struttura",
    },
    footer_label_position_left: {
      footer_1_left: "Level_5",
      footer_2_left: "Level_6",
      footer_3_left: "Level_5",
    },
    label_width: {
      footer_1_width: "85",
      footer_2_width: "74",
      footer_3_width: "74",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
    footer_width: "auto",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false,
    exportName: "Process_Journey",
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
    width: "auto",
    logo_config: [
      {
        type: "Between",
        on_line_id_start: "on_line_content_5",
        on_line_id_end: "on_line_content_6",
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
        on_line_id_end: "on_line_content_6",
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
  },
  fontConfig: {
    fontsize: "small",
    fontFamilyCDN:
      "https://fonts.googleapis.com/css2?family=Bitcount+Grid+Single:wght@100..900&display=swap",
    fontFamily: ["sans-serif"],
  },
  body: [
    {
      component: "Start-Header",
      title: "Pre-diagnosi",
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
        steps: ["SINTOMId"],
        stepsLink: [""],
        title_detail: "Paziente",
        steps_details: ["SINTOMI Ospedale"],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #2394b9 10%, #5df3e4)",
          mid_line_color: "#58e3d2",
          background_color: ["white_color"],
          font_color: ["black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Diagnosi",
      configurations: {
        title_color: "Common_Header_title",
        line_right: true,
        line_color: "Common_Header_Line",
        collapsabile: true,
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Iter diagnostico",
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
                logo_title: ["MMG"],
                links: [""],
                logo_id_name: "logo_title_id1",
                logo_detail: ["MMG"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_TopDown_arror",
                  line_color: "Common_TopDown_Line",
                },
              },
            ],
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id2",
                  height: "Level_1",
                },
              ],
              arrow_color: ["Common_ConnectingLine_arrow"],
              line_color: ["Common_ConnectingLine_line"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            on_line_content_configuration: {
              content: ["VISITA O CONSULTO"],
              shapes: ["rounded_vertices"],
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
              link: ["www.google.com"],
              content_id: ["on_line_content_1"],
              content_details: ["VISITA O CONSULTO"],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_shape_color: ["Common_onLineContent_Shape"],
              bottom_Line_postion: ["Level_1"],
              bottom_shape_positions: [
                {
                  levels: ["Level_1"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
              timlines: [
                {
                  content: "entro 10gg dalia prescrizione",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_1",
                  ending: "on_line_content_2",
                },
              ],
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
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Neurologo"],
                links: [""],
                logo_id_name: "logo_title_id2",
                logo_detail: ["Neurologo"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_TopDown_arror",
                  line_color: "Common_TopDown_Line",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: true,
              connections: [
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id4",
                  height: "Level_3",
                },
                {
                  starting: "logo_title_id2",
                  ending: "logo_title_id5",
                  height: "Level_3",
                },
              ],
              arrow_color: ["#9f30cb", "#9f30cb", "#9f30cb"],
              line_color: ["#9f30cb", "#9f30cb", "#9f30cb"],
            },
            connecting_Rectangle: {
              display: true,
              connections: [
                {
                  starting: "on_line_content_2",
                  start_from_starting: true,
                  ending: "on_line_content_6",
                  end_from_ending: true,
                  height: "Level_10",
                  border_thickness: "Level_5",
                  config: {
                    fontAwsomeicons: [
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                      "fa-solid fa-angles-left",
                    ],
                    iconColors: [
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                      "white_color",
                    ],
                    iconSize: [
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                      "Size_2",
                    ],
                    justify_content: "evenly",
                    start_end_gaps: "Level_2",
                    shape: "rounded_bottom",
                  },
                },
              ],
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["VISITA SPECIAL"],
              content_id: ["on_line_content_2"],
              content_details: ["VISITA SPECIAL"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "#ffc100",
              timlines: [
                {
                  content: "entro 30gg daila visita specialistica",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_2",
                  ending: "on_line_content_4",
                },
              ],
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
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Neurofisiologo"],
                links: [""],
                logo_id_name: "logo_title_id3",
                logo_detail: ["Neurofisiologo"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_TopDown_arror",
                  line_color: "Common_TopDown_Line",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: "false",
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
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
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["VALUTAZIONE CLINCIA"],
              content_id: ["on_line_content_3"],
              content_details: ["VALUTAZIONE CLINCIA"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Tecnico di Radiologia"],
                links: [""],
                logo_id_name: "logo_title_id4",
                logo_detail: ["Tecnico di Radiologia"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_TopDown_arror",
                  line_color: "Common_TopDown_Line",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: "false",
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
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
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["RMN"],
              content_id: ["on_line_content_4"],
              content_details: [""],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "transparent",
              timlines: [
                {
                  content: "<30 gg da",
                  height: "Level_6",
                  show_border: "true",
                  starting: "on_line_content_2",
                  ending: "on_line_content_5",
                },
              ],
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
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_detail: ["Neuroimmunologo"],
            logo_titles_config: [
              {
                logo_title: ["Neuroimmunologo"],
                links: [""],
                logo_id_name: "logo_title_id5",
                logo_detail: ["Neuroimmunologo"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_TopDown_arror",
                  line_color: "Common_TopDown_Line",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: "false",
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
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
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["TEST DEL LIQUIDO CEREBRO-SPINALE"],
              content_id: ["on_line_content_5"],
              content_details: ["TEST DEL LIQUIDO CEREBRO-SPINALE"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_2"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
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
          title: "Diagnosi e presa in carico",
          configurations: {
            title_color: "rgb(81, 81, 81)",
            collapsabile: true,
          },
          content: {
            logo_heading: [""],
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_titles_config: [
              {
                logo_title: ["Neurologo"],
                links: [""],
                logo_id_name: "logo_title_id6",
                logo_detail: ["Neurologo"],
                logo_title_background_color: ["Common_logo_heading"],
                logo_title_border: [true],
                logo_title_border_color: ["#a334c8"],
                logo_title_color: ["white"],
                top_down_arrow: {
                  display: true,
                  arrow_color: "Common_TopDown_arror",
                  line_color: "Common_TopDown_Line",
                },
              },
            ],
            above_line_content: {
              content: ["effettuaa"],
              color: ["Common_AboveLine_Text"],
              content_details: ["effettuaastag"],
              justify_content: "evenly",
            },
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id5",
                  ending: "logo_title_id8",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#9f30cb"],
              line_color: ["#9f30cb"],
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
            line_right: false,
            line_color: "#c4c9ca",
            on_line_content_configuration: {
              content: ["DIAGNOSI"],
              content_id: ["on_line_content_6"],
              content_details: ["DIAGNOSI"],
              link: ["www.google.com"],
              color: ["black"],
              background_color: ["#e6fffc"],
              bottom_point_color: [
                "linear-gradient(to right top, #207cb2 1%, #41cbc8)",
              ],
              bottom_line_color: [
                "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)",
              ],
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_Line_postion: ["Level_3"],
              bottom_shape_positions: [
                {
                  levels: ["Level_2"],
                  color: ["Common_onLineContent_Shape"],
                },
                {
                  levels: ["Level_3"],
                  color: ["Common_onLineContent_Shape"],
                },
              ],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
              border_color: "transparent",
              timlines: [
                {
                  content: "entro 60 gg daila visita",
                  height: "Level_11",
                  show_border: "true",
                  starting: "on_line_content_2",
                  ending: "on_line_content_6",
                },
              ],
            },
          },
        },
      ],
    },
  ],
};
