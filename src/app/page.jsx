import Hero from "@/components/hero/Hero";
import Partners from "@/components/partners/Partners";
import About from "@/components/about/About";
import TrustlessAgreements from "@/components/trustlessAgreements/TrustlessAgreements";
import Services from "@/components/services/Services";
import Waitlist from "@/components/waitlist/Waitlist";
import ZK from "@/components/ZK";

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Partners />
      <About />
      <TrustlessAgreements />
      <Services />
      <Waitlist />
      {/* <ZK /> */}
    </div>
  );
}

export default App;

//  export default function LandingPage() {
//   return (
//     <section className="flex flex-col-reverse md:flex-row items-center gap-10">
//       <div className="flex-1 space-y-6">
//         <h1 className="text-5xl font-extrabold">Where Talent<br/>Meets Opportunity</h1>
//         <p className="text-gray-700">
//           Match with top talent or clients, submit your work with confidence, and get paid seamlessly—all in one platform.
//         </p>
//         <div className="space-x-4">
//           <a href="/signup" className="px-6 py-3 bg-black text-white rounded">Sign Up</a>
//           <button className="px-6 py-3 border rounded">Launch</button>
//         </div>
//       </div>
//       <div className="flex-1 flex justify-center">
//         <div className="w-64 h-64 bg-white rounded-full flex items-center justify-center shadow-lg">
//           <button className="p-4 bg-black text-white rounded-full">▶</button>
//         </div>
//       </div>
//     </section>
//   );
// }
