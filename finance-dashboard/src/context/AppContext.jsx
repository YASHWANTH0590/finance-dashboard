import { createContext, useState, useEffect } from "react";
import { initialTransactions } from "../data/mockData";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : initialTransactions;
  });

  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  return (
    <AppContext.Provider
      value={{ transactions, setTransactions, role, setRole, filter, setFilter }}
    >
      {children}
    </AppContext.Provider>
  );
};