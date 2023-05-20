import { useState } from "react";
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export function App() {
  
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = option => {
        switch (option) {
         case 'good':
           setGood(prevGood=>prevGood + 1);
           break;
         case 'neutral':
           setNeutral(prevNeutral => prevNeutral + 1);
           break;
         case 'bad':
           setBad( prevBad => prevBad + 1);
           break;
         default:
           return;  
       }
     };

    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (total > 0) {
            return Math.round((good /total) * 100);
        } else {
            return 0;
        }
    };

        const totalFeedbacks = countTotalFeedback();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={onLeaveFeedback}
                    />
                </Section>

                <Section title="Statistics">
                    {totalFeedbacks > 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={countTotalFeedback()}
                            positivePercentage={countPositiveFeedbackPercentage()}
                        />
                    ) : (
                        <Notification message="There is no feedback" />
                    )}
                </Section>
                </>
        );
    }


// export class App extends Component {
    //     state = {
    //         Good: 0,
    //         Neutral: 0,
    //         Bad: 0,
    //     };
    
    //     onLeaveFeedback = buttonValue => {
    //         this.setState(prevState => ({
    //             [buttonValue]: prevState[buttonValue] + 1,
    //         }));
    //     };
    
    //     countTotalFeedback = () => {
    //         const { Good, Neutral, Bad } = this.state;
    //         return Good + Neutral + Bad;
    //     };
    
    //     countPositiveFeedbackPercentage = () => {
    //         const total = this.countTotalFeedback();
    //         if (total > 0) {
    //             return Math.round((this.state.Good / total) * 100);
    //         } else {
    //             return 0;
    //         }
    //     };
    
    //     render() {
    //         const { Good, Neutral, Bad } = this.state;
    //         const totalFeedbacks = this.countTotalFeedback();
    //         const positivePercentage = this.countPositiveFeedbackPercentage();
    
    //         return (
    //             <>
    //                 <Section title="Please leave feedback">
    //                     <FeedbackOptions
    //                         options={['Good', 'Neutral', 'Bad']}
    //                         onLeaveFeedback={this.onLeaveFeedback}
    //                     />
    //                 </Section>
    
    //                 <Section title="Statistics">
    //                     {totalFeedbacks > 0 ? (
    //                         <Statistics
    //                             good={Good}
    //                             neutral={Neutral}
    //                             bad={Bad}
    //                             total={totalFeedbacks}
    //                             positivePercentage={positivePercentage}
    //                         />
    //                     ) : (
    //                         <Notification message="There is no feedback" />
    //                     )}
    //                 </Section>
    //                 </>
    //         );
    //     }
    // }
    
