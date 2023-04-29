import IRoute from '@Interface/IRoute';

export default function PrivateRoute(route: IRoute) {
  const token = localStorage.getItem('token');
  const { permission } = useSelector((state) => state.permission);
  const dispatch = useDispatch();

  return (
    <Route
      path={path}
      render={(props) =>
        token ? (
          hasPermission(permissionType) ? (
            <Component {...props} />
          ) : (
            <Redirect to="/dashboard" />
          )
        ) : (
          <Redirect to="/map" />
        )
      }
    />
  );
}
