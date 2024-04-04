import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/home";
import PostList from "../pages/posts";
import PostDetail from "../pages/posts/detail";
import PostNew from "../pages/posts/new";
import ProfilePage from "../pages/profile";
import SignInPage from "../pages/signin";
import SignUpPage from "../pages/signup";
import { useState } from "react";

export default function Router() {
  // To Do: firebase Auth 인증이 완료되면 true로 변경되는 로직 추가
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="*" element={<Navigate replace to="/signin" />} />
        </>
      )}
    </Routes>
  );
}
