import styled from "styled-components";
// import add_button from "./icons/icons8-plus-math-30.png";

//////////////////////
const Test = () => {
  return <Btn>yes</Btn>;
};

export default Test;

const Btn = styled.button`
  background-colro: red;
`;
////////////////////////

// Layout
export const Layout = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;

  margin: 20px 24px 0 24px;
  border-radius: 6px;
  background-color: white;
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const WillDoneList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// Components
export const Form = styled.form`
  justify-content: center;
  display: flex;
  padding: 20px 20px;
`;

export const TodoInput = styled.input`
  height: 40px;
  width: 240px;
  padding: 0 12px;
  background-color: rgba(241, 243, 247);
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 6px rgba(100, 58, 199);
  }
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 20px 20px;
  color: #7743db; ;
`;

export const Button = styled.button`
  font-weight: bold;
  background-color: transparent;
  color: ${({ bgColor }) => bgColor};
  width: 80px;
  border: none;
  cursor: pointer;
`;

export const TodoItem = styled.div`
  height: 40px;
  line-height: 40px;
  width: 100%;
  margin: 0 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h2`
  padding: "0 24px";
  color: ${({ fontColor }) => fontColor};
`;
