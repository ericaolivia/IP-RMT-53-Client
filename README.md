# IP-RMT-53-Server
Individual Project RMT-53 Client Side

1. Register User
Path: /register
Component: <Register />
Method: GET
Description: Displays the registration form for new users. This route allows users to create an account by providing necessary credentials like email, password, etc.

---

2. Login User
Path: /login
Component: <Login />
Method: GET
Description: Displays the login form for existing users. This route checks if a user is already logged in via localStorage. If the user is authenticated (i.e., an access_token exists), the user is redirected to the homepage (/).
Redirect Logic:

If a valid access_token exists in localStorage, the user is redirected to the homepage (/).
Otherwise, the login form is displayed.

---

3. Chatbot
Path: /chatbot
Component: <ChatbotPage />
Method: GET
Description: Renders the chatbot page where users can interact with an AI to ask for recipe recommendations. Access is restricted to authenticated users via the isLoggedIn loader.
Loader Function:

Checks if the user is authenticated (i.e., if an access_token exists in localStorage).
If the user is not authenticated, they are redirected to the login page.

---

4. Homepage
Path: /
Component: <Homepage />
Method: GET
Description: Renders the homepage with recipe listings. This page is the main dashboard for users to explore various recipes. Access is restricted to authenticated users via the isLoggedIn loader.
Loader Function:

Checks if the user is authenticated (i.e., if an access_token exists in localStorage).
If the user is not authenticated, they are redirected to the login page.

---

5. Favorites
Path: /favorites
Component: <Favorites />
Method: GET
Description: Displays the list of recipes the user has marked as their favorites. Access is restricted to authenticated users via the isLoggedIn loader.
Loader Function:

Checks if the user is authenticated (i.e., if an access_token exists in localStorage).
If the user is not authenticated, they are redirected to the login page.

---

6. User Profile
Path: /profile
Component: <Profile />
Method: GET
Description: Displays the user’s profile page where they can view and update their personal details such as name, profile picture, etc. Access is restricted to authenticated users via the isLoggedIn loader.
Loader Function:

Checks if the user is authenticated (i.e., if an access_token exists in localStorage).
If the user is not authenticated, they are redirected to the login page.

---

7. Recipe Detail
Path: /detail/:id
Component: <RecipeDetail />
Method: GET
Description: Displays detailed information about a specific recipe. The id parameter in the URL corresponds to the unique identifier of the recipe. The page fetches and renders the details of the recipe using this id. Access is restricted to authenticated users via the isLoggedIn loader.
Loader Function:

Checks if the user is authenticated (i.e., if an access_token exists in localStorage).
If the user is not authenticated, they are redirected to the login page.
