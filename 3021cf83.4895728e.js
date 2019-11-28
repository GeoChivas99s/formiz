(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{160:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return m}));t(59),t(32),t(23),t(24),t(60),t(0);var r=t(169);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var i={id:"getting-started",title:"Getting Started"},o=[{value:"Installation",id:"installation",children:[]},{value:"Concept",id:"concept",children:[]},{value:"Usage",id:"usage",children:[{value:"Create your first custom field",id:"create-your-first-custom-field",children:[]},{value:"Use your field in a form",id:"use-your-field-in-a-form",children:[]},{value:"\ud83e\uddd9 Multi Steps form",id:"\ud83e\uddd9-multi-steps-form",children:[]}]}],l={rightToc:o},s="wrapper";function m(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,["components"]);return Object(r.b)(s,a({},l,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,"With ",Object(r.b)("a",a({parentName:"p"},{href:"https://yarnpkg.com"}),"Yarn")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"yarn add @formiz/core @formiz/validations\n")),Object(r.b)("p",null,"Or with ",Object(r.b)("a",a({parentName:"p"},{href:"https://www.npmjs.com/"}),"NPM")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"npm install @formiz/core @formiz/validations\n")),Object(r.b)("hr",null),Object(r.b)("h2",{id:"concept"},"Concept"),Object(r.b)("p",null,"The idea behind ",Object(r.b)("strong",{parentName:"p"},"Formiz")," is to allow you to build advanced forms with\n",Object(r.b)("strong",{parentName:"p"},"multiple steps, complex validations")," and a ",Object(r.b)("strong",{parentName:"p"},"good UX")," without pain."),Object(r.b)("p",null,"The main idea is to build fields as independent reusable components.\n",Object(r.b)("strong",{parentName:"p"},"Fields can be anything"),", not just inputs. Once you have built your fields,\nyou can use them everywhere."),Object(r.b)("p",null,"When you use a field built with Formiz, you can apply validations rules on it.\n",Object(r.b)("strong",{parentName:"p"},"Only the mounted fields will apply their validation")," to the current step and to the form."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),'// Example\n<MyField\n  name="email"\n  type="email"\n  required="Email is required"\n  validations={[\n    {\n      rule: isEmail(),\n      message: \'Not a valid email\',\n    }\n  ]}\n/>\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Formiz core")," does not provide any styles, so you can ",Object(r.b)("strong",{parentName:"p"},"use it with any UI library and style you want"),".\nUse it with ",Object(r.b)("a",a({parentName:"p"},{href:"https://chakra-ui.com/"}),"Chakra UI"),", ",Object(r.b)("a",a({parentName:"p"},{href:"https://reactstrap.github.io/"}),"ReactStrap"),", ",Object(r.b)("a",a({parentName:"p"},{href:"https://material-ui.com/"}),"Material UI")," or your own styles."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"usage"},"Usage"),Object(r.b)("h3",{id:"create-your-first-custom-field"},"Create your first custom field"),Object(r.b)("p",null,"A custom field can be anything, not just inputs."),Object(r.b)("p",null,"Here there is an example with an input, but you can litteraly ",Object(r.b)("strong",{parentName:"p"},"turn anything into a field")," and you will ",Object(r.b)("strong",{parentName:"p"},"get validation for free"),"!"),Object(r.b)("h4",{id:"1-create-a-new-field"},"1. Create a new field"),Object(r.b)("p",null,"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"MyField.js")," file, then import the ",Object(r.b)("inlineCode",{parentName:"p"},"useField")," hook from ",Object(r.b)("inlineCode",{parentName:"p"},"@formiz/core")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = () => {\n  // ...\n}\n")),Object(r.b)("h4",{id:"2-pass-props-to-the-hook"},"2. Pass props to the hook"),Object(r.b)("p",null,"Get the props from the MyField component and pass it to the hook."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{5}","{5}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const {} = useField(props) // Pass the props to the hook\n  // ...\n}\n")),Object(r.b)("h4",{id:"3-make-it-works"},"3. Make it works"),Object(r.b)("p",null,"Create the ",Object(r.b)("inlineCode",{parentName:"p"},"<input>")," and make it interactive like this:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{5,7-13}","{5,7-13}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const { setValue, value } = useField(props)\n\n  return (\n    <input\n      value={value ||\xa0''} // Pass the value for the input\n      onChange={e => setValue(e.target.value)} // Update the value onChange\n    />\n  )\n}\n")),Object(r.b)("h4",{id:"3-display-error"},"3. Display error"),Object(r.b)("p",null,"Display the ",Object(r.b)("inlineCode",{parentName:"p"},"errorMessage")," below the ",Object(r.b)("inlineCode",{parentName:"p"},"<input>"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{5,8,14-18}","{5,8,14-18}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const { errorMessage, isValid, setValue, value } = useField(props)\n\n  return (\n    <div>\n      <input\n        value={value ||\xa0''}\n        onChange={e => setValue(e.target.value)}\n      />\n      {\n        !isValid\n        && errorMessage // Display error message\n      }\n    </div>\n  )\n}\n")),Object(r.b)("h4",{id:"4-improve-ux-and-accessibility"},"4. Improve UX and accessibility"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a custom label and add ",Object(r.b)("inlineCode",{parentName:"li"},"*")," if the field is required."),Object(r.b)("li",{parentName:"ul"},"Allow to change the input type."),Object(r.b)("li",{parentName:"ul"},"Add css classes for style."),Object(r.b)("li",{parentName:"ul"},"Display error only if the field is blured or the form/step is submitted."),Object(r.b)("li",{parentName:"ul"},"Don't apply the ",Object(r.b)("inlineCode",{parentName:"li"},"is-error")," class if the input is focused."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"id"),", ",Object(r.b)("inlineCode",{parentName:"li"},"for")," and aria attributes for accessibility.")),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{7,9,10,15-17,20-27,31,33,35-39,41-45}","{7,9,10,15-17,20-27,31,33,35-39,41-45}":!0}),"import React from 'react'\nimport { useField } from '@formiz/core'\n\nexport const MyField = (props) => {\n  const {\n    errorMessage,\n    id,\n    isValid,\n    isSubmitted,\n    setValue,\n    value,\n  } = useField(props)\n  const { label, type, required } = props\n  const [isTouched, setIsTouched] = React.useState(false)\n  const showError = !isValid && (isTouched || isSubmitted)\n\n  return (\n    <div className={`demo-form-group ${(showError) ? 'is-error' : ''}`}>\n      <label\n        className=\"demo-label\"\n        htmlFor={id}\n      >\n        { label }\n        {!!required && ' *'}\n      </label>\n      <input\n        id={id}\n        type={type || 'text'}\n        value={value ||\xa0''}\n        className=\"demo-input\"\n        onChange={e => setValue(e.target.value)}\n        onBlur={() => setIsTouched(false)}\n        aria-invalid={!isValid}\n        aria-required={!!required}\n        aria-describedby={showError ? `${id}-error` : null}\n      />\n      {showError && (\n        <div id={`${id}-error`} className=\"demo-form-feedback\">\n          { errorMessage }\n        </div>\n      )}\n    </div>\n  )\n}\n")),Object(r.b)("h3",{id:"use-your-field-in-a-form"},"Use your field in a form"),Object(r.b)("h4",{id:"1-create-the-form"},"1. Create the form"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { Formiz } from '@formiz/core'\n\nexport const MyForm = () => {\n  return (\n    <Formiz>\n      {/* ... */}\n    </Formiz>\n  )\n}\n")),Object(r.b)("h4",{id:"2-connect-the-form-with-the-useform-hook"},"2. Connect the form with the ",Object(r.b)("inlineCode",{parentName:"h4"},"useForm")," hook"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{2,5,9}","{2,5,9}":!0}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core' // Import useForm\n\nexport const MyForm = () => {\n  const myForm = useForm() // Call useForm\n\n  return (\n    <Formiz\n      connect={myForm} // Connect to your form\n    >\n      {/* ... */}\n    </Formiz>\n  )\n}\n")),Object(r.b)("h4",{id:"3-handle-submit"},"3. Handle submit"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{7-9,14,16-18,21-27}","{7-9,14,16-18,21-27}":!0}),"import React from 'react'\nimport { Formiz, useForm } from '@formiz/core'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values) // Retrieves values after submit\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit} // Handle submit only if the form is valid\n    >\n      <form // create an html form\n        noValidate // Disable native html validation\n        onSubmit={myForm.submit} // Pass the Formiz submit to the onSubmit\n      >\n        {/* Your fields here */}\n\n        <button\n          type=\"submit\" // Create a submit button\n          disabled={!myForm.isValid} // Disable the button if the form is not valid\n        >\n          Submit\n        </button>\n      </form>\n    </Formiz>\n  )\n}\n")),Object(r.b)("h4",{id:"4-add-fields-to-the-form"},"4. Add fields to the form"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'Each field need a property "name"')," which will be the key in the object of values.",Object(r.b)("br",null),"\nSo, be sure this key is ",Object(r.b)("strong",{parentName:"p"},"unique by form"),"."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{22-41}","{22-41}":!0}),'import React from \'react\'\nimport { Formiz, useForm } from \'@formiz/core\'\nimport { isEmail } from \'@formiz/validations\' // Import some validations\nimport { MyField } from \'./MyField\' // Import your field\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values)\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit}\n    >\n      <form\n        noValidate\n        onSubmit={myForm.submit}\n      >\n\n        <MyField\n          name="firstName"\n          label="First Name"\n          required="First Name is required"\n        />\n        <MyField\n          name="lastName"\n          label="Last Name"\n          required="Last Name is required"\n        />\n        <MyField\n          name="email"\n          label="Email"\n          validations={[\n            {\n              rule: isEmail(),\n              message: \'This is not a valid email\',\n            },\n          ]}\n        />\n\n        <button\n          type="submit"\n          disabled={!myForm.isValid}\n        >\n          Submit\n        </button>\n      </form>\n    </Formiz>\n  )\n}\n')),Object(r.b)("h3",{id:"\ud83e\uddd9-multi-steps-form"},"\ud83e\uddd9 Multi Steps form"),Object(r.b)("p",null,"Oh wait... you want to ",Object(r.b)("strong",{parentName:"p"},"turn the form into a multi steps")," form?"),Object(r.b)("p",null,"Good news, that pretty easy!"),Object(r.b)("p",null,"You already have your fields so we just need to update the form to use steps."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},'Each FormizStep need a property "name"'),", be sure this key is unique by form."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-jsx",metastring:"{4,24,27-29,40,42-44,55,57-71}","{4,24,27-29,40,42-44,55,57-71}":!0}),'import React from \'react\'\nimport {\n  Formiz,\n  FormizStep, // Import the FormizStep component\n  useForm,\n} from \'@formiz/core\'\nimport { isEmail } from \'@formiz/validations\'\nimport { MyField } from \'./MyField\'\n\nexport const MyForm = () => {\n  const myForm = useForm()\n\n  const handleSubmit = (values) => {\n    console.log(values)\n  }\n\n  return (\n    <Formiz\n      connect={myForm}\n      onValidSubmit={handleSubmit}\n    >\n      <form\n        noValidate\n        // Change the myForm.submit to myForm.submitStep\n        onSubmit={myForm.submitStep}\n      >\n\n        <FormizStep\n          name="step1" // Split the form with FormizStep\n        >\n          <MyField\n            name="firstName"\n            label="First Name"\n            required="First Name is required"\n          />\n          <MyField\n            name="lastName"\n            label="Last Name"\n            required="Last Name is required"\n          />\n        </FormizStep>\n\n        <FormizStep\n          name="step2" // Split the form with FormizStep\n        >\n          <MyField\n            name="email"\n            label="Email"\n            validations={[\n              {\n                rule: isEmail(),\n                message: \'This is not a valid email\',\n              },\n            ]}\n          />\n        </FormizStep>\n\n        {/* Update the submit button to allow navigation between steps. */}\n        {!myForm.isFirstStep && (\n          <button type="button" onClick={myForm.prevStep}>\n            Back\n          </button>\n        )}\n        {myForm.isLastStep ? (\n          <button type="submit" disabled={!myForm.isValid}>\n            Submit\n          </button>\n        ) : (\n          <button type="submit" disabled={!myForm.isStepValid}>\n            Continue\n          </button>\n        )}\n      </form>\n    </Formiz>\n  )\n}\n')),Object(r.b)("p",null,Object(r.b)("img",a({parentName:"p"},{src:"https://media2.giphy.com/media/12NUbkX6p4xOO4/giphy.gif?cid=790b76115d3f358a4832727977f39cad&rid=giphy.gif",alt:"Magic"}))),Object(r.b)("h4",{id:"thats-it-"},"That's it \ud83c\udf89"))}m.isMDXComponent=!0},169:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return c}));var r=t(0),a=t.n(r),i=a.a.createContext({}),o=function(e){var n=a.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=o(e.components);return a.a.createElement(i.Provider,{value:n},e.children)};var s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=o(t),c=r,u=p[l+"."+c]||p[c]||m[c]||i;return t?a.a.createElement(u,Object.assign({},{ref:n},s,{components:t})):a.a.createElement(u,Object.assign({},{ref:n},s))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);