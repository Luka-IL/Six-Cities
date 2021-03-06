import React from "react";
import {ActionCreator} from "../../store/action";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {onClickSingIn} from "../../utils";
import {AppRoute} from "../../const";

const Header = (props) => {
  const {email, authorizationStatus, redirectToRoute} = props;


  const onMainClick = (evt) => {
    evt.preventDefault();
    redirectToRoute(AppRoute.ROOT);
  };

  const onClickOnUser = (evt) => {
    evt.preventDefault();
    onClickSingIn(authorizationStatus, redirectToRoute);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" onClick={onMainClick}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#" onClick={onClickOnUser}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {email
                    ? <span className="header__user-name user__name">{email}</span>
                    : <span className="header__login">Sign in</span>}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  email: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
};


const mapStateToProps = ({USER}) => ({
  email: USER.email,
  authorizationStatus: USER.authorizationStatus
});

const mapDispatchToProps = (dispatch) => ({
  redirectToRoute(url) {
    dispatch(ActionCreator.redirectToRoute(url));
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
