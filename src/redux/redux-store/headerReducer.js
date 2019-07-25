const SET_PAGE_LOGO = 'SET_PAGE_LOGO';
const MAIN = `https://www.avito.st/s/cc/resources/35f5a0d67b53.svg`;


let initialState = {
    logo: MAIN
};

const headerReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PAGE_LOGO:
            return {
                ...state,
                logo: action.logo
            };
        default: return state
    }
};
export const setPageLogo = (logo) => ({type: SET_PAGE_LOGO, logo});

export default headerReducer