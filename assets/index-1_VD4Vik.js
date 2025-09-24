import{r as P,j as n,s as g,d as u}from"./react-vendor-Bu5f_IQm.js";var w={black:"#000000",white:"#FFFFFF",primary:{200:"#D4E0F7",500:"#4A81F0",600:"#3868D9",700:"#254BB3",900:"#0D2480"},neutral:{100:"#F2F5FA",200:"#E3E8EF",300:"#CDD5E1",400:"#9AA4B2",500:"#6B7684"},error:{200:"#FF0000"},roadmap:{red:{100:"#FEE2E2",200:"#DC2626"},orange:{100:"#FFEDD5",200:"#EA580C"},yellow:{100:"#F9FFA6",200:"#E6C200"},green:{100:"#DCFCE7",200:"#16A34A"},blue:{100:"#DBEAFE",200:"#2666DC"},purple:{100:"#F3E8FF",200:"#A826DC"}}},F=e=>({horizontal:`linear-gradient(to right, ${e[200]} 0%, ${e[100]} 100%)`,vertical:`linear-gradient(to top, ${e[200]} 0%, ${e[100]} 100%)`});F(w.roadmap.red),F(w.roadmap.orange),F(w.roadmap.yellow),F(w.roadmap.green),F(w.roadmap.blue),F(w.roadmap.purple);var re={fill:{0:"0",1:"1"},grade:{0:"0",25:"25"},opticalSize:{20:"20",24:"24",40:"40",48:"48"}},oe={suit:["SUIT Variable","sans-serif"],icon:["Material Symbols Rounded","monospace"]},ie={heavy:900,extrabold:800,bold:700,semibold:600,medium:500,regular:400,light:300,extralight:200},ne={40:"40px",32:"32px",24:"24px",20:"20px",18:"18px",16:"16px",14:"14px",13:"13px",12:"12px",11:"11px"},ae={44:"44px",34:"34px",28:"28px",26:"26px",24:"24px",22:"22px",20:"20px",18:"18px",16:"16px",14:"14px"},le={5:"0.05em",1:"0.01em",0:"0em","-1":"-0.01em","-1.5":"-0.015em","-2":"-0.02em"},r={colors:w,fontFamily:oe,fontSize:ne,fontWeight:ie,lineHeight:ae,letterSpacing:le,icons:re},se={H1:"h1",H2:"h2",H3:"h3",ST:"h4",B1:"p",B2:"p",C:"span",O:"span"},de=e=>{const{variant:t="B1",as:o,color:i="inherit",width:a="auto",textAlign:c="left",whiteSpace:p="normal",ellipsis:d=!1,children:l,...s}=e;return{element:o||se[t],styledProps:{variant:t,color:i,width:a,textAlign:c,whiteSpace:p,ellipsis:d},children:l,restProps:s}},ce={H1:{fontSize:32,fontWeight:"heavy",lineHeight:44,letterSpacing:"-2"},H2:{fontSize:24,fontWeight:"extrabold",lineHeight:34,letterSpacing:"-1.5"},H3:{fontSize:20,fontWeight:"bold",lineHeight:28,letterSpacing:"-1"},ST:{fontSize:18,fontWeight:"semibold",lineHeight:26,letterSpacing:0},B1:{fontSize:16,fontWeight:"regular",lineHeight:24,letterSpacing:0},B2:{fontSize:14,fontWeight:"regular",lineHeight:22,letterSpacing:0},C:{fontSize:12,fontWeight:"light",lineHeight:18,letterSpacing:1},O:{fontSize:11,fontWeight:"medium",lineHeight:16,letterSpacing:5}},pe=new Set(["variant","color","width","textAlign","whiteSpace","ellipsis"]),ue=u`
  font-family: ${r.fontFamily.suit.join(", ")};
`,ge=(e,t,o,i)=>u`
  ${ue};
  font-size: ${r.fontSize[e]};
  font-weight: ${r.fontWeight[t]};
  line-height: ${r.lineHeight[o]};
  letter-spacing: ${r.letterSpacing[i]};
`,he=e=>{const t=ce[e];return ge(t.fontSize,t.fontWeight,t.lineHeight,t.letterSpacing)},fe=e=>!pe.has(e),xe=(e,t)=>e?{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}:{whiteSpace:t},ve=g("div",{shouldForwardProp:fe})`
  ${({color:e,textAlign:t,width:o})=>({color:e,textAlign:t,width:o})}
  
  ${({whiteSpace:e,ellipsis:t})=>xe(!!t,e)}
  ${({variant:e})=>he(e)}
`,me=e=>{const{element:t,styledProps:o,children:i,restProps:a}=de(e);return n.jsx(ve,{as:t,...o,...a,children:i})},G=me,Se=e=>{const{name:t,variant:o="MD",filled:i=!1,size:a,color:c,as:p,decorative:d=!0,...l}=e,s=d?{"aria-hidden":!0}:{role:"img","aria-hidden":!1,"aria-label":("aria-label"in l?l["aria-label"]:void 0)??t};return{styledProps:{as:p,variant:o,filled:i,size:a,color:c},ariaProps:s,restProps:l,children:t}},M={XS:{fontSize:"16px",fontWeight:"light",opticalSize:20},SM:{fontSize:"20px",fontWeight:"regular",opticalSize:24},MD:{fontSize:"24px",fontWeight:"regular",opticalSize:24},LG:{fontSize:"32px",fontWeight:"medium",opticalSize:40},XL:{fontSize:"40px",fontWeight:"semibold",opticalSize:48}},$e=new Set(["variant","filled","size","color"]),ye=(e,t,o,i=!1)=>u`
  font-size: ${e};
  font-variation-settings: 
    'FILL' ${i?1:r.icons.fill[0]},
    'wght' ${r.fontWeight[t]},
    'GRAD' ${r.icons.grade[0]},
    'opsz' ${r.icons.opticalSize[o]};
`,be=(e,t=!1)=>{const o=M[e];return ye(o.fontSize,o.fontWeight,o.opticalSize,t)},we=e=>!$e.has(e),Fe=u`
  font-family: ${r.fontFamily.icon.join(", ")};
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ze=g("span",{shouldForwardProp:we})`
  ${Fe}

  ${({color:e})=>e&&`color: ${e};`}
  
  ${({variant:e,filled:t})=>{const o=M[e];return u`
      ${be(e,t)}
      font-variation-settings: 
        'FILL' ${t?r.icons.fill[1]:r.icons.fill[0]},
        'wght' ${r.fontWeight[o.fontWeight]},
        'GRAD' ${r.icons.grade[0]},
        'opsz' ${r.icons.opticalSize[o.opticalSize]};
    `}}

  ${({size:e})=>e!=null?{fontSize:typeof e=="number"?`${e}px`:e}:void 0}
