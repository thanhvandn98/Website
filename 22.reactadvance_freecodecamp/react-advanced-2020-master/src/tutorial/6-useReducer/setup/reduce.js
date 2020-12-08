export const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "ADD_ITEM") {
        const newPeople = [...state.people, action.payday];
        return {
        ...state,
        people: newPeople,
        isModalOpen: true,
        modalContent: "item added",
        };
    }
    if (action.type === "NO_VALUE") {
        return { ...state, isModalOpen: true, modalContent: "Enter right now!" };
    }
    if (action.type === "ClOSE_MODAL") {
        return { ...state, isModalOpen: false };
    }
    if (action.type === "REMOVE_ITEM") {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payday
        );
        return { ...state, people: newPeople };
    }
};
