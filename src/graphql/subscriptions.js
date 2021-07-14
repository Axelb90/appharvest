/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTomato_quality_report = /* GraphQL */ `
  subscription OnCreateTomato_quality_report {
    onCreateTomato_quality_report {
      id
      color
      zone
      weight
    }
  }
`;

export const onUpdateTomato_quality_report = /* GraphQL */ `
  subscription OnUpdateTomato_quality_report(
    $id: ID
    $color: String
    $zone: String
    $weight: String
  ) {
    onUpdateTomato_quality_report(
      id: $id
      color: $color
      zone: $zone
      weight: $weight
    ) {
      id
      color
      zone
      weight
    }
  }
`;
export const onDeleteTomato_quality_report = /* GraphQL */ `
  subscription OnDeleteTomato_quality_report(
    $id: ID
    $color: String
    $zone: String
    $weight: String
  ) {
    onDeleteTomato_quality_report(
      id: $id
      color: $color
      zone: $zone
      weight: $weight
    ) {
      id
      color
      zone
      weight
    }
  }
`;
