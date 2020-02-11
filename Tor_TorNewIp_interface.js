<div class="container-fluid">
  <%= _.template($('#input_constructor').html())({id:"Port", description:tr("Port"), default_selector: "string", value_string: "[[TOR_PORT]]"}) %>

</div>
<div class="tooltipinternal tr" style="margin-bottom:5px">Make new Tor circuit by port</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>