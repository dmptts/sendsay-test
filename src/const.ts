export const DnDItems = {
  PALETTE_ELEM: 'paletteElem',
  CANVAS_ELEM: 'canvasElem',
};

export enum AppModes {
  RUNTIME = 'runtime',
  CONSTRUCTOR = 'constructor',
}

export const CalculatorOperations = {
  '/': (prevValue: number, nextValue: number) => prevValue / nextValue,
  '*': (prevValue: number, nextValue: number) => prevValue * nextValue,
  '+': (prevValue: number, nextValue: number) => prevValue + nextValue,
  '-': (prevValue: number, nextValue: number) => prevValue - nextValue,
  '=': (prevValue: number, nextValue: number) => nextValue,
};
