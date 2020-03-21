## Hack4Impact Website

New Hack4Impact website. Front end is based on UIUC Chapter's site. However, we are adding features that allows user logins, and posting new updates from an admin dashboard.

## Get Started

- Clone this repo
- Cd directory
- Cd server, and create .env file
- yarn install in both client and server folder
- Go to root dir and run "yarn dev"

## Enviromental File

Personally, I recommend using MongoDB Compass for development. Additionally, for testing backend end routes, I am using Postman, email me if you would like me to send you the HTTP request templates.

- ATLAS_URI=xxxx
- CLOUDINARY_CLOUD_NAME=xxxx
- CLOUDINARY_API_KEY=xxxx
- CLOUDINARY_API_SECRET=xxxx
- JWT_SECRET=xxxx

## Project Road Map

- [x] Setup Frontend UI
- [x] Setup Backend Routes
- [x] Allow Image Uploading
- [x] Modify Existing Project Page to Fetch Projects from Backend
- [x] Setup Authentication / Authorization System
- [ ] Redesign Specific Project Page to Fit Existing Site's Format (\*\*)
- [ ] Create Frontend UI for Admin Login / Dashboard
- [ ] Create Frontend UI for Admin Create Posts (\*\*)
- [ ] Figure Out Deployment
- [ ]  Migrate Data from Old Site to New Site (Maybe a Python scrapper?)
