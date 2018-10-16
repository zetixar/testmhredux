import { CHANGE_SLIDE } from "constants/ActionTypes"

const initialState = {
  headerBackgroundColor: "black",
  activeSlideId: 0,
  slides: [
    {
      id: 20,
      type: "miniSlides",
      themeColor: "white",
      Slides: [
        {
          id: 1,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/wentan-copy-copy.jpg?w=450",
          title: ""
        },
        {
          id: 2,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/HeroImage-template-1920-shari-3.png?w=450",
          title: ""
        },
        {
          id: 3,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/HeroImage-template-1920-shari-3.png?w=450",
          title: ""
        },
        {
          id: 4,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/wentan-copy-copy.jpg?w=450",
          title: ""
        },
        {
          id: 5,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/wentan-copy-copy.jpg?w=450",
          title: ""
        }
      ]
    },
    {
      id: 0,
      type: "infoto",
      themeColor: "black",
      backgroundImageUrl:
        "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/05/Divisions_hero.jpeg?w=1440",
      content: {
        title: "آسوده خاطر",
        text:
          "هدف ما این است که خیالتان را بابت هر گونه نگرانی حقوقی راحت و آسوده کنیم",
        link: "اممم. چه جوریا؟"
      }
    },
    {
      id: 1,
      type: "infoto",
      themeColor: "white",
      backgroundImageUrl:
        "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/05/WhoWeAre3.jpg?h=1440&",
      content: {
        title: "slide 2",
        text: "inja body2  hast",
        link: "link"
      }
    },
    {
      id: 2,
      type: "miniSlides",
      themeColor: "white",
      Slides: [
        {
          id: 1,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/wentan-copy-copy.jpg?w=450",
          title: ""
        },
        {
          id: 2,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/HeroImage-template-1920-shari-3.png?w=450",
          title: ""
        },
        {
          id: 3,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/HeroImage-template-1920-shari-3.png?w=450",
          title: ""
        }
      ]
    },
    {
      id: 3,
      type: "miniSlides",
      themeColor: "white",
      Slides: [
        {
          id: 1,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/wentan-copy-copy.jpg?w=450",
          title: ""
        },
        {
          id: 2,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/HeroImage-template-1920-shari-3.png?w=450",
          title: ""
        },
        {
          id: 3,
          imageUrl:
            "https://cropper.watch.aetnd.com/cdn.aenetworks.com/2018/10/HeroImage-template-1920-shari-3.png?w=450",
          title: ""
        }
      ]
    },
    {
      id: 4,
      type: "infoto",
      themeColor: "black",
      backgroundImageUrl: "",
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
    },
    {
      id: 6,
      type: "clip",
      themeColor: "black",
      clipUrl: ""
    }
  ]
}

export default function counter(state = initialState, action) {
  let nextId
  switch (action.type) {
    case CHANGE_SLIDE:
      // return {...state, backgroundColor: action.payload.backgroundColor}
      nextId = state.activeSlideId
      if (
        action.payload === "next" &&
        state.slides.length - 1 > state.activeSlideId
      ) {
        nextId = state.activeSlideId + 1
      }
      if (action.payload === "prev" && state.activeSlideId > 0) {
        nextId = state.activeSlideId - 1
      }
      return {
        ...state,
        headerBackgroundColor: state.slides[nextId].themeColor,
        activeSlideId: nextId
      }

    default:
      return state
  }
}
