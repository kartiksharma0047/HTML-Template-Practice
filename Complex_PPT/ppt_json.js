JSON_Data5 = {
  footer: {
    footer_label: {
      footer_1_label: "Ambulatorio",
      footer_2_label: "CS / Ospedale",
      footer_3_label: "Altra struttura",
    },
    footer_label_position_left: {
      footer_1_left: "Level_12",
      footer_2_left: "Level_12",
      footer_3_left: "Level_12",
    },
    label_width: {
      footer_1_width: "100",
      footer_2_width: "100",
      footer_3_width: "100",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
    footer_width: "auto",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false,
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
            logo_title: ["Oncologo"],
            link: [""],
            logo_id_names: ["logo_title_id1"],
            logo_detail: ["Oncologo"],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_TopDown_arror"],
              line_color: ["Common_TopDown_Line"],
            },
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
              bottom_shape_color: ["Common_onLineContent_Shape"],
              bottom_shape_postion: ["Level_1"],
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
            logo_title: ["Radiology"],
            logo_id_names: ["logo_title_id2"],
            logo_detail: ["Radiology"],
            link: [""],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: [
              "linear-gradient(to right top, #e45f65 20%, #d84987)",
            ],
            logo_heading_border_color: ["#e45f65"],
            logo_color: ["linear-gradient(to right top, #e45f65 20%, #d84987)"],
            logo_title: ["Anatomopatologo"],
            logo_id_names: ["logo_title_id3"],
            logo_detail: ["Anatomopatologo"],
            link: [""],
            logo_title_color: [
              "linear-gradient(to right top, #e45f65 20%, #d84987)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#feb151"],
              line_color: ["linear-gradient(to bottom, #e98f53 50%, #f79142)"],
            },
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
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
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
            logo_heading: ["GOM"],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_title: ["Oncologo"],
            logo_id_names: ["logo_title_id4"],
            logo_detail: ["Oncologo"],
            link: [""],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: true,
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_color: ["Common_transparent"],
              bottom_shape_postion: ["Level_2"],
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
            logo_title: ["Oncologo"],
            logo_id_names: ["logo_title_id5"],
            logo_detail: ["Oncologo"],
            link: [""],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: true,
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_color: ["Common_transparent"],
              bottom_shape_postion: ["Level_2"],
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
    footer_label_position_left: {
      footer_1_left: "Level_5",
      footer_2_left: "Level_6",
      footer_3_left: "Level_5",
    },
    label_width: {
      footer_1_width: "74",
      footer_2_width: "63",
      footer_3_width: "63",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
    footer_width: "auto",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: false,
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
            logo_title: ["MMG"],
            link: ["https://www.youtube.com"],
            logo_id_names: ["logo_title_id1"],
            logo_detail: ["MMG"],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#f8c60d"],
              line_color: ["#f8c60d"],
            },
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
              bottom_shape_postion: ["Level_1"],
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
            logo_title: ["Chirurgo/Senologo"],
            logo_id_names: ["logo_title_id2"],
            logo_detail: ["Chirurgo/Senologo"],
            link: ["www.google.com", ""],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_3"],
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
            logo_title: ["Radiologo"],
            logo_id_names: ["logo_title_id3"],
            logo_detail: ["Radiologo"],
            link: ["www.google.com"],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_3"],
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
            logo_title: [""],
            logo_id_names: ["logo_title_id4"],
            logo_detail: [""],
            link: [""],
            logo_title_color: ["Common_transparent"],
            top_down_arrow: {
              display: false,
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: [""],
            logo_id_names: ["logo_title_id5"],
            logo_detail: [""],
            link: [""],
            logo_title_color: ["Common_transparent"],
            top_down_arrow: {
              display: false,
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: [""],
            logo_id_names: ["logo_title_id6"],
            logo_detail: [""],
            link: [""],
            logo_title_color: ["Common_trasparent"],
            top_down_arrow: {
              display: false,
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_3"],
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
            logo_title: ["GOM"],
            logo_id_names: ["logo_title_id7"],
            logo_detail: ["GOM"],
            link: [""],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_2"],
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
    scroll_horizontal: false,
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
            logo_title: ["Neurologo"],
            link: ["https://www.youtube.com"],
            logo_id_names: ["logo_title_id1"],
            logo_detail: ["Neurologo"],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_transparent"],
              line_color: ["Common_TopDown_Line"],
            },
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
              display: "true",
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
                    direction: "reverse",
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
              bottom_shape_postion: ["Common_transparent"],
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
            logo_title: ["hidden", "Alongside Coordinator", "hidden"],
            logo_id_names: [
              "logo_title_id2",
              "logo_title_id3",
              "logo_title_id4",
            ],
            logo_detail: ["", "Alongside Coordinator", ""],
            link: ["", "", ""],
            logo_title_color: [
              "Common_transparent",
              "linear-gradient(to top right, #e7636b 40%, #de7883)",
              "Common_transparent",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: [
                "Common_transparent",
                "#e7636b",
                "Common_transparent",
              ],
              line_color: [
                "Common_transparent",
                "linear-gradient(to top right, #e7636b 40%, #de7883)",
                "Common_transparent",
              ],
            },
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
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_shape_postion: ["Level_5", "Level_4", "Level_3"],
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
            logo_title: ["hidden", "hidden"],
            logo_id_names: ["logo_title_id5", "logo_title_id6"],
            logo_detail: ["", ""],
            link: ["", ""],
            logo_title_color: ["Common_transparent", "Common_transparent"],
            top_down_arrow: {
              display: "false",
            },
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
                    direction: "reverse",
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
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
              bottom_shape_postion: ["Level_5", "Level_4"],
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
            logo_title: ["hidden", "hidden"],
            logo_id_names: ["logo_title_id7", "logo_title_id8"],
            logo_detail: ["", ""],
            link: ["", ""],
            logo_title_color: ["Common_transparent", "Common_transparent"],
            top_down_arrow: {
              display: "false",
            },
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
              bottom_shape_postion: ["", "Level_3"],
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
            logo_title: ["Neurologo"],
            link: [],
            logo_id_names: ["logo_title_id1"],
            logo_detail: ["Neurologo"],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_TopDown_arror"],
              line_color: ["Common_TopDown_Line"],
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: ["Neurologo"],
            logo_id_names: ["logo_title_id2"],
            logo_detail: ["NeuroLogy Department"],
            link: [],
            logo_title_color: ["Common_transparent"],
            top_down_arrow: {
              display: false,
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: ["Neurofisiologo"],
            logo_id_names: ["logo_title_id3"],
            logo_detail: ["Neurofisiologo"],
            link: [],
            logo_title_color: ["Common_transparent"],
            top_down_arrow: {
              display: false,
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: ["Fisioterapista"],
            logo_id_names: ["logo_title_id4"],
            logo_detail: ["Fisioterapista"],
            link: [],
            logo_title_color: ["Common_color_trattamento"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_trattamento_line"],
              line_color: ["Common_color_trattamento"],
            },
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_title: ["Terapista occupaziole"],
            logo_id_names: ["logo_title_id5"],
            logo_detail: ["Terapista occupaziole"],
            link: [],
            logo_title_color: ["Common_color_trattamento"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_trattamento_line"],
              line_color: ["Common_color_trattamento"],
            },
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_title: ["Logopedista"],
            logo_id_names: ["logo_title_id6"],
            logo_detail: ["Logopedista"],
            link: [],
            logo_title_color: ["Common_color_trattamento"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_trattamento_line"],
              line_color: ["Common_color_trattamento"],
            },
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_title: ["Neuropsicologo"],
            logo_id_names: ["logo_title_id7"],
            logo_detail: ["Neuropsicologo"],
            link: [],
            logo_title_color: ["Common_color_trattamento"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_trattamento_line"],
              line_color: ["Common_color_trattamento"],
            },
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
            logo_heading_color: ["Common_color_trattamento"],
            logo_heading_border_color: ["Common_trattamento_line"],
            logo_color: ["Common_color_trattamento"],
            logo_title: ["Psicologo"],
            logo_id_names: ["logo_title_id8"],
            logo_detail: ["Psicologo"],
            link: [],
            logo_title_color: ["Common_color_trattamento"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_trattamento_line"],
              line_color: ["Common_color_trattamento"],
            },
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
              bottom_shape_postion: ["Level_3"],
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
            logo_title: ["MMG"],
            link: ["https://www.youtube.com"],
            logo_id_names: ["logo_title_id1"],
            logo_detail: ["MMG Flow!"],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_TopDown_arror"],
              line_color: ["Common_TopDown_Line"],
            },
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
              bottom_shape_postion: ["Level_1"],
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
            logo_title: ["Neurologo"],
            logo_id_names: ["logo_title_id2"],
            logo_detail: ["NeuroLogy Department"],
            link: ["www.google.com", ""],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: ["Neurofisiologo"],
            logo_id_names: ["logo_title_id3"],
            logo_detail: ["Neurofisiologo"],
            link: ["www.google.com"],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: ["Tecnico di Radiologia"],
            logo_id_names: ["logo_title_id4"],
            logo_detail: ["Tecnico di Radiologia"],
            link: ["www.google.com"],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_2"],
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
            logo_title: ["Neuroimmunologo"],
            logo_id_names: ["logo_title_id5"],
            logo_detail: ["Neuroimmunologo"],
            link: ["www.google.com"],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
            logo_title: ["Neurologo"],
            logo_id_names: ["logo_title_id6"],
            logo_detail: ["Neurologo"],
            link: ["www.google.com"],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
            },
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
              bottom_shape_postion: ["Level_3"],
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
