const defaultState = {
    categoryFilter: null,
    companyFilter: null
};

const GET_CATEGORY_FILTER = "GET_CATEGORY_FILTER";
const SET_CATEGORY_FILTER = "SET_CATEGORY_FILTER";
const GET_COMPANY_FILTER = "GET_COMPANY_FILTER";
const SET_COMPANY_FILTER = "SET_COMPANY_FILTER";

export function filtersReducer(state = defaultState, action) {
    switch (action.type) {
        case GET_CATEGORY_FILTER:
            return state.categoryFilter;
        case SET_CATEGORY_FILTER:
            return { ...state, categoryFilter: action.payload };
        case GET_COMPANY_FILTER:
            return state.companyFilter;
        case SET_COMPANY_FILTER:
            return { ...state, companyFilter: action.payload };
        default:
            return state;
    };
};

export const getCategoryAction = payload => ({ type: GET_CATEGORY_FILTER, payload });
export const setCategoryAction = payload => ({ type: SET_CATEGORY_FILTER, payload });
export const getCompanyAction = payload => ({ type: GET_COMPANY_FILTER, payload });
export const setCompanyAction = payload => ({ type: SET_COMPANY_FILTER, payload });