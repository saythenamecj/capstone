## For this folder, all the contents should be in relation to the front and back of the test project.  
  
If unsure, then do not touch.  

I'll be the one in charge of the backend, and otherwise stated do not make changes to the backend directory.  
  
  
  
mkdir bossb  
	make folder named bossb  
cd bossb  
	change directory to bossb  
npx create-react-app frontend  
	create default app folder for frontend  
code .  
	open root directory in vsc  
cd frontend  
	change directory to frontend   
npm start  
	starts server in local host  
  
(cleanup of boilerplates)  
cd src   
rm logo.svg  
rm app.test.js  
rm app.css  
	rm stands for remove, and the three are just boilerplates  
  
(edit .gitignore)  
nodemodules #dependencies  
.env #misc  
  
installing libraries  
cd frontend   
npm i react-bootstrap bootstrap react-icons  
  
in index.js import bootstrap   
import 'bootstrap/dist/css/bootstrap.min.css';  
  
creating screens (pages)  
mkdir components  
cd components   
type nul > Header.jsx  
  

