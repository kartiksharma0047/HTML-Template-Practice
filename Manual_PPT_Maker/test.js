const JsonData1 = [
  {
    page: "Page1",
    Data: [
      {
        component: "Title",
        font_size: "40px",
        margin: "10px 0",
        color: "black",
        text_align: "left",
        content: "Water Management",
      },
      {
        component: "Heading",
        font_size: "30px",
        margin: "10px 0",
        color: "black",
        content: "Conservation Techniques",
      },
      {
        component: "Description",
        font_size: "15px",
        margin: "5px 0",
        color: "black",
        text_align: "left",
        content:
          "Water management involves planning, developing, and managing water resources effectively. It includes practices such as rainwater harvesting, watershed management, and sustainable irrigation methods.",
      },
      {
        component: "Section",
        display: "flex",
        align_items: "center",
        justify_content: "space-evenly",
        height: "300px",
        width: "100%",
        margin: "15px 0",
        child_components: [
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "200px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Rainwater Harvesting",
              },
              {
                component: "Description",
                font_size: "15px",
                margin: "5px 0",
                color: "black",
                text_align: "left",
                content:
                  "Collecting and storing rainwater for reuse before it reaches the aquifer.",
              },
            ],
          },
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "200px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Watershed Management",
              },
              {
                component: "Image",
                display: "flex",
                align_items: "center",
                justify_content: "center",
                image_link: "./Images/Screenshots_PPT/Xebia_logo.png",
                height: "150px",
                width: "150px",
              },
            ],
          },
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "200px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Smart Irrigation",
              },
              {
                component: "Bullet-Points",
                margin: "0px 0px",
                li: {
                  font_size: "15px",
                  color: "black",
                },
                points: [
                  "Drip systems",
                  "Sensors & timers",
                  "Efficient water usage",
                  "Benefits:",
                ],
              },
            ],
          },
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "200px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Greywater Recycling",
              },
              {
                component: "Description",
                font_size: "15px",
                margin: "5px 0",
                color: "black",
                text_align: "left",
                content:
                  "Reusing wastewater from sinks, showers, and washing machines for gardening and flushing.",
              },
            ],
          },
        ],
      },
    ],
  },
];

