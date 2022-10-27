import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Container: [
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 24,
        hidden: false,
        image: "brocklesner.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 2,
        hidden: false,
        image: "cinkara.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 3,
        hidden: false,
        image: "cesaro.webp",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 2,
        hidden: false,
        image: "cinkara.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 5,
        hidden: false,
        image: "edge.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 6,
        hidden: false,
        image: "jindermahal.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 7,
        hidden: false,
        image: "johncena.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 7,
        hidden: false,
        image: "johncena.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 6,
        hidden: false,
        image: "jindermahal.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 10,
        hidden: false,
        image: "kane.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 11,
        hidden: false,
        image: "bigshow.jpg",
      },
    },
    {
      ques: {
        hidden: true,

        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 11,
        hidden: false,
        image: "bigshow.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 5,
        hidden: false,
        image: "edge.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 14,
        hidden: false,
        image: "shemans.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 15,
        hidden: false,
        image: "undertaker.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 16,
        hidden: false,
        image: "raymysterio.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 14,
        hidden: false,
        image: "shemans.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 15,
        hidden: false,
        image: "undertaker.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 16,
        hidden: false,
        image: "raymysterio.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 20,
        hidden: false,
        image: "khali.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 20,
        hidden: false,
        image: "khali.jpeg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 10,
        hidden: false,
        image: "kane.jpg",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 3,
        hidden: false,
        image: "cesaro.webp",
      },
    },
    {
      ques: {
        hidden: true,
        image_ques: "question-mark.gif",
      },
      actualImage: {
        id: 24,
        hidden: false,
        image: "brocklesner.jpg",
      },
    },
  ],
  selected: [],
  steps: 0,
  count: 0,
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    flip: (state, action) => {
      state.Container[action.payload].ques.hidden = false;
      state.Container[action.payload].actualImage.hidden = true;
      if (state.selected.length < 2) {
        state.selected.push(action.payload);
      }

      if (state.selected.length === 2) {
        if (
          state.Container[state.selected[0]].actualImage.id ===
          state.Container[state.selected[1]].actualImage.id
        ) {
          state.Container[state.selected[0]].actualImage.image = "thumb.gif";
          state.Container[state.selected[1]].actualImage.image = "thumb.gif";
        }
      }
    },

    Antiflip: (state) => {
      if (state.selected.length === 2) {
        state.steps += 1;
        state.count = 0;
        state.Container.map((item) => {
          if (item.actualImage.image !== "thumb.gif") {
            item.ques.hidden = true;
          } else {
            state.count += 1;
          }
        });
        state.selected = [];
      }
    },
  },
});

export const { flip, Antiflip } = gameSlice.actions;
export default gameSlice.reducer;
