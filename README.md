[![Stories in Ready](https://badge.waffle.io/gitStarted-io/gitStarted-API.png?label=ready&title=Ready)](https://waffle.io/gitStarted-io/gitStarted-API)
# gitStarted-API


# ROUTES (TEMP)
## Users
GET  /users/:username                       - get the user defined by :username
GET  /user                                  - get the authenticated user
GET  /users                                 - get all users
## Servers
GET  /user/servers                          - get all servers for the authenticated user
GET  /users/:username/servers               - get all servers for user defined by :username
POST /user/servers                          - create a new repository for the authenticated user
GET  /user/servers/:servername              - get a .zip file containing the files for the authenticated user's server template specified by :servername
GET  /users/:username/servers/:servername   - get a.zip file containing the files for server, defined by :servername, of the user specified by :username