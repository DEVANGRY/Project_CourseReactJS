import { useState } from "react";

const OpenHour = () => {
    const [hour, setHour] = useState(8);

    return <>{hour >= 8 ? "Giờ làm việc" : "Giờ nghỉ ngơi"}</>;
};
export default OpenHour;
