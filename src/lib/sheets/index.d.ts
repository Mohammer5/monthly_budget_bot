export interface Position {
  row: string;
  column: number;
}

export interface NoPosition extends Position {
  row: 'N/A',
  column: -1
}
