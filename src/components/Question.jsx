import SubQuestion from "./SubQuestion";

export default function Question({ question }) {

    let content = question.map(subQuestion => <SubQuestion key={subQuestion.question} subQuestion={subQuestion} />);
    return (
        <div className="question">
            <div>
                <img src="/images/image-demo.jpg" alt="" />
            </div>
            {content}
            <button>تأكيد</button>
        </div>
    );
}
