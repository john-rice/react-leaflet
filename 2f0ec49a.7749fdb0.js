(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{67:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return l})),r.d(n,"rightToc",(function(){return i})),r.d(n,"default",(function(){return u}));var t=r(2),a=r(6),o=(r(0),r(96)),c={title:"Panes"},l={unversionedId:"example-panes",id:"example-panes",isDocsHomePage:!1,title:"Panes",description:"`tsx live noInline",source:"@site/docs/example-panes.md",slug:"/example-panes",permalink:"/docs/example-panes",version:"current",sidebar:"docs",previous:{title:"Layers control",permalink:"/docs/example-layers-control"},next:{title:"Draggable Marker",permalink:"/docs/example-draggable-marker"}},i=[],p={rightToc:i};function u(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx",metastring:"live noInline",live:!0,noInline:!0}),'const outer = [\n  [50.505, -29.09],\n  [52.505, 29.09],\n]\nconst inner = [\n  [49.505, -2.09],\n  [53.505, 2.09],\n]\n\nfunction BlinkingPane() {\n  const [render, setRender] = useState(true)\n  const timerRef = useRef()\n  useEffect(() => {\n    timerRef.current = setInterval(() => {\n      setRender((r) => !r)\n    }, 5000)\n    return () => {\n      clearInterval(timerRef.current)\n    }\n  }, [])\n\n  return render ? (\n    <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>\n      <Rectangle bounds={outer} pathOptions={{ color: \'cyan\' }} />\n    </Pane>\n  ) : null\n}\n\nrender(\n  <MapContainer bounds={outer} scrollWheelZoom={false}>\n    <TileLayer\n      attribution=\'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors\'\n      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"\n    />\n    <BlinkingPane />\n    <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>\n      <Rectangle bounds={inner} pathOptions={{ color: \'yellow\' }} />\n      <Pane name="purple-rectangle">\n        <Rectangle bounds={outer} pathOptions={{ color: \'purple\' }} />\n      </Pane>\n    </Pane>\n  </MapContainer>,\n)\n')))}u.isMDXComponent=!0},96:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return d}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=t,d=s["".concat(c,".").concat(m)]||s[m]||f[m]||o;return r?a.a.createElement(d,l(l({ref:n},p),{},{components:r})):a.a.createElement(d,l({ref:n},p))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,c[1]=l;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);