`,K=P.forwardRef((e,t)=>{const{styledProps:o,ariaProps:i,restProps:a,children:c}=Se(e);return n.jsx(ze,{ref:t,...o,...i,...a,children:c})}),N=K,Pe=new Set(["length"]),U=e=>!Pe.has(e),Ie=g("hr",{shouldForwardProp:U})`
  width: ${({length:e})=>e};
  border-top: 8px solid ${r.colors.neutral[300]};
`,Ce=g("div",{shouldForwardProp:U})`
  height: ${({length:e})=>e};
  display: inline-block;
  border-left: 8px solid ${r.colors.neutral[300]};
`,X=({orientation:e="horizontal",length:t="100%",...o})=>e==="vertical"?n.jsx(Ce,{...o,role:"separator","aria-orientation":"vertical",length:t}):n.jsx(Ie,{...o,length:t});X.displayName="Divider";var ht=X,Be=e=>{const{as:t,size:o="medium",iconPosition:i="none",variant:a="contained",rounded:c=!1,children:p,iconName:d="check",iconFilled:l=!1,disabled:s=!1,type:h="button","aria-label":x,...y}=e,v=t||"button",I=v==="button",b=v==="a"||"href"in y,m={size:o,variant:a,iconPosition:i,rounded:c,disabled:s},C={"aria-disabled":s,"aria-label":i==="only"?x||d:void 0},S={...I?{type:h}:b?{}:{role:"button",tabIndex:s?-1:0},...y};if(s&&b){const f=S;f.href=void 0,f.target=void 0,f.rel=void 0,f.download=void 0}return{element:s&&b?"span":v,styledProps:m,ariaProps:C,restProps:S,children:p,iconName:d,iconFilled:l}},Te={small:{fontSize:13,fontWeight:"semibold",lineHeight:18},medium:{fontSize:14,fontWeight:"semibold",lineHeight:20},large:{fontSize:16,fontWeight:"semibold",lineHeight:24}},De={small:{fontSize:"16px",fontWeight:"regular",grade:0,opticalSize:20},medium:{fontSize:"20px",fontWeight:"regular",grade:0,opticalSize:24},large:{fontSize:"24px",fontWeight:"medium",grade:25,opticalSize:40}},Ee={small:"6px",medium:"8px",large:"10px"},We={small:"16px",medium:"20px",large:"24px"},z="10px",je={small:"10px",medium:"12px",large:"14px"},Ae={contained:{default:u`
      background-color: ${r.colors.primary[500]};
      color: ${r.colors.white};
        
      &:hover {
        background-color: ${r.colors.primary[700]};
      }
        
      &:active {
        background-color: ${r.colors.primary[900]};
      }
    `,disabled:u`
      cursor: not-allowed;
      background-color: ${r.colors.neutral[300]};
      color: ${r.colors.neutral[500]};
    `},outlined:{default:u`
      background-color: transparent;
      border: 1px solid ${r.colors.primary[500]};
      color: ${r.colors.primary[500]};
        
      &:hover {
        background-color: ${r.colors.primary[600]};
        color: ${r.colors.white};
      }
        
      &:active {
        background-color: ${r.colors.primary[900]};
        color: ${r.colors.white};
      }
    `,disabled:u`
      cursor: not-allowed;
      background-color: transparent;
      color: ${r.colors.neutral[300]};
      border: 1px solid ${r.colors.neutral[300]};
    `}},Ne=new Set(["size","variant","iconPosition","rounded"]),He=(e,t,o)=>u`
  font-size: ${r.fontSize[e]};
  font-weight: ${r.fontWeight[t]};
  line-height: ${r.lineHeight[o]};
  letter-spacing: 0;
