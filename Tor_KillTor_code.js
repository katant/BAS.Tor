TOR_PORT = JSON.parse(<%= port %>)
RANDOM_FILE = "temp_" + rand() + ".bat"
native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\n" + (("".length>0) ? ("cd " + "" + "\n") : "" ) + ("cd custom/Tor/files/Netcat/\nnc.exe localhost " + (TOR_PORT - 1000) + " \u003c pid"),base64:false,append:false}))
native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
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
try{
PID = PROCESS_STANDART_OUTPUT.split('pid=')[1].split(' ')[0]
}catch(e){
fail("Tor module error: Can't find Tor PID by port " + TOR_PORT + ". Probably your Tor instance isn't running.")
}
RANDOM_FILE = "temp_" + rand() + ".bat"
native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\n" + (("".length>0) ? ("cd " + "" + "\n") : "" ) + ("taskkill /F /PID " + PID),base64:false,append:false}))
native_async("processmanager", "start", JSON.stringify({location: RANDOM_FILE, working_folder: "", waitfinish: true, arguments: "", version: 2}))!
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