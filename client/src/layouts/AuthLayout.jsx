import Card from "../components/ui/Card";

const AuthLayout = ({ title, children }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8">
          {title}
        </h2>

        {children}
      </Card>
    </div>
  );
};

export default AuthLayout;