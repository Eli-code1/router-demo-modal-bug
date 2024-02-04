# Instructions to see bug

I created a project based off the default template for `expo-router apps` by running `npx create-expo-app@latest --template tabs@50` and implemented the issue I'm having in my app there. Here's how you can see it!

1. Run the app in Expo Go
2. Click on the `Stack` tab
3. Click on `Settings` to open the modal
4. Click on `Open Second Page`. Right here, the modal doesn't close, even though I'm pushing to the next page.
5. You can close the modal and see the second page _did_ open, but the modal didn't close (it used to in v2).

Confession: This is my first issue filed in a large public repo. Sorry if I screw up something here!
