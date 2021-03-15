# Bio2RDF website

[![Deploy to GitHub Pages](https://github.com/MaastrichtU-IDS/into-the-graph/workflows/Deploy%20website%20to%20GitHub%20Pages/badge.svg)](https://github.com/MaastrichtU-IDS/into-the-graph/actions?query=workflow%3A%22Deploy+website+to+GitHub+Pages%22) [![CodeQL analysis](https://github.com/MaastrichtU-IDS/into-the-graph/workflows/CodeQL%20analysis/badge.svg)](https://github.com/MaastrichtU-IDS/into-the-graph/actions?query=workflow%3A%22CodeQL+analysis%22) 

[RDF](https://www.w3.org/RDF/) browser for Bio2RDF written in TypeScript, using React, deployed to GitHub Pages.

See the documentation of the Bio2RDF project for more details: https://github.com/bio2rdf/bio2rdf-scripts/wiki

# 👨‍💻 Contribute

Contributions are welcome! See the [guidelines to contribute](/CONTRIBUTING.md).

# 🏗️ Run in development

Requirements:  [npm](https://www.npmjs.com/get-npm) and [yarn](https://classic.yarnpkg.com/en/docs/install/#debian-stable) installed.

Clone the repository:

```bash
git clone https://github.com/MaastrichtU-IDS/into-the-graph
cd into-the-graph
```

Install dependencies :inbox_tray:

```bash
yarn
```

Run the web app in development at http://localhost:19006

```bash
yarn dev
```

> The website should reload automatically at each changes to the code :arrows_clockwise:

Upgrade the packages versions in `yarn.lock`

```bash
yarn upgrade perfect-graph unitx-ui unitx
```

# 🛩️ Run in production 

> This website is automatically deployed by a [GitHub Actions worklow](https://github.com/MaastrichtU-IDS/into-the-graph/actions?query=workflow%3A%22Deploy+to+GitHub+Pages%22) to GitHub Pages at https://maastrichtu-ids.github.io/into-the-graph

You can build locally in `/web-build` folder and serve on [http://localhost:5000 :package:](http://localhost:5000)

```bash
yarn build
yarn serve
```

Or run directly using [Docker :whale:](https://docs.docker.com/get-docker/) (requires [docker installed](https://docs.docker.com/get-docker/))

```bash
docker-compose up
```

> Checkout the [docker-compose.yml](/docker-compose.yml) file to see how we run the Docker image.

# 🔎 Virtuoso search query

Optimized SPARQL query to perform full text search in Virtuoso after building the index:

```SPARQL
SELECT ?foundUri ?foundLabel WHERE {?foundUri <http://www.w3.org/2000/01/rdf-schema#label> ?foundLabel . ?foundLabel bif:contains '$TEXT_TO_SEARCH' . } LIMIT 200
```
