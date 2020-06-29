# GhibliAPI

### Install everything

```zsh
$ npm i
```

### Start the project

```zsh
$ yarn start
```

### Start the tests

```zsh
$ yarn test
```

---

I used `create-react-app` to set this up.

I tried to setup a good "start" for a big react project. I will explain my thoughts :

`Redux` is aside for it to be easily searchable and usable. Actions and Reducers are made to grow in size whitout being messy since it's been chunked with the combined reducers; you could even cut down `movies` and have two differents files for the detail and the list but I thinks it's alright merging them together.
I would also recommand to alias `@redux` in the webpack/rollup config because of the choice to put it aside, exemple: avoid side effect with import.

`Views` would grow to have folders that points the views chunk itself, `Movies`, `People`, etc...

`Components` is empty so far but would be filled with shared component such as `Header`, `Footer` that are commonly used and are the same between features and/or root components.

`CallAPIMiddleware`, I did this since it was to start a "big project", I feel like it's a good way of handling API fetching since you can add Loaders, control where you are in the promise (pending, success, failure) and act accordingly.

I'm sorry for the tests I fell short for them, I wanted to do the core before them, it's also been a long time that I haven't used Jest and I think I lost most of it.
