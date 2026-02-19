import Button from "../../components/atoms/Button";
import FormField from "../../components/molecules/FormField";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Sign in to CollabDocs
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="/register"
              className="text-primary-600 hover:text-primary-500"
            >
              create a new account
            </a>
          </p>
        </div>

        <form className="mt-8 space-y-6">
          <FormField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <FormField
            label="Password"
            name="password"
            type="password"
            placeholder="••••••••"
            required
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="text-primary-600 hover:text-primary-500">
                Forgot password?
              </a>
            </div>
          </div>

          <Button type="submit" className="w-full" size="lg">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}
