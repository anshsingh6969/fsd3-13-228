# crud operation 
c:- create/add/insert
r:-retrive/view/get
u:-update/edit
d:- delete/remove
## fs:- file system :- it is a node library and interact directly with os.
it direct connect with client os rater than browser 
## major task of fs module  
- Reading and writing files
    - readFiles()
    - writeFile()
    - appendFile()
- DIRECTORY MANAGMENT
    - mkdir()
    - rmdir() - depricated
    - rm()
    - readdir()
- metadta/Information
    - stat()
    - Lstat()
    - Fstat()
- Watching for changes
    - watch ()
    - watch files()
    - unwatchfile()
- streaming large file
    - createReadsStream()
    - createWriteStream()
- File Operations
    - rename()
    - truncate()
    - unlink()
    - link()
    - syslink()
<!-- CRUD OPERATION-->
each item id, name, price , quantity
<!-- opERATIONS -->
1. add to cart
2. show cart
3. remove items from cart
4. update quantity from cart
5. checkout
## Node Package Manager (NPM)

used to install, run, uninstall any program/project and package

- npm install <packagename>
- npm uninstall <packagename>

to use npm, the project must be npm project,
to create npm project we can use

- npm init -y
- it creates a package.json file automatically
  package.json holds all the information related to install
  packages from npm
- it also creates a folder node_modules automatically
- node_modules holds the package/library files
- generally we ignore the node_modules by .gitignoree  
## Status Codes
- 200 -> 0k
- 201 -> created
- 400 -> bad req
- 403 -> forbidden
- 404 -> not found
- 500 ->internal server error


# Content Type

- text/plain
- text/html
- application/json
- text/css

The content type and status code can be send back to client by two ways.

1. res.writeHead
2. res.setHeader
3. res.statusCode
RESPONSE AS HTML CONTENT
1. response.end
end("any html content")


2. html file
- read by create read stream
- file with res


## SEND HTML FILE TO CLIENT
1. html file 
  - read html file using createReadStream
  - pipe it with res object

2. html content 
send any html tags/content by using 
res.end('<any html tag>')
## JSON
server return data only not html contents because html content will be wriyyen by fronted devloper.
the data is in json format 
json always store data in key , value pair enclosed by curly brackets { }
array can be stored in []
one pair of curly bracket will represent only one object and its property will be separated by ","  
{
    id: 1,
    name: 'mobile',
    price:25000,
    rating: 4.5,
    review:200
}

GET-> no parameter will pass to the server when we recieve all items 
POST-> to add record we pass the value from body section in json format of api tester 
DELETE-> to delete any product we pass parameter that is id of the product from url/id
UPDATE(put/patch)-> to update any product we pass id from url and data to update from body
