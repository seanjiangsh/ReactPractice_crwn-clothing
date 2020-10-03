import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.action";

import CollectionOverviewContainer from "../../components/collection-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = (props) => {
  const { match, fetchCollectionsStart } = props;

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  // componentDidMount() {
  // * Native fetch API style DEMO, very nested result...
  // fetch(
  //   "https://firestore.googleapis.com/v1/projects/crwn-db-dd9f6/databases/(default)/documents/collections"
  // )
  //   .then((response) => response.json())
  //   .then((collection) => console.log(collection));

  // * Promise chain style
  // collectionRef.get().then((snapshot) => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   updateCollections(collectionsMap);
  //   this.setState({ loading: false });
  // });

  // * Observable pattern
  // collectionRef.onSnapshot(async (snapshot) => {
  //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //   updateCollections(collectionsMap);
  //   this.setState({ loading: false });
  // });
  // }

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