const JsonData2 = [
  {
    page: "Page1",
    Data: [
      {
        component: "Title",
        font_size: "40px",
        margin: "10px 0",
        color: "black",
        text_align: "left",
        content: "Title of Project",
      },
      {
        component: "Description",
        font_size: "15px",
        margin: "5px 0",
        color: "black",
        text_align: "left",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nulla neque, posuere eu porta eu, ultricies quis elit. Phasellus ac euismod est. Nulla non dui ut turpis vehicula interdum. Nullam in mauris vitae sapien aliquam commodo. Maecenas euismod massa in leo pellentesque varius ut eu diam. Nulla ac iaculis eros.",
      },
      {
        component: "Heading",
        font_size: "30px",
        margin: "10px 0",
        color: "black",
        content: "Heading",
      },
      {
        component: "Section",
        display: "flex",
        align_items: "center",
        justify_content: "space-evenly",
        height: "300px",
        width: "100%",
        margin: "15px 0",
        child_components: [
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "300px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Sub Heading 1",
              },
              {
                component: "Image",
                display: "flex",
                align_items: "center",
                justify_content: "center",
                image_link: "./Images/Screenshots_PPT/Xebia_logo.png",
                height: "150px",
                width: "150px",
              },
            ],
          },
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "300px",
            contents: [
              {
                component: "Sub-Heading",
                font_size: "20px",
                margin: "10px 0",
                color: "black",
                content: "Sub Heading 2",
              },
              {
                component: "Table",
                child_components: [
                  {
                    component: "table_heading",
                    font_size: "17px",
                    color: "black",
                    text_align: "center",
                    border: "1px solid black",
                    padding: "6px 13px",
                    content: "Head 1",
                    child_components_extended: [
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 1",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 2",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 3",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 4",
                      },
                    ],
                  },
                  {
                    component: "table_heading",
                    font_size: "17px",
                    color: "black",
                    text_align: "center",
                    border: "1px solid black",
                    padding: "6px 13px",
                    content: "Head 2",
                    child_components_extended: [
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 5",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 6",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 7",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 8",
                      },
                    ],
                  },
                  {
                    component: "table_heading",
                    font_size: "17px",
                    color: "black",
                    text_align: "center",
                    border: "1px solid black",
                    padding: "6px 13px",
                    content: "Head 3",
                    child_components_extended: [
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 9",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 10",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 11",
                      },
                      {
                        component: "table_data",
                        font_size: "17px",
                        color: "black",
                        text_align: "center",
                        border: "1px solid black",
                        padding: "6px 13px",
                        content: "Data 12",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// Project Assumptions Page 1 Json
const JsonData3 = [
  {
    page: "Page1",
    Data: [
      {
        component: "Section",
        display: "flex",
        align_items: "center",
        justify_content: "space-evenly",
        height: "100%",
        width: "100%",
        margin: "5px 0",
        child_components: [
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "left",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 5px",
            height: "100%",
            width: "max-content",
            contents: [
              // Title
              {
                component: "Title",
                font_size: "27px",
                margin: "10px 0 20px 0",
                color: "#4d435f",
                text_align: "left",
                content: "Implementation & Timeline Assumptions",
              },
              // Heading 1
              {
                component: "Heading",
                font_size: "16px",
                margin: "0px 0px 10px 0",
                color: "#4d435f",
                content: "PROJECT SCOPE AND TIMELINES",
              },
              // Bullet Points 1
              {
                component: "Bullet-Points",
                margin: "0px 0px 10px 0",
                li: {
                  font_size: "13px",
                  color: "black",
                },
                points: [
                  "Discovery Phase Deliverables: Discovery Phase Deliverables: PartnerRe will provide all necessary business requirements, use cases, and stakeholder inputs as needed during the discovery phase to finalize the product releases backlog. Any delays in providing this information may impact timelines.​",
                  "Flexibility in Scope: The proposed implementation follows a Fixed capacity model. Any additions or changes to the agreed scope after Sprint 0 (discovery), will be treated as change requests and may result in revised timelines and costs. Xebia will ensure to cater any critical feedbacks in the current release to ensure the release is providing value to the end users, but this can be subjected to the impact it might have on timeline and cost.​",
                  "Project Timeline Dependencies: Timelines are based on the assumption that all PartnerRe approvals, data inputs, and integrations are provided on time. Delays in these will impact the overall schedule​",
                ],
              },
              // Heading 2
              {
                component: "Heading",
                font_size: "16px",
                margin: "0px 0px 10px 0",
                color: "#4d435f",
                content: "INFRASTRUCTURE AND RESOURCES",
              },
              // Bullet Points 2
              {
                component: "Bullet-Points",
                margin: "0px 0px 10px 0",
                li: {
                  font_size: "13px",
                  color: "black",
                },
                points: [
                  "Infrastructure Readiness: PartnerRe is responsible for procuring and setting up the necessary infrastructure (project management tools and others as needed), Appian environments, and licensing before the development kick-off. Any delays or unavailability of these will impact timelines and are outside Xebia’s control.​",
                  "Integration Readiness: It is assumed that PartnerRe will provide APIs and system integration details. Xebia will not be accountable for delays caused by missing or incomplete integration readiness. Xebia's efforts include consuming these integrations API inside Appian for different underwriting processes.",
                  "Testing Environments: PartnerRe will ensure the availability of a production-like testing environment for end-to-end testing. Delays in providing this environment will affect project progress.​",
                  "Project Resources: All the team working on the project from Xebia side will be remote/ off-shore. Xebia has offices in UK/ Europe, Teams based out of them can participate in the project as required.",
                ],
              },
              // Heading 3
              {
                component: "Heading",
                font_size: "16px",
                margin: "0px 0px 10px 0",
                color: "#4d435f",
                content: "COLLABORATION AND GOVERNANCE",
              },
              // Bullet Points 3
              {
                component: "Bullet-Points",
                margin: "0px 0px 10px 0",
                li: {
                  font_size: "13px",
                  color: "black",
                },
                points: [
                  "Single Point of Contact (SPOC): PartnerRe will assign a dedicated IT SPOC to coordinate requirements, integration details, and approvals. Delays caused by the absence of a SPOC will impact the project timeline.​",
                  "Stakeholder Approvals: Any delays in obtaining approvals from PartnerRe stakeholders during UAT phases may impact delivery timelines and are not Xebia's responsibility.",
                  "Project Timeline Dependencies: Timelines are based on the assumption that all PartnerRe approvals, data inputs, and integrations are provided on time. Delays in these will impact the overall schedule​",
                ],
              },
              // Description 1
              {
                component: "Description",
                font_size: "12px",
                margin: "10px 0 0 0",
                color: "red",
                text_align: "left",
                content:
                  "*These assumptions are based on the current understanding and will be revisited and refined during the discovery phase (Sprint 0) to align with finalized project details.​",
              },
            ],
          },
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "end",
            justify_content: "end",
            flex_direction: "column",
            padding: "0 5px",
            height: "100%",
            width: "300px",
            contents: [
              {
                component: "Image",
                display: "flex",
                align_items: "center",
                justify_content: "center",
                image_link:
                  "./Images/Assumptions_PPT/Cloud Computing Specialist Quantitative Analyst clipart.png",
                height: "150px",
                width: "150px",
              },
            ],
          },
        ],
      },
    ],
  },
];

// Executive Summary Page 7 Json
const JsonData4 = [
  {
    page: "Page1",
    Data: [
      // Title 1
      {
        component: "Title",
        font_size: "40px",
        margin: "0px 0 50px 0",
        color: "#6a205f",
        text_align: "left",
        content: "Executive Summary​",
      },
      // Description 1
      {
        component: "Description",
        font_size: "15px",
        margin: "10px 0 0 0",
        color: "#595959",
        text_align: "left",
        content:
          "We express our enthusiasm for the opportunity to respond to the Request for Information regarding the Business Process Management Automated System released by Abu Dhabi Department of Education and Knowledge.​",
      },
      // Description 2
      {
        component: "Description",
        font_size: "15px",
        margin: "10px 0 0 0",
        color: "#595959",
        text_align: "left",
        content:
          "At Xebia, we pride ourselves on our commitment to innovative technology solutions, and we believe that our expertise aligns perfectly with ADEK's vision for enhancing operational efficiency and service delivery.​",
      },
      // Description 3
      {
        component: "Description",
        font_size: "15px",
        margin: "10px 0 0 0",
        color: "#595959",
        text_align: "left",
        content:
          "Having thoroughly reviewed the requirements outlined in the RFI, we understand the need for a robust, user-friendly BPM solution that streamlines processes and improves collaboration.​",
      },
      // Description 4
      {
        component: "Description",
        font_size: "15px",
        margin: "10px 0 0 0",
        color: "#595959",
        text_align: "left",
        content:
          "We are excited to highlight the potential options of the MS-Power Platform and Appian platform, which are well-suited to provide the necessary features such as process automation, real-time analytics, and seamless integration with existing systems. Our experienced team is ready to leverage the capabilities of selected platform to deliver a tailored solution that meets ADEK's specific needs while ensuring high-quality outcomes.",
      },
      // Description 5
      {
        component: "Description",
        font_size: "15px",
        margin: "10px 0 50px 0",
        color: "#595959",
        text_align: "left",
        content:
          "We look forward to the possibility of collaborating with you to elevate ADEK's operational excellence.",
      },
      // Line Through 1
      {
        component: "line-through",
        position: "relative",
        border_top: "1px dashed #d9d9d9",
        width: "100%",
        contents: {
          component: "line_through_heading",
          position: "absolute",
          margin: "0",
          color: "#595959",
          font_size: "19px",
          background_color: "white",
          padding: "0 40px",
          top: "0px",
          left: "50%",
          transform: "translate(-50%,-50%)",
          content: "Our Value Proposition",
        },
      },
      // Section 1
      {
        component: "Section",
        display: "flex",
        align_items: "center",
        justify_content: "space-between",
        height: "max-content",
        width: "100%",
        margin: "30px 0 0 0",
        child_components: [
          // Sub-section 1
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "center",
            justify_content: "center",
            flex_direction: "column",
            background_color: "#793b74",
            padding: "0 10px",
            height: "170px",
            width: "250px",
            contents: [
              // Sub-Heading 1
              {
                component: "Sub-Heading",
                font_size: "19px",
                margin: "0px 0px 10px 0px",
                color: "white",
                content: "Client-first Mindset",
              },
              // Description 6
              {
                component: "Description",
                font_size: "13px",
                margin: "0px 0 10px 0",
                color: "white",
                text_align: "center",
                content:
                  "We build long-lasting relationships with our customers. We work on common goals and trust by showing genuine interest.​​",
              },
            ],
          },
          // Sub-section 2
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "center",
            justify_content: "center",
            flex_direction: "column",
            background_color: "#793b74",
            padding: "0 10px",
            height: "170px",
            width: "250px",
            contents: [
              // Sub-Heading 2
              {
                component: "Sub-Heading",
                font_size: "19px",
                margin: "0px 0px 10px 0px",
                color: "white",
                content: "Partner Ecosystem",
              },
              // Description 7
              {
                component: "Description",
                font_size: "13px",
                margin: "0px 0 10px 0",
                color: "white",
                text_align: "center",
                content:
                  "Xebia is  a Microsoft Solution Partner in various designations. We are also an Elite Solution Appian Partner, offering tailored professional services with number of successful implementations.",
              },
            ],
          },
          // Sub-section 3
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "center",
            justify_content: "center",
            flex_direction: "column",
            background_color: "#793b74",
            padding: "0 10px",
            height: "170px",
            width: "250px",
            contents: [
              // Sub-Heading 3
              {
                component: "Sub-Heading",
                font_size: "19px",
                margin: "0px 0px 10px 0px",
                color: "white",
                content: "Engineering Excellence",
              },
              // Description 8
              {
                component: "Description",
                font_size: "13px",
                margin: "0px 0 10px 0",
                color: "white",
                text_align: "center",
                content:
                  "Apt expertise as per requirements​. Software engineering best practices​. Xebia Academy and CoE’s for skill enhancement and trainings​​​",
              },
            ],
          },
          // Sub-section 4
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "center",
            justify_content: "center",
            flex_direction: "column",
            background_color: "#793b74",
            padding: "0 10px",
            height: "170px",
            width: "250px",
            contents: [
              // Sub-Heading 4
              {
                component: "Sub-Heading",
                font_size: "19px",
                margin: "0px 0px 10px 0px",
                color: "white",
                content: "Cost Optimization",
              },
              // Description 9
              {
                component: "Description",
                font_size: "13px",
                margin: "0px 0 10px 0",
                color: "white",
                text_align: "center",
                content:
                  "High-quality solution at competitive price through right-shoring of people, minimal timelines and robust program management.",
              },
            ],
          },
        ],
      },
    ],
  },
];

