# GinkgoChallenge

### Please visit [here](http://dna-protein-search.herokuapp.com/) for a live version of the project. <br>
The goal of this project was to search a DNA string and be able to tell if it is located in one of proteins out of a set of known proteins. <br>
Other than searching, another requirement was to show the search history. <br>

I used Django for the backend portion and React for the frontend. Instead of using a  Task Queue I opted to use async functionalities in Django
which is available from version 3.0. You will see that the Heroku address that I have given here is not secure. I am running the Django server in
a digital ocean droplet and certbot doesn't ceritfy IP addresses. So for the scope of this project I decided to let everything happen over http. <br>
You will see that while showing the history of search results, there's a **status** column and check icon on every row. Initially my goal was to
showcase the unsuccessful search attempts as well but as I moved forward with the project I realized that it probably isn't necessary just like
showing the search strings would have been quite redundant in my opinion. <br> 
I also thought of having a **clear search history** option but eventually didn't include it. But I just wanted to mention it here to let you know
that I definitely took that into consideration. <br>

In terms of test cases, I added some test cases for Django. I wasn't able to add anything for the async capabilities because one of the built-in test
functions wasn't working and I have documented it. I plan to include some frontend testing as well, with Cypress.io, but that will not come with this
submission. If you would like to see how that goes please visit the separate repos for this project in my github. <br>

