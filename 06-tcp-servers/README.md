# 06-tcp-servers

this is a TCP chat server built off of node.js native net

## requirements

* node.js : you must have node to run this servers

## installation

instal all libraries from the command line using the command : 'npm i'

# running the server

run the server either using the command : 'node server.js' or 'nodemon server.js' from the root of the directory

# connection

open multiple terminal windows or use another computer while the server is running

you can find the server's ip by running the command : 'ifconfig' look for your active server, you should see 'inet (ip address) netmask ...' grab your ip address

you should see 'server running on (PORT)' grab your PORT

you can now connect to your server by running the command 'telnet (ip address) (PORT)'

# commands

* '@all <message>' sends a message for all to server
* '@dm <user> <message>' sends a private message to a user
* ''
