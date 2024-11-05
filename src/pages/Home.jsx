import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
    //   alert("토큰이 유효하지 않습니다. 다시 로그인하세요.");
      navigate("/auth/login");
    }
  }, [navigate]);

  return <div>
    홈 페이지 - 로그인 상태입니다!
    TodoList
    </div>;
}

export default Home;
