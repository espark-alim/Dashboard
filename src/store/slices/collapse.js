import { createSlice } from "@reduxjs/toolkit";

const Collapse = createSlice({
    name: "Collapse",
    initialState: {
        isCollapsed: true,
    },
    reducers: {
        handleCollapse: (state, action) => {
            state.isCollapsed = action.payload;
        },
    },
});

export const { handleCollapse } = Collapse.actions;
export default Collapse.reducer;