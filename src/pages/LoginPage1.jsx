import LoginBody from '../components/login/LoginBody';
import LoginLogo from '../components/login/LoginLogo';
import TitleApp from '../components/login/TitleApp';

function LoginPage({ loginSuccess }) {
  return (
    <div className='login-page'>
      <div className='title-app__header'>
        <TitleApp />
      </div>
      <div className='login-item'>
        <div className='login-logo'>
          <LoginLogo />
        </div>
        <div className='login-form'>
          <div className='login-form__content'>
            <LoginBody loginSuccess={loginSuccess} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
