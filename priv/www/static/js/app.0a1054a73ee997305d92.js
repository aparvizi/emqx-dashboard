webpackJsonp([20],{0:function(e,t,n){n("j1ja"),e.exports=n("NHnr")},"1KhH":function(e,t){},"4gBI":function(e,t){},"7TWk":function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("fZjL"),a=n.n(s),o=n("7+uW"),r=n("9JMe"),i=n("TXmL"),c=n("zL8q"),u=n.n(c),l=n("urW8"),d=n.n(l),p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m,h,f=n("VU/8")({name:"App"},p,!1,function(e){n("rBGa")},null,null).exports,g=n("/ocq"),_=n("bOdI"),b=n.n(_),v=n("mvHQ"),S=n.n(v),w=n("NYxO");function y(e){try{return JSON.parse(e)}catch(e){return null}}o.default.use(w.a);var C={loading:!1,user:y(sessionStorage.getItem("user"))||y(localStorage.getItem("user"))||{},nodeName:""},k=(m={},b()(m,"USER_LOGIN",function(e,t){var n=e.commit;if(t.isLogOut)return sessionStorage.removeItem("user"),localStorage.removeItem("user"),void n("USER_LOGIN",t);t.remember?localStorage.setItem("user",S()(t.user)):sessionStorage.setItem("user",S()(t.user)),n("USER_LOGIN",t)}),b()(m,"CURRENT_NODE",function(e,t){(0,e.commit)("CURRENT_NODE",t)}),b()(m,"LOADING",function(e){(0,e.commit)("LOADING",arguments.length>1&&void 0!==arguments[1]&&arguments[1])}),m),I=(h={},b()(h,"USER_LOGIN",function(e,t){t.isLogOut?o.default.set(e,"user",{}):o.default.set(e,"user",t.user)}),b()(h,"CURRENT_NODE",function(e,t){o.default.set(e,"nodeName",t)}),b()(h,"LOADING",function(e,t){e.loading=t}),h),A=new w.a.Store({strict:!1,state:C,actions:k,mutations:I});o.default.use(g.a);var x=[{path:"/login",component:function(){return n.e(14).then(n.bind(null,"lmfZ"))},meta:{requiresAuth:!1}},{path:"/",component:function(){return n.e(4).then(n.bind(null,"lO7g"))},children:[{path:"",component:function(){return n.e(15).then(n.bind(null,"RjBg"))}},{path:"/connections",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/sessions",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/topics",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/subscriptions",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/rules",component:function(){return Promise.all([n.e(1),n.e(9)]).then(n.bind(null,"IvP6"))}},{path:"/rules/:id",component:function(){return Promise.all([n.e(1),n.e(8)]).then(n.bind(null,"JWuK"))}},{path:"/events_rule",component:function(){return Promise.all([n.e(1),n.e(18)]).then(n.bind(null,"TX9D"))}},{path:"/resources",component:function(){return Promise.all([n.e(1),n.e(16)]).then(n.bind(null,"xPbZ"))}},{path:"/subscriptions",component:function(){return n.e(0).then(n.bind(null,"zXyA"))}},{path:"/plugins",component:function(){return n.e(3).then(n.bind(null,"GIGO"))}},{path:"/plugins/:nodeName/:pluginName",component:function(){return n.e(6).then(n.bind(null,"f35c"))}},{path:"/listeners",component:function(){return n.e(7).then(n.bind(null,"uuOo"))}},{path:"/websocket",component:function(){return n.e(2).then(n.bind(null,"EzHP"))}},{path:"/http_api",component:function(){return n.e(5).then(n.bind(null,"qB/b"))}},{path:"/applications",component:function(){return n.e(11).then(n.bind(null,"Tk0c"))}},{path:"/users",component:function(){return n.e(13).then(n.bind(null,"QSR2"))}},{path:"/settings",component:function(){return n.e(17).then(n.bind(null,"VKKr"))}},{path:"/test",component:function(){return n.e(12).then(n.bind(null,"dDHZ"))}}]},{path:"*",meta:{requiresAuth:!1},component:function(){return n.e(10).then(n.bind(null,"wkqA"))}}],E=new g.a({routes:x});E.beforeEach(function(e,t,n){var s=e.meta.requiresAuth;void 0===s||s?A.state.user.password?(document.body.scrollTop=0,document.documentElement.scrollTop=0,n()):n({path:"/login",query:{redirect:e.fullPath}}):n()});var R=E,D=(n("7TWk"),n("Dd8w")),T=n.n(D),O=n("wUZ8"),N=n.n(O),q=T()({},N.a,{select:{cluster:"All Nodes",placeholder:"Select Node"},error:{networkError:"Network Error",initializationError:"Initialization Error"},success:{createSuccess:"Create Success"},oper:{confirmDelete:"Confirm Delete ?",confirmStop:"Confirm Stop?",cancel:"Cancel",confirm:"Confirm",delete:"Delete",oper:"Oper",edit:"Edit",save:"Save",create:"Create",view:"View",editSuccess:"Edit success",startSuccess:"Start Success",stopSuccess:"Stop Success",deleteSuccess:"Delete Success",from:"From",stop:"Stop",start:"Start",notice:"Notice"},leftbar:{monitoring:"MONITORING",overview:"Overview",connections:"Connections",sessions:"Sessions",topics:"Topics",subscriptions:"Subscriptions",management:"MANAGEMENT",plugins:"Plugins",listeners:"Listeners",instances:"Instances",tools:"TOOLS",websocket:"Websocket",api:"HTTP API",applications:"Applications",admin:"ADMIN",users:"Users",settings:"Settings"},overview:{broker:"Broker",erlangOTPRelease:"Erlang/OTP Release",systemName:"System Name",version:"Version",uptime:"Uptime",systemTime:"System Time",nodes:"Nodes",name:"Name",erlangProcesses:"Erlang Processes",cpuInfo:"CPU Info",memoryInfo:"Memory Info",maxFds:"MaxFds",status:"Status",stats:"Stats",topicsCount:"Topics Count",topicsMax:"Topics Max",connectionsCount:"Connections Count",connectionsMax:"Connections Max",retainedCount:"Retained Count",retainedMax:"Retained Max",sessionsCount:"Sessions Count",sessionsMax:"Sessions Max",subscribersCount:"Subscribers Count",subscribersMax:"subscribers Max",subscriptionsCount:"Subscriptions Count",subscriptionsMax:"Subscriptions Max",subscriptionsSharedCount:"Subscriptions Shared Count",subscriptionsSharedMax:"Subscriptions Shared Max",metrics:"Metrics",packetsData:"The packets data",messagesData:"The messages data",bytesData:"The bytes data"},connections:{node:"Node",clientId:"ClientId",username:"Username",ipAddr:"IPAddr",port:"Port",cleanStart:"CleanStart",protoVer:"ProtoVer",keepalive:"Keepalive(s)",connectedAt:"ConnectedAt",back:"Back"},sessions:{clientId:"ClientId",cleanStart:"CleanStart",subscriptionsCount:"Subscriptions/Count",expiryInterval:"Expiry Interval",maxInflight:"MaxInflight",inflightLen:"Inflight Len",mqueueLen:"MqueueLen",mqueueDropped:"MqueueDropped",awaitingRelLen:"AwaitingRelLen",deliverMsg:"DeliverMsg",enqueueMsg:"EnqueueMsg",createdAt:"CreatedAt"},topics:{topic:"Topic",node:"Node"},subscriptions:{clientId:"ClientId",topic:"Topic",qoS:"QoS"},plugins:{name:"Name",version:"Version",description:"Description",status:"Status",stopped:"Stopped",running:"Running",oper:"Oper",start:"Start",stop:"Stop",config:"Config",back:"Back",advancedConfig:"Advanced Config",add:"Add",configSuccess:"Config success",configFailure:"Config failure",notice:"Are you sure you want to submit changes and apply them ?",giveUpNotice:"Are you sure you want to give up the change and exit?",noticeTitle:"Notice",cacheNotice:"You have given up this change",emptyConfigOption:"No Default Configuration"},instances:{instances:"Instances",back:"Back",info:"Basic Info",name:"instance name",descr:"description",service:"service",configInfo:"Config Options",initConfig:"Init config or ",remarkConfig:"description is required",createInstance:"Create Instance",selectServiceType:"Instance Type",all:"All",running:"Running",stopped:"Stopped",auth:"Auth",backend:"Backend",hook:"hook",bridge:"Bridge",other:"Other",select:"Select",selected:"Selected",nextStep:"Next",authDesc:"Provide login authentication and publish subscribe ACL service.",backendDesc:"Provide message persistence to database services.",bridgeDesc:"Bridging a message flow into a message middleware data source.",hookDesc:"A service that uses the trigger callback mechanism to respond to the operation.",otherDesc:"The system runs information and other services."},listeners:{protocol:"Protocol",listenOn:"Listen On",maxConnections:"Max Connections",currentConnections:"Current Connections"},websocket:{connect:"Connect",host:"Host",port:"Port",clientID:"Client ID",username:"Username",password:"Password",keepAlive:"Keep Alive",cleanSession:"Clean Session",disconnect:"Disconnect",currentState:"Current State",subscribe:"Subscribe",topic:"Topic",qoS:"QoS",date:"Date",oper:"Oper",messages:"Messages",retained:"Retained",send:"send",messagesAlreadySent:"Messages already sent",messagesReceived:"Messages received",time:"Time",connectError:"Message send error",connectFailure:"Connect failed on",connectLeave:"The client does not connect to the broker",subscribeSuccess:"Subscribe success",subscribeFailure:"Subscribe failure",unsubscribeFailure:"Unsubscribe Failure",messageSendOut:"Message send out",connected:"CONNECTED",connecting:"CONNECTING",disconnected:"DISCONNECTED",notSupport:"Your browser doesn't support WebSocket"},httpApi:{introduction:"Introduction",desc:"Apart from this help page, all URIs will serve only resources of type application/json, and will require HTTP basic authentication. The default user is admin / public.\n<br/>The emqx_dashboard plugin provides a web management console. The Dashboard helps monitor broker's running status, statistics and metrics of MQTT packets.",reference:"Reference",method:"Method",path:"Path",description:"Description",back:"Back",linkAddress:"Request address",data:"Response data"},app:{appId:"AppID",secret:"AppSecret",newApp:"New App",viewApp:"View App",editApp:"Edit App",create:"Create",errors:"Option Required",name:"AppName",desc:"Remark",expired:"Expired date",status:"Status",enable:"Allowed",disable:"Denied",enableText:"Access allowed",disableText:"Access barred",expiredText:"Never expired",guide:"Application for authentication of EMQ X Management API (REST API)",docs:"Documentation"},users:{newUser:"New User",editUser:"Edit User",username:"Username",remark:"Remark",password:"Password",confirmPassword:"Confirm Password",oldPassword:"Old Password",newPassword:"New Password",confirmNewPassword:"Confirm New Password",changePassword:"Change Password",dontChangePassword:"Don't Change Password",confirm:"Confirm",confirmDelete:"Confirm Delete ?",usernameRequired:"Username required",remarkRequired:"Remark required",usernameIllegal:"Username length: 3~32",passwordRequired:"Password required",newPasswordRequired:"new password required",passwordInconsistent:"Password is inconsistent",authenticate:"You have changed your password. Please re authenticate",createUser:"Create user success",passwordIllegal:"Password length: 3~255"},alert:{required:"required",success:" success",failure:" failure",connect:"Connect"},login:{title:"LOG IN",username:"Username",password:"Password",remember:"Remember",loginButton:"Log In",error:"Username Or Password Error",usernameRequired:"Username Required",passwordRequired:"Password Required"},settings:{themes:"Themes",language:"Language",apply:"Apply",success:"Apply success"},config:{importConfig:"Import",selectConfigFile:"Select a config file",configFileMustBeJson:"Config file must be JSON",createBy:"Create by",create:"",createUser:"owner",nodeName:"node name",host:"host",descr:"description",createAt:"createAt",more:"more",reSelect:"Select another",not_a_valid_config_file:"Not a valid config file",payload_error:"Config option is empty",import_file_error:"Import failure",exportConfig:"Export",ex:"Export",atLeastThree:"At least three words",importSuccess:"Import success",notice:"Use backup configuration files to configure initialization modification. <br/> Notice: configuration files may contain important data, such as database address and authentication information. Please keep good configuration files and use backup function reasonably."},httpCode:{0:"Success",101:"Bad RPC",102:"Unknown Error",103:"Username or password error",104:"Empty username or password",105:"User does not exist",106:"Admin can not be deleted",107:"Missing request parameter",108:"Request parameter type error",109:"Request parameter is not a json",110:"Plugin has been loaded",111:"Plugin has been unloaded",112:"Client not online",113:"User already exist",114:"Old password error",115:"Bad topic"}}),M=n("Vi3T"),P=n.n(M),L=T()({},P.a,{select:{cluster:"全部节点",placeholder:"请选择"},error:{networkError:"网络错误",initializationError:"初始化错误"},success:{createSuccess:"Create Success"},oper:{confirmDelete:"确认删除该项?",confirmStop:"确认停止?",confirm:"确认",cancel:"取消",delete:"删除",oper:"操作",edit:"编辑",save:"保存",create:"创建",view:"查看",editSuccess:"编辑成功",startSuccess:"启动成功",stopSuccess:"停止成功",deleteSuccess:"删除成功",from:"从",stop:"停止",start:"启动",notice:"注意"},leftbar:{monitoring:"监控",overview:"控制台",connections:"连接",sessions:"会话",topics:"主题",subscriptions:"订阅",management:"管理",plugins:"插件",listeners:"监听器",instances:"服务",tools:"工具",websocket:"Websocket",api:"HTTP接口",applications:"应用",admin:"系统",users:"用户",settings:"设置"},overview:{broker:"系统信息",systemName:"名称",version:"版本",uptime:"运行时间",systemTime:"系统时间",nodes:"节点信息",name:"节点名称",erlangOTPRelease:"Erlang/OTP 版本",erlangProcesses:"Erlang进程",cpuInfo:"CPU",memoryInfo:"内存",maxFds:"最大文件句柄数",status:"状态",stats:"运行统计",topicsCount:"主题数",topicsMax:"主题峰值",connectionsCount:"连接数",connectionsMax:"连接峰值",retainedCount:"保留消息数",retainedMax:"最大保留消息数",sessionsCount:"会话数",sessionsMax:"会话峰值",subscribersCount:"订阅数",subscribersMax:"订阅峰值",subscriptionsCount:"订阅数",subscriptionsMax:"订阅峰值",subscriptionsSharedCount:"共享订阅数",subscriptionsSharedMax:"共享订阅峰值",metrics:"度量指标",packetsData:"MQTT报文",messagesData:"消息(数)",bytesData:"流量收发统计(字节)"},connections:{node:"节点",clientId:"客户端ID",username:"用户名",ipAddr:"IP地址",port:"端口",cleanStart:"清除会话",protoVer:"协议版本",keepalive:"心跳(秒)",connectedAt:"连接时间",back:"返回"},sessions:{clientId:"客户端ID",cleanStart:"清除会话",subscriptionsCount:"订阅数",expiryInterval:"ExpiryInterval",maxInflight:"最大拥塞",inflightLen:"当前拥塞",mqueueLen:"当前缓存消息",mqueueDropped:"丢弃消息",awaitingRelLen:"等待释放",deliverMsg:"投递消息",enqueueMsg:"入队消息",createdAt:"创建时间"},topics:{topic:"主题",node:"节点"},subscriptions:{clientId:"客户端ID",topic:"主题",qoS:"服务质量"},plugins:{name:"插件名称",version:"版本",description:"描述",status:"状态",stopped:"已停止",running:"运行中",start:"启动",stop:"停止",config:"配置",back:"返回",advancedConfig:"高级配置",add:"新增",configSuccess:"配置成功",configFailure:"配置失败",notice:"你确定提交这些配置吗？重启插件后生效",giveUpNotice:"你确定放弃应用已更改的配置吗？",noticeTitle:"注意",cacheNotice:"已放弃操作",emptyConfigOption:"默认配置项为空"},instances:{instances:"服务",back:"返回",info:"基本信息",name:"实例名称",descr:"备注信息",service:"所属服务",configInfo:"配置信息",initConfig:"初始化配置或",remarkConfig:"请输入备注信息",createInstance:"新建服务",selectServiceType:"选择实例类型",all:"全部",running:"运行中",stopped:"已停止",auth:"认证",backend:"持久化",hook:"回调钩子",bridge:"数据桥接",other:"其他",select:"选择",selected:"已选择",nextStep:"下一步",authDesc:"提供登录认证与发布订阅 ACL 服务。",backendDesc:"提供消息持久化到数据库服务。",bridgeDesc:"提供将消息流桥接为消息中间件数据源服务。",hookDesc:"使用触发回调机制响应操作的服务。",otherDesc:"系统运行信息等其他服务。"},listeners:{protocol:"协议",listenOn:"监听地址",maxConnections:"最大连接数",currentConnections:"当前连接数"},websocket:{connect:"连接",host:"主机地址",port:"端口",clientID:"客户端ID",username:"用户名",password:"密码",keepAlive:"心跳(秒)",cleanSession:"清除会话",disconnect:"断开连接",currentState:"当前状态",subscribe:"订阅",topic:"主题",qoS:"服务质量",date:"订阅时间",oper:"操作",messages:"消息",retained:"保留",send:"发送",messagesAlreadySent:"发布消息列表",messagesReceived:"订阅消息列表",time:"时间",connectError:"消息发送错误",connectFailure:"连接失败",connectLeave:"尚未连接到服务器",subscribeSuccess:"订阅成功",subscribeFailure:"订阅失败",messageSendOut:"消息已发出",connected:"已连接",connecting:"正在连接",disconnected:"未连接",notSupport:"你的浏览器暂不支持WebSocket"},httpApi:{introduction:"说明",desc:"除了帮助页面，所有URI返回application/json格式的的资源，每个请求都需要HTTP基本认证。默认用户是admin / public。<br/>emqx_dashboard插件提供了一个Web管理控制台, 用于监控服务器的运行状态，数据统计和MQTT包计数监控。",reference:"参考",method:"请求方法",path:"路径",description:"描述",back:"返回",linkAddress:"请求地址",data:"响应数据"},app:{appId:"AppID",secret:"App密钥",newApp:"新建APP",viewApp:"查看App",editApp:" 编辑App",errors:"该项为必填项",name:"App名称",desc:"备注",expired:"到期日期",status:"状态",enable:"允许访问",disable:"拒绝访问",enableText:"允许访问",disableText:"拒绝访问",expiredText:"永不过期",guide:"应用用于 EMQ X 管理监控 API (REST API) 连接认证，详见",docs:"文档"},users:{newUser:"新建用户",editUser:"编辑用户",username:"用户名",remark:"备注",password:"密码",confirmPassword:"确认密码",oldPassword:"旧密码",newPassword:"新密码",confirmNewPassword:"确认新密码",changePassword:"修改密码",dontChangePassword:"不修改密码",usernameRequired:"请填写用户名",remarkRequired:"请填写备注",usernameIllegal:"用户名长度: 3~32",passwordRequired:"请填写密码",newPasswordRequired:"请填写新密码",passwordInconsistent:"密码不一致",authenticate:"你已成功修改已登录用户密码，请重新登录",createUser:"新建用户成功",passwordIllegal:"密码长度: 3~255"},alert:{required:"字段是必填项",success:"成功",failure:"失败",connect:"连接"},login:{title:"登 录",username:"用户名",password:"密码",remember:"记住",loginButton:"登 录",error:"用户名或密码错误",usernameRequired:"请填写用户名",passwordRequired:"请填写密码"},settings:{themes:"样式主题",language:"系统语言",apply:"应 用",success:"修改成功"},config:{importConfig:"导入配置",selectConfigFile:"选择配置文件",configFileMustBeJson:"请确保备份文件为正常 JSON 格式",createBy:"由",create:"创建",createUser:"创建用户",nodeName:"节点名称",host:"主机地址",descr:"备注信息",createAt:"创建时间",more:"更多信息",reSelect:"重新选择",not_a_valid_config_file:"不是合法的配置文件",payload_error:"无效的内容",import_file_error:"导入文件出错",exportConfig:"导出配置",ex:"导出",atLeastThree:"至少3个字符",importSuccess:"导入成功",notice:"使用备份的配置文件进行配置初始化/修改。<br/>注意: 配置文件可能包含有重要数据如数据库地址与认证信息，请妥善保管配置文件并合理使用备份功能。"},httpCode:{0:"成功",101:"RPC 操作失败",102:"未知错误",103:"用户名或密码错误",104:"空的用户名密码",105:"用户不存在",106:"不能删除管理员",107:"请求参数错误",108:"请求参数类型错误",109:"请求体不是 JSON",110:"插件当前已经启动",111:"插件当前已经停止",112:"客户端不在线",113:"用户已存在",114:"旧密码错误",115:"主题错误"}}),U={en:T()({},q,{rule:{speed_unit:"times/s",match_unit:"times",match_rate:"Hit Rate",success:"success",failed:"failed",params:"Params",matched_line:"(matched/not matched)",speed_line:"(current/max/last5m)",current:"current",max:"max",last5m:"last5m",metrics:"Metrics",speed:"Speed(seconds)",speed_max:"Speed max",speed_last5m:"The last 5 minutes speed",rule_matched:"Rule matched number",rule_nomatch:"Number of not atched",speed_current:"Matching Speed",speed_max_1:"Maximum Speed",speed_last5m_1:"Last5Mins Speed",rule_matched_1:"Matched",rule_nomatch_1:"Not Matched",enabled:"In Service",disabled:"Out of Service",running_statue:"Running status",reconnect:"Reconnect",connect:"Connect",stopped:"Stopped",running:"Running",no_test_output:"",test_output:"Result",test:"Test",input_test_data:"Test SQL",input_test_data_tips:"Input mock data and test SQL",is_required:"is required",conf_test:"Test Connection",conf_test_success:"Connection Success",conf_test_fail:"Connection Failed",new_resource:"New Resource",action_type:"Action Type",event_info:"Available Field",suggest_sql:"SQL Example",events:{message_acked:"message.acked",message_dropped:"message.dropped",message_publish:"message.publish",message_deliver:"message.deliver",client_unsubscribe:"client.unsubscribe",client_subscribe:"client.subscribe",client_disconnected:"client.disconnected",client_connected:"client.connected"},trigger_events:"Trigger",id:"ID",exists:"exists key",data_key:"KEY",data_value:"VALUE",events_rule:"Events Rule",create_rule:"Events Rule",events_type:"Events Type",rely_resource:"Resource",actions_tips:"Processing messages for hit rules",conditional_tips:"Defining rule conditions and data processing ways through SQL",conditional:"Rule condition",rule_engine:"Rule Engine",message_rule:"Rule",create:"Create",rule_name:"Rule Name",actions:"Actions",action:"Action",resource:"Resource",oper:"Operation",view:"View",confirm:"Confirm",delete:"Delete",rule_details:"Details",rule_desc:"Description",confirm_stop_delete:"Confirm to stop and remove ？",delete_success:"Delete success",action_exists:"Action already exists",cancel:"Cancel",resource_mgmt:"Resources",name:"Name",resource_type:"Resource Type",description:"Description",create_success:"Create success",type:"Type",value:"Value",edit:"Edit",add:"Add",basic_info:"Basic Info",rule_name_required:"rule name required",rule_sql:"SQL",rule_descr_placeholder:"e.g.message render to Webhook",rule_sql_tips_title:"Write SQL statements for conditional filtering and data processing:",sql_tips_html:'<p>The EMQ X rules engine is triggered by an event, and the event type can be specified by the FROM clause of SQL.</p>\n\n  <p class="item">\n    When the event is triggered, it carries the context information of the event, including the message content and\n    event parameters. Data can be filtered and processed from context information using the SELECT command with the\n    WHERE clause. The fields available in the context information of each event can be acquired from EMQ X document.\n  </p>\n\n  <p class="item">\n    Events filtered through the SQL statement will trigger corresponding response actions, such as persisting to the\n    database, republishing processed messages, forwarding messages to message queues, and so on. A single rule can\n    configure multiple response actions.\n  </p>\n\n  <p>1. Select the message published to the \'t/#\' topic and filter out all fields:</p>\n\n  <div class="code">\n    <code>SELECT * FROM "message.publish" WHERE topic =~ \'t/#\'</code>\n  </div>\n\n  <p>2. Select the message published to the \'t/a\' topic and filter the "x" field from the json-formatted message\n    content:</p>\n\n  <div class="code">\n    <code>SELECT payload.x as x FROM "message.publish" WHERE topic =~ \'t/a\'</code>\n  </div>\n\n  <p>3. Select the login message with the username \'emqx\' and filter out the ClientID field.</p>\n  <div class="code">\n    <code>SELECT client_id FROM "client.connected" WHERE username = \'emqx\'</code>\n  </div>\n\n  <p>See the EMQ X documentation for a detailed tutorial on the rules engine and SQL statements.</p>',condition_screening:"Condition Screening",topic_condition:"Topic",message_publish_topic:"Message topic",set_action:"Action Handler",sql_required:"SQL required",actions_required:"actions required",rule_action_tips_title:"Define action handlers",action_tips_html:"\n<p> 1. Re-publish message to message server</p>\n\n<span> Re-publishing messages to broker requires specifying the target theme</span>\n\n<p> 2. Forwarding messages to Webhook</p>\n\n<span> Forwarding messages to HTTP Webhook</span>",resource_title:"Resource",resource_name:"Name",resource_details:"Details",config_info:"Configuration"}}),zh:T()({},L,{rule:{speed_unit:"次/秒",match_unit:"次",match_rate:"命中率",success:"成功",failed:"失败",params:"参数",matched_line:"(命中/未命中)",speed_line:"(当前/最大/最近5分钟)",current:"当前",max:"最大",last5m:"最近5分钟",metrics:"度量指标",speed:"速度(秒)",speed_max:"最大速度",speed_last5m:"最近5分钟速度",rule_matched:"匹配条数",rule_nomatch:"未匹配条数",speed_current:"命中速度",speed_max_1:"最大速度",speed_last5m_1:"最近5分钟速度",rule_matched_1:"已命中",rule_nomatch_1:"未命中",enabled:"可用",disabled:"不可用",running_statue:"运行状态",reconnect:"重新连接",connect:"连接",stopped:"已停止",running:"运行中",no_test_output:"暂无结果",test_output:"测试输出",test:"测试",input_test_data:"SQL 测试",input_test_data_tips:"自定义模拟数据进行 SQL 命令测试，仅用于测试功能",is_required:"必填",conf_test:"测试连接",conf_test_success:"连接可用",conf_test_fail:"连接不可用",new_resource:"新建资源",action_type:"动作类型",event_info:"可用字段",suggest_sql:"规则 SQL 示例",events:{message_acked:"消息确认",message_dropped:"消息丢弃",message_publish:"消息发布",message_deliver:"消息投递",client_unsubscribe:"取消订阅",client_subscribe:"订阅",client_disconnected:"连接断开",client_connected:"连接完成"},trigger_events:"触发事件",id:"ID",exists:"键重复",data_key:"键",data_value:"值",rely_resource:"关联资源",actions_tips:"处理命中规则的消息",conditional_tips:"使用 SQL 定义规则条件与数据处理方式",conditional:"条件",rule_engine:"规则引擎",message_rule:"规则",create:"新建",rule_name:"规则名称",actions:"响应动作",action:"动作",resource:"关联资源",oper:"操作",view:"查看",confirm:"确认",delete:"删除",rule_details:"规则详情",rule_desc:"规则描述",confirm_stop_delete:"确认停用并删除？",delete_success:"删除成功",action_exists:"动作已存在",cancel:"取消",resource_mgmt:"资源管理",name:"名称",resource_type:"资源类型",description:"备注",create_success:"创建成功",type:"类型",value:"值",edit:"编辑",add:"添加",basic_info:"基本信息",rule_name_required:"请输入规则名称",rule_sql:"规则 SQL",rule_descr_placeholder:"e.g.消息转发到 Webhook",rule_sql_tips_title:"编写 SQL 进行条件过滤与数据处理：",sql_tips_html:'<p>EMQ X 规则引擎由事件触发，可通过 SQL 的 FROM 子句指定事件类型。</p>\n  \n  <p class="item">事件触发时会携带事件的上下文信息，包含了消息内容与事件参数等。可使用 SELECT 子句 和 WHERE 子句，\n    从上下文信息中过滤和处理数据。每个事件上下文信息中可用的字段参见 EMQ X 文档。\n  </p>\n\n  <p class="item">经过 SQL 语句筛选通过的事件，将会触发对应的响应动作，比如持久化到数据库、重新发布处理后的消息、转发消息到消息队列等。一条规则可以配置多个响应动作。</p>\n\n  <p>1. 选择发布到 \'t/#\' 主题的消息，并筛选出全部字段：</p>\n\n  <div class="code">\n    <code>SELECT * FROM "message.publish" WHERE topic =~ \'t/#\'</code>\n  </div>\n\n  <p>2. 选择发布到 \'t/a\' 主题的消息，并从 JSON 格式的消息内容中筛选出 "x" 字段：</p>\n\n  <div class="code">\n    <code>SELECT payload.x as x FROM "message.publish" WHERE topic =~ \'t/a\'</code>\n  </div>\n\n  <p>3. 选择用户名为 \'emqx\' 的登录消息，并筛选出 ClientID 字段。</p>\n  <div class="code">\n    <code>SELECT client_id FROM "client.connected" WHERE username = \'emqx\'</code>\n  </div>\n\n  <p>规则引擎和 SQL 语句的详细教程参见 EMQ X 文档。</p>',condition_screening:"条件筛选",topic_condition:"主题条件",message_publish_topic:"消息发布主题",set_action:"响应动作",sql_required:"请输入 SQL",actions_required:"动作不能为空",rule_action_tips_title:"定义动作",action_tips_html:"\n<p>1. 重新发布消息至消息服务器</p>\n<span>将消息重新发布到 broker 中，需要指定目标主题</span>\n<p>2. 将消息转发至 Webhook</p>\n<span>将消息转发至 HTTP Webhook</span>",resource_title:"资源",resource_name:"资源名称",resource_details:"资源详情",config_info:"配置信息",events_rule:"事件规则",create_rule:"事件规则",events_type:"事件类型"}})},F=n("Xxa5"),Q=n.n(F),H=n("exGp"),B=n.n(H),V={name:"emq-select",components:{},inheritAttrs:!1,model:{prop:"value",event:"input"},props:{value:{type:[Number,String,Array],default:void 0},field:{type:Object,default:function(){return{}}},sync:{default:0},afterLoad:{type:Function,default:null}},data:function(){return{optionItem:[]}},computed:{val:{set:function(e){this.$emit("input",e)},get:function(){return this.value}}},watch:{sync:function(e){e&&this.initData()},"field.params":function(){this.initData()}},created:function(){this.initData()},methods:{initData:function(){var e=this;return B()(Q.a.mark(function t(){var n,s,a,o,r,i,c,u;return Q.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.optionItem=[],n=JSON.parse(localStorage.getItem("select_map"))||{},s=e.field,a=s.options,o=s.key,r=s.url,i=s.params,c=void 0===i?{}:i,!a){t.next=7;break}e.optionItem=a,t.next=16;break;case 7:if(!o||!n[o]){t.next=11;break}e.optionItem=n[o],t.next=16;break;case 11:if(!r){t.next=16;break}return t.next=14,e.$axios.get(r,{params:c});case 14:u=t.sent,e.optionItem=u?u.data:[];case 16:if(!e.afterLoad){t.next=20;break}return t.next=19,e.afterLoad(e.optionItem);case 19:e.optionItem=t.sent;case 20:case"end":return t.stop()}},t,e)}))()}}},W={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-select",e._b({staticClass:"emq-select",attrs:{value:e.value},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}},"el-select",e.$attrs,!1),e._l(e.optionItem,function(e,t){return n("el-option",{key:t,attrs:{value:e.value,label:e.label}})}),1)},staticRenderFns:[]};var $=n("VU/8")(V,W,!1,function(e){n("rC3R")},null,null).exports,G={name:"json-input",components:{},inheritAttrs:!1,props:{value:[Array,Object,String]},model:{prop:"value",event:"input"},data:function(){return{objectPlaceholder:"JSON, e.g: \n"+S()({Authorization:"Basic YWRtaW46cHVibGlj"},null,2),sourceValue:""}},methods:{},created:function(){try{this.sourceValue=JSON.parse(this.value,null,2)}catch(e){this.sourceValue=""}},watch:{value:function(e){console.log(e)},sourceValue:function(e){var t=e;if(e){try{t=JSON.parse(e)}catch(n){t=e}this.$emit("input",t)}else this.$emit("input",void 0)}},computed:{}},j={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("el-input",{staticClass:"json-input",attrs:{type:"textarea",placeholder:e.$attrs.placeholder||e.objectPlaceholder,rows:5},model:{value:e.sourceValue,callback:function(t){e.sourceValue=t},expression:"sourceValue"}})},staticRenderFns:[]};var z=n("VU/8")(G,j,!1,function(e){n("1KhH")},null,null).exports,X=n("d7EF"),J=n.n(X),K=n("W3Iv"),Y=n.n(K),Z={name:"data-table",components:{},props:{value:{required:!0},isRaw:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},option:{type:Object,default:function(){return{}}},allowedArray:{type:Boolean,default:!1}},model:{prop:"value",event:"input"},watch:{},data:function(){return{tableData:[{__new:!0,key:"",value:""}]}},methods:{initValue:function(e){var t=this;e?(this.tableData=[],Y()(e).forEach(function(e){var n=J()(e,2),s=n[0],a=n[1];s&&(a&&Array.isArray(a)?a.forEach(function(e){t.tableData.push({key:s,value:e})}):t.tableData.push({key:s,value:a}))}),this.disabled||this.tableData.push({key:"",value:"",__new:!0})):this.tableData=[{key:"",value:"",__new:!0}]},handleInput:function(e){!(arguments.length>1&&void 0!==arguments[1])||arguments[1];e.__new&&(this.$delete(e,"__new"),(e.key||e.value)&&this.tableData.push({key:"",value:"",__new:!0})),this.setObject()},setObject:function(){var e=this,t={},n={};this.tableData.forEach(function(s){e.$set(s,"__has_error",!1);var a=s.key,o=s.value,r=void 0===o?"":o,i=s.__new;if(a&&!i)if(!n[a]||e.allowedArray)n[a]?Array.isArray(t[a])?t[a].push(r):t[a]=[t[a],r]:t[a]=r,t[a]&&!e.allowedArray&&Array.isArray(t.key)&&(t[a]=t[a][0]),n[a]=!0;else{e.$set(s,"__has_error",!0);var c=e.tableData.find(function(e){return a===e.key});c&&e.$set(c,"__has_error",!0)}}),this.$emit("input",t)},handleOper:function(e,t,n){["edit"].includes(e)?this.$set(this.tableData[t],"__"+e,n):"remove"===e&&(this.tableData=this.tableData.filter(function(e,n){return n!==t})),this.setObject()}},created:function(){this.initValue(this.value)},computed:{_option:function(){return T()({keyLabel:this.$t("rule.data_key"),valueLabel:this.$t("rule.data_value")},this.option)}}},ee={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-table",{staticClass:"data-table",class:{disable:e.disabled,"el-table--public":e.isRaw},staticStyle:{"margin-top":"0"},attrs:{border:"",data:e.tableData}},[n("el-table-column",{attrs:{prop:"key",label:e._option.keyLabel},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row;return[n("span",{staticClass:"data-value"},[e._v(e._s(s.key))]),e._v(" "),n("el-input",{staticClass:"data-input",class:{"is-error":s.__has_error&&!s.__new},attrs:{size:"mini",placeholder:s.__new?"Key":""},on:{input:function(t){return e.handleInput(s)}},model:{value:s.key,callback:function(t){e.$set(s,"key",t)},expression:"row.key"}},[s.__has_error?n("template",{slot:"append"},[e._v("\n          "+e._s(e.$t("rule.exists"))+"\n        ")]):e._e()],2)]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"value","class-name":"value-column",label:e._option.valueLabel},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.row,a=t.$index;return[n("span",{staticClass:"data-value"},[e._v(e._s(s.value))]),e._v(" "),n("el-input",{staticClass:"data-input",attrs:{size:"mini",placeholder:s.__new?"Value":""},on:{input:function(t){return e.handleInput(s,!1)}},model:{value:s.value,callback:function(t){e.$set(s,"value",t)},expression:"row.value"}}),e._v(" "),e.disabled?e._e():n("i",{class:{"el-icon-close":!s.__new,"oper-icon":!0},on:{click:function(t){return e.handleOper("remove",a,!0)}}},[e._v("\n        "+e._s(s.__new?" ":"")+"\n      ")])]}}])})],1)},staticRenderFns:[]};var te=n("VU/8")(Z,ee,!1,function(e){n("4gBI")},null,null).exports,ne=n("pFYg"),se=n.n(ne),ae=n("//Fk"),oe=n.n(ae),re=n("woOf"),ie=n.n(re),ce=n("mtWM"),ue=n.n(ce),le=n("Y81h"),de=n.n(le),pe=(n("UVIz"),(U[["zh","en"].includes(localStorage.language)?localStorage.language:window.EMQX_DASHBOARD_CONFIG.lang||"en"]||U.en).httpCode);de.a.configure({showSpinner:!1}),ie()(ue.a.defaults,{headers:{"Content-Type":"application/json","Cache-Control":"no-cache"},baseURL:"/api/v3",timeout:1e4});var me=0;function he(e){console.error(e),de.a.done(),clearTimeout(me),A.dispatch("LOADING",!1);var t=e.response&&e.response.status;return e.response&&e.response.data.message&&(e.message=e.response.data.message),401===t?(A.dispatch("USER_LOGIN",{isLogOut:!0}),R.push({path:"/login",query:{to:R.fullPath}})):404===t?e.message="URL Not Found":c.Message.error(e.message),oe.a.reject(e.message)}ue.a.interceptors.request.use(function(e){return A.state.user.username?e.auth={username:A.state.user.username,password:A.state.user.password}:R.push({path:"/login",query:{to:R.fullPath}}),de.a.start(),me=setTimeout(function(){A.dispatch("LOADING",!0)},100),e},function(e){console.warn("Request Error: ",e),A.dispatch("LOADING",!1)}),ue.a.interceptors.response.use(function(e){var t={},n="";if("object"===se()(e.data)){var s=e.status,a=e.data,o=a.code,r=a.meta,i=a.message,c=e.data.data;0!==o&&(n=pe[o]||i),r&&(c={items:c,meta:r}),t={data:c,status:s}}if(de.a.done(),clearTimeout(me),me=0,A.dispatch("LOADING",!1),n){var u=new Error(n);throw he(u),u}return t},he);var fe=ue.a,ge=n("VOAv"),_e=n("CqLJ"),be=n.n(_e),ve={dateFormat:function(e){return e?10===e.toString().length?be()(1e3*e,"yyyy-mm-dd HH:MM:ss"):be()(e,"yyyy-mm-dd HH:MM:ss"):""}};o.default.config.productionTip=!1,o.default.use(i.a),o.default.use(u.a),o.default.prototype.$ELEMENT={size:"medium"},o.default.use(function(e){e.prototype.$httpGet=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t._=Date.now(),fe.get(e,{params:t})},e.component($.name,$),e.component(z.name,z),e.component(te.name,te),e.prototype.$httpPost=fe.post,e.prototype.$httpPut=fe.put,e.prototype.$httpDelete=fe.delete,e.prototype.$axios=fe,e.prototype.$env=window.EMQX_DASHBOARD_CONFIG||{}}),a()(ve).forEach(function(e){o.default.filter(e,ve[e])});var Se=new i.a({locale:window.localStorage.language||window.EMQX_DASHBOARD_CONFIG.lang||"en",messages:U});d.a.i18n(function(e,t){return Se.t(e,t)}),Object(ge.a)(),Object(r.sync)(A,R),new o.default({el:"#app",router:R,store:A,i18n:Se,components:{App:f},template:"<App/>"})},UVIz:function(e,t){},VOAv:function(e,t,n){"use strict";function s(e){e=["dark-themes","light-themes"].includes(e)?e:"dark-themes",document.querySelector("html").setAttribute("class",e)}function a(){s(localStorage.getItem("themes")||"dark-themes")}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},rBGa:function(e,t){},rC3R:function(e,t){}},[0]);