`,ke=e=>{const t=Te[e];return He(t.fontSize,t.fontWeight,t.lineHeight)},_e=(e,t,o,i,a)=>u`
  font-size: ${t};
  font-variation-settings: 
    'FILL' ${r.icons.fill[e]},
    'wght' ${r.fontWeight[o]}, 
    'GRAD' ${r.icons.grade[i]}, 
    'opsz' ${r.icons.opticalSize[a]};
`,Re=(e,t)=>{const o=De[e];return _e(t,o.fontSize,o.fontWeight,o.grade,o.opticalSize)},Oe=e=>Ee[e],Le=(e,t)=>{const o=je[e],i=We[e];return t==="only"?z:t==="left"?`${z} ${i} ${z} ${o}`:t==="right"?`${z} ${o} ${z} ${i}`:`${z} ${i}`},Ge=(e,t)=>Ae[e][t?"disabled":"default"],Ve=e=>!Ne.has(e),Me=u`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  box-sizing: border-box;
  text-decoration: none;
`,Ke=e=>u`
  &:focus-visible {
    outline: none;
    box-shadow: ${e==="outlined"?`inset 0 0 0 2px ${r.colors.primary[500]}, 0 0 0 2px ${r.colors.primary[200]}`:`0 0 0 2px ${r.colors.primary[200]}`};
  }
`,V=g("button",{shouldForwardProp:Ve})`
  ${Me}
  
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  gap: ${({size:e})=>Oe(e)};
  padding: ${({size:e,iconPosition:t})=>Le(e,t)};
  border-radius: ${({rounded:e})=>e?"20px":"8px"};
  
  ${({variant:e,disabled:t})=>Ge(e,t)}
  ${({variant:e})=>Ke(e)}
`,H=g.span`
  font-family: ${r.fontFamily.icon.join(", ")};
  user-select: none;
  ${({size:e,filled:t})=>Re(e,t?1:0)}
`,Ue=g.span`
  ${({size:e})=>ke(e)}
`,Xe=e=>{const{element:t,styledProps:o,ariaProps:i,restProps:a,children:c,iconName:p,iconFilled:d}=Be(e),{size:l,iconPosition:s}=o,h=t,x=n.jsxs(n.Fragment,{children:[s==="left"&&n.jsx(H,{size:l,filled:d,"aria-hidden":!0,children:p}),c&&n.jsx(Ue,{size:l,children:c}),s==="right"&&n.jsx(H,{size:l,filled:d,"aria-hidden":!0,children:p})]});return s==="only"?n.jsx(V,{as:h,...o,...i,...a,children:n.jsx(H,{size:l,filled:d,"aria-hidden":!0,children:p})}):n.jsx(V,{as:h,...o,...i,...a,children:x})},ft=Xe,Ze=e=>{const{id:t,value:o,type:i,error:a=!1,leftIcon:c,rightIcon:p,onChange:d,onFocus:l,onBlur:s,label:h,helperText:x,width:y,containerClassName:v,labelClassName:I,helperClassName:b,defaultValue:m,...C}=e,T=P.useId(),S=t||`textfield-${T}`,f=`helper-${S}`,[D,B]=P.useState(!1),[E,j]=P.useState(!1),W=o!==void 0,[A,Z]=P.useState(()=>typeof m=="string"?m:m!=null?String(m):""),R=W?o:A,O=!!R,L=i==="password",Y=!!c||a,q=!!p,J=L?E?"text":"password":i,Q=a?"warning":c,ee=a?r.colors.error[200]:D?r.colors.primary[500]:r.colors.neutral[300],te=a?r.colors.error[200]:O?r.colors.black:r.colors.neutral[400];return{id:S,helperId:f,value:R,isFilled:O,showPassword:E,hasToggle:L,hasLeft:Y,hasRight:q,resolvedType:J,leftIconResolved:Q,borderColor:ee,affixColor:te,onChange:$=>{W||Z($.target.value),d==null||d($)},onFocus:$=>{B(!0),l==null||l($)},onBlur:$=>{B(!1),s==null||s($)},togglePassword:()=>{j($=>!$)},restProps:C,label:h,helperText:x,error:a,rightIcon:p,width:y,containerClassName:v,labelClassName:I,helperClassName:b}},Ye=new Set(["hasError","filled","hasLeft","hasRight","hasToggle"]),k=`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`,qe=`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
`,Je=e=>!Ye.has(e),Qe=g.div`
  ${k}
  left: 12px;
  pointer-events: none;
