/* I had to change Enum to const to run it using just node 23 
SyntaxError [ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX]:   x TypeScript enum is not supported in strip-only mode
*/
export const Colors = {
  red: "0xFF0000",
  green: "0x00FF00",
  blue: "0x0000FF",
};

type ColorNames = keyof typeof Colors;

export const getColorValue = (color: ColorNames): string => {
  return Colors[color];
};
