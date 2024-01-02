/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./App.css";
import Header from "./components/header";


function App() {
    return (
        <div className="header">
            <div>
                <Header />
            </div>
            <div className="flex gap-4 justify-around rounded content-center items-center font-bold p-8">
                <div className="bg-slate-400 p-1 shadow-md hover:bg-slate-200 transition-all rounded h-80 w-60">
                    <h1 className="text-2xl">Halllo bree</h1>
                </div>
                <div className="bg-slate-400 p-1 shadow-md hover:bg-slate-200 transition-all rounded h-80 w-60">
                    <h1 className="text-2xl">Halllo bree</h1>
                </div>
                <div className="bg-slate-400 p-1 shadow-md hover:bg-slate-200 transition-all rounded h-80 w-60">
                    <h1 className="text-2xl">Halllo bree</h1>
                </div>
                <div className="bg-slate-400 p-1 shadow-md hover:bg-slate-200 transition-all rounded h-80 w-60">
                    <h1 className="text-2xl">Halllo bree</h1>
                </div>

            </div>
        </div>
    )
}

export default App;
