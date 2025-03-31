
import Layout from "@/components/layout/Layout";
import LoginForm from "@/components/auth/LoginForm";

const Login = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto zen-box">
          <h1 className="text-2xl font-serif font-bold text-center mb-6 text-hikari-burgundy">
            Entrar em sua conta
          </h1>
          <LoginForm />
        </div>
      </div>
    </Layout>
  );
};

export default Login;
