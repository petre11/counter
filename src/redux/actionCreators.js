import { uniqueId } from "lodash";

import {
  INCREMENT_COUNT,
  DECREMENT_COUNT,
  RESET_COUNT,
  SET_COUNT_INPUT,
  SET_COUNT,
  ADD_SAVED_NUMBER,
  REMOVE_SAVED_NUMBER
} from "./actions";

export const incrementCount = () => {
  return {
    type: INCREMENT_COUNT
  };
};

export const decrementCount = () => {
  return {
    type: DECREMENT_COUNT
  };
};

export const resetCount = () => {
  return {
    type: RESET_COUNT
  };
};

export const setCount = (payload = "") => {
  return {
    type: SET_COUNT,
    payload
  };
};

export const setCountInput = (payload = "") => {
  return {
    type: SET_COUNT_INPUT,
    payload
  };
};

export const addSavedNumber = savedNumberValue => {
  const payload = {
    id: uniqueId(),
    value: savedNumberValue
  };

  return {
    type: ADD_SAVED_NUMBER,
    payload
  };
};

export const removeSavedNumber = savedNumberToRemoveId => {
  return {
    type: REMOVE_SAVED_NUMBER,
    payload: savedNumberToRemoveId
  };
};