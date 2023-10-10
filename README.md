#### Explain your design choices and how you used CSS to realize those changes.

**Design Choices:**

1. **Font and Typography**: I chose the "Arial" font for simplicity and readability. The font size for the game title and player names was selected to be large and easily visible. Player names are displayed below their respective images to provide clear identification.

2. **Color Scheme**: I used a neutral background color (#f0f0f0) to keep the design clean. The game title and player names use a dark gray (#333) for improved contrast and readability. The button has a blue color (#007bff) to make it stand out and indicate it's clickable.

3. **Image Presentation**: The player images are displayed in a circular format with a border and a subtle box shadow to give them a visually appealing and interactive look. The use of the `alt` and `title` attributes enhances accessibility and provides information about the players' choices.

**CSS Usage:**

1. **Font and Typography**:

   - I set the `font-family` to "Arial, sans-serif" for better cross-browser compatibility.
   - `font-size` and `color` properties were used to style the text elements.

2. **Color Scheme**:

   - I set the background color using the `background-color` property.
   - I applied background color change on button hover using the `:hover` pseudo-class.
   - For titles, the `color` property was used to specify the text color.

3. **Image Presentation**:

   - To create circular images, I set `border-radius` to 50%.
   - A `border` and `box-shadow` were added to images to give them a polished look.
   - Player names (`<p>` elements) were styled using the `font-size` and `color` properties.

4. **Responsiveness**:
   - I included a media query to adjust image sizes and text size for screens with a maximum width of 600 pixels. This makes the interface responsive and adapts to smaller screens.

#### Include screenshots if needed.
