import { Navigation } from '../../components/ui/navigation/Navigation';
import { Footer } from '../../home/components/Footer';


export const ProgrammingPg = () => {
  return (
    <div id="programming" className="flex flex-col items-center  min-h-screen justify-start">
      <Navigation />

      <main className="w-full min-h-screen bg-[#DAD0DC]">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 md:py-10 lg:px-8">
          <h1>Programming </h1>
          {/* Content for programming projects goes here */}
        </div>
      </main>

      <Footer />
    </div>
  );
}