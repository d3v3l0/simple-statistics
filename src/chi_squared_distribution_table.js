/* @flow */

/**
 * **Percentage Points of the χ2 (Chi-Squared) Distribution**
 *
 * The [χ2 (Chi-Squared) Distribution](http://en.wikipedia.org/wiki/Chi-squared_distribution) is used in the common
 * chi-squared tests for goodness of fit of an observed distribution to a theoretical one, the independence of two
 * criteria of classification of qualitative data, and in confidence interval estimation for a population standard
 * deviation of a normal distribution from a sample standard deviation.
 *
 * Values from Appendix 1, Table III of William W. Hines & Douglas C. Montgomery, "Probability and Statistics in
 * Engineering and Management Science", Wiley (1980).
 */
export var chiSquaredDistributionTable = {
  '1': {
    '0.995': 0,
    '0.99': 0,
    '0.975': 0,
    '0.95': 0,
    '0.9': 0.02,
    '0.5': 0.45,
    '0.1': 2.71,
    '0.05': 3.84,
    '0.025': 5.02,
    '0.01': 6.63,
    '0.005': 7.88
  },
  '2': {
    '0.995': 0.01,
    '0.99': 0.02,
    '0.975': 0.05,
    '0.95': 0.1,
    '0.9': 0.21,
    '0.5': 1.39,
    '0.1': 4.61,
    '0.05': 5.99,
    '0.025': 7.38,
    '0.01': 9.21,
    '0.005': 10.6
  },
  '3': {
    '0.995': 0.07,
    '0.99': 0.11,
    '0.975': 0.22,
    '0.95': 0.35,
    '0.9': 0.58,
    '0.5': 2.37,
    '0.1': 6.25,
    '0.05': 7.81,
    '0.025': 9.35,
    '0.01': 11.34,
    '0.005': 12.84
  },
  '4': {
    '0.995': 0.21,
    '0.99': 0.3,
    '0.975': 0.48,
    '0.95': 0.71,
    '0.9': 1.06,
    '0.5': 3.36,
    '0.1': 7.78,
    '0.05': 9.49,
    '0.025': 11.14,
    '0.01': 13.28,
    '0.005': 14.86
  },
  '5': {
    '0.995': 0.41,
    '0.99': 0.55,
    '0.975': 0.83,
    '0.95': 1.15,
    '0.9': 1.61,
    '0.5': 4.35,
    '0.1': 9.24,
    '0.05': 11.07,
    '0.025': 12.83,
    '0.01': 15.09,
    '0.005': 16.75
  },
  '6': {
    '0.995': 0.68,
    '0.99': 0.87,
    '0.975': 1.24,
    '0.95': 1.64,
    '0.9': 2.2,
    '0.5': 5.35,
    '0.1': 10.65,
    '0.05': 12.59,
    '0.025': 14.45,
    '0.01': 16.81,
    '0.005': 18.55
  },
  '7': {
    '0.995': 0.99,
    '0.99': 1.25,
    '0.975': 1.69,
    '0.95': 2.17,
    '0.9': 2.83,
    '0.5': 6.35,
    '0.1': 12.02,
    '0.05': 14.07,
    '0.025': 16.01,
    '0.01': 18.48,
    '0.005': 20.28
  },
  '8': {
    '0.995': 1.34,
    '0.99': 1.65,
    '0.975': 2.18,
    '0.95': 2.73,
    '0.9': 3.49,
    '0.5': 7.34,
    '0.1': 13.36,
    '0.05': 15.51,
    '0.025': 17.53,
    '0.01': 20.09,
    '0.005': 21.96
  },
  '9': {
    '0.995': 1.73,
    '0.99': 2.09,
    '0.975': 2.7,
    '0.95': 3.33,
    '0.9': 4.17,
    '0.5': 8.34,
    '0.1': 14.68,
    '0.05': 16.92,
    '0.025': 19.02,
    '0.01': 21.67,
    '0.005': 23.59
  },
  '10': {
    '0.995': 2.16,
    '0.99': 2.56,
    '0.975': 3.25,
    '0.95': 3.94,
    '0.9': 4.87,
    '0.5': 9.34,
    '0.1': 15.99,
    '0.05': 18.31,
    '0.025': 20.48,
    '0.01': 23.21,
    '0.005': 25.19
  },
  '11': {
    '0.995': 2.6,
    '0.99': 3.05,
    '0.975': 3.82,
    '0.95': 4.57,
    '0.9': 5.58,
    '0.5': 10.34,
    '0.1': 17.28,
    '0.05': 19.68,
    '0.025': 21.92,
    '0.01': 24.72,
    '0.005': 26.76
  },
  '12': {
    '0.995': 3.07,
    '0.99': 3.57,
    '0.975': 4.4,
    '0.95': 5.23,
    '0.9': 6.3,
    '0.5': 11.34,
    '0.1': 18.55,
    '0.05': 21.03,
    '0.025': 23.34,
    '0.01': 26.22,
    '0.005': 28.3
  },
  '13': {
    '0.995': 3.57,
    '0.99': 4.11,
    '0.975': 5.01,
    '0.95': 5.89,
    '0.9': 7.04,
    '0.5': 12.34,
    '0.1': 19.81,
    '0.05': 22.36,
    '0.025': 24.74,
    '0.01': 27.69,
    '0.005': 29.82
  },
  '14': {
    '0.995': 4.07,
    '0.99': 4.66,
    '0.975': 5.63,
    '0.95': 6.57,
    '0.9': 7.79,
    '0.5': 13.34,
    '0.1': 21.06,
    '0.05': 23.68,
    '0.025': 26.12,
    '0.01': 29.14,
    '0.005': 31.32
  },
  '15': {
    '0.995': 4.6,
    '0.99': 5.23,
    '0.975': 6.27,
    '0.95': 7.26,
    '0.9': 8.55,
    '0.5': 14.34,
    '0.1': 22.31,
    '0.05': 25,
    '0.025': 27.49,
    '0.01': 30.58,
    '0.005': 32.8
  },
  '16': {
    '0.995': 5.14,
    '0.99': 5.81,
    '0.975': 6.91,
    '0.95': 7.96,
    '0.9': 9.31,
    '0.5': 15.34,
    '0.1': 23.54,
    '0.05': 26.3,
    '0.025': 28.85,
    '0.01': 32,
    '0.005': 34.27
  },
  '17': {
    '0.995': 5.7,
    '0.99': 6.41,
    '0.975': 7.56,
    '0.95': 8.67,
    '0.9': 10.09,
    '0.5': 16.34,
    '0.1': 24.77,
    '0.05': 27.59,
    '0.025': 30.19,
    '0.01': 33.41,
    '0.005': 35.72
  },
  '18': {
    '0.995': 6.26,
    '0.99': 7.01,
    '0.975': 8.23,
    '0.95': 9.39,
    '0.9': 10.87,
    '0.5': 17.34,
    '0.1': 25.99,
    '0.05': 28.87,
    '0.025': 31.53,
    '0.01': 34.81,
    '0.005': 37.16
  },
  '19': {
    '0.995': 6.84,
    '0.99': 7.63,
    '0.975': 8.91,
    '0.95': 10.12,
    '0.9': 11.65,
    '0.5': 18.34,
    '0.1': 27.2,
    '0.05': 30.14,
    '0.025': 32.85,
    '0.01': 36.19,
    '0.005': 38.58
  },
  '20': {
    '0.995': 7.43,
    '0.99': 8.26,
    '0.975': 9.59,
    '0.95': 10.85,
    '0.9': 12.44,
    '0.5': 19.34,
    '0.1': 28.41,
    '0.05': 31.41,
    '0.025': 34.17,
    '0.01': 37.57,
    '0.005': 40
  },
  '21': {
    '0.995': 8.03,
    '0.99': 8.9,
    '0.975': 10.28,
    '0.95': 11.59,
    '0.9': 13.24,
    '0.5': 20.34,
    '0.1': 29.62,
    '0.05': 32.67,
    '0.025': 35.48,
    '0.01': 38.93,
    '0.005': 41.4
  },
  '22': {
    '0.995': 8.64,
    '0.99': 9.54,
    '0.975': 10.98,
    '0.95': 12.34,
    '0.9': 14.04,
    '0.5': 21.34,
    '0.1': 30.81,
    '0.05': 33.92,
    '0.025': 36.78,
    '0.01': 40.29,
    '0.005': 42.8
  },
  '23': {
    '0.995': 9.26,
    '0.99': 10.2,
    '0.975': 11.69,
    '0.95': 13.09,
    '0.9': 14.85,
    '0.5': 22.34,
    '0.1': 32.01,
    '0.05': 35.17,
    '0.025': 38.08,
    '0.01': 41.64,
    '0.005': 44.18
  },
  '24': {
    '0.995': 9.89,
    '0.99': 10.86,
    '0.975': 12.4,
    '0.95': 13.85,
    '0.9': 15.66,
    '0.5': 23.34,
    '0.1': 33.2,
    '0.05': 36.42,
    '0.025': 39.36,
    '0.01': 42.98,
    '0.005': 45.56
  },
  '25': {
    '0.995': 10.52,
    '0.99': 11.52,
    '0.975': 13.12,
    '0.95': 14.61,
    '0.9': 16.47,
    '0.5': 24.34,
    '0.1': 34.28,
    '0.05': 37.65,
    '0.025': 40.65,
    '0.01': 44.31,
    '0.005': 46.93
  },
  '26': {
    '0.995': 11.16,
    '0.99': 12.2,
    '0.975': 13.84,
    '0.95': 15.38,
    '0.9': 17.29,
    '0.5': 25.34,
    '0.1': 35.56,
    '0.05': 38.89,
    '0.025': 41.92,
    '0.01': 45.64,
    '0.005': 48.29
  },
  '27': {
    '0.995': 11.81,
    '0.99': 12.88,
    '0.975': 14.57,
    '0.95': 16.15,
    '0.9': 18.11,
    '0.5': 26.34,
    '0.1': 36.74,
    '0.05': 40.11,
    '0.025': 43.19,
    '0.01': 46.96,
    '0.005': 49.65
  },
  '28': {
    '0.995': 12.46,
    '0.99': 13.57,
    '0.975': 15.31,
    '0.95': 16.93,
    '0.9': 18.94,
    '0.5': 27.34,
    '0.1': 37.92,
    '0.05': 41.34,
    '0.025': 44.46,
    '0.01': 48.28,
    '0.005': 50.99
  },
  '29': {
    '0.995': 13.12,
    '0.99': 14.26,
    '0.975': 16.05,
    '0.95': 17.71,
    '0.9': 19.77,
    '0.5': 28.34,
    '0.1': 39.09,
    '0.05': 42.56,
    '0.025': 45.72,
    '0.01': 49.59,
    '0.005': 52.34
  },
  '30': {
    '0.995': 13.79,
    '0.99': 14.95,
    '0.975': 16.79,
    '0.95': 18.49,
    '0.9': 20.6,
    '0.5': 29.34,
    '0.1': 40.26,
    '0.05': 43.77,
    '0.025': 46.98,
    '0.01': 50.89,
    '0.005': 53.67
  },
  '40': {
    '0.995': 20.71,
    '0.99': 22.16,
    '0.975': 24.43,
    '0.95': 26.51,
    '0.9': 29.05,
    '0.5': 39.34,
    '0.1': 51.81,
    '0.05': 55.76,
    '0.025': 59.34,
    '0.01': 63.69,
    '0.005': 66.77
  },
  '50': {
    '0.995': 27.99,
    '0.99': 29.71,
    '0.975': 32.36,
    '0.95': 34.76,
    '0.9': 37.69,
    '0.5': 49.33,
    '0.1': 63.17,
    '0.05': 67.5,
    '0.025': 71.42,
    '0.01': 76.15,
    '0.005': 79.49
  },
  '60': {
    '0.995': 35.53,
    '0.99': 37.48,
    '0.975': 40.48,
    '0.95': 43.19,
    '0.9': 46.46,
    '0.5': 59.33,
    '0.1': 74.4,
    '0.05': 79.08,
    '0.025': 83.3,
    '0.01': 88.38,
    '0.005': 91.95
  },
  '70': {
    '0.995': 43.28,
    '0.99': 45.44,
    '0.975': 48.76,
    '0.95': 51.74,
    '0.9': 55.33,
    '0.5': 69.33,
    '0.1': 85.53,
    '0.05': 90.53,
    '0.025': 95.02,
    '0.01': 100.42,
    '0.005': 104.22
  },
  '80': {
    '0.995': 51.17,
    '0.99': 53.54,
    '0.975': 57.15,
    '0.95': 60.39,
    '0.9': 64.28,
    '0.5': 79.33,
    '0.1': 96.58,
    '0.05': 101.88,
    '0.025': 106.63,
    '0.01': 112.33,
    '0.005': 116.32
  },
  '90': {
    '0.995': 59.2,
    '0.99': 61.75,
    '0.975': 65.65,
    '0.95': 69.13,
    '0.9': 73.29,
    '0.5': 89.33,
    '0.1': 107.57,
    '0.05': 113.14,
    '0.025': 118.14,
    '0.01': 124.12,
    '0.005': 128.3
  },
  '100': {
    '0.995': 67.33,
    '0.99': 70.06,
    '0.975': 74.22,
    '0.95': 77.93,
    '0.9': 82.36,
    '0.5': 99.33,
    '0.1': 118.5,
    '0.05': 124.34,
    '0.025': 129.56,
    '0.01': 135.81,
    '0.005': 140.17
  }
};
