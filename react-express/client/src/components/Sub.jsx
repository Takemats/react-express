import React from "react";
import { useAuth } from "../providers/AuthProvider";

const Sub = () => {
  const { user, logout } = useAuth();

  return (
    <>
      {user ? (
        <div>
          <p>ログイン済み:</p>
          <p>ユーザ名:{user.username}</p>
          <p>メールアドレス:{user.email}</p>
          <button onClick={logout}>ログアウト</button>
        </div>
      ) : (
        <div>
          <p>ログインされていません。</p>
        </div>
      )}
    </>
  );
};

export default Sub;
