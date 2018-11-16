(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{168:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("We recommend adding swagger-php to your project with "),a("a",{attrs:{href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(")")]),t._v(" "),t._m(2),t._m(3),t._v(" "),a("p",[t._v("Generate always-up-to-date documentation.")]),t._v(" "),t._m(4),a("p",[t._v("This will scan the php-files in the given folder(s), look for OpenApi annotations and output a json file.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Instead of generating the documentation dynamicly we also provide a command line interface.\nThis writes the documentation to a static json file.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),a("p",[t._v("The goal of swagger-php is to generate a openapi.json using phpdoc annotations.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("You can use constants inside doctrine annotations.")]),t._v(" "),t._m(15),t._m(16),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),a("p",[t._v("You shouldn't place all annotations inside one big @OA\\OpenApi() annotation block, but scatter them throughout your codebase.\nswagger-php will scan your project and merge all annotations into one @OA\\OpenApi annotation.")]),t._v(" "),a("p",[t._v("The big benefit swagger-php provides is that the documentation lives close to the code implementing the api.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),a("p",[t._v("swagger-php looks at the context of the comment which reduces duplication.")]),t._v(" "),t._m(32),t._m(33),t._v(" "),t._m(34),t._m(35),t._v(" "),t._m(36),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._m(40),t._v(" "),t._m(41),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._m(47),t._v(" "),t._m(48),t._m(49),t._v(" "),t._m(50),a("p",[t._v("For more tips on refs, browse through the "),a("a",{attrs:{href:"https://github.com/zircote/swagger-php/tree/master/Examples/using-refs",target:"_blank",rel:"noopener noreferrer"}},[t._v("using-refs example"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(51),t._v(" "),a("p",[t._v("You can combine schema's composition with "),a("a",{attrs:{href:"https://swagger.io/specification/#schemaComposition",target:"_blank",rel:"noopener noreferrer"}},[t._v("allOf"),a("OutboundLink")],1)]),t._v(" "),t._m(52),a("p",[t._v("More info in the "),a("a",{attrs:{href:"https://swagger.io/docs/specification/data-models/inheritance-and-polymorphism/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Inheritance and Polymorphism"),a("OutboundLink")],1),t._v(" chapter.")]),t._v(" "),t._m(53),t._v(" "),a("p",[t._v("The specification allows for "),a("a",{attrs:{href:"http://swagger.io/specification/#vendorExtensions",target:"_blank",rel:"noopener noreferrer"}},[t._v("custom properties"),a("OutboundLink")],1),t._v(' as long as they start with "x-" therefore all swagger-php annotations have an '),a("code",[t._v("x")]),t._v(' property which will unfold into "x-" properties.')]),t._v(" "),t._m(54),t._m(55),t._v(" "),t._m(56),a("p",[t._v("The "),a("a",{attrs:{href:"http://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Amazon API Gateway"),a("OutboundLink")],1),t._v(" for example, makes use of these.")]),t._v(" "),t._m(57),t._v(" "),a("p",[t._v("To learn about what you can to generate and which options to use and how?"),a("br"),t._v("\nLook at the "),a("a",{attrs:{href:"https://swagger.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docs on swagger.io"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("It has sections about:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://swagger.io/docs/specification/basic-structure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basic structure"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://swagger.io/docs/specification/describing-parameters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Describing parameters"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://swagger.io/docs/specification/describing-responses/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Describing responses"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("and "),a("a",{attrs:{href:"https://swagger.io/docs/specification/about/",target:"_blank",rel:"noopener noreferrer"}},[t._v("more"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("For more detailed information look at the "),a("a",{attrs:{href:"http://swagger.io/specification/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OpenApi Specification"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting started")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("composer require zircote/swagger-php\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br")]),a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token php language-php"}},[a("span",{attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("require")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"vendor/autoload.php"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token variable"}},[t._v("$openapi")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("OpenApi"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("scan")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/path/to/project'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("header")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'Content-Type: application/x-yaml'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$openapi")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v("toYaml")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli","aria-hidden":"true"}},[this._v("#")]),this._v(" CLI")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("./vendor/bin/openapi --help\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For cli usage from anywhere install swagger-php globally and add the "),s("code",[this._v("~/.composer/vendor/bin")]),this._v(" directory to the PATH in your environment.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("composer global require zircote/swagger-php\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"write-annotations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-annotations","aria-hidden":"true"}},[this._v("#")]),this._v(" Write annotations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"when-you-write"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-you-write","aria-hidden":"true"}},[this._v("#")]),this._v(" When you write:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Info(title="My First API", version="0.1")\n */')]),this._v("\n\n"),s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Get(\n *     path="/api/resource.json",\n *     @OA\\Response(response="200", description="An example resource")\n * )\n */')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"swagger-php-will-generate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#swagger-php-will-generate","aria-hidden":"true"}},[this._v("#")]),this._v(" swagger-php will generate:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("openapi")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3.0.0\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("info")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"My First API"')]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.1"')]),t._v("\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("/api/resource.json")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("responses")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token key atrule"}},[t._v('"200"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"An example resource"')]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"using-variables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Using variables")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("define")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"API_HOST"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token variable"}},[t._v("$env")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"production"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"example.com"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token double-quoted-string string"}},[t._v('"localhost"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v("/**\n * @OA\\Server(url=API_HOST)\n */")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("When you're using the CLI you'll need to include the php file with the constants using the "),s("code",[this._v("--bootstrap")]),this._v(" options:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("openapi --bootstrap constants.php\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"annotation-placement"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#annotation-placement","aria-hidden":"true"}},[this._v("#")]),this._v(" Annotation placement")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"arrays-and-objects"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arrays-and-objects","aria-hidden":"true"}},[this._v("#")]),this._v(" Arrays and Objects")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Doctrine annotation supports arrays, but uses "),a("code",[t._v("{")]),t._v(" and "),a("code",[t._v("}")]),t._v(" instead of "),a("code",[t._v("[")]),t._v(" and "),a("code",[t._v("]")]),t._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("And although doctrine also supports objects, which also uses "),s("code",[this._v("{")]),this._v(" and "),s("code",[this._v("}")]),this._v(" and requires the property names to be surrounded with "),s("code",[this._v('"')]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("DON'T WRITE")]),this._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Info(\n *   title="My first API",\n *   version="1.0.0",\n *   contact={\n *     "email": "support@example.com"\n *   }\n * )\n */')]),this._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v('This "works" but most objects have an annotation with the same name as the property, such as '),s("code",[this._v("@OA\\Contact")]),this._v(" for "),s("code",[this._v("contact")]),this._v(":")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WRITE")]),this._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Info(\n *   title="My first API",\n *   version="1.0.0",\n *   @OA\\Contact(\n *     email="support@example.com"\n *   )\n * )\n */')]),this._v("\n")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This adds validation, so when you misspell a property or forget a required property it will trigger a php warning.\nFor example if you'd write "),s("code",[this._v('emial="support@example.com"')]),this._v(" swagger-php whould generate a notice with "),s("code",[this._v('Unexpected field "emial" for @OA\\Contact(), expecting "name", "email", ...')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("Placing multiple annotations of the same type will result in an array of objects.\nFor objects, the key is define by the field with the name as the annotation: "),a("code",[t._v("response")]),t._v(" in a "),a("code",[t._v("@OA\\Response")]),t._v(", "),a("code",[t._v("property")]),t._v(" in a "),a("code",[t._v("@OA\\Property")]),t._v(", etc.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Get(\n *   path="/products",\n *   summary="list products",\n *   @OA\\Response(\n *     response=200,\n *     description="A list with products"\n *   ),\n *   @OA\\Response(\n *     response="default",\n *     description="an ""unexpected"" error"\n *   )\n * )\n */')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"results-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results-in","aria-hidden":"true"}},[this._v("#")]),this._v(" Results in:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("openapi")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3.0.0\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("/products")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("summary")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"list products"')]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("responses")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token key atrule"}},[t._v('"200"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"A list with products"')]),t._v("\n        "),a("span",{attrs:{class:"token key atrule"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'an \"unexpected\" error'")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"detects-values-based-on-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#detects-values-based-on-context","aria-hidden":"true"}},[this._v("#")]),this._v(" Detects values based on context")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/**\n * @OA\\Schema()\n */")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Product")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token comment"}},[t._v("/**\n     * The product name\n     * @var string\n     * @OA\\Property()\n     */")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"results-in-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results-in-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Results in:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("openapi")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3.0.0\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("components")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("schemas")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("Product")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("properties")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"The product name"')]),t._v("\n          "),a("span",{attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" string\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" object\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"as-if-you-d-written"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#as-if-you-d-written","aria-hidden":"true"}},[this._v("#")]),this._v(" As if you'd written:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v('/**\n     * The product name\n     * @var string\n     *\n     * @OA\\Property(\n     *   property="name",\n     *   type="string",\n     *   description="The product name"\n     * )\n     */')]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"shortcuts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shortcuts","aria-hidden":"true"}},[this._v("#")]),this._v(" Shortcuts")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("@OA\\MediaType")]),this._v(" is used to describe the content:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Response(\n *     response=200,\n *     description="successful operation",\n *     @OA\\MediaType(\n *         mediaType="application/json",\n *         @OA\\Schema(ref="#/components/schemas/User"),\n *     )\n * ),\n */')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("But because most API requests and responses are JSON, the "),s("code",[this._v("@OA\\JsonContent")]),this._v(" allows you to write:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Response(\n *     response=200,\n *     description="successful operation",\n *     @OA\\JsonContent(ref="#/components/schemas/User"),\n * )\n */')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("During processing the "),s("code",[this._v("@OA\\JsonContent")]),this._v(" unfolds to "),s("code",[this._v('@OA\\MediaType( mediaType="application/json", @OA\\Schema(')]),this._v("\nand will generate the same output.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("On a similar note, you generally don't have to write a "),s("code",[this._v("@OA\\PathItem")]),this._v(" because this annotation will be generated based on th path in operation "),s("code",[this._v("@OA\\Get")]),this._v(", "),s("code",[this._v("@OA\\Post")]),this._v(", etc.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"reusing-annotations-ref"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reusing-annotations-ref","aria-hidden":"true"}},[this._v("#")]),this._v(" Reusing annotations ($ref)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It's common that multiple requests have some overlap in either the request or the response.\nTo keep thing DRY (Don't Repeat Yourself) the specification included referencing other parts of the json using "),s("code",[this._v("$ref")]),this._v("s")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Schema(\n *   schema="product_id",\n *   type="integer",\n *   format="int64",\n *   description="The unique identifier of a product in our catalog"\n * )\n */')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"results-in-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results-in-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Results in:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v("openapi")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3.0.0\n"),a("span",{attrs:{class:"token key atrule"}},[t._v("components")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v("schemas")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v("product_id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("description")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"The unique identifier of a product in our catalog"')]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" integer\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" int64\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Which doesn't do anything by itself but now you can reference this piece by its path in the json "),s("code",[this._v("#/components/schemas/product_id")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v('/**\n     * @OA\\Property(ref="#/components/schemas/product_id")\n     */')]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{attrs:{class:"token variable"}},[t._v("$id")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"composition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#composition","aria-hidden":"true"}},[this._v("#")]),this._v(" Composition")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{attrs:{class:"token comment"}},[this._v('/**\n * @OA\\Schema(\n *   schema="UpdateItem",\n *   allOf={\n *     @OA\\Schema(ref="#/components/schemas/NewItem"),\n *     @OA\\Schema(\n *       @OA\\Property(property="id", type="integer"),\n *       @OA\\Property(property="created_at", ref="#/components/schemas/BaseModel/properties/createdAt")\n *     )\n *   }\n * )\n */')]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"vendor-extensions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vendor-extensions","aria-hidden":"true"}},[this._v("#")]),this._v(" Vendor extensions")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("openapi"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3.0")]),a("span",{attrs:{class:"token number"}},[t._v(".0")]),t._v("\ninfo"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  title"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Example\n  version"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v("\n  x"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("some"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" a"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("value\n  x"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("another"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v("\n  x"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("complex"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("type"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    supported"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" version"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'1.0'")]),t._v("\n        level"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" baseapi\n      "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" version"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'2.1'")]),t._v("\n        level"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" fullapi\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"results-in-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#results-in-4","aria-hidden":"true"}},[this._v("#")]),this._v(" Results in:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{attrs:{class:"token key atrule"}},[t._v('"info"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v('"title"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Example"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v('"version"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v('"x-some-name"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"a-value"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v('"x-another"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token key atrule"}},[t._v('"x-complex-type"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token key atrule"}},[t._v('"supported"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v('"version"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1.0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v('"level"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"baseapi"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v('"version"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2.1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token key atrule"}},[t._v('"level"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"fullapi"')]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"openapi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openapi","aria-hidden":"true"}},[this._v("#")]),this._v(" OpenApi")])}],!1,null,null,null);n.options.__file="Getting-started.md";s.default=n.exports}}]);