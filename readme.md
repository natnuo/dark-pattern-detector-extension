<div align="center">
  <img src="https://github.com/user-attachments/assets/4a5bfcf0-9df8-46e0-b52d-4aa559bb48cd" alt="" width="500"></img>
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

<h2>Screenshots</h2>

<div align="center">
  <img src="https://github.com/user-attachments/assets/6f5bb1ec-c16a-4ac8-a632-b7a0f347f1ac" alt="" width="33%"></img>
  <img src="https://github.com/user-attachments/assets/8b559248-7d23-4b04-b937-df09f752dc4e" alt="" width="33%"></img>
  <img src="https://github.com/user-attachments/assets/8b7e2a4f-2ede-4513-ae91-e580705799d4" alt="" width="33%"></img>
</div>

<h2>Installation</h2>

Estimated Time to Complete: 3 minutes.

Download one of the compressed files from the latest release (see <a href="https://github.com/natnuo/dark-pattern-detector-extension/releases/">our releases</a>). We recommend you download the latest version because older versions may be incompatible with the backend server. Save the downloaded file to a location you will not accidentally delete (as doing so would break the extension).

Next, extract the compressed file. Save the location of the resulting folder.

In your Chromium browser, find the extension management page. The images below represent the location of the page in two Chromium browsers (Google Chrome and Brave). Other Chromium browsers should be similar. A Chromium browser is REQUIRED for this extension (nearly all mainstream, non-Firefox browsers are compatible).

<img src="https://github.com/user-attachments/assets/b1b1a194-c5a0-43e3-9d2f-8dbf57781982" alt="" width="58%"></img>
<img src="https://github.com/user-attachments/assets/16a062b2-fda4-42a7-b025-c71fd4d06c26" alt="" width="37%"></img>

Picture 1, <b>Google Chrome:</b> Triple dots → Extensions → Manage Extensions

Picture 2, <b>Brave:</b> Hamburger → Extensions

Within the extension manager, enable "Developer mode".

<img src="https://github.com/user-attachments/assets/e6509372-5bb0-4a8b-8d0b-61eb32512c91" alt="" width="60%"></img>
<img src="https://github.com/user-attachments/assets/6d32ff4d-fd40-45b7-b94c-360ac6be8480" alt="" width="37%"></img>

Select "Load unpacked", and when prompted, select the folder that was result of our extraction earlier.

<img src="https://github.com/user-attachments/assets/86e43e66-aebf-4cc4-a5d8-8860bae38efa" alt="" width="37%"></img>
<img src="https://github.com/user-attachments/assets/6b967228-1641-4f60-9fc9-995f952472c5" alt="" width="60%"></img>

Yay! The extension is now active. You can view what each dark-pattern highlight color represents by clicking on the extension.

Now, each time you visit a page, any dark patterns found should be highlighted in ~7-20 seconds (depending on the size of the page, the purpose of the 7+ second delay is to reduce the load on our servers, which are costly).

Think smart, and stay safe!

<br/>

Sincerely,

The Dark Pattern Detector Team

<div align="center">
  <img src="https://github.com/user-attachments/assets/325361ce-6895-4466-8f40-14d07adc96e5" alt="" width="888"></img>
</div>
