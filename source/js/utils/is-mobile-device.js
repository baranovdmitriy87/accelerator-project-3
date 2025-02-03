const mobileKeywords = [
  'iPhone', 'iPad', 'iPod', 'Android', 'webOS', 'BlackBerry',
  'Windows Phone', 'Opera Mini', 'IEMobile', 'Mobile', 'Tablet'
];

const isMobileDevice = () => mobileKeywords.some((keyword) => navigator.userAgent.includes(keyword));

export {isMobileDevice};
