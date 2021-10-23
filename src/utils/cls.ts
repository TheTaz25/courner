const cls = (classes: Array<string | undefined>) => classes.filter((c) => !!c).join(' ');

export default cls;
