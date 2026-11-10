# JasonNguyenLearningAngularF26

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## API

Part 1:
I used MySafeInfo Primate Species. Documentation: https://mysafeinfo.com/api/data/primatespecies

Example: https://mysafeinfo.com/api/data/primatespecies

Part 3:
I chose Option A, HttpClient with an Observable. The service subscribes and sets a signal so that the loading and error states are simple signals to control.
The simple signal still drives add, edit, and delete which I found easier than httpResource.

Part 4:
My adds, edits and deletes only change the signal in memory, and nothing is sent to the API, which is read only. When the page is refreshed, the app starts again and loads the original API data, so my local changes are gone.
