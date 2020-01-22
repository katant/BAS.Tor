RANDOM_FILE = "temp_" + rand() + ".bat"
native("filesystem", "writefile", JSON.stringify({path: RANDOM_FILE,value: "chcp 65001\n" + (("".length>0) ? ("cd " + "" + "\n") : "" ) + ("taskkill /F /IM tor.exe"),base64:false,append:false}))
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
