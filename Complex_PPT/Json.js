JSON_Data1 = {
  footer: {
    footer_label: {
      footer_1_label: "Upload from Device",
      footer_2_label: "Clinical Records",
      footer_3_label: "Lab Reports",
      footer_4_label: "External Documents",
      footer_5_label: "Digital Archive",
    },
    footer_label_position_left: {
      footer_1_left: "Level_3",
      footer_2_left: "Level_4",
      footer_3_left: "Level_5",
      footer_4_left: "Level_3",
      footer_5_left: "Level_4",
    },
    label_width: {
      footer_1_width: "92",
      footer_2_width: "85",
      footer_3_width: "67",
      footer_4_width: "50",
      footer_5_width: "60",
    },
    footer_width: "auto",
    footer_lines_color: "linear-gradient(to bottom, #c9c9c97c, #92929263)",
  },
  Page_Configuration: {
    background_color: "#e3ffffff",
    border_color: "black",
    scroll_horizontal: true,
  },
  mid_line_config: {
    color: "#5899e3ff",
    width:"auto",
    shadow:
      "0 0 70px #5899e3ff, 0 0 30px #5899e3ff,0 0 20px #5899e3ff, 0 0 100px #5899e3ff;",
  },
  colors: {
    white_color: "#ffffff",
    black_color: "#000000",
    Common_Header_title: "#242424ff",
    Common_Header_Line: "#adafaf",
    Common_SubHeader_title: "rgba(0, 0, 0, 1)",
    Common_SubHeader_lineRight: "#c4c9ca",
    Common_logo_heading:
      "linear-gradient(to right top, #d967ffff 20%, #54d8f6ff)",
    Common_logo_border: "#34c8a0ff",
    Common_logo: "linear-gradient(to right top, #a334c8 20%, #54e6f6ff)",
    Common_logo_title: "linear-gradient(to right top, #a334c8 20%, #54e6f6ff)",
    Common_TopDown_arror: "#000000ff",
    Common_TopDown_Line: "linear-gradient(to bottom, #5dffccff 70%, #30b4cbff)",
    Common_ConnectingLine_arrow: "#a334c8",
    Common_ConnectingLine_line: "#9f30cb",
    Common_ConnectingRectangle: "#58e3d2",
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
      title: "Document Upload",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "True",
        line_color: "#adafaf",
        circle_color: "#767979",
      },
      start_content: {
        logo_title: "User",
        link: "https://www.youtube.com/",
        steps: [
          "Select File",
          "Preview File or Document",
          "Submit File or Document",
        ],
        stepsLink: ["", "", ""],
        title_detail: "Document upload Start Step",
        steps_details: [
          "Select the file you want to upload",
          "Preview the file or Document",
          "Now Submit the file or Document",
        ],
        configurations: {
          logo_color: "linear-gradient(to right top, #2394b9 10%, #5899e3ff)",
          logo_border_color: "#2394b9",
          logo_para_color:
            "linear-gradient(to right top, #87b3c1ff 1%, #5899e3ff)",
          mid_line_color: "#5899e3ff",
          background_color: ["white_color", "white_color", "white_color"],
          font_color: ["black_color", "black_color", "black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Primary Review",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "true",
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Reviewers",
          configurations: {
            title_color: "Common_SubHeader_title",
          },
          content: {
            logo_heading: ["Junior", "Senior", "Expert"],
            logo_heading_color: [
              "Common_logo_heading",
              "Common_logo_heading",
              "Common_logo_heading",
            ],
            logo_heading_border_color: [
              "Common_logo_border",
              "Common_logo_border",
              "Common_logo_border",
            ],
            logo_color: ["Common_logo", "Common_logo", "Common_logo"],
            logo_title: ["Trainer A", "Trainer B", " Trainer C"],
            link: ["", "", ""],
            logo_id_names: [
              "logo_title_id1",
              "logo_title_id2",
              "logo_title_id3",
            ],
            logo_detail: ["Junior Trainer A", "Senior Trainer B", "Expert C"],
            logo_title_color: [
              "Common_logo_title",
              "Common_logo_title",
              "Common_logo_title",
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
                  starting: "logo_title_id2",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
              ],
              arrow_color: ["Common_ConnectingLine_arrow"],
              line_color: ["Common_ConnectingLine_line"],
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_1",
                },
              ],
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            on_line_content_configuration: {
              content: ["SELECT", "REVIEW", "REJECT"],
              link: ["www.google.com", "", "www.google.com"],
              content_id: [
                "on_line_content_1",
                "on_line_content_2",
                "on_line_content_3",
              ],
              content_details: ["", "Hello World!", "Hello World!"],
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
              bottom_shape_postion: ["Level_1", "Level_1", "Level_1"],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
              timlines: [
                {
                  content: "1 Day Time",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_3",
                  ending: "on_line_content_4",
                },
                {
                  content: "10 day Time",
                  height: "Level_6",
                  show_border: "false",
                  starting: "on_line_content_1",
                  ending: "on_line_content_5",
                },
              ],
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "Final Review",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "true",
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Reviewers",
          configurations: {
            title_color: "Common_SubHeader_title",
          },
          content: {
            logo_heading: ["Tech", "Lead"],
            logo_heading_color: ["Common_logo_heading", "Common_logo_heading"],
            logo_heading_border_color: [
              "Common_logo_border",
              "Common_logo_border",
            ],
            logo_color: ["Common_logo", "Common_logo"],
            logo_title: ["Team A", "Team B"],
            link: ["", ""],
            logo_id_names: ["logo_title_id4", "logo_title_id5"],
            logo_detail: ["Tech Team A", "Lead Team B"],
            logo_title_color: ["Common_logo_title", "Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_TopDown_arror", "Common_TopDown_arror"],
              line_color: ["Common_TopDown_Line", "Common_TopDown_Line"],
            },
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id3",
                  ending: "logo_title_id4",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#b74f00ff"],
              line_color: ["#b74f00ff"],
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_1",
                },
              ],
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            on_line_content_configuration: {
              content: ["Clinic", "Lab"],
              link: ["", ""],
              content_id: ["on_line_content_4", "on_line_content_5"],
              content_details: ["Clinical Records", "Lab Reports"],
              color: ["Common_onLineContent_font", "Common_onLineContent_font"],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
              ],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
              ],
              bottom_shape_color: [
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
              ],
              bottom_shape_postion: ["Level_2", "Level_3"],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
              timlines: [
                {
                  content: "10min Time",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_1",
                  ending: "on_line_content_2",
                },
                {
                  content: "20min Time",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_2",
                  ending: "on_line_content_3",
                },
              ],
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "Approval",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "true",
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Manager",
          configurations: {
            title_color: "Common_SubHeader_title",
          },
          content: {
            logo_heading: ["Manager"],
            logo_heading_color: [
              "linear-gradient(to right top, #ff5e58 1%, #ffc100 55%)",
            ],
            logo_heading_border_color: ["#ffc100"],
            logo_color: [
              "linear-gradient(to right top, #ffc100 1%, #ff5e58 80%)",
            ],
            logo_title: ["Approver"],
            link: [""],
            logo_id_names: ["logo_title_id6"],
            logo_detail: ["Approval Manager"],
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
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_1",
                },
              ],
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            on_line_content_configuration: {
              content: ["Archive"],
              link: [""],
              content_id: ["on_line_content_6"],
              content_details: ["Manager will archive all the documents"],
              color: ["Common_onLineContent_font"],
              background_color: ["Common_onLineContent_Background"],
              bottom_point_color: ["Common_onLineContent_Point"],
              bottom_line_color: ["Common_onLineContent_Line"],
              bottom_shape_color: ["Common_onLineContent_Shape"],
              bottom_shape_postion: ["Level_5"],
            },
            BottomtimelineSeries: {
              background_color:
                "linear-gradient(to right, #eef6dc10 10%, #9fff05ff)",
              border_color: "#bfff00ff",
              timlines: [
                {
                  content: "5 hours Time",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_5",
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

JSON_Data2 = {
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
    footer_width:"auto"
  },
  Page_Configuration: {
    background_color: "#f6fcfc",
    border_color:"black",
    scroll_horizontal:true
  },
  mid_line_config: {
    color: "#58e3d2",
    shadow:
      "0 0 70px #58e3d2, 0 0 30px #b8f4eb,0 0 20px #58e3d2, 0 0 100px #b8f4eb;",
      width:"auto"
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
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: "true",
            line_color: "Common_SubHeader_lineRight",
            on_line_content_configuration: {
              content: ["VISITA", "VISITA", "ESAMI"],
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

JSON_Data3 = {
  footer: {
    footer_label: {
      footer_1_label: "Online",
      footer_2_label: "Database",
      footer_3_label: "Offline",
      footer_4_label: "In-office",
      footer_5_label: "Approved",
    },
    footer_label_position_left: {
      footer_1_left: "Level_7",
      footer_2_left: "Level_6",
      footer_3_left: "Level_7",
      footer_4_left: "Level_7",
      footer_5_left: "Level_6",
    },
    label_width: {
      footer_1_width: "92",
      footer_2_width: "85",
      footer_3_width: "70",
      footer_4_width: "50",
      footer_5_width: "30",
    },
    footer_width: "auto",
    footer_lines_color: "linear-gradient(to bottom, #c5bba790, #faecd6ff)",
  },
  Page_Configuration: {
    background_color: "#fff9e3ff",
    border_color: "black",
    scroll_horizontal: true,
  },
  mid_line_config: {
    color: "#e3b558ff",
    shadow:
      "0 0 70px #e3b758ff, 0 0 30px #e3b758ff,0 0 20px #e3b758ff, 0 0 100px #e3b758ff;",
    width: "auto",
  },
  colors: {
    white_color: "#ffffff",
    black_color: "#000000",
    Common_Header_title: "#242424ff",
    Common_Header_Line: "#adafaf",
    Common_SubHeader_title: "rgba(0, 0, 0, 1)",
    Common_SubHeader_lineRight: "#c4c9ca",
    Common_logo_heading:
      "linear-gradient(to right top, #fff067ff 20%, #f69a54ff)",
    Common_logo_border: "#c89c34ff",
    Common_logo: "linear-gradient(to right top, #c89934ff 20%, #f6c854ff)",
    Common_logo_title:
      "linear-gradient(to right top, #c86534ff 20%, #f6c054ff)",
    Common_TopDown_arror: "#ff0000ff",
    Common_TopDown_Line: "linear-gradient(to bottom, #ff5d5dff 70%, #cb3030ff)",
    Common_ConnectingLine_arrow: "#a334c8",
    Common_ConnectingLine_line: "#9f30cb",
    Common_ConnectingRectangle: "#e3ce58ff",
    Common_onLineContent_font: "#000000",
    Common_onLineContent_Background: "#fff7e6ff",
    Common_onLineContent_Point:
      "linear-gradient(to right top, #b29220ff 1%, #cbb241ff)",
    Common_onLineContent_Line:
      "linear-gradient(to bottom, #eee2bbff 70%, #e1cfa5ff)",
    Common_onLineContent_Shape:
      "linear-gradient(to top, #afa213ff 5%, #d0c045ff)",
    Common_timeLineSeries_Background:
      "linear-gradient(to right, #f6f4dc10 10%, #ffc305)",
    Common_timeLineSeries_Border: "#ffc100",
  },
  body: [
    {
      component: "Start-Header",
      title: "Job Application",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "True",
        line_color: "#adafaf",
        circle_color: "#767979",
      },
      start_content: {
        logo_title: "User",
        link: "https://www.youtube.com/",
        steps: ["Portal", "Browse Jobs", "View Description"],
        stepsLink: ["", ""],
        title_detail: "User will Access Portal",
        steps_details: [
          "User Open Job Portal",
          "User browse Jobs across the portal",
          "All jobs have their description linked to them",
        ],
        configurations: {
          logo_color: "linear-gradient(to right top, #b99b23ff 10%, #e3b558ff)",
          logo_border_color: "#b99d23ff",
          logo_para_color:
            "linear-gradient(to right top, #c1b387ff 1%, #e3ae58ff)",
          mid_line_color: "#e3b558ff",
          background_color: ["white_color", "white_color", "white_color"],
          font_color: ["black_color", "black_color", "black_color"],
          logo_font_color: "white_color",
        },
      },
    },
    {
      component: "Header",
      title: "Application Processing",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "true",
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Reviewers",
          configurations: {
            title_color: "Common_SubHeader_title",
          },
          content: {
            logo_heading: ["AUTO", "AUTO", ""],
            logo_heading_color: [
              "Common_logo_heading",
              "Common_logo_heading",
              "Common_logo_heading",
            ],
            logo_heading_border_color: [
              "Common_logo_border",
              "Common_logo_border",
              "Common_logo_border",
            ],
            logo_color: ["Common_logo", "Common_logo", "Common_logo"],
            logo_title: ["Robot", "Review", "HR"],
            link: ["", "", ""],
            logo_id_names: [
              "logo_title_id1",
              "logo_title_id2",
              "logo_title_id3",
            ],
            logo_detail: [
              "Application received in system",
              "Parse and scan resume using AI tool (keywords, experience match)",
              "Initial screening of resume (basic qualification check)",
            ],
            logo_title_color: [
              "Common_logo_title",
              "Common_logo_title",
              "Common_logo_title",
            ],
            top_down_arrow: {
              display: "true",
              arrow_color: [
                "Common_TopDown_arror",
                "#00000000",
                "Common_TopDown_arror",
              ],
              line_color: [
                "Common_TopDown_Line",
                "#00000000",
                "Common_TopDown_Line",
              ],
            },
            connecting_Line: {
              display: "true",
              connections: [
                {
                  starting: "logo_title_id1",
                  ending: "logo_title_id3",
                  height: "Level_1",
                },
              ],
              arrow_color: ["Common_ConnectingLine_arrow"],
              line_color: ["Common_ConnectingLine_line"],
            },
            connecting_Rectangle: {
              display: "true",
              connections: [
                {
                  starting: "on_line_content_3",
                  start_from_starting: "true",
                  ending: "on_line_content_7",
                  end_from_ending: "false",
                  height: "Level_7",
                  border_thickness: "Level_2",
                },
              ],
              color: ["Common_ConnectingRectangle"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            on_line_content_configuration: {
              content: ["STORAGE", "REVIEW", "SELECT"],
              link: ["www.google.com", "", "www.google.com"],
              content_id: [
                "on_line_content_1",
                "on_line_content_2",
                "on_line_content_3",
              ],
              content_details: [
                "Handled By Robot for storing applications",
                "Handled By Robot for pointing key values from application",
                "Handled by HR to select/Reject Applications",
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
              bottom_shape_postion: ["Level_1", "Level_1", "Level_1"],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
              timlines: [
                {
                  content: "Instant",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_1",
                  ending: "on_line_content_2",
                },
                {
                  content: "5 minutes",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_2",
                  ending: "on_line_content_3",
                },
              ],
            },
          },
        },
      ],
    },
    {
      component: "Header",
      title: "Recuritment Process",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "true",
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "Reviewers",
          configurations: {
            title_color: "Common_SubHeader_title",
          },
          content: {
            logo_heading: ["", "", "AUTO"],
            logo_heading_color: [
              "Common_logo_heading",
              "Common_logo_heading",
              "Common_logo_heading",
            ],
            logo_heading_border_color: [
              "Common_logo_border",
              "Common_logo_border",
              "Common_logo_border",
            ],
            logo_color: ["Common_logo", "Common_logo", "Common_logo"],
            logo_title: ["Recruiter", "HR", "E-Mails"],
            link: ["", ""],
            logo_id_names: [
              "logo_title_id4",
              "logo_title_id5",
              "logo_title_id6",
            ],
            logo_detail: [
              "Recruiter shortlists for further review",
              "Hiring manager reviews detailed application",
              "Schedule auto-email for online technical assessment",
            ],
            logo_title_color: [
              "Common_logo_title",
              "Common_logo_title",
              "Common_logo_title",
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
                  starting: "logo_title_id3",
                  ending: "logo_title_id4",
                  height: "Level_5",
                },
              ],
              arrow_color: ["#b74f00ff"],
              line_color: ["#b74f00ff"],
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_1",
                },
              ],
              color: ["Common_ConnectingRectangle", "#9f30cb"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            on_line_content_configuration: {
              content: ["Process", "Review", "Response"],
              link: ["", "", ""],
              content_id: [
                "on_line_content_4",
                "on_line_content_5",
                "on_line_content_6",
              ],
              content_details: [
                "Recuritment Process Initiated",
                "Review is being seen by HR",
                "Now Email Response sended to Users",
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
              bottom_shape_postion: ["Level_2", "Level_3", "Level_3"],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
              timlines: [
                {
                  content: "1 day",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_3",
                  ending: "on_line_content_4",
                },
                {
                  content: "2-3 day",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_4",
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
      title: "Interview Process",
      configurations: {
        title_color: "Common_Header_title",
        line_right: "true",
        line_color: "Common_Header_Line",
      },
      sub_groups: [
        {
          component: "Sub-Header",
          title: "",
          configurations: {
            title_color: "Common_SubHeader_title",
          },
          content: {
            logo_heading: ["AUTO", ""],
            logo_heading_color: ["Common_logo_heading", "Common_logo_heading"],
            logo_heading_border_color: [
              "Common_logo_border",
              "Common_logo_border",
            ],
            logo_color: ["Common_logo", "Common_logo"],
            logo_title: ["Technical Interview", "Final Interview"],
            link: ["", ""],
            logo_id_names: ["logo_title_id7", "logo_title_id8"],
            logo_detail: ["Technical Interview", "Final HR Round"],
            logo_title_color: ["Common_logo_title", "Common_logo_title"],
            top_down_arrow: {
              display: "true",
              arrow_color: ["Common_TopDown_arror", "Common_TopDown_arror"],
              line_color: ["Common_TopDown_Line", "Common_TopDown_Line"],
            },
            connecting_Rectangle: {
              display: "false",
              connections: [
                {
                  starting: "on_line_content_1",
                  start_from_starting: "true",
                  ending: "on_line_content_10",
                  end_from_ending: "true",
                  height: "Level_15",
                  border_thickness: "Level_1",
                },
              ],
              color: ["Common_ConnectingRectangle"],
            },
            line_right: "false",
            line_color: "Common_SubHeader_lineRight",
            on_line_content_configuration: {
              content: ["DSA", "HR interview"],
              link: [""],
              content_id: ["on_line_content_7", "on_line_content_8"],
              content_details: [
                "Technical team evaluates test results",
                "Conduct HR interview (background & behavior)",
              ],
              color: ["Common_onLineContent_font", "Common_onLineContent_font"],
              background_color: [
                "Common_onLineContent_Background",
                "Common_onLineContent_Background",
              ],
              bottom_point_color: [
                "Common_onLineContent_Point",
                "Common_onLineContent_Point",
              ],
              bottom_line_color: [
                "Common_onLineContent_Line",
                "Common_onLineContent_Line",
              ],
              bottom_shape_color: [
                "Common_onLineContent_Shape",
                "Common_onLineContent_Shape",
              ],
              bottom_shape_postion: ["Level_3", "Level_3"],
            },
            BottomtimelineSeries: {
              background_color: "Common_timeLineSeries_Background",
              border_color: "Common_timeLineSeries_Border",
              timlines: [
                {
                  content: "1 Month",
                  height: "Level_1",
                  show_border: "true",
                  starting: "on_line_content_6",
                  ending: "on_line_content_7",
                },
                {
                  content: "1-2 Month",
                  height: "Level_6",
                  show_border: "false",
                  starting: "on_line_content_5",
                  ending: "on_line_content_8",
                },
              ],
            },
          },
        },
      ],
    },
  ],
};