// Timeline ppt Page 1 Chart
const JsonData5 = [
  {
    page: "Page1",
    Data: [
      // Title 1
      {
        component: "Title",
        font_size: "40px",
        margin: "0px 0 50px 0",
        color: "#73658e",
        text_align: "left",
        content: "Implementation Timeline (11 Months)",
      },
      {
        component: "TimeLine_Chart",
        projectStages: [
          { name: "Discovery", color: "#491e47" },
          { name: "Development", color: "#445bb5" },
          { name: "UAT", color: "#00b050" },
          { name: "Go live", color: "#ffc000" },
          { name: "Hypercare", color: "#f77976" },
        ],
        totalMonths: 12,
        totalSprints: 24,
        timelineData: [
          // Discovery Data
          {
            stage: "Discovery",
            color: "#491e47",
            data: [
              {
                title: "0.5 Month",
                startSprint: 0,
                duration: 1,
              },
              {
                title: "0.5 Month",
                startSprint: 8,
                duration: 1,
              },
            ],
          },
          // Development Data
          {
            stage: "Development",
            color: "#445bb5",
            data: [
              {
                title: "3 Month",
                startSprint: 1,
                duration: 6,
              },
              {
                title: "4 Month",
                startSprint: 10,
                duration: 8,
              },
            ],
          },
          // UAT Data
          {
            stage: "UAT",
            color: "#00b050",
            data: [
              {
                title: "1 Month",
                startSprint: 7,
                duration: 2,
              },
              {
                title: "1.5 Month",
                startSprint: 18,
                duration: 3,
              },
            ],
          },
          // Go live Data
          {
            stage: "Go live",
            color: "#ffc000",
            data: [
              {
                title: "0.5 Month",
                startSprint: 21,
                duration: 1,
              },
            ],
          },
          // Hypercare Data
          {
            stage: "Hypercare",
            color: "#f77976",
            data: [
              {
                title: "1 Month",
                startSprint: 9,
                duration: 2,
              },
              {
                title: "1 Month",
                startSprint: 22,
                duration: 2,
              },
            ],
          },
        ],
      },
    ],
  },
];

