import { UPDATE_FIELD } from './action';

const initialState = {
  email: '',
  password: '',
  retypePassword: '',
  firstName: '',
  lastName: '',
  phoneNumber: '',
  address: '',
  town: '',
  region: '',
  passcode: '',
  country: ''
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FIELD:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      };
    default:
      return state;
  }
};

export default formReducer;