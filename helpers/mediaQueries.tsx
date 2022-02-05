export const sizes = {
  mobile: 360,
  smallTablet: 768,
  largeTablet: 1024,
  desktop: 1350,
};

export const mq = {
  sTablet: `@media only screen and (min-width: ${sizes.smallTablet}px)`,
  lTablet: `@media only screen and (min-width: ${sizes.largeTablet}px)`,
  desktop: `@media only screen and (min-width: ${sizes.desktop}px)`,
  mobile: `@media onyly screen and (min-width: ${sizes.mobile})`,
};
