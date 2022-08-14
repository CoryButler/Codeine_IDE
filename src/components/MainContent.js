import Card from "./Card";
import Documentation from "./Documentation";
import Ide from "./Ide";

export default function MainContent() {
    return (
        <div className="main-content">
            <Ide />
            <Card title="Documentation" body={<Documentation />} style={{margin: "32px auto"}} />
        </div>
    );
}