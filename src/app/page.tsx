'use client';

import { useQuery, gql } from '@apollo/client';

const testingQuery = gql`
  query {
    ping
  }
`;


export default function Home() {
  const { loading, error, data } = useQuery(testingQuery);
  if (loading) return <h1>Loading..</h1>;
  if (error) return <h1>Error! {error.message}</h1>;

  return (
    <div>
      Hello
      Testing ping: {data?.ping}
    </div>
  )
}