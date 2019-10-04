import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer CIozgnVskMIXGHiw1iN2ENUiNfcNiLp7zDns0ixITTV4qovPT7ItGyqpCNHtP5E3U0JdWaNhEkIf2Ncj7igzbcFyHxloO2KlrAR4rf_fFcsk22F_LaMUENtzFQ2WXXYx'
  }
});
