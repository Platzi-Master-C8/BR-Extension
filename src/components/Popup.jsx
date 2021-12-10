import React from "react";
import { TrackNew } from "../pages/TrackNew";
import { Layout } from "./Layout";
import { Navbar } from "./Navbar";


function Popup() {
  return (
      <Layout>
        <Navbar title="New Tracking" />
          <TrackNew />
      </Layout>
  );
}

export { Popup };
