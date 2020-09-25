import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
imp
    component: UserProfileLite
  },
  {
    path
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  },
  {
    path: "/pivot",
    layout: DefaultLayout,
    component: pivot
  }
];
