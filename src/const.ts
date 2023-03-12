export enum DnDItems {
  PALETTE_ELEM = 'paletteElem',
  CANVAS_ELEM = 'canvasElem',
}

export enum AppModes {
  RUNTIME = 'runtime',
  CONSTRUCTOR = 'constructor',
}

export enum CalcBlocks {
  DISPLAY = 'display',
  OPERATORS = 'operators',
  DIGITS = 'digits',
  EQUAL = 'equal',
}

export const CalculatorOperations = {
  '/': (prevValue: number, nextValue: number) => prevValue / nextValue,
  '*': (prevValue: number, nextValue: number) => prevValue * nextValue,
  '+': (prevValue: number, nextValue: number) => prevValue + nextValue,
  '-': (prevValue: number, nextValue: number) => prevValue - nextValue,
};
