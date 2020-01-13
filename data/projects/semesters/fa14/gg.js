// Fa14 Juvenile Sentence Cost Calculator
const name = "Juvenile Sentence Cost Calculator";
const id = "jscc";
const detail =
  "Simply calculates and compares different expenditures for juvenile sentences to help attorneys and advocates";
const coverImagePath = "/static/images/projects/gg/gg-map.png";
const clientDetail =
  "The Louisiana Center for Children’s Rights is a non-profit that defends the right of every Louisiana child to fairness, dignity, and opportunity. It is the only specialized juvenile defense law office in the country and houses the Louisiana Children’s Advocacy Group that advocates for a more fair and compassionate juvenile justice system.";
const clientLink = "http://www.laccr.org/";
const previousLink = null;
const clientFeatures = null;
const problem =
  "The cost of a sentence has a huge impact on a judge’s ruling and is often used by the advocacy group to expose inefficiencies in the system. However calculating and comparing different expenditures is a tedious and arduous task that many attorneys and advocates simply do not have time for. The organization thus applied to Hack4Impact for help building a juvenile sentence cost calculator";
const problemImagePath = "/static/images/projects/gg/gg-cover.jpg";
const solution =
  "Hopefully the product can make it easier for lawyers and advocates to calculate sentence costs used in defending the rights of children and improving the juvenile justice system.";
const solutionImagePath = "/static/images/projects/gg/gg-crawl.png";
const features = [
  {
    title: "Data collection through scraping",
    detail:
      "Choose ten websites with directories of nonprofits and scrape each individual one and add them to the database. Data includes the organization’s name, country of registration, registration numbers, website url, and email.",
    imgPath: "/static/images/projects/gg/gg-scraper.png"
  }
];
const featureImgSize = "7";
const techStack = ["python", "flask", "mongodb"];
const quote = null;
const quoteSource = null;
const quoteSourceTitle = null;
const githubLink = "https://github.com/hack4impact-uiuc/globalgiving-tool";
const team = {
  type: "pic",
  detail: [
    {
      name: "Cathy Chen",
      role: "Product Manager"
    },
    {
      name: "Ali Altaf",
      role: "Developer"
    },
    {
      name: "Natalie Borowski",
      role: "Developer"
    },
    {
      name: "Rachel Hong",
      role: "Developer"
    },
    {
      name: "Thomas Li",
      role: "Developer"
    }
  ]
};
export default {
  name,
  id,
  detail,
  coverImagePath,
  clientDetail,
  clientLink,
  clientFeatures,
  problem,
  problemImagePath,
  solution,
  solutionImagePath,
  features,
  techStack,
  quote,
  quoteSource,
  quoteSourceTitle,
  githubLink,
  previousLink,
  team,
  featureImgSize
};
