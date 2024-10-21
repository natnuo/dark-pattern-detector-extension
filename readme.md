<div align="center">
  <h1>Dark Pattern Detector</h1>
  <p>Browse the web confidently. Do not let websites manipulate you.</p>
</div>

Note that this is the FRONTEND EXTENSION element of the Dark Pattern Detector. For the backend code, website code, and LLMs, see <a href="https://github.com/adazing/dark_pattern_detector">https://github.com/adazing/dark_pattern_detector</a>

<h2>Functionality</h2>

The Dark Pattern Detector finds, classifies, and highlights the following dark patterns:

<ol>
  <li>
    Misdirection (Confirmshaming, Trick Questions)
    <ul>
        <li>"No thanks, I prefer paying full price." (Makes declining seem shameful)</li>
        <li>"By not unchecking this box, you agree to enroll in our exclusive rewards program." (Easily confusable)</li>
    </ul>
  </li>
  <li>
    Social Proof (Activity Messages)
    <ul>
        <li>"92 people are viewing this product right now!" (Makes the product seem more popular, but use caution... these "Activity Messages" are very often fake)</li>
    </ul>
  </li>
  <li>
    Urgency (Countdown Timers, Limited-Time Messages)
    <ul>
        <li>"Limited Time Offer! Christmas Sale! 50 minutes left!" (However, why should "50 minutes left" influence your decision to buy something? "50 minutes left" does not change the quality of the product!</li>
        <li>Note that many limited-time messages are often classified, not unintentionally, as social proof dark patterns or vice versa. There is significant overlap between the two categories.</li>
    </ul>
  </li>
  <li>
    Scarcity (Low-Stock Messages, High-Demand Messages)
    <ul>
        <li>"Only 5 left in stock!" (Beware... these "Low-Stock Messages" are very often fake)</li>
        <li>Note that, for similar reasons as above, high-demand messages are also often classified, not unintentionally, as social proof dark patterns or vice versa.</li>
    </ul>
  </li>
</ol>
