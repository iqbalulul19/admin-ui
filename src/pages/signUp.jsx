import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignUp from "../components/Fragments/FormSignUp";

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUpSuccess = (payload) => {
    console.log("Account created:", payload);
    navigate("/login");
  };

  return (
    <AuthLayout title="Create an Account">
      <FormSignUp
        onSuccess={handleSignUpSuccess}
        onNavigateLogin={() => navigate("/login")}
      />
    </AuthLayout>
  );
};

export default SignUpPage;