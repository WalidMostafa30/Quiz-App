import { createSlice } from "@reduxjs/toolkit";
import { questionsData } from "../assets/Data";

const initialState = {
  questions: [],
  score: 0,
};

const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    getQuestions: (state, action) => {
      state.questions = questionsData.filter(
        (question) => question.category === action.payload
      );
    },

    getScore: (state, action) => {
      state.score = action.payload;
    },
  },
});

export const { getQuestions, getScore } = questionSlice.actions;
export default questionSlice.reducer;
