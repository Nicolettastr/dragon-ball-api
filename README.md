

Dragon Ball Characters
This project uses the Dragon Ball API to fetch character data, allowing users to search for characters, view their details by ID, save favorites, and cache data in localStorage for better performance.

Features
Character List: Displays all Dragon Ball characters.
Character Details by ID: Click on a character to view detailed information.
Search by Name: Search for characters by their name.
Favorites: Save characters to a favorites list.
Data Caching: Use localStorage to cache character data and favorites for better performance.
Technologies Used
React
TypeScript 
CSS 
Dragon Ball API
localStorage for caching
Installation
To get started with the project, follow these steps:

Clone the repository:

bash
Copiar código
git clone <repository-url>
cd dragon-ball-characters
Install dependencies: Make sure you have npm installed. If not, install it from nodejs.org. Then, install the dependencies with:

bash
Copiar código
npm install
Run the development server: Once the dependencies are installed, start the development server with:

bash
Copiar código
npm run dev
Access the project: Open your browser and go to the URL provided in the terminal (usually http://localhost:3000).

Usage
View Characters
When the app loads, it displays a list of all Dragon Ball characters. Each character will show their name, image, and a link to view detailed information.

View Character Details
Click on any character from the list to view their detailed information. The details include their name, image, and other relevant data.

Search Characters
You can search for characters by name using the search input at the top of the page. This will update the character list based on your search query.

Save Characters to Favorites
You can add characters to your favorites list by clicking the favorite icon. This list is saved in localStorage, so your favorites will persist even after the page is reloaded.

Data Caching
Character data is stored in localStorage to avoid making multiple requests to the API. When the app loads, it checks if the data is already cached. If it is, it uses the cached data instead of making a new API request.


Caching and localStorage
Character data and favorites are stored in localStorage as follows:

Character Data: When the app loads, it first checks if character data is available in localStorage. If the data is present, it uses the cached data to avoid making an API request.
Favorites: The list of favorite characters is also stored in localStorage, ensuring that your favorites persist even after page reloads.
Troubleshooting
Nothing shows up on the page: Check if localStorage has the required data. If not, look at the console to see if there are errors in the API call.
Favorites are not updating correctly: Ensure that when adding or removing favorites, localStorage is properly updated with the new list.
How to Contribute
If you want to contribute to this project, follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature-new-feature).
Make your changes and commit (git commit -am 'Added new feature').
Push your branch (git push origin feature-new-feature).
Open a Pull Request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

About the Course
This project was developed as part of the Advanced React Course by Babel Group. The course covers advanced React topics, including state management, context API, API integration, and performance optimization using caching strategies like localStorage.

