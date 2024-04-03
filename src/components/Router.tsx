import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import ProfilePage from "../pages/profile";
import SignInPage from "../pages/signin";
import SignUpPage from "../pages/signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/new" element={<PostNew />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}
