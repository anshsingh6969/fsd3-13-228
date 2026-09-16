localhost-URL
127.0.01-IP address

ctrl+c-stop the server

every request from client has a pair of {request,response}
npm- Node Package Manager
##  Node Package Manager(NPM)
used to install,run,uninstall any program/project and package
- npm install<packageName>
- npm uninstall<packageName>

to use npm,the project must be npm project,
to create npm project we can use 
- npm init-y
- update package.jason,set type='module'
- it creates a package.jason file automatically
package.jason holds all the minformation related to install packages from npm
- it also creates a folder node_modules automatically
- node_modules holds the package/library filles
- generally we ignore the node_modules by .gitignore

nodemon - it restart the sever automatically when file changes
to install
>npm i nodemon -D

Note: -D flag willinstall this package as developer dependency
- to execute any program,update the package.jason file then start the server as 
<b>npm run dev</b>

## Content Type
- text/plain
- text/html
- application/json
- 



# HEADERS
headers are used to tell the client about the type of data send by the sever it may be html file ,jason data,plain text files,css file,any tokens(for login)