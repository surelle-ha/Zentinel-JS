(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[707],{5747:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/schema",function(){return a(6725)}])},5937:function(e,t,a){"use strict";a.d(t,{te:function(){return i},A8:function(){return l}}),(r=c||(c={})).CcBySa3="cc-by-sa-3",r.Mit="mit",r.NewBsd="new-bsd";var s,n,r,c,i,o,u=a(4960);function l(e){let t=function(e){switch(e){case u.vx:return"blog";case u.L1:return"employee";case u._d:return"sakila";case u.tP:return"sstudent information system";default:return}}(e);return t?{schemaId:function(e){switch(e){case"blog":return u.vx;case"employee":return u.L1;case"sakila":return u._d;case"sstudent information system":return u.tP}}(t),isExample:!0,displayName:m(t),description:function(e){var t;let a=m(e),s=d(e),n=(t=h(e),"The schema was converted to TypeScript for Sequelize UI by Tom Schuster and is available at <".concat(t,">.")),r="under the [".concat(function(e){switch(e){case"cc-by-sa-3":return"Creative Commons Attribution-ShareAlike 3.0 Unported";case"mit":return"MIT";case"new-bsd":return"BSD 3-Clause"}}(s)," License](").concat(function(e){switch(e){case"cc-by-sa-3":return"https://creativecommons.org/licenses/by-sa/3.0/legalcode";case"mit":return"https://opensource.org/licenses/MIT";case"new-bsd":return"https://opensource.org/licenses/BSD-3-Clause"}}(s),")");switch(e){case"blog":return["The ".concat(a," sample database is a schema for blogging website with users, posts, comments, tags and categories."),"The schema was created by Bhagwat Singh Chouhan with Tutorials24x7 ".concat(r," and is available at <https://github.com/tutorials24x7/blog-database-mysql>."),n];case"employee":return["The ".concat(a," sample database is a temporal database for tracking salary, title and department for a company's employees over time."),"The schema was created by Fusheng Wang and Carlo Zaniolo ".concat(r," and is available XML format at <http://timecenter.cs.aau.dk/software.htm>."),"The relational schema for this data was created by Giuseppe Maxia and the data was converted from XML to relational by Patrick Crews. The schema and data are available at <https://github.com/datacharmer/test_db>.",n];case"sakila":return["The ".concat(a," sample database is a schema for a video rental store commonly used as an example database for SQL tutorials."),"The schema and data were created by Mike Hillyer with the MySQL AB documentation team ".concat(r," and is available at <https://dev.mysql.com/doc/index-other.html>."),n];case"sstudent information system":return["The ".concat(a," sample database is a simple schema for a student information system with students, teachers and courses."),"The schema was created by Tom Schuster ".concat(r,".")]}}(t),slug:function(e){switch(e){case"blog":return"blog";case"employee":return"employees";case"sakila":return"sakila";case"sstudent information system":return"student-info-system"}}(t),license:d(t),source:h(t),icon:function(e){switch(e){case"blog":return"rss";case"employee":return"user-group";case"sakila":return"film";case"sstudent information system":return"academic-cap"}}(t)}:null}function m(e){switch(e){case"blog":return"Blog";case"employee":return"Employees";case"sakila":return"Sakila";case"sstudent information system":return"Student Info System"}}function d(e){switch(e){case"blog":return c.Mit;case"employee":return c.CcBySa3;case"sakila":case"sstudent information system":return c.NewBsd}}function h(e){switch(e){case"blog":case"sakila":return"https://github.com/tomjschuster/sequelize-ui-ts/blob/main/src/api/schema/examples/sakila.ts";case"employee":return"https://github.com/tomjschuster/sequelize-ui-ts/blob/main/src/api/schema/examples/employees.ts";case"sstudent information system":return"https://github.com/tomjschuster/sequelize-ui-ts/blob/main/src/api/schema/examples/studentInfoSystem.ts"}}(s=i||(i={})).Rss="rss",s.UserGroup="user-group",s.Film="film",s.AcademicCap="academic-cap",(n=o||(o={})).Blog="blog",n.Employees="employee",n.Sakila="sakila",n.StudentInfoSystem="sstudent information system"},6710:function(e,t,a){"use strict";a.d(t,{Z:function(){return g}});var s,n,r,c,i,o,u=a(7803),l=a(6940),m=a(6510),d=JSON.parse('{"metadata":{"version":"1.0.0"},"properties":{"defaultDbOptions":{"ref":"dbOptions"}},"definitions":{"dbOptions":{"additionalProperties":true,"properties":{"sqlDialect":{"enum":["postgres","sqlite","mysql","mariadb","mssql"]},"prefixPks":{"nullable":true,"type":"boolean"},"timestamps":{"type":"boolean"},"caseStyle":{"enum":["snake","camel"]},"nounForm":{"enum":["singular","plural"]},"migrations":{"type":"boolean"}}}}}');async function h(e){var t;let a=(0,m.validate)(d,e);return a.length>0?await Promise.reject(a):{defaultDbOptions:{...t=e.defaultDbOptions,sqlDialect:function(e){switch(e){case o.Postgres:return u.t5.Postgres;case o.Sqlite:return u.t5.Sqlite;case o.Mysql:return u.t5.MySql;case o.Mariadb:return u.t5.MariaDb;case o.Mssql:return u.t5.MsSql}}(t.sqlDialect),caseStyle:function(e){switch(e){case c.Snake:return u.eB.Snake;case c.Camel:return u.eB.Camel}}(t.caseStyle),nounForm:function(e){switch(e){case i.Singular:return u.Bb.Singular;case i.Plural:return u.Bb.Plural}}(t.nounForm)}}}(s=c||(c={})).Camel="camel",s.Snake="snake",(n=i||(i={})).Plural="plural",n.Singular="singular",(r=o||(o={})).Mariadb="mariadb",r.Mssql="mssql",r.Mysql="mysql",r.Postgres="postgres",r.Sqlite="sqlite";class p{async getDefaultDbOptions(){try{let e=await y();return e?e.defaultDbOptions:u.Yn}catch(e){return console.error(e),this.clearPreferences(),u.Yn}}async updateDefaultDbOptions(e){return await b({defaultDbOptions:e}),e}async clearPreferences(){(0,l.Od)(f())}}function f(){return(0,l.yH)("userPreferences")}async function b(e){var t;let a={defaultDbOptions:{...t=e.defaultDbOptions,sqlDialect:function(e){switch(e){case u.t5.Postgres:return o.Postgres;case u.t5.Sqlite:return o.Sqlite;case u.t5.MySql:return o.Mysql;case u.t5.MariaDb:return o.Mariadb;case u.t5.MsSql:return o.Mssql}}(t.sqlDialect),caseStyle:function(e){switch(e){case u.eB.Snake:return c.Snake;case u.eB.Camel:return c.Camel}}(t.caseStyle),nounForm:function(e){switch(e){case u.Bb.Singular:return i.Singular;case u.Bb.Plural:return i.Plural}}(t.nounForm)}};return(0,l.t8)(f(),a)}async function y(){let e=(0,l.U2)(f());return e?await h(e):null}var g=new p},6725:function(e,t,a){"use strict";a.r(t);var s=a(5893),n=a(5937),r=a(120),c=a(4305),i=a(6710),o=a(7803),u=a(8755),l=a(9432),m=a(989),d=a(7285),h=a(8092),p=a(1749),f=a(7233),b=a(1163),y=a(7294);t.default=(0,l.Z)(()=>({compact:!0,title:"Sequelize UI | Schema",metaDescription:"A full Node.js project with TypeScript and Sequelize. Configure for MySQL, Postgres, SQLite or SQL Server."}))(function(){let{error:e}=(0,h.VY)(),t=(0,b.useRouter)(),a=(0,f.gS)(t.query);y.useEffect(()=>{t.isReady&&!a&&(0,p.W)((0,f.dF)())},[t.isReady,a]);let l=y.useMemo(()=>a&&(0,n.A8)(a)||void 0,[a]),g=y.useCallback(()=>r.Z.getSchema(a),[a]),S=y.useCallback(t=>{t instanceof Error&&t.message===c.G&&(e('Schema with id "'.concat(a,'" not found.'),{ttl:6e3}),(0,p.W)((0,f.dF)()))},[a,e]),{data:w,refetch:k}=(0,m.Z)({getData:g,skip:!a,onError:S}),{data:q,refetch:v}=(0,m.Z)({getData:i.Z.getDefaultDbOptions}),M=async e=>{if((0,u.fc)(e))return e;let t=await r.Z.updateSchema(e);return k(),t},D=y.useCallback(async e=>{let t=await i.Z.updateDefaultDbOptions(e);return await v(),t},[v]),C=async()=>{!w||(0,u.fc)(w)||(w&&await r.Z.deleteSchema(w.id),(0,p.W)((0,f.dF)()))};return(0,s.jsx)(d.Z,{schema:w||(0,u.b3)(),meta:l,dbOptions:q||o.Yn,onChangeSchema:M,onChangeDbOptions:D,onDelete:C,onClickClose:()=>(0,p.W)((0,f.dF)())})})},989:function(e,t,a){"use strict";a.d(t,{Z:function(){return n}});var s=a(7294);function n(e){let{getData:t,variables:a,getCacheKey:n,onLoad:r,onError:c,skip:i}=e,[o,u]=s.useState(),[l,m]=s.useState(!0),[d,h]=s.useState(),p=s.useMemo(()=>new Map,[]),f=s.useCallback(async()=>{let e=a&&n&&n(a),s=e&&p.get(e);if(s){r&&r(s),u(s),m(!1),h(void 0);return}return m(!1),t(a).then(e=>{r&&r(e),u(e),m(!1),h(void 0);let t=n&&a&&n(a);return t&&p.set(t,e),e}).catch(e=>{console.error(e),c&&c(e),m(!1),h(e)})},[a,n,p,t,r,c]);return s.useEffect(()=>{i||f()},[i,f]),{data:o,loading:l,error:d,refetch:f}}}},function(e){e.O(0,[510,236,597,285,888,774,179],function(){return e(e.s=5747)}),_N_E=e.O()}]);