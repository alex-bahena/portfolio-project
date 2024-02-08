import React from "react";

const NotFound = () => {
  return (
    <div className="404-page">
      <h1>Error 404 - Page not found</h1>
      <p>The requested page could not be found.</p>
      {/* Link to navigate back to the main page */}
      <a href="/main">Go to Main Page</a>
    </div>
  );
};

export default NotFound;
