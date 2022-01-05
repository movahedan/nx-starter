module.exports = {
  groups: [
    ['builtin', 'external'],
    'internal',
    ['parent', 'sibling', 'index'],
    'type',
  ],
  pathGroups: [
    {
      pattern: '@root/ui',
      group: 'internal',
      position: 'after',
    },
  ],
  pathGroupsExcludedImportTypes: ['builtin', 'external'],
  'newlines-between': 'always',
  alphabetize: { order: 'asc', caseInsensitive: false },
  warnOnUnassignedImports: false,
};
