# GitHub Repository Visualization

This Angular application fetches data from GitHub's GraphQL API, displays it in a tabular view using AG Grid, and visualizes the number of stars each repository has using D3.js.

## Features

- **GitHub API Integration**: Fetch a list of repositories for a specific user using GitHub's GraphQL API.
- **AG Grid**: Display repository data in a tabular format with features like sorting, filtering, and pagination.
- **D3.js Visualization**: Bar chart visualization of the number of stars each repository has.
- **State Management with NgRx**: Manage the state of the application including fetching repositories and filtering data.

## Prerequisites

- Node.js and npm installed
- GitHub Personal Access Token for GraphQL API access

## Setup Instructions

1. **Clone the Repository**:
    git clone https://github.com/RohitBhat19RB1/github-repository-visualisation
    cd github-repository-visualization

2. **Install Dependencies**:
    npm install

3. **Set Up Environment Variables**:
    - Create a `environment.ts` file in the root directory i.e. src/app/environment
    - Add your GitHub Personal Access Token to the `environment` file:
      GITHUB_TOKEN=your_github_token_here

4. **Run the Application**:
    ng serve

5. **Open in Browser**:
    Open your browser and navigate to `http://localhost:4200`.

## Usage

1. **Search for GitHub User**:
    - Enter a GitHub username in the search input field and click the "Search" button.
    - The application fetches and displays the repositories of the specified user in an AG Grid.

2. **Filter Repositories**:
    - Use the filter input field to filter the displayed repositories based on the repository name.

3. **View Star Chart**:
    - Navigate to the "Star Chart" page to view a bar chart visualization of the number of stars for each repository.

## Project Structure

- `src/app/repository-grid/`: Contains the Angular component repository-grid for the application.
- `src/app/star-chart/`: Contains the Angular component star-chart for the application.
- `src/app/services/`: Contains the services for API interaction and state management.
- `src/app/state/`: Contains the NgRx state management files.
- `src/app/models/`: Contains the model file. In our case there is only one file but for the bigger codebase we can implement as per our requirement.
- `src/assets/`: Contains static assets like stylesheets and images.

## Key Components

- **Repositories Component**: Displays the list of repositories in an AG Grid.
- **Star Chart Component**: Displays the D3.js bar chart visualization.
- **GitHub Service**: Handles API requests to GitHub's GraphQL API.
- **NgRx Store**: Manages the state of the application.

## Screencast
https://github.com/RohitBhat19RB1/github-repository-visualisation/commit/b297b23a03ea8dcdd014888ec449fc6ca4af3833#commitcomment-144304553

## Screenshots
https://github.com/RohitBhat19RB1/github-repository-visualisation/commit/b297b23a03ea8dcdd014888ec449fc6ca4af3833#commitcomment-144304575

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

- Rohit Bhat - rohitbhat16860@gmail.com
- Project Link: https://github.com/RohitBhat19RB1/github-repository-visualisation
