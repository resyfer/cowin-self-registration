![img](https://img.shields.io/badge/NodeJS-16.3.0-brightgreen) ![img](https://img.shields.io/badge/License-GPL%203.0-blueviolet) ![img](https://img.shields.io/badge/Status-Stopped%20development-red)

Development has been abandoned because of this [issue](https://github.com/resyfer/cowin-self-registration/issues/2)

# cowin-self-registration

My NodeJS bot for checking slots and registering avaiable slot for COVID-19 vaccines on [CoWin](https://www.cowin.gov.in/home) Portal.

Dependencies:
NPM Packages : ![img](https://img.shields.io/badge/node--fetch-2.6.1-blue) ![img](https://img.shields.io/badge/readline--sync-1.4.10-blue)

### TODO:
- [X] Connect API, GET data
- [X] Repeated Calls to API (within limit)
- [ ] Save config inputs for future

## Development

- Setup
```
git clone https://github.com/resyfer/cowin-self-registration.git
cd "cowin-self-registration"
npm i
echo "{}" > config.json
```

- Make Bot go live
```
npm start
```
