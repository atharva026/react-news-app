# News App with Infinite Scroll

This is a React application that displays news articles using the [News API](https://newsapi.org/). The app supports infinite scrolling, allowing users to load more articles as they scroll down the page. It also includes a loading spinner, error handling, and support for different news categories.

## Features

- Fetches top news articles from the News API.
- Infinite scrolling to load more articles.
- Displays a loading spinner while data is being fetched.
- Error handling for when the API rate limit is exceeded or no news is found.
- Mobile-responsive design using [Tailwind CSS](https://tailwindcss.com/).

## Installation

### Prerequisites

- Node.js
- npm or yarn
- News API Key (You can get one for free at [News API](https://newsapi.org/))

### Clone the repository

```bash
    git clone https://github.com/atharva026/react-news-app.git
    cd react-news-app
```
Install dependencies
Using npm:

```bash
    npm install
```

### Set up the API Key
Create a .env file in the root directory of the project and add your News API key:

```bash
VITE_NEWS_API_KEY=your_api_key_here
```

#### Run the application
To start the development server, run:

```bash
npm run dev
```
The app should now be running on http://localhost:5173/.

## Usage
- Open the app in your browser.
- Browse through top news articles.
- Scroll down to load more articles.
- The app will show a spinner while loading more articles.
- If no articles are found or the API limit is exceeded, a proper error message will be displayed.

## Changing News Category
You can change the news category by passing a different category prop to the Newscard component. The default category is null, which loads general news.

``` js
<Newscard category="sports" />
<Newscard category="technology" />
<Newscard category="business" />
```

## Dependencies
- React: UI library.
- Tailwind CSS: Utility-first CSS framework for styling.
- react-infinite-scroll-component: Infinite scroll functionality.
- News API: Third-party API to fetch news articles.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
Feel free to open issues or submit pull requests if you want to improve the project.

## Acknowledgments
- [News API](https://newsapi.org/) for providing the news data.
- [Tailwind CSS](https://tailwindcss.com/) for their awesome styling framework.