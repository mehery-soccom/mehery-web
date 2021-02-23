//store/modules/auth.js


import axios from "axios";


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16)
        .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4()
      + s4() + s4();
}

const state = {
  user: null,
  posts: null,
  contacts : null,
  chats : null,
  chatsCounter : 1,
  meta : null,
  mediaOptions : null
};

const getters = {
    //Contacts
  StateChats: (state) => state.chats,
  StateMeta: (state) => state.meta,
  StateMediaOptions: (state) => state.mediaOptions
};

const actions = {
  async Register({dispatch}, form) {
    await axios.post('register', form)
    let UserForm = new FormData()
    UserForm.append('username', form.username)
    UserForm.append('password', form.password)
    await dispatch('LogIn', UserForm)
  },

  async LogIn({commit}, user) {
    await axios.post("/auth/login/submit", user)
    	.then(response => {
    		if(response.data.statusKey !== "SUCCESS"){
    			throw response.data;
    		}
    	});
    await commit("setUser", user.get("username"));
  },

  async CreatePost({ dispatch }, post) {
    await axios.post("post", post);
    return await dispatch("GetPosts");
  },

  async GetPosts({ commit }) {
    let response = await axios.get("posts");
    commit("setPosts", response.data);
  },

  async LogOut({ commit }) {
  	axios.get("/auth/logout");
    let user = null;
    commit("logout", user);
  },

  async GetChats({ commit }) {
    let response = await axios.get("/api/sessions/assigned.json");
    commit("setChats", response.data.results);
    commit("setMeta", response.data.meta);
  },

  async AddChat({ commit },chat) {
    for(var c in state.chats){
      if(state.chats[c].sessionId == chat.sessionId){
        state.chats[c].active = !!chat.active;
        if(!chat.active)
          state.chats.splice(c,1);
         commit("setChats", state.chats);
        return;
      }
    }
    state.chats.push(chat);
    commit("setChats", state.chats);
  },

  async SendChat({ commit,dispatch }, msg) {
    msg.messageIdExt = msg.messageIdExt || guid();
    msg.version=msg.version || 0;
    dispatch("ReadChat",msg);
    let response = await axios.post("/api/sessions/message/send",{
                        message : msg.text,
                        template : msg.template,
                        sessionId : msg.sessionId,
                        template : msg.template,
                        messageIdExt : msg.messageIdExt
                    });
    msg.messageId = response.data.results[0].messageId;
    msg.version = 1;
    dispatch("ReadChat",msg);
    return response.data;
  },

  async ReadChat({ commit },m) {
    m.messageIdExt = m.messageIdExt || guid();
    for(var c in state.chats){
      if(m.sessionId == state.chats[c].sessionId){
        var index  = -1
        for(var j in state.chats[c].messages){
          var msg = state.chats[c].messages[j];
          if((msg.messageId === m.messageId) || (msg === m) || (msg.messageIdExt === m.messageIdExt)){
            index = j;
            if(m.version < msg.version){
              m=msg;
            }            
            break;
          }
        }
        m.name = m.name || state.chats[c].name;
        if(index < 0) {
          state.chats[c].messages.push(m);
        } else {
          state.chats[c].messages.splice(index, 1, m);
        }
        break;
      }
    }

    commit("setChats", state.chats);
  },

  async OnlineStatus({ commit }) {
    let StatusForm = new FormData();
    var currentStatus = state.meta.isOnline;
    StatusForm.append('status', !currentStatus)
    let response = await axios.post("/auth/online/status",StatusForm);
    state.meta.isOnline = response.data.meta;
    commit("setMeta", state.meta);
  },

  async LoadMediaOptions({ commit }) {
    let response = await axios.get("/gallery/map/media_reply");
    commit("setMediaOptions", response.data);
  },

};

const mutations = {
  //Contacts
  setChats(state, chats) {
    for(var c in chats){
      chats[c].lastmsg = chats[c].messages[chats[c].messages.length-1] || {};
    }
    state.chats = chats;
  },
  setMeta(state, meta) {
    state.meta = meta;
  },
  setMediaOptions(state, mediaOptions) {
    state.mediaOptions = mediaOptions;
  },
  setUser(state, username) {
    state.user = username;
  },
  setPosts(state, posts) {
    state.posts = posts;
  },
  logout(state, user) {
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
