import PageForm from "./components/PageForm";

function App() {
  return (
    <div className="bg-red bg-fixed w-screen h-screen">
    <div className="bg-[url('/images/bg-intro-mobile.png')] sm:bg-[url('/images/bg-intro-desktop.png')] flex flex-col md:flex-row md:justify-center items-center px-6 md:px-12 lg:px-28 gap-4 bg-fixed w-screen h-screen overflow-y-auto py-20">
      <div className="w-full md:max-w-1/2 md:w-1/2 text-center md:text-left mb-12">
        <p className="font-bold text-4xl pb-6">Learn to code by watching others</p>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great,but understanding how developers think is invaluable.</p>
      </div>
      <div className="md:w-1/2 w-full">
        <PageForm/>
      </div>
      </div>
    </div>
  );
}

export default App;
