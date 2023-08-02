# ReproInvalidNxCache

> sharedGlobals contains root level files that should invalidate the cache for all projects. Note that tsconfig.base.json and the package.json lock files are handled behind the scenes by Nx so that when you modify the specific properties that affect your project, the cache is invalidated.
> https://nx.dev/concepts/more-concepts/customizing-inputs

Based on this I assume a dependency update should invalidate the cache.

The update of `@ngrx/eslint-plugin` from 16.0.1 to 16.1.0 breaks the linting but this is hidden by the cached linting result:

1. `npm run lint:withoutCache` -> succeeds
2. `npm run lint` -> succeeds
3. `npm run upgrade` -> upgrades `@ngrx/eslint-plugin` to broken 16.1.0
4. `npm run lint` -> succeeds by cache -> **should fail**
5. `npm run lint:withoutCache` -> fails