import React from "react";
import { Route } from "react-router-dom";

import CollectionOverview from "../../components/collections-overview/collection-overview.component";
import Collection from "../collection/collection.component";
const ShopPage = ({ match }) => {
  console.log(match)
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default ShopPage;
