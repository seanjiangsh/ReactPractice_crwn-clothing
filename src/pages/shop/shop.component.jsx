import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collection-overview/collection-overview.component";
import CollecionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollecionPage} />
    </div>
  );
};

export default ShopPage;
