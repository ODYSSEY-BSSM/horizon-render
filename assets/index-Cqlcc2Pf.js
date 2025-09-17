import{r as g,j as i,s as c,d}from"./react-vendor-Bu5f_IQm.js";var S={black:"#000000",white:"#FFFFFF",primary:{200:"#D4E0F7",500:"#4A81F0",600:"#3868D9",700:"#254BB3",900:"#0D2480"},neutral:{100:"#F2F5FA",200:"#E3E8EF",300:"#CDD5E1",400:"#9AA4B2"},error:{200:"#FF0000"},roadmap:{red:{100:"#FEE2E2",200:"#DC2626"},orange:{100:"#FFEDD5",200:"#EA580C"},yellow:{100:"#F9FFA6",200:"#E6C200"},green:{100:"#DCFCE7",200:"#16A34A"},blue:{100:"#DBEAFE",200:"#2666DC"},purple:{100:"#F3E8FF",200:"#A826DC"}}},k=e=>({horizontal:`linear-gradient(to right, ${e[200]} 0%, ${e[100]} 100%)`,vertical:`linear-gradient(to top, ${e[200]} 0%, ${e[100]} 100%)`});k(S.roadmap.red),k(S.roadmap.orange),k(S.roadmap.yellow),k(S.roadmap.green),k(S.roadmap.blue),k(S.roadmap.purple);var J={fill:{0:"0",1:"1"},grade:{0:"0",25:"25"},opticalSize:{20:"20",24:"24",40:"40",48:"48"}},Q={color:S.neutral[300],weight:"1px"},ee={object:"8px"},te={suit:["SUIT Variable","sans-serif"],icon:["Material Symbols Rounded","monospace"]},re={heavy:900,extrabold:800,bold:700,semibold:600,medium:500,regular:400,light:300,extralight:200},oe={40:"40px",32:"32px",24:"24px",20:"20px",18:"18px",16:"16px",14:"14px",13:"13px",12:"12px",11:"11px"},ae={44:"44px",34:"34px",28:"28px",26:"26px",24:"24px",22:"22px",20:"20px",18:"18px",16:"16px",14:"14px"},ie={5:"0.05em",1:"0.01em",0:"0em","-1":"-0.01em","-1.5":"-0.015em","-2":"-0.02em"},t={colors:S,fontFamily:te,fontSize:oe,fontWeight:re,lineHeight:ae,letterSpacing:ie,icons:J,stroke:Q,rounding:ee},le={H1:"h1",H2:"h2",H3:"h3",ST:"h4",B1:"p",B2:"p",C:"span",O:"span"},ne=e=>{const{variant:r="B1",as:o,color:a="inherit",width:l="auto",textAlign:n="left",whiteSpace:p="normal",ellipsis:u=!1,children:s,...f}=e;return{element:o||le[r],styledProps:{variant:r,color:a,width:l,textAlign:n,whiteSpace:p,ellipsis:u},children:s,restProps:f}},se={H1:{fontSize:32,fontWeight:"heavy",lineHeight:44,letterSpacing:"-2"},H2:{fontSize:24,fontWeight:"extrabold",lineHeight:34,letterSpacing:"-1.5"},H3:{fontSize:20,fontWeight:"bold",lineHeight:28,letterSpacing:"-1"},ST:{fontSize:18,fontWeight:"semibold",lineHeight:26,letterSpacing:0},B1:{fontSize:16,fontWeight:"regular",lineHeight:24,letterSpacing:0},B2:{fontSize:14,fontWeight:"light",lineHeight:22,letterSpacing:0},C:{fontSize:12,fontWeight:"extralight",lineHeight:18,letterSpacing:1},O:{fontSize:11,fontWeight:"medium",lineHeight:16,letterSpacing:5}},de=d`
  font-family: ${t.fontFamily.suit.join(", ")};
`,ce=(e,r,o,a)=>d`
  ${de};
  font-size: ${t.fontSize[e]};
  font-weight: ${t.fontWeight[r]};
  line-height: ${t.lineHeight[o]};
  letter-spacing: ${t.letterSpacing[a]};
`,pe=e=>{const r=se[e];return ce(r.fontSize,r.fontWeight,r.lineHeight,r.letterSpacing)},ue=new Set(["variant","color","width","textAlign","whiteSpace","ellipsis"]),fe=e=>!ue.has(e),ge=(e,r)=>e?{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}:{whiteSpace:r},he=c("div",{shouldForwardProp:fe})`
  ${({color:e,textAlign:r,width:o})=>({color:e,textAlign:r,width:o})}
  
  ${({whiteSpace:e,ellipsis:r})=>ge(r,e)}
  ${({variant:e})=>pe(e)}
`,xe=e=>{const{element:r,styledProps:o,children:a,restProps:l}=ne(e);return i.jsx(he,{as:r,...o,...l,children:a})},N=xe,G={XS:{fontSize:"16px",fontWeight:"light",opticalSize:20},SM:{fontSize:"20px",fontWeight:"regular",opticalSize:24},MD:{fontSize:"24px",fontWeight:"regular",opticalSize:24},LG:{fontSize:"32px",fontWeight:"medium",opticalSize:40},XL:{fontSize:"40px",fontWeight:"semibold",opticalSize:48}},ve=(e,r,o,a=!1)=>d`
  font-size: ${e};
  font-variation-settings: 
    'FILL' ${a?1:t.icons.fill[0]},
    'wght' ${t.fontWeight[r]},
    'GRAD' ${t.icons.grade[0]},
    'opsz' ${t.icons.opticalSize[o]};
`,Se=(e,r=!1)=>{const o=G[e];return ve(o.fontSize,o.fontWeight,o.opticalSize,r)},$e=new Set(["variant","filled","size","color"]),me=e=>!$e.has(e),be=d`
  font-family: ${t.fontFamily.icon.join(", ")};
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`,ye=c("span",{shouldForwardProp:me})`
  ${be}

  ${({color:e})=>e&&`color: ${e};`}
  
  ${({variant:e,filled:r})=>{const o=G[e];return d`
      ${Se(e,r)}
      font-variation-settings: 
        'FILL' ${r?t.icons.fill[1]:t.icons.fill[0]},
        'wght' ${t.fontWeight[o.fontWeight]},
        'GRAD' ${t.icons.grade[0]},
        'opsz' ${t.icons.opticalSize[o.opticalSize]};
    `}}

  /* 명시적 size가 있을 경우 최종 override */
  ${({size:e})=>e!=null?{fontSize:typeof e=="number"?`${e}px`:e}:void 0}
`,V=g.forwardRef(function({name:r,variant:o="MD",filled:a=!1,size:l,color:n,as:p,decorative:u=!0,...s},f){const h=u?{"aria-hidden":!0}:{role:"img","aria-hidden":!1,"aria-label":("aria-label"in s?s["aria-label"]:void 0)??r};return i.jsx(ye,{as:p,ref:f,variant:o,filled:a,size:l,color:n,...h,...s,children:r})}),H=V,we=new Set(["length"]),M=e=>!we.has(e),ze=c("hr",{shouldForwardProp:M})`
  width: ${({length:e})=>e};
  border-top: ${t.stroke.weight} solid ${t.stroke.color};
`,Fe=c("div",{shouldForwardProp:M})`
  height: ${({length:e})=>e};
  display: inline-block;
  border-left: ${t.stroke.weight} solid ${t.stroke.color};
`,K=({orientation:e="horizontal",length:r="100%",...o})=>e==="vertical"?i.jsx(Fe,{...o,role:"separator","aria-orientation":"vertical",length:r}):i.jsx(ze,{...o,length:r});K.displayName="Divider";var lt=K,Ie={small:{fontSize:13,fontWeight:"semibold",lineHeight:18},medium:{fontSize:14,fontWeight:"semibold",lineHeight:20},large:{fontSize:16,fontWeight:"semibold",lineHeight:24}},ke=(e,r,o)=>d`
  font-size: ${t.fontSize[e]};
  font-weight: ${t.fontWeight[r]};
  line-height: ${t.lineHeight[o]};
  letter-spacing: 0;
`,Ce=e=>{const r=Ie[e];return ke(r.fontSize,r.fontWeight,r.lineHeight)},De={small:{fontSize:"16px",fontWeight:"regular",grade:0,opticalSize:20},medium:{fontSize:"20px",fontWeight:"regular",grade:0,opticalSize:24},large:{fontSize:"24px",fontWeight:"medium",grade:25,opticalSize:40}},Te=(e,r,o,a,l)=>d`
  font-size: ${r};
  font-variation-settings: 
    'FILL' ${t.icons.fill[e]},
    'wght' ${t.fontWeight[o]}, 
    'GRAD' ${t.icons.grade[a]}, 
    'opsz' ${t.icons.opticalSize[l]};
`,je=(e,r)=>{const o=De[e];return Te(r,o.fontSize,o.fontWeight,o.grade,o.opticalSize)},Be={small:"6px",medium:"8px",large:"10px"},Ee=e=>Be[e],We={small:"16px",medium:"20px",large:"24px"},C="10px",Pe={small:"10px",medium:"12px",large:"14px"},Ae=(e,r)=>{const o=Pe[e],a=We[e];return r==="only"?C:r==="left"?`${C} ${a} ${C} ${o}`:r==="right"?`${C} ${o} ${C} ${a}`:`${C} ${a}`},He={contained:{default:d`
      background-color: ${t.colors.primary[500]};
      color: ${t.colors.white};
        
      &:hover {
        background-color: ${t.colors.primary[700]};
      }
        
      &:active {
        background-color: ${t.colors.primary[900]};
      }
    `,disabled:d`
      cursor: not-allowed;
      background-color: ${t.colors.neutral[300]};
    `},outlined:{default:d`
      background-color: transparent;
      border: 1px solid ${t.colors.primary[500]};
      color: ${t.colors.primary[500]};
        
      &:hover {
        background-color: ${t.colors.primary[600]};
        color: ${t.colors.white};
      }
        
      &:active {
        background-color: ${t.colors.primary[900]};
        color: ${t.colors.white};
      }
    `,disabled:d`
      cursor: not-allowed;
      background-color: transparent;
      color: ${t.colors.neutral[300]};
      border: 1px solid ${t.colors.neutral[300]};
    `}},_e=(e,r)=>He[e][r?"disabled":"default"],Oe=new Set(["size","variant","iconPosition","rounded","disabled","as"]),Re=e=>!Oe.has(e),Ne=d`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: all 0.2s ease-in-out;
  flex-shrink: 0;
  box-sizing: border-box;
  text-decoration: none;
`,Le=e=>d`
  &:focus-visible {
    outline: none;
    box-shadow: ${e==="outlined"?`inset 0 0 0 2px ${t.colors.primary[500]}, 0 0 0 2px ${t.colors.primary[200]}`:`0 0 0 2px ${t.colors.primary[200]}`};
  }
`,L=c("button",{shouldForwardProp:Re})`
  ${Ne}
  
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  gap: ${({size:e})=>Ee(e)};
  padding: ${({size:e,iconPosition:r})=>Ae(e,r)};
  border-radius: ${({rounded:e})=>e?"20px":"8px"};
  
  ${({variant:e,disabled:r})=>_e(e,r)}
  ${({variant:e})=>Le(e)}
`,_=c.span`
  font-family: ${t.fontFamily.icon.join(", ")};
  user-select: none;
  ${({size:e,filled:r})=>je(e,r?1:0)}
`,Ge=c.span`
  ${({size:e})=>Ce(e)}
`,Ve=({as:e,size:r="medium",iconPosition:o="none",variant:a="contained",rounded:l=!1,children:n,iconName:p="check",iconFilled:u=!1,disabled:s=!1,type:f="button","aria-label":h,onClick:$,onKeyDown:D,...y})=>{const m=e||"button",w=m==="button",T=m==="a"||"href"in y,b=o==="only"?i.jsx(_,{size:r,filled:u,children:p}):i.jsxs(i.Fragment,{children:[o==="left"&&i.jsx(_,{size:r,filled:u,"aria-hidden":!0,children:p}),n&&i.jsx(Ge,{size:r,children:n}),o==="right"&&i.jsx(_,{size:r,filled:u,"aria-hidden":!0,children:p})]}),x={size:r,variant:a,iconPosition:o,rounded:l,disabled:s,"aria-disabled":s,"aria-label":o==="only"?h||p:void 0,...w?{type:f}:{role:"button",tabIndex:s?-1:0},...y};return s&&T?i.jsx(L,{as:"span",...x,children:b}):i.jsx(L,{as:m,...x,children:b})},nt=Ve,Me=({id:e,value:r,defaultValue:o,onChange:a,onFocus:l,onBlur:n,error:p=!1,leftIcon:u,rightIcon:s,...f})=>{const h=g.useId(),$=e??h,D=`${$}-help`,[y,m]=g.useState(String(o??"")),[w,T]=g.useState(!1),[b,x]=g.useState(!1),z=r!==void 0?String(r):y,F=!!z.trim(),j=(f.type??"text")==="password",I=j,B=j||!!u,E=I||!!s,W=I?w?"text":"password":f.type,P=B?u??"lock":void 0,A=b?t.colors.primary[500]:p?t.colors.error[200]:F?t.colors.primary[500]:t.colors.neutral[300],X=F?t.colors.black:t.colors.neutral[400],q=g.useCallback(v=>{r===void 0&&m(v.target.value),a==null||a(v)},[r,a]),U=g.useCallback(v=>{x(!0),l==null||l(v)},[l]),Z=g.useCallback(v=>{x(!1),n==null||n(v)},[n]),Y=g.useCallback(()=>{T(v=>!v)},[]);return{id:$,helperId:D,value:z,isFocused:b,isFilled:F,isPassword:j,showPassword:w,hasToggle:I,hasLeft:B,hasRight:E,resolvedType:W,leftIconResolved:P,borderColor:A,affixColor:X,onChange:q,onFocus:U,onBlur:Z,togglePassword:Y}},Ke=new Set(["hasError","filled","hasLeft","hasRight","hasToggle"]),Xe=e=>!Ke.has(e),O=`
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
`,Ue=c.div`
  ${O}
  left: 12px;
  pointer-events: none;
`,Ze=c.div`
  ${O}
  right: 12px;
  pointer-events: none;
`,Ye=c.button`
  ${O}
  ${qe}
  right: 12px;

  &:hover {
    background-color: ${t.colors.neutral[100]};
  }

  &:focus {
    outline: none;
    background-color: ${t.colors.neutral[200]};
  }
`,Je=`
  display: flex;
  height: 48px;
  width: 100%;
  align-items: center;
  border-radius: ${t.rounding.object};
  border: ${t.stroke.weight} solid transparent;
  background-color: ${t.colors.white};
  padding: 12px;
  font-size: ${t.fontSize[16]};
  font-weight: ${t.fontWeight.regular};
  line-height: ${t.lineHeight[24]};
  font-family: ${t.fontFamily.suit.join(", ")};
  color: ${t.colors.black};
  box-sizing: border-box;
  transition: all 0.2s ease-in-out;
`,Qe=(e,r)=>e&&r?"padding-left: 36px; padding-right: 36px;":e?"padding-left: 36px;":r?"padding-right: 36px;":"",et=(e,r)=>e?`box-shadow: inset 0 0 0 ${t.stroke.weight} ${t.colors.error[200]};`:r?`box-shadow: inset 0 0 0 ${t.stroke.weight} ${t.colors.primary[500]};`:`box-shadow: inset 0 0 0 ${t.stroke.weight} ${t.colors.neutral[300]};`,tt=c.output`
  text-align: left;
`,rt=c.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,ot=c.div`
  position: relative;
  width: ${({width:e})=>typeof e=="number"?`${e}px`:e??"100%"};
`,at=c("input",{shouldForwardProp:Xe})`
  ${Je}

  &::placeholder {
    color: ${t.colors.neutral[400]};
    font-size: ${t.fontSize[16]};
    font-weight: ${t.fontWeight.regular};
    line-height: ${t.lineHeight[24]};
  }

  &:focus {
    outline: none;
    box-shadow: inset 0 0 0 calc(${t.stroke.weight} * 2) ${t.colors.primary[500]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({hasLeft:e,hasRight:r})=>Qe(e,r)}
  ${({hasError:e,filled:r})=>et(e,r)}

  ${({filled:e,hasError:r})=>!r&&e&&d`
      &:focus {
        box-shadow: inset 0 0 0 calc(${t.stroke.weight} * 2) ${t.colors.primary[500]};
      }
    `}
`,R=g.forwardRef((e,r)=>{const{id:o,helperId:a,value:l,isFilled:n,showPassword:p,hasToggle:u,hasLeft:s,hasRight:f,resolvedType:h,leftIconResolved:$,borderColor:D,affixColor:y,onChange:m,onFocus:w,onBlur:T,togglePassword:b}=Me(e),{label:x,helperText:z,error:F=!1,leftIcon:j,rightIcon:I,width:B,containerClassName:E,labelClassName:W,helperClassName:P,...A}=e;return i.jsxs(rt,{className:E,children:[x&&i.jsx(N,{as:"label",variant:"B1",color:D,htmlFor:o,className:W,children:x}),i.jsxs(ot,{width:B,children:[s&&$&&i.jsx(Ue,{"aria-hidden":!0,children:i.jsx(H,{name:$,variant:"SM",color:y})}),i.jsx(at,{...A,id:o,ref:r,type:h,hasError:F,filled:n,hasLeft:s,hasRight:f,hasToggle:u,onChange:m,onFocus:w,onBlur:T,"aria-invalid":F||void 0,"aria-describedby":z?a:void 0,value:l}),u?i.jsx(Ye,{type:"button",onClick:b,"aria-label":p?"비밀번호 숨기기":"비밀번호 표시",children:i.jsx(H,{name:p?"visibility":"visibility_off",variant:"SM",color:n?t.colors.black:t.colors.neutral[400]})}):I&&i.jsx(Ze,{"aria-hidden":!0,children:i.jsx(H,{name:I,variant:"SM",color:n?t.colors.black:t.colors.neutral[400]})})]}),z&&i.jsx(tt,{id:a,className:P,children:i.jsx(N,{variant:"B1",color:D,children:z})})]})});R.displayName="TextField";var st=R;V.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{variant:{defaultValue:{value:'"MD"',computed:!1},required:!1},filled:{defaultValue:{value:"false",computed:!1},required:!1},decorative:{defaultValue:{value:"true",computed:!1},required:!1}}};R.__docgenInfo={description:"",methods:[],displayName:"TextField"};export{nt as B,lt as D,H as I,N as T,st as a};
