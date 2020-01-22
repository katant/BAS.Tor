var Port = this.$el.find("#Port").val().toUpperCase();
try{
  var code = loader.GetAdditionalData() + _.template($("#Tor_StartTor_code").html())({port: "VAR_" + Port});
  code = Normalize(code,0);
  BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
}catch(e)
{}