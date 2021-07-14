/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTomato_quality_report = /* GraphQL */ `
  query GetTomato_quality_report($id: ID!) {
    getTomato_quality_report(id: $id) {
      id
      color
      zone
      weight
    }
  }
`;
export const listTomato_quality_reports = /* GraphQL */ `
  query ListTomato_quality_reports(
    $filter: TableTomato_quality_reportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTomato_quality_reports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        color
        zone
        weight
      }
      nextToken
    }
  }
`;
export const hurryAndGiveMeADadJoke = /* GraphQL */ `
  query HurryAndGiveMeADadJoke {
    hurryAndGiveMeADadJoke {
      id
      joke
      cringe
      imageUrl
    }
  }
`;
export const giveMeADadJoke = /* GraphQL */ `
  query GiveMeADadJoke($id: ID!) {
    giveMeADadJoke(id: $id) {
      id
      joke
      cringe
      imageUrl
    }
  }
`;
