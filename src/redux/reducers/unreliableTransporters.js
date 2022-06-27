import { createSlice } from "@reduxjs/toolkit";

export const unreliableTransporterSlice = createSlice({
  name: "unreliableTransporter",
  initialState: [
    {
      id: "Stacy",
      businessName: "Happy Puppy",
      owner: "Spacy Stacy",
      aka: "Stacy",
      pics: ["photo1.jpeg", "photo2.jpeg", "photo3.jpeg", "photo0007.jpeg"],
      rating: "1.0",
      offenses: ["dog napping", "extorting owners for more money"],
    },
    {
      id: "Bob",
      businessName: "Bob's fictional transport",
      owner: "Bob D",
      aka: "Bad, Bad Bobby Boy",
      pics: [
        "photo0008.jpeg",
        "photo0009.jpeg",
        "photo0010.jpeg",
        "photo1001.jpeg",
      ],
      rating: "1.3",
      offenses: ["dog napping", "pretending to be deaf"],
    },
    {
      id: "Tony",
      businessName: "Tony's pet transport",
      owner: "Tony T",
      aka: "Terrible Tony",
      pics: [
        "photo1002.jpeg",
        "photo1003.jpeg",
        "photo2001.jpeg",
        "photo2003.jpeg",
        "photo3001.jpeg",
        "photo3002.jpeg",
      ],
      rating: "2.5",
      offenses: ["offense 1", "offense 2", "offense 3"],
    },
  ],
  reducers: {
    add: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    },
    remove: (state, action) => {},
    update: (state, action) => {
      //state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  unreliableTransporterSlice.actions;

export default unreliableTransporterSlice.reducer;
