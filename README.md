# News Website

This is a React.js website that fetches and displays the latest news from the NewsAPI. The website is designed to provide categorized news with different endpoints using a router. It continuously fetches and updates the news to ensure users have access to the most recent information.

## Features

- Categorized news: The website provides different categories such as technology, sports, entertainment, and more, allowing users to easily navigate and browse news articles of their choice.

- Endpoints using router: The website utilizes React Router to create different endpoints for each news category. This enables users to access specific news categories directly using clean URLs.

- Latest news updates: The website continuously fetches the latest news from the NewsAPI, ensuring users have access to the most up-to-date information. The news articles are updated regularly, providing real-time news updates.

- News fetching: The website connects to the NewsAPI to fetch the latest news articles. It uses the API's endpoints and parameters to retrieve specific categories of news and displays them in an organized and user-friendly manner.

## Installation

1. Clone the repository to your local machine using the following command:

git clone https://github.com/Jashank2003/newsapp.git


2. Navigate to the project directory:


3. Install the dependencies using npm:


4. Obtain a NewsAPI key by creating an account on [newsapi.org](https://newsapi.org/). Copy the API key.

5. Create a `.env` file in the root directory of the project and add the following line, replacing `<YOUR_API_KEY>` with your actual NewsAPI key:


6. Start the development server:


7. Open your browser and visit `http://localhost:3000` to access the website.

## Configuration

You can customize the website by modifying the following files:

- `src/components/Navbar.js`: Edit the navigation bar component, such as adding or removing categories, modifying the layout, or changing the design.

- `src/components/NewsList.js`: Adjust the display of news articles, including the title, description, image, and other relevant information.

- `src/pages/CategoryPage.js`: Customize the category pages, such as changing the layout, adding additional components, or modifying the content.

## Dependencies

The project uses the following dependencies:

- `react`: JavaScript library for building user interfaces.
- `react-router-dom`: DOM bindings for React Router, used for routing within the application.
- `dotenv`: Loads environment variables from a `.env` file.

Please refer to the `package.json` file for the complete list of dependencies and their versions.

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to submit a pull request.



