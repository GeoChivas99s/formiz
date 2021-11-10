(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{66:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var a=t(2),l=t(6),i=(t(0),t(83)),r=["components"],o={id:"use-field",title:"useField() hook"},s={unversionedId:"core/use-field",id:"core/use-field",isDocsHomePage:!1,title:"useField() hook",description:"Concept",source:"@site/docs/core/useField-hook.mdx",slug:"/core/use-field",permalink:"/docs/core/use-field",editUrl:"https://github.com/ivan-dalmet/formiz/edit/master/documentation/docs/core/useField-hook.mdx",version:"current",sidebar:"docs",previous:{title:"useForm() hook",permalink:"/docs/core/use-form"},next:{title:"Validation Rules",permalink:"/docs/validations/rules"}},c=[{value:"Concept",id:"concept",children:[]},{value:"Hooks methods",id:"hooks-methods",children:[{value:"setValue()",id:"setvalue",children:[]},{value:"validating.start() &amp; validating.end()",id:"validatingstart--validatingend",children:[]}]},{value:"Hook values",id:"hook-values",children:[{value:"value",id:"value",children:[]},{value:"valueDebounced",id:"valuedebounced",children:[]},{value:"id",id:"id",children:[]},{value:"isValid",id:"isvalid",children:[]},{value:"isValidating",id:"isvalidating",children:[]},{value:"isPristine",id:"ispristine",children:[]},{value:"isSubmitted",id:"issubmitted",children:[]},{value:"errorMessage",id:"errormessage",children:[]},{value:"errorMessages",id:"errormessages",children:[]},{value:"resetKey",id:"resetkey",children:[]}]},{value:"Hook extra values",id:"hook-extra-values",children:[{value:"otherProps",id:"otherprops",children:[]}]},{value:"Field props",id:"field-props",children:[{value:"name *",id:"name-",children:[]},{value:"debounce",id:"debounce",children:[]},{value:"defaultValue",id:"defaultvalue",children:[]},{value:"keepValue",id:"keepvalue",children:[]},{value:"formatValue(fieldValue)",id:"formatvaluefieldvalue",children:[]},{value:"onChange(fieldValue)",id:"onchangefieldvalue",children:[]},{value:"required",id:"required",children:[]},{value:"validations",id:"validations",children:[]},{value:"asyncValidations",id:"asyncvalidations",children:[]}]},{value:"PropTypes validations",id:"proptypes-validations",children:[]}],d={rightToc:c};function u(e){var n=e.components,t=Object(l.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"concept"},"Concept"),Object(i.b)("p",null,"When using the ",Object(i.b)("inlineCode",{parentName:"p"},"useField")," hook, you need to pass your component ",Object(i.b)("inlineCode",{parentName:"p"},"props")," to the hook."),Object(i.b)("p",null,"Then the hook gives you access to the field state."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react'\nimport { useField } from '@formiz/core'\n\nconst MyField = (props) => {\n  const {\n    value,\n    setValue,\n    isValid,\n    errorMessage,\n  } = useField(props)\n\n  return (\n    ...\n  )\n}\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"hooks-methods"},"Hooks methods"),Object(i.b)("h3",{id:"setvalue"},"setValue()"),Object(i.b)("p",null,"Set the value of the field."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const MyField = (props) => {\n  const { setValue } = useField(props)\n\n  return <input onChange={(e) => setValue(e.target.value)} />\n}\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"setValue")," also accept a function that gives the previous value (like React ",Object(i.b)("inlineCode",{parentName:"p"},"setState"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"setValue((previousValue) => {\n  // ...\n  // Your logic\n  // ...\n  return newValue;\n})\n")),Object(i.b)("h3",{id:"validatingstart--validatingend"},"validating.start() & validating.end()"),Object(i.b)("p",null,"Allows to notify the field that some validations are done in the background (like retrieving some data)."),Object(i.b)("p",null,"This will update the ",Object(i.b)("inlineCode",{parentName:"p"},"isValidating")," state at the field level and also at the form and step levels."),Object(i.b)("p",null,"Notify the start of async processing with ",Object(i.b)("inlineCode",{parentName:"p"},"validating.start()"),".\nNotify the end of async processing with ",Object(i.b)("inlineCode",{parentName:"p"},"validating.end()"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const MyField = (props) => {\n  const { isValidating, validating } = useField(props);\n\n  useEffect(() => {\n    validating.start();\n    getSomeAsyncData().then(() => {\n      validating.end();\n    });\n  }, [validating]);\n\n  /* ... */\n}\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"hook-values"},"Hook values"),Object(i.b)("h3",{id:"value"},"value"),Object(i.b)("p",null,"Get the current value of the field."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const MyField = (props) => {\n  const { value } = useField(props)\n\n  return <input value={value ?? ''} />\n}\n")),Object(i.b)("h3",{id:"valuedebounced"},"valueDebounced"),Object(i.b)("p",null,"Get the current value of the field, but sync with the debouncing.\nIt can be useful to determinate when to show error messages."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { valueDebounced } = useField(props)\n")),Object(i.b)("h3",{id:"id"},"id"),Object(i.b)("p",null,"Return a unique id. This id will be created based on the ",Object(i.b)("a",{parentName:"p",href:"/docs/core/formiz#id"},"form id")," and the ",Object(i.b)("a",{parentName:"p",href:"#name-"},"field name"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const MyField = (props) => {\n  const { id } = useField(props)\n\n  return (\n    <label htmlFor={id}>...</label>\n    <input id={id} />\n  )\n}\n")),Object(i.b)("h3",{id:"isvalid"},"isValid"),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the field is valid."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { isValid } = useField(props)\n")),Object(i.b)("h3",{id:"isvalidating"},"isValidating"),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the field is running async validation or after ",Object(i.b)("inlineCode",{parentName:"p"},"validating.start()")," is called (until ",Object(i.b)("inlineCode",{parentName:"p"},"validation.end()")," is called)."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { isValidating } = useField(props)\n")),Object(i.b)("h3",{id:"ispristine"},"isPristine"),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if the field has not been changed."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { isPristine } = useField(props)\n")),Object(i.b)("h3",{id:"issubmitted"},"isSubmitted"),Object(i.b)("p",null,"Returns ",Object(i.b)("inlineCode",{parentName:"p"},"true")," either if the current step or the form is submitted."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { isSubmitted } = useField(props)\n")),Object(i.b)("h3",{id:"errormessage"},"errorMessage"),Object(i.b)("p",null,"Returns the first error message."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { errorMessage } = useField(props)\n")),Object(i.b)("h3",{id:"errormessages"},"errorMessages"),Object(i.b)("p",null,"Returns all error messages."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const { errorMessages } = useField(props)\n")),Object(i.b)("h3",{id:"resetkey"},"resetKey"),Object(i.b)("p",null,"Allows you to put a key on elements that you want to be reinitialize when the from is reset.",Object(i.b)("br",null),"\nCan be useful for element like ",Object(i.b)("inlineCode",{parentName:"p"},"<input>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<select>"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const MyField = (props) => {\n  const { resetKey } = useField(props)\n\n  useEffect(() => {\n    /* Do something on reset */\n  }, [resetKey])\n\n  return <input key={resetKey} />\n}\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"hook-extra-values"},"Hook extra values"),Object(i.b)("p",null,"This values are not available in the useForm() ",Object(i.b)("inlineCode",{parentName:"p"},"fields")," object."),Object(i.b)("h3",{id:"otherprops"},"otherProps"),Object(i.b)("p",null,"Get the props passed to the component without the Formiz props.\nAllows you to keep composition by spreading this object in your component."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"const MyField = (props) => {\n  const { otherProps } = useField(props)\n\n  return (\n    <Box {...otherProps}>\n      {/* Field */}\n    </Box>\n  )\n}\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"field-props"},"Field props"),Object(i.b)("p",null,"When a component is created with the ",Object(i.b)("inlineCode",{parentName:"p"},"useField()")," hook,\nyou can pass the following props to the component."),Object(i.b)("h3",{id:"name-"},"name *"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Required")),Object(i.b)("p",null,"The name is required to register the field in the form."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Field name="myFieldName" />\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Nested objects")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"name")," props can use lodash-like dot paths to reference nested values."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Field name=\"fieldA\" />\n<Field name=\"fieldB\" />\n<Field name=\"myGroup.fieldA\" />\n<Field name=\"myGroup.fieldB\" />\n\n/* Form values\n{\n  fieldA: 'value',\n  fieldB: 'value',\n  myGroup: {\n    fieldA: 'value',\n    fieldB: 'value',\n  },\n}\n*/\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Arrays")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"name")," props allow also arrays and arrays of objects out of the box.\nUsing lodash-like bracket syntax for ",Object(i.b)("inlineCode",{parentName:"p"},"name")," allow you to handle fields in a list."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Field name=\"myArray[0]\" />\n<Field name=\"myArray[1]\" />\n<Field name=\"myArrayOfObjects[0].fieldA\" />\n<Field name=\"myArrayOfObjects[0].fieldB\" />\n<Field name=\"myArrayOfObjects[1].fieldA\" />\n<Field name=\"myArrayOfObjects[1].fieldB\" />\n\n/* Form values\n{\n  myArray: ['value', 'value'],\n  myArrayOfObjects: [\n    { fieldA: 'value', fieldB: 'value' },\n    { fieldA: 'value', fieldB: 'value' },\n  ],\n}\n*/\n")),Object(i.b)("h3",{id:"debounce"},"debounce"),Object(i.b)("p",null,"Number of milliseconds for debouncing validations. (default is ",Object(i.b)("inlineCode",{parentName:"p"},"100"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Field name="myFieldName" debounce={200} />\n')),Object(i.b)("h3",{id:"defaultvalue"},"defaultValue"),Object(i.b)("p",null,"Pass an initial value to the field."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Field name="myFieldName" defaultValue="My initial value" />\n')),Object(i.b)("h3",{id:"keepvalue"},"keepValue"),Object(i.b)("p",null,"Set to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," to keep the value when the field is unmounted from the DOM. (default is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),")."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Field name="myFieldName" keepValue />\n')),Object(i.b)("h3",{id:"formatvaluefieldvalue"},"formatValue(fieldValue)"),Object(i.b)("p",null,"Format the value before saving it into the internal state."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Field name=\"myFieldName\" formatValue={val => (val || '').trim()} />\n")),Object(i.b)("h3",{id:"onchangefieldvalue"},"onChange(fieldValue)"),Object(i.b)("p",null,"Triggered everytime that setValue() is called inside the field."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Field name="myFieldName" onChange={(val) => console.log(val)} />\n')),Object(i.b)("h3",{id:"required"},"required"),Object(i.b)("p",null,"Shortcut for isRequired() validation"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},'<Field name="myFieldName" required="Field is required" />\n')),Object(i.b)("h3",{id:"validations"},"validations"),Object(i.b)("p",null,"Accept an array of object with the following keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rule(fieldValue)"),": Built in validation rule or custom validation function (must returns ",Object(i.b)("inlineCode",{parentName:"li"},"true")," if the rule is valid)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deps"),": Array of external values used in the rule function (like array of dependencies in useEffect)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"message"),": The message if the rule is invalid.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Field\n  name=\"myFieldName\"\n  validations={[\n    {\n      rule: isRequired(),\n      message: 'Field is required',\n    },\n    {\n      rule: isNotEmptyString(),\n      message: 'Field can\\'t be empty',\n    },\n    {\n      rule: (value) => value.toLowerCase() !== 'john',\n      message: 'Field can\\'t be john',\n    },\n    {\n      rule: (value) => value !== externalValue,\n      deps: [externalValue],\n      message: 'Field can\\'t be the same as external value',\n    },\n  ]}\n/>\n")),Object(i.b)("h3",{id:"asyncvalidations"},"asyncValidations"),Object(i.b)("p",null,"Async validations allows you to run asynchronous code to validate a field, such as an API call.\n",Object(i.b)("inlineCode",{parentName:"p"},"asyncValidations")," will only be triggered if all the others ",Object(i.b)("inlineCode",{parentName:"p"},"validations")," rules are valid."),Object(i.b)("p",null,"Accept an array of object with the following keys:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"rule(fieldValue)"),": Must returns a ",Object(i.b)("strong",{parentName:"li"},"Promise")," that returns ",Object(i.b)("inlineCode",{parentName:"li"},"true")," if the rule is valid."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deps"),": Array of external values used in the rule function (like array of dependencies in useEffect)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"message"),": The message if the rule is invalid.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"<Field\n  name=\"myFieldName\"\n  asyncValidations={[\n    {\n      rule: async(value) => {\n        const isAlreadyUsed = await validateUsername(value)\n        return isAlreadyUsed;\n      },\n      message: 'Username already used, please select another one.',\n    }\n  ]}\n/>\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"proptypes-validations"},"PropTypes validations"),Object(i.b)("p",null,"If you are using ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/prop-types"},"prop-types")," to document props in your project,\nyou can get ",Object(i.b)("inlineCode",{parentName:"p"},"fieldPropTypes")," and ",Object(i.b)("inlineCode",{parentName:"p"},"fieldDefaultProps")," from ",Object(i.b)("inlineCode",{parentName:"p"},"@formiz/core")," to pass to your custom fields for PropTypes validations."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-jsx"},"// MyField.js\nimport React from 'react'\nimport { useField, fieldPropTypes, fieldDefaultProps } from '@formiz/core'\n\nconst MyField = (props) => {\n  // ...\n}\n\nMyField.propTypes = {\n  ...fieldPropTypes,\n  // Your custom props\n}\n\nMyField.defaultProps = {\n  ...fieldDefaultProps,\n  // Your custom props\n}\n")))}u.isMDXComponent=!0},83:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),l=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=l.a.createContext({}),d=function(e){var n=l.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return l.a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.a.createElement(l.a.Fragment,{},n)}},b=l.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),b=a,m=u["".concat(r,".").concat(b)]||u[b]||p[b]||i;return t?l.a.createElement(m,o(o({ref:n},c),{},{components:t})):l.a.createElement(m,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=b;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var c=2;c<i;c++)r[c]=t[c];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);