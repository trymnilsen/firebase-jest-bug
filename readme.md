This aims to reproduce the wonky behaviour of firestore failing to authenticate when running under test by jest. This behaviour does not occur when running directly.

does not cause bug:

```
npm run no-bug
```

causes bug

```
npm run bug
```

Make sure you have firebase emulators set ut and connected on the right ports (check repo.js).

Outputs for simplicity:

```
npm run no-bug

> firebase-emulator@1.0.0 no-bug /<fullpath>/firebase-emulator
> node index.js

Added dfgcPgSa2LrS7K6Q2U2Z
```

```

npm run bug

> firebase-emulator@1.0.0 bug /<fullpath>/firebase-emulator
> jest

 FAIL  test/test.js
  ✕ can create user (229 ms)

  ● can create user

    {"servicePath":"localhost","port":5002,"clientConfig":{},"fallback":true,"sslCreds":{"callCredentials":{}},"projectId":"project-id-here","firebaseVersion":"9.4.1","libName":"gccl","libVersion":"4.7.1 fire/9.4.1","ssl":false,"customHeaders":{"Authorization":"Bearer owner"},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"]}You need to pass auth instance to use gRPC-fallback client in browser. Use OAuth2Client from google-auth-library.

      10 |
      11 |     return (name, age) => {
    > 12 |         return adminApp.firestore().collection("users").add({
         |                                                         ^
      13 |             name,
      14 |             age
      15 |         });

      at new GrpcClient (node_modules/google-gax/src/fallback.ts:82:15)
      at new FirestoreClient (node_modules/@google-cloud/firestore/build/src/v1/firestore_client.js:94:25)
      at ClientPool.clientFactory (node_modules/@google-cloud/firestore/build/src/index.js:368:26)
      at ClientPool.acquire (node_modules/@google-cloud/firestore/build/src/pool.js:88:35)
      at ClientPool.run (node_modules/@google-cloud/firestore/build/src/pool.js:165:29)
      at Firestore.request (node_modules/@google-cloud/firestore/build/src/index.js:1086:33)
      at WriteBatch._commit (node_modules/@google-cloud/firestore/build/src/write-batch.js:463:32)
      Caused by: Error:
      at WriteBatch.commit (node_modules/@google-cloud/firestore/build/src/write-batch.js:426:23)
      at DocumentReference.create (node_modules/@google-cloud/firestore/build/src/reference.js:285:14)
      at CollectionReference.add (node_modules/@google-cloud/firestore/build/src/reference.js:2021:28)
      at createUser (repo.js:12:57)
      at Object.<anonymous> (test/test.js:4:12)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.153 s
Ran all test suites.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! firebase-emulator@1.0.0 bug: `jest`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the firebase-emulator@1.0.0 bug script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /<fullpath>/.npm/_logs/2020-11-16T16_33_16_019Z-debug.log

```
