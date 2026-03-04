import React from "react";
import styled from "styled-components";

const BlogCard = () => {
  return (
    <StyledWrapper>
      <div className="subscribe">
        <p>SUBSCRIBE</p>
        <form>
        <input onChange={(e)=>setEmail(e.target.value)} value={email}
          placeholder="Your e-mail"
          className="subscribe-input"
          name="email"
          type="email"
        />
        </form>
        
        <br />
        <button className="submit-btn" type="submit">SUBMIT</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .subscribe {
    position: relative;
    height: 140px;
    width: 240px;
    padding: 20px;
    background-color: #FFF;
    border-radius: 4px;
    color: #333;
    box-shadow: 0px 0px 60px 5px rgba(0, 0, 0, 0.4);
    margin: auto; /* Center the subscribe box horizontally */
  }

  .subscribe:after {
    position: absolute;
    content: "";
    right: -10px;
    bottom: 18px;
    width: 0;
    height: 0;
    border-left: 0px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #1a044e;
  }

  .subscribe p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 4px;
    line-height: 28px;
  }

  .subscribe input {
    display: block; /* Change to block for centering */
    margin: auto; /* Center the input */
    border: none;
    border-bottom: 1px solid #d4d4d4;
    padding: 10px;
    width: 82%; /* Maintain original width */
    background: transparent;
    transition: all .25s ease;
  }

  .subscribe input:focus {
    outline: none;
    border-bottom: 1px solid #0d095e;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', 'sans-serif';
  }

  .subscribe .submit-btn {
    position: absolute; 
    border-radius: 30px; 
    border-bottom-right-radius: 0; 
    border-top-right-radius: 0; 
    background-color: #ff3333; /* Updated button color */
    color: #FFF; 
    padding: 12px 25px; 
    display: inline-block; /* Keep this for button styling */
    font-size: 12px; 
    font-weight: bold; 
    letter-spacing: 5px; 
    right: -10px; /* Keep this for button positioning */
    bottom: -20px; /* Keep this for button positioning */
    cursor: pointer; 
    transition: all .25s ease; 
    box-shadow: -5px 6px 20px 0px rgba(26, 26, 26, 0.4);
}

.subscribe .submit-btn:hover {
   background-color: #e62e2e; /* Optional hover color for better UX */
   box-shadow: -5px 6px 20px 0px rgba(88, 88, 88, 0.569);
}
`;

export default BlogCard;



