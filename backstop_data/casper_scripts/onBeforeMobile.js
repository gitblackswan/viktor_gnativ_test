 module.exports = function(casper, scenario, vp) {
   	
   //if (vp.name.indexOf('mobile')>-1) {

    //}

      casper.thenOpen(scenario.url, function(){
	

		casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25');
   			console.log('CHANGED_USER_AGENT_MOBILE');

       });
 };
