var gDKIMOptionsGeneralPane = {
	init: function () {
		this.update_key_storing();
		this.update_dns_resolver();
		this.update_Policy_signRules_enable();
	},
	
	update_key_storing: function () {
		var disabled = document.getElementById("key.storing").value == 0;
		document.getElementById("key.viewKeys").disabled = disabled;
	},
	
	update_dns_resolver: function () {
		var deckIndex = document.getElementById("dns.resolver.label").value - 1;
		document.getElementById("resolverDeck").selectedIndex = deckIndex;
	},

	update_Policy_signRules_enable: function () {
		var disabled = !document.getElementById("policy.signRules.enable").checked;
		document.getElementById("policy.signRules.checkDefaultRules").disabled = disabled;
		document.getElementById("policy.signRules.autoAddRule").disabled = disabled;
		document.getElementById("policy.error.wrong_sdid.asWarning").disabled = disabled;
		document.getElementById("viewSigners").disabled = disabled;
		document.getElementById("viewSignerDefaults").disabled = disabled;
	},
}
