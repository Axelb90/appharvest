import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { listTomato_quality_reports } from "../../graphql/queries";
import { onCreateTomato_quality_report } from "../../graphql/subscriptions";

export default function Dashboard() {
  const [tomatoList, setTomatoList] = useState();

  const fetchTomato = async () => {
    try {
      let result = await API.graphql(
        graphqlOperation(listTomato_quality_reports)
      );
      console.log("Los tomato: ", listTomato_quality_reports);
      setTomatoList({ data: result });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    fetchTomato();
  }, []);

  useEffect(() => {
    let subscriptionOnCreate;
    subscriptionOnCreate = API.graphql(
      graphqlOperation(onCreateTomato_quality_report)
    ).subscribe({
      next: ({ provider, value }) => {
        console.log("Value:", value);
        console.log("provider:", provider);
        let newTomat = value.onCreateTomato_quality_report;
        setTomatoList({ ...tomatoList, newTomat });
      },
    });

    return () => {
      subscriptionOnCreate.unsubscribe();
    };
  }, []);
  return (
    <>
      <div>dashboard</div>
      {tomatoList ? (
        <>
          <div>
            Tomatos cant:{" "}
            {tomatoList.data?.data.listTomato_quality_reports.items.length}
          </div>
          {tomatoList.data?.data.listTomato_quality_reports.items.map(
            (tomato, index) => (
              <li key={index}>{tomato.id}</li>
            )
          )}
        </>
      ) : (
        ""
      )}
    </>
  );
}
