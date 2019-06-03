import {
  getFieldsByStep,
  getFieldErrors,
  getStep,
  getStepsOrdered,
  getStepPosition,
} from '../helpers';

export const initialState = {
  isValid: true,
  isSubmitted: false,
  initialStepName: null,
  currentStepName: null,
  steps: [
    /*
    {
      name: 'myStep',
      order: 0,
    }
    */
  ],
  fields: [
    /*
    {
      name: 'myField',
      value: 'Field Value',
      isActive: true,
      validations: [],
      errors: [],
    }
    */
  ],
};

/*
  Form Actions
*/

export const formValidate = () => (state) => {
  const fields = (state.fields || [])
    .map(x => ({
      ...x,
      errors: getFieldErrors(x.name, state.fields),
    }));

  const isValid = fields.every(x => !x.errors.length);
  const step = getStep(state.currentStepName || state.initialStepName, state.steps);
  const steps = (state.steps || []).map(s => ({
    ...s,
    isValid: getFieldsByStep(s.name, fields).every(x => !x.errors.length),
  }));
  const isStepValid = (steps.find(x => x.name === step.name) || {}).isValid;


  return {
    ...state,
    fields,
    steps,
    isValid,
    isStepValid: isStepValid === undefined ? true : isStepValid,
  };
};

export const formSubmit = () => state => ({
  ...state,
  isSubmitted: true,
});


/*
  Step Actions
*/

export const stepRegister = (name, order = 0) => (state) => {
  const step = state.steps.find(x => x.name === name) || {};
  const otherSteps = state.steps.filter(x => x.name !== name);
  const steps = getStepsOrdered([
    ...otherSteps,
    {
      ...step,
      name,
      order,
    },
  ]);

  let newState = {
    ...state,
    steps,
    initialStepName: steps.length ? steps[0].name : null,
  };

  newState = formValidate()(newState);

  return newState;
};

export const stepUnregister = name => (state) => {
  const otherSteps = state.steps.filter(x => x.name !== name);
  const steps = getStepsOrdered(otherSteps);

  let newState = {
    ...state,
    steps,
  };

  newState = formValidate()(newState);

  return newState;
};

export const stepGoNext = () => (state) => {
  const { currentStepName, initialStepName, steps } = state;

  const stepsCount = (steps || []).length;
  const currentStepPosition = getStepPosition(currentStepName || initialStepName, steps);
  let nextStep = stepsCount > 0 ? currentStepPosition + 1 : 0;
  nextStep = nextStep > stepsCount - 1 ? currentStepPosition : nextStep;

  return {
    ...state,
    currentStepName: ((steps || [])[nextStep] || {}).name,
  };
};

export const stepGoPrev = () => (state) => {
  const { currentStepName, initialStepName, steps } = state;

  const currentStepPosition = getStepPosition(currentStepName || initialStepName, steps);

  let prevStep = currentStepPosition - 1;
  prevStep = prevStep < 0 ? 0 : prevStep;

  return {
    ...state,
    currentStepName: ((steps || [])[prevStep] || {}).name,
  };
};

/*
  Field Actions
*/

export const fieldRegister = (
  name,
  {
    value = null,
    step = null,
    validations = [],
  } = {}
) => (state) => {
  const field = state.fields.find(x => x.name === name) || {};
  const otherFields = state.fields.filter(x => x.name !== name);
  const fields = [
    ...otherFields,
    {
      ...field,
      name,
      value: field.value || value,
      isActive: true,
      step,
      validations,
      errors: [],
    },
  ];

  let newState = {
    ...state,
    fields,
  };

  newState = formValidate()(newState);

  return newState;
};

export const fieldUnregister = (name, isKeepValue) => (state) => {
  const field = state.fields.find(x => x.name === name);
  const otherFields = state.fields.filter(x => x.name !== name);

  if (!field) {
    return state;
  }

  const fields = !isKeepValue ? otherFields : [
    ...otherFields,
    {
      ...field,
      isActive: false,
    },
  ];

  let newState = {
    ...state,
    fields,
  };

  newState = formValidate()(newState);

  return newState;
};

export const fieldSetValue = (name, value) => (state) => {
  const field = state.fields.find(x => x.name === name);
  const otherFields = state.fields.filter(x => x.name !== name);

  if (!field) {
    return state;
  }

  const fields = [
    ...otherFields,
    {
      ...field,
      value,
    },
  ];

  let newState = {
    ...state,
    fields,
  };

  newState = formValidate()(newState);

  return newState;
};
