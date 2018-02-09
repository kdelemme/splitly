import React from "react";
import FriendForm from "../FriendForm";
import Friends from "../Friends";

export const FriendsContainer = () => {
  return (
    <div className="row pt-5">
      <div className="col-12 col-md-4">
        <FriendForm />
      </div>
      <div className="col-12 col-md-6">
        <Friends />
      </div>
    </div>
  );
};
