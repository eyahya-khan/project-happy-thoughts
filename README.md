# Happy Thoughts

npm install --save a11y-react-emoji
npm install moment


## Requirements 🧪

Your project should fulfill the **🔵  Blue Level** and all of the **General Requirements.** Use the **🔴  Red Level** and **⚫  Black Level** to push your knowledge to the next level!

### **General Requirements**

### **🔵  Blue Level (Minimum Requirements)**

- Your page should follow the design as closely as possible
- You should list the most recent thoughts at the top and older thoughts at the bottom (sorted)
- Your thoughts should show the content of the message and how many likes they've received
- You should have a form to post new thoughts
- You should implement the heart button to send likes on a thought

### **🔴  Red Level (Intermediary Goals)**

- Show a count below the form input that updates as the user types and shows how many characters are remaining. Make it go red when the user has typed over 140 characters
- When POSTing a new thought, if the message was empty, too long, or too short, you get an error message back from the API. Use this to set some sort of `error` state to show a friendly message to your user. (Hint: Use the network tab of the developer tools in your browser)

### **⚫  Black Level (Advanced Goals)**

- Handle loading states
    - **Hint**
        
        When you initially fetch the list of recent thoughts, it might take a little time to get the response back from the API. During this time, you could show a loading message or spinner of some sort on the page. Use something like `const [loading, setLoading] = useState(true)` to make it so the page is loading by default, then call `setLoading(false)` once you get the response back from the API.
        
        With the new thought form and the heart button, you could choose to also show a loading state, or you could opt to do an [optimistic update](https://dev.to/tiagodcosta/being-optimistic-in-ui-511k) which means you update the UI before the API request has succeeded (making the assumption that it will be successful).
        
- Keep count of how many different posts you have liked (different from how many times a post has been liked). Keep count and display it in some way. You could even go as far as to store this number in [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) so that when the page is reloaded, the initial state can be set from the number you've stored.
- Add an animation for when a new thought is submitted and appears in the list below

## View it live

Every project should be deployed somewhere. Be sure to include the link to the deployed project so that the viewer can click around and see what it's all about.
