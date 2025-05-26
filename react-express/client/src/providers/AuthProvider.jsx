import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from "react";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("AuthProviderの中で宣言してください。");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("userInfo");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // テストのため固定値で認証する
  const login = useCallback((userInfo) => {
    if (
      userInfo.username === "testUser" &&
      userInfo.email === "test@gmail.com"
    ) {
      setUser(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      console.log("ログインできません");
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("userInfo");
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
