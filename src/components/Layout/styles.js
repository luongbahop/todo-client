import styled from 'styled-components';
export const MenuWrap = styled.div`
  font-size: 2em;
  text-align:center;
  position:fixed;
  display:block;
  top:0;
  left:0;
  right:0;
  padding: 8px 0;
  border-bottom: 1px solid #eeeeee;
  background:#fff;
  z-index:999
`;
export const MenuWrapContainer = styled.div`
  max-width:1127px;
  margin: auto;
`;

export const MenuUl = styled.ul`
list-style:none;
float:left;
`;

export const MenuLi = styled.li`
float:left
`;