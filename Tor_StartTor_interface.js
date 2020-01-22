<div class="container-fluid">
  <%= _.template($('#variable_constructor').html())({id:"Port", description:tr("Variable to put port"), default_variable: "TOR_PORT"}) %>
</div>
<div class="tooltipinternal tr" style="margin-bottom:5px">Start Tor and put port into variable</div>

<%= _.template($('#back').html())({action:"executeandadd", visible:true}) %>