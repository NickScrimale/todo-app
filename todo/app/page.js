'use client';
import React from "react";
import Form from "@/src/components/Form";
import Header from "@/src/components/Header";
import TODOHero from "@/src/components/TODOHero";
import TODOList from "@/src/components/TODOList";
function Home() {
  const [todos, setTodos] = React.useState([
    { title: "Some task", id: self.crypto.randomUUID(), is_completed: false },
    { title: "Some other task", id: self.crypto.randomUUID(), is_completed: false },
    { title: "last task", id: self.crypto.randomUUID(), is_completed: true },

  ]);
  const todos_completed = todos.filter(
    (todo) => todo.is_completed === true
  ).length;
  const total_todos = todos.length;
  return (
    <div className="wrapper">
      <Header />
      <TODOHero todos_completed={0} total_todos={0} />
      <Form />
      <TODOList todos={todos} />
    </div>
  );
}
export default Home;