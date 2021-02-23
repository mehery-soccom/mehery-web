

export default {

	client : null,

	init : function () {
      return window.tunnelClient.config({
        user : window.CONST.APP_USER,
        context : window.CONST.APP_CONTEXT,
      });
	},

	instance : function (argument) {
		return this.client.instance()
	},

}