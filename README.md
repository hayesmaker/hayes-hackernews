### Installation Instructions

  ```yarn start```
    Starts the development server.

  ```yarn build```
    Bundles the app into static files for production.

  ```yarn test```
    Starts the test runner.


You can begin by typing:

  ```cd hayes-hackernews-client```
  ```yarn start```


### Implemented:
* Top 50 Hacker news stories are displayed (in the order they are fetched, there's no sorting even though it's
fairly trivial
* You can ammend the number of stories displayed by changing the TopStories 'results' attribute in the App Component
* I started writing component tests, but the nested Promise chain required to use Hacker News API is quite complicated to test
so that took all my remaining time to try to solve, and didn't allow me enough timee to test the comments components
* Titles act as links to the Hacker news stories
* Comments are implemented, the Show/Hide button toggles comments on or off.  Showing comments reloads the comments
from the API.