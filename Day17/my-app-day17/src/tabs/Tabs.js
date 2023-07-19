import { useState } from "react";

const Tabs = () => {
    const [tabIndex, setTabIdenx] = useState(0);

    const handleTab = (paramTabIndex) => {
        // Thay đổi state tabIndex
        setTabIdenx(paramTabIndex);
    };
    return (
        <>
            <div className="tab">
                <button className="tablinks" onClick={() => handleTab(0)}>
                    London
                </button>
                <button className="tablinks" onClick={() => handleTab(1)}>
                    Paris
                </button>
                <button className="tablinks" onClick={() => handleTab(2)}>
                    Tokyo
                </button>
            </div>

            <div className="tab_content">
                {tabIndex == 0 && (
                    <div>
                        <h3>London</h3>
                        <p>
                            asdfhsadf alsfdhaowif askdfasdofij asdklfsakdjf
                            ;qlkwejrke
                        </p>
                    </div>
                )}

                {tabIndex == 1 && (
                    <div>
                        <h3>Paris</h3>
                        <p>
                            afdfa sd2234 asdfhsadf alsfdhaowif askdfasdofij
                            asdklfsakdjf ;qlkwejrke
                        </p>
                    </div>
                )}
                {tabIndex == 2 && (
                    <div>
                        <h3>Tokyo</h3>
                        <p>
                            asdf 315hfj af143 asdfhsadf alsfdhaowif askdfasdofij
                            asdklfsakdjf ;qlkwejrke
                        </p>
                    </div>
                )}
            </div>
        </>
    );
};

export default Tabs;
