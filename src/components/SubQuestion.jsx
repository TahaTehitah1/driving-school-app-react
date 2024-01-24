export default function SubQuestion({ subQuestion }) {
    let responses = subQuestion.responses.map(res => {
        return (
            <div key={res}>
                <input type="radio" name={subQuestion.question} value={res} />
                <label htmlFor={subQuestion.question}>{res}</label>
            </div>
        );
    });
    return (
        <fieldset>
            <legend>{subQuestion.question}</legend>
            {responses}
        </fieldset>
    );
}