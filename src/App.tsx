import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="h-full bg-gradient-to-t from-cyan-500  to-red-400">
      <div class=" text-4xl scale-125 sticky bg-gray-400 font-bold text-white skew-x-3 top-11 w-28 left-72">
        provider
      </div>
      <div class="w-40 h-40 sticky top-28 left-[80vw] blur-[900px] scale-[900px] bg-blue-400"></div>
    </div>
  );
};

export default App;
