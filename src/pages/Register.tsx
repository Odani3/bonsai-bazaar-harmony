
import Layout from "@/components/layout/Layout";
import RegisterForm from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto zen-box">
          <h1 className="text-2xl font-serif font-bold text-center mb-6 text-hikari-burgundy">
            Criar uma nova conta
          </h1>
          <RegisterForm />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
