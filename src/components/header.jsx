const Header = () => {
    return (
        <div className="flex bg-orange-400 p-4">

            <div className="bg-black flex p-1 pr-2 rounded-md">
                <div className="flex px-2 py-1 my-1 text-4xl ml-1 rounded-xl bg-slate-50 ">
                    <span className="shadow-lg rounded-full mb-1 hover:pr-2 hover:scale-125 transition-all hover:mr-1 mr-1 ">
                        🤙🏻
                    </span>
                    <p className="hover:text-slate-700 hover:scale-125  transition-all  ">
                        B
                    </p>
                    <p className="hover:text-color-primary hover:scale-125  transition-all  ">
                        a
                    </p>
                    <p className="hover:text-color-accent hover:scale-125  transition-all  ">
                        r
                    </p>

                    <p className="hover:text-color-primary hover:scale-125  transition-all  ">
                        u
                    </p>
                    <p className="hover:text-color-accent hover:scale-125  transition-all  ">
                        d
                    </p>
                    <p className="hover:text-color-primary hover:scale-125  transition-all  ">
                        a
                    </p>
                    <p className="hover:text-color-accent hover:scale-125  transition-all  ">
                        k
                    </p>
                </div>
                {/* halal */}

                <div className="bg-orange-500 flex px-2 py-1 my-1 text-4xl ml-1 rounded text-color-secondary ">
                    <p className="hover:text-color-primary hover:scale-125  transition-all  ">
                        ل
                    </p>

                    <p className="hover:text-color-light hover:scale-125  transition-all font-extrabold">
                        حلا
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Header