const cls = (classes: Array<string | undefined>) => classes.filter((c) => !!c).join(' ');

export default cls;

interface ClassNamesObject {
  [key: string]: boolean,
}

const classNames = (classes: ClassNamesObject, additionalClassNames?: string) => {
  const classNames = Object.entries(classes)
    .filter(([, use]) => use)
    .map(([className]) => className);
    if (additionalClassNames) {
      classNames.push(additionalClassNames);
    }
    return classNames.join(' ');
};

export {
  classNames,
};
