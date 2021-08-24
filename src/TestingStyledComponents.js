import React from "react";
import styled from "styled-components";

const TestingStyledComponents = () => {
  return (
    <Wrapper>
      <h3>hello world</h3>
      <p>hello people</p>
      <div className="article">
        <p>this is an article</p>
      </div>
      <button>click me</button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: orange;
  }
  .article {
    p {
      color: green;
    }
  }
`;

export default TestingStyledComponents;
