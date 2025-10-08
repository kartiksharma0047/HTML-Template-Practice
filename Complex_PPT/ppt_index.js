let collapsibleData = [];
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
      footer_1_left: "Level_5",
      footer_2_left: "Level_0",
      footer_3_left: "Level_7",
      footer_4_left: "Level_4",
      footer_5_left: "Level_2",
    },
    label_width: {
      footer_1_width: "92",
      footer_2_width: "85",
      footer_3_width: "67",
      footer_4_width: "50",
      footer_5_width: "20",
    },
    footer_lines_color: "linear-gradient(to bottom, #f5fbfb, #eaf0f0)",
    footer_width: "auto",
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color: "black",
    scroll_horizontal: true,
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
  body: [
    {
      component: "Start-Header",
      title: "Pre-diagnosi",
      configurations: {
        title_color: "#515151",
        line_right: "True",
        line_color: "#adafaf",
        circle_color: "#767979",
      },
      start_content: {
        logo_title: "Paziente",
        link: "https://www.youtube.com/",
        steps: ["SINTOMI", "REPERTO INCIDENTALE", "SCREENING I LIVELLO"],
        stepsLink: ["https://www.youtube.com/", "", "https://www.youtube.com/"],
        title_detail: "Hello World!",
        steps_details: [
          "Hello World!",
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius suscipit luctus. Aliquam mattis ornare ipsum, nec fermentum diam volutpat quis. Donec posuere et mauris id lobortis. Morbi sit amet posuere augue. Proin id risus neque. Cras blandit elit eget nisl porta tincidunt. Pellentesque blandit, enim at mattis porta, quam elit tincidunt nunc, pellentesque efficitur velit ante vehicula tellus. Mauris lacus sapien, mollis sit amet semper non, blandit vitae metus. Suspendisse et eros lectus. Sed sodales orci cursus, viverra elit sed, mattis magna. Aenean nec quam magna. In fermentum dolor quis velit volutpat, ac egestas nisi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra justo at vehicula.",
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
        line_right: "true",
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Diagnosi a presa in carico",
          configurations: {
            title_color: "Common_SubHeader_title",
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
            logo_title: ["MMG", "Chirurgo Senologo", "Radiologo"],
            link: ["https://www.youtube.com", "", "www.google.com"],
            logo_id_names: [
              "logo_title_id1",
              "logo_title_id2",
              "logo_title_id3",
            ],
            logo_detail: [
              "Hello World!",
              "Hello World!",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius suscipit luctus. Aliquam mattis ornare ipsum, nec fermentum diam volutpat quis. Donec posuere et mauris id lobortis. Morbi sit amet posuere augue. Proin id risus neque. Cras blandit elit eget nisl porta tincidunt. Pellentesque blandit, enim at mattis porta, quam elit tincidunt nunc, pellentesque efficitur velit ante vehicula tellus. Mauris lacus sapien, mollis sit amet semper non, blandit vitae metus. Suspendisse et eros lectus. Sed sodales orci cursus, viverra elit sed, mattis magna. Aenean nec quam magna. In fermentum dolor quis velit volutpat, ac egestas nisi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra justo at vehicula.",
            ],
            logo_title_color: [
              "Common_logo_title",
              "Common_logo_title",
              "linear-gradient(to right top, #a334c8 20%, #530000ff)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: [
                "Common_TopDown_arror",
                "Common_TopDown_arror",
                "Common_TopDown_arror",
              ],
              line_color: [
                "Common_TopDown_Line",
                "Common_TopDown_Line",
                "Common_TopDown_Line",
              ],
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
            line_right: "true",
            line_color: "Common_SubHeader_lineRight",
            above_line_content: {
              content: ["effettua", "effettua", "effettua"],
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam varius suscipit luctus. Aliquam mattis ornare ipsum, nec fermentum diam volutpat quis. Donec posuere et mauris id lobortis. Morbi sit amet posuere augue. Proin id risus neque. Cras blandit elit eget nisl porta tincidunt. Pellentesque blandit, enim at mattis porta, quam elit tincidunt nunc, pellentesque efficitur velit ante vehicula tellus. Mauris lacus sapien, mollis sit amet semper non, blandit vitae metus. Suspendisse et eros lectus. Sed sodales orci cursus, viverra elit sed, mattis magna. Aenean nec quam magna. In fermentum dolor quis velit volutpat, ac egestas nisi euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra justo at vehicula.",
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
              bottom_shape_color: [
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
              ],
              bottom_shape_postion: ["Level_1", "Level_2", "Level_2"],
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
          title: "Decisione Terapeutica",
          configurations: {
            title_color: "Common_SubHeader_title",
          },
          content: {
            logo_heading: [""],
            logo_heading_color: ["Common_logo_heading"],
            logo_heading_border_color: ["Common_logo_border"],
            logo_color: ["Common_logo"],
            logo_title: ["GOM"],
            logo_id_names: ["logo_title_id4"],
            logo_detail: ["Hello World!"],
            link: ["www.google.com"],
            logo_title_color: ["Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_TopDown_arror"],
              line_color: ["Common_TopDown_Line"],
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
            line_right: "false",
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
              bottom_shape_color: ["Common_onLineContent_Shape"],
              bottom_shape_postion: ["Level_2"],
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
            logo_heading_color: [
              "linear-gradient(to right top, #000000ff 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #000000ff)",
            ],
            logo_heading_border_color: ["#a334c8", "#a334c8"],
            logo_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_title: ["Oncologo", "Infermiere"],
            logo_id_names: ["logo_title_id5", "logo_title_id6"],
            logo_detail: ["Hello World", ""],
            link: ["www.google.com", ""],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8", "#a334c8"],
              line_color: [
                "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
                "linear-gradient(to right top, #a334c8 20%, #f65467)",
              ],
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
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
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
            logo_heading_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8", "#a334c8"],
            logo_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_title: ["Chirurgo/ Senologo", "Chirurgo Plastico"],
            logo_id_names: ["logo_title_id7", "logo_title_id8"],
            link: ["www.google.com", ""],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "false",
              arrow_color: ["#a334c8", "#a334c8"],
              line_color: [
                "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
                "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)",
              ],
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
            logo_heading: ["", ""],
            logo_heading_color: [
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
            ],
            logo_heading_border_color: ["#a334c801", "#a334c801"],
            logo_title: ["GOM", "DOM"],
            logo_id_names: ["logo_title_id9", "logo_title_id10"],
            link: ["", ""],
            logo_color: [
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
            ],
            logo_title_color: [
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
              "linear-gradient(to right top, #a334c801 20%, #f6546701)",
            ],
            top_down_arrow: {
              display: "false",
              arrow_color: ["#ffc100", "#ffc100"],
              line_color: [
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
                "linear-gradient(to right, #f6f4dc60 10%, #ffc305)",
              ],
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
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
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
            logo_heading_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            logo_heading_border_color: ["#a334c8"],
            logo_color: ["linear-gradient(to right top, #a334c8 20%, #f65467)"],
            logo_title: ["MMG"],
            logo_id_names: ["logo_title_id11"],
            link: ["www.google.com"],
            logo_title_color: [
              "linear-gradient(to right top, #a334c8 20%, #f65467)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#a334c8"],
              line_color: ["linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"],
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
            logo_heading_color: [
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            ],
            logo_heading_border_color: ["#ffc100"],
            logo_color: [
              "linear-gradient(to right top, #ffc100 1%, #ff5e58 80%)",
            ],
            logo_title: ["GOM"],
            logo_id_names: ["logo_title_id12"],
            link: ["www.google.com"],
            logo_title_color: [
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: ["#ffc100"],
              line_color: ["linear-gradient(to right, #f6f4dc60 10%, #ffc305)"],
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
              bottom_shape_color: [
                "linear-gradient(to top, #1375af 5%, #45d0cb)",
              ],
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

    let html = `
  <div class="start slide-div ${className}">
    <div class="start-mid-back-line"></div>
    <div class="top">
      <h2 class="div-title">${limitText(title, 20)}</h2>
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
    >${limitText(step, 20)}</h5>\n`;
    });

    html += `
      </div>
    </div>
  </div>
`;

    // ✅ Extract configurations
    const titleColor =
      resolveColor(configurations?.title_color, JsonData.colors) || "#515151";

    const lineRight = configurations?.line_right === "True";

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
  }

  .${className} .mid-top .icon_plus_name .fa-user {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
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
    font-size:9px;
    border-radius: 23px;
    position: absolute;
    top: 21px;
    color: ${logo_font_color};
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
  function generateHeaderHTMLandCSS(component, uniqueClassName, colors) {
    const { title, configurations, sub_groups } = component;

    let html = `<div class="Slide-box ${uniqueClassName}">\n`;
    html += `<h1><i class="fa-regular fa-square-caret-right"></i>${title}</h1>\n`;

    html += `<div class="sub-groups">\n`;

    sub_groups.forEach((sg, idx) => {
      html += `<div class="sub-group-div ${uniqueClassName}-sub-group-div${
        idx + 1
      }">\n`;
      html += `<h2>
      <i class="fa-regular fa-square-caret-right"></i>
      ${sg.title}</h2>\n`;

      // Top icons with logo_heading + logo_title
      html += `<div class="subgroups-mid-top">\n`;
      sg.content.logo_title.forEach((logo, i) => {
        const heading = sg.content.logo_heading[i];
        const logoId = sg.content.logo_id_names?.[i] || "";
        const link = sg.content.link?.[i];
        const logoDetail = sg.content.logo_detail?.[i] || "";
        const hasLink = link && link.trim() !== "";

        html += `<div class="icon_plus_name icon_plus_name_${i + 1}">\n`;

        if (heading)
          html += `<span class="span-${i + 1}">${limitText(
            heading,
            5
          )}</span>\n`;
        html += `<i class="fa-solid fa-user fa-user-${i + 1}"></i>\n`;
        html += `<p title="${limitText(logoDetail, 280)}" ${
          hasLink ? ` onclick="window.open('${link}', '_blank')"` : ""
        }${logoId ? ` id="${logoId}"` : ""} class="icon-plus-name-paragraph-${
          i + 1
        }${hasLink ? " Div-link" : ""}">${limitText(logo, 8)}</p>\n`;

        html += `</div>\n`;
      });

      html += `</div>\n`;

      // Above-line content
      if (sg.content.above_line_content?.content?.length) {
        html += `<div class="${uniqueClassName}-above-line-content-${
          idx + 1
        } above-line-content">\n`;

        sg.content.above_line_content.content.forEach((txt, i) => {
          if (txt && txt.trim() !== "") {
            const color = sg.content.above_line_content.color?.[i] || "#000";
            const detail =
              sg.content.above_line_content.content_details?.[i] || txt;

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

        html += `<div class="subgroups-on-line-content ${uniqueClassName}-on-line-content${
          i + 1
        }" id="${contentId}">\n`;
        const link = sg.content.on_line_content_configuration.link?.[i];
        const hasLink = link && link.trim() !== "";
        const contentDetail =
          sg.content.on_line_content_configuration.content_details?.[i] || "";

        const isStriped =
          sg.content.on_line_content_configuration.striping?.[i]?.stripped;

        html += `<h6
      title="${limitText(contentDetail, 280)}"
      class="box-shadow-box${hasLink ? " Div-link" : ""}${
          isStriped ? " striped" : ""
        }"
      ${hasLink ? ` onclick="window.open('${link}', '_blank')"` : ""}>
  ${limitText(c, 10)}
</h6>\n`;

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
    color: ${resolveColor(configurations?.title_color, colors) || "#515151"};
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 20px;
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
    font-size: 10px;
    color: ${
      resolveColor(
        configurations?.sub_title_color || configurations?.title_color,
        colors
      ) || "#515151"
    };
    margin-bottom: 10px;
    padding-bottom: 3px;
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
    width: 100%;
  }
    ${
      sub_groups[0].content.top_down_arrow.display
        ? `
  .${uniqueClassName} .icon_plus_name::after{
    content: "";
    position: absolute;
    width: 1px;
    left: 50%;
    top:55px;
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
    transition:0.1s all;
  }
  .${uniqueClassName} .above-line-content {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 117px;
    position: relative;
  }
  .${uniqueClassName} .above-line-content p {
    font-size: 10px;
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
    font-size: 9px;
    padding: 10px 15px;
    position: relative;
    transition:0.1s all;
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

    sub_groups.forEach((sg, idx) => {
      const logoLength = sg.content?.logo_title?.filter(Boolean)?.length || 0;
      const hasAboveLine = sg.content.above_line_content?.content?.some(
        (c) => c && c.trim() !== ""
      );
      const dynamicWidth = 110 + (logoLength - 1) * 50;

      css += `
.${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .icon_plus_name::after {
      height: ${hasAboveLine ? "120px" : "140px"};
}
.${uniqueClassName} .${uniqueClassName}-sub-group-div${
        idx + 1
      } .icon_plus_name::before {
      top: ${hasAboveLine ? "175px" : "190px"};
}
`;

      css += `
.${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} {
  margin: 0px;
  padding: 0 10px;
}
.${uniqueClassName} .${uniqueClassName}-sub-group-div${idx + 1} h2 {
  color: ${
    resolveColor(sg.configurations?.title_color, colors) || "rgb(81, 81, 81)"
  };
  font-size: 10px;
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
        const showBorder = onLine.bordered?.[index];
        const bgColor =
          resolveColor(onLine.background_color?.[index], colors) || "#e6fffc";
        const fontColor = resolveColor(onLine.color?.[index], colors) || "#000";
        const bottomPoint =
          resolveColor(onLine.bottom_point_color?.[index], colors) ||
          "linear-gradient(to right top, #207cb2 1%, #41cbc8)";
        const bottomLine =
          resolveColor(onLine.bottom_line_color?.[index], colors) ||
          "linear-gradient(to bottom, #bbeeea 70%, #a5c9e1)";
        const bottomShape =
          resolveColor(onLine.bottom_shape_color?.[index], colors) ||
          "linear-gradient(to top, #1375af 5%, #45d0cb)";
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
        const borderColor = resolveColor(borderConfig.color,colors) || "black";
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
        } #${id}::before {
    background: ${bottomShape};
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

      sub_groups.forEach((sg, subGroupIdx) => {
        const hasAboveLineInner = sg.content.above_line_content?.content?.some(
          (c) => c && c.trim() !== ""
        );
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

          css += `
          .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } .${uniqueClassName}-on-line-content${inlineIdx + 1}{
            margin-top: ${hasAboveLineInner ? "4px" : "132px"};
          }

           .${uniqueClassName}-sub-group-div${
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
      }
    `;
        });
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
    gap: 10px;
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

      if (
        sg.content.top_down_arrow?.display === "true" ||
        sg.content.top_down_arrow?.display === true
      ) {
        (sg.content.top_down_arrow.line_color || []).forEach((color, idx) => {
          css += `.${uniqueClassName} .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } .icon_plus_name_${idx + 1}::after {
  background: ${
    resolveColor(color, colors) ||
    "linear-gradient(to bottom, #ff5d62 70%, #9f30cb)"
  };
}\n`;
        });

        (sg.content.top_down_arrow.arrow_color || []).forEach((color, idx) => {
          css += `.${uniqueClassName} .${uniqueClassName}-sub-group-div${
            subGroupIdx + 1
          } .icon_plus_name_${idx + 1}::before {
  border-top: 7px solid ${resolveColor(color, colors) || "#a334c8"};
}\n`;
        });
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
  background-color: ${
    JSON_Data.Page_Configuration.background_color || "#f6fcfc"
  };
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
  top: 55%;
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
  font-size: 9px;
  text-align: right;
  color: #333;
  position:absolute;
}
`;

let dynamicFooterCSS = "";

// Add widths for each footer div
Object.keys(JSON_Data.footer.label_width).forEach((key, idx) => {
  let widthValue = parseFloat(JSON_Data.footer.label_width[key]);

  // If the value is NaN (like if user passes "abc"), default to 70
  if (isNaN(widthValue)) widthValue = 70;

  // Clamp the value between 0 and 100
  widthValue = Math.max(0, Math.min(200, widthValue));

  // Add % at the end for CSS
  dynamicFooterCSS += `.footer-dark-five-lines > div:nth-child(${
    idx + 1
  }) { width: ${widthValue}%; }\n`;
});

const levelToPixel = (levelString) => {
  const defaultLevel = 10;
  const totalLevels = 20;
  const maxOffset = 140;
  let level = parseInt(levelString?.replace("Level_", ""), 10);
  if (isNaN(level)) level = defaultLevel;
  level = Math.max(0, Math.min(totalLevels, level));
  const offsetFromCenter = level - defaultLevel;
  const pixelValue = (offsetFromCenter / defaultLevel) * maxOffset;

  return `${pixelValue}px`;
};

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
  footerHTML += `<div><h4 class="footer-label-${idx + 1}">${
    labels[key]
  }</h4></div>\n`;
});

let userScale = parseFloat(JSON_Data.scaling);
if (isNaN(userScale)) {
  userScale = 1; // default
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

//  Adjust Mid-Line Width Dynamically
function adjustMidLineWidth(JSON_Data) {
  const pptBox = document.getElementById("PPT-Box");
  const midLine = pptBox?.querySelector(".mid-Line");
  if (!pptBox || !midLine) return;

  const allChildren = pptBox.querySelectorAll("*[id^='logo_title_id']");
  const pptRect = pptBox.getBoundingClientRect();

  let maxRight = 0;
  let lastVisibleId = null;

  // 1. Track farthest visible element only
  allChildren.forEach((el) => {
    const rect = el.getBoundingClientRect();

    // Check visibility within PPT box (not full screen)
    const isVisible = rect.right > pptRect.left && rect.left < pptRect.right;
    if (isVisible) {
      const relativeRight = rect.right - pptRect.left;
      if (relativeRight > maxRight) {
        maxRight = relativeRight;
        lastVisibleId = el.id;
      }
    }
  });

  // 2. Determine last parent's logos
  let logoCount = 0;
  let lastParentId = null;
  try {
    const array = JSON_Data.body;
    const lastSubGroups = array[array.length - 1].sub_groups;
    const lastContent = lastSubGroups[lastSubGroups.length - 1]?.content;
    const lastLogoIds = lastContent?.logo_id_names || [];
    logoCount = lastLogoIds.length;

    if (lastLogoIds.length > 0) {
      lastParentId = lastLogoIds[lastLogoIds.length - 1]; // last element's id
    }
  } catch (err) {
    console.warn("Could not determine logo count from JSON_Data:", err);
  }

  // 3. Decide offset base (by logo count)
  let offset = 20;
  if (logoCount === 1) offset = 42;
  else if (logoCount === 2) offset = 26;

  // 4. Add *extra* 20px if last parent is NOT visible
  if (lastParentId && lastVisibleId !== lastParentId) {
    offset += 46; // hardcoded extra width
  }

  // 5. Apply width logic
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

  // 1. Track farthest visible element only
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

  // 2. Determine last parent's logos
  let logoCount = 0;
  let lastParentId = null;
  try {
    const array = JSON_Data.body;
    const lastSubGroups = array[array.length - 1].sub_groups;
    const lastContent = lastSubGroups[lastSubGroups.length - 1]?.content;
    const lastLogoIds = lastContent?.logo_id_names || [];
    logoCount = lastLogoIds.length;

    if (lastLogoIds.length > 0) {
      lastParentId = lastLogoIds[lastLogoIds.length - 1]; // last element's id
    }
  } catch (err) {
    console.warn("Could not determine logo count from JSON_Data:", err);
  }

  // 3. Decide base padding by logo count
  let padding_border_width_add = 20; // default >2
  if (logoCount === 1) padding_border_width_add = 40;
  else if (logoCount === 2) padding_border_width_add = 24;

  // 4. Add extra 20px if last parent is NOT visible
  if (lastParentId && lastVisibleId !== lastParentId) {
    padding_border_width_add += 48;
  }

  // 5. Apply width logic
  const footerWidthSetting = (
    JSON_Data.footer?.footer_width || "auto"
  ).toLowerCase();

  if (footerWidthSetting === "default") {
    footer.style.width = `100%`;
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
                z-index: 1;
                top: ${topH + top}px;
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
                transform: rotate(${angle}deg);
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

// Rendering Timeline Series
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
        const topH = Math.min(Math.max(rawTopH, 30), 210);

        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const pptRect = pptBox.getBoundingClientRect();

        const startCenterX =
          startRect.left - pptRect.left + startRect.width / 2;
        const endCenterX = endRect.left - pptRect.left + endRect.width / 2;
        const width2 = Math.abs(endCenterX - startCenterX);
        const left = startRect.left - pptRect.left + startRect.width / 2;
        const top = startRect.top - pptRect.top;

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

        // --- Add timeline div ---
        const div = document.createElement("div");
        div.className = timelineClass;
        div.innerHTML = `<p>${item.content}</p><i class="fa-regular fa-clock"></i>`;
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
          95
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

        // 🔶 Shape mapping (NEW PART)
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
            top: ${topOffset}px;
            z-index: 2;
            overflow: visible;
            display: flex;
            justify-content: center;
            align-items: center;
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
      drawConnectingRectangle(JSON_Data);
      adjustFooterWidth(JSON_Data);
      adjustMidLineWidth(JSON_Data);
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

        if (!childItem.collapsed) {
          // Collapse subgroup
          childItem.collapsed = true;
          if (labelSpan) labelSpan.style.display = "none";
          icon.title = labelText; // Tooltip now matches label
          if (midTop) midTop.style.display = "none";
          if (onLine) onLine.style.display = "none";
          icon.classList.remove("fa-square-caret-right");
          icon.classList.add("fa-square-caret-down");
        } else {
          // Expand subgroup
          childItem.collapsed = false;
          if (labelSpan) labelSpan.style.display = "";
          icon.removeAttribute("title");
          if (midTop) midTop.style.display = "";
          if (onLine) onLine.style.display = "";
          icon.classList.remove("fa-square-caret-down");
          icon.classList.add("fa-square-caret-right");
        }

        // redraw after any toggle
        drawBottomTimelineSeries(JSON_Data);
        drawConnectingLines(JSON_Data);
        drawConnectingRectangle(JSON_Data);
        adjustFooterWidth(JSON_Data);
        adjustMidLineWidth(JSON_Data);
      });
    }
  });
}

collapsabile();
