const { gql } = require("apollo-server");

const commonTypeDef = gql`
  type Query

  type Image {
    height: Int
    url: String
    width: Int
  }
`;

module.exports = {
  commonTypeDef,
};
