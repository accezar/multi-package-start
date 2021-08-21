/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
const Webstore = {
  theme: {
    colors: {
      hiContrast: 'hsl(206,10%,5%)',
      loContrast: 'hsl(206,22%,99%)',
      canvas: 'hsl(0,0%,100%)',

      // brand
      brandPrimary: '#F58220',
      brandSecondary: '#004ABE',

      // feedbacks
      success: '#207F33',
      error: '#D91620',
      warning: '#F5EB64',
      info: '#0096CD',

      // social
      facebook: '#3C5A9A',
      instagram: '#9c429f',
      youtube: '#FF0000',
      linkedin: '#0077b5',
      pinterest: '#CB2027',
      twitter: '#1D9BF0',

      // mono
      neutral: '#F9F9F9',
      white: '#ffffff',
      black: '#000000',

      // Scales
      primary1: '#FFAA50',
      primary2: '#F58220',
      primary3: '#DD8438',
      primary4: '#DD3906',

      secondary1: '#A3D5FF',
      secondary2: '#4B9DE4',
      secondary3: '#1B78CD',
      secondary3RGB: '27,120,205',
      secondary4: '#004ABE',

      // with opacity
      secondary2Opacity: 'rgba(75, 157, 228, 0.1)',

      success1: '#2AA843',
      success2: '#207F33',
      success3: '#165623',
      success4: '#0B2E12',

      danger1: '#FF4751',
      danger2: '#D91620',
      danger3: '#A91717',
      danger4: '#7C1111',

      warning1: '#F9F39F',
      warning2: '#F5EB64',
      warning3: '#E6D80F',
      warning4: '#726B08',

      info1: '#85C5DD',
      info2: '#40ADD5',
      info3: '#0096CD',
      info4: '#005E80',

      neutral1: '#F9F9F9',
      neutral2: '#E6E6E6',
      neutral3: '#CCCCCC',
      neutral4: '#747474',
      neutral5: '#333333',
      neutral6: '#1F1F1F',

      // scopped - aliases
      defaultBorderColor: '$neutral4',

      // Refactor and check
      yellow100: 'hsl(42,100%,98%)',
      yellow200: 'hsl(50,98%,95%)',
      yellow300: 'hsl(52,92%,86%)',
      yellow400: 'hsl(52,92%,74%)',
      yellow500: 'hsl(52,100%,49%)',
      yellow600: 'hsl(42,54%,36%)',

      purple100: 'hsl(252,100%,99%)',
      purple200: 'hsl(252,100%,98%)',
      purple300: 'hsl(252,100%,94%)',
      purple400: 'hsl(252,75%,84%)',
      purple500: 'hsl(252,78%,60%)',
      purple600: 'hsl(252,80%,53%)',

      // hover
      secondaryHover0: 'rgba(75, 157, 228, 0.1)',
    },

    fonts: {
      untitled: 'Open Sans, sans-serif',
      mono: 'Söhne Mono, menlo, monospace',
    },

    space: {
      none: '0px',
      small1: '4px',
      small2: '8px',
      small3: '12px',
      medium1: '16px',
      medium2: '20px',
      medium3: '24px',
      large1: '32px',
      large2: '40px',
      large3: '48px',
      xlarge1: '64px',
      xlarge2: '80px',
      xlarge3: '96px',
      gridGutter: '24px',
      gridMobileGutter: '16px',
    },

    sizes: {
      small1: '4px',
      small2: '8px',
      small3: '12px',
      medium1: '16px',
      medium2: '20px',
      medium3: '24px',
      large1: '32px',
      large2: '40px',
      large3: '48px',
      xlarge1: '64px',
      xlarge2: '80px',
      xlarge3: '96px',
      gridColumns: '12',
    },

    fontSizes: {
      bodyXSmall: '12px',
      bodySmall: '14px',
      bodyMedium: '16px',
      h5: '18px',
      h4: '20px',
      h3: '24px',
      h2: '28px',
      h1: '32px',
      hero: '48px',
      mobileHero: '36px',
      mobileH1: '28px',
      mobileH2: '24px',
      mobileH3: '22px',
      mobileH4: '20px',
      mobileH5: '18px',
    },

    fontWeights: {
      light: '300',
      regular: '400',
      semibold: '600',
      bold: '700',
    },

    letterSpacings: {
      none: '0px',
      small: '0.4px',
      medium: '1.2px',
      large: '2px',
    },

    radii: {
      none: '0px',
      small: '4px',
      medium: '8px',
      large: '16px',
      xlarge: '28px',
      circle: '50%',
    },

    shadows: {
      focus: `0px 0px 0px 2px $colors$white, 0px 0px 2px 4px $colors$info`,
      shadowNone: 'none',
      shadowXSmall: '0 1px 4px 0 rgba(0,0,0,0.12)',
      shadowSmall: '0 2px 8px 0 rgba(0,0,0,0.12)',
      shadowMedium: '0 4px 16px 0 rgba(0,0,0,0.12)',
      shadowLarge: '0 6px 24px 0 rgba(0,0,0,0.12)',
    },

    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      max: '9999999999',
    },
  },

  media: {
    sm: '(min-width: 320px)',
    md: '(min-width: 700px)',
    lg: '(min-width: 1224px)',
  },

  utils: {
    p: () => (value: any) => ({
      padding: value,
    }),
    pt: () => (value: any) => ({
      paddingTop: value,
    }),
    pr: () => (value: any) => ({
      paddingRight: value,
    }),
    pb: () => (value: any) => ({
      paddingBottom: value,
    }),
    pl: () => (value: any) => ({
      paddingLeft: value,
    }),
    px: () => (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: () => (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: () => (value: any) => ({
      margin: value,
    }),
    mt: () => (value: any) => ({
      marginTop: value,
    }),
    mr: () => (value: any) => ({
      marginRight: value,
    }),
    mb: () => (value: any) => ({
      marginBottom: value,
    }),
    ml: () => (value: any) => ({
      marginLeft: value,
    }),
    mx: () => (value: any) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: () => (value: any) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: () => (value: any) => ({ textAlign: value }),

    fd: () => (value: any) => ({ flexDirection: value }),
    fw: () => (value: any) => ({ flexWrap: value }),

    ai: () => (value: any) => ({ alignItems: value }),
    ac: () => (value: any) => ({ alignContent: value }),
    jc: () => (value: any) => ({ justifyContent: value }),
    as: () => (value: any) => ({ alignSelf: value }),
    fg: () => (value: any) => ({ flexGrow: value }),
    fs: () => (value: any) => ({ flexShrink: value }),
    fb: () => (value: any) => ({ flexBasis: value }),

    bc: (themeConf: any) => (value: keyof typeof themeConf['theme']['colors'] | any) => ({
      backgroundColor: value,
    }),

    br: (themeConf: any) => (value: keyof typeof themeConf['theme']['radii'] | any) => ({
      borderRadius: value,
    }),

    btrr: (themeConf: any) => (value: keyof typeof themeConf['theme']['radii'] | any) => ({
      borderTopRightRadius: value,
    }),

    bbrr: (themeConf: any) => (value: keyof typeof themeConf['theme']['radii'] | any) => ({
      borderBottomRightRadius: value,
    }),

    bblr: (themeConf: any) => (value: keyof typeof themeConf['theme']['radii'] | any) => ({
      borderBottomLeftRadius: value,
    }),

    btlr: (themeConf: any) => (value: keyof typeof themeConf['theme']['radii'] | any) => ({
      borderTopLeftRadius: value,
    }),

    bs: () => (value: any) => ({ boxShadow: value }),

    lh: () => (value: any) => ({ lineHeight: value }),

    ox: () => (value: any) => ({ overflowX: value }),
    oy: () => (value: any) => ({ overflowY: value }),

    pe: () => (value: any) => ({ pointerEvents: value }),
    us: () => (value: any) => ({ userSelect: value }),

    size: (themeConf: any) => (value: keyof typeof themeConf['theme']['sizes'] | any) => ({
      width: value,
      height: value,
    }),

    linearGradient: () => (value: any) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
  },
};

export default Webstore;
