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

## Lazy loading

**Before:**
Initial chunk files | Names         |  Raw size | Estimated transfer size
main-LYEIE6QA.js    | main          | 325.37 kB |                85.19 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 325.37 kB |                85.19 kB

Application bundle generation complete. [2.543 seconds] - 2026-11-17T03:15:11.037Z

Output location: C:\Users\jason\PhpstormProjects\Jason_Nguyen_Learning_AngularF26\dist\JasonNguyenLearningAngularF26

**After:**
Initial chunk files | Names         |  Raw size | Estimated transfer size
chunk-UEJWKR2S.js   | -             | 267.57 kB |                73.16 kB
chunk-DVLYVRLF.js   | -             |  48.65 kB |                10.70 kB
main-M4GFZXNY.js    | main          |   9.43 kB |                 3.03 kB
styles-5INURTSO.css | styles        |   0 bytes |                 0 bytes

                    | Initial total | 325.65 kB |                86.90 kB

Lazy chunk files    | Names         |  Raw size | Estimated transfer size
chunk-H6YKFN7C.js   | monkey-detail |   1.25 kB |               627 bytes
chunk-YR6QDBT7.js   | monkey-form   |  88 bytes |                88 bytes

Application bundle generation complete. [1.573 seconds] - 2026-11-17T03:25:00.114Z

Output location: C:\Users\jason\PhpstormProjects\Jason_Nguyen_Learning_AngularF26\dist\JasonNguyenLearningAngularF26

Explaining: The detail page and edit form now load only when someone visits them, so the first download
is smaller. The monkey list still loads right away because it's the first page people see.

## Lifecycle

Reading this.id() in the constructor: I got a compiled error on Angular which was "X [ERROR] NG8118: `id` is a required `input` and does not have a value in this context. [plugin angular-compiler]".
The router creates the component first and the id hasn't arrived from the URL yet, so there is no value yet while the constructor is running.
By the time ngOnInit runs, the input will already be set making reading this.id() work.

What made ngOnDestroy run: It ran each time I left the detail page, by clicking back on the page.
This tells me the router destroys the page component when you navigate away from it, and it creates a whole new one when you visit, instead of keeping it alive in the background.

## localStorage

I store the ids of the monkeys the user saved and their dark mode setting because that is information the user
created and would be inconvenient to set up again after a refresh. The reason why monkey data is not stored from
the API is due to it being fetched fresh on every page that is loaded. Something that must never be stored
in a localStorage is anything private such as login or passwords because any script that is running can be read
on the page.
