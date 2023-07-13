import useUser from '../../hooks/useUser';

const Profile = () => {
  const { payload } = useUser();
  return (
    <section className="flex justify-center">
      <div className="w-3/4">
        <h3>User Details</h3>
        <p className="my-1">
          Name:{`${payload?.detail?.firstName} ${payload?.detail?.middleName ?? ''} ${payload?.detail?.lastName}`}
        </p>
        <p className="my-1">
          Date of Birth:
          {`${
            payload?.detail?.dateOfBirth
              ? new Date(payload?.detail?.dateOfBirth)?.toISOString().split('T')[0]
              : 'Not Available'
          }`}
        </p>
        <p className="my-1">Gender:{payload?.detail?.gender}</p>
        <p className="my-1">Email:{payload?.email}</p>
        <p className="my-1">Mobile Number:{payload?.mobileNumber}</p>
      </div>
    </section>
  );
};

export default Profile;
