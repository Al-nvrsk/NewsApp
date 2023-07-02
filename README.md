## Project run

```
npm install - installing dependencies
npm run start:dev - staring server and frontend part in dev mode
```

----

## Scripts

- `npm run start` -  starting frontend part dev mode
- `npm run start:dev:server` - starting  backend server
- `npm run build:prod` - building in prod mode
- `npm run lint:ts` - checking ts files by EsLint
- `npm run lint:ts:fix` - fixing errors in ts files by EsLint 
- `npm run lint:scss` - checking scss files style by StyleLint
- `npm run lint:scss:fix` - fixing scss files style by StyleLint
- `npm run test:unit` - unit testing  with jest
- `npm run test:ui` - screenshot testing with loki
- `npm run test:ui:ok` - approving new screenshots
- `npm run test:ui:ci` - screenshot testing in CI
- `npm run test:ui:report` - generating report of screenshot tests result
- `npm run test:ui:html` - generating report of screenshot tests result in html
- `npm run storybook` - starting Storybook
- `npm run storybook:build` - building storybook
----

## Project architecture

The project was written in accordance with the Feature sliced design methodology

Link to Documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with translations

The project uses the i18next library to work with translations.
Translation files are stored in public/locales.

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

 Link to Documentation  - [i18next](https://react.i18next.com/)

----

## Tests

In project was used 4 test types:
1) unit tests with jest 
2) Component tests with React testing library
3) Screenshot tests with loki
4) e2e tests with Cypress 

----

## Lint

The project uses eslint to check typescript code and stylelint to check files with styles.

For strict control of the main architectural principles was used
eslint plugin *eslint-plugin-forapp-plugin*,
which contains 3 rules:

1) path-checker - prohibits the use of absolute imports within one module
2) layer-imports - checks the correct use of layers in terms of FSD
    (e.g. widgets cannot be used in features and entities)
3) public-api-imports - allows import from other modules only from public api. It has auto fix.

----
## Storybook

The project describes story cases for each component.
Server requests are mocked using storybook-addon-mock.

A file with stories is created next to the component with the extension .stories.tsx

for start storybook use command:
- `npm run storybook`

----

## CI pipeline

The github actions configuration is located in /.github/workflows.
In CI, all types of tests, project and storybook assembly, linting are uses.

----

### Work with data

Interaction with data is carried out using the redux toolkit.
Whenever possible, reusable entities should be normalized using the EntityAdapter

Server requests are sent using [RTK query](/src/shared/api/rtkApi.ts)

For asynchronous connection of reducers (so as not to pull them into a common bundle), use
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)

----

### Work with feature-flag

Allow use feature flags only with toggleFeatures helper. Object with options is passed to it
```typescript
{
    name: //feature flag name,
    on: //a function that will work after enabling the feature
    of: //function that will work after the feature is turned off
}
```

To automatically remove a feature, use the remove-feature.ts script,
which takes 2 arguments
1. The name of the feature flag to be removed
2. Status (on\off)

----
