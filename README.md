1. Clone the repository.
2. Adjust the version of vitest in `package.json`.
3. Run `npm i`.
4. Run test with `npm run test`.

With vitest from 2.0.5 to 2.1.0-beta.6, running test prints "I'm in test". With vitest from 2.1.0-beta.7 to 2.1.1, running test prints "I'm the production worker.".

Bug report at https://github.com/vitest-dev/vitest/issues/6566
