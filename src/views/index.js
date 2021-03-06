export { default as CounterContainer } from "./CounterContainer"
export { default as MainPage } from "./MainPageContainer"
export { default as Header } from "./HeaderContainer"

const state = {
  header: {
    color: "white"
  },
  slides: [
    {
      id: 1,
      type: "infoto",
      themeColor: "black",
      backgroundImageURL: "",
      content: {
        title: "salam",
        text: "inja body  hast",
        link: "link"
      }
    },
    {
      id: 2,
      type: "clip",
      themeColor: "black",
      clipUrl: ""
    },
    {
      id: 3,
      type: "verticalSlides",
      vSlides: [
        {
          id: 1,
          imageUrl: "",
          title: ""
        },
        {
          id: 2,
          imageUrl: "",
          title: ""
        },
        {
          id: 3,
          imageUrl: "",
          title: ""
        }
      ]
    },
    {
      id: 4,
      type: "infoto",
      themeColor: "black",
      backgroundImageURL: "",
      content: {
        title: "salam",
        text: "inja body  hast",
        link: "link"
      }
    },
    {
      id: 5,
      type: "footerLinks",
      themeColor: "black",
      sections: [
        {
          id: 1,
          title: "",
          links: [
            {
              id: 1,
              linkTo: ""
            },
            {
              id: 2,
              linkTo: ""
            },
            {
              id: 3,
              linkTo: ""
            }
          ]
        },
        {
          id: 2,
          title: "",
          links: [
            {
              id: 1,
              linkTo: ""
            },
            {
              id: 2,
              linkTo: ""
            },
            {
              id: 3,
              linkTo: ""
            }
          ]
        },
        {
          id: 3,
          title: "",
          links: [
            {
              id: 1,
              linkTo: ""
            },
            {
              id: 2,
              linkTo: ""
            },
            {
              id: 3,
              linkTo: ""
            }
          ]
        }
      ],
      content: {
        title: "salam",
        text: "inja body  hast",
        link: "link"
      }
    }
  ],
  activeSlideId: 1
}
