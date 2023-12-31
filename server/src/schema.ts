const gql = require("graphql-tag");

export const typeDefs = gql`
  type Query {
    "Query to get tracks array for the homepage grid"
    tracksForHome: [Track!]!
  }

  "A track is a group of Modules that teaches about a specific object"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the tracks main illustration to display in track card or track page detail"
    thumbnail: String
    "the tracks approximate length to complete, in minutes"
    length: Int
    "the number of modules this track contains"
    modulesCount: Int
  }

  "Author of a complete Track"
  type Author {
    id: ID!
    "Authors first and last name"
    name: String!
    "Authors profile picture url"
    photo: String!
  }
`;
