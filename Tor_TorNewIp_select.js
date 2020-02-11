var Port = GetInputConstructorValue("Port", loader);
if (Port["original"].length == 0) {
    Invalid("Port is empty");
    return;
}
try {
    var code = loader.GetAdditionalData() + _.template($("#Tor_TorNewIp_code").html())({
        port: Port["original"]
    });
    code = Normalize(code, 0);
    BrowserAutomationStudio_Append("", BrowserAutomationStudio_SaveControls() + code, action, DisableIfAdd);
} catch (e) {}