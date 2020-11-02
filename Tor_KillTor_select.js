var Port = GetInputConstructorValue("Port", loader);
if (Port["updated"].length == 0) {
    Invalid("Port is empty");
    return;
}
try {
    var code = loader.GetAdditionalData() + _.template($("#Tor_KillTor_code").html())({
        port: Port["updated"]
    });
    code = Normalize(code, 0);
    BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch (e) {}