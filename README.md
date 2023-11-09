# quiz_app
Quiz App created with nextjs. It's not using databases, the focus was on Quiz functionality and making it reusable.  
Example how to create your own quiz is in /app/different_theme folder.  
There be a Dockerfile used to create docker image and then deploy it to kubernetes.


### How It Looks
![image](https://github.com/simonasbuj/quiz_app/assets/22977894/6dd60be0-f463-48c7-ba53-49eb29313cc7)
![image](https://github.com/simonasbuj/quiz_app/assets/22977894/85811f08-6f42-4a35-b811-26aa875d9cd8)

### How to run
clone repo  
intall dependencies with: npm install  
run with: npm run dev  
enjoy at localhost:3000  

### Enable randomizing question and answer order
In /components/Quiz.tsx ucomment lines 29 to 40.  
In the same component change const change useState(false) to useState(true) in line 25.