const JsonData6 = [
  {
    page: "Page 1",
    Data: [
      // Title
      {
        component: "Title",
        font_size: "40px",
        margin: "0px 0 100px 0",
        color: "#73658e",
        text_align: "center",
        content: "Chart Implementation",
      },
      // Section
      {
        component: "Section",
        display: "flex",
        align_items: "center",
        justify_content: "space-between",
        height: "300px",
        width: "100%",
        margin: "15px 0",
        child_components: [
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "center",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "50%",
            contents: [
              // Pie Chart
              {
                component: "Chart",
                type: "pie",
                width: 500,
                height: 350,
                margin: "10px 0",
                data: {
                  labels: [
                    "In-office Materials",
                    "Print Advertising",
                    "Out-of-home Advertising",
                    "Digital Advertising",
                    "Marketing Liaison",
                    "Targeted Social Media Post",
                  ],
                  datasets: [
                    {
                      data: [4, 37, 26, 18, 8, 7],
                      backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                        "#7EC850",
                      ],
                      borderColor: "#ffffff",
                    },
                  ],
                },
              },
            ],
          },
          {
            component: "Sub-Section",
            display: "flex",
            align_items: "center",
            justify_content: "center",
            flex_direction: "column",
            padding: "0 15px",
            height: "100%",
            width: "50%",
            contents: [
              // Bar Chart
              {
                component: "Chart",
                type: "bar",
                width: 500,
                height: 350,
                margin: "10px 0",
                data: {
                  labels: [
                    "In-office Materials",
                    "Print Advertising",
                    "Out-of-home Advertising",
                    "Digital Advertising",
                    "Marketing Liaison",
                    "Targeted Social Media Post",
                    "Website/SEO Vendors",
                  ],
                  datasets: [
                    {
                      label: "Bar Chart",
                      data: [4, 37, 26, 18, 8, 2, 5],
                      backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#4BC0C0",
                        "#9966FF",
                        "#FF9F40",
                        "#7EC850",
                      ],
                      borderColor: "#ffffff",
                    },
                  ],
                },
                options: {
                  plugins: {
                    legend: {
                      display: true,
                    },
                    title: {
                      display: false,
                    },
                  },
                  layout: {
                    padding: 0,
                  },
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

export { JsonData1, JsonData2, JsonData3, JsonData4, JsonData5, JsonData6 };
