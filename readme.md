This aims to reproduce the wonky behaviour of firestore failing to authenticate when running under test by jest. This behaviour does not occur when running directly.

does not cause bug:

```
npm run no-bug
```

causes bug

```
npm run bug
```

Make sure you have firebase emulators set ut and connected on the right ports (check repo.js) and using the correct project id (otherwise they will not show up in the emulator)
