import useAuth from '../../../hooks/useAuth';
import BusinessRegisterForm from './business/BusinessRegisterForm';
import GraduateRegisterForm from './graduate/GraduateRegisterForm';

// ----------------------------------------------------------------------

export default function SignUpForm({ role }: any) {
  const { register } = useAuth();

  const onSubmit = async (data: any) => {
    try {
      // await register(data.email, data.password, data.firstName, data.lastName);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {role === 'business' && <BusinessRegisterForm onSubmit={onSubmit} />}
      {role === 'graduate' && <GraduateRegisterForm onSubmit={onSubmit} />}
    </>
  );
}
