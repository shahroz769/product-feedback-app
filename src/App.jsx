import { Route, Routes } from "react-router-dom";
import Home from "@pages/Home.jsx";
import FeedbackDetail from "@pages/FeedbackDetail.jsx";
import Roadmap from "@pages/Roadmap.jsx";
import NewFeedback from "@pages/NewFeedback.jsx";
import EditFeedback from "@pages/EditFeedback.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feedbackdetail" element={<FeedbackDetail />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/newfeedback" element={<NewFeedback />} />
            <Route path="/editfeedback" element={<EditFeedback />} />
        </Routes>
    );
}

export default App;
