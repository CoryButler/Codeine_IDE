import Codeine from "../data/Codeine";

export default function Documentation() {
    const operations = Codeine.getOperations().map((op, i) => {
        return (
            <div className="documentation--row" key={i}>
                <p>{new op.op().key} {new op.op().description}</p>
                <small>{new op.op().example}</small>
            </div>
        );
    });

    return (
        <>
            <ul className="documentation--info-section">
                <li><p className="documentation--info">[operation] [var_0] [var_1?]</p></li>
                <li><p className="documentation--info">The result of any operation is always applied to `[var_0]`.</p></li>
                <li><p className="documentation--note">- NOTE: - Each line may only have one operation.</p></li>
                <li><h4>Available Operations:</h4></li>
            </ul>
            <div>
                {operations}
            </div>
        </>
    );
}