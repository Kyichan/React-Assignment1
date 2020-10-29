(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},36:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),s=a(2),i=a(7),m=a(8),u=a(9),o=a(11),h=a(10),E=a(12),b=function(){return l.a.createElement("div",{className:"banner"},l.a.createElement("div",{className:"main_cover"},l.a.createElement("div",{className:"logo"},"MUSIC-DB")),l.a.createElement("span",null))},v=function(){return l.a.createElement("div",{className:"main_nav"},l.a.createElement("ul",null,l.a.createElement(s.b,{to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(s.b,{to:"/contact"},l.a.createElement("li",null,"Contact Us"))))},d=function(){return l.a.createElement("div",{class:"footer"},"\xa9 2020 Copyright -",l.a.createElement(s.b,{to:"/"}," MusicAlbum.com"))},g=function(e){return l.a.createElement("div",{className:"artists_list"},l.a.createElement("h4",null,"Browse the artists"),function(e){var t=e.allArtists;if(t)return t.map(function(e){var t={background:"url('/images/covers/".concat(e.cover,".jpg') no-repeat")};return l.a.createElement(s.b,{key:e.id,to:"/artist/".concat(e.id),className:"artist_item",style:t},l.a.createElement("div",{className:"artist_name"},e.name))})}(e))},p=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={artists:""},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:3004/artists",{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({artists:t})})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(g,{allArtists:this.state.artists}),l.a.createElement(d,null))}}]),t}(n.Component),f=function(){return l.a.createElement("header",null,l.a.createElement(s.b,{to:"/"},"Music DB"))},j=function(e){return l.a.createElement("div",{className:"albums_list"},function(e){var t=e.albumList;if(t)return t.map(function(e,t){return l.a.createElement("div",{className:"album_detail"},l.a.createElement("h3",null,e.title),l.a.createElement("img",{width:"100%",key:t,src:"/images/albums/".concat(e.cover,".jpg")}),l.a.createElement("h4",null,"Price - $",e.price))})}(e))},C=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={artist:""},a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat("http://localhost:3004/artists","/").concat(this.props.match.params.artistid),{method:"GET"}).then(function(e){return e.json()}).then(function(t){e.setState({artist:t})})}},{key:"componentWillUnmount",value:function(){this.setState({artist:""})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(f,null),l.a.createElement("div",{className:"artist_bio"},l.a.createElement("div",{className:"avatar"},l.a.createElement("span",{style:{background:"url('/images/covers/".concat(this.state.artist.cover,".jpg') no-repeat")}})),l.a.createElement("div",{className:"bio"},l.a.createElement("h3",null,this.state.artist.name),l.a.createElement("div",{className:"bio_text"},this.state.artist.bio)),l.a.createElement(j,{albumList:this.state.artist.albums})),l.a.createElement(d,null))}}]),t}(n.Component),N=a(6),y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(o.a)(this,Object(h.a)(t).call(this,e))).state={name:"",email:"",subject:"",message:""},a.onNameChange=a.onNameChange.bind(Object(N.a)(a)),a.onEmailChange=a.onEmailChange.bind(Object(N.a)(a)),a.onSubjectChange=a.onSubjectChange.bind(Object(N.a)(a)),a.onMsgChange=a.onMsgChange.bind(Object(N.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(N.a)(a)),a}return Object(E.a)(t,e),Object(u.a)(t,[{key:"onNameChange",value:function(e){this.setState({name:e.target.value})}},{key:"onEmailChange",value:function(e){this.setState({email:e.target.value})}},{key:"onSubjectChange",value:function(e){this.setState({subject:e.target.value})}},{key:"onMsgChange",value:function(e){this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){alert("Name: "+this.state.name+" Email: "+this.state.email+" Subject: "+this.state.subject+" Message: "+this.state.message),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(v,null),l.a.createElement(f,null),l.a.createElement(b,null),l.a.createElement("form",{onSubmit:this.handleSubmit,className:"contact_form"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name:"),l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.onNameChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"email",value:this.state.email,onChange:this.onEmailChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Subject:"),l.a.createElement("input",{type:"text",value:this.state.subject,onChange:this.onSubjectChange})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Message:"),l.a.createElement("input",{type:"textarea",value:this.state.message,onChange:this.onMsgChange})),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement(d,null))}}]),t}(n.Component);r.a.render(l.a.createElement(function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{exact:!0,path:"/",component:p}),l.a.createElement(i.a,{path:"/artist/:artistid",component:C}),l.a.createElement(i.a,{path:"/contact",component:y})))},null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.4e6a8850.chunk.js.map