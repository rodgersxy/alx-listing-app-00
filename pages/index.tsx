import React from "react";
import Layout from "../components/layout/Layout";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold">Welcome to Our Property Listings!</h1>
        {/* Render property listings or other content here */}
      </div>
    </Layout>
  );
};

export default HomePage;
