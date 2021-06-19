(self.webpackChunkwp5_starter_react=self.webpackChunkwp5_starter_react||[]).push([[471],{1072:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(3564),o=n(3835),i=function(e){function t(t){var n=e.call(this)||this;return t instanceof o.SubscriptionClient?n.subscriptionClient=t:n.subscriptionClient=new o.SubscriptionClient(t.uri,t.options,t.webSocketImpl),n}return(0,r.ZT)(t,e),t.prototype.request=function(e){return this.subscriptionClient.request(e)},t}(n(6706).i)},6156:(e,t,n)=>{"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})},3391:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:()=>o})},2465:(e,t,n)=>{"use strict";function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:()=>r})},2471:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>O});var r,o,i=n(6156),a=n(3391),c=n(2465),u=n(2950),s=n.n(u),l=n(5264),p=n(1072),f=n(6620);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=new p.A({uri:"ws://localhost:4000/",options:{reconnect:!0}}),g=new l.ApolloClient({link:m,uri:"/graphql",cache:new l.InMemoryCache}),y=(0,l.gql)(r||(r=(0,c.Z)(["\n  subscription getMessages {\n    messages {\n      id\n      content\n      user\n    }\n  }\n"]))),h=(0,l.gql)(o||(o=(0,c.Z)(["\n  mutation postMessage($user: String!, $content: String!) {\n    postMessage(user: $user, content: $content)\n  }\n"]))),v=function(e){var t=e.user,n=(0,l.useSubscription)(y).data;return n?s().createElement(s().Fragment,null,n.messages.map((function(e){e.id;var n=e.user,r=e.content;return s().createElement("div",{style:{display:"flex",justifyContent:t===n?"flex-end":"flex-start",paddingBottom:"1em"}},t!==n&&s().createElement("div",{style:{height:50,width:50,marginRight:"0.5em",border:"2px solid #e5e6ea",borderRadius:25,textAlign:"center",fontSize:"18pt",paddingTop:5}},n.slice(0,2).toUpperCase()),s().createElement("div",{style:{background:t===n?"#58bf56":"#e5e6ea",color:t===n?"white":"black",padding:"1em",borderRadius:"1em",maxWidth:"60%"}},r))}))):s().createElement("div",null,"Nothing")},w=function(){var e=(0,u.useState)({user:"Jack",content:""}),t=(0,a.Z)(e,2),n=t[0],r=t[1],o=(0,l.useMutation)(h),i=(0,a.Z)(o,1)[0],c=function(){n.content.length>0&&i({variables:n}),r(b(b({},n),{},{content:""}))};return s().createElement(f.Container,{"data-testid":"chat-app"},s().createElement(v,{user:n.user}),s().createElement(f.Row,null,s().createElement(f.Col,{xs:2,style:{padding:0}},s().createElement(f.FormInput,{label:"User",value:n.user,onChange:function(e){return r(b(b({},n),{},{user:e.target.value}))}})),s().createElement(f.Col,{xs:8},s().createElement(f.FormInput,{"data-testid":"message-input",label:"User",value:n.content,onChange:function(e){return r(b(b({},n),{},{content:e.target.value}))},onKeyUp:function(e){13===e.keyCode&&c()}})),s().createElement(f.Col,{xs:2,style:{padding:0}},s().createElement(f.Button,{onClick:function(){return c()}},"Send"))))};const O=function(){return s().createElement(l.ApolloProvider,{client:g},s().createElement(w,null))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cDUtc3RhcnRlci1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYXBvbGxvL2NsaWVudC9saW5rL3dzL2luZGV4LmpzIiwid2VicGFjazovL3dwNS1zdGFydGVyLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL3dwNS1zdGFydGVyLXJlYWN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vd3A1LXN0YXJ0ZXItcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vc2xpY2VkVG9BcnJheS5qcyIsIndlYnBhY2s6Ly93cDUtc3RhcnRlci1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly93cDUtc3RhcnRlci1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly93cDUtc3RhcnRlci1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly93cDUtc3RhcnRlci1yZWFjdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vd3A1LXN0YXJ0ZXItcmVhY3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdGFnZ2VkVGVtcGxhdGVMaXRlcmFsLmpzIiwid2VicGFjazovL3dwNS1zdGFydGVyLXJlYWN0Ly4vc3JjL0NoYXQuanN4Il0sIm5hbWVzIjpbIldlYlNvY2tldExpbmsiLCJfc3VwZXIiLCJwYXJhbXNPckNsaWVudCIsIl90aGlzIiwiY2FsbCIsInRoaXMiLCJTdWJzY3JpcHRpb25DbGllbnQiLCJzdWJzY3JpcHRpb25DbGllbnQiLCJ1cmkiLCJvcHRpb25zIiwid2ViU29ja2V0SW1wbCIsInByb3RvdHlwZSIsInJlcXVlc3QiLCJvcGVyYXRpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJsZW5ndGgiLCJpIiwiYXJyMiIsIkFycmF5IiwiX3NsaWNlZFRvQXJyYXkiLCJpc0FycmF5IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwidW5kZWZpbmVkIiwiX3MiLCJfaSIsIm5leHQiLCJkb25lIiwicHVzaCIsImVyciIsIm8iLCJtaW5MZW4iLCJuIiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiVHlwZUVycm9yIiwiX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbCIsInN0cmluZ3MiLCJyYXciLCJmcmVlemUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwibGluayIsInJlY29ubmVjdCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIkdFVF9NRVNTQUdFUyIsImdxbCIsIlBPU1RfTUVTU0FHRSIsIk1lc3NhZ2VzIiwidXNlciIsImRhdGEiLCJ1c2VTdWJzY3JpcHRpb24iLCJtZXNzYWdlcyIsIm1hcCIsImlkIiwibWVzc2FnZVVzZXIiLCJjb250ZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJwYWRkaW5nQm90dG9tIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsInRleHRBbGlnbiIsImZvbnRTaXplIiwicGFkZGluZ1RvcCIsInRvVXBwZXJDYXNlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwicGFkZGluZyIsIm1heFdpZHRoIiwiQ2hhdCIsInVzZVN0YXRlIiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZU11dGF0aW9uIiwicG9zdE1lc3NhZ2UiLCJvblNlbmQiLCJ2YXJpYWJsZXMiLCJDb250YWluZXIiLCJkYXRhLXRlc3RpZCIsIlJvdyIsIkNvbCIsInhzIiwiRm9ybUlucHV0IiwibGFiZWwiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJvbktleVVwIiwia2V5Q29kZSIsIkJ1dHRvbiIsIm9uQ2xpY2siLCJBcG9sbG9Qcm92aWRlciJdLCJtYXBwaW5ncyI6IjhKQUdJQSxFQUFpQixTQUFVQyxHQUUzQixTQUFTRCxFQUFjRSxHQUNuQixJQUFJQyxFQUFRRixFQUFPRyxLQUFLQyxPQUFTQSxLQU9qQyxPQU5JSCxhQUEwQixFQUFBSSxtQkFDMUJILEVBQU1JLG1CQUFxQkwsRUFHM0JDLEVBQU1JLG1CQUFxQixJQUFJLEVBQUFELG1CQUFtQkosRUFBZU0sSUFBS04sRUFBZU8sUUFBU1AsRUFBZVEsZUFFMUdQLEVBS1gsT0FkQSxRQUFVSCxFQUFlQyxHQVd6QkQsRUFBY1csVUFBVUMsUUFBVSxTQUFVQyxHQUN4QyxPQUFPUixLQUFLRSxtQkFBbUJLLFFBQVFDLElBRXBDYixFQWZTLEMsUUFnQmxCLEksNEJDbkJhLFNBQVNjLEVBQWdCQyxFQUFLQyxFQUFLQyxHQVloRCxPQVhJRCxLQUFPRCxFQUNURyxPQUFPQyxlQUFlSixFQUFLQyxFQUFLLENBQzlCQyxNQUFPQSxFQUNQRyxZQUFZLEVBQ1pDLGNBQWMsRUFDZEMsVUFBVSxJQUdaUCxFQUFJQyxHQUFPQyxFQUdORixFLDhDQ1pNLFNBQVNRLEVBQWtCQyxFQUFLQyxJQUNsQyxNQUFQQSxHQUFlQSxFQUFNRCxFQUFJRSxVQUFRRCxFQUFNRCxFQUFJRSxRQUUvQyxJQUFLLElBQUlDLEVBQUksRUFBR0MsRUFBTyxJ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S0MsaUJBQVkvQixHQUEzQmdDLEdBTFUsZUFPWEMsRUFBUyxXQUNUSixFQUFNcEIsUUFBUW5ELE9BQVMsR0FDekIwRSxFQUFZLENBQ1ZFLFVBQVdMLElBR2ZDLEVBQVMsRUFBRCxLQUNIRCxHQURHLElBRU5wQixRQUFTLE9BSWIsT0FDRSxrQkFBQyxFQUFBMEIsVUFBRCxDQUFXQyxjQUFZLFlBQ3JCLGtCQUFDbkMsRUFBRCxDQUFVQyxLQUFNMkIsRUFBTTNCLE9BQ3RCLGtCQUFDLEVBQUFtQyxJQUFELEtBQ0Usa0JBQUMsRUFBQUMsSUFBRCxDQUFLQyxHQUFJLEVBQUc3QixNQUFPLENBQUVlLFFBQVMsSUFDNUIsa0JBQUMsRUFBQWUsVUFBRCxDQUNFQyxNQUFNLE9BQ041RixNQUFPZ0YsRUFBTTNCLEtBQ2J3QyxTQUFVLFNBQUNDLEdBQUQsT0FBT2IsRUFBUyxFQUFELEtBQU1ELEdBQU4sSUFBYTNCLEtBQU15QyxFQUFFQyxPQUFPL0YsYUFHekQsa0JBQUMsRUFBQXlGLElBQUQsQ0FBS0MsR0FBSSxHQUNQLGtCQUFDLEVBQUFDLFVBQUQsQ0FDRUosY0FBWSxnQkFDWkssTUFBTSxPQUNONUYsTUFBT2dGLEVBQU1wQixRQUNiaUMsU0FBVSxTQUFDQyxHQUFELE9BQU9iLEVBQVMsRUFBRCxLQUFNRCxHQUFOLElBQWFwQixRQUFTa0MsRUFBRUMsT0FBTy9GLFVBQ3hEZ0csUUFBUyxTQUFDRixHQUNVLEtBQWRBLEVBQUVHLFNBQ0piLFFBS1Isa0JBQUMsRUFBQUssSUFBRCxDQUFLQyxHQUFJLEVBQUc3QixNQUFPLENBQUVlLFFBQVMsSUFDNUIsa0JBQUMsRUFBQXNCLE9BQUQsQ0FBUUMsUUFBUyxrQkFBTWYsTUFBdkIsWUFPVixtQkFBZSxPQUNiLGtCQUFDLEVBQUFnQixlQUFELENBQWdCdkQsT0FBUUEsR0FDdEIsa0JBQUNpQyxFQUFEIiwiZmlsZSI6IjQ3MS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfX2V4dGVuZHMgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbkNsaWVudCB9IGZyb20gJ3N1YnNjcmlwdGlvbnMtdHJhbnNwb3J0LXdzJztcbmltcG9ydCB7IEFwb2xsb0xpbmsgfSBmcm9tIFwiLi4vY29yZS9pbmRleC5qc1wiO1xudmFyIFdlYlNvY2tldExpbmsgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhXZWJTb2NrZXRMaW5rLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFdlYlNvY2tldExpbmsocGFyYW1zT3JDbGllbnQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcykgfHwgdGhpcztcbiAgICAgICAgaWYgKHBhcmFtc09yQ2xpZW50IGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uQ2xpZW50KSB7XG4gICAgICAgICAgICBfdGhpcy5zdWJzY3JpcHRpb25DbGllbnQgPSBwYXJhbXNPckNsaWVudDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnN1YnNjcmlwdGlvbkNsaWVudCA9IG5ldyBTdWJzY3JpcHRpb25DbGllbnQocGFyYW1zT3JDbGllbnQudXJpLCBwYXJhbXNPckNsaWVudC5vcHRpb25zLCBwYXJhbXNPckNsaWVudC53ZWJTb2NrZXRJbXBsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIFdlYlNvY2tldExpbmsucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiAob3BlcmF0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1YnNjcmlwdGlvbkNsaWVudC5yZXF1ZXN0KG9wZXJhdGlvbik7XG4gICAgfTtcbiAgICByZXR1cm4gV2ViU29ja2V0TGluaztcbn0oQXBvbGxvTGluaykpO1xuZXhwb3J0IHsgV2ViU29ja2V0TGluayB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEFwb2xsb0NsaWVudCxcbiAgSW5NZW1vcnlDYWNoZSxcbiAgQXBvbGxvUHJvdmlkZXIsXG4gIHVzZVN1YnNjcmlwdGlvbixcbiAgdXNlTXV0YXRpb24sXG4gIGdxbCxcbn0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XG5pbXBvcnQgeyBXZWJTb2NrZXRMaW5rIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2xpbmsvd3NcIjtcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wsIEZvcm1JbnB1dCwgQnV0dG9uIH0gZnJvbSBcInNoYXJkcy1yZWFjdFwiO1xuXG4vLyBUbyB1c2UgR3JhcGhRTCBTdWJzY3JpcHRpb25zIHdpdGggQXBvbGxvIENsaWVudCwgY3JlYXRlIHRoaXMgbmV3IFdlYlNvY2tldExpbmtcbmNvbnN0IGxpbmsgPSBuZXcgV2ViU29ja2V0TGluayh7XG4gIHVyaTogXCJ3czovL2xvY2FsaG9zdDo0MDAwL1wiLFxuICBvcHRpb25zOiB7XG4gICAgcmVjb25uZWN0OiB0cnVlLFxuICB9LFxufSk7XG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAvLyBTdXBwbHkgbmV3IFdlYlNvY2tldExpbmsgaGVyZVxuICBsaW5rLFxuICB1cmk6IFwiL2dyYXBocWxcIixcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXG59KTtcblxuY29uc3QgR0VUX01FU1NBR0VTID0gZ3FsYFxuICBzdWJzY3JpcHRpb24gZ2V0TWVzc2FnZXMge1xuICAgIG1lc3NhZ2VzIHtcbiAgICAgIGlkXG4gICAgICBjb250ZW50XG4gICAgICB1c2VyXG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBQT1NUX01FU1NBR0UgPSBncWxgXG4gIG11dGF0aW9uIHBvc3RNZXNzYWdlKCR1c2VyOiBTdHJpbmchLCAkY29udGVudDogU3RyaW5nISkge1xuICAgIHBvc3RNZXNzYWdlKHVzZXI6ICR1c2VyLCBjb250ZW50OiAkY29udGVudClcbiAgfVxuYDtcblxuY29uc3QgTWVzc2FnZXMgPSAoeyB1c2VyIH0pID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VTdWJzY3JpcHRpb24oR0VUX01FU1NBR0VTKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+Tm90aGluZzwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtkYXRhLm1lc3NhZ2VzLm1hcCgoeyBpZCwgdXNlcjogbWVzc2FnZVVzZXIsIGNvbnRlbnQgfSkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IHVzZXIgPT09IG1lc3NhZ2VVc2VyID8gXCJmbGV4LWVuZFwiIDogXCJmbGV4LXN0YXJ0XCIsXG4gICAgICAgICAgICBwYWRkaW5nQm90dG9tOiBcIjFlbVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICB7dXNlciAhPT0gbWVzc2FnZVVzZXIgJiYgKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjAuNWVtXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjJweCBzb2xpZCAjZTVlNmVhXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAyNSxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThwdFwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDUsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttZXNzYWdlVXNlci5zbGljZSgwLCAyKS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1c2VyID09PSBtZXNzYWdlVXNlciA/IFwiIzU4YmY1NlwiIDogXCIjZTVlNmVhXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiB1c2VyID09PSBtZXNzYWdlVXNlciA/IFwid2hpdGVcIiA6IFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxZW1cIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjFlbVwiLFxuICAgICAgICAgICAgICBtYXhXaWR0aDogXCI2MCVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC8+XG4gICk7XG59O1xuXG5jb25zdCBDaGF0ID0gKCkgPT4ge1xuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcbiAgICB1c2VyOiBcIkphY2tcIixcbiAgICBjb250ZW50OiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3Bvc3RNZXNzYWdlXSA9IHVzZU11dGF0aW9uKFBPU1RfTUVTU0FHRSk7XG5cbiAgY29uc3Qgb25TZW5kID0gKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5jb250ZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIHBvc3RNZXNzYWdlKHtcbiAgICAgICAgdmFyaWFibGVzOiBzdGF0ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRTdGF0ZSh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyIGRhdGEtdGVzdGlkPVwiY2hhdC1hcHBcIj5cbiAgICAgIDxNZXNzYWdlcyB1c2VyPXtzdGF0ZS51c2VyfSAvPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCB4cz17Mn0gc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cbiAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICBsYWJlbD1cIlVzZXJcIlxuICAgICAgICAgICAgdmFsdWU9e3N0YXRlLnVzZXJ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXRlKHsgLi4uc3RhdGUsIHVzZXI6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIHhzPXs4fT5cbiAgICAgICAgICA8Rm9ybUlucHV0XG4gICAgICAgICAgICBkYXRhLXRlc3RpZD1cIm1lc3NhZ2UtaW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJVc2VyXCJcbiAgICAgICAgICAgIHZhbHVlPXtzdGF0ZS5jb250ZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBjb250ZW50OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgb25TZW5kKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgeHM9ezJ9IHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblNlbmQoKX0+U2VuZDwvQnV0dG9uPlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgIDxDaGF0IC8+XG4gIDwvQXBvbGxvUHJvdmlkZXI+XG4pO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==