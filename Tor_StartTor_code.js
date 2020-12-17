TOR_PORT = Math.floor(Math.random() * 900) + 100;;
TOR_CUSTOM = ""
if (<%= change_ip %> === true) {
    TOR_CUSTOM += " --MaxCircuitDirtiness 10 --NewCircuitPeriod 10"
}
if (<%= allow %>.length > 0){
    TOR_CUSTOM += " --ExitNodes " + "{" + <%= allow %>.toUpperCase().split(" ").join("},{") + "}"
}
if (<%= disallow %>.length > 0){
    TOR_CUSTOM += " --ExcludeNodes " + "{" + <%= disallow %>.toUpperCase().split(" ").join("},{") + "}"
}
RANDOM_FILE = "temp_" + rand() + ".bat"
native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\n" + (("".length>0) ? ("cd " + "" + "\n") : "" ) + ("cd custom/Tor/files/Tor\ntor.exe -f torrc -SocksPort 9" + TOR_PORT + " -ControlPort 8" + TOR_PORT + " -DataDirectory %TEMP%/torf" + TOR_PORT + TOR_CUSTOM),base64:false,append:false}))
native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: false, arguments: "", version: 2}))!
try
{
var split = _result().split(",")
PROCESS_STANDART_OUTPUT = base64_decode(split[0])
PROCESS_ERROR_OUTPUT = base64_decode(split[1])
}catch(e)
{
PROCESS_STANDART_OUTPUT = _result()
}

sleep(1000)!
native("filesystem", "removefile", RANDOM_FILE)
TOR_PORT = TOR_PORT + 9000
<%= port %> = TOR_PORT