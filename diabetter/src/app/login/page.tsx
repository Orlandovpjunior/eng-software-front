import FormLogin from "@/components/FormLogin";
import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
export default function Login() {
  return (
    <main>
      <Header />
      <div className="h-full">
        <FormLogin />
      </div>
      <Footer />
    </main>
  );
}
