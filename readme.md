<div align="center">
  <h1>Dark Pattern Detector</h1>
  <p>Browse the web confidently. Do not let websites manipulate you.</p>
  <sub>Note that this is the FRONTEND EXTENSION element of the Dark Pattern Detector. For the backend code, website code, and LLMs, see <a href="https://github.com/adazing/dark_pattern_detector">https://github.com/adazing/dark_pattern_detector</a></sub>
</div>

<h2>Functionality</h2>

The Dark Pattern Detector finds, classifies, and highlights the following dark patterns:

<ol>
  <li>
    <b>Misdirection (Confirmshaming, Trick Questions)</b>
    <ul>
        <li>
          "No thanks, I prefer paying full price."
          <ul>
            <li>
              Makes declining seem shameful!
            </li>
          </ul>
        </li>
        <li>
          "By not unchecking this box, you agree to enroll in our exclusive rewards program."
          <ul>
            <li>
              Strange wording, easy to mix-up logic and accidentally join the exclusive rewards program.
            </li>
          </ul>
        </li>
    </ul>
  </li>
  <li>
    <b>Social Proof (Activity Messages)</b>
    <ul>
        <li>
          "92 people are viewing this product right now!"
          <ul>
            <li>
              Makes the product seem more popular, but use caution... these "Activity Messages" are very often fake!
            </li>
          </ul>
        </li>
    </ul>
  </li>
  <li>
    <b>Urgency (Countdown Timers, Limited-Time Messages)</b>
    <ul>
        <li>
          "Limited Time Offer! Christmas Sale! 50 minutes left!"
          <ul>
            <li>
              However, why should "50 minutes left" influence your decision to buy something? "50 minutes left" does not change the quality of the product!
            </li>
          </ul>
        </li>
        <li>Note that many limited-time messages are often classified, not unintentionally, as social proof dark patterns or vice versa. There is significant overlap between the two categories.</li>
    </ul>
  </li>
  <li>
    <b>Scarcity (Low-Stock Messages, High-Demand Messages)</b>
    <ul>
        <li>
          "Only 5 left in stock!"
          <ul>
            <li>
              Beware... these "Low-Stock Messages" are very often fake!
            </li>
          </ul>
        </li>
        <li>Note that, for similar reasons as above, high-demand messages are also often classified, not unintentionally, as social proof dark patterns or vice versa.</li>
    </ul>
  </li>
</ol>
