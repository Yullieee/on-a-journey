/*

You're a support engineer and you have to write a regex that captures the following information from our log files:

the date
the log level (ERROR, INFO or DEBUG),
the user
the main function
the sub function
the logged message
You asked your supervisor about the rules defining all the logs. He told you that: the sub function may or may not be here, if no sub-function return undefined, the log level can only be one of the 3 presented, the logged message contains any kind of character, all fields are separated by arbitrary spaces (but at least one). For the date format, just standard ISO but don't worry about validation (see PS). Username cannot contains spaces.

The regex should not match if the log doesn't follow above rules.

Examples
Matching logs
<DATE> <LOG LEVEL> [<USER>:<FUNCTION>(:<SUBFUNCTION>)] <MESSAGE>
2003-07-08 16:49:45,896 ERROR [user1:mainfunction:subfunction] We have a problem
2003-07-08 16:49:46,896 INFO [user1:mainfunction] We don't have a problem
Wrong logs
Invalid log level

2003-07-08 16:49:45,896 CRITICAL [user1:mainfunction:subfunction] We have a problem  

*/

var logparser = /^(\d{4}-\d{2}-\d{2}\s+\d{2}:\d{2}:\d{2},\d{3})\s*(ERROR|INFO|DEBUG)\s*\[([^\s:]+):([^:\s]+)(?::([^:\s]+))?\]\s*(.+)$/;