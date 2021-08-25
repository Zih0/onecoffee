import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import useModal from '../../hooks/useModal';
import Button from '../Button';
import LoginModal from '../Modal/LoginModal';

const Container = styled.div`
  height: 2rem;
  margin: 2rem 3rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 300;
  .header-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 2rem;
    }
  }

  .header-auth {
    display: flex;
    align-items: center;
    gap: 2rem;

    .header-login {
      font-size: 1.2rem;
      transition: all 0.3s;
      border-bottom: transparent;
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid #000;
      }
    }
  }
`;

function Header() {
  const { currentUser } = useContext(AuthContext);
  const { openModal, ModalPortal } = useModal();

  return (
    <Container>
      <Link to="/">
        <div className="header-logo">
          <FontAwesomeIcon icon={faCoffee} />
          <p>커피한잔</p>
        </div>
      </Link>
      <div className="header-auth">
        {currentUser ? (
          <div>mypage</div>
        ) : (
          <>
            <p className="header-login" onClick={openModal}>
              로그인
            </p>
            <Link to="signup">
              <Button size="md">회원가입</Button>
            </Link>
          </>
        )}
      </div>
      <ModalPortal>
        <LoginModal />
      </ModalPortal>
    </Container>
  );
}

export default Header;
