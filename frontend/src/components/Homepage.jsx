import React from "react";
import "./homepage.css";

export default function Homepage() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="logo">ChatVerse</div>
        <nav>
          <a href="/create">CREATE ROOM</a>
          <a href="/join">JOIN ROOM</a>
          <a href="/">ABOUT</a>
         
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          CONNECT WITH FRIENDS <br /> ANYTIME, ANYWHERE
        </h1>
        <a href="/create">
          <button className="shop-btn">START CHATTING</button>
        </a>
      </section>

      {/* Chat App Feature Grid */}
      <section className="sneaker-grid">
       

        <div className="sneaker-card">
          <img
            src="https://cdn.cosmos.so/f587388e-0ff5-46c5-841b-3b0ea8b90022?format=jpeg"
            alt="Voice & Video Calls"
          />
        </div>

        <div className="sneaker-card">
          <img
            src="https://cdn.cosmos.so/c840be47-a411-4dfe-9698-b9e26ca474e0?format=jpeg"
            alt="Group Chats"
          />
        </div>

        <div className="sneaker-card">
          <img
            src="https://cdn.cosmos.so/45751fe1-8e7c-4b3f-9ced-1f20f79be6ff?format=jpeg"
            alt="Media Sharing"
          />
        </div>

       
      </section>
    </div>
  );
}
