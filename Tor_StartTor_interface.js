<div class="container-fluid">
	<%= _.template($('#variable_constructor').html())({id:"Port", description:tr("Variable to put port"), default_variable: "TOR_PORT", help: {description: tr("Tor is socks5 proxy. It runs on random port and put that port into your variable. You need to set your proxy to socks5://localhost:[[TOR_PORT]]")}}) %>
  	<%= _.template($('#input_constructor').html())({id:"Allow", description:tr("Allow only these countries"), default_selector: "string", help: {description: tr("Tor will make circuits only with these countries. If the value is empty, all countries are allowed. You need to split countries with space. Example: RU GB US")}}) %>
	<%= _.template($('#input_constructor').html())({id:"Disallow", description:tr("Disallow these countries"), default_selector: "string", help: {description: tr("Tor will ignore circuits with there countries. If the value is empty, all countries are allowed. You need to split countries with space. Example: RU GB US")}}) %>
	<%= _.template($('#input_constructor').html())({id:"Bridge", description:tr("Use bridge to connect (obfs4 not supported)"), default_selector: "string", help: {description: tr("Tor will use bridges to connect to network. It can help to connect over DPI. obfs4 not supported. Only one bridge per input is supported (don't try to input multiple at once!). You can get bridge at https://bridges.torproject.org/bridges?transport=0. Example: 1.2.3.4:9001 HASH")}}) %>
</div>
	<span data-preserve="true" data-preserve-type="check" data-preserve-id="Check">
		<div><input type="checkbox" id="Check"/> <label for="Check" class="tr">Change IP every ~10 seconds</label></div>
	</span>
<div class="tooltipinternal tr" style="margin-bottom:5px">Start Tor and put port into variable</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>