`,et=g.div`
  ${k}
  right: 12px;
  pointer-events: none;
`,tt=g.button`
  ${k}
  ${qe}
  right: 12px;

  &:hover {
    background-color: ${r.colors.neutral[100]};
  }

  &:focus {
    outline: none;
    background-color: ${r.colors.neutral[200]};
  }
`,rt=`
  display: flex;
  height: 48px;
  width: 100%;
  align-items: center;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: ${r.colors.white};
  padding: 12px;
  font-size: ${r.fontSize[16]};
  font-weight: ${r.fontWeight.regular};
  line-height: ${r.lineHeight[24]};
  font-family: ${r.fontFamily.suit.join(", ")};
  color: ${r.colors.black};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
`,ot=(e,t)=>e&&t?"padding-left: 36px; padding-right: 36px;":e?"padding-left: 36px;":t?"padding-right: 36px;":"",it=(e,t)=>e?`box-shadow: inset 0 0 0 1px ${r.colors.error[200]};`:t?`box-shadow: inset 0 0 0 1px ${r.colors.primary[500]};`:`box-shadow: inset 0 0 0 1px ${r.colors.neutral[300]};`,nt=g.output`
  text-align: left;
`,at=g.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,lt=g.div`
  position: relative;
  width: ${({width:e})=>typeof e=="number"?`${e}px`:e??"100%"};
`,st=g("input",{shouldForwardProp:Je})`
  ${rt}

  &::placeholder {
    color: ${r.colors.neutral[400]};
    font-size: ${r.fontSize[16]};
    font-weight: ${r.fontWeight.regular};
    line-height: ${r.lineHeight[24]};
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 calc(1px * 2) ${r.colors.primary[500]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({hasLeft:e,hasRight:t})=>ot(e,t)}
  ${({hasError:e,filled:t})=>it(e,t)}

  ${({filled:e,hasError:t})=>!t&&e&&u`
      &:focus {
        box-shadow: inset 0 0 0 calc(1px * 2) ${r.colors.primary[500]};
      }
    `}
`,_=P.forwardRef((e,t)=>{const{id:o,helperId:i,value:a,isFilled:c,showPassword:p,hasToggle:d,hasLeft:l,hasRight:s,resolvedType:h,leftIconResolved:x,borderColor:y,affixColor:v,onChange:I,onFocus:b,onBlur:m,togglePassword:C,restProps:T,label:S,helperText:f,error:D,rightIcon:B,width:E,containerClassName:j,labelClassName:W,helperClassName:A}=Ze(e);return n.jsxs(at,{className:j,children:[S&&n.jsx(G,{as:"label",variant:"B1",color:y,htmlFor:o,className:W,children:S}),n.jsxs(lt,{width:E,children:[l&&x&&n.jsx(Qe,{"aria-hidden":!0,children:n.jsx(N,{name:x,variant:"SM",color:v})}),n.jsx(st,{...T,id:o,ref:t,type:h,hasError:D,filled:c,hasLeft:l,hasRight:s,hasToggle:d,onChange:I,onFocus:b,onBlur:m,"aria-invalid":D||void 0,"aria-describedby":f?i:void 0,value:a}),d?n.jsx(tt,{type:"button",onClick:C,"aria-label":p?"비밀번호 숨기기":"비밀번호 표시",children:n.jsx(N,{name:p?"visibility":"visibility_off",variant:"SM",color:v})}):B&&n.jsx(et,{"aria-hidden":!0,children:n.jsx(N,{name:B,variant:"SM",color:v})})]}),f&&n.jsx(nt,{id:i,className:A,children:n.jsx(G,{variant:"B1",color:y,children:f})})]})});_.displayName="TextField";var xt=_;K.__docgenInfo={description:"",methods:[],displayName:"Icon"};_.__docgenInfo={description:"",methods:[],displayName:"TextField"};export{ft as B,ht as D,N as I,G as T,xt as a};
