(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r),i=a.a.createContext({}),o=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=o(e.components);return a.a.createElement(i.Provider,{value:t},e.children)};var s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},c=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),c=o(n),b=r,p=c[l+"."+b]||c[b]||m[b]||i;return n?a.a.createElement(p,Object.assign({},{ref:t},s,{components:n})):a.a.createElement(p,Object.assign({},{ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(6),i=(n(0),n(114)),o={id:"getting-started",title:"Getting Started"},l={id:"getting-started",title:"Getting Started",description:"## Installation",source:"@site/docs/getting-started.mdx",permalink:"/docs/getting-started",sidebar:"docs",next:{title:"Wizard Form",permalink:"/docs/demos/wizard"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Concept",id:"concept",children:[]},{value:"Usage",id:"usage",children:[{value:"Create your first custom field",id:"create-your-first-custom-field",children:[]},{value:"Use your field in a form",id:"use-your-field-in-a-form",children:[]},{value:"\ud83e\uddd9 Multi Steps form",id:"\ud83e\uddd9-multi-steps-form",children:[]}]}],m={rightToc:s},c="wrapper";function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)(c,Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"With ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://yarnpkg.com"}),"Yarn")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @formiz/core @formiz/validations\n")),Object(i.b)("p",null,"Or with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/"}),"NPM")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @formiz/core @formiz/validations\n")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"concept"},"Concept"),Object(i.b)("p",null,"The idea behind ",Object(i.b)("strong",{parentName:"p"},"Formiz")," is to allow you to build advanced forms with\n",Object(i.b)("strong",{parentName:"p"},"multiple steps, complex validations")," and a ",Object(i.b)("strong",{parentName:"p"},"good UX")," without pain."),Object(i.b)("p",null,"The main idea is to build fields as independent reusable components.\n",Object(i.b)("strong",{parentName:"p"},"Fields can be anything"),", not just inputs. Once you have built your fields,\nyou can use them everywhere."),Object(i.b)("p",null,"When you use a field built with Formiz, you can apply validations rules on it.\n",Object(i.b)("strong",{parentName:"p"},"Only the mounted fields will apply their validation")," to the current step and to the form."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),'// Example\n<MyField\n  name="email"\n  type="email"\n  required="Email is required"\n  validations={[\n    {\n      rule: isEmail(),\n      message: \'Not a valid email\',\n    }\n  ]}\n/>\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Formiz core")," does not provide any styles, so you can ",Object(i.b)("strong",{parentName:"p"},"use it with any UI library and style you want"),".\nUse it with ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://chakra-ui.com/"}),"Chakra UI"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://reactstrap.github.io/"}),"ReactStrap"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://material-ui.com/"}),"Material UI")," or your own styles."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"create-your-first-custom-field"},"Create your first custom field"),Object(i.b)("p",null,"A custom field can be anything, not just inputs."),Object(i.b)("p",null,"Here there is an example with an input, but you can litteraly ",Object(i.b)("strong",{parentName:"p"},"turn anything into a field")," and you will ",Object(i.b)("strong",{parentName:"p"},"get validation for free"),"!"),Object(i.b)("h4",{id:"1-create-a-new-field"},"1. Create a new field"),Object(i.b)("p",null,"Create a ",Object(i.b)("inlineCode",{parentName:"p"},"MyField.js")," file, then import the ",Object(i.b)("inlineCode",{parentName:"p"},"useField")," hook from ",Object(i.b)("inlineCode",{parentName:"p"},"@formiz/core")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = () => {\n  // ...\n}\n")),Object(i.b)("h4",{id:"2-pass-props-to-the-hook"},"2. Pass props to the hook"),Object(i.b)("p",null,"Get the props from the MyField component and pass it to the hook."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const {} = useField(props) // Pass the props to the hook\n  // ...\n}\n")),Object(i.b)("h4",{id:"3-make-it-works"},"3. Make it works"),Object(i.b)("p",null,"Create the ",Object(i.b)("inlineCode",{parentName:"p"},"<input>")," and make it interactive like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,7-13}","{5,7-13}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const { setValue, value } = useField(props)\n\n  return (\n    <input\n      value={value ||\xa0''} // Pass the value for the input\n      onChange={e => setValue(e.target.value)} // Update the value onChange\n    />\n  )\n}\n")),Object(i.b)("h4",{id:"3-display-error"},"3. Display error"),Object(i.b)("p",null,"Display the ",Object(i.b)("inlineCode",{parentName:"p"},"errorMessage")," below the ",Object(i.b)("inlineCode",{parentName:"p"},"<input>"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,8,14-18}","{5,8,14-18}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const { errorMessage, isValid, setValue, value } = useField(props)\n\n  return (\n    <div>\n      <input\n        value={value ||\xa0''}\n        onChange={e => setValue(e.target.value)}\n      />\n      {\n        !isValid\n        && errorMessage // Display error message\n      }\n    </div>\n  )\n}\n")),Object(i.b)("h4",{id:"4-improve-ux-and-accessibility"},"4. Improve UX and accessibility"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add a custom label and add ",Object(i.b)("inlineCode",{parentName:"li"},"*")," if the field is required."),Object(i.b)("li",{parentName:"ul"},"Allow to change the input type."),Object(i.b)("li",{parentName:"ul"},"Add css classes for style."),Object(i.b)("li",{parentName:"ul"},"Display error only if the field is blured or the form/step is submitted."),Object(i.b)("li",{parentName:"ul"},"Don't apply the ",Object(i.b)("inlineCode",{parentName:"li"},"is-error")," class if the input is focused."),Object(i.b)("li",{parentName:"ul"},"Add ",Object(i.b)("inlineCode",{parentName:"li"},"id"),", ",Object(i.b)("inlineCode",{parentName:"li"},"for")," and aria attributes for accessibility.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{7,9,10,15-17,20-27,31,33,35-39,41-45}","{7,9,10,15-17,20-27,31,33,35-39,41-45}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isSubmitted,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, required } = props\n  const [isTouched, setIsTouched] = React.useState(false)\n  const showError = !isValid && (isTouched || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${(showError) ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {!!required && ' *'}\n      </label>\n      <input\n        id={id}\n        type={type || 'text'}\n        value={value ||\xa0''}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onBlur={() => setIsTouched(true)}\n        aria-invalid={showError}\n        aria-required={!!required}\n        aria-describedby={showError ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n")),Object(i.b)("h3",{id:"use-your-field-in-a-form"},"Use your field in a form"),Object(i.b)("h4",{id:"1-create-the-form"},"1. Create the form"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz } from '@formiz/core'\n\nexport const MyForm = () => {\n  return (\n    <Formiz>\n      {/* ... */}\n    </Formiz>\n  )\n}\n")),Object(i.b)("h4",{id:"2-connect-the-form-with-the-useform-hook"},"2. Connect the form with the ",Object(i.b)("inlineCode",{parentName:"h4"},"useForm")," hook"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{2,5,9}","{2,5,9}":!0}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core' // Import useForm\n\nexport const MyForm = () => {\n  const myForm = useForm() // Call useForm\n\n  return (\n    <Formiz\n      connect={myForm} // Connect to your form\n    >\n      {/* ... */}\n    </Formiz>\n  )\n}\n")),Object(i.b)("h4",{id:"3-handle-submit"},"3. Handle submit"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{7-9,14,16-18,21-27}","{7-9,14,16-18,21-27}":!0}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values) // Retrieves values after submit\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit} // Handle submit only if the form is valid\n    >\n      <form // create an html form\n        noValidate // Disable native html validation\n        onSubmit={myForm.submit} // Pass the Formiz submit to the onSubmit\n      >\n        {/* Your fields here */}\n\n        <button\n          type=\"submit\" // Create a submit button\n          disabled={!myForm.isValid} // Disable the button if the form is not valid\n        >\n          Submit\n        </button>\n      </form>\n    </Formiz>\n  )\n}\n")),Object(i.b)("h4",{id:"4-add-fields-to-the-form"},"4. Add fields to the form"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'Each field need a property "name"')," which will be the key in the object of values.",Object(i.b)("br",null),"\nSo, be sure this key is ",Object(i.b)("strong",{parentName:"p"},"unique by form"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{22-41}","{22-41}":!0}),'import React from \'react\'\nimport { Formiz, useForm } from \'@formiz/core\'\nimport { isEmail } from \'@formiz/validations\' // Import some validations\nimport { MyField } from \'./MyField\' // Import your field\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values)\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit}\n    >\n      <form\n        noValidate\n        onSubmit={myForm.submit}\n      >\n\n        <MyField\n          name="firstName"\n          label="First Name"\n          required="First Name is required"\n        />\n        <MyField\n          name="lastName"\n          label="Last Name"\n          required="Last Name is required"\n        />\n        <MyField\n          name="email"\n          label="Email"\n          validations={[\n            {\n              rule: isEmail(),\n              message: \'This is not a valid email\',\n            },\n          ]}\n        />\n\n        <button\n          type="submit"\n          disabled={!myForm.isValid}\n        >\n          Submit\n        </button>\n      </form>\n    </Formiz>\n  )\n}\n')),Object(i.b)("h3",{id:"\ud83e\uddd9-multi-steps-form"},"\ud83e\uddd9 Multi Steps form"),Object(i.b)("p",null,"Oh wait... you want to ",Object(i.b)("strong",{parentName:"p"},"turn the form into a multi steps")," form?"),Object(i.b)("p",null,"Good news, that pretty easy!"),Object(i.b)("p",null,"You already have your fields so we just need to update the form to use steps."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},'Each FormizStep need a property "name"'),", be sure this key is unique by form."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4,24,27-29,40,42-44,55,57-71}","{4,24,27-29,40,42-44,55,57-71}":!0}),'import React from \'react\'\nimport {\n  Formiz,\n  FormizStep, // Import the FormizStep component\n  useForm,\n} from \'@formiz/core\'\nimport { isEmail } from \'@formiz/validations\'\nimport { MyField } from \'./MyField\'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values)\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit}\n    >\n      <form\n        noValidate\n        // Change the myForm.submit to myForm.submitStep\n        onSubmit={myForm.submitStep}\n      >\n\n        <FormizStep\n          name="step1" // Split the form with FormizStep\n        >\n          <MyField\n            name="firstName"\n            label="First Name"\n            required="First Name is required"\n          />\n          <MyField\n            name="lastName"\n            label="Last Name"\n            required="Last Name is required"\n          />\n        </FormizStep>\n\n        <FormizStep\n          name="step2" // Split the form with FormizStep\n        >\n          <MyField\n            name="email"\n            label="Email"\n            validations={[\n              {\n                rule: isEmail(),\n                message: \'This is not a valid email\',\n              },\n            ]}\n          />\n        </FormizStep>\n\n        {/* Update the submit button to allow navigation between steps. */}\n        {!myForm.isFirstStep && (\n          <button type="button" onClick={myForm.prevStep}>\n            Back\n          </button>\n        )}\n        {myForm.isLastStep ? (\n          <button type="submit" disabled={!myForm.isValid}>\n            Submit\n          </button>\n        ) : (\n          <button type="submit" disabled={!myForm.isStepValid}>\n            Continue\n          </button>\n        )}\n      </form>\n    </Formiz>\n  )\n}\n')),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://media2.giphy.com/media/12NUbkX6p4xOO4/giphy.gif?cid=790b76115d3f358a4832727977f39cad&rid=giphy.gif",alt:"Magic"}))),Object(i.b)("h4",{id:"thats-it-"},"That's it \ud83c\udf89"))}b.isMDXComponent=!0}}]);