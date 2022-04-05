# Customized Canvas Sketch Starter

This is a template created to help kickstart generative art using [Canvas Sketch](https://github.com/mattdesl/canvas-sketch/). It's very close to the official project but I've added some changes to make it work with the local configuration of NPM I use for local development.

This project exposes the project on port 8888. This is because my local Docker container where NPM exists on my machine exposes port 8888 from the container to my local machine. This is why the `npm run dev` command has the port option changed from the default port.

I also have updated the directory where generated art files live to `media`.


## Starting

To start a sketch, open this containing directory in the terminal and start the project like this:

```
npm run dev
```

Then open http://localhost:8888 in your browser.


## Documentation

See the documentation here: https://github.com/mattdesl/canvas-sketch/tree/master/docs
