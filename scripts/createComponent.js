const path = require('path');
const { mkdir, open, appendFile } = require('node:fs/promises');

module.exports = async function() {
  const [componentName] = process.argv.slice(2);
  const basePath = path.join(__dirname, '..');

  const srcPath = path.join(basePath, 'src');
  const storiesPath = path.join(basePath, 'stories');

  const firstLetterOfComponent = componentName.charAt(0).toLowerCase();
  const componentDirName = firstLetterOfComponent + componentName.substring(1);

  const componentPath = path.join(srcPath, componentDirName);

  console.log(`Creating new component: ${componentName}`)

  const codeTemplate = `import { forwardRef } from 'react'
export interface ${componentName}Props extends React.HTMLProps<HTMLElement> {}

const ${componentName} = forwardRef<HTMLDivElement, ${componentName}Props>(({
  children,
  ...props
}, ref) => {
  return (
    <div ref={ref}>
      {children}
    </div>
  );
});

export default ${componentName}
  `

  const indexTemplate = `import ${componentName} from './${componentDirName}';

export type { ${componentName}Props } from './${componentDirName}';

export default ${componentName}
`;

  const entryAddition = `@import './${componentDirName}/${componentDirName}.scss;
`;
  const indexAddition = `export type { ${componentName}Props } from './${componentDirName}';
export { default as ${componentName} } from './${componentDirName}';
`;

  try {
    await mkdir(componentPath);
    const indexFileHandle = await open(path.join(componentDirName, 'index.ts'), 'wx');
    await indexFileHandle.writeFile(indexTemplate);
    indexFileHandle.close();

    const componentFileHandle = await open(path.join(componentDirName, `${componentDirName}.tsx`), 'wx');
    await componentFileHandle.writeFile(codeTemplate);
    componentFileHandle.close();

    const styleFileHandle = await open(path.join(componentDirName, `${componentDirName}.scss`), 'wx');
    await styleFileHandle.writeFile('// insert style definitions for this component here');
    styleFileHandle.close();

    await appendFile(path.join(srcPath, 'index.ts'), indexAddition);
    await appendFile(path.join(srcPath, 'entry.scss'), entryAddition);

  } catch (e) {
    console.warn(e);
  }

}()