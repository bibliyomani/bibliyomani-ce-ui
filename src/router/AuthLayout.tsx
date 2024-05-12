// @ts-nocheck
import { AuthContext, AuthContextInterface } from 'context/AuthContext';
import AuthorizationState from 'enum/AuthorizationState';
import AuthRole from 'enum/AuthRole';
import React from 'react';
import { Navigate } from 'react-router-dom';
import MainRouteContainer from './MainRouteContainer';

const REJECTED_ROLE = AuthRole.STAFF_ROLE;

const authorityMap: { [key in AuthorizationState]: JSX.Element } = {
  [AuthorizationState.NOT_AUTHENTICATED_NOT_AUTHORIZED]: <Navigate to={'/login'} replace />,
  [AuthorizationState.AUTHENTICATED_AND_AUTHORIZED]: <MainRouteContainer />,
};

const AuthLayout = () => {
  // const {
  //   auth: { roles = [] },
  // }: AuthContextInterface = useContext(AuthContext);
  //
  // const roleMustBeExists = ((roles.length >= 1) | 0) * 2;
  // const anyRoleMustNotMatchWithRejectedRole = ((roles.length >= 1 && !Object.values(roles)?.includes(REJECTED_ROLE)) | 0) * 3;
  //
  // const flag: AuthorizationState = roleMustBeExists | anyRoleMustNotMatchWithRejectedRole;
  // return authorityMap[flag];
  return <MainRouteContainer />;
};

export default AuthLayout;
