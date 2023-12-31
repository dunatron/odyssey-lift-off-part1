import React from "react";
import { Layout, QueryResult } from "../components";
import { useQuery } from "@apollo/client";
import { gql } from "../__generated__";

import TrackCard from "../containers/track-card";

const TRACKS = gql(`
  query GetTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        id
      }
    }
  }
`);

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);

  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track, _) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
